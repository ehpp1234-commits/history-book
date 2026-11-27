import type { Era } from '../types';

export const ancientEra: Era = {
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
    // === 고구려 (10개) ===
    {
      id: 'e2-01',
      eraId: 'era-2-ancient',
      year: '3세기',
      weight: 3,
      title: '동천왕',
      description: '위나라 관구검의 침입으로 환도성 함락. 고구려 위기.',
      tags: ['동천왕', '환도성', '관구검', '위나라'],
      relatedEvents: []
    },
    {
      id: 'e2-02',
      eraId: 'era-2-ancient',
      year: '4세기',
      weight: 4,
      title: '미천왕',
      description: '낙랑군 축출, 서안평 점령. 고구려 영토 확장의 기반 마련.',
      tags: ['미천왕', '낙랑군축출', '서안평'],
      relatedEvents: []
    },
    {
      id: 'e2-03',
      eraId: 'era-2-ancient',
      year: '371년',
      weight: 3,
      title: '고국원왕 전사',
      description: '백제 근초고왕의 침입으로 평양성 전투에서 전사. 고구려-백제 대립 격화.',
      tags: ['고국원왕', '평양성전투', '백제침입'],
      relatedEvents: []
    },
    {
      id: 'e2-04',
      eraId: 'era-2-ancient',
      year: '372년',
      weight: 5,
      title: '소수림왕',
      description: '율령 반포, 태학 설립(교육기관), 불교 수용(전진에서). 중앙집권 체제 정비.',
      tags: ['소수림왕', '율령', '태학', '불교수용'],
      relatedEvents: []
    },
    {
      id: 'e2-05',
      eraId: 'era-2-ancient',
      year: '391~413년',
      weight: 5,
      title: '광개토왕',
      description: '연호 영락 사용. 만주 정복, 신라를 공격한 왜군 격퇴(400년). 광개토왕비 건립.',
      tags: ['광개토왕', '영락', '만주정복', '광개토왕비'],
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Hotaewang.jpg/800px-Hotaewang.jpg',
      imageCaption: '광개토대왕릉비 (414년, 중국 지린성 지안)',
      relatedEvents: []
    },
    {
      id: 'e2-06',
      eraId: 'era-2-ancient',
      year: '427년',
      weight: 5,
      title: '장수왕 평양 천도',
      description: '평양 천도(남진정책). 백제 한성 공격→개로왕 전사, 한강 유역 정복. 고구려 전성기.',
      tags: ['장수왕', '평양천도', '한강정복', '개로왕'],
      relatedEvents: []
    },
    {
      id: 'e2-07',
      eraId: 'era-2-ancient',
      year: '612년',
      weight: 5,
      title: '살수대첩',
      description: '수나라 113만 대군 침입. 을지문덕 장군이 살수(청천강)에서 대승. 수나라 멸망의 원인.',
      tags: ['을지문덕', '살수대첩', '수나라침입'],
      relatedEvents: []
    },
    {
      id: 'e2-08',
      eraId: 'era-2-ancient',
      year: '645년',
      weight: 5,
      title: '안시성 전투',
      description: '당 태종의 침입. 연개소문 정변으로 집권. 안시성 전투에서 당군 격퇴.',
      tags: ['연개소문', '안시성전투', '당태종'],
      relatedEvents: []
    },
    {
      id: 'e2-09',
      eraId: 'era-2-ancient',
      year: '668년',
      weight: 5,
      title: '고구려 멸망',
      description: '나당연합군의 공격으로 멸망. 검모잠, 안승의 고구려 부흥운동 전개.',
      tags: ['고구려멸망', '나당연합', '부흥운동'],
      relatedEvents: []
    },
    {
      id: 'e2-10',
      eraId: 'era-2-ancient',
      year: '5세기',
      weight: 4,
      title: '고구려 문화',
      description: '광개토왕비(414년). 연가7년명 금동여래입상. 쌍영총·안악3호분 고분벽화. 이문진 \'신집\' 5권 편찬.',
      tags: ['광개토왕비', '고분벽화', '쌍영총', '안악호분'],
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Hotaewang.jpg/800px-Hotaewang.jpg',
      imageCaption: '광개토대왕릉비 (414년, 중국 지린성 지안)',
      relatedEvents: []
    },

    // === 백제 (8개) ===
    {
      id: 'e2-11',
      eraId: 'era-2-ancient',
      year: '4세기',
      weight: 5,
      title: '근초고왕',
      description: '고구려 평양성 공격→고국원왕 전사. 마한 완전 복속. 역사서 \'서기\' 편찬. 칠지도 제작(일본 전래).',
      tags: ['근초고왕', '칠지도', '서기', '마한복속'],
      relatedEvents: []
    },
    {
      id: 'e2-12',
      eraId: 'era-2-ancient',
      year: '384년',
      weight: 4,
      title: '침류왕 불교 수용',
      description: '동진에서 마라난타를 통해 백제 불교 공인.',
      tags: ['침류왕', '불교수용', '마라난타'],
      relatedEvents: []
    },
    {
      id: 'e2-13',
      eraId: 'era-2-ancient',
      year: '475년',
      weight: 5,
      title: '개로왕 & 웅진(공주) 천도',
      description: '고구려 장수왕의 공격으로 한성 함락→개로왕 전사. 문주왕이 웅진(공주)으로 천도.',
      tags: ['개로왕', '웅진천도', '공주천도', '한성함락'],
      relatedEvents: []
    },
    {
      id: 'e2-14',
      eraId: 'era-2-ancient',
      year: '501~523년',
      weight: 4,
      title: '무령왕',
      description: '22담로에 왕족 파견하여 지방 통제 강화. 중국 남조 양나라와 교류. 무령왕릉(벽돌무덤) 발견.',
      tags: ['무령왕', '22담로', '무령왕릉'],
      relatedEvents: []
    },
    {
      id: 'e2-15',
      eraId: 'era-2-ancient',
      year: '538년',
      weight: 5,
      title: '성왕 사비 천도',
      description: '사비(부여) 천도, 국호 \'남부여\'. 신라와 연합하여 한강 하류 수복→신라 배신. 관산성 전투에서 전사.',
      tags: ['성왕', '사비천도', '남부여', '관산성전투'],
      relatedEvents: []
    },
    {
      id: 'e2-16',
      eraId: 'era-2-ancient',
      year: '600~641년',
      weight: 3,
      title: '무왕',
      description: '금마저(익산)에 미륵사 창건. 익산 천도 시도설.',
      tags: ['무왕', '미륵사', '익산'],
      relatedEvents: []
    },
    {
      id: 'e2-17',
      eraId: 'era-2-ancient',
      year: '660년',
      weight: 5,
      title: '의자왕 & 백제 멸망',
      description: '대야성 전투 승리. 계백 장군의 황산벌 전투 패배→나당연합군에 멸망. 복신·도침·흑치상지 부흥운동.',
      tags: ['의자왕', '황산벌', '백제멸망', '계백', '부흥운동'],
      relatedEvents: []
    },
    {
      id: 'e2-18',
      eraId: 'era-2-ancient',
      year: '7세기',
      weight: 3,
      title: '백제 문화',
      description: '정림사지 5층 석탑. 금동대향로(백제금동대향로). 산수무늬 벽돌.',
      tags: ['정림사지', '금동대향로', '백제문화'],
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/KOCIS_Korea_Baekje_Gilt_Bronze_Incense_Burner_01_%286853241226%29.jpg/800px-KOCIS_Korea_Baekje_Gilt_Bronze_Incense_Burner_01_%286853241226%29.jpg',
      imageCaption: '백제 금동대향로 (국보, 국립부여박물관 소장)',
      relatedEvents: []
    },

    // === 신라 (10개) ===
    {
      id: 'e2-19',
      eraId: 'era-2-ancient',
      year: '4세기 말',
      weight: 4,
      title: '내물마립간',
      description: '왜의 침입→고구려 광개토왕의 도움으로 격퇴. 백제와 동맹(나제동맹). 마립간 칭호 사용.',
      tags: ['내물마립간', '왜구격퇴', '나제동맹'],
      relatedEvents: []
    },
    {
      id: 'e2-20',
      eraId: 'era-2-ancient',
      year: '500~514년',
      weight: 4,
      title: '지증왕',
      description: '국호 \'신라\' 확정, \'왕\' 칭호 사용. 동시전(시장) 설치. 우산국(울릉도) 복속(이사부).',
      tags: ['지증왕', '국호신라', '우산국', '이사부'],
      relatedEvents: []
    },
    {
      id: 'e2-21',
      eraId: 'era-2-ancient',
      year: '514~540년',
      weight: 5,
      title: '법흥왕',
      description: '병부·상대등 설치. 율령 반포. 불교 공인(이차돈 순교, 527년). 건원 연호 사용. 금관가야 복속.',
      tags: ['법흥왕', '이차돈', '불교공인', '건원'],
      relatedEvents: []
    },
    {
      id: 'e2-22',
      eraId: 'era-2-ancient',
      year: '540~576년',
      weight: 5,
      title: '진흥왕',
      description: '백제와 연합하여 한강 점령→신주 설치. 관산성 전투(백제 성왕 전사). 대가야 정복. 화랑도 국가 조직화. 거칠부 \'국사\' 편찬.',
      tags: ['진흥왕', '한강점령', '화랑도', '진흥왕순수비'],
      relatedEvents: []
    },
    {
      id: 'e2-23',
      eraId: 'era-2-ancient',
      year: '632~647년',
      weight: 4,
      title: '선덕여왕',
      description: '신라 최초 여왕. 비담·염종의 난→김유신 진압. 황룡사 9층목탑 건립. 분황사 모전석탑. 원광 \'세속5계\'.',
      tags: ['선덕여왕', '황룡사9층목탑', '비담의난'],
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Cheomseongdae_in_summer.jpg/800px-Cheomseongdae_in_summer.jpg',
      imageCaption: '첨성대 (국보 제31호, 경주, 선덕여왕 시대)',
      relatedEvents: []
    },
    {
      id: 'e2-24',
      eraId: 'era-2-ancient',
      year: '642년',
      weight: 5,
      title: '대야성 전투 & 나당동맹',
      description: '백제 의자왕이 대야성 함락→김춘추의 사위 김품석 전사. 김춘추가 당에 가서 나당동맹 체결.',
      tags: ['대야성', '나당동맹', '김춘추'],
      relatedEvents: []
    },
    {
      id: 'e2-25',
      eraId: 'era-2-ancient',
      year: '660년',
      weight: 5,
      title: '백제 멸망',
      description: '나당연합군이 백제 공격→황산벌 전투 후 백제 멸망. 백제 부흥운동.',
      tags: ['백제멸망', '나당연합'],
      relatedEvents: []
    },
    {
      id: 'e2-26',
      eraId: 'era-2-ancient',
      year: '668년',
      weight: 5,
      title: '고구려 멸망',
      description: '나당연합군이 고구려 공격→멸망. 고구려 부흥운동.',
      tags: ['고구려멸망'],
      relatedEvents: []
    },
    {
      id: 'e2-27',
      eraId: 'era-2-ancient',
      year: '676년',
      weight: 5,
      title: '삼국 통일',
      description: '나당 전쟁. 매소성 전투, 기벌포 해전 승리→당군 축출. 삼국 통일 완성(대동강~원산만 이남).',
      tags: ['삼국통일', '매소성', '기벌포', '나당전쟁'],
      relatedEvents: []
    },
    {
      id: 'e2-28',
      eraId: 'era-2-ancient',
      year: '5~6세기',
      weight: 3,
      title: '신라 문화(전기)',
      description: '천마총 금관, 서봉총 금관. 돌무지덧널무덤(적석목곽분). 천마도.',
      tags: ['천마총', '금관', '적석목곽분'],
      relatedEvents: []
    },

    // === 가야 (4개) ===
    {
      id: 'e2-29',
      eraId: 'era-2-ancient',
      year: '1세기',
      weight: 3,
      title: '금관가야 (가락국)',
      description: '수로왕(김수로) 건국. 가야 6국 연맹체. 철 생산 발달→낙랑·왜에 수출.',
      tags: ['금관가야', '수로왕', '가야연맹', '철수출'],
      relatedEvents: []
    },
    {
      id: 'e2-30',
      eraId: 'era-2-ancient',
      year: '532년',
      weight: 4,
      title: '금관가야 멸망',
      description: '신라 법흥왕에게 항복하여 복속됨.',
      tags: ['금관가야멸망', '법흥왕'],
      relatedEvents: []
    },
    {
      id: 'e2-31',
      eraId: 'era-2-ancient',
      year: '562년',
      weight: 4,
      title: '대가야 멸망',
      description: '신라 진흥왕이 대가야 정복→가야 연맹 완전 소멸.',
      tags: ['대가야멸망', '진흥왕', '가야멸망'],
      relatedEvents: []
    },
    {
      id: 'e2-32',
      eraId: 'era-2-ancient',
      year: '5~6세기',
      weight: 3,
      title: '가야 문화',
      description: '대성동 고분(금관가야), 지산동 고분(대가야). 금동관, 철갑, 수레바퀴 모양 토기.',
      tags: ['가야고분', '철갑', '가야토기'],
      relatedEvents: []
    },

    // === 통일신라 (11개) ===
    {
      id: 'e2-33',
      eraId: 'era-2-ancient',
      year: '681~692년',
      weight: 5,
      title: '신문왕',
      description: '김흠돌 모역 사건→귀족 숙청. 관료전 지급, 녹읍 폐지(687년). 9주5소경 완비. 9서당10정 군사 조직.',
      tags: ['신문왕', '관료전', '녹읍폐지', '9주5소경'],
      relatedEvents: []
    },
    {
      id: 'e2-34',
      eraId: 'era-2-ancient',
      year: '751~774년',
      weight: 4,
      title: '경덕왕',
      description: '불국사 창건. 석가탑(무구정광대다라니경 발견), 다보탑.',
      tags: ['경덕왕', '불국사', '석가탑', '다보탑'],
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Bulguksa-02.jpg/800px-Bulguksa-02.jpg',
      imageCaption: '불국사 (유네스코 세계문화유산, 경주, 통일신라 경덕왕)',
      relatedEvents: []
    },
    {
      id: 'e2-35',
      eraId: 'era-2-ancient',
      year: '780~785년',
      weight: 3,
      title: '혜공왕 피살',
      description: '혜공왕 피살로 무열왕계 단절. 김헌창의 난(822년, 웅천주) 발생.',
      tags: ['혜공왕', '김헌창난'],
      relatedEvents: []
    },
    {
      id: 'e2-36',
      eraId: 'era-2-ancient',
      year: '785~798년',
      weight: 4,
      title: '원성왕',
      description: '원성왕계 시작. 독서삼품과 시행(788년, 유교 경전 시험으로 관리 선발).',
      tags: ['원성왕', '독서삼품과'],
      relatedEvents: []
    },
    {
      id: 'e2-37',
      eraId: 'era-2-ancient',
      year: '828년',
      weight: 4,
      title: '장보고 청해진',
      description: '장보고가 완도에 청해진 설치. 해상무역 장악. 당 적산법화원 창건. 울산항, 당항성, 영암 중심 국제무역.',
      tags: ['장보고', '청해진', '해상무역'],
      relatedEvents: []
    },
    {
      id: 'e2-38',
      eraId: 'era-2-ancient',
      year: '887~897년',
      weight: 4,
      title: '진성여왕',
      description: '최치원 10조 시무책 건의(실패). 원종·애노의 난(889년) 발생. 호족 세력 대두.',
      tags: ['진성여왕', '최치원', '10조시무책'],
      relatedEvents: []
    },
    {
      id: 'e2-39',
      eraId: 'era-2-ancient',
      year: '927~935년',
      weight: 5,
      title: '경순왕 & 신라 멸망',
      description: '신라 마지막 왕. 고려 왕건에게 항복(935년)→경주 사심관 임명. 신라 1000년 역사 종료.',
      tags: ['경순왕', '신라멸망', '고려항복'],
      relatedEvents: []
    },
    {
      id: 'e2-40',
      eraId: 'era-2-ancient',
      year: '8세기',
      weight: 4,
      title: '통일신라 불교 - 원효·의상',
      description: '원효(일심사상, 화쟁사상, 아미타 신앙). 의상(화엄사상, 화엄종, 부석사 창건). 혜초(왕오천축국전).',
      tags: ['원효', '의상', '혜초', '화엄사상'],
      relatedEvents: []
    },
    {
      id: 'e2-41',
      eraId: 'era-2-ancient',
      year: '9세기',
      weight: 4,
      title: '선종 9산 선문',
      description: '선종 불교 전래. 9산 선문 성립. 승탑·탑비 건립.',
      tags: ['선종', '9산선문', '승탑'],
      relatedEvents: []
    },
    {
      id: 'e2-42',
      eraId: 'era-2-ancient',
      year: '8세기',
      weight: 3,
      title: '6두품 세력',
      description: '최치원(격황소서, 10조시무책). 강수, 설총(화왕계). 진골 아래 6두품의 활약.',
      tags: ['6두품', '최치원', '설총'],
      relatedEvents: []
    },
    {
      id: 'e2-43',
      eraId: 'era-2-ancient',
      year: '8세기',
      weight: 3,
      title: '촌락문서',
      description: '일본 쇼소인에서 발견. 서원경(청주) 4개 촌락의 토지·인구·가축 기록.',
      tags: ['촌락문서', '쇼소인'],
      relatedEvents: []
    },

    // === 후삼국 (7개) ===
    {
      id: 'e2-44',
      eraId: 'era-2-ancient',
      year: '892년',
      weight: 4,
      title: '후백제 견훤',
      description: '견훤이 완산주(전주)를 수도로 후백제 건국. 후당·오월에 사신 파견.',
      tags: ['견훤', '후백제', '완산주'],
      relatedEvents: []
    },
    {
      id: 'e2-45',
      eraId: 'era-2-ancient',
      year: '901년',
      weight: 4,
      title: '후고구려 궁예',
      description: '궁예가 송악(개성)→철원 천도. 국호 태봉(마진). 광평성 설치. 폭정으로 축출됨.',
      tags: ['궁예', '후고구려', '태봉', '마진'],
      relatedEvents: []
    },
    {
      id: 'e2-46',
      eraId: 'era-2-ancient',
      year: '927년',
      weight: 4,
      title: '공산 전투',
      description: '견훤이 신라 경애왕 습격→왕 시해. 공산(대구) 전투에서 견훤 승리, 왕건 패배.',
      tags: ['공산전투', '경애왕'],
      relatedEvents: []
    },
    {
      id: 'e2-47',
      eraId: 'era-2-ancient',
      year: '930년',
      weight: 4,
      title: '고창(안동) 전투',
      description: '고창 전투에서 왕건 대승. 후삼국 통일 전환점.',
      tags: ['고창전투', '왕건승리'],
      relatedEvents: []
    },
    {
      id: 'e2-48',
      eraId: 'era-2-ancient',
      year: '935년',
      weight: 5,
      title: '신라 경순왕 항복',
      description: '견훤 금산사에 유폐→탈출하여 왕건에 투항. 신라 경순왕 고려에 항복.',
      tags: ['경순왕항복', '신라멸망', '견훤투항'],
      relatedEvents: []
    },
    {
      id: 'e2-49',
      eraId: 'era-2-ancient',
      year: '936년',
      weight: 5,
      title: '후삼국 통일',
      description: '일리천(선산) 전투에서 왕건 최종 승리. 후백제 멸망. 고려 후삼국 통일 완성.',
      tags: ['일리천전투', '후삼국통일', '후백제멸망'],
      relatedEvents: []
    },

    // === 발해 (7개) ===
    {
      id: 'e2-50',
      eraId: 'era-2-ancient',
      year: '698년',
      weight: 5,
      title: '대조영 발해 건국',
      description: '대조영이 발해(진국) 건국. 고구려 계승 의식.',
      tags: ['대조영', '발해건국', '진국'],
      relatedEvents: []
    },
    {
      id: 'e2-51',
      eraId: 'era-2-ancient',
      year: '719~737년',
      weight: 4,
      title: '발해 무왕',
      description: '장문휴가 당 등주 공격(732년). 연호 인안 사용. 대외 팽창.',
      tags: ['무왕', '장문휴', '등주공격'],
      relatedEvents: []
    },
    {
      id: 'e2-52',
      eraId: 'era-2-ancient',
      year: '737~793년',
      weight: 5,
      title: '발해 문왕',
      description: '연호 대흥 사용. 발해 전성기. 영토 확장.',
      tags: ['문왕', '대흥', '발해전성기'],
      relatedEvents: []
    },
    {
      id: 'e2-53',
      eraId: 'era-2-ancient',
      year: '818~830년',
      weight: 5,
      title: '발해 선왕',
      description: '연호 건흥. \'해동성국\' 칭송받음. 당과 대등한 외교.',
      tags: ['선왕', '해동성국', '건흥'],
      relatedEvents: []
    },
    {
      id: 'e2-54',
      eraId: 'era-2-ancient',
      year: '926년',
      weight: 5,
      title: '발해 멸망',
      description: '거란(요)의 침입으로 발해 멸망. 왕족·귀족 일부가 고려로 망명.',
      tags: ['발해멸망', '거란침입'],
      relatedEvents: []
    },
    {
      id: 'e2-55',
      eraId: 'era-2-ancient',
      year: '8~9세기',
      weight: 3,
      title: '발해 행정 체제',
      description: '5경 15부 62주. 주자감(교육), 문적원(도서 관리). 3성 6부제(당 모방).',
      tags: ['발해행정', '5경15부62주', '주자감'],
      relatedEvents: []
    },
    {
      id: 'e2-56',
      eraId: 'era-2-ancient',
      year: '8~9세기',
      weight: 3,
      title: '발해 문화',
      description: '정혜공주묘(모줄임천장, 돌사자상, 온돌). 영광탑, 이불병좌상. 고구려 문화 계승.',
      tags: ['발해문화', '정혜공주묘', '영광탑'],
      relatedEvents: []
    }
  ]
};





