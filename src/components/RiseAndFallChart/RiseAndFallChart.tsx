import React, { useState, useRef, useEffect } from 'react';
import { riseAndFallEvents, type HistoricalEvent } from './chartData';
import './RiseAndFallChart.css';

export function RiseAndFallChart() {
  const [selectedEvent, setSelectedEvent] = useState<HistoricalEvent | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // 색상 매핑
  const getEventColor = (type: string): string => {
    switch (type) {
      case 'foundation': return '#10B981'; // 초록 (건국)
      case 'peak': return '#3B82F6'; // 파랑 (전성기)
      case 'crisis': return '#F59E0B'; // 주황 (위기)
      case 'fall': return '#EF4444'; // 빨강 (멸망)
      default: return '#6B7280';
    }
  };

  const getEventLabel = (type: string): string => {
    switch (type) {
      case 'foundation': return '건국';
      case 'peak': return '전성기';
      case 'crisis': return '위기';
      case 'fall': return '멸망';
      default: return '';
    }
  };

  // SVG 차트 생성
  const chartWidth = Math.max(3000, riseAndFallEvents.length * 150);
  const chartHeight = 300;
  const padding = { top: 40, right: 20, bottom: 60, left: 20 };
  const plotHeight = chartHeight - padding.top - padding.bottom;

  // 좌표 계산
  const xScale = (index: number) => {
    return padding.left + (index * (chartWidth - padding.left - padding.right) / (riseAndFallEvents.length - 1));
  };

  // score(0~100)를 SVG y좌표로 변환: 100점이 맨 위, 0점이 맨 아래
  const yScale = (score: number) => {
    return chartHeight - padding.bottom - (score / 100) * plotHeight;
  };

  // 왕조별 선 경로 생성: 같은 왕조의 사건끼리만 이어 그린다 (dynasty가 없으면 '선사' 그룹)
  const dynastyPalette = ['#6366F1', '#EC4899', '#14B8A6', '#F97316', '#84CC16', '#06B6D4', '#A855F7', '#EAB308'];
  const dynastyLines = (() => {
    const groups = new Map<string, string[]>();
    riseAndFallEvents.forEach((event, index) => {
      const key = event.dynasty ?? '선사';
      const point = `${xScale(index)} ${yScale(event.score)}`;
      const points = groups.get(key) ?? [];
      points.push(point);
      groups.set(key, points);
    });
    return Array.from(groups.entries())
      .filter(([, points]) => points.length > 1)
      .map(([dynasty, points], i) => ({
        dynasty,
        color: dynastyPalette[i % dynastyPalette.length],
        path: points.map((p, idx) => `${idx === 0 ? 'M' : 'L'} ${p}`).join(' ')
      }));
  })();

  // 터치/마우스 드래그 핸들러
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleEventClick = (event: HistoricalEvent) => {
    setSelectedEvent(event);
  };

  useEffect(() => {
    // 초기 스크롤 위치를 중간으로 설정
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = chartWidth / 3;
    }
  }, [chartWidth]);

  return (
    <div className="rise-fall-chart-container">
      <div className="chart-header">
        <h2 className="chart-title">🏛️ 한국사 흥망성쇠 그래프</h2>
        <p className="chart-subtitle">주요 왕조와 사건의 흥망성쇠를 한눈에</p>
      </div>

      <div className="chart-legend">
        <div className="legend-item">
          <span className="legend-dot foundation"></span>
          <span>건국</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot peak"></span>
          <span>전성기</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot crisis"></span>
          <span>위기</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot fall"></span>
          <span>멸망</span>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="chart-scroll-container"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        <svg
          width={chartWidth}
          height={chartHeight}
          className="chart-svg"
        >
          {/* 배경 그리드 */}
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width={chartWidth} height={chartHeight} fill="url(#grid)" />

          {/* 꺾은선 그래프 (왕조별) */}
          {dynastyLines.map(line => (
            <path
              key={line.dynasty}
              d={line.path}
              fill="none"
              stroke={line.color}
              strokeOpacity="0.6"
              strokeWidth="2.5"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          ))}

          {/* 이벤트 포인트 */}
          {riseAndFallEvents.map((event, index) => {
            const x = xScale(index);
            const y = yScale(event.score);
            const color = getEventColor(event.type);
            const isSelected = selectedEvent === event;

            return (
              <g key={index}>
                {/* 포인트 그림자 */}
                <circle
                  cx={x}
                  cy={y + 2}
                  r={isSelected ? 10 : 8}
                  fill="rgba(0,0,0,0.1)"
                />
                {/* 메인 포인트 */}
                <circle
                  cx={x}
                  cy={y}
                  r={isSelected ? 10 : 8}
                  fill={color}
                  stroke="white"
                  strokeWidth="2"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleEventClick(event)}
                  className="event-point"
                />
                {/* 선택 표시 */}
                {isSelected && (
                  <circle
                    cx={x}
                    cy={y}
                    r="14"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    opacity="0.5"
                  />
                )}
                {/* 연도 텍스트 */}
                <text
                  x={x}
                  y={chartHeight - 20}
                  textAnchor="middle"
                  fontSize="10"
                  fill="#64748B"
                  fontWeight={isSelected ? 'bold' : 'normal'}
                >
                  {event.displayYear}
                </text>
                {/* 왕조 텍스트 */}
                {event.dynasty && (
                  <text
                    x={x}
                    y={y - 15}
                    textAnchor="middle"
                    fontSize="11"
                    fill="#475569"
                    fontWeight="600"
                  >
                    {event.dynasty}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* 선택된 이벤트 상세 카드 */}
      {selectedEvent && (
        <div className="event-detail-card">
          <div className="event-card-header">
            <div className="event-type-badge" style={{ backgroundColor: getEventColor(selectedEvent.type) }}>
              {getEventLabel(selectedEvent.type)}
            </div>
            <span className="event-year">{selectedEvent.displayYear}</span>
          </div>
          <h3 className="event-title">{selectedEvent.title}</h3>
          <p className="event-description">
            {selectedEvent.description.split('\n').map((line, idx) => (
              <span key={idx}>
                {line}
                {idx < selectedEvent.description.split('\n').length - 1 && <br />}
              </span>
            ))}
          </p>
          <button
            className="close-detail-btn"
            onClick={() => setSelectedEvent(null)}
          >
            닫기
          </button>
        </div>
      )}

      <div className="chart-instruction">
        👈 좌우로 스와이프하여 역사 흐름을 탐색하세요
      </div>
    </div>
  );
}
