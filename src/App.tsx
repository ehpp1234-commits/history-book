import React, { useState, useEffect } from 'react';
import { Header } from './components/Header/Header';
import { Timeline } from './components/Timeline/Timeline';
import { KingsTimeline } from './components/KingsTimeline/KingsTimeline';
import { SearchResults } from './components/SearchResults/SearchResults';
import { BottomSheet } from './components/BottomSheet/BottomSheet';
import { DetailPanel } from './components/DetailPanel/DetailPanel';
import { historyData } from './data/historyData';
import { allKings } from './data/kingsData';
import { useTheme } from './hooks/useTheme';
import { useSearch } from './hooks/useSearch';
import { useBottomSheet } from './hooks/useBottomSheet';
import type { CardData, KingData, ViewMode } from './data/types';
import './App.css';

function App() {
  const { isDarkMode, toggleTheme } = useTheme();
  const { searchQuery, setSearchQuery, filteredCards } = useSearch(historyData.eras);
  const { isOpen: isBottomSheetOpen, selectedCard: bottomSheetCard, openSheet, closeSheet } = useBottomSheet();
  
  const [viewMode, setViewMode] = useState<ViewMode>('events');
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);
  const [currentEraId, setCurrentEraId] = useState<string | null>(null);
  const [selectedEraFilter, setSelectedEraFilter] = useState<string | null>(null); // null means "all"
  const [isMobile, setIsMobile] = useState(false);

  // Unified search results
  const searchActive = searchQuery.trim().length > 0;
  
  // Search kings
  const searchedKings = allKings.filter(king => {
    if (!searchQuery.trim()) return false;
    
    const query = searchQuery.toLowerCase();
    const searchText = [
      king.name,
      king.dynasty,
      ...king.keyAchievements,
      ...king.institutions,
      ...king.books,
      ...king.examKeywords
    ].join(' ').toLowerCase();
    
    return searchText.includes(query);
  }).map(king => convertKingToCard(king));

  // Search events
  const searchedEvents = filteredCards.filter(card => {
    if (!searchQuery.trim()) return false;
    return true; // useSearch already filters based on query
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const convertKingToCard = (king: KingData): CardData => ({
    id: king.id,
    eraId: king.eraId,
    year: `${king.reignStart} ~ ${king.reignEnd}`,
    weight: 5,
    title: king.name,
    description: king.description,
    tags: king.examKeywords,
    relatedEvents: king.majorEvents,
    type: 'king',
    kingData: king
  });

  const handleCardClick = (card: CardData) => {
    if (isMobile) {
      openSheet(card);
    } else {
      setSelectedCard(card);
    }
  };

  const handleKingClick = (king: KingData) => {
    const kingCard = convertKingToCard(king);
    if (isMobile) {
      openSheet(kingCard);
    } else {
      setSelectedCard(kingCard);
    }
  };

  const handleCloseDetail = () => {
    setSelectedCard(null);
    closeSheet();
  };

  const handleEraJump = (eraId: string) => {
    // Set as filter instead of just scrolling
    setSelectedEraFilter(eraId);
    setCurrentEraId(eraId);
    
    // Scroll to top when filtering
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchClear = () => {
    setSearchQuery('');
  };

  const handleSuggestedSearch = (keyword: string) => {
    setSearchQuery(keyword);
  };

  useEffect(() => {
    if (!currentEraId && historyData.eras.length > 0) {
      setCurrentEraId(historyData.eras[0].id);
    }
  }, [currentEraId]);

  // Filter eras based on selection
  const displayedEras = selectedEraFilter 
    ? historyData.eras.filter(era => era.id === selectedEraFilter)
    : historyData.eras;

  return (
    <div className="app" data-theme={isDarkMode ? 'dark' : 'light'}>
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSearchClear={handleSearchClear}
        isDarkMode={isDarkMode}
        onThemeToggle={toggleTheme}
        onEraJump={handleEraJump}
        currentEraId={currentEraId}
        eras={historyData.eras}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        isSearchActive={searchActive}
        selectedEraFilter={selectedEraFilter}
        onShowAllEras={() => setSelectedEraFilter(null)}
      />

      <main className="app-main">
        {searchActive ? (
          <SearchResults
            query={searchQuery}
            kingResults={searchedKings}
            eventResults={searchedEvents}
            onResultClick={handleCardClick}
            onSuggestedSearch={handleSuggestedSearch}
          />
        ) : viewMode === 'events' ? (
          <Timeline
            eras={displayedEras}
            filteredCards={filteredCards}
            onCardClick={handleCardClick}
            isDarkMode={isDarkMode}
          />
        ) : (
          <KingsTimeline
            kings={allKings}
            onKingClick={handleKingClick}
            isDarkMode={isDarkMode}
          />
        )}
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
