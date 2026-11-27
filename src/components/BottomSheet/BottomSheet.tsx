import React, { useState } from 'react';
import './BottomSheet.css';
import type { CardData } from '../../data/types';
import { Concealed } from '../Concealed/Concealed';
import { BookmarkButton } from '../BookmarkButton/BookmarkButton';

interface BottomSheetProps {
  card: CardData | null;
  isOpen: boolean;
  onClose: () => void;
  studyMode: boolean;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
}

export const BottomSheet: React.FC<BottomSheetProps> = ({
  card,
  isOpen,
  onClose,
  studyMode,
  isBookmarked,
  onToggleBookmark,
}) => {
  const [imageError, setImageError] = useState(false);

  if (!card) return null;

  const isKingCard = card.type === 'king' && card.kingData;
  const hasImage = card.imageUrl && !imageError;

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
        
        {/* key: 카드가 바뀌면 암기 모드 공개 상태를 초기화 */}
        <div className="bottom-sheet-content" key={card.id}>
          <div className="bottom-sheet-header">
            <div>
              <Concealed active={studyMode} className="card-year">{card.year}</Concealed>
              {!isKingCard && <span className="card-weight">중요도 {card.weight}/5</span>}
            </div>
            <div className="sheet-actions">
              {!isKingCard && (
                <BookmarkButton
                  active={isBookmarked}
                  onToggle={() => onToggleBookmark(card.id)}
                  label={card.title}
                />
              )}
              <button className="close-btn" onClick={onClose} aria-label="닫기">✕</button>
            </div>
          </div>

          <h2 className="card-title">{card.title}</h2>

          {/* Reference Image Card */}
          {hasImage && (
            <div className="reference-image-card">
              <img
                src={card.imageUrl}
                alt={card.imageCaption || card.title}
                className="reference-image"
                onError={() => setImageError(true)}
                loading="lazy"
              />
              {card.imageCaption && (
                <p className="image-caption">{card.imageCaption}</p>
              )}
            </div>
          )}
          
          <Concealed active={studyMode} display="block" className="card-description">
            {card.description}
          </Concealed>

          {/* King-specific sections */}
          {isKingCard && card.kingData && (
            <>
              <div className="king-mobile-section">
                <h3>🏆 주요 업적</h3>
                <ul>
                  {card.kingData.keyAchievements.map((achievement, idx) => (
                    <li key={idx}><Concealed active={studyMode}>{achievement}</Concealed></li>
                  ))}
                </ul>
              </div>

              {card.kingData.institutions.length > 0 && (
                <div className="king-mobile-section">
                  <h3>📜 주요 제도</h3>
                  <ul>
                    {card.kingData.institutions.map((inst, idx) => (
                      <li key={idx}><Concealed active={studyMode}>{inst}</Concealed></li>
                    ))}
                  </ul>
                </div>
              )}

              {card.kingData.books.length > 0 && (
                <div className="king-mobile-section">
                  <h3>📚 편찬 서적</h3>
                  <ul>
                    {card.kingData.books.map((book, idx) => (
                      <li key={idx}><Concealed active={studyMode}>{book}</Concealed></li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}

          {!isKingCard && card.tags && card.tags.length > 0 && (
            <div className="card-tags">
              {card.tags.map((tag, idx) => (
                <Concealed key={idx} active={studyMode} className="tag">#{tag}</Concealed>
              ))}
            </div>
          )}

          {isKingCard && card.tags && card.tags.length > 0 && (
            <div className="king-mobile-section">
              <h3>✏️ 한능검 키워드</h3>
              <div className="card-tags">
                {card.tags.map((keyword, idx) => (
                  <Concealed key={idx} active={studyMode} className="tag">{keyword}</Concealed>
                ))}
              </div>
            </div>
          )}

          {!isKingCard && card.relatedEvents && card.relatedEvents.length > 0 && (
            <div className="related-events">
              <h3>연관 사건</h3>
              <ul>
                {card.relatedEvents.map((event, idx) => (
                  <li key={idx}><Concealed active={studyMode}>{event}</Concealed></li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
