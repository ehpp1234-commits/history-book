import { useState, useMemo } from 'react';
import type { Era } from '../data/types';

export function useSearch(eras: Era[]) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCards = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      // No search query, return all cards from all eras
      return eras.flatMap(era => 
        era.cards?.map(card => ({ ...card, eraId: era.id })) || []
      );
    }

    // Filter cards based on search query
    return eras.flatMap(era => 
      (era.cards || [])
        .filter(card => {
          const searchableText = [
            card.title,
            card.year?.toString(),
            ...(card.tags || []),
            card.description
          ].join(' ').toLowerCase();
          
          return searchableText.includes(query);
        })
        .map(card => ({ ...card, eraId: era.id }))
    );
  }, [eras, searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    filteredCards
  };
}
