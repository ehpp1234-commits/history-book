/**
 * Korean History Timeline Dashboard - Historical Data
 * 
 * This module contains the core historical data for the Korean History Timeline Dashboard.
 * It includes metadata for all 8 major eras of Korean history (from prehistoric times to modern era)
 * and will contain summary cards for key historical events, systems, and cultural developments.
 * 
 * Data Structure:
 * - eras: Array of 8 Era objects with metadata including time periods, colors, and styling
 * - cards: Array of SummaryCard objects representing historical events and concepts
 *          (Cards will be populated in subsequent tasks 3.2-3.9)
 * 
 * Requirements Coverage:
 * - Requirement 8-15: Era definitions and historical periods
 * - Requirement 16.1-16.2: Data structure with 8 Eras
 * - Requirement 19: Era-specific background styling (colors, patterns, watermarks)
 */

import type { Era, SummaryCard, HistoryData } from './types';

/**
 * eras: Array of 8 major historical periods in Korean history
 * 
 * Each Era represents a distinct period with unique visual styling:
 * - Unique background colors for light and dark themes
 * - Decorative patterns reflecting the era's cultural characteristics
 * - Multilingual watermark labels for immersive visual experience
 * 
 * Era ordering (0-7) reflects chronological sequence from prehistoric to modern times.
 * Timeline axis colors are distinct between adjacent eras for clear visual separation.
 * 
 * Background Color Design Philosophy:
 * - Era 1 (Prehistoric): Warm ochre/beige tones (#F5EFE6) - earth and pottery
 * - Era 2 (Ancient): Deep golden/bronze tones (#F3EBD8) - gold crown era
 * - Era 3 (Goryeo): Calm jade/celadon tones (#E4EFE9) - celadon pottery
 * - Era 4 (Early Joseon): Elegant paper/indigo tones (#E8EEF5) - Hangeul and paper
 * - Era 5 (Late Joseon): Antique ink/grey tones (#EAE8E4) - ink landscape paintings
 * - Era 6 (Enlightenment): Transitional sepia/brick tones (#EFE4DC) - modernization period
 * - Era 7 (Colonial): Heavy charcoal/dark slate (#2B2E33) - dark period (requires light text)
 * - Era 8 (Modern): Bright sky blue/white tones (#EAF2FA) - contemporary optimism
 */
