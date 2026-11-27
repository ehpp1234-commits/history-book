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
    .replace(/[\s·.,:;!?'"‘’“”()[\]{}<>~\-_/\\|]+/g, '');
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
