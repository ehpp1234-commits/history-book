import React, { useState, useEffect } from 'react';
import './Concealed.css';

interface ConcealedProps {
  /** true이면 내용을 블러 처리한다 (암기 모드) */
  active: boolean;
  children: React.ReactNode;
  className?: string;
  /** 'block'이면 div, 기본값은 span */
  display?: 'inline' | 'block';
}

/**
 * 암기 모드에서 내용을 가리는 래퍼. 가려진 영역을 누르면 이 항목만 공개된다.
 * 클릭이 부모 카드(상세 열기)로 전파되지 않도록 stopPropagation 처리한다.
 */
export const Concealed: React.FC<ConcealedProps> = ({
  active,
  children,
  className = '',
  display = 'inline',
}) => {
  const [revealed, setRevealed] = useState(false);

  // 암기 모드를 껐다 켜면 다시 가려진다
  useEffect(() => {
    setRevealed(false);
  }, [active]);

  const Tag = display === 'block' ? 'div' : 'span';

  if (!active || revealed) {
    return <Tag className={className}>{children}</Tag>;
  }

  const reveal = () => setRevealed(true);

  return (
    <Tag
      className={`${className} concealed ${display === 'block' ? 'concealed-block' : ''}`}
      role="button"
      tabIndex={0}
      title="눌러서 정답 보기"
      aria-label="가려진 내용. 눌러서 정답 보기"
      onClick={(e) => {
        e.stopPropagation();
        reveal();
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          e.stopPropagation();
          reveal();
        }
      }}
    >
      <span className="concealed-content" aria-hidden="true">
        {children}
      </span>
    </Tag>
  );
};
