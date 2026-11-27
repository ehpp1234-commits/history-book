import type { CardData, Era } from './types';

/** '내 북마크 문제만' 범위를 선택하는 데 필요한 최소 북마크 수 */
export const BOOKMARK_MIN = 4;
/** 한 문제에 출제되는 사건 수 */
export const QUIZ_SIZE = 4;

export interface QuizEvent {
  card: CardData;
  /** 정렬 기준이 되는 시작 연도 (B.C.는 음수) */
  start: number;
  /** 범위 연도(예: 1592~1598년)의 끝 연도. 단일 연도면 start와 같음 */
  end: number;
}

/**
 * 카드의 year 문자열을 [start, end] 기간으로 바꾼다. (B.C.는 음수)
 * 시기가 폭으로 주어진 값도 기간으로 취급하므로, 퀴즈는 기간이 겹치지 않는 사건만 함께 출제한다.
 * 허용: "1392년", "1919년 3월 1일", "1592~1598년", "1700년대", "18세기", "17~18세기",
 *       "B.C. 108년", "B.C. 2,333년경", "B.C. 2,000~1,500년경", "B.C. 5세기경"
 * 제외: "1800년~", "B.C. 1세기~A.D. 3세기" 처럼 끝이 열려 있거나 B.C./A.D.를 넘나드는 값
 */
export function parseQuizYear(yearStr: string | undefined | null): { start: number; end: number } | null {
  if (typeof yearStr !== 'string') return null;
  const s = yearStr.trim();
  const num = (v: string) => parseInt(v.replace(/,/g, ''), 10);

  let m = s.match(/^B\.C\.\s*([\d,]+)~([\d,]+)년(?:경)?$/);
  if (m) {
    const a = num(m[1]);
    const b = num(m[2]);
    return a >= b ? { start: -a, end: -b } : null;
  }

  m = s.match(/^B\.C\.\s*([\d,]+)년(?:경)?$/);
  if (m) {
    const n = num(m[1]);
    return Number.isFinite(n) ? { start: -n, end: -n } : null;
  }

  m = s.match(/^B\.C\.\s*(\d+)세기(?:경)?$/);
  if (m) {
    const n = num(m[1]);
    return n >= 1 ? { start: -n * 100, end: -((n - 1) * 100 + 1) } : null;
  }

  m = s.match(/^(\d+)세기(?:\s*초|\s*중반|\s*말)?$/);
  if (m) {
    const n = num(m[1]);
    return n >= 1 ? { start: (n - 1) * 100 + 1, end: n * 100 } : null;
  }

  m = s.match(/^(\d+)~(\d+)세기$/);
  if (m) {
    const a = num(m[1]);
    const b = num(m[2]);
    return a >= 1 && b >= a ? { start: (a - 1) * 100 + 1, end: b * 100 } : null;
  }

  m = s.match(/^(\d{3,4})년대$/);
  if (m) {
    const y = num(m[1]);
    return { start: y, end: y % 100 === 0 ? y + 99 : y + 9 };
  }

  m = s.match(/^(\d{1,4})년(?:\s*\d{1,2}월(?:\s*\d{1,2}일)?)?$/);
  if (m) {
    const y = parseInt(m[1], 10);
    return { start: y, end: y };
  }

  m = s.match(/^(\d{1,4})~(\d{1,4})년$/);
  if (m) {
    const a = parseInt(m[1], 10);
    const b = parseInt(m[2], 10);
    return b >= a ? { start: a, end: b } : null;
  }

  return null;
}

/**
 * 출제 범위에 해당하는 사건 목록을 만든다.
 * scope: 'all' | 'bookmarks' | 시대 id
 */
export function buildQuizPool(
  eras: Era[],
  scope: string,
  bookmarkedIds: ReadonlySet<string>
): QuizEvent[] {
  const pool: QuizEvent[] = [];
  for (const era of eras) {
    if (scope !== 'all' && scope !== 'bookmarks' && era.id !== scope) continue;
    for (const card of era.cards ?? []) {
      if (scope === 'bookmarks' && !bookmarkedIds.has(card.id)) continue;
      const parsed = parseQuizYear(card.year);
      if (!parsed) continue;
      pool.push({ card, start: parsed.start, end: parsed.end });
    }
  }
  return pool;
}

function shuffle<T>(items: readonly T[], rng: () => number): T[] {
  const a = items.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** 두 사건의 기간이 겹치지 않아 순서가 분명한지 */
function isClearlyOrdered(a: QuizEvent, b: QuizEvent): boolean {
  return a.end < b.start || b.end < a.start;
}

/**
 * 서로 연도가 다르고 기간이 겹치지 않는 사건 n개를 무작위로 뽑아
 * 시간순(정답 순서)으로 정렬해 돌려준다. 뽑을 수 없으면 null.
 */
export function drawQuestion(
  pool: readonly QuizEvent[],
  rng: () => number = Math.random,
  size: number = QUIZ_SIZE
): QuizEvent[] | null {
  if (pool.length < size) return null;

  for (let attempt = 0; attempt < 40; attempt++) {
    const picked: QuizEvent[] = [];
    for (const candidate of shuffle(pool, rng)) {
      if (picked.some(p => p.card.title === candidate.card.title)) continue;
      if (picked.every(p => isClearlyOrdered(p, candidate))) {
        picked.push(candidate);
        if (picked.length === size) {
          return picked.sort((a, b) => a.start - b.start);
        }
      }
    }
  }
  return null;
}

/** 정답 순서와 다른 순서가 되도록 섞는다 */
export function shuffleForDisplay<T>(answer: readonly T[], rng: () => number = Math.random): T[] {
  if (answer.length < 2) return answer.slice();
  let display = shuffle(answer, rng);
  for (let i = 0; i < 10 && display.every((item, idx) => item === answer[idx]); i++) {
    display = shuffle(answer, rng);
  }
  return display;
}

/** 해설용: 설명의 첫 문장을 적당한 길이로 자른다 */
export function firstSentence(description: string | undefined, max = 90): string {
  const text = (description ?? '').trim();
  if (!text) return '';
  const idx = text.indexOf('. ');
  const sentence = idx > 0 ? text.slice(0, idx + 1) : text;
  return sentence.length > max ? sentence.slice(0, max - 1) + '…' : sentence;
}
