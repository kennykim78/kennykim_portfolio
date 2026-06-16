# 매일 자동 발행 설정 — 내 PC + Claude Code (API 키 없음)

매일 오전 10시(KST), Windows 작업 스케줄러가 Claude Code를 무인 실행해
인사이트 2건(Design 1 + AI 1)을 생성하고 **git 커밋·푸시까지** 완료합니다.
Claude 구독 로그인으로 동작하므로 **API 키가 필요 없습니다.**

## 동작 원리 (왜 키가 필요 없나)
`claude -p` 를 `--bare` 없이 실행하면 Claude Code가 키체인에 저장된
**구독 로그인(OAuth)** 자격증명을 그대로 사용합니다. (`--bare` 모드만 API 키를 강제함 → 그래서 쓰지 않음)
하루 2건 기준으로도 구독 사용량에는 큰 부담이 없는 편입니다.

## 사전 준비 (최초 1회)
1. **Node.js** 설치 확인: 명령 프롬프트에서 `node --version`
2. **Claude Code 설치**: `npm install -g @anthropic-ai/claude-code`
   - 설치 위치 확인: `where claude`  (예: `C:\Users\godvi\AppData\Roaming\npm\claude.cmd`)
3. **로그인(중요)**: 명령 프롬프트에서 `claude` 실행 → `/login` → Claude 구독 계정으로 로그인.
   - 이 로그인 자격증명을 이후 무인 실행이 재사용합니다.
4. **수동 테스트**: 저장소 폴더에서 한 번 직접 돌려보기
   ```
   cd C:\kenny_work\000._My_company\260528_kenny_web
   scripts\daily-insight.bat
   ```
   `logs\` 폴더에 로그가 쌓이고, 글 2건이 커밋·푸시되면 성공입니다.

## Windows 작업 스케줄러 등록 (매일 10시)
1. 시작 → **작업 스케줄러** 실행 → 우측 **작업 만들기**(Create Task)
2. **일반** 탭
   - 이름: `Kenny Daily Insight`
   - **가장 높은 권한으로 실행** 체크
   - "사용자가 로그온할 때만 실행" 선택 (키체인 자격증명 접근을 위해 권장)
3. **트리거** 탭 → 새로 만들기
   - 매일 / 시작 시각 **오전 10:00** / 다시 발생: 1일마다
4. **동작** 탭 → 새로 만들기
   - 동작: 프로그램 시작
   - 프로그램/스크립트: `C:\kenny_work\000._My_company\260528_kenny_web\scripts\daily-insight.bat`
   - **시작 위치**: `C:\kenny_work\000._My_company\260528_kenny_web`
5. **조건/설정** 탭
   - "컴퓨터를 깨워 실행" 체크(절전 대비)
   - "작업이 실패하면 다시 시작" 1~2회 정도 설정 권장
6. 저장 → 우클릭 **실행**으로 즉시 한 번 테스트.

## 주의사항
- **그 시각에 PC가 켜져 있어야** 합니다(절전/종료 시 미발행). 놓친 날은 다음 실행에 당일 기준 2건만 올라갑니다.
- 무인 실행 권한은 `.bat` 안에서 `--permission-mode acceptEdits --allowedTools "Bash,Read,Edit,Write,WebSearch,WebFetch"` 로 자동 승인됩니다(파일 쓰기·git·node·웹검색).
- `claude` 가 PATH에 없다고 나오면 `.bat` 의 `claude` 를 `where claude` 로 확인한 전체 경로(예: `"%APPDATA%\npm\claude.cmd"`)로 바꾸세요.
- 발행 절차/소스/문체는 `scripts/daily-insight-routine.md` 에서 언제든 수정할 수 있습니다.
- 로그: `logs\daily-insight-YYYY-MM-DD.log`

## PC를 꺼두고 싶다면
나중에 GitHub Actions(서버 자동·API 키 필요)로 전환하면 PC와 무관하게 돕니다.
`.github/workflows/daily-insight.yml` 의 schedule 주석을 해제하고 `ANTHROPIC_API_KEY` 시크릿만 등록하면 됩니다.