export const eras: Era[] = [
  {
    id: 'era-1-prehistoric',
    name: '선사 시대 및 국가의 형성',
    periodLabel: 'B.C. 700,000 ~ B.C. 1세기',
    startYear: -700000,
    endYear: -1,
    color: '#8B5E3C', // Timeline axis color: Earthy brown
    order: 0,
    bgColor: '#F5EFE6', // Light theme: Warm ochre/beige
    bgColorDark: '#3D3A36', // Dark theme: 20% darker earthy tone
    pattern: 'pattern-prehistoric-comb', // Comb-pattern pottery (빗살무늬토기)
    watermarkLabel: {
      ko: '선사',
      en: 'PREHISTORIC',
      period: 'B.C. 700,000–B.C. 1',
    },
  },
  {
    id: 'era-2-ancient',
    name: '고대: 삼국 및 남북국',
    periodLabel: 'B.C. 1세기 ~ 935년',
    startYear: -100,
    endYear: 935,
    color: '#C0392B', // Timeline axis color: Deep red
    order: 1,
    bgColor: '#F3EBD8', // Light theme: Golden/bronze tone
    bgColorDark: '#3A3630', // Dark theme: 20% darker bronze
    pattern: 'pattern-ancient-crown', // Silla gold crown, Goguryeo three-legged crow
    watermarkLabel: {
      ko: '고대',
      en: 'ANCIENT',
      period: 'B.C. 1–935',
    },
  },
  {
    id: 'era-3-goryeo',
    name: '고려',
    periodLabel: '918 ~ 1392년',
    startYear: 918,
    endYear: 1392,
    color: '#2980B9', // Timeline axis color: Royal blue
    order: 2,
    bgColor: '#E4EFE9', // Light theme: Calm jade/celadon tone
    bgColorDark: '#2E3835', // Dark theme: 20% darker jade
    pattern: 'pattern-goryeo-celadon', // Inlaid celadon crane pattern (상감청자 운학문)
    watermarkLabel: {
      ko: '고려',
      en: 'GORYEO',
      period: '918–1392',
    },
  },
  {
    id: 'era-4-joseon-early',
    name: '조선 전기',
    periodLabel: '1392 ~ 1599년',
    startYear: 1392,
    endYear: 1599,
    color: '#27AE60', // Timeline axis color: Emerald green
    order: 3,
    bgColor: '#E8EEF5', // Light theme: Elegant paper/indigo tone
    bgColorDark: '#2F3338', // Dark theme: 20% darker slate
    pattern: 'pattern-joseon-hangeul', // Hunminjeongeum characters and lattice window (훈민정음 자모·창호지 격자)
    watermarkLabel: {
      ko: '조선 전기',
      en: 'EARLY JOSEON',
      period: '1392–1599',
    },
  },
  {
    id: 'era-5-joseon-late',
    name: '조선 후기',
    periodLabel: '1592 ~ 1869년',
    startYear: 1592,
    endYear: 1869,
    color: '#8E44AD', // Timeline axis color: Purple
    order: 4,
    bgColor: '#EAE8E4', // Light theme: Antique ink/grey tone
    bgColorDark: '#37353A', // Dark theme: 20% darker grey
    pattern: 'pattern-joseon-ink', // Ink landscape painting gradient (수묵 산수화 그라데이션)
    watermarkLabel: {
      ko: '조선 후기',
      en: 'LATE JOSEON',
      period: '1592–1869',
    },
  },
  {
    id: 'era-6-enlightenment',
    name: '개항기',
    periodLabel: '1863 ~ 1910년',
    startYear: 1863,
    endYear: 1910,
    color: '#D35400', // Timeline axis color: Orange
    order: 5,
    bgColor: '#EFE4DC', // Light theme: Transitional sepia/brick tone
    bgColorDark: '#3A3330', // Dark theme: 20% darker sepia
    pattern: 'pattern-enlightenment-newspaper', // Enlightenment-era newspaper print and Taegeuk pattern (개화기 신문·태극 문양)
    watermarkLabel: {
      ko: '개항기',
      en: 'ENLIGHTENMENT',
      period: '1863–1910',
    },
  },
  {
    id: 'era-7-colonial',
    name: '일제 강점기',
    periodLabel: '1910 ~ 1945년',
    startYear: 1910,
    endYear: 1945,
    color: '#7F8C8D', // Timeline axis color: Steel grey
    order: 6,
    bgColor: '#2B2E33', // Light theme: Dark charcoal (Note: Requires light text per Requirement 19.6)
    bgColorDark: '#1E2024', // Dark theme: Slightly lighter for dark mode contrast
    pattern: 'pattern-independence-declaration', // Independence declaration text watermark (독립선언서)
    watermarkLabel: {
      ko: '일제 강점기',
      en: 'COLONIAL PERIOD',
      period: '1910–1945',
    },
  },
  {
    id: 'era-8-modern',
    name: '현대사',
    periodLabel: '1945 ~ 현재',
    startYear: 1945,
    endYear: new Date().getFullYear(), // Dynamic end year (current year)
    color: '#16A085', // Timeline axis color: Teal
    order: 7,
    bgColor: '#EAF2FA', // Light theme: Bright sky blue/white tone
    bgColorDark: '#2D3338', // Dark theme: 20% darker slate
    pattern: 'pattern-modern-skyline', // Modern city skyline and Taegeuk color gradient (현대 도시·태극 컬러)
    watermarkLabel: {
      ko: '현대사',
      en: 'MODERN',
      period: '1945–현재',
    },
  },
];

