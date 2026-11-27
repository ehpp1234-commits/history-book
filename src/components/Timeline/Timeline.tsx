import React from 'react';
import type { Era, CardData } from '../../data/types';
import { Concealed } from '../Concealed/Concealed';
import { BookmarkButton } from '../BookmarkButton/BookmarkButton';
import './Timeline.css';

interface TimelineProps {
  eras: Era[];
  filteredCards: CardData[];
  onCardClick: (card: CardData) => void;
  isDarkMode: boolean;
  studyMode: boolean;
  isBookmarked: (id: string) => boolean;
  onToggleBookmark: (id: string) => void;
}

// Helper function to extract numeric year from year string with safe access
const extractYear = (yearStr: string | undefined | null): number | null => {
  try {
    if (!yearStr || typeof yearStr !== 'string') return null;
    
    // Handle B.C. years
    if (yearStr.includes('B.C.')) {
      const match = yearStr.match(/B\.C\.\s*([\d,]+)/);
      if (match) {
        const year = parseInt(match[1].replace(/,/g, ''));
        return -year;
      }
    }
    
    // Handle century format (e.g., "5세기", "14세기")
    const centuryMatch = yearStr.match(/^(\d+)세기/);
    if (centuryMatch) {
      const century = parseInt(centuryMatch[1]);
      return (century - 1) * 100;
    }
    
    // Handle specific year (e.g., "1392년", "676년")
    const yearMatch = yearStr.match(/^(\d{1,4})년?/);
    if (yearMatch) {
      return parseInt(yearMatch[1]);
    }
    
    // Handle range format (e.g., "1392 ~ 1398")
    const rangeMatch = yearStr.match(/^(\d{1,4})\s*~/);
    if (rangeMatch) {
      return parseInt(rangeMatch[1]);
    }
    
    return null;
  } catch (error) {
    console.error('Error extracting year:', error, yearStr);
    return null;
  }
};

// Group label generator based on year
const getGroupLabel = (year: number, eraId: string): string => {
  try {
    if (year < -1000) {
      return 'B.C. 70만년 ~ B.C. 1,000년';
    } else if (year < 0) {
      return 'B.C. 1,000년 ~ B.C. 1년';
    } else if (year < 100) {
      return '1세기 ~ 2세기';
    } else if (year < 300) {
      return '1세기 ~ 3세기';
    } else if (year < 700) {
      return '4세기 ~ 6세기';
    } else if (year < 1000) {
      return '7세기 ~ 9세기';
    } else {
      const century = Math.floor(year / 100) * 100;
      return `${century}년대`;
    }
  } catch (error) {
    console.error('Error getting group label:', error);
    return '기타';
  }
};

// Group cards by century/period with safe access
const groupCardsByCentury = (cards: CardData[], eraId: string): Map<string, CardData[]> => {
  const groups = new Map<string, CardData[]>();
  
  try {
    if (!Array.isArray(cards)) {
      return groups;
    }

    // Sort cards by year first with safe access
    const sortedCards = [...cards]
      .filter(card => card != null)
      .sort((a, b) => {
        const yearA = extractYear(a?.year) ?? 0;
        const yearB = extractYear(b?.year) ?? 0;
        return yearA - yearB;
      });
    
    sortedCards.forEach(card => {
      try {
        if (!card) return;
        
        const year = extractYear(card.year);
        if (year !== null) {
          const groupLabel = getGroupLabel(year, eraId);
          
          if (!groups.has(groupLabel)) {
            groups.set(groupLabel, []);
          }
          groups.get(groupLabel)!.push(card);
        }
      } catch (error) {
        console.error('Error grouping card:', error, card);
      }
    });
  } catch (error) {
    console.error('Error in groupCardsByCentury:', error);
  }
  
  return groups;
};

