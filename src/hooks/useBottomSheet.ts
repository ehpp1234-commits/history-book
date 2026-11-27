import { useState, useCallback } from 'react';
import type { CardData } from '../data/types';

export function useBottomSheet() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  const openSheet = useCallback((card: CardData) => {
    setSelectedCard(card);
    setIsOpen(true);
  }, []);

  const closeSheet = useCallback(() => {
    setIsOpen(false);
    setTimeout(() => setSelectedCard(null), 300);
  }, []);

  return {
    isOpen,
    selectedCard,
    openSheet,
    closeSheet
  };
}
