import React, { useState, useEffect } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
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

function AppContent() {
  const { isDarkMode, toggleTheme } = useTheme();
  const { searchQuery, setSearchQuery, filteredCards } = useSearch(historyData.eras);
  const { isOpen: isBottomSheetOpen, selectedCard: bottomSheetCard, openSheet, closeSheet } = useBottomSheet();
  
  const [viewMode, setViewMode] = useState<ViewMode>('events');
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);
  const [currentEraId, setCurrentEraId] = useState<string | null>(null);
  const [selectedEraFilter, setSelectedEraFilter] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Unified search results
  const searchActive = (searchQuery || '').trim().length > 0;
  
  // Search kings with safe access
  const searchedKings = (() => {
    try {
      if (!Array.isArray(allKings)) {
        return [];
      }

      return allKings.filter(king => {
        try {
          if (!searchQuery?.trim()) return false;
          
          const query = searchQuery.toLowerCase();
          
          // 모든 속성을 안전하게 처리
          const name = (king?.name || '').toLowerCase();
          const dynasty = (king?.dynasty || '').toLowerCase();
          
          // 배열 속성 안전 처리
          const achievements = Array.isArray(king?.keyAchievements)
            ? king.keyAchievements.filter(item => item != null).join(' ').toLowerCase()
            : '';
          
          const institutions = Array.isArray(king?.institutions)
            ? king.institutions.filter(item => item != null).join(' ').toLowerCase()
            : '';
          
          const books = Array.isArray(king?.books)
            ? king.books.filter(item => item != null).join(' ').toLowerCase()
            : '';
          
          const keywords = Array.isArray(king?.examKeywords)
            ? king.examKeywords.filter(item => item != null).join(' ').toLowerCase()
            : '';
          
          const searchText = [
            name,
            dynasty,
            achievements,
            institutions,
            books,
            keywords
          ].join(' ');
          
          return searchText.includes(query);
        } catch (error) {
          console.error('Error filtering king:', error, king);
          return false;
        }
      }).map(king => convertKingToCard(king));
    } catch (error) {
      console.error('Error in searchedKings:', error);
      return [];
    }
  })();

  // Search events with safe access
  const searchedEvents = (() => {
    try {
      if (!searchQuery?.trim()) return [];
      if (!Array.isArray(filteredCards)) return [];
      return filteredCards;
    } catch (error) {
      console.error('Error in searchedEvents:', error);
      return [];
    }
  })();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const convertKingToCard = (king: KingData): CardData => {
    try {
      return {
        id: king?.id || '',
        eraId: king?.eraId || '',
        year: `${king?.reignStart || ''} ~ ${king?.reignEnd || ''}`,
        weight: 5,
        title: king?.name || '알 수 없음',
        description: king?.description || '',
        tags: Array.isArray(king?.examKeywords) ? king.examKeywords : [],
        relatedEvents: Array.isArray(king?.majorEvents) ? king.majorEvents : [],
        type: 'king',
        kingData: king
      };
    } catch (error) {
      console.error('Error converting king to card:', error, king);
      return {
        id: 'error',
        eraId: '',
        year: '',
        weight: 1,
        title: '오류',
        description: '카드 변환 중 오류가 발생했습니다',
        tags: [],
        relatedEvents: [],
        type: 'event'
      };
    }
  };

  const handleCardClick = (card: CardData) => {
    try {
      if (!card) return;
      
      if (isMobile) {
        openSheet(card);
      } else {
        setSelectedCard(card);
      }
    } catch (error) {
      console.error('Error handling card click:', error);
    }
  };

  const handleKingClick = (king: KingData) => {
    try {
      if (!king) return;
      
      const kingCard = convertKingToCard(king);
      if (isMobile) {
        openSheet(kingCard);
      } else {
        setSelectedCard(kingCard);
      }
    } catch (error) {
      console.error('Error handling king click:', error);
    }
  };

  const handleCloseDetail = () => {
    try {
      setSelectedCard(null);
      closeSheet();
    } catch (error) {
      console.error('Error closing detail:', error);
    }
  };

  const handleEraJump = (eraId: string) => {
    try {
      setSelectedEraFilter(eraId);
      setCurrentEraId(eraId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error jumping to era:', error);
    }
  };

  const handleSearchClear = () => {
    try {
      setSearchQuery('');
    } catch (error) {
      console.error('Error clearing search:', error);
    }
  };

  const handleSuggestedSearch = (keyword: string) => {
    try {
      if (keyword) {
        setSearchQuery(keyword);
      }
    } catch (error) {
      console.error('Error setting suggested search:', error);
    }
  };

  useEffect(() => {
    try {
      if (!currentEraId && Array.isArray(historyData?.eras) && historyData.eras.length > 0) {
        setCurrentEraId(historyData.eras[0]?.id || null);
      }
    } catch (error) {
      console.error('Error setting initial era:', error);
    }
  }, [currentEraId]);

  // Filter eras based on selection with safe access
  const displayedEras = (() => {
    try {
      if (!Array.isArray(historyData?.eras)) {
        return [];
      }
      
      return selectedEraFilter 
        ? historyData.eras.filter(era => era?.id === selectedEraFilter)
        : historyData.eras;
    } catch (error) {
      console.error('Error filtering eras:', error);
      return [];
    }
  })();

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
        eras={historyData?.eras || []}
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
            kings={allKings || []}
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

function App() {
  return (
    <ErrorBoundary>
      <AppContent />
    </ErrorBoundary>
  );
}

export default App;
