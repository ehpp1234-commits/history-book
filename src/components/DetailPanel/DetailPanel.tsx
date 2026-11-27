import React from 'react';
import './DetailPanel.css';
import type { CardData } from '../../data/types';

interface DetailPanelProps {
  card: CardData | null;
  onClose: () => void;
}

export const DetailPanel: React.FC<DetailPanelProps> = ({ card, onClose }) => {
  if (!card) return null;

  return (
    <aside className="detail-panel" role="complementary" aria-label="상세 정보">
      <div className="detail-panel-header">
        <div>
          <span className="card-year">{card.year}</span>
          <span className="card-weight">중요도 {card.weight}/5</span>
        </div>
        <button className="close-btn" onClick={onClose} aria-label="닫기">✕</button>
      </div>

      <h2 className="card-title">{card.title}</h2>
      
      <div className="card-description">
        {card.description}
      </div>

      {card.tags && card.tags.length > 0 && (
        <div className="card-tags">
          {card.tags.map((tag, idx) => (
            <span key={idx} className="tag">#{tag}</span>
          ))}
        </div>
      )}

      {card.relatedEvents && card.relatedEvents.length > 0 && (
        <div className="related-events">
          <h3>연관 사건</h3>
          <ul>
            {card.relatedEvents.map((event, idx) => (
              <li key={idx}>{event}</li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
};
