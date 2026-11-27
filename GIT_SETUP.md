# Git 저장소 연동 가이드

## Git 설치

1. https://git-scm.com/download/win 에서 Git for Windows 다운로드
2. 설치 후 명령 프롬프트나 PowerShell 재시작

## 저장소 초기화 및 원격 연결

프로젝트 디렉토리에서 다음 명령어를 순서대로 실행:

```bash
# Git 저장소 초기화
git init

# 원격 저장소 연결
git remote add origin https://github.com/ehpp1234-commits/history-book.git

# 모든 파일 스테이징
git add .

# 첫 번째 커밋
git commit -m "Initial project setup"

# 기본 브랜치를 main으로 설정 (필요한 경우)
git branch -M main

# 원격 저장소에 푸시
git push -u origin main
```

## 주의사항

- 원격 저장소가 비어있지 않은 경우, 먼저 pull이 필요할 수 있습니다:
  ```bash
  git pull origin main --allow-unrelated-histories
  ```

- GitHub 인증이 필요한 경우 Personal Access Token을 사용하세요.
