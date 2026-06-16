/**
 * Insights data (auto-generated from data/insights.json)
 * Do not edit by hand. Run scripts/generate-post.mjs or scripts/build-insights-data.mjs.
 */
window.INSIGHTS = [
  {
    "id": "2026-06-16-css-anchor-positioning",
    "category": "design",
    "date": "2026-06-16",
    "title": "JS 없이 요소를 붙인다, CSS 앵커 포지셔닝",
    "rawTitle": "Anchor positioning",
    "summary": "툴팁·팝오버를 JS 좌표 계산 없이 선언적으로 다른 요소에 묶고, 화면을 벗어나면 자동으로 위치를 재조정하는 CSS 앵커 포지셔닝을 분석한다.",
    "bodyHtml": "<p>툴팁, 드롭다운, 팝오버를 만들 때 우리는 늘 같은 고생을 했다. 트리거 요소의 좌표를 JS로 읽고, 스크롤·리사이즈마다 다시 계산하고, 화면을 벗어나면 위치를 뒤집는 코드를 직접 짰다. CSS 앵커 포지셔닝은 이 모든 걸 CSS 선언으로 끌어내린다. 한 요소를 다른 요소에 \"묶고\", 넘칠 때 알아서 위치를 바꾸게 한다.</p><blockquote>\"CSS 앵커 포지셔닝은 한 요소를 다른 요소에 상대적으로 배치하는 선언적 방법을 제공한다.\"<cite>web.dev</cite></blockquote><h3>무슨 일인가</h3><p>핵심은 세 조각이다. 기준 요소에 <code>anchor-name</code>으로 두 대시로 시작하는 식별자를 주고, 떠 있는 요소(absolute/fixed)가 <code>position-anchor</code>로 그 앵커를 가리킨다. 그다음 <code>position-area</code>로 앵커 주변 3x3 격자에 키워드만으로 붙이거나, <code>anchor()</code> 함수로 특정 변(邊)을 인셋 값으로 받아 정밀 배치한다. 더 중요한 건 <code>position-try-fallbacks</code>다. 요소가 뷰포트를 넘치면 flip-block 같은 전략으로 자동으로 반대편으로 뒤집힌다. JS 충돌 감지 로직이 통째로 사라지는 셈이다.</p><h3>여러 시각</h3><p>같은 기능을 세 글이 서로 다른 높이에서 본다.</p><ul><li><b>web.dev</b> — <code>anchor-scope</code>로 재사용 컴포넌트의 이름 충돌을 막고 <code>anchor-size()</code>, <code>position-visibility</code>까지 묶어, 이 기능을 \"JS 없는 선언적 배치\"라는 플랫폼 원칙으로 정리한다.</li><li><b>CSS-Tricks 가이드(Juan Diego Rodríguez)</b> — 같은 기능을 레퍼런스로 해부하되, 스펙이 빠르게 바뀌며 <code>inset-area</code>가 <code>position-area</code>로 개명되는 등 크롬이 확정 전에 먼저 구현한 현실의 함정을 짚는다.</li><li><b>CSS-Tricks 온보딩 UI(Ryan Trimble)</b> — 이론 대신 장바구니·제품 투어 같은 실제 UI를 만들며, 앵커 포지셔닝을 Popover API·View Transitions와 결합해 접근성과 포커스까지 다룬다.</li></ul><h3>왜 중요한가</h3><p>이건 단순한 편의 기능이 아니라 책임의 이동이다. 그동안 floating-ui 같은 라이브러리가 떠안던 좌표 계산과 충돌 회피가 브라우저 엔진으로 내려왔다. 번들 크기가 줄고, 레이아웃 스래싱을 유발하던 JS 측정 코드가 사라진다. 무엇보다 Popover API와 결합하면 상단 레이어(top-layer)에 z-index 전쟁 없이 떠오르는, 의미론적으로도 정확한 디스클로저 요소를 만들 수 있다.</p><h3>실무 적용</h3><ul><li>툴팁·드롭다운은 JS 좌표 로직을 걷어내고 <code>position-area</code> + <code>position-try-fallbacks</code> 조합으로 먼저 시도하라.</li><li>크롬 125+·사파리 26·파이어폭스 147부터 지원하므로, 미지원 브라우저용 정적 fallback 위치를 점진적 향상으로 함께 설계하라.</li><li>여러 카드가 같은 앵커명을 쓰는 반복 루프에서는 <code>anchor-scope</code>로 스코프를 격리해 엉뚱한 요소에 붙는 사고를 막아라.</li></ul><h3>Kenny의 관점</h3><p>AX 관점에서 앵커 포지셔닝의 진짜 가치는 \"플랫폼이 의도를 이해하기 시작했다\"는 점이다. 좌표는 결과일 뿐 의도가 아니다. \"이 패널은 이 버튼에 붙는다\"는 의도를 CSS가 직접 표현하면, AI 보조 도구나 스크린리더가 관계를 추론하기도 훨씬 쉬워진다. 다만 스펙이 아직 출렁이고 브라우저 편차가 크니, 나는 이걸 핵심 동작이 아닌 향상 레이어로 깔고 fallback을 기본값으로 본다.</p><h3>출처</h3><ul><li><a href=\"https://web.dev/learn/css/anchor-positioning\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">web.dev: Anchor positioning ↗</a></li><li><a href=\"https://css-tricks.com/css-anchor-positioning-guide/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">CSS-Tricks: CSS Anchor Positioning Guide ↗</a></li><li><a href=\"https://css-tricks.com/one-of-those-onboarding-uis-with-anchor-positioning/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">CSS-Tricks: One of Those Onboarding UIs, With Anchor Positioning ↗</a></li></ul>",
    "source": "web.dev",
    "sourceUrl": "https://web.dev/learn/css/anchor-positioning",
    "tags": [
      "CSS",
      "AnchorPositioning",
      "Popover"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-16-claude-opus-4-8-workflows",
    "category": "ai",
    "date": "2026-06-16",
    "title": "Claude Opus 4.8과 코딩의 미래, 동적 워크플로",
    "rawTitle": "Introducing Claude Opus 4.8",
    "summary": "Anthropic이 수백 개 서브에이전트를 띄워 자체 검증까지 하는 동적 워크플로를 공개했다. 자율 코딩 시대의 가능성과 그늘을 함께 짚는다.",
    "bodyHtml": "<p>2026년 5월 28일 공개된 Claude Opus 4.8은 가격을 그대로 둔 채 코딩과 에이전트 작업에서 한 단계 더 나아간 모델이다. 가장 눈에 띄는 건 Claude Code에 들어간 \"동적 워크플로(dynamic workflows)\" 프리뷰다. 단일 컨텍스트 창을 넘어서는 거대한 작업을 모델이 스스로 설계하고, 수백 개의 병렬 서브에이전트로 쪼갠 뒤, 결과를 사용자에게 보고하기 전에 자기 검증까지 수행한다. 코드 한 줄 한 줄을 사람이 지시하던 시대가 빠르게 저물고 있다.</p><blockquote>\"Claude Opus 4.8 is around four times less likely than its predecessor to allow flaws in code it has written to pass unremarked.\"<cite>Anthropic</cite></blockquote><h3>무슨 일인가</h3><p>Opus 4.8은 수십만 줄 규모의 코드베이스 마이그레이션 같은 작업을 한 세션 안에서 계획·분할·검증한다. 브라우저 에이전트 벤치마크 Online-Mind2Web에서 84%를 기록했고, 자기 코드의 결함을 놓칠 확률이 이전 세대보다 약 4배 낮아졌다고 한다. 개발자에게 더 중요한 변화는 Messages API다. 이제 messages 배열 안에 시스템 항목을 넣어, 에이전트가 도는 도중 프롬프트 캐시를 깨지 않고도 권한·토큰 예산·지시를 갱신할 수 있다.</p><h3>여러 시각</h3><p>같은 흐름을 두 매체는 다른 온도로 본다.</p><ul><li><b>Anthropic</b> — 모델이 스스로 일을 계획하고 검증하는 자율성을 핵심 진보로 제시하며, \"Claude의 길을 비켜주는 것\"을 원칙으로 삼는다.</li><li><b>MIT Technology Review</b> — 같은 자율 코딩을 두고 환영과 우려를 동시에 짚는다. 에이전트가 노트를 모아 코드베이스를 학습하는 \"dreaming\" 기능을 흥미로워하면서도, 검토 부담 증가, 개발자 역량 위축, 보안 취약점을 경고한다.</li></ul><h3>왜 중요한가</h3><p>에이전트가 길고 복잡한 작업을 끝까지 끌고 갈 수 있게 되면, 일의 단위가 \"한 번의 응답\"에서 \"하나의 프로젝트\"로 커진다. 동적 워크플로와 mid-task 지시 갱신은 그 긴 작업을 사람이 중간에 조향할 수 있게 만드는 장치다. 동시에 MIT TR이 인용한 \"생성 코드가 괜찮다는 사람은 그걸 읽지 않는 사람뿐\"이라는 지적은, 검증 책임이 사라지는 게 아니라 사람에게 더 무겁게 이동한다는 사실을 환기한다.</p><h3>실무 적용</h3><ul><li>긴 에이전트 작업은 mid-task 시스템 메시지로 권한·범위를 단계적으로 좁혀 통제하라.</li><li>병렬 서브에이전트 결과는 모델 자체 검증을 신뢰하지 말고 사람 리뷰 게이트를 반드시 두라.</li><li>\"한 응답\"이 아닌 \"한 프로젝트\" 단위로 작업을 설계하고 중간 체크포인트 UI를 마련하라.</li></ul><h3>Kenny의 관점</h3><p>프론트엔드·AX 관점에서 동적 워크플로는 결국 \"진행 상황을 어떻게 보여줄 것인가\"의 문제다. 수백 개 서브에이전트가 동시에 돌 때 사용자가 보는 화면은 검은 박스가 아니라, 계획·진척·자체검증 결과가 단계로 드러나는 타임라인이어야 한다. 자율성이 높아질수록 신뢰는 자동화가 아니라 \"개입 가능한 투명성\"에서 나온다. AX 설계자의 일은 사람을 비켜주는 게 아니라, 비켜준 뒤에도 언제든 다시 끼어들 수 있는 경로를 디자인하는 것이다.</p><h3>출처</h3><ul><li><a href=\"https://www.anthropic.com/news/claude-opus-4-8\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Anthropic: Introducing Claude Opus 4.8 ↗</a></li><li><a href=\"https://www.technologyreview.com/2026/05/21/1137735/anthropics-code-with-claude-showed-off-codings-future-whether-you-like-it-or-not/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">MIT Technology Review: Anthropic's Code with Claude showed off coding's future ↗</a></li></ul>",
    "source": "Anthropic",
    "sourceUrl": "https://www.anthropic.com/news/claude-opus-4-8",
    "tags": [
      "Anthropic",
      "Claude",
      "AIAgents"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-13-ai-reshaping-ux-taste",
    "category": "design",
    "date": "2026-06-13",
    "title": "AI가 빚는 UX, 사람이 남기는 취향",
    "rawTitle": "Silicon clay: how AI is reshaping UX design",
    "summary": "AI는 UX 프로세스를 빠르게 점토처럼 주무르지만, 동질화와 역량 퇴화의 위험도 함께 빚어낸다. 효율과 인간 중심성 사이의 균형이 핵심이다.",
    "bodyHtml": "<p>AI는 UX 작업을 점점 더 '실리콘 점토'처럼 다루게 만든다. 손이 가던 화면 흐름, 리서치 정리, 프로토타입이 순식간에 형태를 갖춘다. 하지만 빨라진 손만큼 무뎌지는 감각도 있다. UX Collective의 세 글을 교차로 읽으면, AI가 프로세스를 가속하는 만큼 '디자이너가 무엇을 책임지는 사람인가'라는 질문이 더 날카로워진다는 공통의 결론에 닿는다.</p><blockquote>\"AI는 인간의 소통, 협업, 창의성, 독창성을 대체할 수 없으며, 따라서 효율을 추구하면서도 UX의 인간 중심성을 지키는 균형이 중요하다.\"<cite>UX Collective</cite></blockquote><h3>무슨 일인가</h3><p>Andrew Tipp는 학술 연구들을 종합해, AI가 속도와 접근성에서 분명한 이점을 주지만 디자인 동질화, 역량 위축, 편향 강화라는 대가도 함께 들여온다고 정리한다. 핵심은 도구를 무분별하게 도입하느냐, 비판적 사고와 조직 정책으로 통제하느냐의 차이다. AI를 점토처럼 자유롭게 빚되, 무엇을 빚을지에 대한 판단은 여전히 사람의 몫으로 남는다는 것이다.</p><h3>여러 시각</h3><p>같은 변화도 어디에 무게를 두느냐에 따라 결이 다르다.</p><ul><li><b>Andrew Tipp (Silicon clay)</b> — 효율과 인간 중심성의 균형을 강조하며, AI 도입을 비판적으로 통제해야 동질화와 역량 퇴화를 막을 수 있다고 본다.</li><li><b>Andrea Grigsby (taste)</b> — 실행은 자동화돼도 '취향'은 대체 불가하며, 경험과 반복으로 쌓인 안목이 사람 디자이너의 마지막 해자라고 주장한다.</li><li><b>Sen Lin (AI-native designer)</b> — 디자이너는 번역가에서 '지휘자'로 옮겨가야 하며, 정적 산출물 대신 작동하는 데모로 판단력을 증명하라고 제안한다.</li></ul><h3>왜 중요한가</h3><p>세 글은 서로 다른 입구로 들어가 같은 방에서 만난다. 도구가 빨라질수록 가치는 '무엇을 만드느냐'에서 '무엇을 선택하고 무엇을 책임지느냐'로 이동한다는 것이다. 동질화 경고(Tipp), 취향이라는 차별점(Grigsby), 지휘자라는 새 역할(Lin)은 결국 한 문장으로 수렴한다. AI 시대의 디자이너는 산출물의 양이 아니라 판단의 질로 증명된다.</p><h3>실무 적용</h3><ul><li>AI 초안은 출발점으로만 쓰고, 동질화를 막을 '다르게 만들 이유'를 반드시 한 번 더 얹는다.</li><li>정적 시안 대신 작동하는 데모로 검증하되, 코드를 직접 돌려보며 감각을 잃지 않는다.</li><li>맥락·컴포넌트·기준(3C)을 명문화해 암묵지를 AI에 위임 가능한 형태로 외부화한다.</li></ul><h3>Kenny의 관점</h3><p>프론트엔드·AX 관점에서 보면 이 변화는 위협이 아니라 책임의 재배치다. AI가 화면을 빚는 속도는 이미 우리 손을 앞질렀고, 내 가치는 생성이 아니라 큐레이션과 비판에서 나온다. 디자인 시스템과 코드를 연결해 데모로 말하되, 어떤 흐름이 사용자에게 진짜 의미 있는지는 끝까지 사람이 정의해야 한다. 결국 취향과 판단을 코드와 프롬프트에 담아내는 사람이 AX 시대의 디자이너다.</p><h3>출처</h3><ul><li><a href=\"https://uxdesign.cc/silicon-clay-how-ai-is-reshaping-ux-design-42cb0de93680\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">UX Collective: Silicon clay — how AI is reshaping UX design ↗</a></li><li><a href=\"https://uxdesign.cc/ai-is-coming-for-our-design-jobs-but-it-cant-touch-taste-afd5c7a48184\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">UX Collective: AI is coming for our design jobs, but it can't touch taste ↗</a></li><li><a href=\"https://uxdesign.cc/becoming-an-ai-native-designer-828365b71109\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">UX Collective: Becoming an AI-native Designer ↗</a></li></ul>",
    "source": "UX Collective",
    "sourceUrl": "https://uxdesign.cc/silicon-clay-how-ai-is-reshaping-ux-design-42cb0de93680",
    "tags": [
      "AIUX",
      "DesignProcess",
      "ProductDesign"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-13-enterprise-ai-agent-control",
    "category": "ai",
    "date": "2026-06-13",
    "title": "엔터프라이즈 AI 에이전트, 이제 통제권 싸움",
    "rawTitle": "Building a new enterprise AI services company with Blackstone, Hellman & Friedman, and Goldman Sachs",
    "summary": "앤트로픽은 합작 서비스 회사로 도입 격차를 메우고, 마이크로소프트는 Agent 365로 에이전트 통제권을 잡는다. 모델 경쟁이 운영·거버넌스 경쟁으로 옮겨갔다.",
    "bodyHtml": "<p>2026년 엔터프라이즈 AI 경쟁의 무게중심이 모델 성능에서 \"도입과 운영\"으로 옮겨갔다. 앤트로픽은 블랙스톤, 헬먼앤프리드먼, 골드만삭스와 함께 중견기업에 Claude를 심는 전담 AI 서비스 합작 회사를 만든다고 발표했다. 같은 시기 마이크로소프트는 수십만 개로 불어날 에이전트를 통제하는 Agent 365를 Frontier Suite의 핵심으로 내세웠다. 두 발표 모두 \"좋은 모델\"이 아니라 \"누가 에이전트를 깔고 길들이고 책임지는가\"를 겨냥한다.</p><blockquote>\"Enterprise demand for Claude is significantly outpacing any single delivery model.\"<cite>Anthropic</cite></blockquote><h3>무슨 일인가</h3><p>앤트로픽의 메시지는 솔직하다. Claude 수요가 단일 공급 방식으로는 감당이 안 된다는 것. 그래서 직접 파는 대신 자본·컨설팅 파트너와 합작 회사를 세워 응용 AI 엔지니어가 고객사 팀과 함께 맞춤 솔루션을 짓고 장기 운영까지 맡긴다. 모델 회사가 \"서비스 회사\"의 옷을 입은 셈이다. 도입의 마지막 1마일, 즉 현장 통합과 운영이 진짜 병목임을 인정한 전략이다.</p><h3>여러 시각</h3><p>같은 병목을 두 회사가 정반대 입구에서 공략한다.</p><ul><li><b>Anthropic</b> — 사람(엔지니어)과 파트너 네트워크를 투입해 도입 격차를 \"서비스\"로 메운다. 모델 제공자가 딜리버리까지 내려온다.</li><li><b>Microsoft</b> — Agent 365라는 통제 평면(control plane)으로 관측·거버넌스·보안을 한 곳에 모은다. 사람을 관리하던 인프라로 에이전트를 똑같이 관리한다는 발상이다.</li></ul><h3>왜 중요한가</h3><p>두 흐름은 \"에이전트 난립\" 공포를 공유한다. 마이크로소프트는 2028년까지 13억 개 에이전트를 예고하고 내부적으로 50만 개 이상을 이미 들여다본다고 했다. 모델이 상향 평준화될수록 차별화는 신뢰·관측·책임 경계로 이동한다. 단, 서비스든 통제 평면이든 한 벤더에 운영을 위임하는 순간 락인 위험도 함께 커진다는 점은 기업이 반드시 저울질해야 한다.</p><h3>실무 적용</h3><ul><li>에이전트도 \"사용자\"처럼 신원·권한·감사 로그를 가진 1급 객체로 설계하고, 권한 범위를 UI에서 명시적으로 노출하라.</li><li>벤더 통제 평면에 종속되기 전, 메모리·평가·오케스트레이션 로그를 표준 포맷으로 빼낼 수 있는 출구를 확보하라.</li><li>에이전트 행동의 관측 데이터를 운영 대시보드로 시각화해, 사람이 개입할 지점을 한눈에 보이게 만들라.</li></ul><h3>Kenny의 관점</h3><p>프론트엔드·AX 관점에서 이번 변화의 진짜 무대는 \"에이전트 통제 UI\"다. 그동안 우리는 사용자와 모델 사이의 대화창을 다듬어 왔지만, 앞으로는 수백·수천 에이전트의 상태·권한·실패를 사람이 신뢰하며 감독하는 화면을 설계해야 한다. 관측성과 거버넌스는 백엔드 기능이 아니라, 결국 운영자가 보고 결정을 내리는 인터페이스 문제로 귀결된다. AX의 다음 과제는 \"자율성과 통제감\"을 동시에 주는 화면이다.</p><h3>출처</h3><ul><li><a href=\"https://www.anthropic.com/news/enterprise-ai-services-company\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Anthropic: Building a new enterprise AI services company with Blackstone, Hellman & Friedman, and Goldman Sachs ↗</a></li><li><a href=\"https://blogs.microsoft.com/blog/2026/03/09/introducing-the-first-frontier-suite-built-on-intelligence-trust/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Microsoft: Introducing the First Frontier Suite built on Intelligence + Trust ↗</a></li></ul>",
    "source": "Anthropic",
    "sourceUrl": "https://www.anthropic.com/news/enterprise-ai-services-company",
    "tags": [
      "EnterpriseAI",
      "AIAgents",
      "Governance"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-10-scroll-css-vs-gsap",
    "category": "design",
    "date": "2026-06-10",
    "title": "스크롤 애니메이션, CSS냐 GSAP이냐",
    "rawTitle": "Creating 3D Scroll-Driven Text Animations with CSS and GSAP",
    "summary": "스크롤 구동 애니메이션을 GSAP과 CSS 네이티브 두 진영으로 교차 분석해, 언제 무엇을 써야 하는지 정리한다.",
    "bodyHtml": "<p>스크롤에 반응하는 모션은 더 이상 화려한 데모의 전유물이 아니다. 2025년 말부터 두 흐름이 동시에 무르익었다. 하나는 GSAP ScrollTrigger로 정교한 3D 좌표를 직접 계산하는 방식, 다른 하나는 브라우저가 스크롤 진행도를 곧장 애니메이션에 매핑하는 CSS 네이티브 방식이다. Codrops의 최신 튜토리얼은 Three.js 없이 삼각함수와 CSS transform만으로 텍스트를 3D 공간에 배치한다. 같은 문제를 정반대 철학으로 푸는 두 진영을 나란히 놓고 보면, 실무 선택의 기준이 선명해진다.</p><blockquote>\"ScrollTrigger는 스크롤 거리를 애니메이션의 진행값에 끊임없이 매핑한다.\"<cite>Codrops</cite></blockquote><h3>무슨 일인가</h3><p>Codrops의 David Faure는 GSAP의 ScrollTrigger와 ScrollSmoother를 등록해 스크롤 진행도를 애니메이션에 직접 묶는다. 각 텍스트 항목은 sine·cosine으로 3D 좌표를 계산받고, <code>transform-style: preserve-3d</code>와 <code>gsap.set()</code>으로 GPU 가속 변환을 받는다. 실린더는 180도, 원형은 360도 궤도, 튜브는 Z축 터널처럼 수학 패턴이 효과를 가른다. 핵심은 수동 스크롤 이벤트 핸들링을 버리고 onUpdate 콜백이 프레임마다 값을 동기화한다는 점이다.</p><h3>여러 시각</h3><p>같은 \"스크롤 구동\"이라는 단어를 세 출처가 다르게 해석한다.</p><ul><li><b>Codrops</b> — JS 오케스트레이션 진영. 복잡한 3D 좌표와 ScrollSmoother 같은 세밀한 제어가 필요할 때 GSAP의 표현력이 압도적이라는 입장이다.</li><li><b>Josh W. Comeau</b> — CSS 네이티브 진영. \"지속 시간 대신 스크롤 거리에 키프레임을 매핑하면 어떨까\"라며, JS 없이 약 85% 브라우저에서 동작하는 패러다임 전환을 강조한다.</li><li><b>CSS-Tricks</b> — 실무 가이드 진영. <code>scroll()</code>과 <code>view()</code> 타임라인의 차이, 메인 스레드를 막지 않는 \"NO JANK\" 하드웨어 가속을 핵심 이점으로 짚는다.</li></ul><h3>왜 중요한가</h3><p>몇 년간 스크롤 모션은 곧 JS 라이브러리였고, 스크롤 이벤트 리스너가 메인 스레드를 점유해 끊김을 만들었다. 이제 CSS의 <code>animation-timeline: scroll()</code>·<code>view()</code>가 같은 일을 컴포지터 스레드에서 처리한다. Interop 2026 대상이라 Firefox 정식 지원이 붙으면 베이스라인이 된다. 즉 \"라이브러리 없이도 되는 영역\"이 빠르게 넓어지고, GSAP은 진짜 복잡한 표현에 집중하는 분업 구도가 굳어진다.</p><h3>실무 적용</h3><ul><li>단순 패럴랙스·진행 바·뷰포트 진입 리빌은 CSS <code>view()</code>/<code>scroll()</code>로 먼저 시도하고, GSAP은 3D 좌표·체이닝이 필요할 때만 쓴다.</li><li><code>animation-timeline</code>은 반드시 <code>animation</code> 단축 속성 뒤에 선언하고, <code>@supports</code>로 기능 감지 후 폴백을 둔다.</li><li>두 방식 모두 <code>prefers-reduced-motion</code>으로 게이팅해 접근성을 지킨다.</li></ul><h3>Kenny의 관점</h3><p>프론트엔드·AX 관점에서 이 분기는 \"표현력 대 비용\"의 문제다. CSS 네이티브는 의존성 0에 컴포지터 가속이라 대부분의 인터랙션에서 기본값이 되어야 한다. 다만 AI가 생성하는 인터페이스가 늘수록, 좌표를 정밀하게 제어하는 GSAP식 접근은 브랜드 경험의 차별화 지점으로 남는다. 나는 \"CSS로 시작하고 GSAP으로 끝낸다\"는 계층 전략을 권한다. 무엇보다 모션은 의미를 전달할 때만 가치가 있으므로, reduced-motion 분기를 설계 첫 단계에서 정의하는 습관이 둘 모두에 우선한다.</p><h3>출처</h3><ul><li><a href=\"https://tympanus.net/codrops/2025/11/04/creating-3d-scroll-driven-text-animations-with-css-and-gsap/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Codrops: Creating 3D Scroll-Driven Text Animations with CSS and GSAP ↗</a></li><li><a href=\"https://www.joshwcomeau.com/animation/scroll-driven-animations/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Josh W. Comeau: Scroll-Driven Animations ↗</a></li><li><a href=\"https://css-tricks.com/unleash-the-power-of-scroll-driven-animations/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">CSS-Tricks: Unleash the Power of Scroll-Driven Animations ↗</a></li></ul>",
    "source": "Codrops",
    "sourceUrl": "https://tympanus.net/codrops/2025/11/04/creating-3d-scroll-driven-text-animations-with-css-and-gsap/",
    "tags": [
      "ScrollDrivenAnimation",
      "CSS",
      "GSAP"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-10-ai-jobs-reality-check",
    "category": "ai",
    "date": "2026-06-10",
    "title": "AI 일자리 종말론, 데이터는 다르게 말한다",
    "rawTitle": "A reality check on the AI jobs hysteria",
    "summary": "AI가 일자리를 휩쓴다는 공포와 달리 노동시장 데이터는 아직 큰 충격을 보이지 않는다. 다만 신입 채용 둔화 같은 국지적 신호는 분명하다.",
    "bodyHtml": "<p>매주 \"AI가 일자리를 없앤다\"는 헤드라인이 쏟아진다. 그런데 MIT Technology Review가 실제 노동 통계를 들여다보니 그림이 사뭇 달랐다. AI 노출도가 높은 직군의 실업률이 오히려 낮은 직군보다 낮았고, 코딩 일자리는 속도는 느려졌어도 여전히 늘고 있었다. 공포의 크기와 데이터의 크기 사이에는 분명한 간극이 있다.</p><blockquote>\"현재까지의 모든 증거는 AI가 지금의 노동시장에 미치는 영향이 작다는 것을 시사한다.\"<cite>MIT Technology Review</cite></blockquote><h3>무슨 일인가</h3><p>이 기사는 종말론을 부정하지 않으면서도 \"아직은 아니다\"라고 선을 긋는다. 기업 중 실제로 어떤 업무에든 AI를 쓰는 곳은 다섯 곳 중 한 곳뿐이고, 약 40%의 노동자가 생성형 AI를 사용하지만 그 강도는 산업마다 제각각이다. 다만 22~25세 신입 구간에서는 AI 노출 직군의 고용이 2024년 이후 약 16% 줄어, 충격이 가장 약한 고리에 먼저 닿고 있음을 보여준다. 거시 지표는 잠잠한데, 진입 사다리의 첫 칸이 흔들린다는 점이 핵심이다.</p><h3>여러 시각</h3><p>같은 주제를 세 출처가 서로 다른 렌즈로 본다.</p><ul><li><b>MIT Technology Review</b> — 거시 통계 중심으로 \"아직 대규모 붕괴는 없다\", 단 신입 채용 둔화는 실재한다고 본다.</li><li><b>Anthropic</b> — 실제 사용 데이터로 노출도를 재측정해, 자동화(42%)보다 증강(55%)이 앞서며 고노출 직군에서도 실업 급증은 없다고 분석한다.</li><li><b>Microsoft</b> — 거시 논쟁 대신 기업 내부로 들어가, 일을 Author·Editor·Director·Orchestrator 협업 패턴으로 재설계해야 한다고 제안한다.</li></ul><h3>왜 중요한가</h3><p>세 관점을 겹쳐 보면 결론은 같다. AI는 직무를 통째로 삭제하는 게 아니라 태스크 단위로 스며든다. 그래서 \"몇 개의 일자리가 사라지나\"보다 \"일이 어떻게 재구성되나\"가 더 정확한 질문이 된다. 동시에 신입 채용 둔화는 무시할 수 없는 경고등이다. 숙련 진입 경로가 막히면 5년 뒤 시니어 공급이 마르기 때문이다. 데이터가 잠잠하다고 안심할 게 아니라, 어디가 먼저 깨지는지를 봐야 한다.</p><h3>실무 적용</h3><ul><li>제품의 AI 기능을 \"사람 대체\"가 아니라 태스크 증강으로 설계하라. 사용자가 결과를 검수·교정할 여지를 UI에 남겨라.</li><li>Author/Editor/Director 패턴처럼, 사용자가 AI에 위임하는 수준을 단계별로 선택하게 하는 인터랙션을 제공하라.</li><li>주니어가 AI와 함께 빠르게 숙련되도록, 결과만이 아니라 과정을 학습시키는 온보딩형 UX를 고민하라.</li></ul><h3>Kenny의 관점</h3><p>프론트엔드·AX 관점에서 가장 중요한 신호는 \"증강이 자동화를 앞선다\"는 데이터다. 이는 곧 인터페이스의 시대가 끝나지 않았다는 뜻이다. 우리가 만들 화면은 사람과 모델이 권한을 주고받는 협상 테이블이고, 위임·검수·되돌리기를 얼마나 자연스럽게 설계하느냐가 제품의 신뢰를 가른다. 일자리 종말론에 휘둘리기보다, 사람의 판단을 더 잘 끼워 넣는 경험을 만드는 것이 AX 실무자의 진짜 과제다.</p><h3>출처</h3><ul><li><a href=\"https://www.technologyreview.com/2026/05/26/1137855/a-reality-check-on-the-ai-jobs-hysteria/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">MIT Technology Review: A reality check on the AI jobs hysteria ↗</a></li><li><a href=\"https://www.anthropic.com/research/labor-market-impacts\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Anthropic: Labor market impacts of AI — A new measure and early evidence ↗</a></li><li><a href=\"https://blogs.microsoft.com/blog/2026/05/05/how-frontier-firms-are-rebuilding-the-operating-model-for-the-age-of-ai/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Microsoft: How Frontier Firms are rebuilding the operating model for the age of AI ↗</a></li></ul>",
    "source": "MIT Technology Review",
    "sourceUrl": "https://www.technologyreview.com/2026/05/26/1137855/a-reality-check-on-the-ai-jobs-hysteria/",
    "tags": [
      "AI",
      "FutureOfWork",
      "LaborMarket"
    ],
    "thumb": ""
  }
];
