# 매일 인사이트 발행 루틴 (Claude Code용)

이 문서는 매일 오전 10시 자동 실행 시 Claude Code가 그대로 따라야 하는 절차입니다.
목표: **해외 디자인 소식 1건과 AI 소식 1건(하루 총 2건)을 한국어로 큐레이션해 사이트에 발행**하고, git에 커밋·푸시까지 완료한다.

## 작업 디렉터리
`C:\kenny_work\000._My_company\260528_kenny_web`

## 절차 (반드시 순서대로)

1. **기존 글 확인**: `data/insights.json`을 읽어 이미 발행된 글의 `sourceUrl`과 `rawTitle` 목록을 파악한다. (중복 발행 금지)

2. **오늘 발행 대상**: 매일 **design 1건 + ai 1건, 총 2건**을 발행한다. (번갈아가 아니라 두 카테고리를 항상 함께 올린다.) 두 글 모두 오늘 날짜로 추가한다.

3. **소식 묶음 선택(한 글에 2~3개 소스 교차)**: 아래 **Kenny 정체성(프론트엔드·AX) 소스**에서 카테고리마다 **주요 소스 1개 + 보조 소스 1~2개**를 고른다(글 1건당 총 2~3개 소스). 보조 소스는 주요 소스와 **같은 주제를 다른 각도에서 다루는** 글로 고른다. 이미 쓴 URL은 제외.
   - 디자인/프론트엔드: web.dev, css-tricks.com, tympanus.net/codrops, uxdesign.cc(UX Collective), joshwcomeau.com
   - AI/AX: anthropic.com/news, theverge.com(AI 섹션), technologyreview.com, venturebeat.com(AI), blogs.microsoft.com/ai
   - ※ 다른 스튜디오 사이트와 차별화하기 위해 Smashing Magazine·NN/g·OpenAI·Google AI Blog·Hugging Face 등은 **쓰지 않는다.**
   - WebSearch로 "site 최근 글"을 찾고, 정확한 제목과 URL을 확보한다. **URL이 실제 존재하는지 확인**하고 추정 URL은 쓰지 않는다. 가능하면 WebFetch로 원문을 읽어 분석 깊이를 확보한다.

4. **큐레이션 작성 (여러 소스를 교차 분석한 심층 글, 본문 800~1200자)**: 두 글 각각에 대해, **원문 전체를 번역·전재하지 말 것.** 단순 소식 전달이 아니라 **주요 원문을 깊이 분석하고 보조 소스의 시각을 비교**하는 글을 한국어 원작으로 쓴다. 아래 구조를 정확히 따른다.
   - `title`: 자연스러운 한국어 의역 제목(36자 내외)
   - `summary`: 핵심 1~2문장 요약(110자 내외)
   - `bodyHtml`: 아래 **구조화 포맷**(분석이 '주', 인용이 '종').
     1. **리드** `<p>` : 무슨 일이고 지금 왜 주목해야 하는지 3~4문장.
     2. **핵심 인용** : `<blockquote>"원문 핵심 한 문장"<cite>출처명</cite></blockquote>` — **딱 한 문장만**, 따옴표+출처. 여러 문장·문단 인용 금지.
     3. `<h3>무슨 일인가</h3>` + `<p>` 3~4문장 : 주요 원문을 깊이 읽고 핵심 사실·맥락 정리(분석하는 느낌).
     4. `<h3>여러 시각</h3>` + `<p>` 도입 1문장 + `<ul><li><b>출처명</b> — 관점 1~2문장.</li> ...</ul>` : **보조 소스 1~2개의 관점을 주요 소스와 비교**(이 글의 핵심 차별점).
     5. `<h3>왜 중요한가</h3>` + `<p>` 3~4문장 : 의미·파급효과.
     6. `<h3>실무 적용</h3>` + `<ul><li>…</li>` 3개 : 프론트엔드·UX·AI 실무 적용 포인트.
     7. `<h3>Kenny의 관점</h3>` + `<p>` 3~4문장 : 프론트엔드·AX 관점의 차별화된 의견.
     8. `<h3>출처</h3>` + `<ul><li><a href="..." target="_blank" rel="noopener noreferrer nofollow">출처명: 제목 ↗</a></li> ...</ul>` : 사용한 2~3개 소스 링크 전부.
   - 각 보조 소스는 **짧은 요약/한 문장 인용만** 사용하고 출처 링크를 반드시 남긴다.
     - 수치·발표 내용 같은 **사실(facts)** 은 저작권 대상이 아니므로 자유롭게 활용하되 **표현은 새로 쓴다.**
   - `tags`: 영문 태그 3개
   - `source`: 매체명(대표 출처), `sourceUrl`: 주요 원문 URL

5. **데이터 추가**: `data/insights.json` 배열 **맨 앞**에 design·ai **2개 항목을 모두** 아래 형식으로 추가한다. 기존 항목 수정 금지.
   ```json
   {
     "id": "YYYY-MM-DD-영문-슬러그",
     "category": "ai 또는 design",
     "date": "오늘 날짜 YYYY-MM-DD",
     "title": "...", "rawTitle": "원문 제목",
     "summary": "...", "bodyHtml": "...",
     "source": "...", "sourceUrl": "https://...",
     "tags": ["...","...","..."], "thumb": ""
   }
   ```
   - `id`는 날짜 + 슬러그로 유일하게. 같은 날 design/ai 두 건의 슬러그가 겹치지 않게 하고, 중복이면 끝에 숫자 추가.

6. **데이터 빌드**: 다음을 실행한다.
   ```
   node scripts/build-insights-data.mjs
   ```
   → `js/insights-data.js`가 갱신된다.

7. **git 커밋·푸시** (Insights 관련 파일만, 2건을 한 커밋으로):
   ```
   git add data/insights.json js/insights-data.js
   git commit -m "chore(insights): daily auto-post YYYY-MM-DD (design+ai)"
   git push origin main
   ```
   - 다른 변경 파일은 건드리지 말 것.
   - `.git/index.lock` 오류가 나면 그 파일을 삭제 후 재시도.

8. **완료 보고**: 발행한 2건의 제목·카테고리·URL을 각각 한 줄로 출력한다.

## 주의
- 하루 2건(디자인 1 + AI 1)을 발행한다.
- 한 카테고리에서 적절한 소식을 못 찾으면 그 카테고리는 건너뛰고(발행하지 않고) 사유를 출력한다. 나머지 한 건은 정상 발행한다.
- 사실 확인이 안 되는 URL/제목은 쓰지 않는다.
- **저작권**: 원문 전체 번역·전재 금지. 인용은 **핵심 1문장 이내**, 따옴표+출처 명시, 글의 '종'으로만. 본문 대부분은 직접 쓴 분석이어야 한다.
- **이미지**: 원문 이미지를 복사·핫링크하지 않는다. `thumb`는 비워두거나(플레이스홀더 자동 표시) 자체 제작/라이선스 이미지만 사용한다.
- JSON 문법 오류가 없도록 추가 후 `node -e "require('./data/insights.json')"` 로 검증한다.
