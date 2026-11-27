# 한국사능력검정시험 타임라인 대시보드

한능검 심화 시험 범위 전체를 시대별·연도별로 한눈에 볼 수 있는 수평 타임라인 인터랙티브 웹 대시보드

## 🚀 빠른 시작

### 1. 필수 프로그램 설치

#### Node.js 설치 (필수)
1. [Node.js 공식 사이트](https://nodejs.org/) 접속
2. **LTS 버전** (추천) 다운로드 및 설치
3. 설치 확인:
```powershell
node --version
npm --version
```

#### Git 설치 (필수)
1. [Git 공식 사이트](https://git-scm.com/) 접속
2. Windows용 Git 다운로드 및 설치
3. 설치 확인:
```powershell
git --version
```

### 2. 프로젝트 설정

```powershell
# 현재 디렉토리에서 실행
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 브라우저에서 http://localhost:5173 접속
```

### 3. GitHub에 푸시

```powershell
# Git 초기화 (최초 1회만)
git init
git remote add origin https://github.com/ehpp1234-commits/history-book.git

# 모든 파일 추가
git add .

# 커밋
git commit -m "Initial commit: Korean history timeline dashboard MVP"

# GitHub에 푸시
git push -u origin main
```

### 4. Vercel 배포

#### 방법 1: Vercel CLI 사용
```powershell
# Vercel CLI 설치
npm install -g vercel

# 배포
vercel

# 프로덕션 배포
vercel --prod
```

#### 방법 2: Vercel 웹사이트 사용
1. [vercel.com](https://vercel.com) 접속 및 로그인
2. "New Project" 클릭
3. GitHub 저장소 `ehpp1234-commits/history-book` 선택
4. "Deploy" 클릭
5. 자동으로 빌드 및 배포 완료!

## 📱 기능

### 완성된 기능 (MVP)
- ✅ 8개 시대 수평 타임라인
- ✅ 각 시대별 대표 역사 항목 (16개 카드)
- ✅ 시대별 고유 배경색 & 패턴
- ✅ 카드 클릭 시 상세 내용 표시
- ✅ 다크/라이트 테마
- ✅ TypeScript + React + Vite
- ✅ 데이터 검증 시스템

### 추가 예정 (Full Version)
- ⏳ 모바일 바텀시트 (≤430px)
- ⏳ 터치 스와이프 & 관성 스크롤
- ⏳ 검색 기능
- ⏳ 퀵 점프 버튼
- ⏳ 출제 비중 바
- ⏳ 모든 역사 항목 (100+ 카드)
- ⏳ Property-based 테스트
- ⏳ 접근성 최적화

## 🏗️ 프로젝트 구조

```
src/
├── data/
│   ├── types.ts              # TypeScript 타입 정의
│   ├── validate.ts           # 데이터 검증 로직
│   └── historyData.ts        # 8개 Era + 16개 카드 데이터
├── components/               # UI 컴포넌트 (TODO)
├── hooks/                    # React 훅 (TODO)
├── styles/                   # CSS 스타일 (TODO)
└── App.tsx                   # 메인 앱
```

## 📊 데이터 구조

### 8개 시대 (Era)
1. 선사 시대 및 국가의 형성 (B.C. 700,000 ~ B.C. 1)
2. 고대: 삼국 및 남북국 (B.C. 1 ~ 935)
3. 고려 (918 ~ 1392)
4. 조선 전기 (1392 ~ 1599)
5. 조선 후기 (1592 ~ 1869)
6. 개항기 (1863 ~ 1910)
7. 일제 강점기 (1910 ~ 1945)
8. 현대사 (1945 ~ 현재)

### MVP 카드 (16개)
각 시대당 2-3개 대표 항목 포함

## 🛠️ 개발 명령어

```powershell
# 개발 서버
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview

# 테스트 실행
npm test

# 타입 체크
npm run type-check
```

## 📝 다음 단계

MVP 버전이 완성되었습니다. 전체 기능을 완성하려면:

1. **컴포넌트 구현** - Timeline, Header, DetailPanel 등
2. **훅 구현** - useTheme, useScroll, useSearch 등
3. **스타일링** - 모바일 반응형 CSS
4. **테스트** - Property-based & Unit tests
5. **문서화** - 사용자 가이드

## 🐛 문제 해결

### "npm: 용어가 cmdlet 이름으로 인식되지 않습니다"
→ Node.js가 설치되지 않았거나, PowerShell을 재시작해야 합니다.

### "git: 용어가 cmdlet 이름으로 인식되지 않습니다"
→ Git이 설치되지 않았거나, PowerShell을 재시작해야 합니다.

### 포트 5173이 이미 사용 중
```powershell
# 다른 포트로 실행
npm run dev -- --port 3000
```

## 📞 문의

프로젝트 관련 문의사항이 있으시면 GitHub Issues를 이용해주세요.

## 📄 라이선스

MIT License