import React from 'react';
import './BottomSheet.css';
import type { CardData } from '../../data/types';

interface BottomSheetProps {
  card: CardData | null;
  isOpen: boolean;
  onClose: () => void;
}

export const BottomSheet: React.FC<BottomSheetProps> = ({ card, isOpen, onClose }) => {
  if (!card) return null;

  return (
    <>
      <div
        className={`bottom-sheet-overlay ${isOpen ? 'active' : ''}`}
        onClick={onClose}
        role="button"
        tabIndex={-1}
        aria-label="닫기"
        onKeyDown={(e) => {
          if (e.key === 'Escape') onClose();
        }}
      />
      <div className={`bottom-sheet ${isOpen ? 'open' : ''}`}>
        <div className="bottom-sheet-handle" />
        
        <div className="bottom-sheet-content">
          <div className="bottom-sheet-header">
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
        </div>
      </div>
    </>
  );
};
