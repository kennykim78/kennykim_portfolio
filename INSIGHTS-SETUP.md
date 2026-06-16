# Insights (Blog/News) — 설치 및 운영 가이드

해외 디자인·AI 소식을 **매일 2건(Design 1 + AI 1)** 한국어로 자동 큐레이션해 발행하는 기능입니다.
기존 정적 사이트(Vite + Docker/Nginx) 구조를 그대로 유지하며, 콘텐츠는 정적 JS 데이터로
빌드되어 별도 백엔드·DB가 필요 없습니다.

## 추가/변경된 파일

| 파일 | 역할 |
|------|------|
| `insights.html` | 글 목록(카드 + Design/AI 필터) 페이지 |
| `insight.html` | 글 상세 페이지 (`?id=` 로 표시) |
| `js/insights.js` | 목록/상세 렌더링 |
| `js/insights-data.js` | 글 데이터(자동 생성, 직접 편집 금지) |
| `data/insights.json` | **콘텐츠 원본(소스 오브 트루스)** |
| `scss/insights.scss` / `css/insights.css` | 스타일 |
| `scripts/generate-post.mjs` | 매일 2건(Design+AI) 자동 생성기 |
| `scripts/build-insights-data.mjs` | json → js 데이터 빌더 |
| `.github/workflows/daily-insight.yml` | 매일 자동 실행 CI |
| `inc/header.html` | 메뉴에 **Insights** 추가 |
| `vite.config.js`, `scripts/copy-static-js.mjs`, `package.json` | 빌드 통합 |

## 로컬 미리보기

```bash
npm install      # 최초 1회 (현재 환경 OS에 맞는 의존성 설치)
npm run dev      # http://localhost:5173/insights.html
```

빌드/배포는 기존과 동일합니다.

```bash
npm run build    # dist/ 생성 (Docker가 이걸 Nginx로 서빙)
```

## 매일 자동 발행 켜기 (GitHub Actions)

1. GitHub 저장소 → **Settings → Secrets and variables → Actions**
2. **New repository secret** 로 `ANTHROPIC_API_KEY` 추가 (https://console.anthropic.com 에서 발급)
3. (선택) **Variables** 에 `INSIGHTS_MODEL` 추가 — 기본 `claude-sonnet-4-6`,
   비용을 낮추려면 `claude-haiku-4-5-20251001`
4. 끝. 매일 **KST 오전 8시**(`cron: 0 23 * * *`, UTC 기준)에 Design/AI 각 1건씩 생성되어
   `data/insights.json`·`js/insights-data.js`에 커밋·푸시됩니다.
   푸시가 기존 배포 파이프라인을 트리거하면 사이트에 자동 반영됩니다.

수동 실행: **Actions 탭 → Daily Insight → Run workflow** (카테고리 강제 지정 가능)
로컬 테스트: `ANTHROPIC_API_KEY=sk-... npm run insights:generate`

> 배포가 푸시로 자동 트리거되지 않는 구조라면, 워크플로 마지막에 Cloud Build/Run
> 트리거 호출 스텝만 추가하면 됩니다. (현재 배포 방식 알려주시면 연결해 드립니다.)

## 소스(피드) 바꾸기

`scripts/generate-post.mjs` 상단 `FEEDS` 객체에서 RSS 주소를 자유롭게 추가/삭제하세요.
기본값(Kenny 정체성 — 프론트엔드·AX): web.dev, Codrops, CSS-Tricks, UX Collective(디자인/프론트엔드) /
The Verge AI, MIT Technology Review, VentureBeat AI(AI). 다른 스튜디오와 차별화하기 위해
Smashing·NN/g·OpenAI·Google AI·Hugging Face 등은 의도적으로 제외했습니다.
이미 발행한 원문 URL·제목은 자동 중복 제거됩니다.

## 생성 품질 가드레일

`scripts/generate-post.mjs`는 생성 결과를 저장하기 전에 다음을 자동 보정합니다.

- 제목 길이: 최대 40자 내외로 정규화(카드 줄바꿈 안정화)
- 요약 길이: 최대 130자 내외로 정규화
- 태그: 영문/숫자 기준으로 정리 후 3개로 고정(부족 시 카테고리 기본 태그 보완)
- 본문 구조: `blockquote/cite`와 6개 `h3` 섹션(무슨 일인가 / 여러 시각 / 왜 중요한가 / 실무 적용 / Kenny의 관점 / 출처) 및 소스 링크 2개 이상 누락 시 발행 중단
- 분량: 본문 800~1200자, 한 글에 2~3개 소스를 교차 분석

## ⚠️ 저작권 운영 원칙 (중요)

이 시스템은 **원문을 번역·전재하지 않습니다.** 생성기는 원문의 제목·짧은 요약만 참고해
**여러 소스를 교차 분석한 심층 큐레이션(리드, 핵심 짧은 인용, 무슨 일인가, 여러 시각, 왜 중요한가, 실무 적용, Kenny의 관점) + 원문 링크**를 새로 작성하도록 설계돼 있습니다.
상세 페이지 하단에는 항상 출처와 원문 링크가 노출됩니다(`rel="nofollow"`).

- 전문 번역/복사는 번역물이라도 저작권 침해가 될 수 있어 의도적으로 배제했습니다.
- 인용은 **핵심 1문장 이내**로 제한하고, 따옴표와 출처를 표기해야 합니다.
- 전문을 싣고 싶다면 CC 라이선스·보도자료·재배포 허용 소스로만 `FEEDS`를 한정하고
  라이선스 표기 규칙을 추가하세요.

## 샘플 글 정리

`data/insights.json` 안의 `"isSample": true` 항목 3개는 데모용입니다.
실제 운영 시작 후 삭제하고 `npm run insights:build-data` 를 한 번 실행하면 됩니다.
