import type { Era } from '../types';

export const contemporaryEra: Era = {
  id: 'era-8-contemporary',
  name: '현대사',
  periodLabel: '1945년 ~ 현재',
  startYear: 1945,
  endYear: 2024,
  color: '#117A65',
  order: 7,
  bgColor: '#E8F8F5',
  bgColorDark: '#2E4A42',
  pattern: 'pattern-modern-grid',
  watermarkLabel: {
    ko: '현대사',
    en: 'CONTEMPORARY',
    period: '1945–Present',
  },
  cards: [
    {
      id: 'e8-01',
      eraId: 'era-8-contemporary',
      year: '1945년 8월~',
      weight: 5,
      title: '광복과 분단',
      description: '8·15 광복(1945년 8월 15일). 미·소 38도선 분할 점령. 모스크바 3국 외상 회의(1945년 12월, 신탁 통치안). 좌우 대립 격화.',
      tags: ['광복', '38도선', '미소분할점령', '모스크바3상회의', '신탁통치'],
      relatedEvents: []
    },
    {
      id: 'e8-02',
      eraId: 'era-8-contemporary',
      year: '1945~1946년',
      weight: 5,
      title: '건국 준비와 좌우 대립',
      description: '건국 준비 위원회(여운형, 1945년 8월). 조선 인민 공화국 선포(좌익, 미군정 불인정). 대한민국 임시정부 환국(김구·이승만). 좌우 합작 운동(김규식·여운형, 1946년~).',
      tags: ['건국준비위원회', '조선인민공화국', '임시정부환국', '좌우합작운동'],
      relatedEvents: []
    },
    {
      id: 'e8-03',
      eraId: 'era-8-contemporary',
      year: '1946년',
      weight: 5,
      title: '미군정기 주요 사건',
      description: '제1차 미소 공동 위원회(1946년 3월, 결렬). 대구 10·1 사건(1946년 10월). 토지 개혁 논의.',
      tags: ['미군정', '미소공동위원회', '대구10·1사건', '토지개혁'],
      relatedEvents: []
    },
    {
      id: 'e8-04',
      eraId: 'era-8-contemporary',
      year: '1947년',
      weight: 5,
      title: '유엔 한국 임시 위원단',
      description: '미국이 한반도 문제 유엔 상정(1947년). 유엔 총회 한국 임시 위원단 파견 결의. 남한만의 단독 선거 결정(북한 입북 거부).',
      tags: ['유엔', '한국임시위원단', '단독선거', '남북분단'],
      relatedEvents: []
    },
    {
      id: 'e8-05',
      eraId: 'era-8-contemporary',
      year: '1948년 2~4월',
      weight: 5,
      title: '남북 협상과 단독 정부 수립 반대',
      description: '김구·김규식 남북 협상(1948년 4월 평양). 단독 정부 수립 반대. 실패. 제주 4·3 사건(1948년 4월, 단독 선거 반대 무장 봉기).',
      tags: ['남북협상', '김구', '김규식', '단독정부반대', '제주4·3사건', '4·3 사건', '평양 연석회의', '단독선거 반대'],
      relatedEvents: []
    },
    {
      id: 'e8-06',
      eraId: 'era-8-contemporary',
      year: '1948년 5월 10일',
      weight: 5,
      title: '5·10 총선거',
      description: '1948년 5월 10일. 남한만의 단독 선거. 제헌 국회 구성(198명). 유엔 감시하 실시.',
      tags: ['5·10총선거', '제헌국회', '단독선거', '남한단독정부'],
      relatedEvents: []
    },
    {
      id: 'e8-07',
      eraId: 'era-8-contemporary',
      year: '1948년 7월 17일',
      weight: 5,
      title: '대한민국 정부 수립',
      description: '1948년 7월 17일 제헌 헌법 공포. 8월 15일 대한민국 정부 수립. 초대 대통령 이승만. 국호 "대한민국". 민주 공화국. 유엔 승인(한반도 유일 합법 정부).',
      tags: ['대한민국정부수립', '제헌헌법', '이승만', '8·15정부수립', '민주공화국'],
      relatedEvents: []
    },
    {
      id: 'e8-08',
      eraId: 'era-8-contemporary',
      year: '1948년 9월 9일',
      weight: 5,
      title: '조선민주주의인민공화국 수립',
      description: '1948년 9월 9일 북한 단독 정부 수립. 수상 김일성. 소련 지원. 남북 분단 고착화.',
      tags: ['북한정부수립', '조선민주주의인민공화국', '김일성', '남북분단'],
      relatedEvents: []
    },
    {
      id: 'e8-09',
      eraId: 'era-8-contemporary',
      year: '1948~1950년',
      weight: 5,
      title: '반민특위와 농지 개혁',
      description: '반민족 행위 특별 조사 위원회(반민특위, 1948년). 친일파 청산 시도, 이승만 정부 방해로 실패. 농지 개혁법(1949년, 유상 매수·유상 분배).',
      tags: ['반민특위', '친일파청산', '농지개혁', '유상매수유상분배', '반민족행위처벌법', '국회 프락치 사건', '특별재판부'],
      relatedEvents: []
    },
    {
      id: 'e8-10',
      eraId: 'era-8-contemporary',
      year: '1950년 6월 25일',
      weight: 5,
      title: '6·25 전쟁 발발',
      description: '1950년 6월 25일 북한 남침. 한국 전쟁 발발. 서울 함락(6월 28일). 낙동강 방어선까지 후퇴.',
      tags: ['6·25전쟁', '한국전쟁', '북한남침', '낙동강방어선'],
      relatedEvents: []
    },
    {
      id: 'e8-11',
      eraId: 'era-8-contemporary',
      year: '1950년 9월 15일',
      weight: 5,
      title: '인천 상륙 작전',
      description: '1950년 9월 15일 맥아더 인천 상륙 작전 성공. 서울 수복(9월 28일). 압록강까지 북진.',
      tags: ['인천상륙작전', '맥아더', '서울수복', '북진'],
      relatedEvents: []
    },
    {
      id: 'e8-12',
      eraId: 'era-8-contemporary',
      year: '1950년 10월~',
      weight: 5,
      title: '중국군 개입과 1·4 후퇴',
      description: '1950년 10월 중국군(인민지원군) 참전. 국군·유엔군 후퇴. 1·4 후퇴(1951년 1월, 서울 재함락). 서울 재탈환(3월).',
      tags: ['중국군개입', '1·4후퇴', '인민지원군', '서울재함락'],
      relatedEvents: []
    },
    {
      id: 'e8-13',
      eraId: 'era-8-contemporary',
      year: '1951~1953년',
      weight: 5,
      title: '휴전 협상과 정전 협정',
      description: '1951년 7월 휴전 회담 시작(개성→판문점). 38도선 부근 교착전. 1953년 7월 27일 정전 협정 체결. 휴전선(DMZ) 설정. 평화 협정 아님.',
      tags: ['휴전협상', '정전협정', 'DMZ', '휴전선', '판문점'],
      relatedEvents: []
    },
    {
      id: 'e8-14',
      eraId: 'era-8-contemporary',
      year: '1952년',
      weight: 5,
      title: '발췌 개헌과 부산 정치 파동',
      description: '1952년 부산 정치 파동. 이승만 대통령 직선제 개헌 강행(발췌 개헌). 계엄령 선포, 국회 의원 연금. 장기 집권 의도.',
      tags: ['발췌개헌', '부산정치파동', '직선제', '이승만장기집권'],
      relatedEvents: []
    },
    {
      id: 'e8-15',
      eraId: 'era-8-contemporary',
      year: '1954년',
      weight: 5,
      title: '사사오입 개헌',
      description: '1954년 사사오입 개헌. 초대 대통령 중임 제한 철폐(이승만 3선 허용). 반올림 꼼수(135.333→136표 가결).',
      tags: ['사사오입개헌', '중임제한철폐', '이승만3선', '개헌'],
      relatedEvents: []
    },
    {
      id: 'e8-16',
      eraId: 'era-8-contemporary',
      year: '1960년 3·15',
      weight: 5,
      title: '3·15 부정 선거',
      description: '1960년 3월 15일 정·부통령 선거 대규모 부정(관권·금권 선거). 이승만·이기붕 당선 조작. 마산 시위(3월 15일). 김주열 학생 시신 발견(4월 11일).',
      tags: ['3·15부정선거', '마산시위', '김주열', '부정선거'],
      relatedEvents: []
    },
    {
      id: 'e8-17',
      eraId: 'era-8-contemporary',
      year: '1960년 4월',
      weight: 5,
      title: '4·19 혁명',
      description: '1960년 4월 19일 학생·시민 민주 혁명. 3·15 부정 선거 규탄. 경찰 발포(100여 명 사망). 대학교수단 시위(4월 25일). 이승만 하야(4월 26일). 한국 최초 민주 혁명.',
      tags: ['4·19혁명', '학생혁명', '이승만하야', '민주혁명', '부정선거규탄', '4월 혁명', '대학교수단', '허정 과도정부'],
      relatedEvents: []
    },
    {
      id: 'e8-18',
      eraId: 'era-8-contemporary',
      year: '1960년',
      weight: 5,
      title: '장면 내각 (제2공화국)',
      description: '1960년 6월 내각제 개헌(제2공화국). 7월 총선거. 윤보선 대통령, 장면 국무총리. 민주당 집권. 사회 혼란.',
      tags: ['장면내각', '제2공화국', '내각제', '윤보선', '민주당'],
      relatedEvents: []
    },
    {
      id: 'e8-19',
      eraId: 'era-8-contemporary',
      year: '1961년 5월 16일',
      weight: 5,
      title: '5·16 군사 정변',
      description: '1961년 5월 16일 박정희 소장 군사 쿠데타. 장면 내각 붕괴. 국가재건최고회의 구성. 군정 시작.',
      tags: ['5·16군사정변', '박정희', '군사쿠데타', '국가재건최고회의', '군정'],
      relatedEvents: []
    },
    {
      id: 'e8-20',
      eraId: 'era-8-contemporary',
      year: '1963~1972년',
      weight: 5,
      title: '제3공화국 (박정희 정부)',
      description: '1963년 대통령 선거(박정희 당선). 제3공화국 출범. 경제 개발 5개년 계획(1962년~). 한일 협정 체결(1965년). 베트남 파병(1965년~). 3선 개헌(1969년).',
      tags: ['제3공화국', '박정희', '경제개발', '한일협정', '베트남파병', '3선개헌', '6·3 시위', '한일 국교 정상화'],
      relatedEvents: []
    },
    {
      id: 'e8-21',
      eraId: 'era-8-contemporary',
      year: '1970년',
      weight: 5,
      title: '전태일 분신과 노동 운동',
      description: '1970년 11월 13일 전태일 분신(근로 기준법 준수 요구). 노동자 인권 운동 계기. 청계천 피복 노동자.',
      tags: ['전태일', '전태일분신', '노동운동', '근로기준법', '노동자인권'],
      relatedEvents: []
    },
    {
      id: 'e8-22',
      eraId: 'era-8-contemporary',
      year: '1972년 10월',
      weight: 5,
      title: '10월 유신',
      description: '1972년 10월 17일 박정희 비상계엄·유신 헌법 공포. 대통령 간선제(통일주체국민회의). 국회 해산, 정당 활동 금지. 긴급 조치권. 종신 집권 체제. 제4공화국.',
      tags: ['10월유신', '유신헌법', '대통령간선제', '긴급조치', '제4공화국'],
      relatedEvents: []
    },
    {
      id: 'e8-23',
      eraId: 'era-8-contemporary',
      year: '1970년대',
      weight: 5,
      title: '유신 반대 운동',
      description: '민주화 운동 탄압(긴급 조치). 민청학련 사건(1974년). 3·1 민주 구국 선언(1976년, 김대중·문익환 등). YH 무역 사건(1979년). 김영삼 의원 제명.',
      tags: ['유신반대운동', '민청학련', '3·1민주구국선언', 'YH무역사건', '민주화운동'],
      relatedEvents: []
    },
    {
      id: 'e8-24',
      eraId: 'era-8-contemporary',
      year: '1979년 10월 26일',
      weight: 5,
      title: '10·26 사태 (박정희 시해)',
      description: '1979년 10월 26일 김재규(중앙정보부장)가 박정희 대통령 시해. 궁정동 안가. 유신 체제 붕괴. 최규하 대통령 권한 대행.',
      tags: ['10·26사태', '박정희시해', '김재규', '유신체제붕괴'],
      relatedEvents: []
    },
    {
      id: 'e8-25',
      eraId: 'era-8-contemporary',
      year: '1979년 12월 12일',
      weight: 5,
      title: '12·12 군사 반란',
      description: '1979년 12월 12일 전두환·노태우 등 신군부 쿠데타. 정승화 계엄사령관 체포. 군권 장악.',
      tags: ['12·12군사반란', '전두환', '신군부', '정승화', '군사쿠데타'],
      relatedEvents: []
    },
    {
      id: 'e8-26',
      eraId: 'era-8-contemporary',
      year: '1980년 5월',
      weight: 5,
      title: '서울의 봄과 5·17 비상계엄 확대',
      description: '1980년 봄 민주화 요구(서울의 봄). 5월 17일 비상계엄 전국 확대. 김대중·김영삼 등 연행. 국회 해산, 정치 활동 금지.',
      tags: ['서울의봄', '5·17비상계엄', '민주화운동', '신군부탄압'],
      relatedEvents: []
    },
    {
      id: 'e8-27',
      eraId: 'era-8-contemporary',
      year: '1980년 5월 18일',
      weight: 5,
      title: '5·18 광주 민주화 운동',
      description: '1980년 5월 18일~27일 광주 민주화 운동. 계엄군 발포. 시민군 조직. 신군부의 무력 진압(다수 희생). 민주화 운동의 상징.',
      tags: ['5·18광주민주화운동', '광주민주화운동', '계엄군발포', '시민군', '민주화', '5·18 민주화운동', '전남도청', '금남로', '유네스코 기록유산'],
      relatedEvents: []
    },
    {
      id: 'e8-28',
      eraId: 'era-8-contemporary',
      year: '1980~1988년',
      weight: 5,
      title: '제5공화국 (전두환 정부)',
      description: '1980년 전두환 대통령 취임(통일주체국민회의 간선). 제5공화국. 언론 통폐합. 3S 정책(Sports, Sex, Screen). 88 서울 올림픽 유치(1988년).',
      tags: ['제5공화국', '전두환', '언론통폐합', '3S정책', '서울올림픽'],
      relatedEvents: []
    },
    {
      id: 'e8-29',
      eraId: 'era-8-contemporary',
      year: '1987년',
      weight: 5,
      title: '6월 민주 항쟁',
      description: '1987년 6월 민주 항쟁. 박종철 고문치사 사건(1월). 4·13 호헌 조치(전두환 대통령 직선제 거부). 이한열 최루탄 피격(6월). 전국 시위. 6·29 선언(노태우, 대통령 직선제 수용). 민주화 성취.',
      tags: ['6월민주항쟁', '박종철', '이한열', '4·13호헌조치', '6·29선언', '직선제'],
      relatedEvents: []
    },
    {
      id: 'e8-30',
      eraId: 'era-8-contemporary',
      year: '1987년',
      weight: 5,
      title: '민주화와 제6공화국',
      description: '1987년 민주화 헌법(제9차 개헌). 대통령 직선제·5년 단임제. 12월 대선(노태우 당선). 제6공화국 출범(1988년).',
      tags: ['제6공화국', '민주화헌법', '대통령직선제', '5년단임제', '노태우'],
      relatedEvents: []
    },
    {
      id: 'e8-31',
      eraId: 'era-8-contemporary',
      year: '1990년대',
      weight: 5,
      title: '문민정부·국민의 정부',
      description: '김영삼 정부(1993~1998, 문민정부). 금융 실명제. 역사 바로 세우기(전두환·노태우 처벌). 김대중 정부(1998~2003, 국민의 정부, 최초 여야 정권 교체). IMF 외환 위기 극복. 남북 정상 회담(2000년 6·15).',
      tags: ['문민정부', '김영삼', '국민의정부', '김대중', '남북정상회담', 'IMF'],
      relatedEvents: []
    },
    {
      id: 'e8-32',
      eraId: 'era-8-contemporary',
      year: '2000년대',
      weight: 5,
      title: '참여정부·이명박 정부',
      description: '노무현 정부(2003~2008, 참여정부). 10·4 남북 정상 선언(2007년). 이명박 정부(2008~2013). 한미 FTA. 천안함 사건·연평도 포격(2010년).',
      tags: ['참여정부', '노무현', '이명박정부', '남북정상선언', '천안함'],
      relatedEvents: []
    },
    {
      id: 'e8-33',
      eraId: 'era-8-contemporary',
      year: '2013~2017년',
      weight: 5,
      title: '박근혜 정부와 탄핵',
      description: '박근혜 정부(2013~2017, 최초 여성 대통령). 세월호 참사(2014년 4월 16일). 최순실 국정 농단(2016년). 촛불 집회. 대통령 탄핵(2016년 12월 국회 가결, 2017년 3월 헌재 인용).',
      tags: ['박근혜정부', '세월호참사', '최순실국정농단', '촛불집회', '대통령탄핵'],
      relatedEvents: []
    },
    {
      id: 'e8-34',
      eraId: 'era-8-contemporary',
      year: '2017~2022년',
      weight: 5,
      title: '문재인 정부',
      description: '문재인 정부(2017~2022). 평창 동계 올림픽(2018년). 남북·북미 정상 회담(2018년). 판문점 선언(4월 27일). 코로나19 팬데믹 대응(2020년~).',
      tags: ['문재인정부', '평창올림픽', '남북정상회담', '판문점선언', '코로나19'],
      relatedEvents: []
    },
    {
      id: 'e8-35',
      eraId: 'era-8-contemporary',
      year: '1960~2020년대',
      weight: 5,
      title: '경제 발전 (한강의 기적)',
      description: '1960~1980년대 고도성장(한강의 기적). 경공업→중화학 공업→첨단 산업. 수출 주도 경제. 1996년 OECD 가입. 세계 10위권 경제 대국.',
      tags: ['한강의기적', '경제발전', '고도성장', 'OECD가입', '수출주도'],
      relatedEvents: []
    },
    {
      id: 'e8-36',
      eraId: 'era-8-contemporary',
      year: '1990~2020년대',
      weight: 5,
      title: '남북 관계',
      description: '남북 기본 합의서(1991년). 남북 정상 회담(2000년·2007년·2018년). 개성 공단(2004년 가동). 금강산 관광. 이산가족 상봉. 북핵 문제.',
      tags: ['남북관계', '남북정상회담', '개성공단', '금강산관광', '북핵문제'],
      relatedEvents: []
    },
    {
      id: 'e8-37',
      eraId: 'era-8-contemporary',
      year: '2000년대~',
      weight: 5,
      title: '문화·IT 강국',
      description: '한류(K-pop, 드라마, 영화). IT 강국(반도체·스마트폰). 세계 최고 인터넷 보급률. 문화 콘텐츠 수출. BTS, 봉준호 "기생충"(2020년 오스카 작품상).',
      tags: ['한류', 'IT강국', 'K-pop', '문화콘텐츠', '기생충'],
      relatedEvents: []
    }
  ]
};
