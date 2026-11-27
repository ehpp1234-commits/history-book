import React from 'react';
import type { CardData } from '../../data/types';
import './SearchResults.css';

interface SearchResultsProps {
  query: string;
  kingResults: CardData[];
  eventResults: CardData[];
  onResultClick: (card: CardData) => void;
  onSuggestedSearch: (keyword: string) => void;
}

const SUGGESTED_KEYWORDS = [
  '광개토대왕',
  '임진왜란',
  '세종',
  '동학농민운동',
  '훈민정음',
  '노비안검법',
  '갑오개혁',
  '3·1 운동',
  '고려',
  '조선'
];

export function SearchResults({ 
  query, 
  kingResults, 
  eventResults, 
  onResultClick,
  onSuggestedSearch 
}: SearchResultsProps) {
  // 안전한 배열 처리
  const safeKingResults = Array.isArray(kingResults) ? kingResults.filter(item => item != null) : [];
  const safeEventResults = Array.isArray(eventResults) ? eventResults.filter(item => item != null) : [];
  const hasResults = safeKingResults.length > 0 || safeEventResults.length > 0;

  if (!(query || '').trim()) {
    return (
      <div className="search-empty-state">
        <div className="search-empty-icon">🔍</div>
        <p className="search-empty-text">검색어를 입력하세요</p>
        <p className="search-empty-hint">왕, 사건, 제도, 업적 등을 검색할 수 있습니다</p>
      </div>
    );
  }

  if (!hasResults) {
    return (
      <div className="search-no-results">
        <div className="no-results-icon">😕</div>
        <h3 className="no-results-title">검색 결과가 없습니다</h3>
        <p className="no-results-text">
          '<strong>{query}</strong>'에 대한 결과를 찾을 수 없습니다
        </p>
        
        <div className="suggested-searches">
          <p className="suggested-label">추천 검색어</p>
          <div className="suggested-chips">
            {SUGGESTED_KEYWORDS.map((keyword) => (
              <button
                key={keyword}
                className="suggested-chip"
                onClick={() => onSuggestedSearch(keyword)}
              >
                #{keyword}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const handleResultClick = (card: CardData) => {
    try {
      if (card && onResultClick) {
        onResultClick(card);
      }
    } catch (error) {
      console.error('Error clicking result:', error);
    }
  };

  return (
    <div className="search-results-container">
      <div className="search-results-header">
        <span className="results-count">
          총 {safeKingResults.length + safeEventResults.length}개 검색됨
        </span>
      </div>

      {safeKingResults.length > 0 && (
        <section className="search-results-section">
          <h3 className="section-title">🤴 왕 기록 ({safeKingResults.length})</h3>
          <div className="results-list">
            {safeKingResults.map((king) => {
              if (!king) return null;
              
              return (
                <div
                  key={king.id || Math.random()}
                  className="search-result-card king-card"
                  onClick={() => handleResultClick(king)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleResultClick(king);
                    }
                  }}
                >
                  <div className="card-header">
                    <span className="card-type-badge">왕</span>
                    <span className="card-year">{king?.year || ''}</span>
                  </div>
                  <h4 className="card-title">{king?.title || '제목 없음'}</h4>
                  <p className="card-preview">{king?.description || ''}</p>
                  {Array.isArray(king?.tags) && king.tags.length > 0 && (
                    <div className="card-tags-preview">
                      {king.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="tag-mini">{tag || ''}</span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {safeEventResults.length > 0 && (
        <section className="search-results-section">
          <h3 className="section-title">📅 주요 사건·전쟁 ({safeEventResults.length})</h3>
          <div className="results-list">
            {safeEventResults.map((event) => {
              if (!event) return null;
              
              return (
                <div
                  key={event.id || Math.random()}
                  className="search-result-card event-card"
                  onClick={() => handleResultClick(event)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleResultClick(event);
                    }
                  }}
                >
                  <div className="card-header">
                    <span className="card-type-badge event">사건</span>
                    <span className="card-year">{event?.year || ''}</span>
                  </div>
                  <h4 className="card-title">{event?.title || '제목 없음'}</h4>
                  <p className="card-preview">{event?.description || ''}</p>
                  {Array.isArray(event?.tags) && event.tags.length > 0 && (
                    <div className="card-tags-preview">
                      {event.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="tag-mini">#{tag || ''}</span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
