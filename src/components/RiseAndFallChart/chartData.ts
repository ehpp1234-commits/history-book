// 흥망성쇠 데이터 타입
export type EventType = 'foundation' | 'peak' | 'crisis' | 'fall';

export interface HistoricalEvent {
  year: number;
  displayYear: string;
  title: string;
  description: string;
  type: EventType;
  score: number; // 0~100 국력/번영도
  dynasty?: string;
}

// 흥망성쇠 주요 이벤트 데이터
export const riseAndFallEvents: HistoricalEvent[] = [
  // 선사 & 고조선
  { year: -700000, displayYear: 'B.C. 70만년', title: '구석기 시대', description: '한반도 인류 거주 시작\n뗀석기 사용', type: 'foundation', score: 40 },
  { year: -2333, displayYear: 'B.C. 2333년', title: '고조선 건국', description: '단군왕검 건국\n8조법 반포', type: 'foundation', score: 45, dynasty: '고조선' },
  { year: -108, displayYear: 'B.C. 108년', title: '고조선 멸망', description: '한 무제의 침략\n한사군 설치', type: 'fall', score: 10, dynasty: '고조선' },
  
  // 삼국시대
  { year: -37, displayYear: 'B.C. 37년', title: '고구려 건국', description: '주몽(동명성왕) 건국\n졸본성', type: 'foundation', score: 45, dynasty: '고구려' },
  { year: -18, displayYear: 'B.C. 18년', title: '백제 건국', description: '온조왕 건국\n한강 유역', type: 'foundation', score: 45, dynasty: '백제' },
  { year: -57, displayYear: 'B.C. 57년', title: '신라 건국', description: '박혁거세 건국\n경주 지역', type: 'foundation', score: 45, dynasty: '신라' },
  { year: 400, displayYear: '4세기', title: '백제 전성기', description: '근초고왕\n마한 완전 복속', type: 'peak', score: 95, dynasty: '백제' },
  { year: 475, displayYear: '475년', title: '백제 위기', description: '고구려 장수왕 침입\n한성 함락, 웅진 천도', type: 'crisis', score: 35, dynasty: '백제' },
  { year: 500, displayYear: '5세기', title: '고구려 전성기', description: '광개토왕·장수왕\n만주 정복', type: 'peak', score: 100, dynasty: '고구려' },
  { year: 540, displayYear: '6세기', title: '신라 성장', description: '법흥왕·진흥왕\n한강 유역 차지', type: 'peak', score: 85, dynasty: '신라' },
  { year: 562, displayYear: '562년', title: '가야 멸망', description: '신라에 병합\n대가야 멸망', type: 'fall', score: 12, dynasty: '가야' },
  { year: 660, displayYear: '660년', title: '백제 멸망', description: '나당연합군 공격\n황산벌 전투 패배', type: 'fall', score: 8, dynasty: '백제' },
  { year: 668, displayYear: '668년', title: '고구려 멸망', description: '나당연합군 공격\n평양성 함락', type: 'fall', score: 5, dynasty: '고구려' },
  { year: 676, displayYear: '676년', title: '신라 삼국통일', description: '당나라 축출\n매초성 전투 승리', type: 'peak', score: 90, dynasty: '신라' },
  
  // 남북국시대
  { year: 698, displayYear: '698년', title: '발해 건국', description: '대조영 건국\n동모산', type: 'foundation', score: 45, dynasty: '발해' },
  { year: 800, displayYear: '9세기', title: '발해 전성기', description: '선왕 시대\n해동성국', type: 'peak', score: 92, dynasty: '발해' },
  { year: 926, displayYear: '926년', title: '발해 멸망', description: '거란(요)에 멸망\n대광현 항복', type: 'fall', score: 5, dynasty: '발해' },
  { year: 935, displayYear: '935년', title: '신라 멸망', description: '경순왕 항복\n고려에 병합', type: 'fall', score: 10, dynasty: '신라' },
  
  // 고려
  { year: 918, displayYear: '918년', title: '고려 건국', description: '왕건 건국\n후삼국 통일', type: 'foundation', score: 50, dynasty: '고려' },
  { year: 1019, displayYear: '1019년', title: '귀주대첩', description: '강감찬 대승\n거란 격퇴', type: 'peak', score: 88, dynasty: '고려' },
  { year: 1170, displayYear: '1170년', title: '무신정변', description: '정중부의 난\n무신정권 시작', type: 'crisis', score: 40, dynasty: '고려' },
  { year: 1231, displayYear: '1231~1259년', title: '몽골 침략', description: '30년간 항쟁\n강화도 천도', type: 'crisis', score: 32, dynasty: '고려' },
  { year: 1351, displayYear: '1351년', title: '공민왕 개혁', description: '반원 자주 정책\n정동행성 폐지', type: 'crisis', score: 45, dynasty: '고려' },
  { year: 1392, displayYear: '1392년', title: '고려 멸망', description: '이성계 위화도 회군\n조선 건국', type: 'fall', score: 8, dynasty: '고려' },
  
  // 조선
  { year: 1392, displayYear: '1392년', title: '조선 건국', description: '이성계(태조) 건국\n한양 천도', type: 'foundation', score: 50, dynasty: '조선' },
  { year: 1446, displayYear: '1446년', title: '세종 전성기', description: '훈민정음 반포\n과학·문화 발전', type: 'peak', score: 95, dynasty: '조선' },
  { year: 1592, displayYear: '1592~1598년', title: '임진왜란', description: '7년 전쟁\n이순신 활약', type: 'crisis', score: 35, dynasty: '조선' },
  { year: 1636, displayYear: '1636년', title: '병자호란', description: '청나라 침입\n남한산성 항전', type: 'crisis', score: 30, dynasty: '조선' },
  { year: 1776, displayYear: '18세기', title: '영정조 중흥', description: '영조·정조 개혁\n문예부흥', type: 'peak', score: 88, dynasty: '조선' },
  { year: 1863, displayYear: '1863년', title: '흥선대원군', description: '경복궁 중건\n쇄국정책', type: 'crisis', score: 40, dynasty: '조선' },
  { year: 1897, displayYear: '1897년', title: '대한제국', description: '고종 황제 즉위\n광무개혁', type: 'foundation', score: 40, dynasty: '대한제국' },
  { year: 1910, displayYear: '1910년', title: '경술국치', description: '일본에 강제 병합\n대한제국 멸망', type: 'fall', score: 3, dynasty: '대한제국' },
  
  // 현대
  { year: 1919, displayYear: '1919년', title: '3·1 운동', description: '독립 만세 운동\n임시정부 수립', type: 'foundation', score: 40, dynasty: '독립운동' },
  { year: 1945, displayYear: '1945년', title: '8·15 광복', description: '일본 항복\n해방', type: 'foundation', score: 45, dynasty: '광복' },
  { year: 1948, displayYear: '1948년', title: '대한민국 수립', description: '8·15 정부 수립\n제헌 헌법', type: 'foundation', score: 50, dynasty: '대한민국' },
  { year: 1950, displayYear: '1950년', title: '6·25 전쟁', description: '북한 남침\n3년 전쟁', type: 'crisis', score: 30, dynasty: '대한민국' },
  { year: 1987, displayYear: '1987년', title: '6월 민주항쟁', description: '민주화 운동\n대통령 직선제', type: 'peak', score: 85, dynasty: '대한민국' },
  { year: 2024, displayYear: '현재', title: '현대 대한민국', description: '민주 공화국\n선진국 도약', type: 'peak', score: 95, dynasty: '대한민국' }
];
