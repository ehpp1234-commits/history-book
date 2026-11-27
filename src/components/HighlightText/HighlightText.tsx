import React, { useMemo } from 'react';
import { findHighlightRanges } from '../../data/searchUtils';
import './HighlightText.css';

interface HighlightTextProps {
  text?: string | null;
  /** 현재 검색어. 비어 있으면 강조 없이 text만 출력 */
  query?: string | null;
}

/**
 * text 안에서 검색어와 일치하는 부분을 <mark>로 감싸 노란 형광펜으로 표시한다.
 * 대소문자·띄어쓰기·구두점 차이를 무시하고 매칭하며, 정규식을 쓰지 않아
 * 검색어에 특수문자가 있어도 오류가 나지 않는다.
 */
export const HighlightText: React.FC<HighlightTextProps> = ({ text, query }) => {
  const value = typeof text === 'string' ? text : '';
  const ranges = useMemo(() => findHighlightRanges(value, query), [value, query]);

  if (ranges.length === 0) return <>{value}</>;

  const nodes: React.ReactNode[] = [];
  let cursor = 0;
  ranges.forEach(([start, end], i) => {
    if (start > cursor) nodes.push(value.slice(cursor, start));
    nodes.push(
      <mark key={i} className="search-highlight">
        {value.slice(start, end)}
      </mark>
    );
    cursor = end;
  });
  if (cursor < value.length) nodes.push(value.slice(cursor));

  return <>{nodes}</>;
};

/**
 * Concealed(암기 모드 가림막)의 함수형 children으로 쓰는 도우미.
 * 가려진 동안(revealed=false)에는 검색어를 빼고 그려 정답 위치가 드러나지 않게 하고,
 * 공개됐거나 암기 모드가 꺼져 있으면(revealed=true) 형광펜을 칠한다.
 */
export const highlightWhenRevealed =
  (text: string | null | undefined, query: string | null | undefined) =>
  (revealed: boolean): React.ReactNode =>
    <HighlightText text={text} query={revealed ? query : ''} />;
