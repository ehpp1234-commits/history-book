import React from 'react';
import './WeightBar.css';

interface WeightBarProps {
  /** 출제 비중 (1~5) */
  weight: number;
  max?: number;
  /** true이면 "출제 비중 n/5" 텍스트를 함께 표시 */
  showLabel?: boolean;
}

/**
 * 출제 비중(weight)을 5칸 게이지로 보여준다.
 * 암기 모드와 무관하게 항상 표시되므로 Concealed로 감싸지 않는다.
 */
export const WeightBar: React.FC<WeightBarProps> = ({ weight, max = 5, showLabel = false }) => {
  const value = Number.isFinite(weight) ? Math.max(0, Math.min(max, Math.round(weight))) : 0;

  return (
    <span
      className="weight-bar"
      role="img"
      aria-label={`출제 비중 ${value}/${max}`}
      title={`출제 비중 ${value}/${max}`}
    >
      <span className="weight-bar-segments" aria-hidden="true">
        {Array.from({ length: max }, (_, i) => (
          <span key={i} className={`weight-bar-segment ${i < value ? 'filled' : ''}`} />
        ))}
      </span>
      {showLabel && (
        <span className="weight-bar-label" aria-hidden="true">
          출제 비중 {value}/{max}
        </span>
      )}
    </span>
  );
};
