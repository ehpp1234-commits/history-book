import React from 'react';
import type { Era, SummaryCard } from '../../data/types';
import './Timeline.css';

interface TimelineProps {
  eras: Era[];
  cards: SummaryCard[];
  selectedCardId: string | null;
  onCardClick: (cardId: string) => void;
  searchMatchIds: Set<string>;
}

export function Timeline({ eras, cards, selectedCardId, onCardClick, searchMatchIds }: TimelineProps) {
  // 간단한 선형 스케일 (실제로는 로그 스케일 등 필요)
  const getXPosition = (year: number) => {
    const minYear = -700000;
    const maxYear = new Date().getFullYear();
    const range = maxYear - minYear;
    return ((year - minYear) / range) * 100; // 백분율
  };

  return (
    <div className="timeline-container">
      {/* Era 배경들 */}
      {eras.map(era => {
        const startX = getXPosition(era.startYear);
        const endX = getXPosition(era.endYear);
        return (
          <div
            key={era.id}
            className="era-background"
            style={{
              left: `${startX}%`,
              width: `${endX - startX}%`,
              backgroundColor: `var(--era-${era.order}-bg)`
            }}
          >
            <div className="era-watermark">
              {era.watermarkLabel.ko} · {era.watermarkLabel.en}
              <br />
              <span className="era-period">{era.watermarkLabel.period}</span>
            </div>
          </div>
        );
      })}

      {/* 타임라인 축 */}
      <div className="timeline-axis" />

      {/* 카드들 */}
      {cards.map((card, index) => {
        const x = getXPosition(card.sortYear);
        const isUpper = card.position === 'upper';
        const isSelected = card.id === selectedCardId;
        const isMatched = searchMatchIds.size === 0 || searchMatchIds.has(card.id);
        const isFaded = searchMatchIds.size > 0 && !isMatched;

        return (
          <div
            key={card.id}
            className={`summary-card ${isUpper ? 'upper' : 'lower'} ${isSelected ? 'selected' : ''} ${isFaded ? 'faded' : ''}`}
            style={{ left: `${x}%` }}
            onClick={() => onCardClick(card.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onCardClick(card.id);
              }
            }}
          >
            <div className="card-connector" />
            <div className="card-content">
              <div className="card-year">{card.yearLabel}</div>
              <div className="card-title">{card.title}</div>
              <div className="card-keywords">
                {card.keywords.slice(0, 3).map((kw, i) => (
                  <span key={i} className="keyword">{kw}</span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}