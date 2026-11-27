import React from 'react';
import type { KingData } from '../../data/types';
import './KingsTimeline.css';

interface KingsTimelineProps {
  kings: KingData[];
  onKingClick: (king: KingData) => void;
  isDarkMode: boolean;
}

export function KingsTimeline({ kings, onKingClick, isDarkMode }: KingsTimelineProps) {
  // Group kings by dynasty
  const dynastyGroups = {
    '고구려': kings.filter(k => k.dynasty === '고구려'),
    '백제': kings.filter(k => k.dynasty === '백제'),
    '신라': kings.filter(k => k.dynasty === '신라'),
    '발해': kings.filter(k => k.dynasty === '발해'),
    '고려': kings.filter(k => k.dynasty === '고려'),
    '조선': kings.filter(k => k.dynasty === '조선')
  };

  const dynastyColors: Record<string, { bg: string, bgDark: string }> = {
    '고구려': { bg: '#FFF4E6', bgDark: '#3A3630' },
    '백제': { bg: '#F3EBD8', bgDark: '#38352F' },
    '신라': { bg: '#FFF9ED', bgDark: '#3B3832' },
    '발해': { bg: '#F0F4F8', bgDark: '#2F3338' },
    '고려': { bg: '#E4EFE9', bgDark: '#2E3835' },
    '조선': { bg: '#E8EEF5', bgDark: '#2F3338' }
  };

  return (
    <div className="kings-timeline-container">
      <div className="kings-intro">
        <h2>🤴 역대 왕 정리</h2>
        <p>한능검 시험에 자주 출제되는 주요 왕들의 재위 연도와 핵심 업적을 정리했습니다.</p>
      </div>

      {Object.entries(dynastyGroups).map(([dynasty, kingsList]) => {
        if (kingsList.length === 0) return null;
        
        const bgColor = isDarkMode ? dynastyColors[dynasty].bgDark : dynastyColors[dynasty].bg;
        
        return (
          <section
            key={dynasty}
            id={`dynasty-${dynasty}`}
            className="dynasty-section"
            style={{ backgroundColor: bgColor }}
          >
            <div className="dynasty-header">
              <h3 className="dynasty-name">{dynasty}</h3>
              <span className="dynasty-count">{kingsList.length}명</span>
            </div>

            <div className="kings-list">
              {kingsList.map((king) => (
                <div
                  key={king.id}
                  className="king-card"
                  onClick={() => onKingClick(king)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onKingClick(king);
                    }
                  }}
                >
                  <div className="king-card-header">
                    <div className="king-name-order">
                      {dynasty === '조선' && <span className="king-order">{king.order}대</span>}
                      <h4 className="king-name">{king.name}</h4>
                    </div>
                    <span className="king-reign">{king.reignStart} ~ {king.reignEnd}</span>
                  </div>

                  <div className="king-achievements">
                    {king.keyAchievements.slice(0, 3).map((achievement, idx) => (
                      <span key={idx} className="achievement-tag">✓ {achievement}</span>
                    ))}
                  </div>

                  {(king.institutions.length > 0 || king.books.length > 0) && (
                    <div className="king-keywords">
                      {king.institutions.slice(0, 2).map((inst, idx) => (
                        <span key={`inst-${idx}`} className="keyword-badge institution">📜 {inst}</span>
                      ))}
                      {king.books.slice(0, 2).map((book, idx) => (
                        <span key={`book-${idx}`} className="keyword-badge book">📚 {book}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
