import type { Era } from '../types';

export const prehistoricEra: Era = {
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
      id: 'e1-01',
      eraId: 'era-1-prehistoric',
      year: 'B.C. 700,000년경',
      weight: 4,
      title: '구석기 시대',
      description: '동굴, 막집 거주. 뗀석기(주먹도끼) 사용. 연천 전곡리 유적에서 아슐리안형 주먹도끼 출토.',
      tags: ['뗀석기', '주먹도끼', '연천 전곡리', '구석기'],
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Jeonggok-ri_Handaxe.jpg/800px-Jeonggok-ri_Handaxe.jpg',
      imageCaption: '연천 전곡리 유적 아슐리안형 주먹도끼 (국립중앙박물관 소장)',
      relatedEvents: []
    },
    {
      id: 'e1-02',
      eraId: 'era-1-prehistoric',
      year: 'B.C. 8,000년경',
      weight: 4,
      title: '신석기 시대',
      description: '농경과 목축 시작. 간석기, 빗살무늬토기, 가락바퀴 사용. 정착 생활 시작.',
      tags: ['간석기', '빗살무늬토기', '농경', '신석기'],
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Korea-Neolithic.age-Comb-pattern.pottery-01.jpg/800px-Korea-Neolithic.age-Comb-pattern.pottery-01.jpg',
      imageCaption: '신석기 시대 빗살무늬토기 (국립중앙박물관 소장)',
      relatedEvents: []
    },
    {
      id: 'e1-03',
      eraId: 'era-1-prehistoric',
      year: 'B.C. 2,000~1,500년경',
      weight: 4,
      title: '청동기 시대',
      description: '계급 발생, 사유재산 출현. 벼농사 시작. 비파형 동검, 반달 돌칼, 고인돌(지배자 무덤).',
      tags: ['비파형동검', '고인돌', '벼농사', '청동기', '계급사회'],
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Korea-Bronze.age-Liaoning.dagger-03.jpg/800px-Korea-Bronze.age-Liaoning.dagger-03.jpg',
      imageCaption: '청동기 시대 비파형 동검 (국립중앙박물관 소장)',
      relatedEvents: []
    },
    {
      id: 'e1-04',
      eraId: 'era-1-prehistoric',
      year: 'B.C. 5세기경',
      weight: 4,
      title: '철기 시대',
      description: '철제 농기구와 무기 사용. 세형동검 출현. 중국 화폐(명도전, 반량전) 유입으로 교역 활발.',
      tags: ['철기', '세형동검', '명도전', '반량전'],
      relatedEvents: []
    },
    {
      id: 'e1-05',
      eraId: 'era-1-prehistoric',
      year: 'B.C. 2,333년',
      weight: 5,
      title: '고조선 건국 (단군왕검)',
      description: '단군왕검이 고조선 건국. 8조법으로 사회 질서 유지. 위만조선 시기를 거쳐 한 무제의 침략으로 멸망, 한사군 설치됨.',
      tags: ['단군왕검', '고조선', '8조법', '위만조선', '한사군'],
      relatedEvents: []
    },
    {
      id: 'e1-06',
      eraId: 'era-1-prehistoric',
      year: 'B.C. 1세기',
      weight: 3,
      title: '부여',
      description: '5부 연맹체. 왕 아래 사출도(가축 이름 관직). 제천행사 영고(12월). 1책12법, 우제점법(소 발굽 점).',
      tags: ['부여', '영고', '사출도', '5부'],
      relatedEvents: []
    },
    {
      id: 'e1-07',
      eraId: 'era-1-prehistoric',
      year: '1세기',
      weight: 2,
      title: '옥저',
      description: '군장(읍군, 삼로). 민며느리제(신부가 신랑 집에서 성장), 골장제(가매장 후 뼈만 안치). 특산물: 소금, 해산물.',
      tags: ['옥저', '민며느리제', '골장제'],
      relatedEvents: []
    },
    {
      id: 'e1-08',
      eraId: 'era-1-prehistoric',
      year: '1세기',
      weight: 2,
      title: '동예',
      description: '군장(읍군, 삼로). 제천행사 무천(10월). 책화(다른 부족 영역 침범 시 배상). 특산물: 단궁, 과하마, 반어피.',
      tags: ['동예', '무천', '단궁', '책화'],
      relatedEvents: []
    },
    {
      id: 'e1-09',
      eraId: 'era-1-prehistoric',
      year: 'B.C. 1세기~A.D. 3세기',
      weight: 3,
      title: '삼한',
      description: '마한(54국), 진한(12국), 변한(12국). 소도(제사장 천군). 제천행사 5월 수릿날, 10월 계절제.',
      tags: ['삼한', '마한', '진한', '변한', '소도', '천군'],
      relatedEvents: []
    }
  ]
};