/**
 * cards: Array of historical event and concept summary cards
 * 
 * Each SummaryCard represents a key historical event, political development,
 * institutional change, economic/cultural achievement, or significant figure.
 * 
 * Cards are positioned either 'upper' (political events) or 'lower' (systems/culture)
 * relative to the timeline axis, and are connected to Year_Nodes via vertical connector lines.
 * 
 * This array will be populated in subsequent implementation tasks:
 * - Task 3.2: Era 1 - Prehistoric and State Formation (B.C. 700,000 ~ B.C. 1)
 * - Task 3.3: Era 2 - Ancient Period: Three Kingdoms and North-South States (B.C. 1 ~ 935)
 * - Task 3.4: Era 3 - Goryeo Dynasty (918 ~ 1392)
 * - Task 3.5: Era 4 - Early Joseon Dynasty (1392 ~ 1599)
 * - Task 3.6: Era 5 - Late Joseon Dynasty (1592 ~ 1869)
 * - Task 3.7: Era 6 - Enlightenment Period (1863 ~ 1910)
 * - Task 3.8: Era 7 - Japanese Colonial Period (1910 ~ 1945)
 * - Task 3.9: Era 8 - Modern Era (1945 ~ present)
 * 
 * Requirements Coverage:
 * - Requirement 8-15: Detailed historical content for each era
 * - Requirement 16.3-16.4: Card structure with all required fields
 * - Requirement 2.1-2.9: Card positioning and display rules
 */
// MVP: 각 Era당 2-3개 대표 항목만 포함 (간소화 버전)

