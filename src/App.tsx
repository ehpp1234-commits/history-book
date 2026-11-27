import React, { useState, useEffect } from 'react';
import { Header } from './components/Header/Header';
import { Timeline } from './components/Timeline/Timeline';
import { BottomSheet } from './components/BottomSheet/BottomSheet';
import { DetailPanel } from './components/DetailPanel/DetailPanel';
import { historyData } from './data/historyData';
import { useTheme } from './hooks/useTheme';
import { useSearch } from './hooks/useSearch';
import { useBottomSheet } from './hooks/useBottomSheet';
import type { CardData } from './data/types';
import './App.css';

function App() {
  const { isDarkMode, toggleTheme } = useTheme();
  const { searchQuery, setSearchQuery, filteredCards } = useSearch(historyData.eras);
  const { isOpen: isBottomSheetOpen, selectedCard: bottomSheetCard, openSheet, closeSheet } = useBottomSheet();
  
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);
  const [currentEraId, setCurrentEraId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleCardClick = (card: CardData) => {
    if (isMobile) {
      openSheet(card);
    } else {
      setSelectedCard(card);
    }
  };

  const handleCloseDetail = () => {
    setSelectedCard(null);
    closeSheet();
  };

  const handleEraJump = (eraId: string) => {
    const element = document.getElementById(`era-${eraId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
  };

  useEffect(() => {
    if (!currentEraId && historyData.eras.length > 0) {
      setCurrentEraId(historyData.eras[0].id);
    }
  }, [currentEraId]);

  return (
    <div className="app" data-theme={isDarkMode ? 'dark' : 'light'}>
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        isDarkMode={isDarkMode}
        onThemeToggle={toggleTheme}
        onEraJump={handleEraJump}
        currentEraId={currentEraId}
        eras={historyData.eras}
      />

      <main className="app-main">
        <Timeline
          eras={historyData.eras}
          filteredCards={filteredCards}
          onCardClick={handleCardClick}
          isDarkMode={isDarkMode}
        />
      </main>

      {isMobile && (
        <BottomSheet
          card={bottomSheetCard}
          isOpen={isBottomSheetOpen}
          onClose={handleCloseDetail}
        />
      )}

      {!isMobile && selectedCard && (
        <DetailPanel
          card={selectedCard}
          onClose={handleCloseDetail}
        />
      )}
    </div>
  );
}

export default App;
