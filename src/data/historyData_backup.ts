import type { Era, CardData } from './types';

export const eras: Era[] = [
  {
    id: 'era-1-prehistoric',
    name: '선사 시대',
    periodLabel: 'B.C. 700,000 ~ B.C. 1',
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
        eraId: 'era-1-prehistoric',
        year: 'B.C. 700,000년경',
        weight: 4,
        title: '구석기 시대',
        description: '동굴, 막집 거주. 뗀석기(주먹도끼) 사용. 연천 전곡리 유적에서 아슐리안형 주먹도끼 출토.',
        tags: ['뗀석기', '주먹도끼', '연천 전곡리'],
        relatedEvents: []
      },
      {
        id: 'card-e1-neolithic',
        eraId: 'era-1-prehistoric',
        year: 'B.C. 8,000년경',
        weight: 4,
        title: '신석기 시대',
        description: '농경과 목축 시작. 간석기, 빗살무늬토기, 가락바퀴 사용.',
        tags: ['간석기', '빗살무늬토기', '농경'],
        relatedEvents: []
      },
      {
        id: 'card-e1-bronze',
        eraId: 'era-1-prehistoric',
        year: 'B.C. 1,500년경',
        weight: 4,
        title: '청동기 시대',
        description: '계급 발생, 사유재산, 벼농사. 비파형 동검, 반달 돌칼, 고인돌.',
        tags: ['비파형동검', '고인돌', '벼농사'],
        relatedEvents: []
      },
      {
        id: 'card-e1-iron',
        eraId: 'era-1-prehistoric',
        year: 'B.C. 5세기',
        weight: 4,
        title: '철기 시대',
        description: '철제 농기구, 철제 무기, 세형동검. 중국 화폐(명도전, 반량전) 등장.',
        tags: ['철기', '세형동검', '명도전'],
        relatedEvents: []
      },
      {
        id: 'card-e1-gojoseon',
        eraId: 'era-1-prehistoric',
        year: 'B.C. 2,333년',
        weight: 5,
        title: '고조선 건국',
        description: '단군왕검 건국. 8조법. 위만조선 → 한 무제의 침략으로 멸망, 한사군 설치.',
        tags: ['단군왕검', '8조법', '위만조선', '한사군'],
        relatedEvents: []
      },
      {
        id: 'card-e1-buyeo',
        eraId: 'era-1-prehistoric',
        year: 'B.C. 1세기',
        weight: 3,
        title: '부여',
        description: '5부 연맹체. 왕 아래 사출도. 제천행사 영고(12월). 1책12법, 우제점법.',
        tags: ['부여', '영고', '사출도'],
        relatedEvents: []
      },
      {
        id: 'card-e1-okjeo',
        eraId: 'era-1-prehistoric',
        year: '1세기',
        weight: 2,
        title: '옥저',
        description: '군장(읍군, 삼로). 민며느리제, 골장제. 특산물: 소금, 해산물.',
        tags: ['옥저', '민며느리제', '골장제'],
        relatedEvents: []
      },
      {
        id: 'card-e1-dongye',
        eraId: 'era-1-prehistoric',
        year: '1세기',
        weight: 2,
        title: '동예',
        description: '군장(읍군, 삼로). 제천행사 무천(10월). 책화. 특산물: 단궁, 과하마, 반어피.',
        tags: ['동예', '무천', '단궁'],
        relatedEvents: []
      },
      {
        id: 'card-e1-samhan',
        eraId: 'era-1-prehistoric',
        year: '1세기',
        weight: 3,
        title: '삼한',
        description: '신지, 읍차(군장), 천군(제사장). 소도. 5월·10월 제사. 벼농사, 철 수출(변한).',
        tags: ['삼한', '소도', '철 수출'],
        relatedEvents: []
      }
    ]
  },
  {
    id: 'era-2-ancient',
    name: '고대',
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
    ]
  }
];

export const historyData = {
  eras
};

