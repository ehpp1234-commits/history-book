import React from 'react';
import './BottomSheet.css';
import type { CardData } from '../../data/types';
import { Concealed } from '../Concealed/Concealed';
import { BookmarkButton } from '../BookmarkButton/BookmarkButton';
import { ReferenceImage } from '../ReferenceImage/ReferenceImage';
import { WeightBar } from '../WeightBar/WeightBar';
import { HighlightText, highlightWhenRevealed } from '../HighlightText/HighlightText';

interface BottomSheetProps {
  card: CardData | null;
  isOpen: boolean;
  onClose: () => void;
  studyMode: boolean;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  /** 검색 중이면 현재 검색어. 제목·설명·키워드에 형광펜을 칠한다 */
  highlightQuery?: string;
}

export const BottomSheet: React.FC<BottomSheetProps> = ({
  card,
  isOpen,
  onClose,
  studyMode,
  isBookmarked,
  onToggleBookmark,
  highlightQuery = '',
}) => {
  if (!card) return null;

  const isKingCard = card.type === 'king' && card.kingData;
  const hl = (text: string) => highlightWhenRevealed(text, highlightQuery);

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
              {!isKingCard && <WeightBar weight={card.weight} showLabel />}
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

          <h2 className="card-title"><HighlightText text={card.title} query={highlightQuery} /></h2>

          {/* 참고 이미지: 로딩 실패 시 자동으로 숨김 (카드가 바뀌면 key로 초기화) */}
          <ReferenceImage src={card.imageUrl} caption={card.imageCaption} title={card.title} />
          
          <Concealed active={studyMode} display="block" className="card-description">
            {hl(card.description)}
          </Concealed>

          {/* King-specific sections */}
          {isKingCard && card.kingData && (
            <>
              <div className="king-mobile-section">
                <h3>🏆 주요 업적</h3>
                <ul>
                  {card.kingData.keyAchievements.map((achievement, idx) => (
                    <li key={idx}><Concealed active={studyMode}>{hl(achievement)}</Concealed></li>
                  ))}
                </ul>
              </div>

              {card.kingData.institutions.length > 0 && (
                <div className="king-mobile-section">
                  <h3>📜 주요 제도</h3>
                  <ul>
                    {card.kingData.institutions.map((inst, idx) => (
                      <li key={idx}><Concealed active={studyMode}>{hl(inst)}</Concealed></li>
                    ))}
                  </ul>
                </div>
              )}

              {card.kingData.books.length > 0 && (
                <div className="king-mobile-section">
                  <h3>📚 편찬 서적</h3>
                  <ul>
                    {card.kingData.books.map((book, idx) => (
                      <li key={idx}><Concealed active={studyMode}>{hl(book)}</Concealed></li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}

          {!isKingCard && card.tags && card.tags.length > 0 && (
            <div className="card-tags">
              {card.tags.map((tag, idx) => (
                <Concealed key={idx} active={studyMode} className="tag">
                  {(revealed) => <>#{hl(tag)(revealed)}</>}
                </Concealed>
              ))}
            </div>
          )}

          {isKingCard && card.tags && card.tags.length > 0 && (
            <div className="king-mobile-section">
              <h3>✏️ 한능검 키워드</h3>
              <div className="card-tags">
                {card.tags.map((keyword, idx) => (
                  <Concealed key={idx} active={studyMode} className="tag">{hl(keyword)}</Concealed>
                ))}
              </div>
            </div>
          )}

          {!isKingCard && card.relatedEvents && card.relatedEvents.length > 0 && (
            <div className="related-events">
              <h3>연관 사건</h3>
              <ul>
                {card.relatedEvents.map((event, idx) => (
                  <li key={idx}><Concealed active={studyMode}>{hl(event)}</Concealed></li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
