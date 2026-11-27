import React from 'react';
import type { Era, SummaryCard } from '../../data/types';
import './Timeline.css';

interface TimelineProps {
  eras: Era[];
  filteredCards: SummaryCard[];
  onCardClick: (card: SummaryCard) => void;
  isDarkMode: boolean;
}

export function Timeline({ eras, filteredCards, onCardClick, isDarkMode }: TimelineProps) {
  return (
    <div className="timeline-container">
      {/* Era sections */}
      {eras.map((era) => {
        const bgColor = isDarkMode ? era.bgColorDark : era.bgColor;
        
        // Get cards for this era from filteredCards
        const eraCards = filteredCards.filter(card => card.eraId === era.id);
        
        return (
          <section
            key={era.id}
            id={`era-${era.id}`}
            className="timeline-era"
            style={{
              backgroundColor: bgColor,
              minWidth: '800px'
            }}
          >
            {/* Era header */}
            <div className="era-header">
              <h2 className="era-name">{era.name}</h2>
              <p className="era-period">{era.periodLabel}</p>
            </div>

            {/* Era watermark */}
            <div
              className="era-watermark"
              style={{
                opacity: isDarkMode ? 0.1 : 0.05
              }}
            >
              {era.watermarkLabel.ko}
            </div>

            {/* Cards for this era */}
            <div className="era-cards">
              {eraCards.length > 0 ? (
                eraCards.map((card) => (
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
                    <div className="card-year">{card.year}</div>
                    <div className="card-title">{card.title}</div>
                    <div className="card-weight">★ {card.weight}/5</div>
                  </div>
                ))
              ) : (
                <div className="no-cards">이 시대의 카드가 없습니다</div>
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
}
