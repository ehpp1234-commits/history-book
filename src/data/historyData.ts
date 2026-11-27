import type { Era, HistoryData, CardData } from './types';

// Convert SummaryCard detail to simple description
const toSimpleCard = (summaryCard: any): CardData => ({
  id: summaryCard.id,
  year: summaryCard.yearLabel,
  weight: Math.min(5, Math.max(1, Math.floor(Math.random() * 3) + 3)), // Random weight 3-5
  title: summaryCard.title,
  description: summaryCard.detail.background + ' ' + summaryCard.detail.result,
  tags: summaryCard.keywords,
  relatedEvents: []
});

export const eras: Era[] = [
  {
    id: 'era-1-prehistoric',
    name: '선사 시대 및 국가의 형성',
    periodLabel: 'B.C. 700,000 ~ B.C. 1세기',
    startYear: -700000,
    endYear: -1,
    color: '#8B5E3C',
    order: 0,
    bgColor: '#F5EFE6',
    bgColorDark: '#3D3A36',
    pattern: 'pattern-prehistoric-comb',
    watermarkLabel: {
      ko: '선사',
      en: 'PREHISTORIC',
      period: 'B.C. 700,000–B.C. 1',
    },
    cards: [
      {
        id: 'card-e1-paleolithic',
        year: 'B.C. 700,000년경',
        weight: 4,
        title: '구석기 시대',
        description: '약 70만 년 전부터 한반도에 인류가 거주하며 뗀석기를 사용했다. 연천 전곡리 유적에서 아슐리안형 주먹도끼가 출토되었다.',
        tags: ['뗀석기', '주먹도끼', '연천 전곡리'],
        relatedEvents: []
      },
      {
        id: 'card-e1-neolithic',
        year: 'B.C. 8,000년경',
        weight: 4,
        title: '신석기 시대',
        description: '기원전 8000년경 신석기 시대가 시작되었다. 정착 생활과 함께 원시 사회가 형성되었다.',
        tags: ['간석기', '빗살무늬토기', '농경 시작'],
        relatedEvents: []
      },
      {
        id: 'card-e1-gojoseon',
        year: 'B.C. 2,333년',
        weight: 5,
        title: '고조선 건국',
        description: '단군왕검이 고조선을 건국하였다. 위만조선 멸망 후 한사군이 설치되었다.',
        tags: ['단군왕검', '8조법', '한사군'],
        relatedEvents: []
      }
    ]
  },
  {
    id: 'era-2-ancient',
    name: '고대: 삼국 및 남북국',
    periodLabel: 'B.C. 1세기 ~ 935년',
    startYear: -100,
    endYear: 935,
    color: '#C0392B',
    order: 1,
    bgColor: '#F3EBD8',
    bgColorDark: '#3A3630',
    pattern: 'pattern-ancient-crown',
    watermarkLabel: {
      ko: '고대',
      en: 'ANCIENT',
      period: 'B.C. 1–935',
    },
    cards: [
      {
        id: 'card-e2-goguryeo',
        year: '5세기',
        weight: 5,
        title: '고구려 전성기',
        description: '5세기 고구려가 최대 영토를 확보했다. 동아시아 강국으로 발전했다.',
        tags: ['광개토대왕', '장수왕', '평양 천도'],
        relatedEvents: []
      },
      {
        id: 'card-e2-unification',
        year: '676년',
        weight: 5,
        title: '삼국 통일',
        description: '신라가 나당연합으로 백제·고구려를 멸망시켰다. 676년 삼국 통일을 완성했다.',
        tags: ['신라', '매소성', '기벌포'],
        relatedEvents: []
      }
    ]
  },
  {
    id: 'era-3-goryeo',
    name: '고려',
    periodLabel: '918 ~ 1392년',
    startYear: 918,
    endYear: 1392,
    color: '#2980B9',
    order: 2,
    bgColor: '#E4EFE9',
    bgColorDark: '#2E3835',
    pattern: 'pattern-goryeo-celadon',
    watermarkLabel: {
      ko: '고려',
      en: 'GORYEO',
      period: '918–1392',
    },
    cards: [
      {
        id: 'card-e3-founding',
        year: '918년',
        weight: 5,
        title: '고려 건국',
        description: '왕건이 고려를 건국하고 후삼국을 통일했다. 새로운 통일 왕조가 수립되었다.',
        tags: ['왕건', '태조', '후삼국 통일'],
        relatedEvents: []
      },
      {
        id: 'card-e3-celadon',
        year: '12세기',
        weight: 4,
        title: '상감청자',
        description: '고려의 도자기 기술이 절정에 달했다. 고려청자는 세계적 명품으로 인정받았다.',
        tags: ['청자', '상감 기법', '고려청자'],
        relatedEvents: []
      }
    ]
  },
  {
    id: 'era-4-joseon-early',
    name: '조선 전기',
    periodLabel: '1392 ~ 1599년',
    startYear: 1392,
    endYear: 1599,
    color: '#27AE60',
    order: 3,
    bgColor: '#E8EEF5',
    bgColorDark: '#2F3338',
    pattern: 'pattern-joseon-hangeul',
    watermarkLabel: {
      ko: '조선 전기',
      en: 'EARLY JOSEON',
      period: '1392–1599',
    },
    cards: [
      {
        id: 'card-e4-founding',
        year: '1392년',
        weight: 5,
        title: '조선 건국',
        description: '이성계가 위화도 회군 후 조선을 건국했다. 새로운 왕조가 500년간 지속되었다.',
        tags: ['이성계', '역성혁명', '한양'],
        relatedEvents: []
      },
      {
        id: 'card-e4-hangeul',
        year: '1443년',
        weight: 5,
        title: '훈민정음 창제',
        description: '백성들이 한자를 사용하기 어려워했다. 1446년 반포되어 한글이 보급되기 시작했다.',
        tags: ['세종대왕', '훈민정음', '한글'],
        relatedEvents: []
      }
    ]
  },
  {
    id: 'era-5-joseon-late',
    name: '조선 후기',
    periodLabel: '1592 ~ 1869년',
    startYear: 1592,
    endYear: 1869,
    color: '#8E44AD',
    order: 4,
    bgColor: '#EAE8E4',
    bgColorDark: '#37353A',
    pattern: 'pattern-joseon-ink',
    watermarkLabel: {
      ko: '조선 후기',
      en: 'LATE JOSEON',
      period: '1592–1869',
    },
    cards: [
      {
        id: 'card-e5-imjin',
        year: '1592년',
        weight: 5,
        title: '임진왜란',
        description: '도요토미 히데요시가 조선을 침략했다. 7년 전쟁 끝에 왜군이 퇴각했다.',
        tags: ['이순신', '거북선', '한산도 대첩'],
        relatedEvents: []
      },
      {
        id: 'card-e5-silhak',
        year: '18세기',
        weight: 4,
        title: '실학 발달',
        description: '사회 모순이 심화되면서 개혁 필요성이 대두되었다. 실학 사상이 근대 개혁의 사상적 기반이 되었다.',
        tags: ['정약용', '박지원', '농업·상업 개혁론'],
        relatedEvents: []
      }
    ]
  },
  {
    id: 'era-6-enlightenment',
    name: '개항기',
    periodLabel: '1863 ~ 1910년',
    startYear: 1863,
    endYear: 1910,
    color: '#D35400',
    order: 5,
    bgColor: '#EFE4DC',
    bgColorDark: '#3A3330',
    pattern: 'pattern-enlightenment-newspaper',
    watermarkLabel: {
      ko: '개항기',
      en: 'ENLIGHTENMENT',
      period: '1863–1910',
    },
    cards: [
      {
        id: 'card-e6-ganghwa',
        year: '1876년',
        weight: 5,
        title: '강화도 조약',
        description: '운요호 사건을 구실로 일본이 조약을 강요했다. 불평등 조약으로 일본의 경제 침탈이 시작되었다.',
        tags: ['개항', '불평등 조약', '운요호 사건'],
        relatedEvents: []
      },
      {
        id: 'card-e6-daehan',
        year: '1897년',
        weight: 4,
        title: '대한제국 수립',
        description: '아관파천 후 자주독립을 선언했다. 근대 국가 체제를 갖추려 노력했다.',
        tags: ['고종', '광무개혁', '자주독립'],
        relatedEvents: []
      }
    ]
  },
  {
    id: 'era-7-colonial',
    name: '일제 강점기',
    periodLabel: '1910 ~ 1945년',
    startYear: 1910,
    endYear: 1945,
    color: '#7F8C8D',
    order: 6,
    bgColor: '#2B2E33',
    bgColorDark: '#1E2024',
    pattern: 'pattern-independence-declaration',
    watermarkLabel: {
      ko: '일제 강점기',
      en: 'COLONIAL PERIOD',
      period: '1910–1945',
    },
    cards: [
      {
        id: 'card-e7-annexation',
        year: '1910년',
        weight: 5,
        title: '경술국치',
        description: '일본이 단계적으로 국권을 침탈했다. 35년간 일제 식민 지배가 시작되었다.',
        tags: ['한일병합', '국권 피탈', '조약'],
        relatedEvents: []
      },
      {
        id: 'card-e7-march1st',
        year: '1919년',
        weight: 5,
        title: '3·1 운동',
        description: '민족 대표 33인이 독립선언서를 발표했다. 대한민국 임시정부 수립의 계기가 되었다.',
        tags: ['만세운동', '독립선언서', '비폭력'],
        relatedEvents: []
      }
    ]
  },
  {
    id: 'era-8-modern',
    name: '현대사',
    periodLabel: '1945 ~ 현재',
    startYear: 1945,
    endYear: new Date().getFullYear(),
    color: '#16A085',
    order: 7,
    bgColor: '#EAF2FA',
    bgColorDark: '#2D3338',
    pattern: 'pattern-modern-skyline',
    watermarkLabel: {
      ko: '현대사',
      en: 'MODERN',
      period: '1945–현재',
    },
    cards: [
      {
        id: 'card-e8-liberation',
        year: '1945년',
        weight: 5,
        title: '광복',
        description: '제2차 세계대전에서 일본이 패망했다. 35년간의 식민 지배에서 벗어났다.',
        tags: ['8·15 광복', '해방', '독립'],
        relatedEvents: []
      },
      {
        id: 'card-e8-democracy',
        year: '1987년',
        weight: 5,
        title: '6월 민주항쟁',
        description: '전두환 정권의 독재에 국민이 저항했다. 한국 민주주의가 한 단계 발전했다.',
        tags: ['민주화', '직선제', '개헌'],
        relatedEvents: []
      }
    ]
  }
];

const historyData: HistoryData = {
  eras,
  cards: [] // Legacy structure, now cards are embedded in eras
};

export { historyData };
export default historyData;
