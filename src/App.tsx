import React, { useState, useEffect } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { Header } from './components/Header/Header';
import { Timeline } from './components/Timeline/Timeline';
import { KingsTimeline } from './components/KingsTimeline/KingsTimeline';
import { RiseAndFallChart } from './components/RiseAndFallChart/RiseAndFallChart';
import { Quiz } from './components/Quiz/Quiz';
import { SearchResults } from './components/SearchResults/SearchResults';
import { BottomSheet } from './components/BottomSheet/BottomSheet';
import { DetailPanel } from './components/DetailPanel/DetailPanel';
import { historyData } from './data/historyData';
import { allKings } from './data/kingsData';
import { useTheme } from './hooks/useTheme';
import { useSearch } from './hooks/useSearch';
import { useBottomSheet } from './hooks/useBottomSheet';
import { useBookmarks } from './hooks/useBookmarks';
import { useStudyMode } from './hooks/useStudyMode';
import { buildKingSearchText, matchesTokens, tokenizeQuery } from './data/searchUtils';
import type { CardData, KingData, ViewMode } from './data/types';
import './App.css';

function AppContent() {
  const { isDarkMode, toggleTheme } = useTheme();
  const { searchQuery, setSearchQuery, filteredCards } = useSearch(historyData.eras);
  const { isOpen: isBottomSheetOpen, selectedCard: bottomSheetCard, openSheet, closeSheet } = useBottomSheet();
  
  const { studyMode, toggleStudyMode } = useStudyMode();
  const { bookmarkedIds, isBookmarked, toggleBookmark } = useBookmarks();
  const [bookmarkOnly, setBookmarkOnly] = useState(false);

  const [viewMode, setViewMode] = useState<ViewMode>('events');
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);
  const [currentEraId, setCurrentEraId] = useState<string | null>(null);
  const [selectedEraFilter, setSelectedEraFilter] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

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

  // Unified search results
  const searchActive = (searchQuery || '').trim().length > 0;
  
  // Search kings with safe access
  const searchedKings = (() => {
    try {
      if (!Array.isArray(allKings)) {
        return [];
      }

      const tokens = tokenizeQuery(searchQuery);
      if (tokens.length === 0) return [];

      // 이름·왕조·업적·제도·서적·사건·키워드를 대소문자/공백/구두점 무시하고 검색
      return allKings.filter(king => {
        try {
          return matchesTokens(buildKingSearchText(king), tokens);
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

  // 북마크한 사건 수 (실제 존재하는 카드 기준)
  const bookmarkCount = historyData.eras.reduce(
    (sum, era) => sum + (era.cards || []).filter(card => isBookmarked(card.id)).length,
    0
  );

  // '북마크만 보기'가 켜져 있으면 북마크한 카드만 타임라인에 전달
  const timelineCards = bookmarkOnly
    ? filteredCards.filter(card => isBookmarked(card.id))
    : filteredCards;

  // Filter eras based on selection with safe access
  const displayedEras = (() => {
    try {
      if (!Array.isArray(historyData?.eras)) {
        return [];
      }
      
      const byEra = selectedEraFilter 
        ? historyData.eras.filter(era => era?.id === selectedEraFilter)
        : historyData.eras;

      // 북마크만 볼 때는 북마크가 있는 시대만 표시
      return bookmarkOnly
        ? byEra.filter(era => timelineCards.some(card => card.eraId === era.id))
        : byEra;
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
        studyMode={studyMode}
        onStudyModeToggle={toggleStudyMode}
        bookmarkOnly={bookmarkOnly}
        onBookmarkOnlyToggle={() => setBookmarkOnly(prev => !prev)}
        bookmarkCount={bookmarkCount}
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
          bookmarkOnly && timelineCards.length === 0 ? (
            <div className="empty-bookmarks">
              <p>북마크한 사건이 없습니다.</p>
              <p>사건 카드의 ☆를 눌러 헷갈리는 사건을 저장해 보세요.</p>
            </div>
          ) : (
            <Timeline
              eras={displayedEras}
              filteredCards={timelineCards}
              onCardClick={handleCardClick}
              isDarkMode={isDarkMode}
              studyMode={studyMode}
              isBookmarked={isBookmarked}
              onToggleBookmark={toggleBookmark}
            />
          )
        ) : viewMode === 'kings' ? (
          <KingsTimeline
            kings={allKings || []}
            onKingClick={handleKingClick}
            isDarkMode={isDarkMode}
          />
        ) : viewMode === 'quiz' ? (
          <Quiz eras={historyData.eras} bookmarkedIds={bookmarkedIds} />
        ) : (
          <RiseAndFallChart />
        )}
      </main>

      {isMobile && (
        <BottomSheet
          card={bottomSheetCard}
          isOpen={isBottomSheetOpen}
          onClose={handleCloseDetail}
          highlightQuery={searchActive ? searchQuery : ''}
          studyMode={studyMode}
          isBookmarked={bottomSheetCard ? isBookmarked(bottomSheetCard.id) : false}
          onToggleBookmark={toggleBookmark}
        />
      )}

      {!isMobile && selectedCard && (
        <DetailPanel
          card={selectedCard}
          onClose={handleCloseDetail}
          highlightQuery={searchActive ? searchQuery : ''}
          studyMode={studyMode}
          isBookmarked={isBookmarked(selectedCard.id)}
          onToggleBookmark={toggleBookmark}
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
