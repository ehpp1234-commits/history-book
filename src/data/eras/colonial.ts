import type { Era } from '../types';

export const colonialEra: Era = {
  id: 'era-7-colonial',
  name: '일제 강점기',
  periodLabel: '1910년 ~ 1945년',
  startYear: 1910,
  endYear: 1945,
  color: '#922B21',
  order: 6,
  bgColor: '#FADBD8',
  bgColorDark: '#3A2F2F',
  pattern: 'pattern-resistance',
  watermarkLabel: {
    ko: '일제강점기',
    en: 'COLONIAL PERIOD',
    period: '1910–1945',
  },
  cards: [
    {
      id: 'e7-01',
      eraId: 'era-7-colonial',
      year: '1910~1919년',
      weight: 5,
      title: '무단 통치 (헌병 경찰 통치)',
      description: '조선총독부 설치(초대 데라우치). 헌병 경찰제 실시. 태형(태장형) 시행. 언론·출판·집회·결사 자유 박탈. 조선 태형령. 회사령(기업 설립 허가제).',
      tags: ['무단통치', '조선총독부', '헌병경찰제', '태형', '회사령'],
      relatedEvents: []
    },
    {
      id: 'e7-02',
      eraId: 'era-7-colonial',
      year: '1910~1918년',
      weight: 5,
      title: '토지 조사 사업',
      description: '1910~1918년 실시. 소유권 미신고 토지 조선총독부 귀속. 지주 중심 토지 소유권 인정. 농민 토지 약탈. 동양척식주식회사 중심 토지 수탈.',
      tags: ['토지조사사업', '토지약탈', '동양척식주식회사', '농민수탈'],
      relatedEvents: []
    },
    {
      id: 'e7-03',
      eraId: 'era-7-colonial',
      year: '1910년대',
      weight: 5,
      title: '경제 수탈',
      description: '산미 증산 계획(쌀 일본 반출). 회사령(1910년, 기업 허가제). 삼림령·어업령·광업령(자원 수탈). 조선 식산 은행 설립.',
      tags: ['경제수탈', '산미증산계획', '회사령', '자원수탈'],
      relatedEvents: []
    },
    {
      id: 'e7-04',
      eraId: 'era-7-colonial',
      year: '1910년대',
      weight: 5,
      title: '민족 교육 탄압',
      description: '조선 교육령(1911년). 한국사·한글 교육 금지. 일본어 강제 교육. 사립학교 탄압. 서당 규칙(서당 통제).',
      tags: ['교육탄압', '조선교육령', '일본어강제', '사립학교탄압'],
      relatedEvents: []
    },
    {
      id: 'e7-05',
      eraId: 'era-7-colonial',
      year: '1910년대',
      weight: 5,
      title: '국외 독립운동 기지 건설',
      description: '만주(간도·서간도): 신흥 무관 학교(1911년, 이회영·이동녕), 대종교 중광단. 연해주: 권업회, 대한 광복군 정부(1914년). 미주: 대한인 국민회.',
      tags: ['독립운동기지', '신흥무관학교', '만주', '연해주', '권업회'],
      relatedEvents: []
    },
    {
      id: 'e7-06',
      eraId: 'era-7-colonial',
      year: '1919년 1월',
      weight: 5,
      title: '파리 강화 회의',
      description: '제1차 세계대전 종전 후 파리 강화 회의. 윌슨의 민족 자결주의 발표. 김규식 파견(참석 거부당함). 3·1 운동 배경.',
      tags: ['파리강화회의', '민족자결주의', '윌슨', '김규식'],
      relatedEvents: []
    },
    {
      id: 'e7-07',
      eraId: 'era-7-colonial',
      year: '1919년 2월',
      weight: 5,
      title: '2·8 독립 선언',
      description: '도쿄 조선 유학생들의 독립 선언(1919년 2월 8일). 최팔용 등 주도. 3·1 운동의 직접적 계기.',
      tags: ['2·8독립선언', '도쿄', '조선유학생', '최팔용'],
      relatedEvents: []
    },
    {
      id: 'e7-08',
      eraId: 'era-7-colonial',
      year: '1919년 3월 1일',
      weight: 5,
      title: '3·1 운동',
      description: '1919년 3월 1일 거족적 독립 만세 운동. 민족 대표 33인 독립 선언서 발표(손병희·최린·이승훈 등). 탑골공원 만세 시위. 전국·해외 확산(2개월간 200만 명 이상). 일제의 무력 진압(제암리 학살 사건 등). 대한민국 임시정부 수립 계기.',
      tags: ['3·1운동', '민족대표33인', '독립선언서', '만세운동', '손병희', '제암리학살'],
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Korea-March_First_Movement-1.jpg/800px-Korea-March_First_Movement-1.jpg',
      imageCaption: '3·1 독립 만세 운동 (1919년 3월 1일, 대한민국 임시정부 수립 계기)',
      relatedEvents: []
    },
    {
      id: 'e7-09',
      eraId: 'era-7-colonial',
      year: '1919년 4월',
      weight: 5,
      title: '대한민국 임시정부 수립',
      description: '1919년 4월 11일 상하이 임시정부 수립. 대한민국 임시 헌장 발표(민주 공화정). 국호 "대한민국". 초대 대통령 이승만, 국무령 이동휘. 연통제·교통국(국내 연락 조직). 한국 광복군 조직.',
      tags: ['대한민국임시정부', '상하이', '이승만', '민주공화정', '연통제', '교통국'],
      relatedEvents: []
    },
    {
      id: 'e7-10',
      eraId: 'era-7-colonial',
      year: '1920년대',
      weight: 5,
      title: '문화 통치',
      description: '3·1 운동 후 통치 방식 전환(1920년~). 사이토 마코토 총독. 헌병 경찰제 폐지(보통 경찰제, 경찰 수 오히려 증가). 언론·집회 제한적 허용(동아일보·조선일보 창간 1920년). 회사령 폐지(1920년). 형식적 자치, 실질적 탄압.',
      tags: ['문화통치', '사이토마코토', '동아일보', '조선일보', '보통경찰제'],
      relatedEvents: []
    },
    {
      id: 'e7-11',
      eraId: 'era-7-colonial',
      year: '1920년 6월',
      weight: 5,
      title: '봉오동 전투',
      description: '1920년 6월. 홍범도 대한 독립군, 봉오동에서 일본군 대파. 독립군 최대 승전.',
      tags: ['봉오동전투', '홍범도', '대한독립군', '독립군승리'],
      relatedEvents: []
    },
    {
      id: 'e7-12',
      eraId: 'era-7-colonial',
      year: '1920년 10월',
      weight: 5,
      title: '청산리 대첩',
      description: '1920년 10월. 김좌진 북로 군정서, 청산리에서 일본군 대파. 독립 전쟁 최대 승첩. 일본의 간도 참변(경신참변) 보복 학살.',
      tags: ['청산리대첩', '김좌진', '북로군정서', '독립군대승', '간도참변'],
      relatedEvents: []
    },
    {
      id: 'e7-13',
      eraId: 'era-7-colonial',
      year: '1920년대',
      weight: 5,
      title: '산미 증산 계획',
      description: '1920~1934년. 쌀 생산 증대 명목, 실제는 일본 반출. 한국인 식량 부족(만주 잡곡 수입). 소작농 몰락.',
      tags: ['산미증산계획', '쌀수탈', '식량부족', '소작농몰락'],
      relatedEvents: []
    },
    {
      id: 'e7-14',
      eraId: 'era-7-colonial',
      year: '1920~1930년대',
      weight: 5,
      title: '민족 유일당 운동',
      description: '독립운동 세력 통합 운동. 국내: 신간회(1927년, 비타협 민족주의+사회주의 연합, 광주 학생 항일 운동 지원). 해외: 3부(참의부·정의부·신민부) 통합 시도. 민족 협동 전선.',
      tags: ['민족유일당운동', '신간회', '3부통합', '민족협동전선'],
      relatedEvents: []
    },
    {
      id: 'e7-15',
      eraId: 'era-7-colonial',
      year: '1920~1930년대',
      weight: 5,
      title: '사회주의 운동',
      description: '조선 공산당 조직(1925년). 노동·농민 운동 확산. 원산 노동자 총파업(1929년). 암태도 소작 쟁의(1923년).',
      tags: ['사회주의', '조선공산당', '원산총파업', '암태도소작쟁의', '노동운동'],
      relatedEvents: []
    },
    {
      id: 'e7-16',
      eraId: 'era-7-colonial',
      year: '1920~1930년대',
      weight: 5,
      title: '문맹 퇴치 운동',
      description: '브나로드 운동(1931년, 동아일보 주도, 농촌 계몽). 문자 보급 운동(조선일보 주도). 야학 운동.',
      tags: ['문맹퇴치', '브나로드운동', '동아일보', '농촌계몽', '야학'],
      relatedEvents: []
    },
    {
      id: 'e7-17',
      eraId: 'era-7-colonial',
      year: '1920~1930년대',
      weight: 5,
      title: '민립 대학 설립 운동',
      description: '이상재 등 민족 대학 설립 운동(1920년대). 일제 방해로 실패. 경성제국대학(1924년, 일제 설립, 한국인 차별).',
      tags: ['민립대학설립운동', '이상재', '경성제국대학'],
      relatedEvents: []
    },
    {
      id: 'e7-18',
      eraId: 'era-7-colonial',
      year: '1923년',
      weight: 5,
      title: '의열단',
      description: '김원봉 중심 조직(1919년 만주). 의열 투쟁(폭탄 의거). 조선 총독부·동양 척식 주식회사 등 공격. 신채호 "조선 혁명 선언" 작성(1923년, 의열단 행동 강령).',
      tags: ['의열단', '김원봉', '조선혁명선언', '신채호', '폭탄의거'],
      relatedEvents: []
    },
    {
      id: 'e7-19',
      eraId: 'era-7-colonial',
      year: '1926년',
      weight: 5,
      title: '6·10 만세 운동',
      description: '1926년 6월 10일. 순종 인산일(장례식) 계기 만세 시위. 학생·시민 주도. 조선 공산당·천도교 참여.',
      tags: ['6·10만세운동', '순종인산일', '학생운동', '천도교'],
      relatedEvents: []
    },
    {
      id: 'e7-20',
      eraId: 'era-7-colonial',
      year: '1927년',
      weight: 5,
      title: '신간회',
      description: '1927년 창립. 비타협 민족주의+사회주의 연합. 이상재(회장), 홍명희(부회장). "민족 단일당, 정치·경제적 각성 촉구". 광주 학생 항일 운동 지원. 1931년 해소(노선 갈등).',
      tags: ['신간회', '이상재', '홍명희', '민족협동전선', '광주학생운동지원'],
      relatedEvents: []
    },
    {
      id: 'e7-21',
      eraId: 'era-7-colonial',
      year: '1929년',
      weight: 5,
      title: '광주 학생 항일 운동',
      description: '1929년 11월 광주 학생 한·일 충돌 계기. 전국 학생 시위 확산(3·1 운동 이후 최대 규모). 신간회 진상 조사단 파견. 민족 차별 교육 반대.',
      tags: ['광주학생항일운동', '학생운동', '신간회', '민족차별반대'],
      relatedEvents: []
    },
    {
      id: 'e7-22',
      eraId: 'era-7-colonial',
      year: '1930년대',
      weight: 5,
      title: '한글 연구·보급',
      description: '조선어 학회(1931년, 이윤재·최현배 등). 한글 맞춤법 통일안(1933년). 표준어 사정(1936년). 우리말 큰사전 편찬 사업(1942년 조선어 학회 사건으로 중단).',
      tags: ['조선어학회', '한글맞춤법통일안', '표준어', '이윤재', '최현배'],
      relatedEvents: []
    },
    {
      id: 'e7-23',
      eraId: 'era-7-colonial',
      year: '1931~1932년',
      weight: 5,
      title: '만주 사변과 한인 애국단',
      description: '만주 사변(1931년, 일본의 만주 침략). 한인 애국단 조직(김구, 1931년). 이봉창 의거(1932년 1월, 도쿄 일왕 저격 시도). 윤봉길 의거(1932년 4월, 상하이 훙커우 공원 폭탄 의거).',
      tags: ['한인애국단', '김구', '이봉창의거', '윤봉길의거', '훙커우공원'],
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Yun_Bong-Gil.jpg/800px-Yun_Bong-Gil.jpg',
      imageCaption: '윤봉길 의사 (1908-1932, 독립운동가, 상하이 훙커우 공원 의거)',
      relatedEvents: []
    },
    {
      id: 'e7-24',
      eraId: 'era-7-colonial',
      year: '1932년',
      weight: 5,
      title: '한국 독립군 활약',
      description: '지청천 한국 독립군, 쌍성보·대전자령·동경성 전투 승리(1932~1933년, 중국 호로군과 연합).',
      tags: ['한국독립군', '지청천', '쌍성보전투', '중국연합작전'],
      relatedEvents: []
    },
    {
      id: 'e7-25',
      eraId: 'era-7-colonial',
      year: '1930년대',
      weight: 5,
      title: '민족 말살 통치',
      description: '1930년대 중반~ 민족 말살 정책. 황국 신민화 정책. 내선일체·일선동조론 강요. 황국 신민 서사 암송 강요.',
      tags: ['민족말살통치', '황국신민화', '내선일체', '일선동조론', '황국신민서사'],
      relatedEvents: []
    },
    {
      id: 'e7-26',
      eraId: 'era-7-colonial',
      year: '1937년~',
      weight: 5,
      title: '중일 전쟁과 전시 동원 체제',
      description: '중일 전쟁(1937년~). 국가 총동원법(1938년). 인적·물적 수탈 강화. 지원병제(1938년), 징병제(1944년). 학도 지원병·학병.',
      tags: ['중일전쟁', '국가총동원법', '지원병제', '징병제', '학병'],
      relatedEvents: []
    },
    {
      id: 'e7-27',
      eraId: 'era-7-colonial',
      year: '1930~1940년대',
      weight: 5,
      title: '민족 문화 말살',
      description: '창씨개명 강요(1939년~). 한글 사용 금지. 조선어 학회 사건(1942년). 신사 참배 강요. 황국 신민화 교육.',
      tags: ['창씨개명', '한글사용금지', '조선어학회사건', '신사참배', '민족문화말살'],
      relatedEvents: []
    },
    {
      id: 'e7-28',
      eraId: 'era-7-colonial',
      year: '1930~1940년대',
      weight: 5,
      title: '경제 수탈 강화',
      description: '남면북양 정책(남: 면화, 북: 양). 공출제(곡물·금속 강제 수탈). 미곡 공출, 군수 물자 징발. 금속 공출(식기·농기구까지).',
      tags: ['경제수탈', '남면북양', '공출제', '미곡공출', '금속공출'],
      relatedEvents: []
    },
    {
      id: 'e7-29',
      eraId: 'era-7-colonial',
      year: '1930~1940년대',
      weight: 5,
      title: '일제 전시 동원',
      description: '강제 징용(노무자·탄광·공장). 일본군 위안부 강제 동원. 정신대(여성 근로 정신대). 공출·군수 물자 동원.',
      tags: ['강제징용', '일본군위안부', '정신대', '전시동원'],
      relatedEvents: []
    },
    {
      id: 'e7-30',
      eraId: 'era-7-colonial',
      year: '1940년',
      weight: 5,
      title: '한국 광복군 창설',
      description: '1940년 9월 충칭(중국)에서 창설. 총사령관 지청천. 대한민국 임시정부 정규군. 연합군과 공동 작전(인도·미얀마 전선). 국내 진공 작전 준비 중 광복.',
      tags: ['한국광복군', '지청천', '임시정부정규군', '연합군작전', '충칭'],
      relatedEvents: []
    },
    {
      id: 'e7-31',
      eraId: 'era-7-colonial',
      year: '1941년',
      weight: 5,
      title: '대한민국 임시정부 건국 강령',
      description: '1941년 조소앙 작성. 삼균주의(정치·경제·교육 균등). 광복 후 국가 건설 청사진 제시.',
      tags: ['건국강령', '조소앙', '삼균주의', '임시정부', '국가건설청사진'],
      relatedEvents: []
    },
    {
      id: 'e7-32',
      eraId: 'era-7-colonial',
      year: '1941~1945년',
      weight: 5,
      title: '태평양 전쟁',
      description: '1941년 태평양 전쟁 발발. 일제의 한반도 병참 기지화. 전시 동원 극대화. 한국인 강제 징용·징병. 광복군 대일 선전 포고(1941년).',
      tags: ['태평양전쟁', '병참기지화', '전시동원', '광복군대일선전포고'],
      relatedEvents: []
    },
    {
      id: 'e7-33',
      eraId: 'era-7-colonial',
      year: '1942년',
      weight: 5,
      title: '조선어 학회 사건',
      description: '1942년. 일제가 조선어 학회 간부 검거·투옥(이윤재·최현배 등). "민족주의 운동" 탄압 명목. 한글 연구 중단.',
      tags: ['조선어학회사건', '이윤재', '최현배', '한글탄압'],
      relatedEvents: []
    },
    {
      id: 'e7-34',
      eraId: 'era-7-colonial',
      year: '1940년대',
      weight: 5,
      title: '조선 독립 동맹·조선 의용군',
      description: '중국 화북 지역. 김두봉·무정 중심. 조선 독립 동맹(1942년), 조선 의용군 조직. 중국 공산당과 연합 항일 투쟁.',
      tags: ['조선독립동맹', '조선의용군', '김두봉', '무정', '화북지역'],
      relatedEvents: []
    },
    {
      id: 'e7-35',
      eraId: 'era-7-colonial',
      year: '1930~1940년대',
      weight: 5,
      title: '국내 비밀 결사',
      description: '조선 건국 동맹(1944년, 여운형). 광복 직후 건국 준비 위원회로 발전. 국내 항일 비밀 조직.',
      tags: ['조선건국동맹', '여운형', '건국준비위원회', '비밀결사'],
      relatedEvents: []
    },
    {
      id: 'e7-36',
      eraId: 'era-7-colonial',
      year: '1920~1940년대',
      weight: 5,
      title: '민족주의 사학',
      description: '신채호 "조선상고사"(민족주의 사학). 박은식 "한국통사"·"한국독립운동지혈사". 정인보 "조선사 연구". 문일평.',
      tags: ['민족주의사학', '신채호', '박은식', '조선상고사', '정인보'],
      relatedEvents: []
    },
    {
      id: 'e7-37',
      eraId: 'era-7-colonial',
      year: '1930년대',
      weight: 5,
      title: '실증주의 사학 (식민 사학)',
      description: '이병도·신석호. 진단학회(1934년). 문헌 고증 중시. 일제 식민 사관(타율성론·정체성론) 영향 논쟁.',
      tags: ['실증주의사학', '이병도', '진단학회', '식민사관논쟁'],
      relatedEvents: []
    },
    {
      id: 'e7-38',
      eraId: 'era-7-colonial',
      year: '1920~1930년대',
      weight: 5,
      title: '사회 경제 사학',
      description: '백남운 "조선사회경제사"(1933년). 유물 사관. 조선사 발전 단계론 제시.',
      tags: ['사회경제사학', '백남운', '유물사관', '발전단계론'],
      relatedEvents: []
    },
    {
      id: 'e7-39',
      eraId: 'era-7-colonial',
      year: '1920~1940년대',
      weight: 5,
      title: '문학·예술',
      description: '신문학: 김소월·한용운·이상화(시). 이광수·염상섭·김동인(소설). 나도향·현진건. 카프(KAPF, 조선 프롤레타리아 예술가 동맹, 1925년). 순수 문학 vs 계급 문학 논쟁.',
      tags: ['신문학', '김소월', '한용운', '이광수', '카프', '계급문학'],
      relatedEvents: []
    },
    {
      id: 'e7-40',
      eraId: 'era-7-colonial',
      year: '1920~1930년대',
      weight: 5,
      title: '영화·연극',
      description: '나운규 "아리랑"(1926년, 최초 한국 영화). 윤백남 "토월회". 신파극·신극 발전.',
      tags: ['영화', '나운규', '아리랑', '토월회', '신파극'],
      relatedEvents: []
    },
    {
      id: 'e7-41',
      eraId: 'era-7-colonial',
      year: '1920~1930년대',
      weight: 5,
      title: '음악·미술',
      description: '서양 음악 도입(홍난파·안익태). 창작 동요(윤극영 "반달"). 서양화(김환기·이중섭). 조각(김복진).',
      tags: ['근대음악', '홍난파', '안익태', '서양화', '김환기'],
      relatedEvents: []
    },
    {
      id: 'e7-42',
      eraId: 'era-7-colonial',
      year: '1930년대',
      weight: 5,
      title: '친일파 형성',
      description: '일제 협력 친일파 형성. 친일 단체(국민 총력 조선 연맹 등). 창씨개명 독려, 지원병 선전. 광복 후 청산 과제.',
      tags: ['친일파', '일제협력', '국민총력조선연맹', '친일반민족행위'],
      relatedEvents: []
    },
    {
      id: 'e7-43',
      eraId: 'era-7-colonial',
      year: '1943년',
      weight: 5,
      title: '카이로 회담',
      description: '1943년 11월. 미·영·중 정상 회담. 카이로 선언: "적절한 절차(in due course)를 거쳐 한국 독립" 명시.',
      tags: ['카이로회담', '카이로선언', '한국독립', '연합국'],
      relatedEvents: []
    },
    {
      id: 'e7-44',
      eraId: 'era-7-colonial',
      year: '1945년 8월 6·9일',
      weight: 5,
      title: '히로시마·나가사키 원폭 투하',
      description: '1945년 8월 6일 히로시마, 8월 9일 나가사키 원자폭탄 투하. 소련 대일 참전(8월 9일). 일본 항복 결정.',
      tags: ['원폭투하', '히로시마', '나가사키', '소련참전'],
      relatedEvents: []
    },
    {
      id: 'e7-45',
      eraId: 'era-7-colonial',
      year: '1945년 8월 15일',
      weight: 5,
      title: '8·15 광복',
      description: '1945년 8월 15일. 일본 무조건 항복. 한국 광복. 일제 강점 35년 종식. 여운형 건국 준비 위원회 조직. 미·소 한반도 분할 점령(38도선).',
      tags: ['8·15광복', '일본항복', '건국준비위원회', '여운형', '38도선', '해방'],
      relatedEvents: []
    }
  ]
};


