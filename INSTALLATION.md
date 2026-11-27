# 설치 가이드

프로젝트 구조가 생성되었습니다. 개발을 시작하려면 다음 도구들을 설치해야 합니다.

## 1. Node.js 설치

### 다운로드 및 설치
1. https://nodejs.org 방문
2. LTS (Long Term Support) 버전 다운로드 (권장: v18 이상)
3. 설치 프로그램 실행
4. 설치 중 "Add to PATH" 옵션 확인

### 설치 확인
PowerShell이나 명령 프롬프트를 **재시작**한 후:

```bash
node --version
npm --version
```

## 2. Git 설치

### 다운로드 및 설치
1. https://git-scm.com/download/win 방문
2. Git for Windows 다운로드
3. 설치 프로그램 실행 (기본 설정 사용)

### 설치 확인
```bash
git --version
```

## 3. 프로젝트 의존성 설치

Node.js와 Git 설치 후, 프로젝트 디렉토리에서:

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

## 4. Git 저장소 연동

자세한 내용은 `GIT_SETUP.md` 파일을 참조하세요.

## 문제 해결

### "npm을 찾을 수 없습니다" 오류
- PowerShell이나 명령 프롬프트를 재시작하세요
- 시스템 환경 변수 PATH에 Node.js가 추가되었는지 확인하세요

### Git 명령어가 작동하지 않음
- Git 설치 후 터미널을 재시작하세요
- Git이 PATH에 추가되었는지 확인하세요
