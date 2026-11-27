# 프로젝트 설정 확인 스크립트

Write-Host "=== History Book 프로젝트 설정 확인 ===" -ForegroundColor Cyan
Write-Host ""

# Node.js 확인
Write-Host "1. Node.js 확인..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version 2>$null
    Write-Host "   ✓ Node.js 설치됨: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "   ✗ Node.js가 설치되지 않았습니다" -ForegroundColor Red
    Write-Host "     https://nodejs.org 에서 설치하세요" -ForegroundColor Gray
}

# npm 확인
Write-Host "2. npm 확인..." -ForegroundColor Yellow
try {
    $npmVersion = npm --version 2>$null
    Write-Host "   ✓ npm 설치됨: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "   ✗ npm이 설치되지 않았습니다" -ForegroundColor Red
}

# Git 확인
Write-Host "3. Git 확인..." -ForegroundColor Yellow
try {
    $gitVersion = git --version 2>$null
    Write-Host "   ✓ Git 설치됨: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "   ✗ Git이 설치되지 않았습니다" -ForegroundColor Red
    Write-Host "     https://git-scm.com 에서 설치하세요" -ForegroundColor Gray
}

# 프로젝트 파일 확인
Write-Host "4. 프로젝트 파일 확인..." -ForegroundColor Yellow
$requiredFiles = @(
    "package.json",
    "vite.config.ts",
    "tsconfig.json",
    "index.html",
    "src/main.tsx",
    "src/App.tsx"
)

$allFilesExist = $true
foreach ($file in $requiredFiles) {
    if (Test-Path $file) {
        Write-Host "   ✓ $file" -ForegroundColor Green
    } else {
        Write-Host "   ✗ $file 없음" -ForegroundColor Red
        $allFilesExist = $false
    }
}

# 다음 단계 안내
Write-Host ""
Write-Host "=== 다음 단계 ===" -ForegroundColor Cyan

try {
    $nodeVersion = node --version 2>$null
    if ($nodeVersion) {
        Write-Host "1. 의존성 설치: npm install" -ForegroundColor White
        Write-Host "2. 개발 서버 실행: npm run dev" -ForegroundColor White
        Write-Host "3. Git 저장소 초기화: git init" -ForegroundColor White
    } else {
        Write-Host "1. Node.js를 먼저 설치하세요 (INSTALLATION.md 참조)" -ForegroundColor White
        Write-Host "2. PowerShell을 재시작하세요" -ForegroundColor White
        Write-Host "3. 이 스크립트를 다시 실행하세요: .\setup-check.ps1" -ForegroundColor White
    }
} catch {
    Write-Host "1. Node.js를 먼저 설치하세요 (INSTALLATION.md 참조)" -ForegroundColor White
    Write-Host "2. PowerShell을 재시작하세요" -ForegroundColor White
    Write-Host "3. 이 스크립트를 다시 실행하세요: .\setup-check.ps1" -ForegroundColor White
}

Write-Host ""
