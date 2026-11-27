import React from 'react';
import './Header.css';
import type { ViewMode } from '../../data/types';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSearchClear: () => void;
  isDarkMode: boolean;
  onThemeToggle: () => void;
  onEraJump: (eraId: string) => void;
  currentEraId: string | null;
  eras: Array<{ id: string; name: string; bgColor: string; bgColorDark: string }>;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  isSearchActive: boolean;
  selectedEraFilter: string | null;
  onShowAllEras: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  onSearchChange,
  onSearchClear,
  isDarkMode,
  onThemeToggle,
  onEraJump,
  eras,
  viewMode,
  onViewModeChange,
  isSearchActive,
  selectedEraFilter,
  onShowAllEras,
}) => {
  const isDarkEraButton = (bgColor: string) => {
    return bgColor.toLowerCase().startsWith('#2') || 
           bgColor.toLowerCase().startsWith('#1') ||
           (bgColor.toLowerCase().startsWith('#3') && bgColor.length === 7);
  };

  return (
    <header className="app-header">
      <div className="header-top">
        <h1 className="app-title">한국사 연표</h1>
        
        <div className="header-controls">
          <div className="search-box-wrapper">
            <input
              type="text"
              className="search-box"
              placeholder="왕, 사건, 제도, 업적 검색..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              autoComplete="off"
            />
            {searchQuery && (
              <button
                className="search-clear-btn"
                onClick={onSearchClear}
                aria-label="검색어 지우기"
              >
                ✕
              </button>
            )}
          </div>
          
          <button
            className="theme-toggle"
            onClick={onThemeToggle}
            aria-label={isDarkMode ? '라이트 모드로 전환' : '다크 모드로 전환'}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>

      {/* Only show tabs and navigation when not searching */}
      {!isSearchActive && (
        <>
          {/* View Mode Tabs */}
          <div className="view-mode-tabs">
            <button
              className={`tab-button ${viewMode === 'events' ? 'active' : ''}`}
              onClick={() => onViewModeChange('events')}
            >
              📅 사건 연표
            </button>
            <button
              className={`tab-button ${viewMode === 'kings' ? 'active' : ''}`}
              onClick={() => onViewModeChange('kings')}
            >
              🤴 역대 왕 정리
            </button>
            <button
              className={`tab-button ${viewMode === 'chart' ? 'active' : ''}`}
              onClick={() => onViewModeChange('chart')}
            >
              📈 흥망성쇠 그래프
            </button>
          </div>

          {/* Era Navigation - only show for events view */}
          {viewMode === 'events' && (
            <>
              <nav className="era-nav">
                {/* "전체" button */}
                <button
                  className={`era-nav-btn ${selectedEraFilter === null ? 'active' : ''}`}
                  onClick={onShowAllEras}
                  style={{
                    backgroundColor: isDarkMode ? '#444' : '#e0e0e0',
                  }}
                >
                  전체
                </button>
                
                {eras.map((era) => {
                  const bgColor = isDarkMode ? era.bgColorDark : era.bgColor;
                  const needsLightText = isDarkEraButton(bgColor);
                  
                  return (
                    <button
                      key={era.id}
                      className={`era-nav-btn ${selectedEraFilter === era.id ? 'active' : ''} ${needsLightText ? 'dark-era-btn' : ''}`}
                      onClick={() => onEraJump(era.id)}
                      style={{
                        backgroundColor: bgColor,
                      }}
                    >
                      {era.name}
                    </button>
                  );
                })}
              </nav>

              {selectedEraFilter ? (
                <div className="current-era-badge">
                  선택한 시대: <strong>{eras.find(e => e.id === selectedEraFilter)?.name}</strong>
                </div>
              ) : (
                <div className="current-era-badge">
                  <strong>전체 시대</strong> 보기
                </div>
              )}
            </>
          )}
        </>
      )}

      {/* Search Active Indicator */}
      {isSearchActive && (
        <div className="search-active-banner">
          <span>🔍 통합 검색 결과</span>
        </div>
      )}
    </header>
  );
};
