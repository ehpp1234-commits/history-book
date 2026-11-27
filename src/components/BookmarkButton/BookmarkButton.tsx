import React from 'react';
import './BookmarkButton.css';

interface BookmarkButtonProps {
  active: boolean;
  onToggle: () => void;
  /** 접근성 레이블에 쓰는 사건 이름 */
  label: string;
}

/**
 * 북마크(☆/★) 버튼. 카드나 상세 패널 위에 놓이므로
 * 클릭/키 이벤트가 부모로 전파되지 않게 막는다 (상세 보기가 같이 열리는 버블링 방지).
 */
export const BookmarkButton: React.FC<BookmarkButtonProps> = ({ active, onToggle, label }) => (
  <button
    type="button"
    className={`bookmark-btn ${active ? 'active' : ''}`}
    aria-pressed={active}
    aria-label={active ? `${label} 북마크 해제` : `${label} 북마크 추가`}
    title={active ? '북마크 해제' : '북마크 추가'}
    onClick={(e) => {
      e.stopPropagation();
      onToggle();
    }}
    onKeyDown={(e) => {
      // 부모 카드의 Enter/Space 핸들러가 실행되어 상세가 열리는 것을 막는다
      e.stopPropagation();
    }}
  >
    {active ? '★' : '☆'}
  </button>
);
