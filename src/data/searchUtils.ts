import type { CardData, Era, KingData } from './types';

/**
 * 검색용 정규화: 소문자 + 공백·구두점 제거.
 * "도시락 폭탄" = "도시락폭탄", "3·1 운동" = "3.1운동" = "31운동", "K-pop" = "kpop"
 */
export function normalizeSearchText(text: string | null | undefined): string {
  if (typeof text !== 'string') return '';
  return text
    .normalize('NFC')
    .toLowerCase()
    .replace(/[\s·.,:;!?#'"‘’“”()[\]{}<>~\-_/\\|]+/g, '');
}

/**
 * text 안에서 검색어와 일치하는 구간 [start, end) 목록을 돌려준다.
 * normalizeSearchText와 같은 규칙(대소문자·공백·구두점 무시)으로 비교하므로
 * "도시락폭탄"으로 검색해도 "도시락 폭탄" 전체가 한 구간으로 잡힌다.
 * 정규식을 만들지 않고 문자열 위치만 계산하므로 ".", "*", "+", "?" 같은 입력도 안전하다.
 */
export function findHighlightRanges(
  text: string | null | undefined,
  query: string | null | undefined
): Array<[number, number]> {
  if (typeof text !== 'string' || text.length === 0) return [];
  const tokens = tokenizeQuery(query);
  if (tokens.length === 0) return [];

  // 정규화된 문자열의 각 글자가 원문 어디에서 왔는지 기록
  let normalized = '';
  const starts: number[] = [];
  const ends: number[] = [];
  let offset = 0;
  for (const ch of text) {
    const piece = normalizeSearchText(ch);
    for (let k = 0; k < piece.length; k++) {
      normalized += piece[k];
      starts.push(offset);
      ends.push(offset + ch.length);
    }
    offset += ch.length;
  }
  if (normalized.length === 0) return [];

  const found: Array<[number, number]> = [];
  for (const token of tokens) {
    let from = 0;
    while (from <= normalized.length - token.length) {
      const idx = normalized.indexOf(token, from);
      if (idx < 0) break;
      found.push([starts[idx], ends[idx + token.length - 1]]);
      from = idx + token.length;
    }
  }
  if (found.length === 0) return [];

  // 겹치거나 맞닿은 구간, 그리고 사이에 공백·구두점만 있는 구간을 하나로 합치기
  // (예: 검색어 "도시락 폭탄" → 본문 "도시락 폭탄"을 한 덩어리로 칠함)
  found.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const merged: Array<[number, number]> = [[found[0][0], found[0][1]]];
  for (let i = 1; i < found.length; i++) {
    const last = merged[merged.length - 1];
    const touching =
      found[i][0] <= last[1] || normalizeSearchText(text.slice(last[1], found[i][0])) === '';
    if (touching) last[1] = Math.max(last[1], found[i][1]);
    else merged.push([found[i][0], found[i][1]]);
  }
  return merged;
}

/**
 * 목록 미리보기용: 긴 텍스트에서 첫 일치 위치가 앞부분을 벗어나면
 * 일치 위치 근처부터 보여 주도록 앞을 잘라 "…"를 붙인다. (뒤쪽은 CSS가 줄 수로 자름)
 */
export function snippetAround(
  text: string | null | undefined,
  query: string | null | undefined,
  maxLen = 110,
  lead = 20
): string {
  if (typeof text !== 'string') return '';
  if (text.length <= maxLen) return text;
  const ranges = findHighlightRanges(text, query);
  if (ranges.length === 0) return text;
  const start = Math.max(0, ranges[0][0] - lead);
  return start === 0 ? text : '…' + text.slice(start);
}

/** 목록 칩용: 검색어와 일치하는 키워드를 앞에 두고 최대 limit개만 고른다 */
export function pickTagsForQuery(
  tags: readonly string[] | undefined,
  query: string | null | undefined,
  limit = 3
): string[] {
  const list = (tags ?? []).filter(tag => typeof tag === 'string' && tag.length > 0);
  if (list.length <= limit) return list;
  const matched = list.filter(tag => findHighlightRanges(tag, query).length > 0);
  const rest = list.filter(tag => !matched.includes(tag));
  return [...matched, ...rest].slice(0, limit);
}

/**
 * 검색어를 공백 기준 단어로 나눠 각각 정규화한다.
 * 모든 단어가 들어 있어야(AND) 검색 결과로 인정한다. 단어 순서와 위치는 상관없다.
 */
export function tokenizeQuery(query: string | null | undefined): string[] {
  if (typeof query !== 'string') return [];
  return query
    .split(/\s+/)
    .map(normalizeSearchText)
    .filter(token => token.length > 0);
}

export function matchesTokens(normalizedText: string, tokens: readonly string[]): boolean {
  if (tokens.length === 0) return false;
  return tokens.every(token => normalizedText.includes(token));
}

/** 카드 한 장의 검색 대상 텍스트(정규화됨): 제목·연도·설명·키워드·연관 사건·이미지 설명·시대 정보 */
export function buildCardSearchText(card: CardData, era?: Era): string {
  const parts: Array<string | undefined> = [
    card.title,
    card.year,
    card.description,
    ...(card.tags ?? []),
    ...(card.relatedEvents ?? []),
    card.imageCaption,
    era?.name,
    era?.periodLabel,
    era?.watermarkLabel?.ko,
    era?.watermarkLabel?.en,
  ];
  return normalizeSearchText(parts.filter(Boolean).join(' '));
}

/** 왕 한 명의 검색 대상 텍스트(정규화됨) */
export function buildKingSearchText(king: KingData): string {
  const parts: Array<string | undefined> = [
    king.name,
    king.dynasty,
    king.reignStart,
    king.reignEnd,
    king.description,
    ...(king.keyAchievements ?? []),
    ...(king.institutions ?? []),
    ...(king.books ?? []),
    ...(king.majorEvents ?? []),
    ...(king.examKeywords ?? []),
  ];
  return normalizeSearchText(parts.filter(item => item != null).join(' '));
}