export const cards: SummaryCard[] = [
  // Era 1: 선사 시대
  {
    id: 'card-e1-paleolithic',
    eraId: 'era-1-prehistoric',
    yearLabel: 'B.C. 700,000년경',
    sortYear: -700000,
    position: 'upper',
    title: '구석기 시대',
    keywords: ['뗀석기', '주먹도끼', '연천 전곡리'],
    detail: {
      background: '약 70만 년 전부터 한반도에 인류가 거주하며 뗀석기를 사용했다.',
      development: '주먹도끼 등 뗀석기를 활용해 사냥과 채집 생활을 하였다.',
      result: '연천 전곡리 유적에서 아슐리안형 주먹도끼가 출토되었다.',
      examPoints: '연천 전곡리와 주먹도끼의 연결, 뗀석기 vs 간석기 구분'
    }
  },
  {
    id: 'card-e1-neolithic',
    eraId: 'era-1-prehistoric',
    yearLabel: 'B.C. 8,000년경',
    sortYear: -8000,
    position: 'lower',
    title: '신석기 시대',
    keywords: ['간석기', '빗살무늬토기', '농경 시작'],
    detail: {
      background: '기원전 8000년경 신석기 시대가 시작되었다.',
      development: '간석기와 빗살무늬토기를 사용하며 농경 생활이 시작되었다.',
      result: '정착 생활과 함께 원시 사회가 형성되었다.',
      examPoints: '빗살무늬토기와 민무늬토기 구분, 농경 시작 시기'
    }
  },
  {
    id: 'card-e1-gojoseon',
    eraId: 'era-1-prehistoric',
    yearLabel: 'B.C. 2,333년',
    sortYear: -2333,
    position: 'upper',
    title: '고조선 건국',
    keywords: ['단군왕검', '8조법', '한사군'],
    detail: {
      background: '단군왕검이 고조선을 건국하였다.',
      development: '8조법으로 사회 질서를 유지했으며, 청동기 문화가 발달했다.',
      result: '위만조선 멸망 후 한사군이 설치되었다.',
      examPoints: '단군신화, 8조법 내용, 한사군 위치와 의미'
    }
  },

  // Era 2: 고대
  {
    id: 'card-e2-goguryeo',
    eraId: 'era-2-ancient',
    yearLabel: '5세기',
    sortYear: 450,
    position: 'upper',
    title: '고구려 전성기',
    keywords: ['광개토대왕', '장수왕', '평양 천도'],
    detail: {
      background: '5세기 고구려가 최대 영토를 확보했다.',
      development: '광개토대왕이 영토를 확장하고 장수왕이 평양으로 천도했다.',
      result: '동아시아 강국으로 발전했다.',
      examPoints: '광개토대왕비문, 장수왕 평양 천도(427년)'
    }
  },
  {
    id: 'card-e2-unification',
    eraId: 'era-2-ancient',
    yearLabel: '676년',
    sortYear: 676,
    position: 'lower',
    title: '삼국 통일',
    keywords: ['신라', '매소성', '기벌포'],
    detail: {
      background: '신라가 나당연합으로 백제·고구려를 멸망시켰다.',
      development: '매소성 전투(675)와 기벌포 전투(676)로 당나라 세력을 몰아냈다.',
      result: '676년 삼국 통일을 완성했다.',
      examPoints: '676년 삼국 통일 완성, 나당 전쟁의 의의'
    }
  },

  // Era 3: 고려
  {
    id: 'card-e3-founding',
    eraId: 'era-3-goryeo',
    yearLabel: '918년',
    sortYear: 918,
    position: 'upper',
    title: '고려 건국',
    keywords: ['왕건', '태조', '후삼국 통일'],
    detail: {
      background: '왕건이 고려를 건국하고 후삼국을 통일했다.',
      development: '사심관과 기인 제도로 호족을 통제했다.',
      result: '새로운 통일 왕조가 수립되었다.',
      examPoints: '918년 건국, 사심관·기인 제도의 의미'
    }
  },
  {
    id: 'card-e3-celadon',
    eraId: 'era-3-goryeo',
    yearLabel: '12세기',
    sortYear: 1150,
    position: 'lower',
    title: '상감청자',
    keywords: ['청자', '상감 기법', '고려청자'],
    detail: {
      background: '고려의 도자기 기술이 절정에 달했다.',
      development: '상감 기법을 활용한 청자가 제작되었다.',
      result: '고려청자는 세계적 명품으로 인정받았다.',
      examPoints: '상감청자의 특징과 제작 기법'
    }
  },

  // Era 4: 조선 전기
  {
    id: 'card-e4-founding',
    eraId: 'era-4-joseon-early',
    yearLabel: '1392년',
    sortYear: 1392,
    position: 'upper',
    title: '조선 건국',
    keywords: ['이성계', '역성혁명', '한양'],
    detail: {
      background: '이성계가 위화도 회군 후 조선을 건국했다.',
      development: '한양을 도읍으로 정하고 유교 국가 체제를 확립했다.',
      result: '새로운 왕조가 500년간 지속되었다.',
      examPoints: '1392년 건국, 위화도 회군의 배경과 결과'
    }
  },
  {
    id: 'card-e4-hangeul',
    eraId: 'era-4-joseon-early',
    yearLabel: '1443년',
    sortYear: 1443,
    position: 'lower',
    title: '훈민정음 창제',
    keywords: ['세종대왕', '훈민정음', '한글'],
    detail: {
      background: '백성들이 한자를 사용하기 어려워했다.',
      development: '세종대왕이 집현전 학자들과 훈민정음을 창제했다.',
      result: '1446년 반포되어 한글이 보급되기 시작했다.',
      examPoints: '1443년 창제, 1446년 반포, 창제 목적과 의의'
    }
  },

  // Era 5: 조선 후기
  {
    id: 'card-e5-imjin',
    eraId: 'era-5-joseon-late',
    yearLabel: '1592년',
    sortYear: 1592,
    position: 'upper',
    title: '임진왜란',
    keywords: ['이순신', '거북선', '한산도 대첩'],
    detail: {
      background: '도요토미 히데요시가 조선을 침략했다.',
      development: '이순신 장군이 거북선으로 한산도 대첩 등에서 승리했다.',
      result: '7년 전쟁 끝에 왜군이 퇴각했다.',
      examPoints: '1592년 발발, 이순신의 주요 해전, 의병 활동'
    }
  },
  {
    id: 'card-e5-silhak',
    eraId: 'era-5-joseon-late',
    yearLabel: '18세기',
    sortYear: 1750,
    position: 'lower',
    title: '실학 발달',
    keywords: ['정약용', '박지원', '농업·상업 개혁론'],
    detail: {
      background: '사회 모순이 심화되면서 개혁 필요성이 대두되었다.',
      development: '정약용, 박지원 등 실학자들이 개혁 방안을 제시했다.',
      result: '실학 사상이 근대 개혁의 사상적 기반이 되었다.',
      examPoints: '실학의 분류(중농학파, 중상학파), 주요 인물'
    }
  },

  // Era 6: 개항기
  {
    id: 'card-e6-ganghwa',
    eraId: 'era-6-enlightenment',
    yearLabel: '1876년',
    sortYear: 1876,
    position: 'upper',
    title: '강화도 조약',
    keywords: ['개항', '불평등 조약', '운요호 사건'],
    detail: {
      background: '운요호 사건을 구실로 일본이 조약을 강요했다.',
      development: '조선이 최초로 근대적 조약을 체결했다.',
      result: '불평등 조약으로 일본의 경제 침탈이 시작되었다.',
      examPoints: '1876년 체결, 불평등 조항 내용'
    }
  },
  {
    id: 'card-e6-daehan',
    eraId: 'era-6-enlightenment',
    yearLabel: '1897년',
    sortYear: 1897,
    position: 'lower',
    title: '대한제국 수립',
    keywords: ['고종', '광무개혁', '자주독립'],
    detail: {
      background: '아관파천 후 자주독립을 선언했다.',
      development: '고종이 황제로 즉위하고 광무개혁을 추진했다.',
      result: '근대 국가 체제를 갖추려 노력했다.',
      examPoints: '1897년 수립, 광무개혁 내용'
    }
  },

  // Era 7: 일제 강점기
  {
    id: 'card-e7-annexation',
    eraId: 'era-7-colonial',
    yearLabel: '1910년',
    sortYear: 1910,
    position: 'upper',
    title: '경술국치',
    keywords: ['한일병합', '국권 피탈', '조약'],
    detail: {
      background: '일본이 단계적으로 국권을 침탈했다.',
      development: '1910년 한일병합조약이 강제로 체결되었다.',
      result: '35년간 일제 식민 지배가 시작되었다.',
      examPoints: '1910년 8월 29일, 국권 피탈 과정'
    }
  },
  {
    id: 'card-e7-march1st',
    eraId: 'era-7-colonial',
    yearLabel: '1919년',
    sortYear: 1919,
    position: 'lower',
    title: '3·1 운동',
    keywords: ['만세운동', '독립선언서', '비폭력'],
    detail: {
      background: '민족 대표 33인이 독립선언서를 발표했다.',
      development: '전국적으로 비폭력 만세 운동이 전개되었다.',
      result: '대한민국 임시정부 수립의 계기가 되었다.',
      examPoints: '1919년 3월 1일, 민족 대표 33인, 의의'
    }
  },

  // Era 8: 현대사
  {
    id: 'card-e8-liberation',
    eraId: 'era-8-modern',
    yearLabel: '1945년',
    sortYear: 1945,
    position: 'upper',
    title: '광복',
    keywords: ['8·15 광복', '해방', '독립'],
    detail: {
      background: '제2차 세계대전에서 일본이 패망했다.',
      development: '1945년 8월 15일 한국이 해방되었다.',
      result: '35년간의 식민 지배에서 벗어났다.',
      examPoints: '1945년 8월 15일, 광복의 의미와 과제'
    }
  },
  {
    id: 'card-e8-democracy',
    eraId: 'era-8-modern',
    yearLabel: '1987년',
    sortYear: 1987,
    position: 'lower',
    title: '6월 민주항쟁',
    keywords: ['민주화', '직선제', '개헌'],
    detail: {
      background: '전두환 정권의 독재에 국민이 저항했다.',
      development: '전국적 시위로 대통령 직선제 개헌을 쟁취했다.',
      result: '한국 민주주의가 한 단계 발전했다.',
      examPoints: '1987년 6월, 6·29 선언, 민주화의 의의'
    }
  }
];

/**
 * Default export: Complete HistoryData object
 * 
 * This is the single source of truth for all historical data in the application.
 * It is imported by the validation layer and subsequently by the main App component.
 * 
 * Note: The cards array is currently empty and will be populated in tasks 3.2-3.9.
 * The validateHistoryData function (from validate.ts) will ensure data integrity
 * before the data is used in the UI.
 */
const historyData: HistoryData = {
  eras,
  cards,
};

export default historyData;
