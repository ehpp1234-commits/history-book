import React from 'react';
import type { Era, CardData } from '../../data/types';
import './Timeline.css';

interface TimelineProps {
  eras: Era[];
  filteredCards: CardData[];
  onCardClick: (card: CardData) => void;
  isDarkMode: boolean;
}

// Helper function to extract numeric year from year string
const extractYear = (yearStr: string): number | null => {
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
    return (century - 1) * 100; // Start of the century
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
};

// Group label generator based on year
const getGroupLabel = (year: number, eraId: string): string => {
  // Prehistoric and very ancient eras
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
    // For years 1000+, group by century
    const century = Math.floor(year / 100) * 100;
    return `${century}년대`;
  }
};

// Group cards by century/period
const groupCardsByCentury = (cards: CardData[], eraId: string): Map<string, CardData[]> => {
  const groups = new Map<string, CardData[]>();
  
  // Sort cards by year first
  const sortedCards = [...cards].sort((a, b) => {
    const yearA = extractYear(a.year) ?? 0;
    const yearB = extractYear(b.year) ?? 0;
    return yearA - yearB;
  });
  
  sortedCards.forEach(card => {
    const year = extractYear(card.year);
    if (year !== null) {
      const groupLabel = getGroupLabel(year, eraId);
      
      if (!groups.has(groupLabel)) {
        groups.set(groupLabel, []);
      }
      groups.get(groupLabel)!.push(card);
    }
  });
  
  return groups;
};

export function Timeline({ eras, filteredCards, onCardClick, isDarkMode }: TimelineProps) {
  // Check if era background is dark and needs light text
  const isDarkEra = (bgColor: string) => {
    // Simple check for dark colors (일제 강점기 등)
    return bgColor.toLowerCase().startsWith('#2') || 
           bgColor.toLowerCase().startsWith('#1') ||
           bgColor.toLowerCase().startsWith('#3') && bgColor.length === 7;
  };

  return (
    <div className="timeline-container">
      {eras.map((era) => {
        const bgColor = isDarkMode ? era.bgColorDark : era.bgColor;
        const eraCards = filteredCards.filter(card => card.eraId === era.id);
        const needsLightText = isDarkEra(bgColor);
        
        // Group cards by century/period
        const groupedCards = groupCardsByCentury(eraCards, era.id);
        
        return (
          <section
            key={era.id}
            id={`era-${era.id}`}
            className={`timeline-era ${needsLightText ? 'dark-era' : ''}`}
            style={{
              backgroundColor: bgColor
            }}
          >
            {/* Era watermark background */}
            <div
              className="era-watermark"
              style={{
                opacity: isDarkMode ? 0.08 : 0.04
              }}
            >
              {era.watermarkLabel.ko}
            </div>

            {/* Era header */}
            <div className="era-header">
              <h2 className="era-name">{era.name}</h2>
              <p className="era-period">{era.periodLabel}</p>
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
                      {cards.map((card) => (
                        <div
                          key={card.id}
                          className="summary-card"
                          onClick={() => onCardClick(card)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              onCardClick(card);
                            }
                          }}
                        >
                          <div className="card-header">
                            <span className="card-year">{card.year}</span>
                            <span className="card-weight">★ {card.weight}/5</span>
                          </div>
                          <h3 className="card-title">{card.title}</h3>
                          {card.tags && card.tags.length > 0 && (
                            <div className="card-tags">
                              {card.tags.slice(0, 3).map((tag, idx) => (
                                <span key={idx} className="tag">#{tag}</span>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-cards">이 시대의 카드가 없습니다</div>
            )}
          </section>
        );
      })}
    </div>
  );
}
