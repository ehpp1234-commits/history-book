import React from 'react';
import './DetailPanel.css';
import type { CardData } from '../../data/types';

interface DetailPanelProps {
  card: CardData | null;
  onClose: () => void;
}

export const DetailPanel: React.FC<DetailPanelProps> = ({ card, onClose }) => {
  if (!card) return null;

  const isKingCard = card.type === 'king' && card.kingData;

  return (
    <aside className="detail-panel" role="complementary" aria-label="상세 정보">
      <div className="detail-panel-header">
        <div>
          <span className="card-year">{card.year}</span>
          {!isKingCard && <span className="card-weight">중요도 {card.weight}/5</span>}
        </div>
        <button className="close-btn" onClick={onClose} aria-label="닫기">✕</button>
      </div>

      <h2 className="card-title">{card.title}</h2>
      
      <div className="card-description">
        {card.description}
      </div>

      {/* King-specific details */}
      {isKingCard && card.kingData && (
        <>
          <div className="king-detail-section">
            <h3>🏆 주요 업적</h3>
            <ul className="king-achievements-list">
              {card.kingData.keyAchievements.map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
              ))}
            </ul>
          </div>

          {card.kingData.institutions.length > 0 && (
            <div className="king-detail-section">
              <h3>📜 주요 제도</h3>
              <ul className="king-items-list">
                {card.kingData.institutions.map((inst, idx) => (
                  <li key={idx}>{inst}</li>
                ))}
              </ul>
            </div>
          )}

          {card.kingData.books.length > 0 && (
            <div className="king-detail-section">
              <h3>📚 편찬 서적</h3>
              <ul className="king-items-list">
                {card.kingData.books.map((book, idx) => (
                  <li key={idx}>{book}</li>
                ))}
              </ul>
            </div>
          )}

          {card.kingData.majorEvents.length > 0 && (
            <div className="king-detail-section">
              <h3>🔍 주요 사건</h3>
              <ul className="king-events-list">
                {card.kingData.majorEvents.map((event, idx) => (
                  <li key={idx}>{event}</li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}

      {/* Regular event card tags */}
      {!isKingCard && card.tags && card.tags.length > 0 && (
        <div className="card-tags">
          {card.tags.map((tag, idx) => (
            <span key={idx} className="tag">#{tag}</span>
          ))}
        </div>
      )}

      {/* King exam keywords */}
      {isKingCard && card.tags && card.tags.length > 0 && (
        <div className="king-detail-section">
          <h3>✏️ 한능검 출제 키워드</h3>
          <div className="card-tags">
            {card.tags.map((keyword, idx) => (
              <span key={idx} className="tag exam-keyword">{keyword}</span>
            ))}
          </div>
        </div>
      )}

      {!isKingCard && card.relatedEvents && card.relatedEvents.length > 0 && (
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