export function Timeline({
  eras,
  filteredCards,
  onCardClick,
  isDarkMode,
  studyMode,
  isBookmarked,
  onToggleBookmark,
}: TimelineProps) {
  // Safe array checks
  const safeEras = Array.isArray(eras) ? eras.filter(era => era != null) : [];
  const safeFilteredCards = Array.isArray(filteredCards) ? filteredCards.filter(card => card != null) : [];

  // Check if era background is dark and needs light text
  const isDarkEra = (bgColor: string | undefined): boolean => {
    try {
      if (!bgColor || typeof bgColor !== 'string') return false;
      
      return bgColor.toLowerCase().startsWith('#2') || 
             bgColor.toLowerCase().startsWith('#1') ||
             bgColor.toLowerCase().startsWith('#3') && bgColor.length === 7;
    } catch (error) {
      console.error('Error checking dark era:', error);
      return false;
    }
  };

  const handleCardClick = (card: CardData) => {
    try {
      if (card && onCardClick) {
        onCardClick(card);
      }
    } catch (error) {
      console.error('Error handling card click:', error);
    }
  };

  return (
    <div className="timeline-container">
      {safeEras.map((era) => {
        try {
          if (!era) return null;

          const bgColor = isDarkMode ? era.bgColorDark : era.bgColor;
          const eraCards = safeFilteredCards.filter(card => card?.eraId === era.id);
          const needsLightText = isDarkEra(bgColor);
          
          // Group cards by century/period
          const groupedCards = groupCardsByCentury(eraCards, era.id || '');
          
          return (
            <section
              key={era.id || Math.random()}
              id={`era-${era.id || ''}`}
              className={`timeline-era ${needsLightText ? 'dark-era' : ''}`}
              style={{
                backgroundColor: bgColor || '#fff'
              }}
            >
              {/* Era watermark background */}
              <div
                className="era-watermark"
                style={{
                  opacity: isDarkMode ? 0.08 : 0.04
                }}
              >
                {era.watermarkLabel?.ko || era.name || ''}
              </div>

              {/* Era header */}
              <div className="era-header">
                <h2 className="era-name">{era.name || '시대 미상'}</h2>
                <p className="era-period">{era.periodLabel || ''}</p>
              </div>

              {/* Century-grouped cards */}
              {groupedCards.size > 0 ? (
                <div className="century-groups">
                  {Array.from(groupedCards.entries()).map(([groupLabel, cards]) => (
                    <div key={groupLabel} className="century-group">
                      <div className="century-badge">
                        <span className="century-label">{groupLabel}</span>
                      </div>
                      
                      <div className="era-cards">
                        {cards.map((card) => {
                          if (!card) return null;
                          
                          return (
                            <div
                              key={card.id || Math.random()}
                              className="summary-card"
                              onClick={() => handleCardClick(card)}
                              role="button"
                              tabIndex={0}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                  e.preventDefault();
                                  handleCardClick(card);
                                }
                              }}
                            >
                              <div className="card-header">
                                <Concealed active={studyMode} className="card-year">
                                  {card.year || ''}
                                </Concealed>
                                <div className="card-header-right">
                                  <span className="card-weight">중요도 {card.weight || 0}/5</span>
                                  <BookmarkButton
                                    active={isBookmarked(card.id)}
                                    onToggle={() => onToggleBookmark(card.id)}
                                    label={card.title || '사건'}
                                  />
                                </div>
                              </div>
                              <h3 className="card-title">{card.title || '제목 없음'}</h3>
                              {Array.isArray(card.tags) && card.tags.length > 0 && (
                                <div className="card-tags">
                                  {card.tags.slice(0, 3).map((tag, idx) => (
                                    <Concealed key={idx} active={studyMode} className="tag">
                                      #{tag || ''}
                                    </Concealed>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-cards">이 시대의 카드가 없습니다</div>
              )}
            </section>
          );
        } catch (error) {
          console.error('Error rendering era:', error, era);
          return null;
        }
      })}
    </div>
  );
}
