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
      // === 고구려 ===
      {
        id: 'e2-01',
        eraId: 'era-2-ancient',
        year: '3세기',
        weight: 3,
        title: '동천왕',
        description: '위나라 관구검 공격으로 환도성 함락.',
        tags: ['동천왕', '환도성'],
        relatedEvents: []
      },
      {
        id: 'e2-02',
        eraId: 'era-2-ancient',
        year: '4세기',
        weight: 4,
        title: '미천왕',
        description: '낙랑군 축출, 서안평 점령.',
        tags: ['미천왕', '낙랑군축출'],
        relatedEvents: []
      },
      {
        id: 'e2-03',
        eraId: 'era-2-ancient',
        year: '371년',
        weight: 3,
        title: '고국원왕 전사',
        description: '백제 침입으로 평양성에서 전사.',
        tags: ['고국원왕', '평양성'],
        relatedEvents: []
      },
      {
        id: 'e2-04',
        eraId: 'era-2-ancient',
        year: '372년',
        weight: 5,
        title: '소수림왕',
        description: '율령 반포, 태학 설립, 불교 수용.',
        tags: ['소수림왕', '율령', '태학'],
        relatedEvents: []
      },
      {
        id: 'e2-05',
        eraId: 'era-2-ancient',
        year: '5세기 초',
        weight: 5,
        title: '광개토왕',
        description: '연호 영락. 만주 정복, 신라 공격한 왜군 격퇴.',
        tags: ['광개토왕', '영락', '만주정복'],
        relatedEvents: []
      },
      {
        id: 'e2-06',
        eraId: 'era-2-ancient',
        year: '427년',
        weight: 5,
        title: '장수왕 평양 천도',
        description: '평양 천도. 백제 공격→개로왕 죽음, 한강 정복.',
        tags: ['장수왕', '평양천도', '한강정복'],
        relatedEvents: []
      },
      {
        id: 'e2-07',
        eraId: 'era-2-ancient',
        year: '612년',
        weight: 5,
        title: '살수대첩',
        description: '수나라 침입. 을지문덕의 살수대첩.',
        tags: ['을지문덕', '살수대첩'],
        relatedEvents: []
      },
      {
        id: 'e2-08',
        eraId: 'era-2-ancient',
        year: '645년',
        weight: 5,
        title: '안시성 전투',
        description: '당나라 침입. 연개소문 정변. 안시성 전투.',
        tags: ['연개소문', '안시성전투'],
        relatedEvents: []
      },
      {
        id: 'e2-09',
        eraId: 'era-2-ancient',
        year: '668년',
        weight: 5,
        title: '고구려 멸망',
        description: '나당연합군에 멸망. 고구려 부흥운동(검모잠, 안승).',
        tags: ['고구려멸망', '부흥운동'],
        relatedEvents: []
      },
      {
        id: 'e2-10',
        eraId: 'era-2-ancient',
        year: '5세기',
        weight: 4,
        title: '고구려 문화',
        description: '광개토왕비. 연가7년명 금동여래입상. 쌍영총·안악호분 벽화. 신집 5권(이문진).',
        tags: ['광개토왕비', '고분벽화'],
        relatedEvents: []
      },
      // === 백제 ===
      {
        id: 'e2-11',
        eraId: 'era-2-ancient',
        year: '4세기',
        weight: 5,
        title: '근초고왕',
        description: '고구려 평양성 공격→고국원왕 전사. 마한 복속. 역사서 서기 편찬. 칠지도.',
        tags: ['근초고왕', '칠지도', '서기'],
        relatedEvents: []
      },
      {
        id: 'e2-12',
        eraId: 'era-2-ancient',
        year: '384년',
        weight: 4,
        title: '침류왕 불교 수용',
        description: '백제 불교 수용.',
        tags: ['침류왕', '불교'],
        relatedEvents: []
      },
      {
        id: 'e2-13',
        eraId: 'era-2-ancient',
        year: '475년',
        weight: 5,
        title: '개로왕 & 공주 천도',
        description: '고구려 장수왕 공격으로 한성 함락→문주왕 공주 천도.',
        tags: ['개로왕', '공주천도'],
        relatedEvents: []
      },
      {
        id: 'e2-14',
        eraId: 'era-2-ancient',
        year: '501~523년',
        weight: 4,
        title: '무령왕',
        description: '22담로에 왕족 파견. 중국 남조 양과 외교. 벽돌 무덤.',
        tags: ['무령왕', '22담로'],
        relatedEvents: []
      },
      {
        id: 'e2-15',
        eraId: 'era-2-ancient',
        year: '538년',
        weight: 5,
        title: '성왕',
        description: '사비 천도, 국호 남부여. 신라와 연합하여 한강 하류 수복→관산성 전투 전사.',
        tags: ['성왕', '사비천도', '남부여'],
        relatedEvents: []
      },
      {
        id: 'e2-16',
        eraId: 'era-2-ancient',
        year: '600~641년',
        weight: 3,
        title: '무왕',
        description: '금마저(익산) 미륵사 창건.',
        tags: ['무왕', '미륵사'],
        relatedEvents: []
      },
      {
        id: 'e2-17',
        eraId: 'era-2-ancient',
        year: '660년',
        weight: 5,
        title: '의자왕 & 백제 멸망',
        description: '대야성 전투. 계백 황산벌 전투 패배→백제 멸망. 복신·도침·흑치상지 부흥운동.',
        tags: ['의자왕', '황산벌', '백제멸망'],
        relatedEvents: []
      },
      {
        id: 'e2-18',
        eraId: 'era-2-ancient',
        year: '7세기',
        weight: 3,
        title: '백제 문화',
        description: '정림사지 5층 석탑. 금동대향로. 산수무늬 벽돌.',
        tags: ['정림사지', '금동대향로'],
        relatedEvents: []
      },
      // === 신라 ===
      {
        id: 'e2-19',
        eraId: 'era-2-ancient',
        year: '4세기 말',
        weight: 4,
        title: '내물마립간',
        description: '왜 침입→고구려 광개토왕 도움 격퇴. 백제와 동맹.',
        tags: ['내물마립간', '왜구격퇴'],
        relatedEvents: []
      },
      {
        id: 'e2-20',
        eraId: 'era-2-ancient',
        year: '500~514년',
        weight: 4,
        title: '지증왕',
        description: '국호 신라, 왕 호칭. 동시전 설치. 우산국(이사부) 복속.',
        tags: ['지증왕', '국호신라', '우산국'],
        relatedEvents: []
      },
      {
        id: 'e2-21',
        eraId: 'era-2-ancient',
        year: '514~540년',
        weight: 5,
        title: '법흥왕',
        description: '병부·상대등 설치. 불교 공인(이차돈 순교). 건원 연호. 금관가야 복속.',
        tags: ['법흥왕', '이차돈', '불교공인'],
        relatedEvents: []
      },
      {
        id: 'e2-22',
        eraId: 'era-2-ancient',
        year: '540~576년',
        weight: 5,
        title: '진흥왕',
        description: '백제 성왕과 동맹 후 한강 점령→신주 설치. 관산성 전투. 대가야 정복. 화랑 국가 조직화. 국사 편찬(거칠부).',
        tags: ['진흥왕', '한강점령', '화랑도'],
        relatedEvents: []
      },
      {
        id: 'e2-23',
        eraId: 'era-2-ancient',
        year: '632~647년',
        weight: 4,
        title: '선덕여왕',
        description: '비담·염종 난→김유신 진압. 황룡사 9층목탑, 분황사 모전석탑. 원광 세속5계.',
        tags: ['선덕여왕', '황룡사9층목탑'],
        relatedEvents: []
      },
      {
        id: 'e2-24',
        eraId: 'era-2-ancient',
        year: '642년',
        weight: 5,
        title: '대야성 전투',
        description: '백제 의자왕 대야성 전투→김춘추 나당 동맹 체결.',
        tags: ['대야성', '나당동맹'],
        relatedEvents: []
      },
      {
        id: 'e2-25',
        eraId: 'era-2-ancient',
        year: '660년',
        weight: 5,
        title: '백제 멸망',
        description: '나당연합군→백제 멸망. 백제 부흥운동.',
        tags: ['백제멸망'],
        relatedEvents: []
      },
      {
        id: 'e2-26',
        eraId: 'era-2-ancient',
        year: '668년',
        weight: 5,
        title: '고구려 멸망',
        description: '나당연합군→고구려 멸망. 고구려 부흥운동.',
        tags: ['고구려멸망'],
        relatedEvents: []
      },
      {
        id: 'e2-27',
        eraId: 'era-2-ancient',
        year: '676년',
        weight: 5,
        title: '삼국 통일',
        description: '나당 전쟁(매소성·기벌포 전투)→삼국 통일 완성.',
        tags: ['삼국통일', '매소성', '기벌포'],
        relatedEvents: []
      },
      {
        id: 'e2-28',
        eraId: 'era-2-ancient',
        year: '5~6세기',
        weight: 3,
        title: '신라 문화(전기)',
        description: '천마총 금관. 돌무지덧널무덤.',
        tags: ['천마총', '금관'],
        relatedEvents: []
      },
      // === 가야 ===
      {
        id: 'e2-29',
        eraId: 'era-2-ancient',
        year: '1세기',
        weight: 3,
        title: '금관가야',
        description: '수로왕(김수로) 건국. 6개 연맹체. 철 생산→낙랑·왜 수출.',
        tags: ['금관가야', '수로왕'],
        relatedEvents: []
      },
      {
        id: 'e2-30',
        eraId: 'era-2-ancient',
        year: '532년',
        weight: 4,
        title: '금관가야 복속',
        description: '신라 법흥왕 때 금관가야 복속.',
        tags: ['금관가야복속'],
        relatedEvents: []
      },
      {
        id: 'e2-31',
        eraId: 'era-2-ancient',
        year: '562년',
        weight: 4,
        title: '대가야 복속',
        description: '신라 진흥왕 때 대가야 정복.',
        tags: ['대가야정복'],
        relatedEvents: []
      },
      {
        id: 'e2-32',
        eraId: 'era-2-ancient',
        year: '5~6세기',
        weight: 3,
        title: '가야 문화',
        description: '대성동 고분(금관가야), 지산동 고분(대가야). 금동관, 철갑, 수레바퀴 모양 토기.',
        tags: ['가야고분', '철갑'],
        relatedEvents: []
      },
      // === 통일신라 ===
      {
        id: 'e2-33',
        eraId: 'era-2-ancient',
        year: '681~692년',
        weight: 5,
        title: '신문왕',
        description: '김흠돌 모역사건→귀족 숙청. 관료전 지급, 녹읍 폐지. 9주5소경, 9서당10정. 감은사지 3층석탑.',
        tags: ['신문왕', '관료전', '9주5소경'],
        relatedEvents: []
      },
      {
        id: 'e2-34',
        eraId: 'era-2-ancient',
        year: '751~774년',
        weight: 4,
        title: '경덕왕',
        description: '불국사 석가탑(무구정광대다라니경), 다보탑.',
        tags: ['불국사', '석가탑'],
        relatedEvents: []
      },
      {
        id: 'e2-35',
        eraId: 'era-2-ancient',
        year: '780~785년',
        weight: 3,
        title: '혜공왕 피살',
        description: '혜공왕 피살→김헌창 난(웅천주).',
        tags: ['혜공왕', '김헌창난'],
        relatedEvents: []
      },
      {
        id: 'e2-36',
        eraId: 'era-2-ancient',
        year: '785~798년',
        weight: 4,
        title: '원성왕',
        description: '독서삼품과 시행.',
        tags: ['원성왕', '독서삼품과'],
        relatedEvents: []
      },
      {
        id: 'e2-37',
        eraId: 'era-2-ancient',
        year: '828년',
        weight: 4,
        title: '장보고',
        description: '청해진 설치, 법화원 창건. 국제무역(울산항, 당항성, 영암).',
        tags: ['장보고', '청해진'],
        relatedEvents: []
      },
      {
        id: 'e2-38',
        eraId: 'era-2-ancient',
        year: '887~897년',
        weight: 4,
        title: '진성여왕',
        description: '최치원 10조 시무책 건의. 원종·애노 난.',
        tags: ['진성여왕', '최치원'],
        relatedEvents: []
      },
      {
        id: 'e2-39',
        eraId: 'era-2-ancient',
        year: '927~935년',
        weight: 5,
        title: '경순왕',
        description: '신라 마지막 왕. 고려 왕건에 항복→경주 사심관 임명.',
        tags: ['경순왕', '신라멸망'],
        relatedEvents: []
      },
      {
        id: 'e2-40',
        eraId: 'era-2-ancient',
        year: '8세기',
        weight: 4,
        title: '통일신라 불교',
        description: '원효(일심사상, 화쟁사상). 의상(화엄사상, 부석사). 혜초(왕오천축국전).',
        tags: ['원효', '의상', '혜초'],
        relatedEvents: []
      },
      {
        id: 'e2-41',
        eraId: 'era-2-ancient',
        year: '9세기',
        weight: 4,
        title: '통일신라 선종',
        description: '선종9산 선문. 승탑.',
        tags: ['선종', '9산선문'],
        relatedEvents: []
      },
      {
        id: 'e2-42',
        eraId: 'era-2-ancient',
        year: '8세기',
        weight: 3,
        title: '6두품',
        description: '최치원(격황소서, 10조시무책). 강수, 설총(화왕계).',
        tags: ['6두품', '최치원'],
        relatedEvents: []
      },
      {
        id: 'e2-43',
        eraId: 'era-2-ancient',
        year: '8세기',
        weight: 3,
        title: '촌락문서',
        description: '일본 쇼소인 발견. 서원경 4개 촌락 기록.',
        tags: ['촌락문서', '쇼소인'],
        relatedEvents: []
      },
      // === 후삼국 ===
      {
        id: 'e2-44',
        eraId: 'era-2-ancient',
        year: '892년',
        weight: 4,
        title: '후백제 견훤',
        description: '수도 완산주. 후당·오월 사신 파견.',
        tags: ['견훤', '후백제'],
        relatedEvents: []
      },
      {
        id: 'e2-45',
        eraId: 'era-2-ancient',
        year: '901년',
        weight: 4,
        title: '후고구려 궁예',
        description: '수도 송악(개성)→철원. 국호 태봉/마진. 광평성.',
        tags: ['궁예', '후고구려', '태봉'],
        relatedEvents: []
      },
      {
        id: 'e2-46',
        eraId: 'era-2-ancient',
        year: '927년',
        weight: 4,
        title: '공산 전투',
        description: '견훤 신라 경애왕 습격. 공산 전투→견훤 승.',
        tags: ['공산전투'],
        relatedEvents: []
      },
      {
        id: 'e2-47',
        eraId: 'era-2-ancient',
        year: '930년',
        weight: 4,
        title: '고창 전투',
        description: '고창 전투→왕건 승.',
        tags: ['고창전투'],
        relatedEvents: []
      },
      {
        id: 'e2-48',
        eraId: 'era-2-ancient',
        year: '935년',
        weight: 5,
        title: '신라 항복',
        description: '견훤 금산사 유폐→왕건에 투항. 신라 경순왕 항복.',
        tags: ['신라항복'],
        relatedEvents: []
      },
      {
        id: 'e2-49',
        eraId: 'era-2-ancient',
        year: '936년',
        weight: 5,
        title: '후삼국 통일',
        description: '일리천 전투→왕건 승. 고려 후삼국 통일.',
        tags: ['일리천', '후삼국통일'],
        relatedEvents: []
      },
      // === 발해 ===
      {
        id: 'e2-50',
        eraId: 'era-2-ancient',
        year: '698년',
        weight: 5,
        title: '대조영',
        description: '발해(=진국) 건국.',
        tags: ['대조영', '발해건국'],
        relatedEvents: []
      },
      {
        id: 'e2-51',
        eraId: 'era-2-ancient',
        year: '719~737년',
        weight: 4,
        title: '무왕',
        description: '당 등주 공격(장문휴). 연호 인안.',
        tags: ['무왕', '장문휴'],
        relatedEvents: []
      },
      {
        id: 'e2-52',
        eraId: 'era-2-ancient',
        year: '737~793년',
        weight: 5,
        title: '문왕',
        description: '연호 대흥. 발해 전성기.',
        tags: ['문왕', '대흥'],
        relatedEvents: []
      },
      {
        id: 'e2-53',
        eraId: 'era-2-ancient',
        year: '818~830년',
        weight: 5,
        title: '선왕',
        description: '연호 건흥. 해동성국.',
        tags: ['선왕', '해동성국'],
        relatedEvents: []
      },
      {
        id: 'e2-54',
        eraId: 'era-2-ancient',
        year: '926년',
        weight: 5,
        title: '발해 멸망',
        description: '거란 침입→발해 멸망.',
        tags: ['발해멸망', '거란'],
        relatedEvents: []
      },
      {
        id: 'e2-55',
        eraId: 'era-2-ancient',
        year: '8~9세기',
        weight: 3,
        title: '발해 행정',
        description: '5경15부62주. 주자감, 문적원.',
        tags: ['발해행정'],
        relatedEvents: []
      },
      {
        id: 'e2-56',
        eraId: 'era-2-ancient',
        year: '8~9세기',
        weight: 3,
        title: '발해 문화',
        description: '정혜공주묘(모줄임천장, 돌사자상, 온돌). 영광탑, 이불병좌상.',
        tags: ['발해문화'],
        relatedEvents: []
      },
  {
    id: 'era-3-goryeo',
    name: '고려',
    periodLabel: '918년 ~ 1392년',
    startYear: 918,
    endYear: 1392,
    color: '#1E8449',
    order: 2,
    bgColor: '#E8F6F3',
    bgColorDark: '#2C3E36',
    pattern: 'pattern-goryeo-celadon',
    watermarkLabel: {
      ko: '고려',
      en: 'GORYEO',
      period: '918–1392',
    },
    cards: [
      {
        id: 'e3-01',
        eraId: 'era-3-goryeo',
        year: '918년',
        weight: 5,
        title: '태조 왕건',
        description: '호족 연합 정책. 사심관·기인 제도. 혼인정책(29 왕비). 북진정책→서경(평양) 중시. 정계·계백료서 반포. 훈요10조.',
        tags: ['태조', '왕건', '훈요10조', '사심관'],
        relatedEvents: []
      },
      {
        id: 'e3-02',
        eraId: 'era-3-goryeo',
        year: '949~975년',
        weight: 4,
        title: '광종',
        description: '노비안검법(956). 과거제 시행(958). 공복 제정. 황제 칭호, 광덕·준풍 연호.',
        tags: ['광종', '노비안검법', '과거제'],
        relatedEvents: []
      },
      {
        id: 'e3-03',
        eraId: 'era-3-goryeo',
        year: '981~997년',
        weight: 4,
        title: '성종',
        description: '최승로 28조 시무책. 유교 정치 이념. 12목 설치.',
        tags: ['성종', '최승로', '12목'],
        relatedEvents: []
      },
      {
        id: 'e3-04',
        eraId: 'era-3-goryeo',
        year: '1009년',
        weight: 4,
        title: '강조의 정변',
        description: '강조 정변→거란 2차 침입(현종).',
        tags: ['강조', '정변'],
        relatedEvents: []
      },
      {
        id: 'e3-05',
        eraId: 'era-3-goryeo',
        year: '1018~1019년',
        weight: 5,
        title: '귀주대첩',
        description: '거란 3차 침입. 강감찬 귀주대첩.',
        tags: ['귀주대첩', '강감찬'],
        relatedEvents: []
      },
      {
        id: 'e3-06',
        eraId: 'era-3-goryeo',
        year: '1033~1044년',
        weight: 4,
        title: '천리장성',
        description: '거란·여진 방어용 천리장성 축조.',
        tags: ['천리장성'],
        relatedEvents: []
      },
      {
        id: 'e3-07',
        eraId: 'era-3-goryeo',
        year: '1104년',
        weight: 4,
        title: '윤관',
        description: '별무반 조직(숙종)→여진 정벌(예종), 동북 9성 설치.',
        tags: ['윤관', '별무반', '동북9성'],
        relatedEvents: []
      },
      {
        id: 'e3-08',
        eraId: 'era-3-goryeo',
        year: '1126년',
        weight: 4,
        title: '이자겸의 난',
        description: '이자겸 난→척준경 진압.',
        tags: ['이자겸의난'],
        relatedEvents: []
      },
      {
        id: 'e3-09',
        eraId: 'era-3-goryeo',
        year: '1135년',
        weight: 4,
        title: '묘청의 서경 천도 운동',
        description: '묘청·정지상 서경 천도 주장, 금국 정벌 주장→김부식 진압.',
        tags: ['묘청', '서경천도운동'],
        relatedEvents: []
      },
      {
        id: 'e3-10',
        eraId: 'era-3-goryeo',
        year: '1145년',
        weight: 5,
        title: '삼국사기',
        description: '김부식, 삼국사기 편찬(현존 최고 역사서).',
        tags: ['삼국사기', '김부식'],
        relatedEvents: []
      },
      {
        id: 'e3-11',
        eraId: 'era-3-goryeo',
        year: '1170년',
        weight: 5,
        title: '무신정변',
        description: '정중부·이의방·이고 정변. 의종 폐위→명종 옹립.',
        tags: ['무신정변', '정중부'],
        relatedEvents: []
      },
      {
        id: 'e3-12',
        eraId: 'era-3-goryeo',
        year: '1176년',
        weight: 3,
        title: '공주 명학소 봉기',
        description: '망이·망소이 봉기.',
        tags: ['망이망소이'],
        relatedEvents: []
      },
      {
        id: 'e3-13',
        eraId: 'era-3-goryeo',
        year: '1193~1198년',
        weight: 3,
        title: '김사미·효심 봉기',
        description: '경상도 김사미, 전라도 효심 봉기.',
        tags: ['김사미', '효심'],
        relatedEvents: []
      },
      {
        id: 'e3-14',
        eraId: 'era-3-goryeo',
        year: '1196년',
        weight: 5,
        title: '최충헌 집권',
        description: '최충헌 정권→교정도감 설치. 이의민 제거.',
        tags: ['최충헌', '교정도감'],
        relatedEvents: []
      },
      {
        id: 'e3-15',
        eraId: 'era-3-goryeo',
        year: '1198년',
        weight: 4,
        title: '만적의 난',
        description: '노비 만적의 신분 해방 운동→실패.',
        tags: ['만적의난'],
        relatedEvents: []
      },
      {
        id: 'e3-16',
        eraId: 'era-3-goryeo',
        year: '1231~1259년',
        weight: 5,
        title: '몽골 침입',
        description: '몽골 1~6차 침입. 귀주성 전투(박서), 처인성 전투(김윤후→살리타 사살).',
        tags: ['몽골침입', '처인성전투'],
        relatedEvents: []
      },
      {
        id: 'e3-17',
        eraId: 'era-3-goryeo',
        year: '1232년',
        weight: 5,
        title: '강화 천도',
        description: '최우 강화도 천도. 팔만대장경 조판 시작.',
        tags: ['강화천도', '팔만대장경'],
        relatedEvents: []
      },
      {
        id: 'e3-18',
        eraId: 'era-3-goryeo',
        year: '1258년',
        weight: 4,
        title: '최씨 무신정권 붕괴',
        description: '김준 제거→최씨 정권 종말.',
        tags: ['최씨정권붕괴'],
        relatedEvents: []
      },
      {
        id: 'e3-19',
        eraId: 'era-3-goryeo',
        year: '1270년',
        weight: 5,
        title: '개경 환도',
        description: '원종 개경 환도. 삼별초 항쟁(배중손, 진도·제주).',
        tags: ['개경환도', '삼별초'],
        relatedEvents: []
      },
      {
        id: 'e3-20',
        eraId: 'era-3-goryeo',
        year: '1274~1281년',
        weight: 4,
        title: '여몽연합군 일본 원정',
        description: '여몽연합군 일본 원정 1·2차(태풍으로 실패).',
        tags: ['일본원정'],
        relatedEvents: []
      },
      {
        id: 'e3-21',
        eraId: 'era-3-goryeo',
        year: '1285년',
        weight: 3,
        title: '일연',
        description: '일연, 삼국유사 편찬.',
        tags: ['삼국유사', '일연'],
        relatedEvents: []
      },
      {
        id: 'e3-22',
        eraId: 'era-3-goryeo',
        year: '1351년',
        weight: 4,
        title: '공민왕',
        description: '반원 자주 정책. 쌍성총관부 수복(북진정책). 전민변정도감. 정동행성 폐지. 신돈 등용.',
        tags: ['공민왕', '전민변정도감', '신돈'],
        relatedEvents: []
      },
      {
        id: 'e3-23',
        eraId: 'era-3-goryeo',
        year: '1363년',
        weight: 3,
        title: '이제현',
        description: '이제현, 사략 편찬.',
        tags: ['사략', '이제현'],
        relatedEvents: []
      },
      {
        id: 'e3-24',
        eraId: 'era-3-goryeo',
        year: '1374년',
        weight: 4,
        title: '공민왕 시해',
        description: '공민왕 시해→우왕 즉위.',
        tags: ['공민왕시해'],
        relatedEvents: []
      },
      {
        id: 'e3-25',
        eraId: 'era-3-goryeo',
        year: '1376년',
        weight: 4,
        title: '최영·이성계 왜구 격퇴',
        description: '최영 홍산대첩. 이성계 황산대첩.',
        tags: ['홍산대첩', '황산대첩'],
        relatedEvents: []
      },
      {
        id: 'e3-26',
        eraId: 'era-3-goryeo',
        year: '1388년',
        weight: 5,
        title: '위화도 회군',
        description: '이성계 위화도 회군. 최영 제거→이성계 실권.',
        tags: ['위화도회군', '이성계'],
        relatedEvents: []
      },
      {
        id: 'e3-27',
        eraId: 'era-3-goryeo',
        year: '1390년',
        weight: 4,
        title: '전제개혁',
        description: '과전법 시행(1391). 사전 혁파.',
        tags: ['과전법', '전제개혁'],
        relatedEvents: []
      },
      {
        id: 'e3-28',
        eraId: 'era-3-goryeo',
        year: '12세기',
        weight: 3,
        title: '고려 불교',
        description: '의천(천태종 창시, 교관겸수). 지눌(조계종 중흥, 정혜쌍수, 돈오점수).',
        tags: ['의천', '지눌', '천태종', '조계종'],
        relatedEvents: []
      },
      {
        id: 'e3-29',
        eraId: 'era-3-goryeo',
        year: '12세기',
        weight: 3,
        title: '고려 과학',
        description: '직지심체요절(금속활자, 1377). 상감청자.',
        tags: ['직지심체요절', '상감청자'],
        relatedEvents: []
      },
      {
        id: 'e3-30',
        eraId: 'era-3-goryeo',
        year: '12세기',
        weight: 3,
        title: '고려 문화',
        description: '개성 경천사지 10층 석탑. 부석사 무량수전. 봉정사 극락전.',
        tags: ['경천사지10층석탑'],
        relatedEvents: []
      },
      {
        id: 'e3-31',
        eraId: 'era-3-goryeo',
        year: '14세기',
        weight: 3,
        title: '고려 말 사상',
        description: '이색·정몽주·정도전 성리학. 이제현 성리학 도입.',
        tags: ['성리학', '이색', '정몽주', '정도전'],
        relatedEvents: []
      }
    ]
  },
  {
    id: 'era-4-joseon-early',
    name: '조선 전기',
    periodLabel: '1392년 ~ 1592년',
    startYear: 1392,
    endYear: 1592,
    color: '#D35400',
    order: 3,
    bgColor: '#FDF2E9',
    bgColorDark: '#3A3630',
    pattern: 'pattern-joseon-palace',
    watermarkLabel: {
      ko: '조선전기',
      en: 'EARLY JOSEON',
      period: '1392–1592',
    },
    cards: [
      {
        id: 'e4-01',
        eraId: 'era-4-joseon-early',
        year: '1392년',
        weight: 5,
        title: '태조 이성계',
        description: '조선 건국. 한양 천도. 경국대전 편찬 시작. 사병 혁파.',
        tags: ['태조', '이성계', '조선건국'],
        relatedEvents: []
      },
      {
        id: 'e4-02',
        eraId: 'era-4-joseon-early',
        year: '1398년',
        weight: 4,
        title: '1차 왕자의 난',
        description: '이방원 주도 1차 왕자의 난. 정도전 제거.',
        tags: ['왕자의난', '이방원', '정도전'],
        relatedEvents: []
      },
      {
        id: 'e4-03',
        eraId: 'era-4-joseon-early',
        year: '1400년',
        weight: 4,
        title: '2차 왕자의 난',
        description: '이방원 주도 2차 왕자의 난. 이방간 제거.',
        tags: ['왕자의난', '이방간'],
        relatedEvents: []
      },
      {
        id: 'e4-04',
        eraId: 'era-4-joseon-early',
        year: '1401~1418년',
        weight: 5,
        title: '태종',
        description: '사병 혁파, 호패법, 6조 직계제. 의정부 약화→왕권 강화.',
        tags: ['태종', '호패법', '6조직계제'],
        relatedEvents: []
      },
      {
        id: 'e4-05',
        eraId: 'era-4-joseon-early',
        year: '1418~1450년',
        weight: 5,
        title: '세종',
        description: '훈민정음 창제(1443, 반포 1446). 집현전 운영. 4군6진 개척. 측우기, 앙부일구, 자격루. 과전법→직전법.',
        tags: ['세종', '훈민정음', '집현전', '4군6진'],
        relatedEvents: []
      },
      {
        id: 'e4-06',
        eraId: 'era-4-joseon-early',
        year: '1455년',
        weight: 4,
        title: '수양대군 왕위 찬탈',
        description: '수양대군(세조) 왕위 찬탈. 계유정난.',
        tags: ['세조', '계유정난'],
        relatedEvents: []
      },
      {
        id: 'e4-07',
        eraId: 'era-4-joseon-early',
        year: '1455~1468년',
        weight: 5,
        title: '세조',
        description: '직전법 시행. 집현전 폐지. 경국대전 편찬. 6조 직계제→의정부 서사제.',
        tags: ['세조', '직전법', '경국대전'],
        relatedEvents: []
      },
      {
        id: 'e4-08',
        eraId: 'era-4-joseon-early',
        year: '1469~1494년',
        weight: 5,
        title: '성종',
        description: '경국대전 완성·반포(1485). 홍문관 설치. 여진 정벌(이시애의 난 진압).',
        tags: ['성종', '경국대전', '홍문관'],
        relatedEvents: []
      },
      {
        id: 'e4-09',
        eraId: 'era-4-joseon-early',
        year: '1498년',
        weight: 4,
        title: '무오사화',
        description: '무오사화. 김일손·김종직 제거.',
        tags: ['무오사화'],
        relatedEvents: []
      },
      {
        id: 'e4-10',
        eraId: 'era-4-joseon-early',
        year: '1504년',
        weight: 4,
        title: '갑자사화',
        description: '갑자사화. 연산군.',
        tags: ['갑자사화', '연산군'],
        relatedEvents: []
      },
      {
        id: 'e4-11',
        eraId: 'era-4-joseon-early',
        year: '1519년',
        weight: 4,
        title: '기묘사화',
        description: '기묘사화. 조광조 제거.',
        tags: ['기묘사화', '조광조'],
        relatedEvents: []
      },
      {
        id: 'e4-12',
        eraId: 'era-4-joseon-early',
        year: '1545년',
        weight: 4,
        title: '을사사화',
        description: '을사사화. 윤원형·정순붕.',
        tags: ['을사사화'],
        relatedEvents: []
      },
      {
        id: 'e4-13',
        eraId: 'era-4-joseon-early',
        year: '1575년',
        weight: 4,
        title: '동서분당',
        description: '동인·서인 분당.',
        tags: ['동서분당', '동인', '서인'],
        relatedEvents: []
      }
    ]
  },
  {
    id: 'era-5-joseon-late',
    name: '조선 후기',
    periodLabel: '1592년 ~ 1863년',
    startYear: 1592,
    endYear: 1863,
    color: '#7D3C98',
    order: 4,
    bgColor: '#F4ECF7',
    bgColorDark: '#3A2E3D',
    pattern: 'pattern-joseon-palace',
    watermarkLabel: {
      ko: '조선후기',
      en: 'LATE JOSEON',
      period: '1592–1863',
    },
    cards: [
      {
        id: 'e5-01',
        eraId: 'era-5-joseon-late',
        year: '1592년',
        weight: 5,
        title: '임진왜란',
        description: '임진왜란(1592~1598). 이순신 한산도·명량대첩. 행주대첩(권율). 곽재우 의병.',
        tags: ['임진왜란', '이순신', '한산도대첩'],
        relatedEvents: []
      },
      {
        id: 'e5-02',
        eraId: 'era-5-joseon-late',
        year: '1608~1623년',
        weight: 4,
        title: '광해군',
        description: '중립 외교. 대동법 시행(경기). 동의보감(허준).',
        tags: ['광해군', '중립외교', '대동법'],
        relatedEvents: []
      },
      {
        id: 'e5-03',
        eraId: 'era-5-joseon-late',
        year: '1623년',
        weight: 4,
        title: '인조반정',
        description: '인조반정. 광해군 폐위.',
        tags: ['인조반정'],
        relatedEvents: []
      },
      {
        id: 'e5-04',
        eraId: 'era-5-joseon-late',
        year: '1627년',
        weight: 4,
        title: '정묘호란',
        description: '후금 침입. 정묘호란.',
        tags: ['정묘호란'],
        relatedEvents: []
      },
      {
        id: 'e5-05',
        eraId: 'era-5-joseon-late',
        year: '1636년',
        weight: 5,
        title: '병자호란',
        description: '청 침입. 병자호란. 삼전도 굴욕.',
        tags: ['병자호란', '삼전도'],
        relatedEvents: []
      },
      {
        id: 'e5-06',
        eraId: 'era-5-joseon-late',
        year: '1659년',
        weight: 4,
        title: '예송논쟁',
        description: '1차(1659), 2차(1674) 예송논쟁. 서인·남인 대립.',
        tags: ['예송논쟁'],
        relatedEvents: []
      },
      {
        id: 'e5-07',
        eraId: 'era-5-joseon-late',
        year: '1680년',
        weight: 4,
        title: '경신환국',
        description: '경신환국(1680). 서인 집권.',
        tags: ['경신환국'],
        relatedEvents: []
      },
      {
        id: 'e5-08',
        eraId: 'era-5-joseon-late',
        year: '1689년',
        weight: 4,
        title: '기사환국',
        description: '기사환국(1689). 남인 집권.',
        tags: ['기사환국'],
        relatedEvents: []
      },
      {
        id: 'e5-09',
        eraId: 'era-5-joseon-late',
        year: '1694년',
        weight: 4,
        title: '갑술환국',
        description: '갑술환국(1694). 서인 집권→노론·소론 분당.',
        tags: ['갑술환국', '노론', '소론'],
        relatedEvents: []
      },
      {
        id: 'e5-10',
        eraId: 'era-5-joseon-late',
        year: '1724~1776년',
        weight: 5,
        title: '영조',
        description: '탕평책. 균역법(1750). 속대전 편찬. 신문고 부활.',
        tags: ['영조', '탕평책', '균역법'],
        relatedEvents: []
      },
      {
        id: 'e5-11',
        eraId: 'era-5-joseon-late',
        year: '1762년',
        weight: 3,
        title: '사도세자',
        description: '사도세자 뒤주에 갇혀 죽음.',
        tags: ['사도세자'],
        relatedEvents: []
      },
      {
        id: 'e5-12',
        eraId: 'era-5-joseon-late',
        year: '1776~1800년',
        weight: 5,
        title: '정조',
        description: '규장각 설치. 화성 축조(정약용 거중기). 장용영 설치. 초계문신제. 수원 화성.',
        tags: ['정조', '규장각', '화성', '정약용'],
        relatedEvents: []
      },
      {
        id: 'e5-13',
        eraId: 'era-5-joseon-late',
        year: '1800년',
        weight: 4,
        title: '순조',
        description: '세도정치 시작. 김조순(안동 김씨).',
        tags: ['순조', '세도정치'],
        relatedEvents: []
      },
      {
        id: 'e5-14',
        eraId: 'era-5-joseon-late',
        year: '1801년',
        weight: 4,
        title: '신유박해',
        description: '천주교 박해(신유박해). 황사영 백서 사건.',
        tags: ['신유박해', '황사영백서'],
        relatedEvents: []
      },
      {
        id: 'e5-15',
        eraId: 'era-5-joseon-late',
        year: '1811년',
        weight: 4,
        title: '홍경래의 난',
        description: '홍경래의 난. 평안도.',
        tags: ['홍경래의난'],
        relatedEvents: []
      },
      {
        id: 'e5-16',
        eraId: 'era-5-joseon-late',
        year: '1862년',
        weight: 4,
        title: '진주 농민 봉기',
        description: '진주 농민 봉기(임술 농민 봉기). 삼정 문란.',
        tags: ['진주농민봉기', '삼정문란'],
        relatedEvents: []
      },
      {
        id: 'e5-17',
        eraId: 'era-5-joseon-late',
        year: '17세기',
        weight: 3,
        title: '조선 후기 성리학',
        description: '송시열(노론). 윤휴·박세당(소론).',
        tags: ['송시열', '윤휴'],
        relatedEvents: []
      },
      {
        id: 'e5-18',
        eraId: 'era-5-joseon-late',
        year: '17세기',
        weight: 3,
        title: '실학의 등장',
        description: '유형원(반계수록). 이익(곽우록, 토지개혁론). 정약용(경세유표, 목민심서).',
        tags: ['실학', '유형원', '이익', '정약용'],
        relatedEvents: []
      },
      {
        id: 'e5-19',
        eraId: 'era-5-joseon-late',
        year: '18세기',
        weight: 3,
        title: '조선 후기 문화',
        description: '김홍도·신윤복 풍속화. 정선 진경산수화.',
        tags: ['김홍도', '신윤복', '정선'],
        relatedEvents: []
      },
      {
        id: 'e5-20',
        eraId: 'era-5-joseon-late',
        year: '18세기',
        weight: 3,
        title: '한글 소설',
        description: '홍길동전(허균), 춘향전, 흥부전.',
        tags: ['홍길동전', '춘향전'],
        relatedEvents: []
      },
      {
        id: 'e5-21',
        eraId: 'era-5-joseon-late',
        year: '18세기',
        weight: 3,
        title: '상업 발달',
        description: '사상(私商) 발달. 송상, 경강상인. 대동법 전국 확대→공인 활동.',
        tags: ['사상', '송상', '공인'],
        relatedEvents: []
      },
      {
        id: 'e5-22',
        eraId: 'era-5-joseon-late',
        year: '19세기',
        weight: 3,
        title: '농업 기술',
        description: '이앙법 보급. 광작·상품작물 재배.',
        tags: ['이앙법', '광작'],
        relatedEvents: []
      },
      {
        id: 'e5-23',
        eraId: 'era-5-joseon-late',
        year: '19세기',
        weight: 3,
        title: '민족 의식',
        description: '동국문헌비고(영조). 대동여지도(김정호). 동사강목(안정복). 연암집(박지원).',
        tags: ['동국문헌비고', '대동여지도', '김정호'],
        relatedEvents: []
      }
    ]
  },
  {
    id: 'era-6-gaehwa',
    name: '개화기',
    periodLabel: '1863년 ~ 1910년',
    startYear: 1863,
    endYear: 1910,
    color: '#1F618D',
    order: 5,
    bgColor: '#EBF5FB',
    bgColorDark: '#2C3E50',
    pattern: 'pattern-modern-grid',
    watermarkLabel: {
      ko: '개화기',
      en: 'GAEHWA',
      period: '1863–1910',
    },
    cards: [
      {
        id: 'e6-01',
        eraId: 'era-6-gaehwa',
        year: '1863년',
        weight: 5,
        title: '흥선대원군 집권',
        description: '경복궁 중건. 서원 철폐. 통상 수교 거부 정책(척화비).',
        tags: ['흥선대원군', '경복궁중건', '척화비'],
        relatedEvents: []
      },
      {
        id: 'e6-02',
        eraId: 'era-6-gaehwa',
        year: '1866년',
        weight: 4,
        title: '병인박해',
        description: '천주교 박해(병인박해). 병인양요(프랑스 침입).',
        tags: ['병인박해', '병인양요'],
        relatedEvents: []
      },
      {
        id: 'e6-03',
        eraId: 'era-6-gaehwa',
        year: '1866년',
        weight: 4,
        title: '제너럴 셔먼호 사건',
        description: '제너럴 셔먼호 사건→신미양요(1871, 미국).',
        tags: ['제너럴셔먼호', '신미양요'],
        relatedEvents: []
      },
      {
        id: 'e6-04',
        eraId: 'era-6-gaehwa',
        year: '1873년',
        weight: 4,
        title: '대원군 하야',
        description: '고종 친정. 흥선대원군 하야. 명성황후 집권.',
        tags: ['고종친정', '명성황후'],
        relatedEvents: []
      },
      {
        id: 'e6-05',
        eraId: 'era-6-gaehwa',
        year: '1875년',
        weight: 5,
        title: '운요호 사건',
        description: '일본 운요호 사건→강화도 조약(1876, 최초 근대적 조약).',
        tags: ['운요호사건', '강화도조약'],
        relatedEvents: []
      },
      {
        id: 'e6-06',
        eraId: 'era-6-gaehwa',
        year: '1876년',
        weight: 5,
        title: '강화도 조약',
        description: '병자수호조약(강화도 조약). 부산·원산·인천 개항. 치외법권·무관세.',
        tags: ['강화도조약', '개항'],
        relatedEvents: []
      },
      {
        id: 'e6-07',
        eraId: 'era-6-gaehwa',
        year: '1880년',
        weight: 4,
        title: '통리기무아문',
        description: '통리기무아문 설치. 별기군 창설.',
        tags: ['통리기무아문', '별기군'],
        relatedEvents: []
      },
      {
        id: 'e6-08',
        eraId: 'era-6-gaehwa',
        year: '1881년',
        weight: 4,
        title: '영선사',
        description: '영선사(청 파견, 무기 제조 기술). 조사 시찰단(일본 파견).',
        tags: ['영선사'],
        relatedEvents: []
      },
      {
        id: 'e6-09',
        eraId: 'era-6-gaehwa',
        year: '1882년',
        weight: 5,
        title: '임오군란',
        description: '구식 군인 임오군란. 청군 개입→명성황후 환궁. 제물포 조약(일본).',
        tags: ['임오군란', '제물포조약'],
        relatedEvents: []
      },
      {
        id: 'e6-10',
        eraId: 'era-6-gaehwa',
        year: '1883년',
        weight: 3,
        title: '한성순보',
        description: '최초 신문 한성순보 발간.',
        tags: ['한성순보'],
        relatedEvents: []
      },
      {
        id: 'e6-11',
        eraId: 'era-6-gaehwa',
        year: '1884년',
        weight: 5,
        title: '갑신정변',
        description: '김옥균·박영효 급진 개화파 갑신정변(14개조 정강). 청 개입으로 3일천하. 한성 조약(일본).',
        tags: ['갑신정변', '김옥균', '14개조정강'],
        relatedEvents: []
      },
      {
        id: 'e6-12',
        eraId: 'era-6-gaehwa',
        year: '1885년',
        weight: 4,
        title: '거문도 사건',
        description: '영국 거문도 점령(1885~1887).',
        tags: ['거문도사건'],
        relatedEvents: []
      },
      {
        id: 'e6-13',
        eraId: 'era-6-gaehwa',
        year: '1894년',
        weight: 5,
        title: '동학 농민 운동',
        description: '전봉준 고부 봉기. 황토현·황룡촌 전투 승리. 전주 화약→폐정개혁안 12개조. 2차 봉기→우금치 패배.',
        tags: ['동학농민운동', '전봉준', '전주화약'],
        relatedEvents: []
      },
      {
        id: 'e6-14',
        eraId: 'era-6-gaehwa',
        year: '1894년',
        weight: 5,
        title: '청일전쟁',
        description: '청일전쟁(1894~1895). 일본 승리→시모노세키 조약.',
        tags: ['청일전쟁', '시모노세키조약'],
        relatedEvents: []
      },
      {
        id: 'e6-15',
        eraId: 'era-6-gaehwa',
        year: '1894년',
        weight: 5,
        title: '갑오개혁',
        description: '1차(1894): 과거제 폐지, 신분제 폐지, 조세 금납화. 2차(1894): 홍범14조. 3차(1895): 단발령.',
        tags: ['갑오개혁', '과거제폐지', '홍범14조'],
        relatedEvents: []
      },
      {
        id: 'e6-16',
        eraId: 'era-6-gaehwa',
        year: '1895년',
        weight: 5,
        title: '을미사변',
        description: '명성황후 시해(을미사변). 단발령→을미의병.',
        tags: ['을미사변', '명성황후시해', '을미의병'],
        relatedEvents: []
      },
      {
        id: 'e6-17',
        eraId: 'era-6-gaehwa',
        year: '1896년',
        weight: 5,
        title: '아관파천',
        description: '고종 러시아 공사관 파천(아관파천). 독립신문 창간(서재필). 독립협회 창립.',
        tags: ['아관파천', '독립신문', '독립협회'],
        relatedEvents: []
      },
      {
        id: 'e6-18',
        eraId: 'era-6-gaehwa',
        year: '1897년',
        weight: 5,
        title: '대한제국',
        description: '대한제국 선포. 광무개혁(양전사업, 근대 산업 육성). 연호 광무.',
        tags: ['대한제국', '광무개혁', '고종황제'],
        relatedEvents: []
      },
      {
        id: 'e6-19',
        eraId: 'era-6-gaehwa',
        year: '1898년',
        weight: 4,
        title: '만민공동회',
        description: '독립협회 만민공동회. 헌의 6조.',
        tags: ['만민공동회', '헌의6조'],
        relatedEvents: []
      },
      {
        id: 'e6-20',
        eraId: 'era-6-gaehwa',
        year: '1899년',
        weight: 3,
        title: '대한국국제',
        description: '대한국국제 반포(전제 황권 강화).',
        tags: ['대한국국제'],
        relatedEvents: []
      },
      {
        id: 'e6-21',
        eraId: 'era-6-gaehwa',
        year: '1899년',
        weight: 3,
        title: '경인선',
        description: '경인선 개통(최초 철도).',
        tags: ['경인선'],
        relatedEvents: []
      },
      {
        id: 'e6-22',
        eraId: 'era-6-gaehwa',
        year: '1904년',
        weight: 5,
        title: '러일전쟁',
        description: '러일전쟁(1904~1905). 일본 승리.',
        tags: ['러일전쟁'],
        relatedEvents: []
      },
      {
        id: 'e6-23',
        eraId: 'era-6-gaehwa',
        year: '1904년',
        weight: 5,
        title: '한일의정서',
        description: '한일의정서(1904). 1차 한일협약(고문 정치).',
        tags: ['한일의정서'],
        relatedEvents: []
      },
      {
        id: 'e6-24',
        eraId: 'era-6-gaehwa',
        year: '1905년',
        weight: 5,
        title: '을사늑약',
        description: '을사늑약(2차 한일협약). 외교권 박탈. 통감부 설치. 을사의병.',
        tags: ['을사늑약', '통감부', '을사의병'],
        relatedEvents: []
      },
      {
        id: 'e6-25',
        eraId: 'era-6-gaehwa',
        year: '1907년',
        weight: 5,
        title: '헤이그 특사',
        description: '고종 헤이그 특사 파견(이준, 이상설, 이위종). 고종 강제 퇴위→순종 즉위.',
        tags: ['헤이그특사', '이준', '고종퇴위'],
        relatedEvents: []
      },
      {
        id: 'e6-26',
        eraId: 'era-6-gaehwa',
        year: '1907년',
        weight: 5,
        title: '한일신협약',
        description: '한일신협약(정미7조약). 군대 해산→정미의병. 국채보상운동.',
        tags: ['한일신협약', '군대해산', '정미의병'],
        relatedEvents: []
      },
      {
        id: 'e6-27',
        eraId: 'era-6-gaehwa',
        year: '1909년',
        weight: 5,
        title: '안중근 의사',
        description: '안중근 하얼빈에서 이토 히로부미 저격.',
        tags: ['안중근', '이토히로부미'],
        relatedEvents: []
      },
      {
        id: 'e6-28',
        eraId: 'era-6-gaehwa',
        year: '1909년',
        weight: 4,
        title: '기유각서',
        description: '기유각서(간도 협약). 간도를 청에 넘김.',
        tags: ['기유각서', '간도협약'],
        relatedEvents: []
      },
      {
        id: 'e6-29',
        eraId: 'era-6-gaehwa',
        year: '1910년',
        weight: 5,
        title: '경술국치',
        description: '한일병합조약(경술국치). 국권 피탈. 조선 총독부 설치.',
        tags: ['경술국치', '한일병합', '조선총독부'],
        relatedEvents: []
      },
      {
        id: 'e6-30',
        eraId: 'era-6-gaehwa',
        year: '1880년대',
        weight: 3,
        title: '개화기 교육',
        description: '원산학사(1883), 배재학당(1885), 이화학당(1886).',
        tags: ['원산학사', '배재학당', '이화학당'],
        relatedEvents: []
      },
      {
        id: 'e6-31',
        eraId: 'era-6-gaehwa',
        year: '1890년대',
        weight: 3,
        title: '개화기 언론',
        description: '한성순보(1883), 독립신문(1896), 황성신문(1898), 대한매일신보(1904).',
        tags: ['한성순보', '독립신문', '황성신문'],
        relatedEvents: []
      },
      {
        id: 'e6-32',
        eraId: 'era-6-gaehwa',
        year: '1890년대',
        weight: 3,
        title: '의병 운동',
        description: '을미의병(유인석). 을사의병(최익현, 신돌석). 정미의병(13도 창의군).',
        tags: ['의병운동', '유인석', '최익현', '신돌석'],
        relatedEvents: []
      },
      {
        id: 'e6-33',
        eraId: 'era-6-gaehwa',
        year: '1900년대',
        weight: 3,
        title: '애국계몽운동',
        description: '보안회, 대한자강회, 신민회(안창호, 이동휘). 오산학교(이승훈), 대성학교(안창호).',
        tags: ['애국계몽운동', '신민회', '안창호'],
        relatedEvents: []
      },
      {
        id: 'e6-34',
        eraId: 'era-6-gaehwa',
        year: '1900년대',
        weight: 3,
        title: '국학 연구',
        description: '국문연구소, 대한국문법(유길준). 국어문법(주시경).',
        tags: ['국문연구소', '주시경'],
        relatedEvents: []
      },
      {
        id: 'e6-35',
        eraId: 'era-6-gaehwa',
        year: '1900년대',
        weight: 3,
        title: '국권회복운동',
        description: '국채보상운동(1907, 대구). 황무지 개간권 요구 반대 운동.',
        tags: ['국채보상운동'],
        relatedEvents: []
      },
      {
        id: 'e6-36',
        eraId: 'era-6-gaehwa',
        year: '1900년대',
        weight: 3,
        title: '간도·연해주 이주',
        description: '간도(북간도·서간도), 연해주 이주. 블라디보스토크 신한촌.',
        tags: ['간도', '연해주', '신한촌'],
        relatedEvents: []
      },
      {
        id: 'e6-37',
        eraId: 'era-6-gaehwa',
        year: '1908년',
        weight: 3,
        title: '국채보상운동',
        description: '국채보상운동(대구 발원). 대한매일신보 지원.',
        tags: ['국채보상운동'],
        relatedEvents: []
      },
      {
        id: 'e6-38',
        eraId: 'era-6-gaehwa',
        year: '1909년',
        weight: 3,
        title: '간도 참변',
        description: '일제 간도 협약→간도를 청에 넘김.',
        tags: ['간도협약'],
        relatedEvents: []
      },
      {
        id: 'e6-39',
        eraId: 'era-6-gaehwa',
        year: '1890년대',
        weight: 3,
        title: '개화기 종교',
        description: '천주교, 개신교 전래. 천도교(동학 개칭). 대종교(나철, 단군 숭배).',
        tags: ['천주교', '개신교', '천도교', '대종교'],
        relatedEvents: []
      },
      {
        id: 'e6-40',
        eraId: 'era-6-gaehwa',
        year: '1900년대',
        weight: 3,
        title: '개화기 경제',
        description: '황국중앙총상회(1898). 대한천일은행(1899, 최초 민족은행).',
        tags: ['황국중앙총상회', '대한천일은행'],
        relatedEvents: []
      }
    ]
  },
  {
    id: 'era-7-japanese-colonial',
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
      en: 'JAPANESE COLONIAL',
      period: '1910–1945',
    },
    cards: [
      {
        id: 'e7-01',
        eraId: 'era-7-japanese-colonial',
        year: '1910년',
        weight: 5,
        title: '경술국치',
        description: '한일병합조약. 국권 피탈. 조선 총독부(무단통치).',
        tags: ['경술국치', '한일병합', '조선총독부'],
        relatedEvents: []
      },
      {
        id: 'e7-02',
        eraId: 'era-7-japanese-colonial',
        year: '1910년대',
        weight: 5,
        title: '무단통치',
        description: '헌병 경찰 통치. 토지조사사업(1910~1918). 회사령(1910). 교육령(보통학교).',
        tags: ['무단통치', '토지조사사업', '회사령'],
        relatedEvents: []
      },
      {
        id: 'e7-03',
        eraId: 'era-7-japanese-colonial',
        year: '1911년',
        weight: 4,
        title: '105인 사건',
        description: '105인 사건(신민회 탄압). 안명근·양기탁 체포.',
        tags: ['105인사건', '신민회'],
        relatedEvents: []
      },
      {
        id: 'e7-04',
        eraId: 'era-7-japanese-colonial',
        year: '1915년',
        weight: 3,
        title: '독립군 기지',
        description: '북간도 중광단(이동녕). 서간도 경학사·신흥강습소.',
        tags: ['중광단', '경학사', '신흥강습소'],
        relatedEvents: []
      },
      {
        id: 'e7-05',
        eraId: 'era-7-japanese-colonial',
        year: '1919년',
        weight: 5,
        title: '3·1 운동',
        description: '3·1 운동. 민족대표 33인. 독립선언서(최남선 작성, 한용운 낭독). 비폭력 만세운동.',
        tags: ['3·1운동', '민족대표33인', '독립선언서'],
        relatedEvents: []
      },
      {
        id: 'e7-06',
        eraId: 'era-7-japanese-colonial',
        year: '1919년',
        weight: 5,
        title: '대한민국 임시정부',
        description: '상하이 대한민국 임시정부 수립. 이승만(대통령), 이동휘(국무총리). 연통제·교통국 운영.',
        tags: ['임시정부', '이승만', '상하이'],
        relatedEvents: []
      },
      {
        id: 'e7-07',
        eraId: 'era-7-japanese-colonial',
        year: '1920년',
        weight: 5,
        title: '봉오동·청산리 전투',
        description: '봉오동 전투(홍범도). 청산리 대첩(김좌진, 북로군정서).',
        tags: ['봉오동전투', '청산리대첩', '홍범도', '김좌진'],
        relatedEvents: []
      },
      {
        id: 'e7-08',
        eraId: 'era-7-japanese-colonial',
        year: '1920년',
        weight: 4,
        title: '간도 참변',
        description: '일제 간도 참변(경신참변). 독립군 탄압.',
        tags: ['간도참변', '경신참변'],
        relatedEvents: []
      },
      {
        id: 'e7-09',
        eraId: 'era-7-japanese-colonial',
        year: '1920년대',
        weight: 5,
        title: '문화통치',
        description: '문화통치(기만정책). 보통경찰제. 문관총독 임명 가능(실제 무관). 회사령 폐지. 산미증식계획.',
        tags: ['문화통치', '산미증식계획'],
        relatedEvents: []
      },
      {
        id: 'e7-10',
        eraId: 'era-7-japanese-colonial',
        year: '1920년',
        weight: 3,
        title: '조선일보·동아일보',
        description: '조선일보·동아일보 창간.',
        tags: ['조선일보', '동아일보'],
        relatedEvents: []
      },
      {
        id: 'e7-11',
        eraId: 'era-7-japanese-colonial',
        year: '1922년',
        weight: 4,
        title: '국민대표회의',
        description: '임시정부 국민대표회의(1923). 개조파·창조파 대립.',
        tags: ['국민대표회의'],
        relatedEvents: []
      },
      {
        id: 'e7-12',
        eraId: 'era-7-japanese-colonial',
        year: '1923년',
        weight: 4,
        title: '의열단',
        description: '의열단(김원봉). 조선혁명선언(신채호 작성).',
        tags: ['의열단', '김원봉', '조선혁명선언'],
        relatedEvents: []
      },
      {
        id: 'e7-13',
        eraId: 'era-7-japanese-colonial',
        year: '1926년',
        weight: 5,
        title: '6·10 만세운동',
        description: '6·10 만세운동(순종 인산일). 학생 주도.',
        tags: ['6·10만세운동'],
        relatedEvents: []
      },
      {
        id: 'e7-14',
        eraId: 'era-7-japanese-colonial',
        year: '1927년',
        weight: 5,
        title: '신간회',
        description: '신간회 결성(1927~1931). 비타협 민족주의+사회주의 연합. 광주학생운동 조사단 파견.',
        tags: ['신간회'],
        relatedEvents: []
      },
      {
        id: 'e7-15',
        eraId: 'era-7-japanese-colonial',
        year: '1929년',
        weight: 5,
        title: '광주학생항일운동',
        description: '광주학생항일운동. 전국 확산.',
        tags: ['광주학생운동'],
        relatedEvents: []
      },
      {
        id: 'e7-16',
        eraId: 'era-7-japanese-colonial',
        year: '1931년',
        weight: 4,
        title: '만주사변',
        description: '만주사변(1931)→한·중 연합 항일투쟁.',
        tags: ['만주사변'],
        relatedEvents: []
      },
      {
        id: 'e7-17',
        eraId: 'era-7-japanese-colonial',
        year: '1932년',
        weight: 5,
        title: '이봉창·윤봉길 의거',
        description: '이봉창 도쿄 의거. 윤봉길 상하이 훙커우 공원 의거.',
        tags: ['이봉창', '윤봉길', '훙커우공원'],
        relatedEvents: []
      },
      {
        id: 'e7-18',
        eraId: 'era-7-japanese-colonial',
        year: '1932년',
        weight: 4,
        title: '한인애국단',
        description: '김구 한인애국단 조직.',
        tags: ['한인애국단', '김구'],
        relatedEvents: []
      },
      {
        id: 'e7-19',
        eraId: 'era-7-japanese-colonial',
        year: '1933년',
        weight: 4,
        title: '한중연합군',
        description: '지청천 한국독립군, 양세봉 조선혁명군. 한중연합 작전(쌍성보·대전자령·영릉가 전투).',
        tags: ['한중연합군', '지청천', '양세봉'],
        relatedEvents: []
      },
      {
        id: 'e7-20',
        eraId: 'era-7-japanese-colonial',
        year: '1935년',
        weight: 3,
        title: '동북항일연군',
        description: '동북항일연군(중국공산당). 조선인 참여.',
        tags: ['동북항일연군'],
        relatedEvents: []
      },
      {
        id: 'e7-21',
        eraId: 'era-7-japanese-colonial',
        year: '1937년',
        weight: 5,
        title: '중일전쟁',
        description: '중일전쟁(1937~1945). 민족말살정책 시작.',
        tags: ['중일전쟁', '민족말살정책'],
        relatedEvents: []
      },
      {
        id: 'e7-22',
        eraId: 'era-7-japanese-colonial',
        year: '1938년',
        weight: 4,
        title: '국가총동원법',
        description: '국가총동원법. 인적·물적 수탈 강화.',
        tags: ['국가총동원법'],
        relatedEvents: []
      },
      {
        id: 'e7-23',
        eraId: 'era-7-japanese-colonial',
        year: '1939년',
        weight: 4,
        title: '창씨개명',
        description: '창씨개명 강요. 황국신민서사 암송.',
        tags: ['창씨개명', '황국신민서사'],
        relatedEvents: []
      },
      {
        id: 'e7-24',
        eraId: 'era-7-japanese-colonial',
        year: '1940년',
        weight: 5,
        title: '한국광복군',
        description: '중경 임시정부 한국광복군 창설(지청천 총사령). 연합군과 공동 작전.',
        tags: ['한국광복군', '지청천', '중경임시정부'],
        relatedEvents: []
      },
      {
        id: 'e7-25',
        eraId: 'era-7-japanese-colonial',
        year: '1941년',
        weight: 5,
        title: '태평양전쟁',
        description: '태평양전쟁(1941~1945). 일제 대일 선전포고(임시정부).',
        tags: ['태평양전쟁', '대일선전포고'],
        relatedEvents: []
      },
      {
        id: 'e7-26',
        eraId: 'era-7-japanese-colonial',
        year: '1941년',
        weight: 4,
        title: '조선어학회 사건',
        description: '조선어학회 사건. 한글학자 탄압.',
        tags: ['조선어학회사건'],
        relatedEvents: []
      },
      {
        id: 'e7-27',
        eraId: 'era-7-japanese-colonial',
        year: '1942년',
        weight: 4,
        title: '조선의용군',
        description: '조선의용군(중국공산당 계열). 화북 지역 활동.',
        tags: ['조선의용군'],
        relatedEvents: []
      },
      {
        id: 'e7-28',
        eraId: 'era-7-japanese-colonial',
        year: '1943년',
        weight: 4,
        title: '학도지원병',
        description: '학도지원병·징병제 실시.',
        tags: ['학도지원병', '징병제'],
        relatedEvents: []
      },
      {
        id: 'e7-29',
        eraId: 'era-7-japanese-colonial',
        year: '1944년',
        weight: 4,
        title: '여자정신대',
        description: '여자정신대(근로정신대). 위안부 강제 동원.',
        tags: ['여자정신대', '위안부'],
        relatedEvents: []
      },
      {
        id: 'e7-30',
        eraId: 'era-7-japanese-colonial',
        year: '1945년',
        weight: 5,
        title: '광복',
        description: '8·15 광복. 일본 무조건 항복.',
        tags: ['광복', '8·15'],
        relatedEvents: []
      },
      {
        id: 'e7-31',
        eraId: 'era-7-japanese-colonial',
        year: '1920년대',
        weight: 3,
        title: '사회주의 운동',
        description: '조선공산당(1925). 조선청년총동맹. 근우회(여성운동).',
        tags: ['조선공산당', '근우회'],
        relatedEvents: []
      },
      {
        id: 'e7-32',
        eraId: 'era-7-japanese-colonial',
        year: '1920년대',
        weight: 3,
        title: '민립대학 설립운동',
        description: '민립대학 설립운동(실패). 경성제국대학(일제).',
        tags: ['민립대학운동'],
        relatedEvents: []
      },
      {
        id: 'e7-33',
        eraId: 'era-7-japanese-colonial',
        year: '1920년대',
        weight: 3,
        title: '물산장려운동',
        description: '물산장려운동(조만식). 평양 대표.',
        tags: ['물산장려운동', '조만식'],
        relatedEvents: []
      },
      {
        id: 'e7-34',
        eraId: 'era-7-japanese-colonial',
        year: '1930년대',
        weight: 3,
        title: '농촌진흥운동',
        description: '농촌진흥운동(브나로드 운동). 계몽운동.',
        tags: ['농촌진흥운동', '브나로드'],
        relatedEvents: []
      },
      {
        id: 'e7-35',
        eraId: 'era-7-japanese-colonial',
        year: '1920년대',
        weight: 3,
        title: '문맹퇴치운동',
        description: '문자보급운동. 조선일보 문맹퇴치 운동.',
        tags: ['문자보급운동'],
        relatedEvents: []
      },
      {
        id: 'e7-36',
        eraId: 'era-7-japanese-colonial',
        year: '1930년대',
        weight: 3,
        title: '민족사학',
        description: '박은식(한국통사, 한국독립운동지혈사). 신채호(조선상고사). 정인보(조선사연구). 문일평.',
        tags: ['박은식', '신채호', '정인보'],
        relatedEvents: []
      },
      {
        id: 'e7-37',
        eraId: 'era-7-japanese-colonial',
        year: '1930년대',
        weight: 3,
        title: '사회경제사학',
        description: '백남운(조선사회경제사). 유물사관.',
        tags: ['백남운', '사회경제사학'],
        relatedEvents: []
      },
      {
        id: 'e7-38',
        eraId: 'era-7-japanese-colonial',
        year: '1930년대',
        weight: 3,
        title: '실증사학',
        description: '이병도·손진태. 진단학회, 진단학보.',
        tags: ['이병도', '진단학회'],
        relatedEvents: []
      },
      {
        id: 'e7-39',
        eraId: 'era-7-japanese-colonial',
        year: '1930년대',
        weight: 3,
        title: '국어·국학 연구',
        description: '조선어학회(한글맞춤법통일안, 1933). 조선어학회 사건(1942).',
        tags: ['조선어학회', '한글맞춤법통일안'],
        relatedEvents: []
      },
      {
        id: 'e7-40',
        eraId: 'era-7-japanese-colonial',
        year: '1920년대',
        weight: 3,
        title: '문학',
        description: '이광수(무정). 나도향, 현진건. 한용운(님의 침묵). 이상(날개). 윤동주(하늘과 바람과 별과 시).',
        tags: ['이광수', '한용운', '윤동주'],
        relatedEvents: []
      },
      {
        id: 'e7-41',
        eraId: 'era-7-japanese-colonial',
        year: '1920년대',
        weight: 3,
        title: '미술',
        description: '나혜석(여성 화가). 이중섭.',
        tags: ['나혜석', '이중섭'],
        relatedEvents: []
      },
      {
        id: 'e7-42',
        eraId: 'era-7-japanese-colonial',
        year: '1920년대',
        weight: 3,
        title: '음악',
        description: '홍난파(봉선화). 윤심덕(사의 찬미).',
        tags: ['홍난파', '윤심덕'],
        relatedEvents: []
      },
      {
        id: 'e7-43',
        eraId: 'era-7-japanese-colonial',
        year: '1930년대',
        weight: 3,
        title: '영화',
        description: '나운규(아리랑, 1926). 안석영(미몽).',
        tags: ['나운규', '아리랑'],
        relatedEvents: []
      },
      {
        id: 'e7-44',
        eraId: 'era-7-japanese-colonial',
        year: '1930년대',
        weight: 3,
        title: '친일파',
        description: '이완용, 송병준, 최린, 이광수(친일문학), 최남선.',
        tags: ['친일파'],
        relatedEvents: []
      },
      {
        id: 'e7-45',
        eraId: 'era-7-japanese-colonial',
        year: '1910~1945년',
        weight: 3,
        title: '경제 수탈',
        description: '토지조사사업(1910~1918), 산미증식계획(1920~1934), 남면북양정책(1930년대), 공출제.',
        tags: ['토지조사사업', '산미증식계획', '공출제'],
        relatedEvents: []
      }
    ]
  },
  {
    id: 'era-8-modern',
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
      en: 'MODERN',
      period: '1945–Present',
    },
    cards: [
      {
        id: 'e8-01',
        eraId: 'era-8-modern',
        year: '1945년 8월',
        weight: 5,
        title: '광복',
        description: '8·15 광복. 미·소 38선 분할 점령. 모스크바 3상회의(1945.12, 신탁통치).',
        tags: ['광복', '38선', '모스크바3상회의'],
        relatedEvents: []
      },
      {
        id: 'e8-02',
        eraId: 'era-8-modern',
        year: '1945년',
        weight: 4,
        title: '건국준비위원회',
        description: '여운형 건국준비위원회 조직→조선인민공화국 선포.',
        tags: ['건국준비위원회', '여운형'],
        relatedEvents: []
      },
      {
        id: 'e8-03',
        eraId: 'era-8-modern',
        year: '1946년',
        weight: 4,
        title: '1차 미소공동위원회',
        description: '1차 미소공동위원회 결렬. 이승만 정읍발언(단독정부 주장).',
        tags: ['미소공동위원회', '정읍발언'],
        relatedEvents: []
      },
      {
        id: 'e8-04',
        eraId: 'era-8-modern',
        year: '1946년',
        weight: 3,
        title: '토지개혁',
        description: '북한 토지개혁(무상몰수, 무상분배).',
        tags: ['토지개혁'],
        relatedEvents: []
      },
      {
        id: 'e8-05',
        eraId: 'era-8-modern',
        year: '1947년',
        weight: 5,
        title: '유엔 한국임시위원단',
        description: '유엔 소총회→한국임시위원단 결의. 2차 미소공동위원회 결렬.',
        tags: ['유엔한국임시위원단'],
        relatedEvents: []
      },
      {
        id: 'e8-06',
        eraId: 'era-8-modern',
        year: '1948년 4월',
        weight: 4,
        title: '남북협상',
        description: '김구·김규식 남북협상(평양). 단독정부 수립 반대.',
        tags: ['남북협상', '김구', '김규식'],
        relatedEvents: []
      },
      {
        id: 'e8-07',
        eraId: 'era-8-modern',
        year: '1948년 5월',
        weight: 5,
        title: '5·10 총선거',
        description: '5·10 총선거(남한만). 제헌국회 구성.',
        tags: ['5·10총선거', '제헌국회'],
        relatedEvents: []
      },
      {
        id: 'e8-08',
        eraId: 'era-8-modern',
        year: '1948년 7월',
        weight: 5,
        title: '제헌헌법',
        description: '제헌헌법 공포. 대한민국 정부 수립(이승만 대통령).',
        tags: ['제헌헌법', '이승만', '대한민국정부수립'],
        relatedEvents: []
      },
      {
        id: 'e8-09',
        eraId: 'era-8-modern',
        year: '1948년 9월',
        weight: 5,
        title: '북한 정권 수립',
        description: '조선민주주의인민공화국 수립(김일성).',
        tags: ['북한정권수립', '김일성'],
        relatedEvents: []
      },
      {
        id: 'e8-10',
        eraId: 'era-8-modern',
        year: '1948년 10월',
        weight: 4,
        title: '여수·순천 10·19 사건',
        description: '여수·순천 10·19 사건. 국가보안법 제정.',
        tags: ['여순사건', '국가보안법'],
        relatedEvents: []
      },
      {
        id: 'e8-11',
        eraId: 'era-8-modern',
        year: '1949년',
        weight: 4,
        title: '농지개혁법',
        description: '농지개혁법(유상매수, 유상분배). 김구 암살.',
        tags: ['농지개혁', '김구암살'],
        relatedEvents: []
      },
      {
        id: 'e8-12',
        eraId: 'era-8-modern',
        year: '1950년 6월',
        weight: 5,
        title: '6·25 전쟁',
        description: '6·25 전쟁(1950~1953). 북한 남침. 인천상륙작전. 1·4 후퇴. 휴전협정(1953.7.27).',
        tags: ['6·25전쟁', '인천상륙작전', '휴전협정'],
        relatedEvents: []
      },
      {
        id: 'e8-13',
        eraId: 'era-8-modern',
        year: '1952년',
        weight: 4,
        title: '발췌개헌',
        description: '발췌개헌(직선제). 부산 정치 파동.',
        tags: ['발췌개헌', '부산정치파동'],
        relatedEvents: []
      },
      {
        id: 'e8-14',
        eraId: 'era-8-modern',
        year: '1954년',
        weight: 4,
        title: '사사오입 개헌',
        description: '사사오입 개헌(초대 대통령 중임 제한 철폐).',
        tags: ['사사오입개헌'],
        relatedEvents: []
      },
      {
        id: 'e8-15',
        eraId: 'era-8-modern',
        year: '1960년 3월',
        weight: 5,
        title: '3·15 부정선거',
        description: '3·15 부정선거→4·19 혁명. 이승만 하야.',
        tags: ['3·15부정선거', '4·19혁명', '이승만하야'],
        relatedEvents: []
      },
      {
        id: 'e8-16',
        eraId: 'era-8-modern',
        year: '1960년 7월',
        weight: 4,
        title: '제2공화국',
        description: '제2공화국(내각책임제). 장면 내각.',
        tags: ['제2공화국', '장면내각'],
        relatedEvents: []
      },
      {
        id: 'e8-17',
        eraId: 'era-8-modern',
        year: '1961년 5월',
        weight: 5,
        title: '5·16 군사정변',
        description: '5·16 군사정변. 박정희 집권.',
        tags: ['5·16군사정변', '박정희'],
        relatedEvents: []
      },
      {
        id: 'e8-18',
        eraId: 'era-8-modern',
        year: '1963년',
        weight: 4,
        title: '제3공화국',
        description: '제3공화국. 박정희 대통령 선출.',
        tags: ['제3공화국'],
        relatedEvents: []
      },
      {
        id: 'e8-19',
        eraId: 'era-8-modern',
        year: '1965년',
        weight: 5,
        title: '한일협정',
        description: '한일협정(한일기본조약). 경제개발 5개년 계획.',
        tags: ['한일협정', '경제개발5개년계획'],
        relatedEvents: []
      },
      {
        id: 'e8-20',
        eraId: 'era-8-modern',
        year: '1969년',
        weight: 4,
        title: '3선 개헌',
        description: '3선 개헌.',
        tags: ['3선개헌'],
        relatedEvents: []
      },
      {
        id: 'e8-21',
        eraId: 'era-8-modern',
        year: '1972년',
        weight: 5,
        title: '7·4 남북공동성명',
        description: '7·4 남북공동성명. 유신헌법(10월). 제4공화국.',
        tags: ['7·4남북공동성명', '유신헌법', '제4공화국'],
        relatedEvents: []
      },
      {
        id: 'e8-22',
        eraId: 'era-8-modern',
        year: '1979년',
        weight: 5,
        title: '10·26 사태',
        description: '부마민주항쟁. 10·26 사태(박정희 시해).',
        tags: ['부마민주항쟁', '10·26사태'],
        relatedEvents: []
      },
      {
        id: 'e8-23',
        eraId: 'era-8-modern',
        year: '1979년 12월',
        weight: 5,
        title: '12·12 군사반란',
        description: '12·12 군사반란(전두환).',
        tags: ['12·12군사반란', '전두환'],
        relatedEvents: []
      },
      {
        id: 'e8-24',
        eraId: 'era-8-modern',
        year: '1980년',
        weight: 5,
        title: '5·18 민주화운동',
        description: '서울의 봄. 5·18 광주 민주화운동.',
        tags: ['5·18민주화운동', '광주민주화운동'],
        relatedEvents: []
      },
      {
        id: 'e8-25',
        eraId: 'era-8-modern',
        year: '1980년',
        weight: 4,
        title: '제5공화국',
        description: '제5공화국(전두환). 7년 단임 대통령제.',
        tags: ['제5공화국'],
        relatedEvents: []
      },
      {
        id: 'e8-26',
        eraId: 'era-8-modern',
        year: '1987년',
        weight: 5,
        title: '6월 민주항쟁',
        description: '6월 민주항쟁. 6·29 민주화 선언(노태우).',
        tags: ['6월민주항쟁', '6·29민주화선언'],
        relatedEvents: []
      },
      {
        id: 'e8-27',
        eraId: 'era-8-modern',
        year: '1987년',
        weight: 5,
        title: '제6공화국',
        description: '제6공화국. 5년 단임 직선제. 노태우 대통령.',
        tags: ['제6공화국', '5년단임직선제'],
        relatedEvents: []
      },
      {
        id: 'e8-28',
        eraId: 'era-8-modern',
        year: '1988년',
        weight: 4,
        title: '서울올림픽',
        description: '서울올림픽. 북방정책.',
        tags: ['서울올림픽', '북방정책'],
        relatedEvents: []
      },
      {
        id: 'e8-29',
        eraId: 'era-8-modern',
        year: '1991년',
        weight: 4,
        title: '남북 유엔 동시가입',
        description: '남북 유엔 동시가입. 남북기본합의서.',
        tags: ['유엔동시가입', '남북기본합의서'],
        relatedEvents: []
      },
      {
        id: 'e8-30',
        eraId: 'era-8-modern',
        year: '1993년',
        weight: 4,
        title: '문민정부',
        description: '문민정부(김영삼). 금융실명제.',
        tags: ['문민정부', '김영삼', '금융실명제'],
        relatedEvents: []
      },
      {
        id: 'e8-31',
        eraId: 'era-8-modern',
        year: '1997년',
        weight: 4,
        title: 'IMF 외환위기',
        description: 'IMF 외환위기.',
        tags: ['IMF외환위기'],
        relatedEvents: []
      },
      {
        id: 'e8-32',
        eraId: 'era-8-modern',
        year: '1998년',
        weight: 4,
        title: '국민의 정부',
        description: '국민의 정부(김대중). 최초 여야 정권교체.',
        tags: ['국민의정부', '김대중'],
        relatedEvents: []
      },
      {
        id: 'e8-33',
        eraId: 'era-8-modern',
        year: '2000년',
        weight: 5,
        title: '6·15 남북공동선언',
        description: '6·15 남북공동선언(1차 남북정상회담).',
        tags: ['6·15남북공동선언'],
        relatedEvents: []
      },
      {
        id: 'e8-34',
        eraId: 'era-8-modern',
        year: '2002년',
        weight: 3,
        title: '한일 월드컵',
        description: '한일 월드컵 공동개최.',
        tags: ['한일월드컵'],
        relatedEvents: []
      },
      {
        id: 'e8-35',
        eraId: 'era-8-modern',
        year: '2003년',
        weight: 3,
        title: '참여정부',
        description: '참여정부(노무현).',
        tags: ['참여정부', '노무현'],
        relatedEvents: []
      },
      {
        id: 'e8-36',
        eraId: 'era-8-modern',
        year: '2007년',
        weight: 4,
        title: '10·4 남북정상선언',
        description: '10·4 남북정상선언(2차 남북정상회담).',
        tags: ['10·4남북정상선언'],
        relatedEvents: []
      },
      {
        id: 'e8-37',
        eraId: 'era-8-modern',
        year: '2016년',
        weight: 5,
        title: '촛불집회',
        description: '박근혜 탄핵 촛불집회. 대통령 탄핵.',
        tags: ['촛불집회', '박근혜탄핵'],
        relatedEvents: []
      }
    ]
  }
];

export const historyData = {
  eras
};

