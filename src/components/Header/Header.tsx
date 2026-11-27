import React from 'react';
import './Header.css';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  isDarkMode: boolean;
  onThemeToggle: () => void;
  onEraJump: (eraId: string) => void;
  currentEraId: string | null;
  eras: Array<{ id: string; name: string; bgColor: string; bgColorDark: string }>;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  onSearchChange,
  isDarkMode,
  onThemeToggle,
  onEraJump,
  currentEraId,
  eras,
}) => {
  return (
    <header className="app-header">
      <div className="header-top">
        <h1 className="app-title">한국사 연표</h1>
        
        <div className="header-controls">
          <input
            type="text"
            className="search-box"
            placeholder="검색어를 입력하세요..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          
          <button
            className="theme-toggle"
            onClick={onThemeToggle}
            aria-label={isDarkMode ? '라이트 모드로 전환' : '다크 모드로 전환'}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>

      <nav className="era-nav">
        {eras.map((era) => (
          <button
            key={era.id}
            className={`era-nav-btn ${currentEraId === era.id ? 'active' : ''}`}
            onClick={() => onEraJump(era.id)}
            style={{
              backgroundColor: isDarkMode ? era.bgColorDark : era.bgColor,
            }}
          >
            {era.name}
          </button>
        ))}
      </nav>

      {currentEraId && (
        <div className="current-era-badge">
          현재 보는 시대: <strong>{eras.find(e => e.id === currentEraId)?.name}</strong>
        </div>
      )}
    </header>
  );
};
