import { useState, useMemo } from 'react';
import type { Era, CardData } from '../data/types';

export function useSearch(eras: Era[]) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCards = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    
    // Collect all cards from all eras
    const allCards: CardData[] = eras.flatMap(era => 
      (era.cards || []).map(card => ({ 
        ...card, 
        eraId: era.id 
      }))
    );

    if (!query) {
      return allCards;
    }

    // Filter cards based on search query
    return allCards.filter(card => {
      const searchableText = [
        card.title,
        card.year,
        card.description,
        ...(card.tags || [])
      ].join(' ').toLowerCase();
      
      return searchableText.includes(query);
    });
  }, [eras, searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    filteredCards
  };
}
