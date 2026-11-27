import { useState, useMemo } from 'react';
import type { Era, CardData } from '../data/types';
import { buildCardSearchText, matchesTokens, tokenizeQuery } from '../data/searchUtils';

export function useSearch(eras: Era[]) {
  const [searchQuery, setSearchQuery] = useState('');

  // 카드마다 검색 대상 텍스트를 한 번만 만들어 둔다 (eras가 바뀔 때만 다시 계산)
  const index = useMemo(
    () =>
      eras.flatMap(era =>
        (era.cards || []).map(card => ({
          card: { ...card, eraId: era.id } as CardData,
          text: buildCardSearchText(card, era),
        }))
      ),
    [eras]
  );

  const filteredCards = useMemo(() => {
    const tokens = tokenizeQuery(searchQuery);

    if (tokens.length === 0) {
      return index.map(entry => entry.card);
    }

    // 제목·연도·설명·키워드·연관 사건·이미지 설명·시대 이름을 대소문자/공백/구두점 무시하고 검색
    return index.filter(entry => matchesTokens(entry.text, tokens)).map(entry => entry.card);
  }, [index, searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    filteredCards
  };
}
