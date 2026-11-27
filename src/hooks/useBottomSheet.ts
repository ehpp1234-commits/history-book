import { useState, useCallback } from 'react';
import type { SummaryCard } from '../data/types';

export function useBottomSheet() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<SummaryCard | null>(null);

  const openSheet = useCallback((card: SummaryCard) => {
    setSelectedCard(card);
    setIsOpen(true);
  }, []);

  const closeSheet = useCallback(() => {
    setIsOpen(false);
    // Keep card data for exit animation
    setTimeout(() => setSelectedCard(null), 300);
  }, []);

  return {
    isOpen,
    selectedCard,
    openSheet,
    closeSheet
  };
}
