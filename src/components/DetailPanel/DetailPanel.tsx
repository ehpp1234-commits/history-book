import React from 'react';
import './DetailPanel.css';
import type { CardData } from '../../data/types';
import { Concealed } from '../Concealed/Concealed';
import { BookmarkButton } from '../BookmarkButton/BookmarkButton';
import { ReferenceImage } from '../ReferenceImage/ReferenceImage';
import { WeightBar } from '../WeightBar/WeightBar';

interface DetailPanelProps {
  card: CardData | null;
  onClose: () => void;
  studyMode: boolean;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
}

export const DetailPanel: React.FC<DetailPanelProps> = ({
  card,
  onClose,
  studyMode,
  isBookmarked,
  onToggleBookmark,
}) => {
  if (!card) return null;

  const isKingCard = card.type === 'king' && card.kingData;

  return (
    <aside className="detail-panel" role="complementary" aria-label="상세 정보">
      {/* key: 카드가 바뀌면 암기 모드 공개 상태를 초기화 */}
      <React.Fragment key={card.id}>
      <div className="detail-panel-header">
        <div>
          <Concealed active={studyMode} className="card-year">{card.year}</Concealed>
          {!isKingCard && <WeightBar weight={card.weight} showLabel />}
        </div>
        <div className="panel-actions">
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

      {/* 참고 이미지: 로딩 실패 시 자동으로 숨김 (카드가 바뀌면 Fragment key로 초기화) */}
      <ReferenceImage src={card.imageUrl} caption={card.imageCaption} title={card.title} />
      
      <Concealed active={studyMode} display="block" className="card-description">
        {card.description}
      </Concealed>

      {/* King-specific details */}
      {isKingCard && card.kingData && (
        <>
          <div className="king-detail-section">
            <h3>🏆 주요 업적</h3>
            <ul className="king-achievements-list">
              {card.kingData.keyAchievements.map((achievement, idx) => (
                <li key={idx}><Concealed active={studyMode}>{achievement}</Concealed></li>
              ))}
            </ul>
          </div>

          {card.kingData.institutions.length > 0 && (
            <div className="king-detail-section">
              <h3>📜 주요 제도</h3>
              <ul className="king-items-list">
                {card.kingData.institutions.map((inst, idx) => (
                  <li key={idx}><Concealed active={studyMode}>{inst}</Concealed></li>
                ))}
              </ul>
            </div>
          )}

          {card.kingData.books.length > 0 && (
            <div className="king-detail-section">
              <h3>📚 편찬 서적</h3>
              <ul className="king-items-list">
                {card.kingData.books.map((book, idx) => (
                  <li key={idx}><Concealed active={studyMode}>{book}</Concealed></li>
                ))}
              </ul>
            </div>
          )}

          {card.kingData.majorEvents.length > 0 && (
            <div className="king-detail-section">
              <h3>🔍 주요 사건</h3>
              <ul className="king-events-list">
                {card.kingData.majorEvents.map((event, idx) => (
                  <li key={idx}><Concealed active={studyMode}>{event}</Concealed></li>
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
            <Concealed key={idx} active={studyMode} className="tag">#{tag}</Concealed>
          ))}
        </div>
      )}

      {/* King exam keywords */}
      {isKingCard && card.tags && card.tags.length > 0 && (
        <div className="king-detail-section">
          <h3>✏️ 한능검 출제 키워드</h3>
          <div className="card-tags">
            {card.tags.map((keyword, idx) => (
              <Concealed key={idx} active={studyMode} className="tag exam-keyword">{keyword}</Concealed>
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
      </React.Fragment>
    </aside>
  );
};
