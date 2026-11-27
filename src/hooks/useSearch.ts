import { useState, useMemo } from 'react';
import type { SummaryCard } from '../data/types';

export function useSearch(cards: SummaryCard[]) {
  const [searchQuery, setSearchQuery] = useState('');

  const matchedCards = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return new Set<string>();

    return new Set(
      cards
        .filter(card => {
          const searchText = [
            card.title,
            card.yearLabel,
            ...card.keywords,
            card.detail.background,
            card.detail.development,
            card.detail.result,
            card.detail.examPoints
          ].join(' ').toLowerCase();

          return searchText.includes(query);
        })
        .map(card => card.id)
    );
  }, [cards, searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    matchedCards,
    hasMatches: matchedCards.size > 0,
    matchCount: matchedCards.size
  };
}