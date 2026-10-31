/**
 * Insights data (auto-generated from data/insights.json)
 * Do not edit by hand. Run scripts/generate-post.mjs or scripts/build-insights-data.mjs.
 */
window.INSIGHTS = [
  {
    "id": "2026-10-31-evals-as-acceptance-criteria",
    "category": "plan",
    "date": "2026-10-31",
    "title": "만들기 쉬워진 시대, 평가(eval)가 새 인수 기준이다",
    "rawTitle": "Why you should care about trust when building is this easy: Kathy Pham (Harvard, Workday, Mozilla)",
    "summary": "AI로 빌드 비용이 0에 가까워지자 “무엇을 만들까”와 “품질을 어떻게 증명할까”가 핵심이 됐다. 평가를 인수 기준으로 삼자는 제안을 정리한다.",
    "bodyHtml": "<p>Mind the Product 시카고 2026 기조연설에서 Kathy Pham(하버드 선임 펠로, 전 Workday·Mozilla)은 오래된 질문을 다시 꺼냈다. 제품이 사회에 무엇을 하는가. 몇 분이면 프로토타입이 나오는 지금, 이 질문은 철학이 아니라 기획과 QA의 일상 업무가 되었다. 만드는 속도가 빨라질수록 검증이 병목이 되기 때문이다. 기획자와 QA가 지금 무엇을 바꿔야 하는지 짚어 본다.</p>\n<blockquote>\"Any tooling that makes building the right thing cheaper makes building the wrong thing cheaper too,\"<cite>Mind the Product</cite></blockquote>\n<h3>무슨 일인가</h3>\n<p>Pham은 좋은 제품의 조건을 세 가지 질문으로 정리한다. 사람들이 쓰는가, 시장 적합성이 있는가, 그리고 사람과 사회에 옳은가. AI 도구는 역량을 더해 주지만 판단력까지 더해 주지는 않는다는 것이 그의 경고다. 그래서 윤리적 출시를 위한 네 기둥을 제시한다. 올바른 문제를 풀 것, 평가(eval)를 새로운 인수 기준으로 삼고 도메인 전문가의 판단을 가드레일로 둘 것, 신뢰를 기능으로 다룰 것, 그리고 제품·소프트웨어 라이프사이클과 팀 역할을 다시 설계할 것이다. 엔지니어, 임상 전문가, 디자이너, 커뮤니티 구성원 같은 “전화 연결할 친구”를 두라는 조언도 덧붙였다.</p>\n<h3>여러 시각</h3>\n<p>같은 시기 Ministry of Testing도 AI 제품의 품질을 위험 관점에서 다루고 있다.</p>\n<ul><li><b>Mind the Product(Pham)</b> — 평가를 인수 기준으로 올리고, 신뢰를 출시 전에 설계해야 하는 기능으로 본다.</li><li><b>Ministry of Testing</b> — 연재 “AI Risk List”의 7번째 편(System Safety, Failures &amp; Limitations)을 통해 제품 위험을 데이터와 목록으로 탐색하자고 제안한다. 본문은 회원 전용이라 부제 수준만 확인했다.</li></ul>\n<h3>왜 중요한가</h3>\n<p>요구사항 문서가 “무엇을 보여 줄 것인가”에 머물던 시절에는 QA가 구현 뒤에 붙는 단계였다. 생성형 기능에서는 정답이 하나가 아니므로 합격 기준 자체를 사전에 정의해야 한다. 평가 세트가 곧 인수 기준이 되면 기획과 QA의 경계가 사라지고, 위험 목록은 그 기준의 원재료가 된다. 만들기 쉬운 만큼 잘못 만든 것도 빨리 퍼지기 때문에, 검증 비용을 앞단으로 옮기는 팀이 결국 더 빠르다.</p>\n<h3>실무 적용</h3>\n<ul><li>스토리 작성 시 “통과 예시 5개·실패 예시 5개”를 인수 기준으로 함께 적는다.</li><li>위험 목록(안전·오작동·한계)을 기획 단계에서 만들고 테스트 시나리오로 연결한다.</li><li>도메인 전문가 리뷰를 릴리스 게이트에 넣어 “출시해도 되는가”를 명시적으로 승인한다.</li></ul>\n<h3>Kenny의 관점</h3>\n<p>프론트엔드와 AX를 함께 다루다 보면, 화면은 하루 만에 만들어도 “이 결과를 믿어도 되는가”는 하루 만에 답할 수 없다는 점을 체감한다. 그래서 저는 평가 세트를 코드 옆에 두고 CI에서 돌리는 방식이 가장 현실적이라고 본다. 인수 기준이 문서가 아니라 실행되는 테스트가 될 때, 기획·QA·개발이 같은 기준을 바라본다. 속도를 얻은 만큼 신뢰를 설계하는 일이 직무의 중심으로 이동한다.</p>\n<h3>출처</h3>\n<ul><li><a href=\"https://www.mindtheproduct.com/what-we-learned-from-kathy-phams-keynote-at-mind-the-product-chicago-2026/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Mind the Product: Why you should care about trust when building is this easy ↗</a></li><li><a href=\"https://www.ministryoftesting.com/insights/ai-risk-list-system-safety-failures-limitations-7\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Ministry of Testing: AI Risk List: System Safety, Failures &amp; Limitations (7) ↗</a></li></ul>",
    "source": "Mind the Product",
    "sourceUrl": "https://www.mindtheproduct.com/what-we-learned-from-kathy-phams-keynote-at-mind-the-product-chicago-2026/",
    "tags": [
      "QA",
      "AI Evals",
      "Product Planning"
    ],
    "thumb": ""
  },
  {
    "id": "2026-10-31-saas-layers-fdpm",
    "category": "pm",
    "date": "2026-10-31",
    "title": "에이전트 시대의 SaaS, 그리고 고객 현장에 파견되는 PM",
    "rawTitle": "How is AI changing the traditional SaaS and business app model?",
    "summary": "AI 에이전트가 앱 위에 올라타며 SaaS의 3개 계층이 흔들린다. 이 변화가 사업 전략과 PM 역할(Forward Deployed PM)에 주는 의미를 짚는다.",
    "bodyHtml": "<p>Satya Nadella가 2025년 12월 “에이전트 시대에 비즈니스 앱은 붕괴할 것”이라고 말한 뒤, SaaS 사업을 하는 팀은 같은 질문을 받고 있다. 우리 제품은 에이전트 뒤로 숨는가, 아니면 에이전트가 되는가. Mind the Product의 FreeAgent 제품 운영 책임자 Lucy Pitticas-Rothwell은 이를 구조적으로 풀어 설명한다. 사업기획과 PM 모두에게 지금 필요한 프레임이다.</p>\n<blockquote>\"Typically, all layers are owned by the SaaS provider.\"<cite>Mind the Product</cite></blockquote>\n<h3>무슨 일인가</h3>\n<p>글은 비즈니스 앱을 세 계층으로 나눈다. 사용자가 누르거나 말을 거는 프런트엔드, 개인·앱 데이터를 담은 데이터 계층, 데이터를 쓸모 있는 결과로 바꾸는 로직 계층이다. 지금까지는 한 SaaS 벤더가 세 계층을 모두 소유했다. 필자는 가상의 급여 SaaS를 예로 들어, 사용자가 메뉴와 폼 대신 대화형 인터페이스로 급여 처리를 요청하게 되면 프런트엔드가 가장 먼저 밀려나고, 이어 로직 계층이 에이전트로 이동할 수 있다고 본다. 인터페이스 선호가 바뀌면 벤더의 접점이 사라진다는 경고다. 다만 후반부 전략 대응 부분은 필자가 확인하지 못했다.</p>\n<h3>여러 시각</h3>\n<p>같은 주에 올라온 다른 글은 “AI 제품을 어떻게 고객에게 안착시킬 것인가”라는 반대편 질문을 다룬다.</p>\n<ul><li><b>Mind the Product(Pitticas-Rothwell)</b> — 프런트엔드·데이터·로직 3계층 소유가 흔들리는 것이 SaaS의 구조적 위협이라고 진단한다.</li><li><b>Mind the Product(Caroline Clark)</b> — Forward Deployed PM을 소개한다. 일반 PM이 제품을 소유한다면 FDPM은 한 고객 계정의 성과를 소유한다. 2026년 7월 말 기준 “Forward Deployed” 채용 공고 170건(98개 회사)이 있고, 신규 공고가 1월 1건에서 7월 62건으로 늘었다는 수치를 인용한다.</li></ul>\n<h3>왜 중요한가</h3>\n<p>AI 제품은 고객의 데이터·워크플로·권한에 연결되어야 비로소 가치가 나오므로, 배포(deployment) 자체가 병목이 된다. 이는 사업 모델에도 영향을 준다. 계층을 에이전트에 내주더라도 데이터와 현장 맥락, 신뢰를 쥔 쪽은 협상력을 유지한다. 반대로 인터페이스만 가진 SaaS는 가장 취약하다. 그래서 어느 계층에서 차별화할지를 고르는 일이 로드맵보다 먼저다.</p>\n<h3>실무 적용</h3>\n<ul><li>우리 제품의 프런트엔드·데이터·로직 계층 중 에이전트에게 대체되기 쉬운 것을 표로 점검한다.</li><li>핵심 고객 한두 곳에 PM이 상주해 설정·프로토타입·성과 기록을 하고, 학습을 코어 제품으로 환류한다.</li><li>API·권한·감사 로그를 “에이전트가 호출할 수 있는 제품”의 기본 사양으로 로드맵에 올린다.</li></ul>\n<h3>Kenny의 관점</h3>\n<p>프론트엔드 개발자로서 “화면이 사라진다”는 말은 가볍게 들리지 않는다. 하지만 대화형 인터페이스가 늘어도 신뢰를 주는 결과 표시와 승인 흐름은 여전히 설계 대상이다. 그래서 저는 SaaS의 해자가 화면에서 데이터와 현장 이해로 옮겨 간다고 본다. FDPM은 그 해자를 만드는 역할이다. 작은 팀일수록 고객 현장에서 배운 것을 제품에 빠르게 되돌리는 구조를 먼저 갖추는 것이 사업 기획의 우선순위여야 한다.</p>\n<h3>출처</h3>\n<ul><li><a href=\"https://www.mindtheproduct.com/how-is-ai-changing-the-traditional-saa-s-and-business-app-model/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Mind the Product: How is AI changing the traditional SaaS and business app model? ↗</a></li><li><a href=\"https://www.mindtheproduct.com/what-is-a-forward-deployed-product-manager-anyway/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Mind the Product: What is a Forward Deployed Product Manager, anyway? ↗</a></li></ul>",
    "source": "Mind the Product",
    "sourceUrl": "https://www.mindtheproduct.com/how-is-ai-changing-the-traditional-saa-s-and-business-app-model/",
    "tags": [
      "SaaS",
      "Product Management",
      "AI Strategy"
    ],
    "thumb": ""
  },
  {
    "id": "2026-10-30-frankenstein-table-grid-semantics",
    "category": "design",
    "date": "2026-10-30",
    "title": "테이블 마크업에 그리드 레이아웃을 입히는 '프랑켄슈타인 테이블'",
    "rawTitle": "The Frankenstein Table",
    "summary": "table 요소의 의미는 유지한 채 CSS Grid로 카드형 레이아웃을 만드는 실험이다. 시맨틱과 레이아웃의 경계를 다시 묻게 한다.",
    "bodyHtml": "<p>CSS-Tricks에 올라온 'The Frankenstein Table'은 table, tr, th, td 마크업을 그대로 두고 화면에서는 CSS Grid 카드처럼 보이게 만드는 기법을 소개한다. 상품 카드처럼 표가 아닌 목록을 표로 마크업해도 되는가, 반대로 표를 그리드처럼 다룰 수 없는가라는 오래된 질문에서 출발한다. 같은 주에 나온 CSS 소식들까지 함께 보면, 레이아웃 도구가 빠르게 늘어나는 지금 시맨틱을 어디에 두느냐가 더 중요해졌다.</p>\n<blockquote>\"it reads like a table, but acts like a grid\"<cite>CSS-Tricks</cite></blockquote>\n<h3>무슨 일인가</h3>\n<p>글쓴이 Preethi는 Flexbox와 Grid의 정렬 속성이 표나 목록 같은 요소에는 기대대로 적용되지 않는 점에서 출발한다. 해법은 간단하다. table에 display: grid를 주고, tbody는 display: contents로 레이아웃 트리에서 빼며, tr과 셀은 block으로 바꾼다. 그러면 grid-template-columns와 gap 같은 속성이 카드 배치에 그대로 적용된다. 저자는 th가 라벨과 데이터를 묶어 주는 '준 시맨틱' 역할을 한다고 보고, 자신의 테스트에서는 VoiceOver와 키보드 탐색도 여전히 표로 인식했다고 밝힌다.</p>\n<h3>여러 시각</h3>\n<p>같은 시기 CSS-Tricks의 다른 글들은 '도구가 늘어난 CSS를 어떻게 쓸 것인가'라는 맥락을 보여 준다.</p>\n<ul><li><b>CSS-Tricks What's !important #19</b> — scroll-state() 컨테이너 쿼리로 스크롤 가능·고정(stuck) 상태를 CSS만으로 스타일링하고, @custom-media로 Sass 없이 이름 붙은 브레이크포인트를 쓰는 방법을 다룬다. 즉 JS 없이 CSS가 상태와 조건을 직접 표현하는 흐름이다.</li><li><b>Frankenstein Table</b> — 같은 흐름이지만 방향이 다르다. 새 기능이 아니라 기존 시맨틱 요소의 표시 방식(display)을 바꿔 의미와 모양을 분리한다.</li></ul>\n<h3>왜 중요한가</h3>\n<p>마크업은 의미를, CSS는 모양을 맡는다는 원칙은 오래 전부터 있었지만 display 값이 시맨틱에 영향을 주는 사례가 많아 실제로는 깨지기 쉬웠다. 이 글은 그 경계를 실험으로 확인하려는 시도다. 다만 display를 바꾸면 브라우저에 따라 접근성 트리에서 표 의미가 사라지는 경우가 있어, 저자의 테스트 결과를 일반화하면 안 된다. 신기한 기법일수록 검증 비용이 따라온다는 점이 핵심이다.</p>\n<h3>실무 적용</h3>\n<ul><li>표 형태 데이터를 반응형 카드로 바꿔야 할 때, 새 컴포넌트를 만들기 전에 display 재정의로 충분한지 먼저 검토한다.</li><li>display를 바꾼 표는 VoiceOver·NVDA·TalkBack과 키보드 탐색으로 직접 확인하고, 필요하면 role 속성을 명시한다.</li><li>상태 기반 스타일은 scroll-state()처럼 CSS 네이티브 기능으로 옮길 수 있는지 점검해 JS 의존을 줄인다.</li></ul>\n<h3>Kenny의 관점</h3>\n<p>프론트엔드 실무에서 가장 흔한 실수는 '보이는 대로' 마크업하는 것이다. 이 글은 반대로 의미를 먼저 정하고 모양을 나중에 입히는 사고방식을 보여 준다는 점에서 읽을 만하다. 다만 팀 코드베이스에서는 낯선 패턴이 유지보수 비용이 되기도 한다. 그래서 나는 이 기법을 그대로 쓰기보다, 디자인 시스템 안에 접근성 테스트가 붙은 컴포넌트로 감싸 두는 방식을 권한다. 시맨틱과 레이아웃의 분리는 결국 테스트로 증명해야 설득력이 생긴다.</p>\n<h3>출처</h3>\n<ul><li><a href=\"https://css-tricks.com/the-frankenstein-table/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">CSS-Tricks: The Frankenstein Table ↗</a></li><li><a href=\"https://css-tricks.com/whats-important-19/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">CSS-Tricks: What's !important #19 ↗</a></li></ul>",
    "source": "CSS-Tricks",
    "sourceUrl": "https://css-tricks.com/the-frankenstein-table/",
    "tags": [
      "CSS Grid",
      "Semantic HTML",
      "Accessibility"
    ],
    "thumb": ""
  },
  {
    "id": "2026-10-30-anthropic-ai-for-science-expansion",
    "category": "ai",
    "date": "2026-10-30",
    "title": "AI for Science, 개인 연구자에서 재단·연구기관으로 확장",
    "rawTitle": "AI for Science expands to foundations and research institutions",
    "summary": "Anthropic이 과학 지원 프로그램을 재단·연구기관 20곳으로 넓혔다. 같은 주 공공부문 협약과 비교하면 '기관 단위 도입'이라는 공통 방향이 보인다.",
    "bodyHtml": "<p>Anthropic이 10월 28일 AI for Science 프로그램을 재단, 연구기관, 연구 프로젝트 등 20개 파트너로 확대한다고 발표했다. 2025년 5월 시작한 이 프로그램은 연구자에게 Claude 크레딧을 무상 제공해 왔는데, 이제 개인 지원에서 기관 경유 지원으로 무게중심을 옮긴다. 같은 주에 발표된 미국 GSA 협약과 함께 보면 AI 도입이 개인 도구에서 조직 인프라로 넘어가는 모습이 선명하다.</p>\n<blockquote>\"AI for Science began by supporting individual scientists.\"<cite>Anthropic</cite></blockquote>\n<h3>무슨 일인가</h3>\n<p>파트너는 Sloan Foundation, Simons Foundation, 미국 NSF 같은 자금 지원 기관 6곳, Sanger·Crick·EMBL 등 연구기관 6곳, FlyWire·gnomAD 같은 연구 프로젝트 6곳으로 나뉜다. 앞서 협력한 HHMI Janelia와는 AI 에이전트가 실험 장비를 안전하게 다루게 하는 Model Hardware Standard를 함께 만들어 연구 프리뷰로 공개했다. Anthropic은 상당수 협업이 아직 초기이며 결과는 나중에 공유하겠다고 밝혔다. 오픈 데이터셋과 소프트웨어 같은 공공재를 만드는 프로젝트가 많다는 점도 특징이다.</p>\n<h3>여러 시각</h3>\n<p>같은 주 Anthropic의 다른 발표는 기관 단위 도입이라는 흐름을 다른 영역에서 보여 준다.</p>\n<ul><li><b>Anthropic GSA 협약</b> — 미국 연방·주·지방 정부 약 500개 조직이 Claude를 쓰고, Claude Enterprise·API 등에 40% 할인을 적용하며 최소 사용 약정은 없다. 과학이 '지식 생산'이라면 이쪽은 '행정 업무'의 기관 도입이다.</li><li><b>Anthropic 연구 블로그(신약 개발 초기 성과)</b> — 앞서 공개된 제약·바이오 파트너 사례는 이번 확장의 실제 적용 예로 읽힌다. 다만 대부분 전임상 단계라는 한계도 함께 봐야 한다.</li></ul>\n<h3>왜 중요한가</h3>\n<p>재단과 기관을 통하면 개별 연구자 수십 명보다 훨씬 넓은 분야에 도구와 표준이 퍼진다. 반면 기관 협약은 도입 속도를 높이는 대신 특정 벤더 의존과 표준 선점이라는 문제를 낳는다. Model Hardware Standard처럼 공유 사양을 먼저 제시하는 접근이 그래서 눈에 띈다. 성과가 공개 데이터와 오픈소스로 돌아오는지가 이 프로그램의 진짜 평가 기준이 될 것이다.</p>\n<h3>실무 적용</h3>\n<ul><li>AI 도입을 개인 생산성 도구 단계에 머물게 하지 말고, 조직 단위 표준·권한·감사 기준을 먼저 설계한다.</li><li>에이전트가 외부 장비나 시스템을 다루는 경우 공유 사양(인터페이스 표준)을 우선 정의해 벤더 종속을 줄인다.</li><li>초기 성과 보고에는 단계(전임상 등)와 검증 범위를 명시하는 습관을 팀 문서에 넣는다.</li></ul>\n<h3>Kenny의 관점</h3>\n<p>AX(AI 전환)를 하다 보면 개인이 쓰던 도구를 조직에 옮기는 순간 문제의 성격이 바뀐다. 품질보다 권한, 로그, 표준이 더 큰 쟁점이 되기 때문이다. 이번 발표는 과학 분야가 같은 단계를 밟고 있음을 보여 준다. 프론트엔드 관점에서는 에이전트가 장비나 시스템을 다루는 인터페이스 표준이 결국 사용자 경험의 일부가 된다고 본다. 사람이 승인하고 되돌릴 수 있는 화면을 설계하는 일이 더 중요해질 것이다.</p>\n<h3>출처</h3>\n<ul><li><a href=\"https://www.anthropic.com/news/ai-for-science-expands-foundations-research-institutions\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Anthropic: AI for Science expands to foundations and research institutions ↗</a></li><li><a href=\"https://www.anthropic.com/news/expanding-partnership-gsa\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Anthropic: Expanding our partnership with GSA to bring Claude to all levels of government ↗</a></li></ul>",
    "source": "Anthropic",
    "sourceUrl": "https://www.anthropic.com/news/ai-for-science-expands-foundations-research-institutions",
    "tags": [
      "Anthropic",
      "AI for Science",
      "Enterprise AI"
    ],
    "thumb": ""
  },
  {
    "id": "2026-10-29-claude-drug-development-early-progress",
    "category": "ai",
    "date": "2026-10-29",
    "title": "Claude, 신약 개발 병목을 파고들다: 초기 성과와 한계",
    "rawTitle": "Early progress on accelerating drug development with Claude",
    "summary": "Anthropic이 제약·바이오 6개 파트너와 신약 개발 전 단계에 Claude를 투입한 초기 결과를 공개했다. 수치는 인상적이지만 대부분 전임상 단계다.",
    "bodyHtml": "<p>Anthropic이 제약·바이오 파트너 여섯 곳과 함께 진행한 신약 개발 초기 성과를 공개했습니다. 타깃 발굴부터 분자 설계, 최적화, 제조, 규제 문서, 임상시험 운영까지 한 단계가 아니라 전 과정에 걸친 시도라는 점이 눈에 띕니다. 동시에 같은 주에 과학 연구 지원 프로그램도 20개 기관으로 확장되어, AI가 '코딩 도구'를 넘어 과학 업무 도구로 자리 잡는 흐름이 선명해졌습니다.</p>\n<blockquote>\"The bottlenecks are distributed all throughout the drug development process.\"<cite>Anthropic Research</cite></blockquote>\n<h3>무슨 일인가</h3>\n<p>파트너는 BigHat Biosciences, Bristol Myers Squibb, Divergence Labs, Enveda, Generate Biomedicines, The Column Group이며, 별도로 Anthropic 내부 신약 연구도 병행됩니다. Generate Biomedicines는 CAR T 세포 구성요소를 70% 짧게 설계하면서 수용체 발현을 10배 높였다고 밝혔습니다. Divergence Labs는 한 달 동안 약 3만 5천 개의 항체 설계를 생성해 IgE 제거 후보 20여 개를 찾았고, BigHat은 10주간 1,010개 변이체를 시험해 결합력 10배 이상, 응집 속도 100배 이상 개선을 얻었습니다. Enveda는 사람이 하던 검토를 25시간 이상에서 3시간 미만으로(89%) 줄이면서 표시된 문제 11건을 모두, 추가로 7건을 더 잡아냈다고 합니다.</p>\n<h3>여러 시각</h3>\n<p>같은 흐름을 다른 각도에서 보면 해석의 초점이 달라집니다.</p>\n<ul><li><b>Anthropic AI for Science</b> — 2025년 5월 시작된 크레딧 프로그램이 Sloan·Simons·Schmidt Sciences·NSF 같은 재단과 Sanger 연구소, EMBL, gnomAD 등 20개 기관으로 늘었다. 오픈 데이터셋·소프트웨어·표준 같은 공공재 구축에 방점이 있다.</li>\n<li><b>Anthropic 신약 개발 보고</b> — 반면 이쪽은 기업 파트너와의 개별 성과 사례 중심이며, 대부분 아직 전임상 단계로 사람 대상 시험은 시작되지 않았다고 스스로 한계를 밝힌다.</li></ul>\n<h3>왜 중요한가</h3>\n<p>눈여겨볼 대목은 속도 향상 자체보다 '병목이 한 곳에 있지 않다'는 진단입니다. 설계 생성은 빨라졌지만 검증은 실험실의 시간이 걸리고, 문서·규제·운영 업무에는 또 다른 병목이 있습니다. 검토 시간을 89% 줄인 Enveda 사례처럼 지루한 확인 업무에서 효과가 크다는 점도 현실적입니다. 다만 수치는 각 사가 고른 성공 사례이므로, 임상 성공률이라는 최종 지표가 나오기 전에는 과대평가를 경계해야 합니다.</p>\n<h3>실무 적용</h3>\n<ul><li>AI 도입 효과는 '생성' 단계가 아니라 '검토·검증' 단계의 시간 절감으로 먼저 측정하자.</li>\n<li>사례 수치를 인용할 때는 단계(전임상/임상)와 선별 편향을 함께 명시하는 UI·리포트를 설계하자.</li>\n<li>사람이 검토하는 지점을 워크플로 중간에 명시적으로 두는 휴먼 인 더 루프 화면을 기본값으로 삼자.</li></ul>\n<h3>Kenny의 관점</h3>\n<p>프론트엔드·AX 관점에서 이 글의 교훈은 '모델 성능'보다 '업무 흐름 전체 설계'입니다. 후보를 3만 5천 개 쏟아내는 시스템은 그것을 걸러내고 비교하고 근거를 추적하는 인터페이스가 없으면 쓸모가 없습니다. 결국 AX의 승부처는 생성 결과를 사람이 빠르게 판단하도록 돕는 화면과 검증 파이프라인이라고 생각합니다. 그래서 저는 AI 기능을 기획할 때 먼저 '검토 시간이 얼마나 줄어드는가'를 질문합니다.</p>\n<h3>출처</h3>\n<ul><li><a href=\"https://www.anthropic.com/research/early-progress-drug-development\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Anthropic: Early progress on accelerating drug development with Claude ↗</a></li><li><a href=\"https://www.anthropic.com/news/ai-for-science-expands-foundations-research-institutions\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Anthropic: AI for Science expands to foundations and research institutions ↗</a></li></ul>",
    "source": "Anthropic",
    "sourceUrl": "https://www.anthropic.com/research/early-progress-drug-development",
    "tags": [
      "AI for Science",
      "Drug Discovery",
      "Human-in-the-loop"
    ],
    "thumb": ""
  },
  {
    "id": "2026-10-29-churned-customers-product-lessons",
    "category": "plan",
    "date": "2026-10-29",
    "title": "이탈 고객에게 배우는 제품 기획: 생존자 편향 깨기",
    "rawTitle": "What your churned customers can teach you about your product",
    "summary": "성공한 고객만 보면 제품의 약점이 가려진다. 최근 이탈 고객 10곳에서 공통점을 찾는 6개월 사이클을 소개한다.",
    "bodyHtml": "<p>제품 기획에서 가장 흔한 착시는 남아 있는 고객의 목소리만 듣는 것입니다. Mind the Product에 실린 이 글은 이탈 고객 분석을 일회성 사후 조사가 아니라 정기 루프로 만들자고 제안합니다. 같은 주에 소개된 책임 있는 제품 개발 키노트와 함께 읽으면, '무엇을 만들까'만큼 '무엇을 놓치고 있는가'가 기획의 핵심 질문이 되고 있음을 알 수 있습니다.</p>\n<blockquote>\"Your real prize is a successful product, and spending some attention on your losses gets you closer to that, faster.\"<cite>Mind the Product</cite></blockquote>\n<h3>무슨 일인가</h3>\n<p>저자는 2차 세계대전 때 귀환한 비행기의 총탄 자국에 장갑을 덧대려던 분석을 예로 듭니다. 정작 중요한 곳은 피격 자국이 없는 부위였다는 이야기입니다. 제품도 마찬가지로 갱신 고객만 분석하면 이탈 원인이 드러나지 않는다는 주장입니다. 구체적 절차는 여섯 단계입니다. 한 세그먼트의 최근 이탈 고객 10곳을 나열하고, 그중 8곳 이상의 공통점 하나를 찾아, 담당자와 고객에게 검증한 뒤 건강 점수에 '이탈 변수'로 추가하고, 미래 이탈과의 상관을 측정하며, 분기마다 한 변수씩만 바꿔 반복합니다. 사례 지표로는 핵심 워크플로 완료율 11~17%, 도입 완료 기간(30일 내 배포 비율 16%에서 80%로), 사용률 10% 미만 기능을 이탈 신호로 보는 기준이 언급됩니다.</p>\n<h3>여러 시각</h3>\n<p>같은 주제를 다른 각도에서 다룬 글과 비교하면 이 접근의 위치가 분명해집니다.</p>\n<ul><li><b>Mind the Product(Kathy Pham 키노트)</b> — 평가(eval)를 새로운 인수 기준으로 삼고 신뢰를 기능으로 다루라고 한다. 이탈 분석이 '고객이 떠난 이유'를 본다면, 이쪽은 '떠날 이유를 만들지 않는 기준'을 앞단에서 세우자는 입장이다.</li>\n<li><b>Ministry of Testing</b> — AI 전환은 조직 목표와 개인 목표를 맞추는 문제라고 보며, 기획·QA 담당자가 스스로 학습 방향을 주도하라고 강조한다. 제품 팀의 학습 루프를 개인 단위까지 확장하는 시각이다.</li></ul>\n<h3>왜 중요한가</h3>\n<p>이탈 분석의 장점은 가설이 한 번에 하나씩이라는 점입니다. 변수를 하나씩 건강 점수에 넣고 상관을 확인하므로 팀이 감으로 쌓아 온 가설을 데이터로 걸러낼 수 있습니다. 또 '채택률 10% 미만'처럼 임계값을 명시하면 로드맵 토론이 취향 대결이 아니라 근거 논쟁으로 바뀝니다. 다만 표본이 10곳이라 통계적 확정이 아니라 가설 생성 도구라는 점은 분명히 인식해야 합니다.</p>\n<h3>실무 적용</h3>\n<ul><li>분기마다 이탈 사용자 10명의 공통 행동(미완료 플로우, 미사용 기능)을 뽑아 QA 시나리오와 이벤트 로그에 반영하자.</li>\n<li>기능 출시 시 '사용률 10% 미만이면 점검' 같은 임계값을 인수 기준에 함께 적어 두자.</li>\n<li>온보딩 완료까지의 시간을 화면 단위로 측정해 지연 구간을 UX 개선 우선순위로 올리자.</li></ul>\n<h3>Kenny의 관점</h3>\n<p>기획과 QA를 함께 보는 입장에서 이 글은 '품질'의 정의를 넓혀 줍니다. 버그가 없는 것만이 품질이 아니라 사용자가 끝까지 목적을 달성하는 것이 품질이며, 이탈 지점은 가장 값비싼 테스트 케이스입니다. 저는 이탈 패턴을 곧바로 회귀 시나리오와 프론트엔드 이벤트 설계로 번역하는 습관이 필요하다고 봅니다. 데이터가 적을 때는 정성 인터뷰와 함께 묶어 가설을 단단하게 만드는 편이 안전합니다.</p>\n<h3>출처</h3>\n<ul><li><a href=\"https://www.mindtheproduct.com/what-your-churned-customers-can-teach-you-about-your-product/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Mind the Product: What your churned customers can teach you about your product ↗</a></li><li><a href=\"https://www.mindtheproduct.com/what-we-learned-from-kathy-phams-keynote-at-mind-the-product-chicago-2026/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Mind the Product: Treat trust as a feature (Kathy Pham keynote) ↗</a></li><li><a href=\"https://www.ministryoftesting.com/insights/your-ai-transformation-is-yours-to-drive\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Ministry of Testing: Your AI transformation is yours to drive ↗</a></li></ul>",
    "source": "Mind the Product",
    "sourceUrl": "https://www.mindtheproduct.com/what-your-churned-customers-can-teach-you-about-your-product/",
    "tags": [
      "Churn Analysis",
      "Product Discovery",
      "Quality"
    ],
    "thumb": ""
  },
  {
    "id": "2026-10-28-dark-mode-two-state-toggle",
    "category": "design",
    "date": "2026-10-28",
    "title": "다크 모드 토글, 두 단계면 충분하다",
    "rawTitle": "Dark mode toggles: two states are enough",
    "summary": "시스템 설정을 기본값으로 두고 반대 모드만 보여 주는 2상태 토글이 3상태 못지않게 모든 경우를 표현할 수 있다는 주장.",
    "bodyHtml": "<p>다크 모드 토글을 라이트·다크·시스템 3단계로 만들어야 할까요? Lea Verou는 CSS-Tricks에서 \"두 단계면 충분하다\"고 주장합니다. 대부분의 사이트가 당연하게 여기던 3상태 UI를 다시 따져 보게 만드는 글입니다. 토글은 사용자가 사이트에 온 목적과 무관한 부차적 컨트롤이라는 점이 출발점입니다.</p>\n<blockquote>\"a good two state control can actually express all three states — users just need to apply the override the first time it becomes relevant.\"<cite>CSS-Tricks</cite></blockquote>\n<h3>무슨 일인가</h3>\n<p>핵심 아이디어는 기본값을 운영체제 설정(<code>prefers-color-scheme</code>)에 맡기는 것입니다. 사용자가 직접 바꿀 때만 선택을 <code>localStorage</code>에 저장해 덮어씁니다. 토글에는 현재 적용된 모드의 반대쪽만 보여 주므로 \"시스템\" 옵션을 항상 노출할 필요가 없습니다. 사실상 세 상태를 두 개의 버튼으로 표현하는 셈입니다.</p>\n<h3>여러 시각</h3>\n<p>같은 시기 CSS 생태계는 상태를 JS 없이 선언적으로 다루는 방향으로 가고 있습니다.</p>\n<ul><li><b>CSS-Tricks What's !important #19</b> — <code>scroll-state()</code> 쿼리의 stuck·snapped 같은 상태와 <code>@custom-media</code>를 소개하며 UI 상태를 CSS에서 해결하는 흐름을 보여 줍니다.</li><li><b>댓글의 반론</b> — 3상태 토글은 시스템 동기화로 명시적으로 되돌릴 수 있고 선택지가 투명하다는 점을 들어, 두 단계는 되돌리기 경로가 모호해진다고 지적합니다.</li></ul>\n<h3>왜 중요한가</h3>\n<p>컨트롤이 하나 늘 때마다 사용자는 선택 비용을 치릅니다. 다크 모드 토글처럼 사소한 UI일수록 \"모든 경우를 노출\"하려는 습관이 쌓여 인터페이스를 무겁게 만듭니다. 반면 반론이 말하는 되돌리기 문제도 실재합니다. 결국 문제는 기본값을 얼마나 믿을 수 있느냐, 예외 경로를 얼마나 쉽게 만들 수 있느냐입니다.</p>\n<h3>실무 적용</h3>\n<ul><li>초기 테마는 <code>prefers-color-scheme</code>로 정하고, 저장된 값이 있을 때만 덮어쓰세요.</li><li>토글 라벨은 현재 상태가 아니라 \"전환될 상태\"를 보여 주세요.</li><li>깜빡임(FOUC)을 막도록 저장값 확인은 렌더링 전에 인라인 스크립트로 처리하세요.</li></ul>\n<h3>Kenny의 관점</h3>\n<p>프론트엔드에서 가장 좋은 UI는 설명이 필요 없는 UI라고 생각합니다. 세 상태를 모두 보여 주는 것은 개발자의 완결성 욕심인 경우가 많습니다. 다만 \"시스템으로 복귀\" 경로를 설정 화면이나 길게 누르기로 남겨 두는 절충은 필요합니다. 기본값을 믿되 탈출구는 숨겨 두는 설계가 좋은 UX에 가깝습니다.</p>\n<h3>출처</h3>\n<ul><li><a href=\"https://css-tricks.com/dark-mode-toggles-two-states-are-enough/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">CSS-Tricks: Dark mode toggles: two states are enough ↗</a></li><li><a href=\"https://css-tricks.com/whats-important-19/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">CSS-Tricks: What's !important #19 ↗</a></li></ul>",
    "source": "CSS-Tricks",
    "sourceUrl": "https://css-tricks.com/dark-mode-toggles-two-states-are-enough/",
    "tags": [
      "CSS",
      "Dark Mode",
      "UX"
    ],
    "thumb": ""
  },
  {
    "id": "2026-10-28-no-long-term-plan-emergence",
    "category": "pm",
    "date": "2026-10-28",
    "title": "장기 계획이 없어도 괜찮다: 창발형 커리어와 제품 전략",
    "rawTitle": "What if you're not supposed to have a long-term plan?",
    "summary": "정교한 계획 대신 단순한 원칙을 쌓아 결과가 창발하게 하라는 제안을, Guideline의 PMF 사례와 함께 비교해 본다.",
    "bodyHtml": "<p>\"5년 뒤 어디에 있고 싶은가요?\"라는 질문에 막힌 적이 있다면 이 글이 위로가 됩니다. Molly Graham은 Lenny's Newsletter에서 장기 계획이 없어도 괜찮고, 오히려 없는 편이 나을 수 있다고 말합니다. 개념은 '창발(emergence)'입니다. 단순한 원칙이 쌓여 복잡한 결과가 만들어진다는 관점입니다.</p>\n<blockquote>\"An outcome no single bird designed or planned\"<cite>Lenny's Newsletter</cite></blockquote>\n<h3>무슨 일인가</h3>\n<p>글은 찌르레기 떼의 군무에 비유합니다. 중앙 설계자 없이 각자가 이웃과의 거리 같은 단순한 규칙만 지켜도 거대한 패턴이 나옵니다. 성공한 사람들도 돌아보면 전략적으로 보일 뿐, 당시에는 에너지와 원칙을 따라 움직였다는 겁니다. 저자는 하루의 에너지를 1~10점으로 기록하고, 정점의 순간을 되짚어 자신만의 '로컬 규칙'을 찾으라고 제안합니다.</p>\n<h3>여러 시각</h3>\n<p>같은 \"계획\" 문제를 First Round Review의 Guideline 사례는 정반대 각도에서 보여 줍니다.</p>\n<ul><li><b>First Round Review</b> — Guideline은 TaskRabbit 직원의 401(k) 가입률이 36%에 그친다는 문제를 출발점 삼아 풀스택을 직접 만들고 401(k) 하나로 범위를 좁혔습니다. 0% 자산 수수료와 자동 가입이라는 뚜렷한 가설이 있었지만, 초기 영업 실패에서 Gusto 파트너십이라는 예상 밖 경로가 열렸습니다.</li></ul>\n<p>두 글 모두 명확한 원칙과 집중이 있고 정확한 도착지는 없다는 점에서 만납니다.</p>\n<h3>왜 중요한가</h3>\n<p>제품 로드맵과 커리어 모두 불확실성 속에서 움직입니다. 정교한 계획이 실행을 늦추는 순간이 흔합니다. 원칙을 먼저 정하면 결과가 달라져도 방향이 흔들리지 않습니다. 팀 차원에서는 \"무엇을 만들까\"보다 \"무엇은 절대 하지 않을까\"를 합의하는 것이 더 강한 정렬 장치가 됩니다.</p>\n<h3>실무 적용</h3>\n<ul><li>로드맵에 기능 목록 대신 3~5개의 의사결정 원칙을 함께 적어 두세요.</li><li>분기마다 가장 에너지가 올랐던 업무를 기록해 다음 분기의 우선순위 단서로 쓰세요.</li><li>초기 실패는 폐기하지 말고 예상 밖 경로의 신호인지 회고하세요.</li></ul>\n<h3>Kenny의 관점</h3>\n<p>PM·PL 일을 하며 계획이 어긋나는 장면을 자주 봤습니다. 문제는 계획 자체가 아니라 계획에 대한 집착이었습니다. 저는 계획을 가설로 두고 원칙은 고정하는 방식을 선호합니다. AX 프로젝트처럼 기술 변화가 빠른 영역에서는 이 접근이 더 잘 맞습니다. 로드맵은 지도가 아니라 나침반에 가깝다고 생각합니다.</p>\n<h3>출처</h3>\n<ul><li><a href=\"https://www.lennysnewsletter.com/p/what-if-youre-not-supposed-to-have\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Lenny's Newsletter: What if you're not supposed to have a long-term plan? ↗</a></li><li><a href=\"https://review.firstround.com/guidelines-path-to-product-market-fit/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">First Round Review: Guideline's Path to Product-Market Fit ↗</a></li></ul>",
    "source": "Lenny's Newsletter",
    "sourceUrl": "https://www.lennysnewsletter.com/p/what-if-youre-not-supposed-to-have",
    "tags": [
      "Product Management",
      "Strategy",
      "Career"
    ],
    "thumb": ""
  },
  {
    "id": "2026-10-27-data-quality-testing-trust",
    "category": "plan",
    "date": "2026-10-27",
    "title": "데이터 품질 테스트는 인터페이스가 아닌 신뢰에서 시작한다",
    "rawTitle": "Testing data quality effectively",
    "summary": "데이터에는 소프트웨어 같은 겉모습이 없다. 사용자 가치에서 출발하는 품질 차원과 메달리온·WAP·데이터 계약이 테스트 설계의 뼈대가 된다.",
    "bodyHtml": "<p>화면과 API가 있는 소프트웨어와 달리 데이터는 관찰할 만한 인터페이스가 거의 없습니다. 그래서 익숙한 테스트 기법을 그대로 옮기면 \"행이 몇 개인가\" 수준의 확인에 머물기 쉽습니다. Ministry of Testing에 실린 Bob Salmon의 글은 이 지점을 정면으로 짚습니다. AI 기능이 늘며 데이터 파이프라인이 제품 품질의 상류가 된 지금, 기획 단계의 품질 기준 설정과 QA 전략을 함께 다시 보게 만드는 글입니다.</p>\n<blockquote>\"Garbage in, garbage out\"<cite>Ministry of Testing</cite></blockquote>\n<h3>무슨 일인가</h3>\n<p>글의 출발점은 데이터가 소프트웨어와 다르다는 진단입니다. 겉으로 드러나는 껍데기가 없고 계약이 느슨하며, 입력과 결과 사이의 인과를 머릿속에 그리기 어렵습니다. 대신 먼저 \"이 데이터를 누가, 어떤 문제를 풀려고 쓰는가\"를 묻고, 정확성·완전성·유효성·일관성·적시성·유일성의 여섯 차원으로 품질을 쪼개 보라고 제안합니다. 문제를 막는 패턴으로는 브론즈·실버·골드 단계의 메달리온 구조, 검증 후 공개하는 Write-Audit-Publish, 사람이 읽을 수 있는 YAML 형태로 버전 관리하는 데이터 계약을 듭니다.</p>\n<h3>여러 시각</h3>\n<p>같은 문제를 AI 제품 쪽에서 보면 접근이 비슷하면서도 출발점이 다릅니다.</p>\n<ul><li><b>Lenny's Newsletter(Hamel Husain·Shreya Shankar)</b> — AI 제품은 지표부터 만들지 말고 먼저 오류 발견(error discovery)을 하라고 합니다. 실제 세션 트레이스 약 100건을 사람과 에이전트가 함께 검토해 실패 유형을 묶고 빈도를 세는 방식입니다.</li><li><b>Ministry of Testing</b> — 반대로 파이프라인 단계마다 검증 지점을 심어 문제가 퍼지기 전에 막는 예방 쪽에 무게를 둡니다.</li></ul>\n<p>한쪽은 \"무엇이 깨지는지 관찰해서 배운다\", 다른 쪽은 \"깨지지 않을 구조를 만든다\"입니다. 둘은 경쟁이 아니라 순서의 문제로 읽힙니다.</p>\n<h3>왜 중요한가</h3>\n<p>데이터와 모델 출력의 품질 문제는 하류로 갈수록 커지고, 발견 시점이 늦을수록 원인 추적 비용이 급증합니다. 그런데 요구사항 문서에는 \"정확한 데이터\"처럼 검증 불가능한 문장이 자주 적힙니다. 품질 차원을 수용 기준으로 번역하지 않으면 QA는 무엇을 통과 기준으로 삼을지 알 수 없습니다. 기획과 QA가 같은 언어를 쓰는 순간 품질은 사후 점검이 아니라 설계 입력이 됩니다.</p>\n<h3>실무 적용</h3>\n<ul><li>요구사항에 \"누가 이 데이터로 어떤 결정을 내리는가\"를 먼저 적고, 여섯 품질 차원 중 중요한 두세 개만 측정 가능한 수용 기준으로 바꾼다.</li><li>수집 단계 원본(브론즈)과 가공 결과(골드) 사이에 검증 지점을 두고, 실패 시 공개를 막는 게이트를 둔다.</li><li>AI 기능은 출시 전 실제 트레이스 100건 안팎을 직접 읽고 실패 유형을 빈도순으로 정리해 테스트 우선순위로 쓴다.</li></ul>\n<h3>Kenny의 관점</h3>\n<p>프론트엔드 개발자로서 가장 자주 마주치는 장애는 화면 버그가 아니라 \"화면이 정직하게 보여준 나쁜 데이터\"입니다. UI 테스트가 아무리 촘촘해도 상류 데이터가 흔들리면 사용자는 제품 전체를 불신합니다. AX 프로젝트에서도 모델 정확도보다 입력 데이터의 계약을 먼저 합의하는 쪽이 재작업을 크게 줄였다고 느낍니다. 결국 기획자가 품질 기준을 문장으로 남기고 QA가 그것을 게이트로 만드는 협업이 가장 값싼 보험이라고 봅니다.</p>\n<h3>출처</h3>\n<ul><li><a href=\"https://www.ministryoftesting.com/insights/testing-data-quality-effectively\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Ministry of Testing: Testing data quality effectively ↗</a></li><li><a href=\"https://www.lennysnewsletter.com/p/advanced-evals-how-to-find-and-fix\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Lenny's Newsletter: Advanced evals: How to find (and fix) hidden AI failures in your product ↗</a></li></ul>",
    "source": "Ministry of Testing",
    "sourceUrl": "https://www.ministryoftesting.com/insights/testing-data-quality-effectively",
    "tags": [
      "QA",
      "DataQuality",
      "Evals"
    ],
    "thumb": ""
  },
  {
    "id": "2026-10-27-say-yes-more-accurately",
    "category": "pm",
    "date": "2026-10-27",
    "title": "거절하는 PM에서 더 정확히 승인하는 PM으로",
    "rawTitle": "I spent years getting paid to say no. Then I learned to say yes, more accurately",
    "summary": "사기 방지 PM이 차단이 아닌 정밀도로 목표를 재정의하자 손실은 그대로인데 분기 매출이 1,900만 달러 늘었다. 복제가 쉬운 시대의 해자 논의와 함께 읽는다.",
    "bodyHtml": "<p>리스크를 다루는 PM의 성과 지표는 보통 손실 감소입니다. 의심스러우면 막는 것이 가장 안전해 보이기 때문입니다. Mind the Product에 실린 Amey Farde의 글은 그 지표 자체가 틀렸을 수 있다고 말합니다. 사업기획 관점에서 \"우리가 막는 것\"과 \"우리가 놓치는 매출\"을 같은 장부에 올리는 방법을 보여주는 사례입니다.</p>\n<blockquote>\"A wrongly declined good customer is a loss too. It just shows up on somebody else's P&amp;L.\"<cite>Mind the Product</cite></blockquote>\n<h3>무슨 일인가</h3>\n<p>저자는 JPMorgan Chase에서 손실 중심으로, Walmart eCommerce에서 고객 영향 중심으로, 이후 Sift에서 정밀도 중심으로 역할을 넓혀 왔다고 소개합니다. 핵심 변화는 고정 임계값을 실시간 트래픽 대비 상대 순위를 매기는 백분위 방식으로 바꾼 것입니다. 이렇게 하자 플래시 세일 때 몰린 정상 구매자가 한꺼번에 거절당하는 일이 줄었습니다. 저자는 이 튜닝이 사기 손실은 그대로 두면서 단일 분기 1,900만 달러의 매출 증가로 이어졌고 차지백 비율도 내려갔다고 밝힙니다. 여기에 차단율 상승이 실제 공격 증가와 맞물리는지 감시하는 안정화 장치와, 리스크·성장 팀이 거짓 거절의 금액을 기준으로 함께 보는 분기 로드맵 리뷰가 더해졌습니다.</p>\n<h3>여러 시각</h3>\n<p>같은 \"지키는 것의 가치\"를 다른 각도에서 본 글이 있습니다.</p>\n<ul><li><b>Mind the Product(Rob Ferguson, Fireworks AI)</b> — 기능은 며칠이면 95~97%까지 복제되므로 방어선은 기능이 아니라 고객과의 관계, 데이터, 분명한 관점이라고 말합니다. \"관계는 디자인보다 복제하기 어렵다\"는 문장이 요약입니다.</li><li><b>Mind the Product(Amey Farde)</b> — 방어는 막는 것이 아니라 정확하게 통과시키는 것이라고 봅니다. 고객 한 명을 잘못 거절하는 순간 관계라는 해자가 깎입니다.</li></ul>\n<p>두 글을 겹치면 정밀도는 단순한 운영 지표가 아니라 관계를 지키는 전략 지표가 됩니다.</p>\n<h3>왜 중요한가</h3>\n<p>부서마다 지표가 다르면 각자 합리적으로 행동해도 회사 전체는 손해를 봅니다. 리스크팀의 손실 절감은 성장팀의 전환율 하락으로 나타나고, 그 비용은 다른 손익계산서에 찍힙니다. 공통 단위인 금액으로 비용을 환산해 같은 회의에서 보면 우선순위 다툼이 데이터 논의로 바뀝니다. 복제가 쉬운 시장일수록 이런 내부 정렬이 곧 실행 속도의 차이가 됩니다.</p>\n<h3>실무 적용</h3>\n<ul><li>\"차단·거절·반려\"로 끝나는 지표에는 반드시 짝이 되는 \"놓친 가치\"를 금액으로 병기한다.</li><li>고정 임계값 대신 상대 기준(백분위)을 도입해 트래픽 급증기의 오탐을 줄이는 방안을 검토한다.</li><li>상충하는 목표를 가진 두 팀이 분기마다 같은 로드맵 리뷰에서 같은 화폐 단위로 우선순위를 정한다.</li></ul>\n<h3>Kenny의 관점</h3>\n<p>서비스를 만들다 보면 \"안전하게 막는 UX\"가 얼마나 쉽게 전환율을 갉아먹는지 자주 봅니다. 과한 인증 단계나 모호한 오류 문구는 보안 장치이기 전에 이탈 장치입니다. PM으로서는 지표를 하나 정할 때 그 지표가 다른 팀 손익에 남길 그림자를 함께 적는 습관이 중요하다고 생각합니다. 정확하게 \"예\"라고 말하는 능력이 AI 시대에 복제되지 않는 제품 감각이라고 봅니다.</p>\n<h3>출처</h3>\n<ul><li><a href=\"https://www.mindtheproduct.com/i-spent-years-getting-paid-to-say-no-then-i-learned-to-say-yes-more-accurately/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Mind the Product: I spent years getting paid to say no. Then I learned to say yes, more accurately ↗</a></li><li><a href=\"https://www.mindtheproduct.com/how-to-make-your-customers-stay-when-anyone-can-copy-your-product-rob-ferguson-vp-fireworks-ai/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Mind the Product: How to make your customers stay when anyone can copy your product | Rob Ferguson ↗</a></li></ul>",
    "source": "Mind the Product",
    "sourceUrl": "https://www.mindtheproduct.com/i-spent-years-getting-paid-to-say-no-then-i-learned-to-say-yes-more-accurately/",
    "tags": [
      "ProductManagement",
      "Metrics",
      "Strategy"
    ],
    "thumb": ""
  },
  {
    "id": "2026-10-26-animating-css-border-image",
    "category": "design",
    "date": "2026-10-26",
    "title": "border-image도 움직인다: @property로 만드는 그라디언트 테두리",
    "rawTitle": "Animating CSS border-image",
    "summary": "등록된 커스텀 속성(@property)을 쓰면 border-image 안의 그라디언트를 부드럽게 전환할 수 있다. 코드 한 줄 수준의 테두리 모션 기법을 정리했다.",
    "bodyHtml": "<p>테두리에 그라디언트가 차오르거나 회전하는 효과는 보통 의사 요소나 SVG, 래퍼 요소를 겹쳐서 만들어 왔습니다. CSS-Tricks에 올라온 Preethi의 글은 border-image 하나로 같은 효과를 만드는 방법을 보여줍니다. 열쇠는 @property로 등록한 커스텀 속성입니다. 마크업을 늘리지 않고도 인터랙션 피드백을 줄 수 있어 UI 모션을 설계하는 쪽에서 눈여겨볼 만합니다.</p><blockquote>\"I like border-image because it's super efficient, especially when it comes to animating border images and gradients.\"<cite>CSS-Tricks</cite></blockquote><h3>무슨 일인가</h3><p>핵심 아이디어는 그라디언트 안의 숫자를 변수로 빼고, 그 변수에 타입을 부여하는 것입니다. 예를 들어 percentage나 angle 문법으로 등록한 --p를 linear-gradient의 색상 정지점에 쓰고, hover 때 transition으로 값을 바꾸면 브라우저가 중간 값을 보간합니다. 등록하지 않은 변수는 문자열로만 취급돼 전환이 일어나지 않고 값이 뚝 바뀝니다. 두께는 border-image-width, 간격은 border-image-outset, 채움 방식은 border-image-slice로 조절합니다. 한계도 분명해서, border-image는 border-radius를 따라 휘지 않기 때문에 둥근 모서리가 필요한 곳에서는 우회가 필요하다고 글은 짚습니다.</p><h3>여러 시각</h3><p>같은 문제를 다른 도구로 푸는 글도 이미 여럿 있습니다.</p><ul><li><b>web.dev</b> — @property가 2024년 7월부터 세 주요 엔진 모두에서 지원되는 Baseline이 되었다고 정리합니다. 타입이 있는 변수 덕분에 그라디언트 애니메이션이 실무에서 쓸 수 있는 선택지가 되었다는 시각입니다.</li><li><b>web.dev(conic-gradient 테두리 글)</b> — conic-gradient의 시작 각도를 변수로 돌려 회전하는 테두리를 만드는 접근을 다룹니다. 둥근 모서리가 필요하면 이쪽이 더 자연스러운 대안입니다.</li></ul><h3>왜 중요한가</h3><p>예전에는 그라디언트 테두리 애니메이션이 곧 추가 DOM이나 JS였습니다. 이제 CSS 한 블록으로 해결되면 컴포넌트가 단순해지고, 디자인 시스템에서 상태별 모션을 토큰처럼 관리하기 쉬워집니다. 다만 border-radius와 충돌하는 제약을 모르고 쓰면 디자이너와 구현 사이에 어긋남이 생깁니다. 기법의 장점과 한계를 같이 알고 있어야 시안 단계에서 현실적인 약속을 할 수 있습니다.</p><h3>실무 적용</h3><ul><li>버튼·입력창의 hover/focus 피드백에 border-image 기반 그라디언트 전환을 시험하고, 둥근 모서리가 필요한 곳은 conic-gradient 방식으로 나눠 쓴다.</li><li>@property로 등록한 변수는 디자인 토큰 문서에 타입과 초기값까지 함께 기록한다.</li><li>prefers-reduced-motion 환경에서는 전환을 끄고 정적인 테두리만 남기는 폴백을 기본으로 넣는다.</li></ul><h3>Kenny의 관점</h3><p>프론트엔드 관점에서 이 글의 가치는 새 기능이 아니라 \"이미 있는 속성을 제대로 조합하는 법\"에 있습니다. 모션을 위해 요소를 더하는 습관을 버리면 접근성 트리도, 번들도 가벼워집니다. 한편 한계를 숨기지 않고 적은 점이 좋았습니다. 팀에서는 이런 기법을 도입할 때 데모의 화려함보다 대체 수단과 폴백을 먼저 합의하려 합니다. 작은 CSS 기법이 UX 품질 기준을 어떻게 바꾸는지 계속 기록해 둘 생각입니다.</p><h3>출처</h3><ul><li><a href=\"https://css-tricks.com/animating-css-border-image/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">CSS-Tricks: Animating CSS border-image ↗</a></li><li><a href=\"https://web.dev/blog/at-property-baseline\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">web.dev: @property: Next-gen CSS variables now with universal browser support ↗</a></li><li><a href=\"https://web.dev/articles/conic-gradient-border\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">web.dev: Use conic gradients to create a cool border ↗</a></li></ul>",
    "source": "CSS-Tricks",
    "sourceUrl": "https://css-tricks.com/animating-css-border-image/",
    "tags": [
      "CSS",
      "border-image",
      "@property"
    ],
    "thumb": ""
  },
  {
    "id": "2026-10-26-anthropic-independent-evaluators",
    "category": "ai",
    "date": "2026-10-26",
    "title": "외부 평가자를 사내에 들인다: Anthropic과 METR의 임베디드 평가",
    "rawTitle": "An update on independent evaluators",
    "summary": "Anthropic이 비영리 평가기관 METR 팀에 직원에 준하는 접근 권한을 주고 독립 게재권까지 보장했다. 프런티어 AI 감독 방식의 실험이다.",
    "bodyHtml": "<p>Anthropic이 독립 평가자 관련 업데이트를 내놓았습니다. 비영리 AI 평가기관 METR의 팀에게 사내 시스템에 대한 직원에 준하는 접근 권한을 주고, 평가 결과를 독립적으로 발표할 수 있게 한다는 내용입니다. 모델을 완성한 뒤 밖에서 시험하는 기존 방식에서 한 걸음 더 들어간 구조입니다. AI 도구를 업무에 깊이 들이는 기업이라면 공급자의 안전 검증이 어떻게 이뤄지는지 알아둘 필요가 있습니다.</p><blockquote>\"We aim to close the gap between what evaluators understand about a frontier AI company's systems and what the company itself understands.\"<cite>Anthropic</cite></blockquote><h3>무슨 일인가</h3><p>발표에 따르면 METR 소속 직원 여섯 명이 회사 장비와 사무 공간, 내부 시스템 접근권을 받습니다. 접근 범위는 Anthropic 자체 위험 평가팀과 비슷한 수준이지만 고객 데이터, 변호사-의뢰인 간 비밀 자료, 모델 아키텍처 세부 정보는 제외됩니다. METR은 결과를 직접 공개할 수 있으나 기밀 범주에 해당하면 Anthropic이 삭제를 요구할 수 있습니다. 공개하기 어려운 안전 정보를 제3자가 대신 확인해 근거와 결론을 알려 주는 다리 역할을 하겠다는 취지입니다. 한계로는 소규모 팀이라는 점, 다른 METR 연구자와 분리 운영된다는 점, 무엇이 삭제 대상인지 최종 판단이 회사에 있다는 점이 눈에 띕니다.</p><h3>여러 시각</h3><p>이 방식이 충분한지는 다른 보도와 함께 볼 때 더 분명해집니다.</p><ul><li><b>MIT Technology Review</b> — AI 에이전트 사고의 책임 문제를 다루며, OpenAI가 Hugging Face 침해 사건 뒤 METR 등을 불렀지만 접근과 공개 범위가 제한됐다고 짚습니다. 현행 주법 대부분은 외부 감사를 의무화하지 않고 일리노이 SB 315만 2028년부터 연례 제3자 감사를 요구한다고 정리합니다.</li><li><b>Anthropic</b> — 자발적 약속과 집행 가능한 계약으로 접근 권한을 보장하는 쪽에 무게를 두며, 격차를 줄이는 것 자체를 목표로 삼습니다.</li></ul><h3>왜 중요한가</h3><p>법적 의무가 약한 상태에서는 감사의 품질이 사실상 기업의 선의에 기대게 됩니다. 접근 범위와 게재권을 계약으로 명시한 이번 사례는 하나의 기준점이 될 수 있습니다. 반대로 삭제 판단권이 회사에 남아 있는 한 독립성 논란은 계속될 것입니다. 기업 고객 입장에서는 공급자 선택 기준에 \"외부 평가가 어떤 조건으로 이뤄지는가\"가 들어갈 시점이 되었습니다.</p><h3>실무 적용</h3><ul><li>AI 도구 도입 검토서에 공급자의 외부 평가 체계(평가자, 접근 범위, 공개 방식)를 확인 항목으로 추가한다.</li><li>에이전트를 업무에 붙일 때는 사고 보고와 책임 소재를 내부 기준으로 먼저 정해 둔다.</li><li>벤더가 공개한 안전 문서는 요약본이 아니라 평가 조건과 제외 범위까지 읽는다.</li></ul><h3>Kenny의 관점</h3><p>AX를 추진하는 입장에서 모델 성능만큼 중요한 것이 \"이 시스템을 누가 어떤 조건으로 검증했는가\"입니다. 이번 발표는 완벽한 해답이라기보다 투명성의 기준선을 올리는 시도로 읽힙니다. 저는 팀 내 AI 도입 기준에도 같은 질문을 넣으려 합니다. 성능 벤치마크 옆에 검증 조건과 한계를 함께 적는 습관이, 결국 사용자와 고객의 신뢰를 지키는 가장 실무적인 방법이라고 생각합니다.</p><h3>출처</h3><ul><li><a href=\"https://www.anthropic.com/news/an-update-on-independent-evaluators\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Anthropic: An update on independent evaluators ↗</a></li><li><a href=\"https://www.technologyreview.com/2026/09/28/1145197/whos-liable-when-ai-agents-go-rogue/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">MIT Technology Review: Who’s liable when AI agents go rogue? ↗</a></li></ul>",
    "source": "Anthropic",
    "sourceUrl": "https://www.anthropic.com/news/an-update-on-independent-evaluators",
    "tags": [
      "AI Safety",
      "Evaluation",
      "METR"
    ],
    "thumb": ""
  },
  {
    "id": "2026-10-25-agent-skills-agentic-ai-foundation",
    "category": "ai",
    "date": "2026-10-25",
    "title": "Agent Skills, 벤더 중립 재단으로 옮겨가다",
    "rawTitle": "Donating Agent Skills to the Agentic AI Foundation",
    "summary": "Anthropic이 Agent Skills 표준의 명칭·로고·GitHub 조직·도메인을 Agentic AI Foundation에 기부했다. 에이전트 확장 규격이 한 회사의 손을 떠났다.",
    "bodyHtml": "<p>Anthropic이 에이전트에게 절차적 전문성을 주입하는 개방형 규격 Agent Skills를 Linux Foundation 산하 Agentic AI Foundation(AAIF)에 기부했다. 지난해 12월 개방형 표준으로 공개된 지 약 10개월 만의 일이다. 이름과 로고, GitHub 조직, agentskills.io 도메인까지 넘겼다는 점에서 상징적 선언을 넘어 실질적 소유권 이전이다. AI 에이전트를 제품에 붙이는 팀이라면 이 규격의 거버넌스가 바뀐 이유를 눈여겨볼 만하다.</p>\n<blockquote>\"We're committed to keeping Agent Skills open, community-driven, and vendor-neutral.\"<cite>Anthropic</cite></blockquote>\n<h3>무슨 일인가</h3>\n<p>Agent Skills는 Claude Code를 만들며 나온 아이디어다. 범용 지식 작업은 잘하지만 실제 업무에 필요한 절차적 노하우가 부족했던 문제를, SKILL.md 메타데이터와 스크립트·리소스를 담은 디렉터리로 풀었다. 에이전트는 요청이 스킬의 영역과 맞을 때만 필요한 내용을 불러오는 '점진적 공개' 방식으로 컨텍스트를 아낀다. 발표에 따르면 공개 이후 70개 넘는 에이전트 플랫폼이 도입했고, 커뮤니티가 약 100만 개의 스킬을 게시했으며 설치는 2억 8천만 건에 육박한다. 이제 Anthropic과 Google, OpenAI 등의 엔지니어가 개인 자격으로 공동 유지보수하고, 버전 릴리스와 공식 제안 절차로 규격이 움직인다.</p>\n<h3>여러 시각</h3>\n<p>같은 흐름을 두고 매체들은 '표준 선점 전략'과 '생태계 인프라'라는 서로 다른 각도로 읽는다.</p>\n<ul><li><b>VentureBeat</b> — 지난해 개방 당시 이를 엔터프라이즈 시장에서 입지를 굳히려는 전략적 베팅으로 해석했고, Microsoft·Atlassian·Figma 등 파트너 도입을 근거로 들었다.</li><li><b>Unite.AI</b> — MCP를 Linux Foundation에 넘긴 선례와 이어 붙여, 산업 인프라를 만들어 온 Anthropic의 패턴으로 설명했다.</li></ul>\n<h3>왜 중요한가</h3>\n<p>MCP가 에이전트와 도구를 잇는 배선이라면, Skills는 에이전트에게 업무 방식을 가르치는 매뉴얼이다. 두 규격이 모두 중립 재단에 자리 잡으면서 에이전트 확장 계층의 표준화가 거의 마무리 단계에 들어섰다. 기업 입장에서는 특정 벤더에 종속되지 않고 스킬 자산을 쌓을 수 있다는 신호가 된다. 반대로 경쟁사 엔지니어가 함께 유지보수하는 만큼 규격 변경 속도는 느려지고 합의 비용은 커질 수 있다.</p>\n<h3>실무 적용</h3>\n<ul><li>사내 반복 업무 절차를 SKILL.md 형태로 문서화해 두면 어떤 에이전트 도구로 옮겨도 재사용할 수 있다.</li><li>스킬 설명 메타데이터는 검색·호출의 기준이므로 트리거 조건을 구체적으로 쓴다.</li><li>외부 스킬을 설치하기 전에는 포함된 스크립트와 권한 범위를 코드 리뷰하듯 확인한다.</li></ul>\n<h3>Kenny의 관점</h3>\n<p>프론트엔드 개발자에게 스킬은 디자인 시스템 문서와 닮았다. 컴포넌트 사용 규칙을 사람이 아닌 에이전트가 읽도록 정리하는 일이기 때문이다. AX 관점에서 진짜 자산은 모델이 아니라 우리 조직의 절차를 담은 이런 문서라고 본다. 규격이 중립이 되었으니 이제 투자 대상은 규격 선택이 아니라 좋은 스킬을 쓰는 습관이다.</p>\n<h3>출처</h3>\n<ul><li><a href=\"https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Anthropic: Donating Agent Skills to the Agentic AI Foundation ↗</a></li><li><a href=\"https://venturebeat.com/ai/anthropic-launches-enterprise-agent-skills-and-opens-the-standard\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">VentureBeat: Anthropic launches enterprise agent skills and opens the standard ↗</a></li><li><a href=\"https://www.unite.ai/anthropic-opens-agent-skills-standard-continuing-its-pattern-of-building-industry-infrastructure\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Unite.AI: Anthropic opens Agent Skills standard ↗</a></li></ul>",
    "source": "Anthropic",
    "sourceUrl": "https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation",
    "tags": [
      "AgentSkills",
      "OpenStandard",
      "AX"
    ],
    "thumb": ""
  },
  {
    "id": "2026-10-25-systems-thinking-for-pms",
    "category": "plan",
    "date": "2026-10-25",
    "title": "기능 공장을 넘어, PM의 시스템 사고 가이드",
    "rawTitle": "A guide to systems thinking for Product Managers",
    "summary": "제품을 기능 목록이 아닌 서로 얽힌 시스템으로 보라는 제안. 변경이 파급되는 2차 효과를 미리 읽는 것이 기획과 QA의 공통 과제다.",
    "bodyHtml": "<p>Mind the Product에 실린 이 글은 제품 관리의 시선을 '기능을 얼마나 빨리 내보내는가'에서 '제품이 어떤 시스템 안에서 움직이는가'로 옮기자고 제안한다. 요구사항을 쌓는 선형 방식은 한 곳의 변경이 다른 곳에서 문제를 일으키는 순간 한계를 드러낸다. 기획자와 QA가 같은 지도를 보고 싶다면 읽어볼 만한 출발점이다.</p>\n<blockquote>\"A system as a set of interrelated components that work together to perform whatever functions are required to achieve the system's objectives.\"<cite>Mind the Product</cite></blockquote>\n<h3>무슨 일인가</h3>\n<p>필자는 피터 센게의 『학습하는 조직』이 대중화한 '전체를 보는 훈련'과 도넬라 메도즈의 시스템 정의를 바탕에 둔다. 여기에 존 커틀러의 관점, 곧 시스템 사고를 제품이 환경·내부 구조와 어떻게 맞물리는지 아는 '상황 인식'으로 보는 시각을 더한다. 핵심은 정지된 스냅샷 대신 패턴과 연결을 읽어 의사결정의 2차 효과를 예상하는 것이다. 제품을 한 번 출시하고 끝나는 산출물이 아니라 계속 유지보수해야 하는 살아 있는 시스템으로 대한다는 점이 결론이다.</p>\n<h3>여러 시각</h3>\n<p>같은 사고방식은 품질 쪽에서도 다른 언어로 나타난다.</p>\n<ul><li><b>Ministry of Testing</b> — AI Risk List 연재에서 차별, 개인정보, 오용, 인간-컴퓨터 상호작용, 사회·환경 영향까지 위험 범주를 나눠 제품 전체를 훑는 점검 틀을 제시한다. 시스템의 어느 면이 깨질 수 있는지 목록으로 만드는 접근이다.</li></ul>\n<h3>왜 중요한가</h3>\n<p>기능 하나를 추가할 때 영향은 화면, 데이터, 운영, 사용자 기대까지 번진다. 기획 단계에서 이 연결을 그려 두면 QA는 무엇을 회귀 테스트해야 할지 근거를 갖는다. 반대로 연결을 모르는 채 출시 속도만 높이면 장애와 신뢰 하락이 뒤늦게 청구된다. AI 기능처럼 결과가 비결정적인 제품에서는 이 차이가 더 커진다.</p>\n<h3>실무 적용</h3>\n<ul><li>요구사항 문서에 '이 변경이 영향을 주는 영역' 항목을 넣고 인과 관계를 간단한 그림으로 남긴다.</li><li>테스트 계획을 기능 목록이 아니라 위험 범주(데이터·UX·보안·운영) 기준으로 한 번 더 점검한다.</li><li>출시 후 지표를 한 개가 아닌 서로 견제하는 2~3개로 묶어 본다.</li></ul>\n<h3>Kenny의 관점</h3>\n<p>프론트엔드를 하다 보면 작은 스타일 변경이 전혀 다른 페이지를 깨뜨리는 경험이 흔하다. 이것이 바로 시스템 사고가 필요한 이유라고 생각한다. 기획과 QA를 나누어 보지 않고 같은 의존성 지도를 공유하면 리뷰와 테스트 비용이 함께 줄어든다. AI 기능을 붙일 때는 상호작용 실패 시 사용자에게 제어권을 돌려주는 경로까지 시스템의 일부로 설계해야 한다.</p>\n<h3>출처</h3>\n<ul><li><a href=\"https://www.mindtheproduct.com/a-guide-to-systems-thinking-for-product-managers/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Mind the Product: A guide to systems thinking for Product Managers ↗</a></li><li><a href=\"https://www.ministryoftesting.com/insights/ai-risk-list-human-computer-interaction-5\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Ministry of Testing: AI Risk List: Human-Computer Interaction (5) ↗</a></li></ul>",
    "source": "Mind the Product",
    "sourceUrl": "https://www.mindtheproduct.com/a-guide-to-systems-thinking-for-product-managers/",
    "tags": [
      "SystemsThinking",
      "ProductPlanning",
      "QA"
    ],
    "thumb": ""
  },
  {
    "id": "2026-10-24-document-pip-widgets",
    "category": "design",
    "date": "2026-10-24",
    "title": "문서 PiP API로 만드는 떠 있는 웹 위젯과 CSS의 함정",
    "rawTitle": "Creating Web Widgets Using the Document Picture-in-Picture API",
    "summary": "Document Picture-in-Picture API로 타이머·채팅 같은 위젯을 별도 창에 띄울 수 있다. 다만 컴포넌트를 문맥 밖으로 옮기면 CSS가 깨진다는 점이 핵심 주의사항이다.",
    "bodyHtml": "<p>CSS-Tricks가 Document Picture-in-Picture(DPiP) API로 웹 위젯을 만드는 방법을 소개했다. 영상만 띄우던 기존 PiP와 달리, 임의의 HTML 요소를 항상 위에 떠 있는 별도 창으로 옮길 수 있다. 주식 시세, 채팅, 할 일 목록처럼 다른 작업 중에도 곁눈으로 봐야 하는 UI에 어울린다. 지원 범위가 넓어지는 지금이 설계에 반영해 볼 시점이다.</p><blockquote>\"Taking a HTML component out of context can break the CSS.\"<cite>CSS-Tricks</cite></blockquote><h3>무슨 일인가</h3><p>사용법은 단순하다. <code>\"documentPictureInPicture\" in window</code>로 지원 여부를 확인하고, <code>requestWindow()</code>에 width, height, preferInitialWindowPlacement 같은 옵션을 넘겨 새 창을 연다. 이후 원하는 DOM을 그 창의 document로 옮기거나 복제하면 된다. 창이 열리는 순간은 enter 이벤트로 감지하고, 스타일은 <code>@media (display-mode: picture-in-picture)</code>로 따로 줄 수 있다. 현재 Chrome과 Firefox 151이 지원하고 Safari는 아직이며, 데스크톱 전용이다.</p><h3>여러 시각</h3><p>같은 주 CSS-Tricks의 다른 글은 새 기능을 어떻게 안전하게 쓸지에 대한 힌트를 준다.</p><ul><li><b>CSS-Tricks (What's !important #18)</b> — 새 <code>@supports named-feature()</code>로 앵커 포지셔닝 같은 세부 동작까지 기능 감지를 할 수 있게 되고 있다고 소개한다. 다만 Chrome 위주이며 점진적 향상이 전제다.</li><li><b>CSS-Tricks (같은 글)</b> — Chrome만 지원하는 <code>&lt;geolocation&gt;</code> 요소도 기존 API와 함께 쓰는 점진적 향상을 권한다. DPiP도 같은 접근이 필요하다는 뜻이다.</li></ul><h3>왜 중요한가</h3><p>PiP 창은 웹앱이 브라우저 탭 밖으로 확장되는 첫 번째 본격 사례다. 사용자는 탭을 전환하지 않고도 앱의 핵심 정보를 계속 볼 수 있다. 반면 개발자는 하나의 컴포넌트가 두 개의 문서 환경에서 동작해야 하는 새 제약을 떠안는다. 부모 문서의 스타일시트가 자동으로 따라가지 않으므로, 선택자가 어디서든 성립하도록 컴포넌트를 설계해야 한다. 컴포넌트의 독립성이 곧 품질이 되는 셈이다.</p><h3>실무 적용</h3><ul><li>위젯 컴포넌트는 부모 문서 선택자(예: body 하위 규칙)에 의존하지 않게 만들고 CSS 변수로 테마를 주입한다.</li><li>기능 감지 후 지원하지 않는 브라우저에서는 기존 인페이지 패널로 폴백한다.</li><li>PiP 창 전용 레이아웃은 display-mode 미디어 쿼리로 분리하고 작은 창 크기에서 테스트한다.</li></ul><h3>Kenny의 관점</h3><p>이 API의 진짜 교훈은 기능 자체보다 컴포넌트 경계에 있다고 본다. 디자인 시스템이 토큰과 컴포넌트를 문서 환경에 묶어 두었다면 PiP에서 바로 깨진다. 반대로 토큰이 CSS 변수로 잘 분리된 시스템이라면 복제만으로 동작한다. AI 어시스턴트나 대시보드 요약처럼 곁에 떠 있어야 하는 AX 도구에 특히 잘 맞고, 그래서 지금 컴포넌트 독립성을 점검해 두는 것이 가장 싼 준비라고 생각한다.</p><h3>출처</h3><ul><li><a href=\"https://css-tricks.com/creating-web-widgets-using-the-document-picture-in-picture-api/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">CSS-Tricks: Creating Web Widgets Using the Document Picture-in-Picture API ↗</a></li><li><a href=\"https://css-tricks.com/whats-important-18/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">CSS-Tricks: What's !important #18 ↗</a></li></ul>",
    "source": "CSS-Tricks",
    "sourceUrl": "https://css-tricks.com/creating-web-widgets-using-the-document-picture-in-picture-api/",
    "tags": [
      "CSS",
      "Document PiP",
      "Web Components"
    ],
    "thumb": ""
  },
  {
    "id": "2026-10-24-founder-led-attention",
    "category": "pm",
    "date": "2026-10-24",
    "title": "창업자가 사람들의 관심을 얻는 법: 세 가지 유형과 자율성",
    "rawTitle": "How to make people care about your startup",
    "summary": "Lenny's Newsletter는 창업 동기에 따라 문제형·통찰형·비전형 세 유형의 소통 전략을 제시한다. First Round의 Lovable 사례는 자율과 신뢰가 브랜드의 바탕이라고 말한다.",
    "bodyHtml": "<p>Lenny's Newsletter가 스타트업이 관심을 얻는 방법을 창업자 소통의 관점에서 정리했다. 광고비가 부족한 초기 팀에게 창업자의 목소리는 가장 싸고 효과 큰 자산이라는 주장이다. 핵심은 채널이나 기법이 아니라 왜 이 회사를 시작했는가라는 질문에서 출발하는 것이다. 같은 시기 First Round Review의 Lovable 브랜드 이야기와 함께 읽으면 입체적으로 보인다.</p><blockquote>\"If your reason was convincing enough for you, it's convincing enough to make other people care too.\"<cite>Lenny's Newsletter</cite></blockquote><h3>무슨 일인가</h3><p>글은 창업자를 세 유형으로 나눈다. 개인적 불편을 해결하려 시작한 문제형 창업자는 솔직하고 구체적인 개인 서사로 고객의 공감을 얻는다. 남들이 놓친 기회를 본 통찰형은 분석적이고 의견이 분명하며 아낌없이 나누는 목소리로 신뢰를 쌓는다. 다른 세상을 그리는 비전형은 확장적이고 희망적인 어조로 믿는 사람들의 움직임을 만든다. 각 유형에 맞는 소통 목표와 어조가 달라서, 남의 방식을 그대로 베끼면 어색해진다는 것이 요지다.</p><h3>여러 시각</h3><p>브랜드는 외부 소통만이 아니라 내부 운영 방식에서도 나온다는 보조 시각이 있다.</p><ul><li><b>First Round Review (Lovable)</b> — 재능 있는 사람에게 결과의 모호함을 맡기고 허락을 구하지 않게 해야 학습 속도가 빨라진다고 본다. 사용성 지표보다 사용자가 느끼는 감정을 중시한다.</li><li><b>Lenny's Newsletter</b> — 반대로 외부 서사의 일관성에 무게를 둔다. 두 글을 합치면 안쪽의 자율성이 바깥의 진정성을 만든다는 그림이 나온다.</li></ul><h3>왜 중요한가</h3><p>제품이 비슷해지는 시대에 차별점은 왜 하는가에서 나온다. 창업 동기를 정직하게 말하는 팀은 마케팅 문구를 새로 만들 필요가 없다. 또한 유형을 알면 어떤 콘텐츠를 만들지, 어떤 채널에서 어떤 어조를 쓸지 선택이 쉬워진다. 내부 문화가 외부 이야기와 어긋나면 신뢰가 빠르게 무너진다는 점도 함께 기억해야 한다.</p><h3>실무 적용</h3><ul><li>팀 킥오프에서 우리가 이 일을 시작한 이유를 한 문장으로 적고, 세 유형 중 무엇에 가까운지 합의한다.</li><li>유형에 맞춰 첫 콘텐츠 형식을 정한다. 문제형은 사용 후기와 사연, 통찰형은 분석 글, 비전형은 선언문이 맞다.</li><li>제품 회의에서 숫자 지표와 함께 사용자가 어떤 감정을 느끼는지 한 줄씩 기록한다.</li></ul><h3>Kenny의 관점</h3><p>프리랜서와 소규모 스튜디오에게도 그대로 적용된다고 생각한다. 포트폴리오는 결과물 나열이 아니라 왜 이 방식으로 만드는가에 대한 일관된 대답이어야 한다. AI 도구가 결과물 품질을 평준화할수록 사람의 동기와 판단이 남는 차별점이 된다. 그래서 기획자나 PM도 기능 명세 못지않게 자기 서사를 정리해 두는 것이 사업기획의 기본기라고 본다.</p><h3>출처</h3><ul><li><a href=\"https://www.lennysnewsletter.com/p/how-to-make-people-care-about-your\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Lenny's Newsletter: How to make people care about your startup ↗</a></li><li><a href=\"https://review.firstround.com/firsthand-lovable/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">First Round Review: Firsthand: How I Built a Brand with Heart at Lovable ↗</a></li></ul>",
    "source": "Lenny's Newsletter",
    "sourceUrl": "https://www.lennysnewsletter.com/p/how-to-make-people-care-about-your",
    "tags": [
      "Startup",
      "Founder Brand",
      "Product Strategy"
    ],
    "thumb": ""
  },
  {
    "id": "2026-10-23-motaverse-gps-quality-model",
    "category": "plan",
    "date": "2026-10-23",
    "title": "GPS 모델로 프로필 페이지를 고치다: 팀 품질의 세 겹",
    "rawTitle": "How we overhauled the MoTaverse profile page",
    "summary": "Ministry of Testing는 그룹·페어·솔로 작업을 겹쳐 쓰는 GPS 모델로 프로필 페이지를 개편했다. 품질은 검사 단계가 아니라 협업 구조에서 나온다는 사례다.",
    "bodyHtml": "<p>테스트 커뮤니티 Ministry of Testing이 자사 플랫폼 MoTaverse의 프로필 페이지를 개편한 과정을 공개했습니다. 흥미로운 점은 결과물보다 일하는 방식입니다. 그룹·페어·솔로 세 가지 작업 방식을 겹쳐 쓰는 'GPS 모델'로 품질을 만들어 갔습니다. 기획과 QA의 경계를 허무는 실전 사례라서 지금 읽어 볼 만합니다.</p>\n<blockquote>\"Community leadership is working out what the community needs and persuading them it's what they want.\"<cite>Ministry of Testing</cite></blockquote>\n<h3>무슨 일인가</h3>\n<p>GPS는 Group, Pair, Solo의 약자입니다. 전체 팀이 모여 방향을 맞추는 그룹 세션, 둘이 설계와 디버깅을 함께 하는 페어 작업, 혼자 구현과 테스트에 집중하는 솔로 작업을 상황에 맞게 오갑니다. 팀은 'My MoT' 설정 개편보다 프로필 페이지를 먼저 하기로 우선순위를 정했고, 전체 페이지보다 프로필 카드 컴포넌트부터 손봤습니다. 모바일에서는 사이드바 내용을 본문 아래로 내리는 방식으로 반응형을 처리했습니다. 정식 유저 스토리 대신 대화 메모만 남겨 속도를 냈고, 모든 피드백을 따르기보다 일부러 무시해 전체 일관성을 지켰다는 점도 눈에 띕니다. 결과적으로 배포 문제 없이 출시했습니다.</p>\n<h3>여러 시각</h3>\n<p>같은 호(號)의 다른 글들과 겹쳐 읽으면 품질을 보는 관점이 더 선명해집니다.</p>\n<ul><li><b>Mind the Product</b> — 'say no'를 잘하는 것보다 '더 정확하게 yes'라고 말하는 것이 성과를 만든다고 봅니다. 막는 것의 비용까지 손익에 넣어야 한다는 관점입니다.</li><li><b>Ministry of Testing(이 글)</b> — 모든 요구를 받지 않고 일부러 무시하는 선택도 품질 활동이라고 봅니다. 두 글 모두 '거절의 정확도'를 기획의 핵심으로 다룹니다.</li></ul>\n<h3>왜 중요한가</h3>\n<p>품질을 마지막 검증 단계로만 보면 문제를 늦게 발견하고 수정 비용이 커집니다. GPS 모델은 품질 확인을 작업 과정 전반에 분산시킵니다. 또 피드백을 취사선택하는 판단은 기획자와 QA가 공유해야 할 책임임을 보여 줍니다. 작은 팀일수록 문서보다 대화와 합의가 빠르다는 점도 시사합니다.</p>\n<h3>실무 적용</h3>\n<ul><li>스프린트 계획 때 이번 작업을 그룹·페어·솔로 중 무엇으로 할지 먼저 정한다.</li><li>큰 화면 개편은 핵심 컴포넌트 하나부터 출시해 위험을 줄인다.</li><li>들어온 피드백은 '채택/보류/제외' 사유를 한 줄씩 기록해 일관성을 지킨다.</li></ul>\n<h3>Kenny의 관점</h3>\n<p>프론트엔드를 만들 때 가장 비싼 결함은 코드 버그가 아니라 맥락이 어긋난 요구입니다. GPS처럼 페어 단계에서 기획 의도와 구현을 바로 맞추면 QA가 나중에 잡을 일이 줄어듭니다. 저는 컴포넌트 단위 출시와 피드백 취사선택 기록을 함께 쓰는 방식이 작은 팀에 가장 현실적이라고 봅니다. 문서를 줄이되 결정의 이유만은 남기는 것이 핵심입니다.</p>\n<h3>출처</h3>\n<ul><li><a href=\"https://www.ministryoftesting.com/insights/how-we-overhauled-the-motaverse-profile-page\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Ministry of Testing: How we overhauled the MoTaverse profile page ↗</a></li><li><a href=\"https://www.mindtheproduct.com/i-spent-years-getting-paid-to-say-no-then-i-learned-to-say-yes-more-accurately/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Mind the Product: I spent years getting paid to say no. Then I learned to say yes, more accurately ↗</a></li></ul>",
    "source": "Ministry of Testing",
    "sourceUrl": "https://www.ministryoftesting.com/insights/how-we-overhauled-the-motaverse-profile-page",
    "tags": [
      "QA",
      "Quality",
      "Product Planning"
    ],
    "thumb": ""
  },
  {
    "id": "2026-10-23-google-search-swat-teams",
    "category": "pm",
    "date": "2026-10-23",
    "title": "구글 검색팀의 SWAT 조직: 프로토타입으로 빠르게 출시하는 법",
    "rawTitle": "How Google structures its product team, prototypes, and ships fast at scale | Soufi Esmaeilzadeh",
    "summary": "구글 검색 AI의 프로덕트 디렉터는 얇은 SWAT 팀과 프로토타입 중심 의사결정으로 속도를 낸다. 단, 품질 기준은 처음에 정의한다.",
    "bodyHtml": "<p>Mind the Product가 구글 검색의 프로덕트 디렉터 Soufi Esmaeilzadeh의 인터뷰를 실었습니다. 대규모 조직에서 속도를 유지하는 방법이 주제입니다. 핵심은 조직을 얇게 유지하고 토론 대신 동작하는 프로토타입으로 결정하는 것입니다. AI 때문에 제품 변화 주기가 짧아진 지금, PM 조직 설계에 참고할 만합니다.</p>\n<blockquote>\"These are not one-way doors.\"<cite>Soufi Esmaeilzadeh, Mind the Product</cite></blockquote>\n<h3>무슨 일인가</h3>\n<p>인터뷰에 따르면 팀은 선임 전략 리드 한 명과 소수의 개별 기여자로 이루어진 SWAT 형태입니다. 중간 계층이 늘면 맥락이 빠지기 때문에 소통 경로를 평평하게 둡니다. 부서 경계를 넘어 소비자 여정 단위로 가상 팀을 꾸리는 점도 특징입니다. 개발은 가설, 허술한 프로토타입, 실제 데이터 데모, 제한 베타 순으로 진행합니다. 슬라이드를 놓고 길게 논쟁하는 것은 낭비로 보는데, 결정을 되돌릴 수 있기 때문입니다. 한편 속도를 단계별로 측정하되, 품질 기준('좋음'과 '나쁨'의 정의)을 확장 전에 먼저 합의합니다.</p>\n<h3>여러 시각</h3>\n<p>다른 PM 글과 비교하면 '누가 어디서 학습하는가'에서 차이가 납니다.</p>\n<ul><li><b>Mind the Product(시스템 사고 가이드)</b> — PM은 기능 공장에서 벗어나 제품을 상호연결된 시스템으로 보아야 한다고 말합니다. 구글 사례의 여정 단위 가상 팀이 이 시각의 조직적 구현으로 읽힙니다.</li><li><b>Mind the Product(Forward Deployed PM)</b> — 고객 현장에 PM을 심어 문제를 직접 관찰하는 모델입니다. 구글이 데이터와 프로토타입으로 학습한다면, 이쪽은 현장 관찰로 학습합니다.</li></ul>\n<h3>왜 중요한가</h3>\n<p>AI 시대에는 기술 방식이 매달 바뀌어도 조직의 책임 영역은 2~3년 단위로 유지해야 한다는 지적이 설득력 있습니다. 속도는 인력 수가 아니라 맥락 손실과 의사결정 지연을 줄일 때 나옵니다. 또한 품질 기준을 먼저 정하면 빠른 출시가 졸속으로 변하는 것을 막습니다. 사업기획 관점에서는 '되돌릴 수 있는 결정'을 빨리 내리는 문화가 곧 경쟁력입니다.</p>\n<h3>실무 적용</h3>\n<ul><li>기능을 정하기 전에 이틀짜리 프로토타입 데모를 먼저 만들어 보여 준다.</li><li>회의 전 '좋음/나쁨' 기준 3줄을 합의하고 시작한다.</li><li>결정마다 되돌릴 수 있는지(two-way door) 표시해 검토 깊이를 조절한다.</li></ul>\n<h3>Kenny의 관점</h3>\n<p>프론트엔드 작업에서 프로토타입은 가장 싼 기획서입니다. 화면 하나를 실제로 움직여 보면 문서 열 장보다 빨리 합의됩니다. 다만 속도가 목적이 되면 품질 정의가 흐려지므로, 저는 구글처럼 기준을 먼저 쓰고 프로토타입을 만드는 순서를 지키려 합니다. AX 프로젝트에서도 작은 팀과 짧은 검증 루프가 가장 큰 효율을 냅니다.</p>\n<h3>출처</h3>\n<ul><li><a href=\"https://www.mindtheproduct.com/how-google-structures-its-product-team-prototypes-and-ships-fast-at-scale-soufi-esmaeilzadeh-product-director-google-search/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Mind the Product: How Google structures its product team, prototypes, and ships fast at scale ↗</a></li><li><a href=\"https://www.mindtheproduct.com/a-guide-to-systems-thinking-for-product-managers/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Mind the Product: A guide to systems thinking for Product Managers ↗</a></li><li><a href=\"https://www.mindtheproduct.com/what-is-a-forward-deployed-product-manager-anyway/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Mind the Product: What is a Forward Deployed Product Manager, anyway? ↗</a></li></ul>",
    "source": "Mind the Product",
    "sourceUrl": "https://www.mindtheproduct.com/how-google-structures-its-product-team-prototypes-and-ships-fast-at-scale-soufi-esmaeilzadeh-product-director-google-search/",
    "tags": [
      "Product Management",
      "Prototyping",
      "Team Structure"
    ],
    "thumb": ""
  },
  {
    "id": "2026-10-22-css-random-polyfill",
    "category": "design",
    "date": "2026-10-22",
    "title": "CSS random(), 모든 브라우저에서 먼저 써보는 폴리필 접근",
    "rawTitle": "Let's Use the Emergent CSS random() Function in all the Browsers",
    "summary": "Safari에서만 동작하는 CSS random()을 커스텀 프로퍼티와 작은 JS로 전 브라우저에 확장하는 방법과, 아직 스펙이 흔들리는 이유를 정리했다.",
    "bodyHtml": "<p>컨페티, 흩뿌려진 별, 제각각인 애니메이션 지연. 지금까지 이런 연출의 '무작위'는 거의 자바스크립트 몫이었다. CSS-Tricks가 소개한 글은 Safari에만 들어와 있는 CSS <code>random()</code>을 폴리필로 다른 브라우저에서도 미리 써보자고 제안한다. 스타일로 풀 수 있는 문제는 스타일에 맡기자는 '가장 약한 언어' 원칙이 출발점이다. 다만 스펙이 아직 초기 단계라 지금 도입하려면 한계를 알고 가야 한다.</p>\n<blockquote>\"The syntax is surprisingly intricate, mostly because of elaborate random caching and keying semantics.\"<cite>CSS-Tricks</cite></blockquote>\n<h3>무슨 일인가</h3>\n<p>폴리필의 핵심 아이디어는 커스텀 프로퍼티가 값을 거의 검증하지 않는다는 성질을 이용하는 것이다. <code>--random</code> 접두어가 붙은 프로퍼티에 파싱되지 않은 <code>random()</code> 식을 그대로 담아 두면, 네이티브 지원이 없는 브라우저에서는 스크립트가 그 식을 읽어 계산하고 인라인 스타일로 되돌려 넣는다. 계산에는 <code>@csstools/css-calc</code> 라이브러리를 쓰고, 지원 여부를 먼저 감지해 깜빡임을 줄이려고 대상 요소를 잠시 숨긴다. 한계도 분명하다. 페이지 로드 시점에 계산된 스타일만 처리하므로 동적으로 바뀌는 값에는 별도 처리가 필요하다.</p>\n<h3>여러 시각</h3>\n<p>같은 주에 CSS 신기능을 다루는 글들을 나란히 보면 '실험 기능을 얼마나 일찍 쓸 것인가'에 대한 온도차가 보인다.</p>\n<ul><li><b>CSS-Tricks (폴리필 글)</b> — 표현력이 필요한 곳에서는 지금 폴리필로 시작하되, 스펙에 큰 변경이 올 수 있음을 전제로 삼는다.</li><li><b>CSS-Tricks (What's !important #18)</b> — <code>named-feature()</code>처럼 아주 구체적인 기능의 지원 여부를 CSS에서 직접 묻는 흐름을 소개한다. 일찍 쓰되 안전하게 쓰기 위한 감지 수단이 함께 자라고 있다는 관점이다.</li></ul>\n<h3>왜 중요한가</h3>\n<p>무작위 값은 단순한 장식 같지만, 그동안 UI 코드에서 스타일과 로직의 경계를 흐리게 만든 대표적인 이유였다. 이를 CSS 안에서 선언적으로 해결할 수 있으면 레이아웃 코드가 줄고, 서버 렌더링이나 접근성 설정(모션 감소)과의 충돌도 줄어든다. 한편 캐싱과 키 규칙이 복잡하다는 것은 같은 요소가 새로고침마다 같은 값을 가져야 하는지 같은 설계 질문이 아직 열려 있다는 뜻이다. 폴리필은 편의 도구이면서 동시에 스펙을 미리 시험해 보는 장치다.</p>\n<h3>실무 적용</h3>\n<ul><li>장식성 무작위 효과는 폴리필 위에서 시작하고, 핵심 기능이나 레이아웃은 무작위에 의존하지 않게 한다.</li><li>네이티브 지원이 들어오면 걷어낼 수 있도록 <code>--random</code> 접두어 규칙을 한곳에 모아 둔다.</li><li><code>prefers-reduced-motion</code> 조건에서는 무작위 애니메이션을 꺼서 접근성을 지킨다.</li></ul>\n<h3>Kenny의 관점</h3>\n<p>프론트엔드에서 '언제 쓸 것인가'는 기능 자체보다 철수 비용이 결정한다고 본다. 이 폴리필은 걷어내기 쉬운 구조라는 점에서 좋은 사례다. 접두어 하나로 영역이 분리되고, 네이티브가 오면 스크립트만 지우면 된다. 새 CSS 기능을 도입할 때 저는 폴리필의 성능보다 제거 경로가 있는지를 먼저 묻는다. 스펙이 흔들리는 시기에는 그 질문이 가장 값싼 보험이다.</p>\n<h3>출처</h3>\n<ul><li><a href=\"https://css-tricks.com/css-random-function-polyfill/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">CSS-Tricks: Let's Use the Emergent CSS random() Function in all the Browsers ↗</a></li><li><a href=\"https://css-tricks.com/whats-important-18/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">CSS-Tricks: What's !important #18 ↗</a></li></ul>",
    "source": "CSS-Tricks",
    "sourceUrl": "https://css-tricks.com/css-random-function-polyfill/",
    "tags": [
      "CSS",
      "Polyfill",
      "Frontend"
    ],
    "thumb": ""
  },
  {
    "id": "2026-10-22-claude-haiku-5-5",
    "category": "ai",
    "date": "2026-10-22",
    "title": "Claude Haiku 5.5, 가장 빠르고 저렴한 소형 모델의 등장",
    "rawTitle": "Introducing Claude Haiku 5.5",
    "summary": "Anthropic이 Haiku 4.5보다 평균 75% 저렴하고 가장 빠른 Haiku 5.5를 공개했다. 소형 모델이 서브에이전트와 컴퓨터 사용의 기본값이 될지 짚어 본다.",
    "bodyHtml": "<p>Anthropic이 10월 7일 Claude Haiku 5.5를 내놓았다. 요약, 분류, 데이터 압축, 서브에이전트 코딩처럼 호출량이 많고 비용에 민감한 작업을 겨냥한 소형 모델이다. 주목할 점은 단순한 속도 개선이 아니라 가격 구조와 능력 곡선이 함께 움직였다는 것이다. 작은 모델로 에이전트를 돌릴 수 있느냐는 질문의 답이 바뀌고 있다.</p>\n<blockquote>\"We saw over a 30% reduction in latency for task completions and up to 2.5x faster inference.\"<cite>Asana (Anthropic 발표 인용)</cite></blockquote>\n<h3>무슨 일인가</h3>\n<p>발표에 따르면 Haiku 5.5는 지금까지 나온 Claude 중 가장 빠른 모델이며, 입력 토큰은 100만 개당 0.10~0.50달러, 출력은 0.50~2.50달러로 Haiku 4.5보다 평균 약 75% 저렴하다. 컴퓨터 사용 벤치마크 OSWorld 2.1에서 72.4%를 기록했고, 라이브 고객 지원이나 브라우저 자동화처럼 지연이 체감되는 용도를 강조한다. Haiku 계열 처음으로 노력(effort) 수준 설정이 들어가, 비용과 지능 사이를 호출 단위로 조절할 수 있다. Claude.ai, 콘솔, AWS, Google Cloud, Azure에서 바로 쓸 수 있다.</p>\n<h3>여러 시각</h3>\n<p>외부 분석은 같은 숫자를 조금 다른 각도에서 읽는다.</p>\n<ul><li><b>Artificial Analysis</b> — 자체 지능 지수에서 Haiku 5.5가 43점으로 1년 전 Haiku보다 26점 올랐고, 최대 노력 설정에서 일부 경쟁사 경량 모델보다 앞선다고 평가한다. 즉 '싸지만 약한 모델'이라는 공식이 깨졌다는 해석이다.</li><li><b>YourStory</b> — 가장 빠르고 저렴하며 능력 있는 소형 모델이라는 포지셔닝에 무게를 두고, 대량 호출 업무의 단가 하락 효과를 부각한다.</li></ul>\n<h3>왜 중요한가</h3>\n<p>에이전트 시스템은 큰 모델 하나가 아니라 많은 작은 호출의 합으로 비용이 결정된다. 소형 모델의 단가가 낮아지고 컴퓨터 사용 정확도가 크게 오르면, 계획은 큰 모델이 맡고 실행은 작은 모델이 병렬로 맡는 구조가 기본 설계가 된다. 또 노력 수준 설정은 모델 선택을 '고르는 일'에서 '조절하는 일'로 바꾼다. 다만 벤치마크는 공급자 발표와 제3자 지표가 다를 수 있으므로 자기 업무로 재검증해야 한다.</p>\n<h3>실무 적용</h3>\n<ul><li>분류, 추출, 요약 같은 반복 호출은 Haiku 5.5로 옮기고, 품질 차이는 자체 평가셋으로 측정한다.</li><li>에이전트 구조에서 오케스트레이터와 서브에이전트의 모델을 분리해 단가와 지연을 함께 낮춘다.</li><li>노력 수준을 작업 난이도별로 다르게 두고, 실패 시에만 상위 설정이나 상위 모델로 올리는 폴백을 만든다.</li></ul>\n<h3>Kenny의 관점</h3>\n<p>AX 현장에서 가장 먼저 부딪히는 벽은 성능보다 단가와 응답 지연이다. 사용자가 기다리는 화면에서는 2초 느린 정답보다 빠른 80점 답이 더 낫기도 하다. 그래서 이번 소식은 모델 순위보다 프론트엔드 경험 설계에 더 큰 영향을 준다고 본다. 스트리밍과 낙관적 UI에 의존하던 부분을 모델 자체의 속도로 줄일 수 있기 때문이다. 다만 싸졌다고 호출을 무분별하게 늘리면 품질 관리 비용이 되돌아온다.</p>\n<h3>출처</h3>\n<ul><li><a href=\"https://www.anthropic.com/claude-haiku-5-5\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Anthropic: Introducing Claude Haiku 5.5 ↗</a></li><li><a href=\"https://yourstory.com/ai-story/claude-haiku-5-5-anthropic-small-ai-model\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">YourStory: Claude Haiku 5.5 debuts as Anthropic’s faster small AI model ↗</a></li><li><a href=\"https://artificialanalysis.ai/de/models/claude-haiku-5-5\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Artificial Analysis: Claude Haiku 5.5 ↗</a></li></ul>",
    "source": "Anthropic",
    "sourceUrl": "https://www.anthropic.com/claude-haiku-5-5",
    "tags": [
      "Claude",
      "SmallModels",
      "Agents"
    ],
    "thumb": ""
  },
  {
    "id": "2026-10-21-anthropic-distillation-defenses",
    "category": "ai",
    "date": "2026-10-21",
    "title": "증류 공격 막기: Anthropic의 3단 방어 전략",
    "rawTitle": "Strengthening our defenses against distillation attacks",
    "summary": "가짜 계정 네트워크로 모델 능력을 빼가는 증류 공격에 분류기·컨텍스트 고정·사용 제한으로 맞선다. 수집 데이터가 90~99% 줄었다고 한다.",
    "bodyHtml": "<p>Anthropic이 모델 능력을 대규모로 빼내 가는 '증류 공격'에 대응한 방어 체계를 공개했습니다. 증류는 정상적인 기법이지만, 가짜 계정으로 은밀하게 수행되면 안전장치 없이 프런티어에 근접한 모델을 싸게 복제하는 수단이 됩니다. API로 AI를 제품에 붙이는 팀이라면 남의 일이 아닌 이야기입니다.</p>\n<blockquote>\"Distillation enables companies to build models that approach the capability frontier, but which have...been released without proportionally robust safeguards.\"<cite>Anthropic</cite></blockquote>\n<h3>무슨 일인가</h3>\n<p>Anthropic은 한 증류 네트워크가 2만 개 이상의 가짜 계정을 운용한 사례를 들며 공격이 조직적·대규모로 이뤄진다고 설명합니다. 방어는 세 갈래입니다. 8월 31일 이후 생성된 신규 API 계정은 이전 컨텍스트를 수정할 수 없게 하는 '보존된 사고(Preserved Thinking)', 두 단계로 동작하는 분류기, 그리고 의심 계정에 대한 속도 제한·차단·과금입니다. 회사는 이 조치 이후 수집되는 데이터가 90~99% 줄고, 추출되는 추론 토큰은 10~100배 감소했으며, 분류기 오탐률은 0.1% 미만이라고 밝혔습니다. 캠페인이 시작되면 수만 개 계정을 두 시간 안에 차단한다는 수치도 제시했습니다.</p>\n<h3>여러 시각</h3>\n<p>같은 주에 나온 Anthropic의 또 다른 글은 '외부 검증'이라는 다른 방식의 신뢰 구축을 보여 줍니다.</p>\n<ul><li><b>Anthropic (독립 평가자 업데이트)</b> — METR 직원 6명에게 직원에 준하는 접근 권한을 주고, 결과를 Anthropic 승인 없이 공개할 수 있게 했습니다. 기밀 범주에 한해서만 수정을 요구할 수 있습니다. 방어를 안에서 강화하는 증류 대응과 달리, 밖에서 검증받는 구조를 택한 셈입니다.</li>\n<li><b>Anthropic (증류 방어)</b> — 기술적 차단과 계정 단위 제재를 중심에 두고, 정상 사용자에게 피해를 주지 않는 낮은 오탐률을 핵심 지표로 강조합니다.</li></ul>\n<h3>왜 중요한가</h3>\n<p>모델의 가치는 이제 가중치뿐 아니라 '출력이 어떻게 소비되는가'에도 달려 있습니다. API 응답 자체가 학습 데이터가 될 수 있기 때문에, 모델 제공자는 보안 경계를 네트워크가 아닌 사용 패턴에 그어야 합니다. 이는 정상 사용자에게도 속도 제한이나 이상 탐지 같은 형태로 영향을 줄 수 있습니다. 한편 안전장치가 없는 복제 모델이 퍼지는 문제는 업계 전체의 위험 관리 이슈로 번지고 있습니다.</p>\n<h3>실무 적용</h3>\n<ul><li>외부 LLM API를 쓰는 서비스는 계정·키 단위 사용량 모니터링을 갖추고, 비정상적으로 반복되는 대량 호출이 정책 위반으로 오인되지 않도록 사용 패턴을 문서화합니다.</li>\n<li>자사 AI 기능의 응답을 공개 엔드포인트로 노출한다면 속도 제한과 인증, 응답 길이 제한을 기본값으로 둡니다.</li>\n<li>컨텍스트를 클라이언트에서 임의로 수정하는 구조(히스토리 재작성)에 의존한다면 신규 계정 제약이 있는지 API 정책을 먼저 확인합니다.</li></ul>\n<h3>Kenny의 관점</h3>\n<p>프런트엔드와 AX 관점에서 보면 이번 소식은 'AI 기능은 연결해서 끝이 아니라 운영해야 한다'는 신호입니다. 화면에서 보이는 챗 UI 뒤에는 키 관리, 호출 패턴, 정책 준수라는 보이지 않는 층이 있고, 그 층이 서비스 지속성을 좌우합니다. 저는 AI 기능을 설계할 때 사용자 경험과 함께 남용 시나리오를 한 장의 표로 먼저 그려 봅니다. 제공자의 방어가 강해질수록 정상 사용자의 호출 패턴을 투명하게 남기는 습관이 더 중요해질 것입니다.</p>\n<h3>출처</h3>\n<ul><li><a href=\"https://www.anthropic.com/news/distillation-defenses\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Anthropic: Strengthening our defenses against distillation attacks ↗</a></li>\n<li><a href=\"https://www.anthropic.com/news/an-update-on-independent-evaluators\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Anthropic: An update on independent evaluators ↗</a></li></ul>",
    "source": "Anthropic",
    "sourceUrl": "https://www.anthropic.com/news/distillation-defenses",
    "tags": [
      "AI Security",
      "Distillation",
      "LLM API"
    ],
    "thumb": ""
  },
  {
    "id": "2026-10-21-crash-the-app-product-immersion",
    "category": "plan",
    "date": "2026-10-21",
    "title": "별점 4.8이 가린 문제, 매일 앱을 부숴 보는 PM",
    "rawTitle": "Why we replaced weekly product reviews with daily customer journeys",
    "summary": "별점 4.8인 앱에서 프로모션 코드가 계속 실패했다. 'Crash the App'은 PM이 매일 직접 써 보며 백로그에 근거를 쌓는 방식이다.",
    "bodyHtml": "<p>평점 4.8의 앱에서 고객이 프로모션 코드를 제대로 적용하지 못하는 일이 반복됐습니다. 숫자는 좋은데 경험은 나쁘다는 모순이 이 글의 출발점입니다. 기획과 QA의 경계에서 '지표가 가리는 마찰'을 어떻게 드러낼지 고민하는 팀에 참고할 만한 사례입니다.</p>\n<blockquote>\"Repeated use gives the team another form of evidence, and the right tools to act on it.\"<cite>Mind the Product</cite></blockquote>\n<h3>무슨 일인가</h3>\n<p>Vladimir Pronin이 소개한 'Crash the App'은 PM이 실제 기기에서 지름길 없이 고객처럼 과업을 수행하는 습관입니다. 처음엔 주 1회 30분짜리 팀 세션이었지만, 각 PM이 자기 영역을 매일 비동기로 돌며 발견한 내용을 바로 팀 백로그에 기록하는 방식으로 바뀌었습니다. 프로모션 코드 사례에서는 CMS와 프로모션 도구 두 곳에 같은 설정을 수작업으로 입력하던 것이 근본 원인이었고, 팀은 개별 장애를 고치는 대신 CMS가 단일 원천에서 값을 가져오도록 구조를 바꿨습니다. 그 뒤 관련 불만 유형이 눈에 띄게 줄었다고 합니다.</p>\n<h3>여러 시각</h3>\n<p>같은 Mind the Product의 최근 글은 '고객 현장을 직접 본다'는 원칙을 다른 규모로 보여 줍니다.</p>\n<ul><li><b>Mind the Product (Forward Deployed PM)</b> — 고객사에 파견되어 사용 현장을 지켜보는 역할입니다. 지원 티켓이나 인터뷰 대신 문제가 어떻게 드러나고 사람들이 어떻게 우회하는지 직접 보고, 어떤 요구를 플랫폼 기능으로 만들지 걸러 냅니다.</li>\n<li><b>Mind the Product (Crash the App)</b> — 고객 현장이 아니라 자기 제품을 반복 사용한다는 점이 다릅니다. 비용은 낮지만, 내부자 편향을 피하려면 실기기·실과업 원칙이 필요합니다.</li></ul>\n<h3>왜 중요한가</h3>\n<p>평점이나 NPS 같은 요약 지표는 소수의 치명적 마찰을 평균에 묻어 버립니다. 반복 사용은 우연한 불편을 패턴으로 바꿔 주고, 패턴이 보이면 증상 수정이 아니라 원인 제거로 논의가 옮겨 갑니다. 또 책임을 공동 행사에서 개인 PM에게 옮기면 발견에서 수정까지의 시간이 짧아집니다. 엔지니어도 비난이 아닌 시스템 이해가 목적임을 알면 우군이 된다는 점이 인상적입니다.</p>\n<h3>실무 적용</h3>\n<ul><li>스프린트마다 핵심 여정(가입·결제·쿠폰 적용)을 실기기로 따라가는 15분 점검을 QA 체크리스트 앞단에 넣습니다.</li>\n<li>발견 사항은 재현 단계와 스크린 녹화와 함께 곧바로 백로그에 올리고, 같은 유형이 반복되면 원인 분석 티켓으로 묶습니다.</li>\n<li>같은 값을 두 시스템에 수동 입력하는 지점을 목록화해 단일 원천(Single Source of Truth)으로 정리합니다.</li></ul>\n<h3>Kenny의 관점</h3>\n<p>프런트엔드를 만드는 사람으로서 이 글의 핵심은 '직접 써 보는 일'이 가장 싸고 빠른 검증이라는 점입니다. 쿠폰 입력창 하나가 매출과 신뢰를 흔드는 걸 많이 봤고, 그 원인은 화면이 아니라 뒤쪽 데이터 구조인 경우가 적지 않았습니다. 기획자는 QA 결과를 기다리지 않고 자기 기획의 결과물을 먼저 써 봐야 합니다. 저는 작은 팀일수록 매일 하는 짧은 사용 습관이 대규모 회고보다 낫다고 생각합니다.</p>\n<h3>출처</h3>\n<ul><li><a href=\"https://www.mindtheproduct.com/crash-the-app-what-our-4-8-star-rating-was-hiding/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Mind the Product: Why we replaced weekly product reviews with daily customer journeys ↗</a></li>\n<li><a href=\"https://www.mindtheproduct.com/what-is-a-forward-deployed-product-manager-anyway/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Mind the Product: What is a Forward Deployed Product Manager, anyway? ↗</a></li></ul>",
    "source": "Mind the Product",
    "sourceUrl": "https://www.mindtheproduct.com/crash-the-app-what-our-4-8-star-rating-was-hiding/",
    "tags": [
      "Product Discovery",
      "QA",
      "Product Management"
    ],
    "thumb": ""
  },
  {
    "id": "2026-10-20-css-gap-decorations",
    "category": "design",
    "date": "2026-10-20",
    "title": "CSS 갭 데코레이션, border 꼼수의 종말",
    "rawTitle": "Gap Decorations Are Now Available, Here's What's New",
    "summary": "Grid·Flexbox 아이템 사이 간격을 row-rule/column-rule로 직접 꾸밀 수 있게 됐다. 의사 요소 꼼수를 걷어낼 시점이다.",
    "bodyHtml": "<p>그리드와 플렉스박스의 아이템 사이 빈 공간, 즉 gap에 구분선을 넣는 일은 오랫동안 개발자의 숙제였습니다. 이제 Chromium 계열에서 이 간격을 CSS가 직접 꾸미도록 지원하기 시작했습니다. 단순한 장식 기능처럼 보이지만, 레이아웃 코드의 구조 자체를 단순하게 만드는 변화라서 지금 주목할 가치가 있습니다.</p>\n<blockquote>\"For a long time now, web developers have had to use border and pseudo-element hacks to style the gaps between the items of layouts like grid and flexbox.\"<cite>CSS-Tricks</cite></blockquote>\n<h3>무슨 일인가</h3>\n<p>핵심은 <code>row-rule</code>, <code>column-rule</code>(그리고 둘을 묶은 <code>rule</code> 단축 속성)입니다. 멀티 컬럼에서 쓰던 rule 개념을 grid와 flex 간격으로 확장한 것이죠. 선의 시작과 끝을 조절하는 <code>*-inset</code> 계열, 교차 지점에서 선이 겹치는 방식을 정하는 <code>rule-overlap</code>, 빈 칸 옆의 선을 숨기는 <code>rule-visibility-items</code>까지 세밀한 제어 속성이 함께 제공됩니다. 현재는 Chrome·Edge 149 이상에서 사용할 수 있고, 폴리필도 준비 중이라고 합니다.</p>\n<h3>여러 시각</h3>\n<p>같은 시기 CSS-Tricks의 다른 글은 \"새 속성을 어떻게 안전하게 쓸 것인가\"라는 물음에 서로 다른 답을 줍니다.</p>\n<ul><li><b>CSS-Tricks (border-image 애니메이션)</b> — 이미 있는 속성을 <code>@property</code>와 결합해 그라디언트 테두리를 움직이는 접근으로, 새 기능 없이도 표현력을 넓힐 수 있음을 보여 줍니다. 다만 border-image는 둥근 모서리를 따라가지 못한다는 한계를 스스로 인정합니다.</li>\n<li><b>CSS-Tricks (gap decorations)</b> — 신기능은 점진적 향상(progressive enhancement)으로 다뤄야 하며, 미지원 브라우저에서 구분선이 사라져도 괜찮은 곳에 우선 쓰라고 권합니다.</li></ul>\n<h3>왜 중요한가</h3>\n<p>지금까지 구분선은 아이템의 border나 ::after로 흉내 냈기 때문에 줄바꿈, 반응형 열 수 변경, 빈 칸 처리 때마다 예외 코드가 늘었습니다. 간격 자체가 스타일링 대상이 되면 \"마지막 줄은 선 제거\" 같은 규칙이 사라지고 마크업도 가벼워집니다. 디자인 시스템 관점에서는 구분선이 레이아웃의 속성이 되어 토큰으로 관리하기 쉬워집니다. 브라우저 지원이 아직 한정적이라는 점은 도입 속도를 정하는 현실적 변수입니다.</p>\n<h3>실무 적용</h3>\n<ul><li>대시보드 카드·내비게이션처럼 구분선이 장식에 가까운 곳부터 <code>@supports</code>로 감싸 점진적으로 도입한다.</li>\n<li>기존 border·의사 요소 구분선 코드를 목록으로 정리해 두고, 지원 범위가 넓어지면 일괄 교체할 후보로 관리한다.</li>\n<li>구분선 두께·색·inset을 CSS 변수 토큰으로 정의해 두면 이후 전환 비용이 줄어든다.</li></ul>\n<h3>Kenny의 관점</h3>\n<p>프론트엔드에서 가장 비싼 코드는 기능을 구현한 코드가 아니라 브라우저의 빈틈을 메우려고 쓴 코드입니다. 플랫폼이 그 빈틈을 메워 줄 때 해야 할 일은 환호가 아니라 정리입니다. 저는 새 속성을 도입하기 전에 어떤 꼼수가 사라지는지부터 따져 보는 편이고, 이번 갭 데코레이션은 삭제할 코드가 분명해서 가치가 큽니다. 다만 미지원 브라우저에서 레이아웃이 깨지지 않는 선까지만 맡기는 것이 안전한 기준입니다.</p>\n<h3>출처</h3>\n<ul><li><a href=\"https://css-tricks.com/css-gap-decorations-now-available/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">CSS-Tricks: Gap Decorations Are Now Available, Here's What's New ↗</a></li><li><a href=\"https://css-tricks.com/animating-css-border-image/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">CSS-Tricks: Animating CSS border-image ↗</a></li></ul>",
    "source": "CSS-Tricks",
    "sourceUrl": "https://css-tricks.com/css-gap-decorations-now-available/",
    "tags": [
      "CSS",
      "Grid",
      "Progressive Enhancement"
    ],
    "thumb": ""
  },
  {
    "id": "2026-10-20-netflix-ai-trust-creatives",
    "category": "pm",
    "date": "2026-10-20",
    "title": "넷플릭스는 어떻게 창작자의 AI 신뢰를 얻었나",
    "rawTitle": "Parsing 'Can' from 'Should': How Netflix's Product Team Got Thousands of Creatives to Trust an AI Overhaul",
    "summary": "기술 로드맵 대신 미래 상태를 먼저 그려 창작자와 공동 목표를 세운 넷플릭스 사례. AI 전환 PM이 참고할 신뢰 구축법.",
    "bodyHtml": "<p>AI를 도입하는 조직에서 기술보다 어려운 것은 사람의 신뢰입니다. First Round Review가 소개한 넷플릭스 프로덕트팀 사례는 수천 명의 창작 인력이 AI 개편을 받아들이게 만든 과정을 구체적으로 보여 줍니다. \"할 수 있는 일(can)\"과 \"해야 하는 일(should)\"을 구분하는 방식이 핵심이라, AI 전환을 맡은 PM이라면 지금 읽어 볼 만합니다.</p>\n<blockquote>\"The process of articulating in a way others can follow is the process of decision making.\"<cite>First Round Review</cite></blockquote>\n<h3>무슨 일인가</h3>\n<p>약 300명 규모의 이 팀은 200여 개국에서 1만 7천 편 이상의 타이틀 유통을 책임집니다. 이들은 기술이 무엇을 할 수 있는지가 아니라 구성원에게 어떤 결과를 줄 것인가라는 질문에서 출발했습니다. 이상적인 시나리오를 먼저 그리고 거꾸로 필요한 역량을 도출했으며, 현장 창작자 설문과 상반된 입장 간 토론으로 숨은 긴장을 드러냈습니다. 기술 로드맵 대신 \"오늘 vs 내일\" 비교표와 역할이 어떻게 바뀌는지 보여 주는 하루 시나리오를 만들었고, 연간 목표도 프로덕트와 창작 조직이 함께 쓰고 공동으로 책임졌습니다.</p>\n<h3>여러 시각</h3>\n<p>같은 AI 도입 문제를 Lenny's Newsletter는 측정과 품질의 관점에서 다룹니다.</p>\n<ul><li><b>Lenny's Newsletter (Advanced evals)</b> — 평가 지표를 만들기 전에 실제 트레이스를 100건 이상 모아 실패 유형을 먼저 발견하라고 말합니다. 자동화 에이전트는 제품 판단이 필요한 문제를 놓친다는 점도 지적합니다.</li>\n<li><b>First Round Review</b> — 같은 맥락에서 신뢰는 도구의 정확도가 아니라 사용자가 미래 상태에서 자기 모습을 볼 수 있는가에서 생긴다고 봅니다.</li></ul>\n<h3>왜 중요한가</h3>\n<p>두 글은 모두 \"먼저 이해하고 나중에 자동화한다\"는 점에서 만납니다. 평가 체계가 사용자 실패를 이해하는 데서 출발하듯, 조직 전환도 현장의 우려를 이해하는 데서 출발합니다. AI 프로젝트가 실패하는 이유는 모델 성능보다 도입 대상이 변화의 주체가 아니라 대상으로 취급되기 때문인 경우가 많습니다. 공동 목표와 공동 책임은 이 구조를 바꾸는 실질적인 장치입니다.</p>\n<h3>실무 적용</h3>\n<ul><li>AI 기능 기획서에 기술 스펙보다 앞서 \"오늘 vs 내일\" 비교표와 역할별 하루 시나리오를 넣는다.</li>\n<li>출시 전에 실제 사용 로그 100건 이상을 직접 검토해 실패 유형을 분류한 뒤 평가 지표를 정한다.</li>\n<li>현업 팀과 목표를 공동 작성하고, 정기 회의에 불일치 점검 안건을 고정 배치한다.</li></ul>\n<h3>Kenny의 관점</h3>\n<p>AX 프로젝트를 하면서 가장 자주 보는 실패는 데모는 훌륭한데 현업이 쓰지 않는 경우입니다. 원인은 대개 기능이 아니라 \"이게 내 일을 어떻게 바꾸는지\"를 아무도 설명하지 못한 데 있습니다. 넷플릭스의 비교표와 하루 시나리오는 화려하지 않지만, 기획자가 결정을 문장으로 풀어낼 수 있어야 한다는 원칙을 실행한 사례입니다. 저는 여기에 trace 리뷰를 더해, 사람의 신뢰와 제품의 품질을 같은 현장 관찰에서 얻는 방식을 추천합니다.</p>\n<h3>출처</h3>\n<ul><li><a href=\"https://review.firstround.com/netflix-ai-strategy/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">First Round Review: Parsing 'Can' from 'Should' ↗</a></li><li><a href=\"https://www.lennysnewsletter.com/p/advanced-evals-how-to-find-and-fix\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Lenny's Newsletter: Advanced evals: How to find (and fix) hidden AI failures in your product ↗</a></li></ul>",
    "source": "First Round Review",
    "sourceUrl": "https://review.firstround.com/netflix-ai-strategy/",
    "tags": [
      "AI Adoption",
      "Product Management",
      "Change Management"
    ],
    "thumb": ""
  },
  {
    "id": "2026-10-19-mindsets-quality-model-ai-self-healing",
    "category": "plan",
    "date": "2026-10-19",
    "title": "AI 시대의 QA, 도구보다 먼저 바꿀 것은 사고방식",
    "rawTitle": "The Mindsets Quality Model",
    "summary": "AI가 산출물을 빠르게 만들수록 품질은 사람의 사고 전환 능력에서 갈린다. 마인드셋 모델과 안전한 셀프힐링 자동화를 함께 읽는다.",
    "bodyHtml": "<p>생성형 AI 덕분에 테스트 케이스와 자동화 스크립트는 몇 분 만에 쏟아져 나온다. 그런데 산출물이 늘어난다고 품질이 올라가지는 않는다. Ministry of Testing에 실린 두 편의 글은 같은 질문을 서로 다른 층위에서 다룬다. 하나는 '어떻게 생각할 것인가', 다른 하나는 '그 생각을 자동화에 어떻게 안전하게 심을 것인가'다.</p><blockquote>\"AI can accelerate output, but only humans can actually think. And thinking is where quality begins.\"<cite>Ministry of Testing</cite></blockquote><h3>무슨 일인가</h3><p>Ady Stokes는 품질 전문가가 상황에 맞춰 바꿔 쓸 수 있는 사고방식을 네 묶음으로 정리한다. 가능성을 그리는 '비저너리·개방형', 사실을 검증하는 '분석·현실 기반형', 영향과 윤리를 살피는 '철학·연결형', 파괴적 의도로 실패 경로를 탐색하는 '어두운·공격형'이다. 어느 하나가 우월하지 않고, 각각 잘 보는 것과 못 보는 것이 다르다는 점이 핵심이다. 글에는 '나중에 저장' 기능을 대상으로 네 라운드 동안 마인드셋을 강제로 바꿔 보는 훈련도 포함되어 있다. 자신의 기본 마인드셋을 먼저 파악하고 의식적으로 이탈해 보게 하는 구조다.</p><h3>여러 시각</h3><p>같은 주제를 자동화 쪽에서 보면 결론은 비슷하게 '판단은 사람이 설계한다'로 모인다.</p><ul><li><b>Ministry of Testing(Pranav Pandit)</b> — AI는 결정론적 자동화를 대체하지 말고, 로케이터가 깨질 때만 작동하는 통제된 폴백이어야 한다고 본다. 모델 성능보다 맥락 신호가 더 중요하다는 것이 그의 결론이다.</li><li><b>실제 사고 사례</b> — 버튼 이름 하나가 바뀌어 테스트 40여 개가 한꺼번에 실패했고, 힐링이 대부분 복구했지만 맥락이 부족한 일부는 엉뚱한 요소를 골랐다. 자동 복구가 곧 정답은 아니라는 증거다.</li><li><b>단계적 도입</b> — 런타임 한정 힐링에서 시작해 사람이 검토하는 수정, 확신이 높을 때만 자동 병합으로 넓히는 순서를 제안한다.</li></ul><h3>왜 중요한가</h3><p>AI가 테스트를 대신 써 주는 흐름에서 QA의 가치는 '많이 만드는 능력'에서 '무엇을 의심할지 아는 능력'으로 옮겨 간다. 마인드셋 모델은 그 능력을 훈련 가능한 항목으로 쪼갠 시도다. 반대로 셀프힐링 글은 AI가 만든 변경이 조용히 잘못된 요소를 통과시키는 위험을 보여 준다. 즉 사고의 폭이 좁으면 AI는 같은 맹점을 더 빠르게 복제한다. 기획 단계의 요구사항 검토에서도 같은 구조가 반복된다.</p><h3>실무 적용</h3><ul><li>요구사항 리뷰 때 '이번에는 공격형 마인드셋으로만 읽는다' 같은 역할 라운드를 회의에 넣어 본다.</li><li>자동화에 AI를 붙일 때는 결정론적 경로를 먼저 두고, 복구 시도는 모두 로그로 남겨 사람이 검토한다.</li><li>자동 복구 결과를 바로 병합하지 말고 단일 매치·가시성·상호작용 가능 여부 같은 검증 규칙을 통과시킨다.</li></ul><h3>Kenny의 관점</h3><p>프론트엔드를 만드는 입장에서 UI 변경은 늘 일어나고, 그때마다 테스트가 깨지는 비용을 체감한다. 그래서 셀프힐링이 반갑지만, 'data-testid' 같은 안정적인 계약을 코드에 먼저 심는 편이 가장 싼 해결책이라고 생각한다. AI는 그 계약이 없는 곳의 안전망일 뿐이다. 결국 AX 시대의 QA는 도구 선택보다 어떤 관점으로 의심할지를 팀이 공유하는 일이다. 기획 단계에서 마인드셋을 섞어 쓰는 습관이 나중의 자동화 비용을 줄인다.</p><h3>출처</h3><ul><li><a href=\"https://www.ministryoftesting.com/insights/the-mindsets-quality-model\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Ministry of Testing: The Mindsets Quality Model ↗</a></li><li><a href=\"https://www.ministryoftesting.com/insights/when-ai-maintains-your-tests-designing-safe-self-healing-automation\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Ministry of Testing: When AI maintains your tests: Designing safe self-healing automation ↗</a></li></ul>",
    "source": "Ministry of Testing",
    "sourceUrl": "https://www.ministryoftesting.com/insights/the-mindsets-quality-model",
    "tags": [
      "QA",
      "Testing",
      "AI"
    ],
    "thumb": ""
  },
  {
    "id": "2026-10-19-startup-moat-and-pm-pmm-handoff",
    "category": "pm",
    "date": "2026-10-19",
    "title": "스타트업의 해자와 PM·PMM 핸드오프, 제품 전략의 두 축",
    "rawTitle": "How to tell if a startup has a moat",
    "summary": "속도는 연료일 뿐 해자는 복리로 쌓이는 우위에서 나온다. PM과 PMM을 처음부터 묶는 사례까지 함께 읽는 전략 노트.",
    "bodyHtml": "<p>AI 덕에 제품을 만드는 속도가 누구에게나 빨라졌다. 그래서 오래 버틸 회사를 가려내는 질문이 더 중요해졌다. Lenny's Newsletter의 Dan Hockenmaier는 스타트업의 해자를 판별하는 틀을 제시하고, Mind the Product의 사례는 그 우위를 시장에서 실제로 전달하는 조직 구조를 다룬다. 전략과 실행을 같이 보면 그림이 선명해진다.</p><blockquote>\"Speed gives a company more shots on goal as it tries to build a great product and a great business, but it must eventually find something more durable.\"<cite>Lenny's Newsletter</cite></blockquote><h3>무슨 일인가</h3><p>Hockenmaier의 틀은 복리로 쌓이는 우위를 찾고, 그 강도를 가늠하고, 실제로 작동하는지 측정하는 세 단계다. 그는 속도·유통·브랜드·자금을 단기적 '연료'로 보고, 지속되는 우위는 전환 비용, 네트워크 효과, 규모의 경제, 데이터 효과 네 가지로 한정한다. 예로 Rippling의 통합 제품군, LinkedIn의 네트워크 밀도, 배송 단가를 300달러에서 12달러로 낮춘 Zipline, 방대한 거래 데이터를 쓰는 Stripe Radar가 나온다. (해당 글은 유료 구간이 있어 이후 단계는 확인하지 못했다.)</p><h3>여러 시각</h3><p>우위가 있어도 시장에 전달되지 않으면 해자는 장부 위에만 존재한다.</p><ul><li><b>Mind the Product(Samridhi Anand)</b> — PM은 '제품의 진실', PMM은 '시장의 진실'을 쫓는다고 구분한다. PMM이 개발 이후에만 합류하면 고객 피드백이 제품 결함이 아닌 메시지 문제로 오해된다고 지적한다.</li><li><b>워크플로 중심 데모</b> — 기능을 나열하는 대신 하나의 업무를 끝까지 보여 주는 방식으로 바꾸자 고객이 자기 업무에 맞춰 이해했다고 한다. 구체적 수치는 공개되지 않았다.</li><li><b>메시지가 안 풀리면</b> — 문구가 어렵다는 것은 제품 결정이 덜 끝났다는 신호일 수 있다는 관찰이 눈에 띈다.</li></ul><h3>왜 중요한가</h3><p>해자 프레임은 '우리가 빠르다'는 자기 위안을 걷어 내고 무엇이 복리로 쌓이는지 묻게 한다. 하지만 전환 비용이든 데이터 효과든 고객이 가치를 체감해야 비로소 작동한다. 그 연결 고리가 디스커버리 단계의 PM·PMM 협업이다. 전략 문서와 출시 메시지가 따로 놀면 우위는 정체된 채 남는다. 두 글은 서로 다른 층위에서 같은 결론, 즉 지속 가능성은 설계된다는 점을 가리킨다.</p><h3>실무 적용</h3><ul><li>제품 전략 문서에 '우리의 복리 우위는 네 가지 중 무엇인가'를 한 줄로 적고, 지표로 확인할 방법을 함께 둔다.</li><li>디스커버리 인터뷰에 PMM이나 사업 담당을 처음부터 참여시켜 고객 언어를 공유한다.</li><li>데모와 제안 자료는 기능 목록이 아니라 한 가지 업무를 끝까지 따라가는 시나리오로 재구성한다.</li></ul><h3>Kenny의 관점</h3><p>PM과 PL, 사업기획을 오가며 느끼는 것은 해자가 거창한 개념이 아니라 일상의 작은 설계에서 시작된다는 점이다. 예를 들어 고객이 쓰는 화면 흐름이 데이터를 쌓고 전환 비용을 만든다. 프론트엔드의 워크플로 설계가 곧 전략의 일부라는 뜻이다. 또 AX 프로젝트에서도 기능 시연보다 한 업무의 완주를 보여 줄 때 의사결정이 빨랐다. 속도는 시작점이고, 남는 것은 구조다.</p><h3>출처</h3><ul><li><a href=\"https://www.lennysnewsletter.com/p/how-to-tell-if-a-startup-has-a-moat\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Lenny's Newsletter: How to tell if a startup has a moat ↗</a></li><li><a href=\"https://www.mindtheproduct.com/re-engineering-the-pm-pmm-handoff-a-case-study-in-process-transformation/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Mind the Product: Re-engineering the PM-PMM handoff: a case study in process transformation ↗</a></li></ul>",
    "source": "Lenny's Newsletter",
    "sourceUrl": "https://www.lennysnewsletter.com/p/how-to-tell-if-a-startup-has-a-moat",
    "tags": [
      "Strategy",
      "Product",
      "GTM"
    ],
    "thumb": ""
  },
  {
    "id": "2026-07-08-css-border-shape-property",
    "category": "design",
    "date": "2026-07-08",
    "title": "clip-path의 한계를 넘는다 — CSS border-shape",
    "rawTitle": "Get Ready For the Powerful CSS border-shape Property!",
    "summary": "CSS-Tricks가 요소를 '자르는' 대신 '형태를 잡는' 새 속성 border-shape를 소개했다. clip-path가 테두리·그림자까지 함께 잘라내던 오랜 골칫거리를, 장식이 형태를 따라 흐르게 하며 푼다.",
    "bodyHtml": "<p>비정형 도형에 테두리를 두르는 일은 오랫동안 프런트엔드의 골칫거리였다. <code>clip-path</code>나 <code>mask</code>로 요소를 자르면 콘텐츠뿐 아니라 테두리·그림자 같은 장식까지 함께 잘려 나갔기 때문이다. CSS-Tricks가 7월 7일 소개한 새 속성 <code>border-shape</code>는 이 문제를 정면으로 겨냥한다. 요소를 '잘라내는' 대신 '형태를 잡아', 테두리와 장식이 그 형태를 따라 흐르도록 만든다. 현재는 Chrome 계열에만 실렸지만, 지금이 그 잠재력을 미리 익혀 둘 때다.</p>\n<blockquote>\"요소를 클립하는 대신, 이 속성은 요소의 '형태를 잡아' 장식이 그 형태를 따라가게 한다.\"<cite>CSS-Tricks (Temani Afif)</cite></blockquote>\n<h3>무슨 일인가</h3>\n<p><code>border-shape</code>는 <code>clip-path</code>와 똑같은 값 — <code>circle()</code>·<code>polygon()</code>·<code>inset()</code>과 새 <code>shape()</code> 함수 — 을 그대로 받는다. 저자의 말처럼 \"clip-path를 안다면 새로 배울 게 사실상 없고, 속성 이름만 바꾸면 된다.\" 값을 하나만 주면 그 경로를 따라 테두리가 그려지는 '스트로크 모드', 두 개를 주면 두 경로 사이 영역이 채워지는 '필 모드'로 동작한다. 이 덕분에 채움 없는 윤곽선 도형, 원에서 오려낸 컷아웃, 요소 밖으로 삐져나오는 풀블리드 장식, 부분 밑줄 같은 표현을 <code>border</code>·<code>box-shadow</code>·<code>outline</code>이 형태를 따라간 채로 얻을 수 있다. 애니메이션도 지원해 리빌·모핑 효과까지 선언형으로 가능하다.</p>\n<h3>여러 시각</h3>\n<p>같은 'CSS로 형태 잡기'라도 무엇을 형태화하느냐에 따라 짝이 되는 도구가 다르다.</p>\n<ul><li><b>MDN: corner-shape</b> — <code>border-shape</code>가 요소 전체의 윤곽을 다시 그린다면, <code>corner-shape</code>는 <code>border-radius</code>가 만든 '모서리'만 바꾼다. <code>bevel</code>(직선)·<code>scoop</code>(오목)·스퀴클 같은 값으로 모서리 곡률을 조절하되, 테두리·그림자·배경은 똑같이 그 모양을 따라간다. 둘은 대체재가 아니라 '요소 전체 vs 모서리'라는 층위가 다른 짝이다.</li><li><b>CSS-Tricks(Daniel Schwarz): 접힌 모서리</b> — <code>corner-shape: bevel</code>과 가상요소를 조합해 종이가 접힌 듯한 3D 모서리를 만드는 실전 예시다. 다만 저자도 \"크롬 밖에선 둥근 모서리로 폴백된다\"고 못 박아, 표현력과 호환성의 맞바꿈이 지금 단계의 전제임을 보여준다.</li></ul>\n<h3>왜 중요한가</h3>\n<p>핵심은 '장식과 형태의 분리'다. 그동안은 비정형 도형에 테두리를 두르려면 SVG를 겹치거나, 여러 겹의 그라디언트·마스크를 쌓는 우회로가 필요했다. <code>border-shape</code>와 <code>corner-shape</code>가 성숙하면 그 보일러플레이트가 속성 한 줄로 접힌다 — 마크업은 가벼워지고, 접근성 트리도 도형 트릭에 오염되지 않는다. 다만 지금은 Chromium 단독 지원이라, 이들을 프로덕션 기본값으로 삼는 순간 다른 엔진 사용자는 의도치 않은 화면을 보게 된다. '무엇이 표준으로 오고 있는가'를 미리 읽어 두는 것이 나중의 마이그레이션 비용을 가른다.</p>\n<h3>실무 적용</h3>\n<ul><li><code>clip-path</code>를 이미 쓰고 있다면 값을 그대로 <code>border-shape</code>로 옮겨, 잘려 나가던 테두리·그림자를 형태에 되살릴 수 있는지부터 실험한다.</li><li>Chromium 단독 지원을 전제로 <code>@supports (border-shape: circle())</code> 가드를 깔고, 미지원 환경엔 사각형·둥근 모서리로 안전하게 폴백되도록 프로그레시브 인핸스먼트를 설계한다.</li><li>QA 시 Firefox·Safari에서의 폴백 형태, 고대비·다크 모드에서의 테두리 대비, <code>prefers-reduced-motion</code>에서의 도형 애니메이션 억제를 재현 시나리오에 포함한다.</li></ul>\n<h3>Kenny의 관점</h3>\n<p>프런트엔드에서 새 CSS 속성의 진짜 가치는 '화려함'이 아니라 '제거되는 우회로'에 있다. 비정형 카드나 배지에 테두리 하나 두르려고 SVG를 겹치고 마스크를 쌓던 관행이 선언형 한 줄로 접히면, 마크업도 유지보수도 함께 가벼워진다. 다만 나는 Chromium 단독 단계의 속성을 기본값으로 태우지 않는다 — 폴백을 먼저 깔고 인핸스먼트로 얹는다. 좋은 AX는 최신 문법을 가장 빨리 쓰는 게 아니라, 지원이 무르익는 곡선 위에서 위험을 관리하며 올라타는 판단에서 나온다.</p>\n<h3>출처</h3>\n<ul><li><a href=\"https://css-tricks.com/get-ready-for-the-powerful-css-border-shape-property/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">CSS-Tricks: Get Ready For the Powerful CSS border-shape Property! ↗</a></li><li><a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/corner-shape\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">MDN: corner-shape ↗</a></li><li><a href=\"https://css-tricks.com/using-css-corner-shape-for-folded-corners/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">CSS-Tricks: Using CSS corner-shape For Folded Corners ↗</a></li></ul>",
    "source": "CSS-Tricks",
    "sourceUrl": "https://css-tricks.com/get-ready-for-the-powerful-css-border-shape-property/",
    "tags": [
      "BorderShape",
      "CSS",
      "Frontend"
    ],
    "thumb": ""
  },
  {
    "id": "2026-07-08-claude-global-workspace-j-space",
    "category": "ai",
    "date": "2026-07-08",
    "title": "Claude 안의 '작업 공간' — 의식 이론을 닮은 J-space",
    "rawTitle": "A global workspace in language models",
    "summary": "앤트로픽이 7월 6일, Claude 내부에서 '언어화 가능한' 개념이 모이는 J-space를 발견했다고 밝혔다. 신경과학의 전역 작업공간 이론을 닮은 이 구조가 왜 해석가능성·안전의 지렛대가 되는지 짚는다.",
    "bodyHtml": "<p>모델이 빠르게 똑똑해지는 사이, 정작 그 '안'을 들여다보는 도구는 늘 부족했다. 앤트로픽이 7월 6일 공개한 연구는 그 틈을 파고든다 — Claude 내부에 '언어화 가능한' 개념들이 모이는 J-space라는 공간이 자연히 형성됐다는 것이다. 이는 신경과학의 전역 작업공간 이론(global workspace theory)과 기능적으로 닮았다. 뇌와 언어 모델의 구조는 전혀 다른데도, 지적 시스템이 도달하는 조직 방식이 수렴할 수 있음을 시사하는 발견이다.</p>\n<blockquote>\"Claude의 작업 공간은 더 자동적이고 경직된 처리의 바다 한가운데서, 의도적 추론에 쓰일 수 있다.\"<cite>Anthropic</cite></blockquote>\n<h3>무슨 일인가</h3>\n<p>연구진은 'Jacobian 렌즈(J-lens)'라는 새 기법으로, 각 내부 활성 패턴이 미래에 어떤 단어를 말하게 만들지를 계산해 내부 표상을 읽어 냈다. 핵심 발견은 J-space가 전체 신경 활동의 10% 미만, 늘 수십 개 개념만 담는 좁은 공간이라는 점이다. 문법·유창성·단순 사실 같은 대부분의 처리는 이 공간을 거치지 않는다. 연구진은 표상을 강제로 바꿔치기하는 개입 실험으로 상관이 아닌 인과를 확인했고, Claude가 J-space 내용을 정확히 보고하고, 요청에 따라 특정 개념에 '집중'하며, 그 표상이 다단계 추론을 실제로 이끈다는 다섯 가지 기능적 성질을 제시했다. 다만 이는 보고·추론 능력인 '접근 의식'에 관한 것이며, 주관적 경험('현상 의식')을 입증하는 건 아니라고 선을 그었다.</p>\n<h3>여러 시각</h3>\n<p>같은 발견을 두고 '의식 담론'과 '실무 도구'라는 두 결이 갈린다.</p>\n<ul><li><b>VentureBeat(J-lens 해설)</b> — 이 '조용한 작업 공간'이 유력한 의식 이론을 닮았다는 점을 부각하면서도, AI 의식을 둘러싼 철학자·과학자 간 이견과 불확실성이 여전하다고 균형을 잡는다. 흥미로운 은유이되 '의식의 증거'로 과장해선 안 된다는 신중론이다.</li><li><b>VentureBeat('두뇌를 해킹했더니 알아챘다')</b> — 개입 실험의 실무적 함의에 주목한다. 모델의 내부 상태를 조작하자 Claude가 그 변화를 스스로 감지·기술했다는 것으로, 숨은 목표·조작된 데이터·'지금 평가받는 중'이라는 자각을 탐지하는 안전 도구로 이어진다는 각도다.</li></ul>\n<h3>왜 중요한가</h3>\n<p>AI 제품의 신뢰는 결국 '왜 그렇게 답했는가'를 설명할 수 있느냐에 달려 있다. J-space가 실제 추론을 이끄는 좁고 읽을 수 있는 공간이라면, 챗봇의 사후 설명(그럴듯하지만 실제 과정과 무관할 수 있는)에 기대지 않고 내부 상태를 직접 관측할 창이 열린다. 숨은 기만이나 목표를 탐지하고, 모델이 테스트 상황을 자각하는 순간을 잡아내는 일은 곧 안전·정합성 검증의 토대다. 물론 해석가능성 연구는 특정 모델·기법에 묶인 초기 단계이고, '의식'이라는 단어가 붙는 순간 과장의 위험도 함께 커진다.</p>\n<h3>실무 적용</h3>\n<ul><li>모델의 '설명'을 곧 '실제 이유'로 신뢰하지 말고, 사후 합리화와 내부 표상을 구분하는 검증 관점을 프롬프트·평가 설계에 반영한다.</li><li>고위험 에이전트 파이프라인에는 출력만이 아니라 '내부 신호로 이상을 잡는' 해석가능성 기반 모니터링을 안전 요건으로 검토한다.</li><li>'의식' 같은 단어가 붙은 연구를 다룰 때는 '접근 의식 vs 현상 의식'처럼 주장의 범위를 정확히 옮겨, 마케팅적 과장과 실제 결과를 분리해 커뮤니케이션한다.</li></ul>\n<h3>Kenny의 관점</h3>\n<p>AI 제품을 만드는 입장에서 이 연구의 매력은 '의식'이라는 자극적 단어가 아니라 '관측 가능성'이라는 실무 자산에 있다. 나는 이것을 QA의 언어로 읽는다 — 모델의 자기 설명은 주장이고, 내부 표상에 대한 개입 실험은 증거다. 블랙박스의 출력만 보던 검증이 내부 상태를 계측하는 단계로 넘어갈 수 있다면, 신뢰는 '믿어 달라'가 아니라 '보여 줄 수 있다'로 바뀐다. 다만 나는 이 발견을 결론이 아니라 도구로 다룬다. '의식'의 무게에 눌리기보다, 안전을 계측 가능한 문제로 바꾸는 지렛대로 쓰는 편이 제품에 훨씬 유용하다.</p>\n<h3>출처</h3>\n<ul><li><a href=\"https://www.anthropic.com/research/global-workspace\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Anthropic: A global workspace in language models ↗</a></li><li><a href=\"https://venturebeat.com/technology/anthropics-new-j-lens-reveals-a-silent-workspace-inside-claude-that-mirrors-a-leading-theory-of-consciousness\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">VentureBeat: Anthropic's new J-lens reveals a silent workspace inside Claude ↗</a></li><li><a href=\"https://venturebeat.com/ai/anthropic-scientists-hacked-claudes-brain-and-it-noticed-heres-why-thats\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">VentureBeat: Anthropic scientists hacked Claude's brain — and it noticed ↗</a></li></ul>",
    "source": "Anthropic",
    "sourceUrl": "https://www.anthropic.com/research/global-workspace",
    "tags": [
      "Interpretability",
      "Claude",
      "AISafety"
    ],
    "thumb": ""
  },
  {
    "id": "2026-07-07-css-scroll-triggered-animations",
    "category": "design",
    "date": "2026-07-07",
    "title": "스크롤 트리거 vs 드리븐, JS 없는 스크롤 애니메이션",
    "rawTitle": "A First Look at Scroll-Triggered Animations",
    "summary": "CSS-Tricks가 Chrome 146에 처음 실린 '스크롤 트리거 애니메이션'을 소개했다. 임계점을 넘으면 고정 시간 재생되는 이 방식이, 진행률에 묶이는 스크롤 드리븐과 어떻게 다른지 짚는다.",
    "bodyHtml": "<p>스크롤에 반응하는 리빌 애니메이션은 오랫동안 인터섹션 옵서버 같은 JS 훅의 몫이었다. 그런데 CSS-Tricks가 6월 19일 소개한 '스크롤 트리거 애니메이션'이 이 패턴을 CSS 안으로 끌어들인다. Chrome 146에 처음 실린 이 기능은 요소가 특정 스크롤 임계점에 닿으면 애니메이션을 고정된 시간 동안 재생한다. 이미 자리 잡은 '스크롤 드리븐 애니메이션'과 이름이 헷갈리기 쉽지만, 둘은 전혀 다른 도구다 — 지금 그 경계를 정리해 둘 때다.</p>\n<blockquote>\"스크롤 트리거 애니메이션은 특정 스크롤 임계점을 넘어서면 고정된 시간 동안 재생된다.\"<cite>CSS-Tricks</cite></blockquote>\n<h3>무슨 일인가</h3>\n<p>핵심은 두 방식의 시간축이 다르다는 점이다. 스크롤 드리븐(<code>animation-timeline: scroll()</code>·<code>view()</code>)은 애니메이션 진행률을 스크롤 위치에 1:1로 묶어 '스크롤을 되감으면 애니메이션도 되감기는' 방식이라 고정 재생 시간이 없다. 반면 스크롤 트리거는 임계점 통과를 '신호'로만 삼아, 한 번 발동되면 정해진 duration 동안 독립적으로 완주한다. 새로 제안된 <code>timeline-trigger</code>가 발동 조건(예: <code>view() entry 100% exit 0%</code>)을 정의하고, <code>animation-trigger</code>가 <code>play-forwards</code>·<code>play-once</code>·<code>reset</code>·<code>replay</code> 같은 동작을 지정한다. 흔한 '스크롤하면 한 번 나타나는' 리빌 패턴을 JS 없이 선언형으로 얻는 것이다.</p>\n<h3>여러 시각</h3>\n<p>같은 '스크롤 애니메이션'이라도 목적에 따라 골라 써야 한다.</p>\n<ul><li><b>CSS-Tricks: 스크롤 드리븐(반대 방향 데모)</b> — 진행률 연동 방식은 두 열의 아이템이 스크롤에 따라 서로 반대로 흐르는 효과를, 가상요소 마스킹과 <code>view()</code>만으로 JS 없이 구현한다. 진행률에 정밀히 묶어야 하는 시각효과엔 이쪽이 정답이다.</li><li><b>브라우저 현실</b> — 같은 저자도 \"스크롤 드리븐은 크롬·사파리 밖에선 아직 지원이 제한적\"이라 인정한다. 트리거 방식 역시 Chrome 146 단독이라, 지금은 표현력과 호환성을 맞바꾸는 초기 단계다.</li></ul>\n<h3>왜 중요한가</h3>\n<p>이 구분을 흐리면 잘못된 도구로 문제를 풀게 된다. '한 번 나타나고 끝'인 리빌에 스크롤 드리븐을 쓰면 사용자가 위로 스크롤할 때마다 애니메이션이 되감겨 어색해지고, 반대로 패럴럭스처럼 스크롤에 딱 붙어야 할 효과에 트리거를 쓰면 뚝뚝 끊긴다. 네이티브 CSS로 내려오면 JS 번들과 인터섹션 옵서버 콜백이 줄어 성능·접근성 모두 이득이지만, 지원 범위가 좁은 지금은 폴백 설계가 전제 조건이다. '무엇이 표준으로 오고 있는가'를 미리 읽어 두는 것이 마이그레이션 비용을 가른다.</p>\n<h3>실무 적용</h3>\n<ul><li>'한 번 재생'이면 스크롤 트리거, '진행률 연동'이면 스크롤 드리븐 — 효과의 시간축부터 정하고 API를 고른다.</li><li>Chrome 146 단독 지원을 전제로, <code>@supports</code>와 프로그레시브 인핸스먼트로 미지원 환경엔 즉시 표시되는 폴백을 깐다.</li><li>QA 시 위·아래 반복 스크롤, 빠른 플링, <code>prefers-reduced-motion</code> 환경을 재현 시나리오에 넣어 되감김·끊김·과도한 모션을 잡는다.</li></ul>\n<h3>Kenny의 관점</h3>\n<p>프런트엔드에서 새 CSS 기능의 진짜 가치는 '화려함'이 아니라 '제거되는 JS'에 있다. 스크롤 리빌 하나 때문에 인터섹션 옵서버와 상태 관리 코드를 얹던 관행이 몇 줄의 선언형 CSS로 대체되면, 번들도 유지보수 부담도 함께 가벼워진다. 다만 나는 Chrome 단독 지원 단계의 기능을 프로덕션 기본값으로 삼지 않는다 — 대신 폴백을 먼저 깔고 인핸스먼트로 얹는다. 좋은 AX는 최신 문법을 빨리 쓰는 게 아니라, 지원이 무르익는 곡선 위에서 위험을 관리하며 올라타는 판단에서 나온다.</p>\n<h3>출처</h3>\n<ul><li><a href=\"https://css-tricks.com/css-scroll-triggered-animations-first-look/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">CSS-Tricks: A First Look at Scroll-Triggered Animations ↗</a></li><li><a href=\"https://css-tricks.com/scroll-driven-animations-opposing-scroll-directions/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">CSS-Tricks: Using Scroll-Driven Animations for Opposing Scroll Directions ↗</a></li></ul>",
    "source": "CSS-Tricks",
    "sourceUrl": "https://css-tricks.com/css-scroll-triggered-animations-first-look/",
    "tags": [
      "ScrollAnimations",
      "CSS",
      "Frontend"
    ],
    "thumb": ""
  },
  {
    "id": "2026-07-07-llm-groupthink-diversity",
    "category": "ai",
    "date": "2026-07-07",
    "title": "LLM의 획일화 함정, 다양성으로 뚫는다",
    "rawTitle": "LLMs are stuck in a groupthink rut. This startup is trying to get them out.",
    "summary": "대다수 LLM이 열린 질문에 비슷한 답만 내놓는 '획일화'가 도마에 올랐다. 호주 스타트업 스프링보즈의 모델 Flint는 온도값 대신 필요한 지점에만 변주를 주입해 다양성을 되살린다.",
    "bodyHtml": "<p>거대 언어 모델이 빠르게 똑똑해지는 사이, 정반대의 결함이 도마에 올랐다 — 다들 너무 비슷하게 답한다는 것이다. MIT 테크놀로지 리뷰가 7월 1일 조명한 호주 스타트업 스프링보즈(Springboards)는, 이 '획일화(groupthink)'를 정면으로 겨냥한 모델 Flint를 내놨다. 대다수 LLM에 \"1부터 10 중 아무 숫자\"를 물으면 약속이나 한 듯 7을 뱉고, 밴드 이름을 시키면 glass·neon·velvet·static 언저리로 수렴한다. 창의성을 파는 도구가 정작 뻔한 답으로 회귀하는 역설이다.</p>\n<blockquote>\"다양성은 아이디어를 촉발할 때 큰 힘이 된다. 기계에 전부 맡겨 잿빛의 지루한 세계로 끝나지 말자.\"<cite>Pip Bingemann, Springboards CEO</cite></blockquote>\n<h3>무슨 일인가</h3>\n<p>Flint는 알리바바의 Qwen 3을 기반으로, 다양한 출력을 내도록 특별히 훈련됐다. 핵심 발상은 출력 전체에 '온도(temperature)'라는 뭉툭한 손잡이를 올리는 대신, 변주가 유익한 전략적 지점을 골라 그 순간에만 덜 예측 가능한 단어·표현을 주입하는 것이다. 문제의 규모는 학계가 이미 측정해 뒀다. NeurIPS 2025 최우수 논문 '인공 하이브마인드(Artificial Hivemind)'는 25개 LLM에 '시간'의 은유를 각 50번씩, 총 1,250번 생성시켰는데 대부분이 \"시간은 강\" 또는 \"시간은 직조공\" 변형으로 수렴했다. 모델 내부의 반복(intra-model)과 모델 간 수렴(inter-model)이 동시에 나타난 것이다.</p>\n<h3>여러 시각</h3>\n<p>획일화가 '모델만의 문제'가 아니라는 지적도 나란히 있다.</p>\n<ul><li><b>VentureBeat(연구 인용)</b> — 생성형 AI는 개인의 창의성은 끌어올리지만 집단의 다양성은 갉아먹는다. 한 연구에서 인간이 쓴 에세이는 GPT-4 에세이보다 집단 의미 다양성에 약 2~8배 더 기여했다. 개별 산출물이 더 창의적으로 보여도, 모아 놓으면 서로 닮아 간다는 것이다.</li><li><b>정렬 훈련의 부작용</b> — 학계는 획일화의 뿌리를 정렬(alignment) 훈련에서 찾는다. 익숙하고 무난한 응답에 보상이 쏠리면서, 새로움이 깃드는 분포의 꼬리가 잘려 나간다는 진단이다.</li></ul>\n<h3>왜 중요한가</h3>\n<p>AI로 만든 카피·아이디어·디자인이 서로 닮아 갈수록, 그것으로 빚은 제품과 브랜드도 평준화된다. 모두가 같은 모델을 같은 방식으로 쓰면 차별화라는 해자 자체가 마른다. 아이디어 발상 단계에서 다양성이 무너지면, 탐색해야 할 선택지가 조용히 사라진 채 '그럴듯한 평균값'만 남는다. 창의성을 표방하는 도구일수록, 다양성은 있으면 좋은 옵션이 아니라 결과물의 질을 좌우하는 핵심 지표가 된다.</p>\n<h3>실무 적용</h3>\n<ul><li>브레인스토밍·카피 생성엔 단일 모델 단발 호출 대신 다중 모델·다중 페르소나·시드 변주로 표본의 다양성을 확보한다.</li><li>온도를 무작정 올리면 품질이 함께 무너지므로, Flint처럼 '변주가 필요한 지점'만 골라 다양화하는 프롬프트·파이프라인 설계를 우선한다.</li><li>AI 산출물의 다양성을 의미 임베딩 군집도 같은 정량 지표로 QA해, 획일화를 눈이 아니라 수치로 잡는다.</li></ul>\n<h3>Kenny의 관점</h3>\n<p>AI 제품을 만드는 입장에서 이 논의의 핵심은 '더 똑똑한 모델'이 아니라 '덜 똑같은 출력'이다. 나는 다양성을 부산물이 아니라 설계 요구사항으로 다룬다 — 어디서 변주가 가치를 만들고 어디서 일관성이 중요한지를 먼저 나누고, 그에 맞춰 모델·온도·페르소나를 배치한다. QA의 언어로 옮기면, 획일화는 '눈에 띌 때 고치는 버그'가 아니라 '지표로 상시 감시하는 회귀'다. 남들과 똑같이 프롬프트하는 순간 제품도 똑같아진다는 사실을, 나는 경계로 삼는다.</p>\n<h3>출처</h3>\n<ul><li><a href=\"https://www.technologyreview.com/2026/07/01/1140003/llms-are-stuck-in-a-groupthink-rut-this-startup-is-trying-to-get-them-out/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">MIT Technology Review: LLMs are stuck in a groupthink rut. This startup is trying to get them out. ↗</a></li><li><a href=\"https://venturebeat.com/ai/gen-ai-boosts-individual-creativity-at-the-cost-of-collective-diversity-study-finds/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">VentureBeat: Gen AI boosts individual creativity at the cost of collective diversity, study finds ↗</a></li></ul>",
    "source": "MIT Technology Review",
    "sourceUrl": "https://www.technologyreview.com/2026/07/01/1140003/llms-are-stuck-in-a-groupthink-rut-this-startup-is-trying-to-get-them-out/",
    "tags": [
      "LLM",
      "Diversity",
      "Creativity"
    ],
    "thumb": ""
  },
  {
    "id": "2026-07-06-view-transitions-webgpu-vs-css",
    "category": "design",
    "date": "2026-07-06",
    "title": "페이지 전환, 어디까지 CSS로? — WebGPU와의 분업",
    "rawTitle": "Building Persistent Page Transitions with WebGPU and Vanilla JavaScript",
    "summary": "Codrops가 WebGPU로 DOM 밖에서 이미지 평면을 유지하며 지속되는 페이지 전환을 구현하는 기법을 공개했다. 네이티브 뷰 트랜지션이 Baseline에 오른 지금, 무엇을 CSS에 맡기고 무엇을 GPU로 만들지 그 분업을 짚는다.",
    "bodyHtml": "<p>세련된 페이지 전환은 이제 선택이 아니라 기대치가 됐다. 마침 두 흐름이 나란히 도착했다. 하나는 네이티브 CSS 뷰 트랜지션이 세 엔진에서 모두 지원되며 Baseline에 올라 '문법 몇 줄'로 전환을 얻게 된 것이고, 다른 하나는 Codrops가 WebGPU로 DOM 밖에서 이미지 평면을 유지하며 사이트 전체에 지속되는 전환을 구현한 심화 튜토리얼을 6월 30일 공개한 것이다. 표준이 성숙할수록 '어디까지 CSS로 하고, 어디부터 GPU로 갈까'라는 분업의 질문이 오히려 또렷해진다.</p>\n<blockquote>\"전환 동안 모든 평면을 DOM 추적에서 떼어내면, 렌더 루프가 GSAP 트윈을 덮어쓰지 못해 바운드 애니메이션이 방해 없이 완주한다.\"<cite>Codrops (Ben Paine)</cite></blockquote>\n<h3>무슨 일인가</h3>\n<p>Codrops의 기법은 페이지마다 캔버스를 새로 그리지 않는다. 사이트 전체에 걸쳐 단 하나의 WebGPU 레이어를 두고, 이미지 평면들을 그 위에 지속시켜 DOM 상태가 바뀔 때 생기는 '팝(pop)' 현상을 없앤다. 각 평면은 <code>getBoundingClientRect()</code>로 측정한 DOM '슬롯'에 바인딩돼 매 프레임 위치를 갱신하다가, 전환이 시작되면 추적에서 분리된다. 전환은 세 가지 상태 — 유지(바운드를 모핑), 제거(불투명도 0으로 페이드), 추가(즉시 찍고 페이드인) — 로 처리되고, 가벼운 바닐라 JS 라우터가 내비게이션을 가로채 이전·다음 페이지의 out()·in()을 동시에 발사한다. CSS만으로는 닿기 어려운 수준의 시각적 제어를 GPU로 확보하는 접근이다.</p>\n<h3>여러 시각</h3>\n<p>같은 '페이지 전환'이라는 목표를 두 진영이 정반대 무게중심으로 푼다.</p>\n<ul><li><b>web.dev(Bramus)</b> — 동일 문서 뷰 트랜지션이 파이어폭스 144 출시와 함께 'Baseline Newly available'에 올랐다. <code>document.startViewTransition()</code>, <code>view-transition-name</code>, <code>:active-view-transition</code> 같은 API만으로 대부분의 전환을 선언형으로 얻는다 — 코드도, 유지보수 비용도 최소인 기본값이다.</li><li><b>Codrops(WebGPU)</b> — 반대로 프레임워크 없이 GPU 씬을 직접 소유해 브랜드성 짙은 커스텀 전환을 만든다. 대신 라우터·바운드 추적·메모리 관리를 손수 져야 한다. 표현력과 복잡도를 맞바꾸는, 명백히 상급 옵션이다.</li></ul>\n<h3>왜 중요한가</h3>\n<p>핵심은 '둘 중 하나'가 아니라 계층화다. 뷰 트랜지션이 Baseline에 오르면서 부드러운 전환의 '바닥'이 표준으로 깔렸고, 그 위에서 WebGPU는 히어로 페이지나 쇼케이스처럼 정말 필요한 곳에만 얹는 사치품이 된다. 표준이 성숙할수록 커스텀 엔진의 존재 이유는 '기본을 대체'가 아니라 '기본을 넘어서는 특정 순간'으로 좁혀진다. 무엇을 CSS에 위임하고 무엇을 직접 만들지 가르는 판단력이, 성능과 유지보수성을 동시에 지키는 열쇠다.</p>\n<h3>실무 적용</h3>\n<ul><li>기본 내비게이션 전환은 <code>@view-transition</code>·<code>view-transition-name</code>으로 먼저 깔고, 프로그레시브 인핸스먼트로 미지원 환경을 감싼다.</li><li>WebGPU 커스텀 전환은 랜딩·캠페인 페이지 등 투자 대비 효과가 확실한 소수 지점에만 국한하고, 전환 성능 예산(프레임·메모리)을 명시적으로 잡는다.</li><li>전환을 QA할 때 느린 API·SSR로 인한 지연, 종횡비 왜곡, 저사양 GPU 폴백을 재현 시나리오에 반드시 포함한다.</li></ul>\n<h3>Kenny의 관점</h3>\n<p>프런트엔드에서 '멋짐'의 비용은 늘 유지보수와 성능으로 청구된다. 나는 이 둘을 경쟁이 아니라 계층으로 본다 — 표준 뷰 트랜지션을 기본값으로 깔아 대부분을 저비용으로 해결하고, WebGPU는 브랜드 경험이 매출·기억에 직결되는 극소수 지점에만 쓰는 것이다. 화려한 데모에 홀려 사이트 전체를 커스텀 엔진에 태우는 순간, 애니메이션이 아니라 기술 부채가 지속된다. 좋은 AX 판단은 '무엇을 만들까'만큼이나 '무엇을 표준에 맡길까'를 아는 데서 나온다.</p>\n<h3>출처</h3>\n<ul><li><a href=\"https://tympanus.net/codrops/2026/06/30/building-persistent-page-transitions-with-webgpu-and-vanilla-javascript/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Codrops: Building Persistent Page Transitions with WebGPU and Vanilla JavaScript ↗</a></li><li><a href=\"https://web.dev/blog/same-document-view-transitions-are-now-baseline-newly-available\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">web.dev: Same-document view transitions have become Baseline Newly available ↗</a></li></ul>",
    "source": "Codrops",
    "sourceUrl": "https://tympanus.net/codrops/2026/06/30/building-persistent-page-transitions-with-webgpu-and-vanilla-javascript/",
    "tags": [
      "ViewTransitions",
      "WebGPU",
      "Frontend"
    ],
    "thumb": ""
  },
  {
    "id": "2026-07-06-sparse-attention-llm-bottleneck",
    "category": "ai",
    "date": "2026-07-06",
    "title": "LLM 병목을 뚫었다는 스타트업 — 희소 어텐션의 승부수",
    "rawTitle": "A startup claims it broke through a bottleneck that's holding back LLMs",
    "summary": "마이애미 스타트업 서브쿼드래틱이 밀집 어텐션을 희소 어텐션으로 바꿔 최대 56배 빠르고 훨씬 싼 LLM을 만들었다고 주장한다. 알고리즘·하드웨어·아키텍처, 세 갈래로 벌어지는 AI 비용 절감 경쟁을 비교한다.",
    "bodyHtml": "<p>거대 언어 모델의 비용과 속도는 결국 '어텐션'이라는 병목에 걸려 있다. 마이애미의 스타트업 서브쿼드래틱(Subquadratic)이 바로 이 병목을 뚫었다고 주장하며 6월 19일 MIT 테크놀로지 리뷰의 조명을 받았다. 트랜스포머의 표준인 밀집(dense) 어텐션 — 모든 토큰을 다른 모든 토큰과 비교하는 방식 — 을 희소(sparse) 어텐션으로 대체해, 중요한 관계만 골라 처리한다는 것이다. 마침 하드웨어·아키텍처 진영도 각자의 방식으로 토큰 비용을 깎아 내려오는 중이라, 'AI를 싸게 만드는 법'의 지형이 세 갈래로 갈라지고 있다.</p>\n<blockquote>\"모든 것을 비교하는 대신, 어떤 관계가 중요한지 동적으로 선택한다.\"<cite>Subquadratic (MIT Technology Review 인용)</cite></blockquote>\n<h3>무슨 일인가</h3>\n<p>서브쿼드래틱의 모델 'SubQ'가 내세우는 수치는 공격적이다. 기준 테스트에서 FlashAttention 기반 모델보다 56배 빠르고, 한 벤치마크를 처리하는 데 앤트로픽 Opus 4.6이 2,600달러가 드는 것을 8달러로 끝냈다고 주장한다. 컨텍스트 창은 최상위 경쟁작(약 100만 토큰)을 훌쩍 넘는 1,200만 토큰, 경쟁 코딩 평가 LiveCodeBench에서 89.7%, 극한 길이의 '건초 더미 속 바늘' 검색에서 98%를 기록했다. 독립 평가기관 Appen이 속도 향상 상당수를 확인했지만, SubQ가 백지에서 학습된 게 아니라 기존 Qwen 가중치에서 부트스트랩됐고 공개 접근이 제한적이라는 점에서 회의론도 남아 있다.</p>\n<h3>여러 시각</h3>\n<p>'AI를 싸게 만든다'는 목표에 세 진영이 서로 다른 층위로 달려든다.</p>\n<ul><li><b>VentureBeat(Blackwell 인프라)</b> — 알고리즘이 아니라 하드웨어·소프트웨어 스택에서 답을 찾는다. 엔비디아 Blackwell에 최적화 스택과 오픈소스 모델을 결합해 토큰당 비용을 4~10배 낮췄고, \"하드웨어는 방정식의 절반일 뿐\"이라며 소프트웨어 전환의 몫을 강조한다.</li><li><b>VentureBeat(DeepSeek V4 아키텍처)</b> — 모델 아키텍처 자체를 급진적으로 바꾼다. 초희소 MoE 설계로 100만 토큰 컨텍스트를 단 5.48GB HBM에 담아, 서구식 표준 구조가 89GB를 쓰는 것과 대비된다. 비용의 '해자'를 아키텍처로 무너뜨리는 접근이다.</li></ul>\n<h3>왜 중요한가</h3>\n<p>이 세 갈래는 경쟁이 아니라 곱셈으로 쌓인다. 어텐션 알고리즘(SubQ), 추론 하드웨어(Blackwell), 모델 아키텍처(DeepSeek)에서의 절감이 겹치면 토큰당 비용은 계단식이 아니라 급락하는 곡선을 그린다. 비용이 이렇게 무너지면 지금은 '너무 비싸서' 접었던 제품 — 문서 전체를 통째로 넣는 초장문 컨텍스트, 실시간 에이전트 루프 — 이 갑자기 경제성을 얻는다. 다만 SubQ의 부트스트랩 논란이 보여주듯, 화려한 벤치마크와 재현 가능한 실제 성능 사이의 간극은 늘 검증의 대상이다.</p>\n<h3>실무 적용</h3>\n<ul><li>모델 선택을 성능 벤치마크뿐 아니라 '유효 토큰당 비용'으로 평가한다 — 컨텍스트 길이·처리 속도·요금을 함께 놓고 본다.</li><li>초장문 컨텍스트가 싸질 것을 전제로, 지금은 잘라 넣던 프롬프트 설계를 '전체를 넣는' 방향으로 재검토할 여지를 남긴다.</li><li>'56배', '1/300 비용' 같은 벤더 수치는 독립 평가와 재현 조건(어떤 기준선 대비인지)을 확인한 뒤에만 아키텍처 결정에 반영한다.</li></ul>\n<h3>Kenny의 관점</h3>\n<p>AI 제품을 만드는 입장에서 이 경쟁의 진짜 수혜는 '더 똑똑한 모델'이 아니라 '더 싼 토큰'이다. 비용이 한 자릿수로 떨어질 때마다, 데모에서만 가능하던 경험이 프로덕션 예산 안으로 들어온다 — 그게 AX의 판을 넓힌다. 동시에 나는 SubQ의 부트스트랩 논란을 QA의 언어로 읽는다: 벤치마크는 주장이고, 재현 조건이 증거다. 벤더의 배수(倍數)에 설계를 걸기 전에 '무엇 대비, 어떤 조건에서'를 묻는 습관이, 비용 곡선을 진짜 내 제품의 경쟁력으로 바꾸는 분기점이다.</p>\n<h3>출처</h3>\n<ul><li><a href=\"https://www.technologyreview.com/2026/06/19/1139313/a-startup-claims-it-broke-through-a-bottleneck-thats-holding-back-llms/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">MIT Technology Review: A startup claims it broke through a bottleneck that's holding back LLMs ↗</a></li><li><a href=\"https://venturebeat.com/infrastructure/ai-inference-costs-dropped-up-to-10x-on-nvidias-blackwell-but-hardware-is\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">VentureBeat: AI inference costs dropped up to 10x on Nvidia's Blackwell ↗</a></li><li><a href=\"https://venturebeat.com/infrastructure/how-deepseeks-radical-architecture-is-shattering-silicon-valleys-token-moat\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">VentureBeat: How DeepSeek's radical architecture is shattering Silicon Valley's token moat ↗</a></li></ul>",
    "source": "MIT Technology Review",
    "sourceUrl": "https://www.technologyreview.com/2026/06/19/1139313/a-startup-claims-it-broke-through-a-bottleneck-thats-holding-back-llms/",
    "tags": [
      "LLM",
      "Efficiency",
      "Attention"
    ],
    "thumb": ""
  },
  {
    "id": "2026-07-05-css-exploit-blink-uaf",
    "category": "design",
    "date": "2026-07-05",
    "title": "'CSS 익스플로잇'의 진실 — 크롬 취약점이 남긴 교훈",
    "rawTitle": "An Exploit … in CSS?!",
    "summary": "크롬 Blink 엔진이 @font-feature-values를 처리하는 과정에서 원격 코드 실행으로 이어지는 UAF 취약점(CVE-2026-2441)이 발견됐다. 'CSS가 뚫렸다'는 헤드라인의 실체와 프런트엔드가 챙길 교훈을 짚는다.",
    "bodyHtml": "<p>선언형 언어라 \"안전하다\"고 여겨지던 CSS가 보안 뉴스의 주인공이 됐다. 크롬의 렌더링 엔진 Blink에서 CSS의 @font-feature-values 규칙 처리와 얽힌 Use After Free(UAF) 취약점, CVE-2026-2441이 공개된 것이다. CSS-Tricks의 Lee Meyer는 이 사건을 해부하며 'CSS 익스플로잇'이라는 자극적인 헤드라인과 실제 공격 구조 사이의 간극을 파고든다. 스타일시트 한 줄이 정말 브라우저를 뚫을 수 있는지, 프런트엔드 개발자가 무엇을 해야 하는지 정리했다.</p>\n<blockquote>\"조작된 HTML 페이지를 통해 원격 공격자가 샌드박스 안에서 임의 코드를 실행할 수 있게 했다.\"<cite>CSS-Tricks (CVE-2026-2441 설명 인용)</cite></blockquote>\n<h3>무슨 일인가</h3>\n<p>크롬이 @font-feature-values 규칙을 파싱하면 내부적으로 CSSFontFeaturesValueMap이라는 객체가 만들어지는데, 이를 떠받치는 HashMap 자료구조의 메모리 관리에 결함이 있었다. 해제된 메모리를 다시 참조할 수 있게 된 틈을 악성 자바스크립트가 타입 혼동(type confusion)으로 악용하면, 브라우저 샌드박스 안에서 임의 코드 실행까지 이어진다. 즉 CSS는 취약점을 '여는 방아쇠'였고, 실제 공격을 수행한 것은 자바스크립트였다. 크롬 145.0.7632.75, 엣지 145.0.3800.58 이상으로 패치가 배포됐으니 크로미움 계열 브라우저는 즉시 업데이트하는 것이 답이다.</p>\n<h3>여러 시각</h3>\n<p>'CSS와 보안'이라는 오래된 질문에 이번 사건은 새로운 각도를 더한다.</p>\n<ul><li><b>CSS-Tricks(Chris Coyier)</b> — 일찍이 :visited 방문 기록 탐지, 속성 선택자 키로거 같은 순수 CSS 공격 벡터를 검토한 뒤 \"CSS 자체는 특별히 위험한 보안 문제가 아니다\"라고 정리했다. 언어로서의 CSS는 안전하다는 이 통념이, 이번엔 언어가 아니라 '엔진 구현'에서 깨질 수 있음이 드러난 셈이다.</li><li><b>web.dev(How Browsers Work)</b> — 브라우저 동작 원리 관점에서 보면 Blink·Gecko·WebKit 같은 렌더링 엔진은 CSS를 파싱해 내부 객체로 변환하는데, 바로 그 파싱 파이프라인이 공격 표면이 된다. 어떤 입력이든 파서를 거치는 순간 보안의 영역에 들어간다는 각도다.</li></ul>\n<h3>왜 중요한가</h3>\n<p>이번 취약점의 본질은 CSS 문법이 아니라 C++ 기반 엔진의 메모리 안전성 문제다. 파이어폭스가 CSS 엔진을 Rust로 새로 쓰면서 이런 계열의 버그를 원천 차단한 것과 대비되며, 크로미움도 Rust 도입을 늘려가는 배경이 여기에 있다. 동시에 이 사건은 기술 커뮤니케이션의 문제이기도 하다. 'CSS 익스플로잇'이라는 헤드라인만 보면 스타일시트를 겁내게 되지만, 실제 실행 벡터는 자바스크립트였다. 원인과 방아쇠를 구분하지 못하면 엉뚱한 곳에 방어선을 치게 된다.</p>\n<h3>실무 적용</h3>\n<ul><li>크로미움 기반 환경(브라우저는 물론 일렉트론·임베디드 웹뷰 포함)의 보안 패치 추적과 최소 버전 정책을 점검한다.</li><li>서드파티 CSS와 사용자 생성 스타일은 신뢰 경계 밖으로 두고, CSP와 외부 스타일시트 무결성 검증(SRI)을 기본으로 깐다.</li><li>보안 공지를 리포팅할 때 '트리거'와 '실행 벡터'를 구분해 기록한다 — QA에서 재현 조건과 근본 원인을 분리하는 습관과 같다.</li></ul>\n<h3>Kenny의 관점</h3>\n<p>\"CSS니까 안전하다\"는 가정은 사실 언어에 대한 신뢰가 아니라 엔진 구현에 대한 신뢰였다는 걸 이번 사건이 보여준다. 프런트엔드 개발자가 엔진의 메모리 버그를 직접 고칠 수는 없지만, 패치 배포 속도와 웹뷰 업데이트 체계는 우리 손에 있는 방어선이다. 그리고 QA 관점에서 이 글의 진짜 교훈은 헤드라인 리터러시다 — 자극적인 제목 앞에서 공포가 아니라 '무엇이 방아쇠이고 무엇이 실행 벡터인가'를 묻는 침착함이, 팀의 대응 품질을 가른다.</p>\n<h3>출처</h3>\n<ul><li><a href=\"https://css-tricks.com/an-exploit-in-css/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">CSS-Tricks: An Exploit … in CSS?! ↗</a></li><li><a href=\"https://css-tricks.com/css-security-vulnerabilities/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">CSS-Tricks: CSS Security Vulnerabilities ↗</a></li><li><a href=\"https://web.dev/articles/howbrowserswork\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">web.dev: How browsers work ↗</a></li></ul>",
    "source": "CSS-Tricks",
    "sourceUrl": "https://css-tricks.com/an-exploit-in-css/",
    "tags": [
      "CSS",
      "Security",
      "Browser"
    ],
    "thumb": ""
  },
  {
    "id": "2026-07-05-claude-science-workbench",
    "category": "ai",
    "date": "2026-07-05",
    "title": "채팅을 넘어 실험대로 — '클로드 사이언스'가 여는 AI 워크벤치",
    "rawTitle": "Claude Science, an AI workbench for scientists",
    "summary": "앤트로픽이 문헌 분석부터 컴퓨트 관리, 결과 검증까지 한 화면에 담은 과학자용 AI 작업환경 '클로드 사이언스'를 베타 출시했다. 채팅형 AI가 도메인 워크벤치로 진화하는 신호다.",
    "bodyHtml": "<p>앤트로픽이 6월 30일 과학자를 위한 통합 AI 연구 환경 '클로드 사이언스(Claude Science)'를 macOS·리눅스 베타로 내놨다. 문헌 분석, 다단계 연구 실행, 출판 수준의 산출물 생성, 컴퓨팅 자원 관리를 하나의 워크스페이스에서 처리하고, 모든 과정에 재현성과 감사 가능한 이력을 남기는 것이 핵심이다. 구글 딥마인드가 수년째 갈아온 밭에 오픈AI가 전담 조직을 꾸려 뛰어든 데 이어, 'AI for Science'가 AI 경쟁의 다음 격전지임을 보여주는 행보다.</p>\n<blockquote>\"클로드 사이언스는 이 파편화된 도구들을 하나의 연구 환경으로 모아, 과학자가 연구의 모든 단계를 수행할 수 있게 한다.\"<cite>Anthropic</cite></blockquote>\n<h3>무슨 일인가</h3>\n<p>클로드 사이언스는 3D 단백질 구조, 유전체 트랙, 화학 구조, 논문 원고를 네이티브로 렌더링하고, 각 산출물에 코드와 방법론이 따라붙어 전 과정을 추적할 수 있다. 컴퓨트는 로컬 머신부터 HPC 클러스터·온디맨드 서비스까지, 단일 GPU에서 수백 대 규모로 자동 확장된다. 유전체학·단백질체학·구조생물학·화학정보학용 스킬과 커넥터 60여 개가 사전 구성돼 있고, 인용과 계산을 자동 점검하며 오류를 자가 수정하는 '리뷰어 에이전트'가 내장됐다. 접근은 Pro·Max·Team·Enterprise 요금제에 연동되며, 프로젝트당 최대 3만 달러 크레딧을 주는 연구 지원 프로그램이 7월 15일까지 신청을 받는다.</p>\n<h3>여러 시각</h3>\n<p>같은 시장을 노리는 경쟁사의 움직임과 회의론을 겹쳐 보면 그림이 선명해진다.</p>\n<ul><li><b>MIT Technology Review</b> — 오픈AI도 'OpenAI for Science' 전담팀(케빈 웨일 총괄)을 꾸리고 GPT-5를 과학 협업자로 내세운다. 박사급 과학 문제(GPQA)에서 GPT-5.2가 92%를 기록할 만큼 능력은 급상승했지만, '새 발견'이라던 결과가 기존 해법의 재발견으로 드러난 논란, 전문가도 놓치는 미묘한 오류, 사용자 비위를 맞추며 틀린 생각을 검증해 주는 문제 등 과학계의 회의론도 만만치 않다고 전한다.</li></ul>\n<h3>왜 중요한가</h3>\n<p>주목할 것은 제품의 형태다. 챗봇에 질문을 던지는 방식에서, 도메인 도구·데이터·컴퓨트·산출물이 통합된 '작업환경'으로 무게중심이 옮겨가고 있다. 특히 리뷰어 에이전트와 감사 가능한 이력은 MIT 테크놀로지 리뷰가 짚은 회의론 — 미묘한 오류와 검증 불가능성 — 에 대한 제품 차원의 응답이다. 생성 능력이 아니라 검증과 재현성을 1급 기능으로 올린 것이며, 이는 과학을 넘어 전문가용 AI 도구 전반이 따라갈 방향이다.</p>\n<h3>실무 적용</h3>\n<ul><li>전문가용 AX를 설계할 때 채팅 UI가 아니라 도메인 도구·데이터·산출물이 통합된 워크벤치를 기준으로 잡는다.</li><li>AI 산출물에 코드·출처·방법론이 따라붙는 '감사 가능한 아티팩트' 패턴을 UI에 도입해 결과를 신뢰할 근거를 함께 준다.</li><li>생성과 분리된 검증 에이전트(인용·계산 점검)를 워크플로에 내장해 미묘한 오류가 사용자에게 닿기 전에 걸러낸다.</li></ul>\n<h3>Kenny의 관점</h3>\n<p>전문가 도구에서 AI의 신뢰는 모델 벤치마크가 아니라 검증·재현성의 UX에서 나온다고 본다. 클로드 사이언스가 리뷰어 에이전트와 추적 가능한 산출물을 전면에 세운 건, '믿어달라'가 아니라 '검증하게 해주겠다'는 설계 철학의 전환이다. 이 패턴은 과학자만의 것이 아니다 — 기획 문서의 근거 추적, QA 리포트의 재현 절차처럼, 내가 다루는 도구들에도 같은 워크벤치 문법을 적용할 수 있다. 채팅은 AI 경험의 시작점이었을 뿐, 종착지가 아니다.</p>\n<h3>출처</h3>\n<ul><li><a href=\"https://www.anthropic.com/news/claude-science-ai-workbench\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Anthropic: Claude Science, an AI workbench for scientists ↗</a></li><li><a href=\"https://www.technologyreview.com/2026/01/26/1131728/inside-openais-big-play-for-science/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">MIT Technology Review: Inside OpenAI's big play for science ↗</a></li></ul>",
    "source": "Anthropic",
    "sourceUrl": "https://www.anthropic.com/news/claude-science-ai-workbench",
    "tags": [
      "AIforScience",
      "Anthropic",
      "AXDesign"
    ],
    "thumb": ""
  },
  {
    "id": "2026-07-04-contrast-color-baseline",
    "category": "design",
    "date": "2026-07-04",
    "title": "글자색을 브라우저가 고른다 — contrast-color()",
    "rawTitle": "New to the web platform in April",
    "summary": "contrast-color()가 크롬 147과 함께 4대 엔진에 모두 안착해 Baseline이 됐다. 배경색만 주면 브라우저가 흑·백 중 대비가 높은 글자색을 자동으로 고른다.",
    "bodyHtml": "<p>배경색에 따라 글자를 검정으로 할지 흰색으로 할지 고민하던 일을, 이제 브라우저가 대신 계산한다. CSS의 contrast-color() 함수가 크롬 147·엣지 147·파이어폭스 146·사파리 26에 모두 실리며 'Baseline 신규 지원'에 올랐다. 색 하나만 넘기면 그 위에서 가장 대비가 큰 흑 또는 백을 돌려주는, 접근성을 겨냥한 함수다. 다크 모드·사용자 테마·동적 색상처럼 배경이 런타임에 바뀌는 UI에서 특히 쓸모가 크다.</p>\n<blockquote>\"크롬 147이 contrast-color()를 출시하면서, 이 접근성 기능이 모든 주요 엔진에서 쓸 수 있는 Baseline 신규 기능이 됐다.\"<cite>web.dev</cite></blockquote>\n<h3>무슨 일인가</h3>\n<p>contrast-color()는 대비를 '검사'하는 게 아니라, 주어진 색 위에서 검정과 흰색 중 대비가 높은 쪽으로 곧장 '해석'된다. 예전 이름은 color-contrast()였고 CSS Color Module Level 5에 정의돼 있다. 사용법은 <code>color: contrast-color(var(--bg))</code>처럼 단순하다. 다만 아직은 흑·백 두 값만 반환하고 임의의 대비 비율을 지정하는 문법은 표준에서 빠져, 미묘한 색 조정이 필요한 디자인에는 손이 더 간다. WCAG 2.x의 명도 대비를 기준으로 삼을지, 차세대 APCA를 따를지도 아직 정리 중인 영역이다.</p>\n<h3>여러 시각</h3>\n<p>편리함 뒤에는 '흑백만 돌려준다'는 한계를 둘러싼 논쟁이 있다.</p>\n<ul><li><b>CSS-Tricks(대체 구현)</b> — 사파리·파이어폭스가 없던 시절부터, OKLCH 상대 색상 문법으로 <code>oklch(from var(--bg) round(1.21 - L) 0 0)</code> 한 줄이면 흑백 판정을 흉내 낼 수 있다고 정리한다. WCAG 명도 공식을 CSS로 옮기는 대신 인지 명도(L)를 쓰는, APCA에 더 가까운 접근이다.</li><li><b>CSS-Tricks(비판)</b> — Andy Clarke는 순수 흑백의 대비가 \"너무 높아 오히려 읽기 불편하다\"고 지적한다. 기술적으로 접근성을 통과해도 실제 가독성은 나빠질 수 있다는 것. 오프화이트나 반투명 같은 선택지를 못 주는 게 이 함수의 약점이다.</li></ul>\n<h3>왜 중요한가</h3>\n<p>색 대비는 접근성 감사에서 가장 흔히 걸리는 항목이고, 지금까지는 디자이너·개발자가 조합마다 수동으로 맞춰 왔다. contrast-color()는 그 유지보수 부담을 브라우저로 넘긴다. 사용자가 배경색을 고르는 테마 기능이나, 데이터로 색이 정해지는 차트·태그처럼 '빌드 시점에 색을 알 수 없는' 경우에 값을 미리 계산할 필요가 사라진다. 다만 법적 기준인 WCAG 2.0과 실제 가독성(APCA) 사이의 간극이 남아 있어, 자동화가 곧 '최선의 가독성'을 뜻하지는 않는다.</p>\n<h3>실무 적용</h3>\n<ul><li>사용자·데이터로 배경이 정해지는 배지·태그·버튼의 글자색은 contrast-color()로 두어 조합별 하드코딩을 없앤다.</li><li>구버전 사파리·파이어폭스를 커버해야 하면 @supports로 감싸고, OKLCH round() 한 줄을 폴백으로 둔다.</li><li>흑백 대비가 과할 땐 color-mix()로 결과를 배경과 살짝 섞어 눈이 편한 준-검정/준-흰색을 만든다.</li></ul>\n<h3>Kenny의 관점</h3>\n<p>이 함수의 진짜 가치는 접근성을 '사후 감사'에서 '설계 기본값'으로 끌어내린다는 데 있다. 예전엔 색 조합이 늘 때마다 대비를 다시 검사했지만, 이제 규칙을 한 번 선언하면 브라우저가 지켜 준다. 다만 나는 이걸 만능으로 보지 않는다 — Andy Clarke의 지적처럼 '통과'와 '읽기 편함'은 다르다. contrast-color()로 안전선을 깔되, 브랜드 색과 가독성의 균형은 여전히 사람이 조율하는 게 좋은 프런트엔드의 태도다.</p>\n<h3>출처</h3>\n<ul><li><a href=\"https://web.dev/blog/web-platform-04-2026\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">web.dev: New to the web platform in April (contrast-color Baseline) ↗</a></li><li><a href=\"https://css-tricks.com/approximating-contrast-color-with-other-css-features/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">CSS-Tricks: Approximating contrast-color() With Other CSS Features ↗</a></li><li><a href=\"https://css-tricks.com/the-thing-about-contrast-color/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">CSS-Tricks: The thing about contrast-color ↗</a></li></ul>",
    "source": "web.dev",
    "sourceUrl": "https://web.dev/blog/web-platform-04-2026",
    "tags": [
      "CSS",
      "Accessibility",
      "Color"
    ],
    "thumb": ""
  },
  {
    "id": "2026-07-04-ai-agents-not-coworkers",
    "category": "ai",
    "date": "2026-07-04",
    "title": "AI 에이전트는 당신의 동료가 아니다",
    "rawTitle": "AI agents are not your coworkers",
    "summary": "MS·오픈AI·앤트로픽·구글이 에이전트를 '디지털 동료'로 파는 지금, 그 이름표가 오히려 사람의 감독을 무디게 한다는 연구가 나왔다. '직원'이라 부르자 관리자가 오류를 18% 덜 잡아냈다.",
    "bodyHtml": "<p>AI 에이전트에 이름과 직함을 붙여 '동료'처럼 부르는 마케팅이 업계 표준이 됐다. 마이크로소프트·오픈AI·앤트로픽·구글이 앞다퉈 에이전트를 디지털 동료로 소개한다. 그런데 MIT 테크놀로지 리뷰는 6월 29일, 바로 그 '동료 프레이밍'이 생산성을 높이기는커녕 사람의 감독을 무디게 한다는 연구를 근거로 반론을 제기했다. 에이전트를 대거 도입하려는 기업이라면 반드시 짚어야 할 경고다.</p>\n<blockquote>\"AI는 사람을 대체하는 대신 사람의 역량을 끌어올리도록 최적화돼야 한다.\"<cite>Daron Acemoglu, MIT Technology Review</cite></blockquote>\n<h3>무슨 일인가</h3>\n<p>보스턴대 에마 와일스(Emma Wiles)의 실험이 핵심 근거다. 같은 결과물이라도 '챗봇'이 아니라 'AI 직원'이 했다고 알려 주면, 관리자가 오류를 18% 덜 잡아냈다. 게다가 참가자들은 미심쩍은 산출물을 스스로 고치기보다 상급자에게 넘길 확률이 44% 더 높았다 — 시간을 아끼려던 목적이 되레 무너지는 셈이다. 설문에서 관리자의 약 3분의 1은 이미 에이전트를 '직원'으로 여겼고, 23%는 조직도에 올려 두기까지 했다. 필자는 이런 프레이밍이 책임 소재를 흐려, 의료·국방·행정처럼 오판의 대가가 큰 영역에서 특히 위험하다고 본다.</p>\n<h3>여러 시각</h3>\n<p>'이름표'가 문제라면, 진짜 과제는 에이전트를 '어떻게 관리하느냐'다.</p>\n<ul><li><b>VentureBeat(오케스트레이션)</b> — 관리의 주도권을 놓고 구글은 시스템(제어) 계층에서, AWS는 실행(하네스) 계층에서 에이전트를 다스리는 상반된 전략을 편다. 가트너 집계로 멀티에이전트 관련 문의가 1년여 만에 1,445% 늘 만큼, 업계의 관심은 '동료라 부르기'가 아니라 오케스트레이션 설계로 이미 옮겨 갔다.</li><li><b>VentureBeat(플랫폼 종속)</b> — 앤트로픽이 에이전트의 메모리·평가·오케스트레이션까지 자사 플랫폼으로 끌어안으려 한다는 분석. '동료' 서사 이면에서 벌어지는 건 결국 누가 관리 계층을 소유하느냐의 경쟁이며, 기업 입장에선 종속 리스크를 경계해야 한다는 지적이다.</li></ul>\n<h3>왜 중요한가</h3>\n<p>에이전트를 '동료'로 부르는 순간, 사람은 무의식적으로 그 판단을 동료의 것처럼 신뢰하고 검증을 늦춘다. 18%·44%라는 수치는 그 인지적 비용을 정량화한다. 자동화의 이득이 감독 소홀로 상쇄되면, 도입 효과는 장부상으로만 남는다. 더 큰 문제는 책임이다 — 에이전트가 조직도에 오르는 순간, 실수의 책임이 사람에서 '시스템'으로 흩어져 결국 아무도 지지 않는 공백이 생긴다.</p>\n<h3>실무 적용</h3>\n<ul><li>제품 UI에서 에이전트를 '직원/동료'로 의인화하기보다 '도구'로 명확히 표기해, 사용자가 검증 책임을 놓지 않게 한다.</li><li>에이전트 산출물에는 근거·출처·확신도를 함께 노출해 '스스로 고치기'가 '상급자에게 떠넘기기'보다 쉽도록 설계한다.</li><li>중요한 결정 경로에는 사람 승인(human-in-the-loop) 게이트를 두고, 책임 주체를 로그로 남긴다.</li></ul>\n<h3>Kenny의 관점</h3>\n<p>이 연구는 UX 카피 한 줄이 안전에 직결된다는 걸 보여준다. '당신의 AI 동료'라는 문구는 따뜻해 보이지만, 사용자의 경계심을 낮추는 다크 패턴에 가깝다. 나는 에이전트 인터페이스를 설계할 때 '유능하지만 검증이 필요한 인턴'의 톤을 선호한다 — 도움은 주되, 최종 판단은 사람이 한다는 신호를 UI 곳곳에 남기는 것이다. QA에서 자동화 도구를 '보조'로 두고 최종 판정을 사람이 쥐는 원칙과 정확히 같다.</p>\n<h3>출처</h3>\n<ul><li><a href=\"https://www.technologyreview.com/2026/06/29/1139849/ai-agents-are-not-your-coworkers/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">MIT Technology Review: AI agents are not your coworkers ↗</a></li><li><a href=\"https://venturebeat.com/orchestration/google-and-aws-split-the-ai-agent-stack-between-control-and-execution\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">VentureBeat: Google and AWS split the AI agent stack between control and execution ↗</a></li><li><a href=\"https://venturebeat.com/orchestration/anthropic-wants-to-own-your-agents-memory-evals-and-orchestration-and-that-should-make-enterprises-nervous\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">VentureBeat: Anthropic wants to own your agent's memory, evals, and orchestration ↗</a></li></ul>",
    "source": "MIT Technology Review",
    "sourceUrl": "https://www.technologyreview.com/2026/06/29/1139849/ai-agents-are-not-your-coworkers/",
    "tags": [
      "AIAgents",
      "Workplace",
      "HumanInTheLoop"
    ],
    "thumb": ""
  },
  {
    "id": "2026-07-03-css-states-replace-js-events",
    "category": "design",
    "date": "2026-07-03",
    "title": "이벤트 리스너를 지우는 CSS — ‘상태’가 JS를 대신한다",
    "rawTitle": "The Shifting Line Between CSS States and JavaScript Events",
    "summary": ":hover부터 :user-invalid, :popover-open, :muted까지 — JS 이벤트 리스너로 하던 일을 CSS 의사 클래스가 빠르게 흡수하고 있다. 제안 중인 event-trigger는 상태와 이벤트의 경계 자체를 지운다.",
    "bodyHtml": "<p>CSS-Tricks의 Daniel Schwarz가 6월 29일, CSS가 자바스크립트 이벤트 처리의 영역을 어디까지 흡수했는지 전면적으로 정리했다. :hover 같은 고전적 의사 클래스부터 폼 검증(:user-invalid), 팝오버(:popover-open), 미디어 재생 상태(:playing, :muted)까지 — 예전이라면 이벤트 리스너를 달고 클래스를 토글하던 일들이 이제 선언 한 줄로 끝난다. 폼·오버레이·미디어라는 UI의 굵직한 축이 모두 CSS 상태로 표현 가능해진 지금이, 이 경계선을 다시 그어볼 시점이다.</p>\n<blockquote>\"CSS is accumulating more and more pseudo-classes to help us respond to JavaScript events so that we don't have to do so with JavaScript itself.\"<cite>CSS-Tricks, Daniel Schwarz</cite></blockquote>\n<h3>무슨 일인가</h3>\n<p>글의 핵심 통찰은 CSS가 추적하는 것이 ‘이벤트’가 아니라 <b>이벤트 사이의 상태</b>라는 점이다. :hover는 pointerenter와 pointerleave 사이의 구간이고, :checked는 change 이벤트 후의 결과다. 폼 검증은 checkValidity() 호출 대신 :valid/:invalid/:user-invalid로, 해시 변경 감지는 hashchange 리스너 대신 :target으로, 전체화면은 fullscreenchange 대신 :fullscreen으로 대체된다. 나아가 제안 단계인 event-trigger는 click·dblclick 같은 이벤트를 CSS가 직접 받아 애니메이션을 실행하는 기능으로, 상태와 이벤트의 구분 자체를 무너뜨린다. 다만 미디어 의사 클래스는 아직 Chrome이 미지원이고 event-trigger는 어떤 브라우저에도 구현되지 않았다.</p>\n<h3>여러 시각</h3>\n<p>‘JS가 하던 일을 CSS가 가져간다’는 흐름은 상태 추적에 그치지 않는다.</p>\n<ul><li><b>web.dev</b> — @property가 3대 엔진 Baseline에 도달하면서, 커스텀 프로퍼티에 타입·초기값·오류 폴백까지 부여할 수 있게 됐다. 그라디언트 색상처럼 JS로 보간하던 값을 CSS가 직접 애니메이션한다. 상태에 이어 ‘타입 시스템과 오류 처리’까지 CSS가 흡수한다는 같은 방향의 신호다.</li><li><b>CSS-Tricks(스크롤 트리거)</b> — Chrome 146에 실린 animation-trigger·timeline-trigger는 IntersectionObserver로 구현하던 뷰포트 진입 애니메이션을 CSS로 옮긴다. 아직 Chrome 단독 지원이지만, ‘관찰하고 반응하는 코드’를 선언으로 바꾸는 궤적은 동일하다.</li></ul>\n<h3>왜 중요한가</h3>\n<p>이벤트 리스너는 등록·해제·클린업이라는 수명주기 관리가 따라붙고, 이는 SPA 메모리 누수와 상태 불일치 버그의 단골 원인이다. 선언적 CSS 상태는 그 수명주기 자체가 없어, 코드가 줄어드는 것 이상으로 버그의 표면적이 줄어든다. 메인 스레드 JS가 줄면 성능 예산에도 직접적인 이득이다. 다만 지원 편차가 있는 만큼, ‘CSS 우선 + JS 폴백’이라는 점진적 향상 전략이 다시 중요해진다.</p>\n<h3>실무 적용</h3>\n<ul><li>폼 검증 피드백은 :user-valid/:user-invalid로 스타일링하고, JS는 제출 시점의 최종 검증만 담당하게 역할을 나눈다.</li><li>팝오버·아코디언·다이얼로그는 popover 속성과 :popover-open/:open 상태를 기본으로 삼아 toggle 이벤트 리스너를 걷어낸다.</li><li>뷰포트 진입 애니메이션은 @supports로 스크롤 트리거 CSS를 감싸고 IntersectionObserver를 폴백으로 유지한다.</li></ul>\n<h3>Kenny의 관점</h3>\n<p>이 글이 준 가장 실용적인 도구는 “이건 상태인가, 이벤트인가”라는 질문이다. 상태라면 CSS가 1순위 후보고, 네트워크 요청처럼 진짜 ‘사건’일 때만 JS가 필요하다 — 코드 리뷰에서 바로 쓸 수 있는 기준이다. AI 기능이 붙으며 JS 번들이 계속 무거워지는 요즘, UI 상태를 CSS 레이어로 내려보내는 것은 취향이 아니라 성능 예산을 확보하는 수단이다. 이벤트 리스너를 하나 지울 때마다 앱은 조금 더 단순해진다.</p>\n<h3>출처</h3>\n<ul><li><a href=\"https://css-tricks.com/css-states-and-javascript-events/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">CSS-Tricks: The Shifting Line Between CSS States and JavaScript Events ↗</a></li><li><a href=\"https://web.dev/blog/at-property-baseline\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">web.dev: @property — Next-gen CSS variables now with universal browser support ↗</a></li><li><a href=\"https://css-tricks.com/css-scroll-triggered-animations-first-look/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">CSS-Tricks: A First Look at Scroll-Triggered Animations ↗</a></li></ul>",
    "source": "CSS-Tricks",
    "sourceUrl": "https://css-tricks.com/css-states-and-javascript-events/",
    "tags": [
      "CSS",
      "PseudoClasses",
      "Frontend"
    ],
    "thumb": ""
  },
  {
    "id": "2026-07-03-fable-5-global-redeployment",
    "category": "ai",
    "date": "2026-07-03",
    "title": "18일 만에 돌아온 Fable 5 — ‘탈옥 채점표’를 들고 왔다",
    "rawTitle": "Redeploying Claude Fable 5",
    "summary": "미 정부가 6월 30일 수출통제를 철회하며 Fable 5가 7월 1일 전 세계에 복귀했다. 앤트로픽은 재발 방지책으로 아마존·MS·구글과 함께 업계 공통의 ‘탈옥 심각도 채점 프레임워크’를 제안했다.",
    "bodyHtml": "<p>6월 9일 출시, 6월 12일 수출통제로 전면 중단, 그리고 7월 1일 글로벌 복귀 — Claude Fable 5가 18일 만에 돌아왔다. 미 상무부가 6월 30일 라이선스 요구를 공식 철회하면서다. 지난주 이 코너에서 다뤘던 ‘접근 중단’ 소식의 후속편인데, 앤트로픽은 단순히 스위치를 다시 켜는 대신 업계 공통의 <b>탈옥 심각도 채점 프레임워크</b>라는 제도적 제안을 함께 들고 나왔다. 프런티어 모델이 정부 명령으로 꺼졌다 켜진 첫 사례의 마무리라는 점에서 뜯어볼 가치가 있다.</p>\n<blockquote>\"It is probably impossible to make any AI model fully robust (that is, impervious) to jailbreaks.\"<cite>Anthropic</cite></blockquote>\n<h3>무슨 일인가</h3>\n<p>발단은 아마존 연구진이 발견한 탈옥 기법이었다. 모델이 소프트웨어 취약점을 식별하고 악용 방법까지 시연하게 만들 수 있다는 것. 그러나 조사 결과 같은 취약점은 GPT-5.5, Kimi K2.7, Claude Opus 계열 등 기존 모델로도 재현 가능했고, Mythos급 고유의 공격 능력이 아니라 통상적인 방어 보안 범주의 행동으로 판정돼 ‘경미’로 분류됐다. 이에 정부는 6월 26일 신뢰 기관 대상 Mythos 5 복원을 거쳐 6월 30일 통제를 전면 해제했다. Fable 5는 Claude 플랫폼·Claude.ai·Claude Code에서 즉시, AWS·구글클라우드·MS Foundry에서 순차 제공되며, Pro·Max·Team 요금제는 7월 7일까지 주간 한도의 50%까지 쓸 수 있다. 함께 제안된 채점 프레임워크는 능력 증가분·범위·무기화 용이성·발견 가능성이라는 4개 축으로 탈옥을 평가한다.</p>\n<h3>여러 시각</h3>\n<p>복귀를 바라보는 시선은 안도와 회의로 갈린다.</p>\n<ul><li><b>VentureBeat</b> — 기업 실무 관점의 정리. 상무장관이 철회 서한을 보낸 경위와 함께, 18일의 공백 동안 대체 모델로 갈아탄 기업들의 경험이 ‘단일 모델 의존’의 리스크를 각인시켰다고 본다. 복귀 이후 어디서 접근 가능한지가 기업의 첫 질문이라는 것.</li><li><b>MIT Technology Review</b> — 정부 대응이 “안전 계획이라기보다 피상적 반응에 가깝다”는 회의론. 경쟁사인 아마존 CEO가 사태 촉발에 관여한 구도, 소프트웨어 접근에 수출통제를 적용하는 것의 법적 근거를 문제 삼고, 이런 불확실성이 기업들을 중국 오픈소스 모델로 밀어낼 수 있다고 경고한다.</li></ul>\n<h3>왜 중요한가</h3>\n<p>이번 사태는 프런티어 모델이 하루아침에 꺼질 수 있는 ‘규제 대상 인프라’임을 실증했다. 더 근본적인 문제는 탈옥의 심각도를 말할 공통 언어가 업계에 없었다는 점이다. 채점 프레임워크가 표준으로 자리 잡으면 ‘탈옥 발견 → 전면 중단’이라는 이분법 대신 심각도에 비례한 대응이 가능해진다. 사전 정부 접근과 신속한 정보 공유 같은 약속들은 앞으로 프런티어 모델 출시의 기본 템플릿이 될 가능성이 높다.</p>\n<h3>실무 적용</h3>\n<ul><li>AI 기능은 특정 모델에 하드코딩하지 말고 추상화 계층과 폴백 체인을 두어, 모델 중단 시 교체가 배포 없이 가능하게 설계한다.</li><li>주력 프롬프트의 기대 출력을 스냅샷으로 관리해, 모델 교체·복귀 시 회귀 테스트로 품질 변화를 즉시 감지한다.</li><li>모델 제공사의 정책·약관·가용성 변화를 모니터링하는 운영 채널을 정해두고, 중단 시나리오를 런북에 포함한다.</li></ul>\n<h3>Kenny의 관점</h3>\n<p>지난번 중단 소식을 다루며 ‘모델은 인프라’라고 썼는데, 18일 만의 복귀는 그 교훈을 완성한다. AI가 꺼졌을 때의 UX — 대체 모델 안내, 기능 축소 모드, 정직한 상태 표시 — 를 미리 설계해 둔 팀만 이 공백을 무사히 넘겼을 것이다. 흥미로운 건 채점 프레임워크가 QA의 결함 심각도 분류와 닮았다는 점이다. ‘버그 제로’가 아니라 심각도 관리로 가는 것은 성숙한 산업의 신호이고, AI 안전도 같은 길을 걷기 시작했다.</p>\n<h3>출처</h3>\n<ul><li><a href=\"https://www.anthropic.com/news/redeploying-fable-5\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Anthropic: Redeploying Claude Fable 5 ↗</a></li><li><a href=\"https://venturebeat.com/technology/anthropic-is-bringing-back-claude-fable-5-globally-after-us-lifts-export-control-order-where-can-enterprises-access-it\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">VentureBeat: Anthropic is bringing back Claude Fable 5 globally after US lifts export control order ↗</a></li><li><a href=\"https://www.technologyreview.com/2026/06/22/1139424/three-things-to-watch-amid-anthropics-latest-feud-with-the-government/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">MIT Technology Review: Three things to watch amid Anthropic’s latest feud with the government ↗</a></li></ul>",
    "source": "Anthropic",
    "sourceUrl": "https://www.anthropic.com/news/redeploying-fable-5",
    "tags": [
      "Anthropic",
      "AISafety",
      "ExportControls"
    ],
    "thumb": ""
  },
  {
    "id": "2026-07-01-anthropic-gigawatt-compute-grid",
    "category": "ai",
    "date": "2026-07-01",
    "title": "기가와트로 몸집 키우는 앤트로픽, 전력망은 버틸까",
    "rawTitle": "Anthropic expands partnership with Google and Broadcom for multiple gigawatts of next-generation compute",
    "summary": "앤트로픽이 구글·브로드컴과 손잡고 2027년부터 가동될 차세대 TPU를 ‘기가와트 단위’로 확보한다. 연 매출 런레이트가 1년 새 90억→300억 달러로 뛴 수요 폭증이 배경인데, 정작 발목을 잡는 건 전력망이다.",
    "bodyHtml": "<p>앤트로픽이 구글·브로드컴과의 협력을 확대해, 2027년부터 순차 가동될 차세대 구글 TPU를 ‘기가와트 단위’로 확보한다고 2026년 4월 발표했다. 대부분 미국 내에 지어지며, 앞서 밝힌 500억 달러 규모 미국 인프라 투자 위에 얹히는 물량이다. 왜 지금인가 — 클로드 수요가 말 그대로 폭발했기 때문이다. 연 매출 런레이트는 2025년 말 90억 달러에서 2026년 300억 달러를 넘어섰고, 연 100만 달러 이상을 쓰는 기업 고객이 두 달도 안 돼 500곳에서 1,000곳으로 두 배가 됐다.</p>\n<blockquote>\"This significant expansion of our compute infrastructure will power our frontier Claude models and help us serve extraordinary demand from customers worldwide.\"<cite>Krishna Rao, Anthropic CFO</cite></blockquote>\n<h3>무슨 일인가</h3>\n<p>핵심은 ‘규모’와 ‘시점’이다. 이번 계약은 단일 데이터센터가 아니라 <b>다수의 기가와트급</b> TPU 용량을 묶은 것으로, 하나의 대형 시설만으로도 중소도시 전체가 쓰는 전력을 삼킬 수 있는 체급이다. 물량 대부분은 미국에 배치되고 2027년부터 온라인된다. 브로드컴이 커스텀 실리콘 설계·공급을, 구글이 TPU 인프라를 맡는 분업 구조로, 특정 GPU 한 곳에 대한 의존을 낮추려는 포석이기도 하다. 급증하는 추론(inference) 수요를 감당하면서도 프런티어 모델 학습 여력을 확보하려는, 공급 병목을 미리 사두는 베팅이다.</p>\n<h3>여러 시각</h3>\n<p>컴퓨트를 ‘사두는’ 경쟁의 이면에는 전력망이라는 물리적 한계가 있다.</p>\n<ul><li><b>MIT Technology Review</b> — 발전소를 새로 짓는 대신 데이터센터를 ‘유연하게’ 운영하자는 관점. 듀크대 연구에 따르면 연중 0.25%(약 22시간)만 사용량을 줄여도 미국 그리드는 76기가와트를 추가로 내줄 수 있고, 프린스턴·구글 공동연구에선 유연 운영 시설이 경직된 시설보다 3~5년 빨리 완전 가동에 도달했다. 컴퓨트 확보의 진짜 병목이 ‘칩’이 아니라 ‘언제 전기를 꽂느냐’임을 보여준다.</li></ul>\n<h3>왜 중요한가</h3>\n<p>기가와트 단위 발표는 단순한 자랑이 아니라, AI 서비스의 품질과 가격이 앞으로 전력·부지·냉각 같은 물리 인프라에 묶인다는 신호다. 컴퓨트가 늘면 응답 지연과 가용성이 개선되지만, 그 비용은 결국 API 단가와 요금제에 반영된다. 동시에 전력망이 병목이 되면 ‘칩은 있는데 켤 전기가 없다’는 상황이 현실이 되고, 이는 특정 리전의 지연·장애로 우리 제품에까지 번진다. AI를 쓰는 쪽에서도 인프라 리스크를 남의 일로 볼 수 없게 됐다.</p>\n<h3>실무 적용</h3>\n<ul><li>AI 기능을 붙일 때 단일 모델·단일 프로바이더에 하드코딩하지 말고, 라우팅·폴백을 둔 오케스트레이션 계층으로 감싸 공급·리전 리스크를 분산한다.</li><li>지연에 민감한 UX는 스트리밍·낙관적 렌더링·캐싱을 기본값으로 설계해, 백엔드 컴퓨트가 출렁여도 체감 품질이 무너지지 않게 한다.</li><li>기능별 토큰·호출 비용을 계측해 ‘컴퓨트 원가 대비 가치’를 지표로 관리하고, 비용이 가치보다 빨리 커지는 기능은 조기에 걷어낸다.</li></ul>\n<h3>Kenny의 관점</h3>\n<p>프런트엔드·AX 실무자에게 이 뉴스는 ‘AI는 무한 자원이 아니다’라는 리마인더다. 나는 AI 기능을 설계할 때 모델 성능만큼이나 ‘느려지거나 끊겼을 때 화면이 어떻게 버티는가’를 먼저 그린다. 기가와트가 늘어도 전력망이 그 속도를 못 따라가면 특정 시점·리전의 병목은 남는다. 그래서 프로바이더 종속을 피하고, 스켈레톤·부분 렌더·우아한 실패(graceful degradation)를 기본기로 깔아두는 것이 결국 사용자에게 가장 정직한 설계다.</p>\n<h3>출처</h3>\n<ul><li><a href=\"https://www.anthropic.com/news/google-broadcom-partnership-compute\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Anthropic: Anthropic expands partnership with Google and Broadcom for multiple gigawatts of next-generation compute ↗</a></li><li><a href=\"https://www.technologyreview.com/2026/06/16/1138591/data-center-online-quickly-electric-grid-flex/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">MIT Technology Review: Want to get a data center online quickly? Give it some flex. ↗</a></li></ul>",
    "source": "Anthropic",
    "sourceUrl": "https://www.anthropic.com/news/google-broadcom-partnership-compute",
    "tags": [
      "Anthropic",
      "Compute",
      "DataCenters"
    ],
    "thumb": ""
  },
  {
    "id": "2026-07-01-ai-qa-problem-orchestration",
    "category": "plan",
    "date": "2026-07-01",
    "title": "AI 시대 QA의 무기는 자동화가 아니라 ‘판단’이다",
    "rawTitle": "Five practical ways to use AI as a partner in Quality Engineering",
    "summary": "Ministry of Testing은 AI가 QA를 대체하는 게 아니라, 테스터의 역할을 ‘산출물 제작’에서 ‘문제 설계’로 옮긴다고 본다. 기획도 마찬가지 — 하이프를 걷어내고 판단을 파는 시대다.",
    "bodyHtml": "<p>AI가 테스트 케이스를 대신 써 주는 시대에 QA는 무엇을 하는가. Ministry of Testing이 정리한 ‘품질 엔지니어링에서 AI를 파트너로 쓰는 다섯 가지 실무법’은 이 질문에 명확히 답한다. 핵심은 AI를 자동화 지름길로 쓰는 게 아니라, 테스터의 일을 ‘산출물 찍어내기(artifact production)’에서 ‘문제 설계·오케스트레이션(problem orchestration)’으로 재정의하는 데 있다. AI 도입이 테스터의 판단력을 대체하는 게 아니라 오히려 날카롭게 만든다는 관점이다.</p>\n<blockquote>\"AI won't replace Quality Assurance (QA), but a QA who learns to use AI effectively will replace those who don't.\"<cite>Ministry of Testing</cite></blockquote>\n<h3>무슨 일인가</h3>\n<p>제시된 다섯 가지는 모두 ‘사람이 문제를 정의하고 AI가 실행을 돕는’ 구조다. ① 역할·제약을 명시한 <b>반복적 프롬프트</b>로 테스트를 생성하고, ② 불안정한 <b>플래키 테스트</b>의 패턴을 AI로 분석·리팩터링하며, ③ <b>프롬프트 체이닝</b>으로 회귀 스위트의 중복·공백을 찾아 최적화한다. ④ 배포 전 검증·코드 리뷰·버그 트리아지를 잇는 <b>프로덕션 QA 워크플로</b>에 AI를 끼워 넣고, ⑤ 표준화된 프롬프트를 팀 공용 자산으로 쌓는 <b>QA 프롬프트 라이브러리</b>를 만든다. 관통하는 전제는 하나 — 문제를 명확히 프레이밍하고, 제약을 정의하고, 결과를 해석하는 힘이 있어야 AI가 제값을 한다는 것이다.</p>\n<h3>여러 시각</h3>\n<p>같은 원리가 QA를 넘어 제품 기획에도 그대로 적용된다.</p>\n<ul><li><b>Mind the Product</b> — ‘하이프를 걷어낸 AI 제품 전략’ 관점. AI 기능은 직접 컴퓨트 비용의 최소 3배 가치를 증명해야 하고(안 그러면 잘 팔려도 마진을 갉아먹는다), 단일 프로바이더에 잠기지 말고 교체 가능한 아키텍처를 두며, ‘채택률’이 아니라 ‘실제로 줄인 업무량’을 성공 지표로 삼으라고 말한다. QA의 ‘문제 설계’와 기획의 ‘가치·비용 판단’은 결국 같은 근육이다.</li></ul>\n<h3>왜 중요한가</h3>\n<p>AI가 실행 단가를 떨어뜨릴수록, 사람의 가치는 ‘무엇을·왜 검증하고 만드는가’라는 판단으로 이동한다. 테스트 케이스를 손으로 쓰고 실패를 수동 분류하던 일은 빠르게 기본값(table stakes)이 되고 있고, 그만큼 리스크 기반 전략·거버넌스·품질 판단의 몸값이 오른다. 기획도 똑같다 — 만들 수 있느냐가 아니라, 만들 가치가 있느냐를 숫자로 가르는 사람이 살아남는다. AI는 답을 주는 도구가 아니라, 좋은 질문을 던진 사람에게만 레버리지를 주는 도구다.</p>\n<h3>실무 적용</h3>\n<ul><li>AI에 테스트·요구사항을 맡길 때 역할·제약·수용 기준을 먼저 문장으로 못 박고, 산출물은 ‘초안’으로만 받아 사람이 리스크 관점에서 검수한다.</li><li>팀 공용 ‘프롬프트 라이브러리’를 리포에 두고, 잘 통한 프롬프트를 코드처럼 리뷰·버전관리해 품질을 재현 가능하게 만든다.</li><li>기획 단계에서 각 AI 기능에 ‘실패 조건’과 ‘가치 지표(줄인 업무량·전환)’를 컴퓨트 원가와 함께 명시해, 하이프가 아니라 단위 경제로 우선순위를 정한다.</li></ul>\n<h3>Kenny의 관점</h3>\n<p>기획·QA·프런트엔드를 오가며 일하는 입장에서, 이 글의 ‘문제 오케스트레이션’이라는 표현이 가장 정확하다고 느낀다. 나는 AI에게 코드나 테스트를 시킬 때 결과물의 양보다 ‘내가 문제를 얼마나 좁게 정의했는가’로 품질이 갈린다는 걸 매번 확인한다. 그래서 AI를 쓸수록 요구사항을 더 명료하게 쪼개고, 실패 조건을 먼저 적는 습관이 늘었다. 자동화는 거들 뿐, 무엇을 검증하고 무엇을 포기할지 정하는 판단은 여전히 사람의 몫이다.</p>\n<h3>출처</h3>\n<ul><li><a href=\"https://www.ministryoftesting.com/articles/five-practical-ways-to-use-ai-as-a-partner-in-quality-engineering\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Ministry of Testing: Five practical ways to use AI as a partner in Quality Engineering ↗</a></li><li><a href=\"https://www.mindtheproduct.com/the-2026-ai-product-strategy-huide-how-to-plan-budget-and-build-without-buying-into-the-hype/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Mind the Product: The 2026 AI product strategy guide — How to plan, budget, and build without buying into the hype ↗</a></li></ul>",
    "source": "Ministry of Testing",
    "sourceUrl": "https://www.ministryoftesting.com/articles/five-practical-ways-to-use-ai-as-a-partner-in-quality-engineering",
    "tags": [
      "QA",
      "AI",
      "ProductStrategy"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-30-interop-2026-three-engines",
    "category": "design",
    "date": "2026-06-30",
    "title": "세 브라우저 엔진이 합의한 2026 CSS 우선순위",
    "rawTitle": "Interop 2026",
    "summary": "Chrome·Safari·Firefox가 올해 ‘완전하고 일관된 지원’을 약속한 기능 목록이 확정됐다. 앵커 포지셔닝·view transitions·contrast-color() 등 11개 영역, 브라우저 분기의 끝을 겨냥한다.",
    "bodyHtml": "<p>같은 CSS를 썼는데 브라우저마다 다르게 보이는 일 — 프런트엔드의 오래된 피로다. Interop은 이 분기를 줄이려 Blink(Chrome·Edge)·WebKit(Safari)·Gecko(Firefox) 세 엔진이 ‘올해는 이 기능들을 끝까지 똑같이 맞추자’고 공개 약속하는 연례 프로젝트다. CSS-Tricks가 2026년 2월 17일 정리한 글에 따르면, Interop 2026은 앵커 포지셔닝부터 view transitions까지 11개 영역을 우선순위로 못 박았다. 매년 그래왔듯, 여기 오른 기능은 그해 안에 ‘안심하고 쓸 수 있는’ 후보가 된다.</p>\n<blockquote>\"CSS Anchor Positioning gives us a simple interface to attach elements next to others just by saying which sides to connect — directly in CSS.\"<cite>CSS-Tricks</cite></blockquote>\n<h3>무슨 일인가</h3>\n<p>선정된 영역은 실무 체감이 큰 것들이다. 툴팁·팝오버를 소스 순서와 무관하게 다른 요소에 붙이는 <b>앵커 포지셔닝</b>, 자바스크립트 없이 부드러운 화면 전환을 만드는 <b>view transitions</b>, 접근성 대비를 자동 계산하는 <b>contrast-color()</b>, 타입·단위 변환까지 지원하는 고급 <b>attr()</b>, DOM을 더럽히지 않고 임의 텍스트 범위를 칠하는 <b>커스텀 하이라이트</b>가 포함됐다. 여기에 컨테이너 스타일 쿼리, 선언형 <b>dialog·popover</b>, 미디어 의사클래스, 스크롤 기반 애니메이션, <b>shape()</b> 함수, 그리고 레이아웃에 영향을 주는 <b>zoom</b> 속성까지 11개 영역이 올랐다. 대부분 State of CSS·State of HTML 설문에서 ‘제일 안 맞는다’고 꼽힌 기능들이다.</p>\n<h3>여러 시각</h3>\n<p>같은 Interop 2026을 두 매체는 다른 각도에서 본다.</p>\n<ul><li><b>web.dev</b> — 거버넌스의 관점. 이 프로젝트는 Apple·Google·Igalia·Microsoft·Mozilla 대표가 함께 운영하며, 선정 테스트를 자동화 인프라에서 상시 실행하고 통과율을 공개 대시보드로 투명하게 보여준다. ‘약속’이 아니라 ‘측정되는 약속’이라는 점을 강조한다.</li><li><b>CSS-Tricks</b> — 개발자 체감의 관점. 어떤 기능이 왜 골라졌고 실제 코드에서 무엇이 달라지는지, 앵커 포지셔닝 같은 사례 중심으로 풀어 ‘내일의 내 코드’에 닿게 설명한다.</li></ul>\n<h3>왜 중요한가</h3>\n<p>Interop의 가치는 새 기능이 아니라 ‘예측 가능성’이다. 목록에 오른 기능은 세 엔진이 같은 해에 같은 테스트를 통과하도록 압박받으므로, 폴리필·벤더 분기·“이 브라우저에선 안 돼요” 같은 방어 코드의 수명이 짧아진다. 결국 Baseline(안정 지원 기준)에 더 빨리 편입돼, 개발자가 기능을 채택하는 시점을 앞당긴다. 분기를 메우는 데 쓰던 시간을 제품에 쓸 수 있게 된다는 뜻이다.</p>\n<h3>실무 적용</h3>\n<ul><li>Interop 2026 목록을 올해 기술 도입 로드맵의 ‘청신호 리스트’로 삼되, 실제 채택 전엔 Baseline·대시보드 통과율을 함께 확인한다.</li><li>JS로 직접 구현 중인 툴팁·모달·화면 전환은 앵커 포지셔닝·popover·view transitions 네이티브로 대체 가능한지 먼저 검토해 의존성을 줄인다.</li><li>접근성 대비 색은 하드코딩 대신 contrast-color()로 옮겨, 테마·다크모드에서도 자동으로 대비를 보장하는 방향을 실험한다.</li></ul>\n<h3>Kenny의 관점</h3>\n<p>프런트엔드 실무자에게 Interop은 ‘언제 도입할까’의 불안을 줄여 주는 달력이다. 나는 새 CSS 기능을 볼 때 데모의 화려함보다 ‘세 엔진이 합의했는가, 대시보드 통과율이 오르고 있는가’를 먼저 본다. 다만 목록에 올랐다고 오늘 당장 전면 도입은 위험하다 — 합의는 시작이지 완료가 아니다. 핵심 경험은 네이티브 + 점진적 향상(progressive enhancement)으로 깔고, 미지원 환경에서도 무너지지 않게 설계하는 습관이 결국 가장 빠른 길이다.</p>\n<h3>출처</h3>\n<ul><li><a href=\"https://css-tricks.com/interop-2026/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">CSS-Tricks: Interop 2026 ↗</a></li><li><a href=\"https://web.dev/blog/interop-2026\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">web.dev: Interop 2026 — Continuing to improve the web for developers ↗</a></li></ul>",
    "source": "CSS-Tricks",
    "sourceUrl": "https://css-tricks.com/interop-2026/",
    "tags": [
      "CSS",
      "Interop",
      "Browsers"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-30-ai-coding-reality-check",
    "category": "ai",
    "date": "2026-06-30",
    "title": "AI 코딩은 어디에나, 그러나 확신은 아직",
    "rawTitle": "AI coding is now everywhere. But not everyone is convinced.",
    "summary": "주간 사용 65%, 벤더 주장 20~55% 속도 향상. 그러나 숙련 개발자가 오히려 19% 느려졌다는 연구도 있다. ‘체감’과 ‘증거’의 간극을 짚는다.",
    "bodyHtml": "<p>AI 코딩은 더 이상 실험이 아니다. MIT Technology Review가 2025년 12월 15일 공개한 기획에 따르면, 개발자의 65%가 매주 AI 코딩 도구를 쓰고(Stack Overflow 2025), 상위 모델은 표준 벤치마크에서 버그의 70% 이상을 푼다 — 1년 전 33%에서 급등했다. 그런데 같은 글이 던지는 질문은 정반대다. 이 폭발적 채택이 정말 ‘생산성 향상’으로 이어졌는가. 경영진의 장담과 현장의 증거 사이에 큰 틈이 있다는 것이다.</p>\n<blockquote>\"You remember the jackpots. You don't remember sitting there plugging tokens into the slot machine for two hours.\"<cite>Mike Judge, MIT Technology Review</cite></blockquote>\n<h3>무슨 일인가</h3>\n<p>Microsoft·Google 임원은 자사 코드의 25%가 AI로 작성된다고 말하고, 초기 벤더 연구는 20~55% 속도 향상을 제시한다. 그러나 METR 연구에서 숙련 개발자는 AI 도구로 오히려 19% 느려졌고, GitClear 데이터상 ‘오래 가는(durable) 코드’는 2022년 이후 10%가량만 늘었다. 기사는 AI가 보일러플레이트·테스트·버그 수정 같은 좁은 작업엔 강하지만, 숙련자 업무의 대부분인 복잡한 통합 문제에선 제한적 문맥창과 일관성 부족으로 흔들린다고 짚는다. 게다가 AI 결함의 90% 이상은 명백한 버그가 아니라 미묘한 ‘코드 냄새(code smell)’라, 리뷰에서 걸러내기 어렵다.</p>\n<h3>여러 시각</h3>\n<p>같은 흐름을 더 멀리서 보면 ‘도구’가 아니라 ‘조직’의 문제가 보인다.</p>\n<ul><li><b>MIT Technology Review(에이전트 리포트)</b> — 변곡점의 관점. 에이전틱 AI를 오픈소스·DevOps에 이은 세 번째 전환으로 보고, 평균 37%의 속도 향상을 기대한다. 다만 “완전한 효과를 얻으려면 때로 고통스러운 조직·프로세스 변화가 필요하다”고 못 박는다 — 기술만으론 부족하다는 것.</li><li><b>현장 데이터(METR·GitClear)</b> — 회의의 관점. 잭팟의 기억은 또렷하지만 토큰을 허비한 두 시간은 잊힌다. 개인의 ‘체감 향상’과 측정된 ‘실제 향상’ 사이의 인지 편향을 경고한다.</li></ul>\n<h3>왜 중요한가</h3>\n<p>두 자료를 겹치면 결론은 분명하다 — AI 코딩의 성패는 모델 성능보다 ‘조직의 엔지니어링 규율’에 달렸다. AI는 좋은 관행도 나쁜 관행도 똑같이 증폭한다. 주니어가 쏟아내는 코드량이 시니어 리뷰 용량을 포화시키면 병목은 오히려 심해지고, 기술부채는 더 빨리 쌓인다. ‘얼마나 빨리 짜는가’가 아니라 ‘얼마나 빨리 검증·통합·유지하는가’가 진짜 지표가 됐다는 뜻이다.</p>\n<h3>실무 적용</h3>\n<ul><li>AI 생산성은 라인 수·속도가 아니라 ‘리뷰 통과율·재작업률·결함 밀도’로 측정해, 잭팟 편향에 속지 않는다.</li><li>AI가 낸 코드는 프로젝트 컨벤션 준수와 통합 영향을 우선 검토한다 — 미묘한 코드 냄새는 자동 린트·테스트로 1차 거른다.</li><li>주니어 산출량이 시니어 리뷰를 포화시키지 않도록, 생성-검증 비율과 리뷰 SLA를 팀 단위로 명시한다.</li></ul>\n<h3>Kenny의 관점</h3>\n<p>프런트엔드와 PM·QA를 오가며 AI를 매일 쓰는 입장에서 이 기사는 과장이 아니라 균형추다. 나는 AI를 ‘초안 생성기’로 쓰되, 검증 책임은 끝까지 사람이 진다는 선을 분명히 한다. 특히 미묘한 코드 냄새는 속도의 대가로 슬그머니 쌓이므로, 테스트·타입·린트라는 ‘자동 안전망’을 먼저 깔아 두는 것이 AI 활용의 전제 조건이다. 잭팟의 기억보다 두 시간의 토큰을 기록하는 것 — 결국 측정만이 체감의 환상을 이긴다.</p>\n<h3>출처</h3>\n<ul><li><a href=\"https://www.technologyreview.com/2025/12/15/1128352/rise-of-ai-coding-developers-2026/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">MIT Technology Review: AI coding is now everywhere. But not everyone is convinced. ↗</a></li><li><a href=\"https://www.technologyreview.com/2026/04/14/1134397/redefining-the-future-of-software-engineering/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">MIT Technology Review: Redefining the future of software engineering ↗</a></li></ul>",
    "source": "MIT Technology Review",
    "sourceUrl": "https://www.technologyreview.com/2025/12/15/1128352/rise-of-ai-coding-developers-2026/",
    "tags": [
      "AICoding",
      "DevTools",
      "Productivity"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-29-prop-for-that-live-css-props",
    "category": "design",
    "date": "2026-06-29",
    "title": "CSS에 살아있는 값을 주입하는 Prop For That",
    "rawTitle": "Prop For That",
    "summary": "마우스 위치·스크롤 속도·현재 시각처럼 CSS 혼자선 못 보던 값을, JS 배선 없이 커스텀 속성으로 받아 스타일링한다. Adam Argyle의 작은 라이브러리가 던지는 ‘이건 CSS의 일인가’라는 질문.",
    "bodyHtml": "<p>마우스가 어디 있는지, 스크롤이 얼마나 빠른지, 지금 몇 시인지 — CSS는 이런 ‘살아있는 값’을 혼자 알지 못한다. 늘 자바스크립트가 값을 추적해 커스텀 속성으로 넘겨줘야 했다. CSS-Tricks가 2026년 6월 16일 공개한 Geoff Graham의 글은 Adam Argyle가 만든 작은 라이브러리 ‘Prop For That’을 소개한다. 라이브러리를 불러오고 HTML에 데이터 속성 한 줄을 붙이면, 포인터 좌표·스크롤 속도·진행도·폼 상태·현재 시각이 자동으로 CSS 변수로 흘러든다.</p>\n<blockquote>\"All that's needed is to import the library, declare it in HTML, then style away in CSS.\"<cite>Geoff Graham, CSS-Tricks</cite></blockquote>\n<h3>무슨 일인가</h3>\n<p>사용법은 단순하다. <code>data-props-for=\"pointer\"</code> 같은 속성을 요소에 붙이면 라이브러리가 백그라운드에서 이벤트를 듣고 <code>--live-pointer-x</code>·<code>--live-pointer-y</code> 같은 변수를 갱신한다. 개발자는 그 변수를 <code>calc()</code>나 <code>translate</code>에 꽂아 쓰기만 하면 된다. 데모로는 포인터를 따라오는 그림자, 관성이 붙은 스크롤 효과, 색조를 미는 슬라이더 등이 제시됐다. 핵심은 값을 추적하는 ‘JS 배선’을 매번 직접 짜지 않아도 된다는 점이다.</p>\n<h3>여러 시각</h3>\n<p>같은 ‘CSS에 동적 값을 넣는다’는 흐름을 네이티브 기능과 견주면 경계가 또렷해진다.</p>\n<ul><li><b>MDN(@property)</b> — 표준의 관점. CSS Houdini의 <code>@property</code>는 커스텀 속성에 <code>syntax</code>·<code>inherits</code>·<code>initial-value</code>를 부여해 타입을 가진 변수로 등록한다. 값의 ‘형식’은 네이티브가 책임지지만, 그 값을 무엇으로 채울지(포인터·시간)는 여전히 외부가 공급해야 한다.</li><li><b>MDN(스크롤 기반 애니메이션)</b> — 네이티브의 진격. <code>animation-timeline: scroll()</code>·<code>view()</code>는 스크롤 진행도만큼은 JS 없이 CSS가 직접 읽게 만들었다. 즉 ‘스크롤’ 값은 이미 표준이 흡수했지만 ‘포인터·현재 시각’은 아직 빈자리여서, 이 라이브러리가 그 틈을 메운다.</li></ul>\n<h3>왜 중요한가</h3>\n<p>이 라이브러리의 진짜 메시지는 기능이 아니라 질문이다 — ‘이건 CSS가 직접 해야 할 일인가’. CSS는 매년 JS의 영역을 흡수해 왔고(스크롤 타임라인, <code>attr()</code>, 곧 나올 <code>if()</code>·<code>sibling-index()</code>), 그럴수록 번들은 가벼워지고 렌더링은 브라우저 최적화 경로를 탄다. 다만 포인터 추적처럼 잦은 갱신을 라이브러리에 맡기면, 보이지 않는 곳에서 매 프레임 JS가 돈다는 비용은 그대로다. 편의와 성능의 트레이드오프를 의식해야 한다.</p>\n<h3>실무 적용</h3>\n<ul><li>포인터·스크롤 같은 살아있는 값을 한두 군데에서만 쓴다면, 라이브러리 대신 작은 직접 핸들러로 충분하다 — 의존성과 전역 리스너를 늘리지 않는다.</li><li>타입이 필요한 커스텀 속성은 <code>@property</code>로 등록해 애니메이션·검증을 네이티브에 맡기고, 값 공급만 외부에서 처리한다.</li><li>스크롤 연동 효과는 먼저 <code>animation-timeline: scroll()</code> 같은 네이티브로 가능한지 확인하고, 안 되는 값(포인터·시간)에만 JS를 얹는다.</li></ul>\n<h3>Kenny의 관점</h3>\n<p>프론트엔드 관점에서 이런 ‘마법 같은’ 라이브러리는 늘 양날의 검이다. 코드가 짧아져 좋지만, 매 <code>pointermove</code>마다 변수를 갱신하는 비용은 저사양 기기에서 먼저 드러난다. 나는 ‘CSS로 표현, JS로 측정’의 경계를 명확히 긋고, 측정 비용이 큰 값은 <code>requestAnimationFrame</code>으로 묶거나 갱신 빈도를 떨어뜨린다. 그리고 영리함보다 ‘다음 사람이 이 변수가 어디서 오는지 5초 안에 아는가’를 우선한다. 편리한 추상은 그 출처가 투명할 때만 부채가 아니다.</p>\n<h3>출처</h3>\n<ul><li><a href=\"https://css-tricks.com/prop-for-that/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">CSS-Tricks: Prop For That ↗</a></li><li><a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/@property\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">MDN: @property (CSS Properties and Values API) ↗</a></li><li><a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">MDN: CSS scroll-driven animations ↗</a></li></ul>",
    "source": "CSS-Tricks",
    "sourceUrl": "https://css-tricks.com/prop-for-that/",
    "tags": [
      "CSS",
      "CustomProperties",
      "Houdini"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-29-fable-mythos-access-suspended",
    "category": "ai",
    "date": "2026-06-29",
    "title": "미 정부가 멈춰 세운 Fable 5 — 탈옥 하나의 무게",
    "rawTitle": "Statement on the US government directive to suspend access to Fable 5 and Mythos 5",
    "summary": "미 정부가 수출통제 지침으로 외국인의 Fable 5·Mythos 5 접근을 전면 중단시켰다. 발단은 공개된 탈옥(jailbreak) 하나. ‘좁은 취약점이 상용 모델 회수의 근거가 되는가’라는 논쟁.",
    "bodyHtml": "<p>탈옥(jailbreak) 시연 하나가 전 세계 사용자에게서 모델을 끊어버릴 수 있을까. 앤트로픽이 2026년 6월 12일 공개한 성명에 따르면, 미 정부는 같은 날 오후 5시 21분(ET) 국가안보를 근거로 수출통제 지침을 내려 외국인(미국 내외, 자사 외국인 직원 포함)의 Fable 5·Mythos 5 접근을 전면 중단할 것을 명령했다. 컴플라이언스를 위해 앤트로픽은 두 모델을 모든 고객에게서 즉시 비활성화했고, 다른 모델은 영향받지 않는다.</p>\n<blockquote>\"We are complying with the government's legal directive and are removing access to Fable 5 and Mythos 5 for all users.\"<cite>Anthropic</cite></blockquote>\n<h3>무슨 일인가</h3>\n<p>정부가 든 근거는 Fable 5의 안전장치를 우회하는 ‘탈옥’ 방법이 발견됐다는 것이다. 외부 보도에 따르면 6월 10일 유명 탈옥러 ‘Pliny the Liberator’가 X에 공개한 우회법이 발단으로, 사이버 공격·폭발물 등 위험 정보를 끌어냈다고 주장했다. 앤트로픽은 시연을 검토한 뒤, 이는 다른 공개 모델에도 흔한 사소하고 이미 알려진 취약점이라고 반박한다. 좁은(narrow) 탈옥이지 보편적 결함이 아니며, 같은 기준을 업계 전체에 적용하면 모든 프런티어 모델 배포가 멈춘다는 것이다.</p>\n<h3>여러 시각</h3>\n<p>같은 사건을 현장과 산업 전체의 층위에서 보면 파장이 더 분명해진다.</p>\n<ul><li><b>VentureBeat(기업의 관점)</b> — 비즈니스 연속성. 가장 강력한 상용 모델이 하루아침에 꺼지자, 기업들은 대체 모델로의 즉각 이전과 ‘단일 모델 의존’의 위험을 다시 따져야 했다. 정책 리스크가 곧 운영 리스크임을 보여준 사례다.</li><li><b>VentureBeat(산업의 관점)</b> — 게이팅의 일반화. 비슷한 시기 OpenAI의 신모델(GPT-5.6 계열)도 정부 방침에 따라 일부 프리뷰 파트너에게만 열렸다. 프런티어 모델 접근을 정부가 사전 통제하는 흐름이 한 회사만의 일이 아니라는 신호다.</li></ul>\n<h3>왜 중요한가</h3>\n<p>세 자료를 겹치면 2026년 프런티어 AI의 새 국면이 보인다. 모델의 운명을 가르는 변수가 ‘성능’에서 ‘규제·안보’로 옮겨가고 있다. 탈옥 한 건이 수출통제 카드로 이어진다는 건, 능력이 커질수록 배포가 정치·안보 판단에 묶인다는 뜻이다. 기업엔 ‘어떤 모델이 가장 똑똑한가’만큼 ‘어떤 모델이 내일도 켜져 있을 것인가’가 중요한 질문이 됐다.</p>\n<h3>실무 적용</h3>\n<ul><li>AI 기능은 처음부터 모델 교체가 쉬운 추상화 계층 위에 올려, 특정 모델이 중단돼도 빠르게 갈아끼울 수 있게 설계한다.</li><li>핵심 워크플로는 단일 공급사·단일 모델에 묶지 말고, 동급 대체 모델을 미리 검증해 ‘플랜 B’를 운영 문서에 박아 둔다.</li><li>모델 선택 기준에 성능·비용뿐 아니라 ‘규제·가용성 리스크’를 명시적 항목으로 넣어 의사결정에 반영한다.</li></ul>\n<h3>Kenny의 관점</h3>\n<p>프런트엔드·PM을 오가며 일하는 입장에서 이 사건의 교훈은 분명하다 — AI 모델은 ‘영구 인프라’가 아니라 ‘언제든 사라질 수 있는 외부 의존성’이다. 나는 AI 기능을 붙일 때 모델 호출을 얇은 어댑터 뒤에 숨겨, 공급사가 바뀌어도 UI와 제품 로직은 그대로 두는 구조를 우선한다. 그리고 ‘이 기능이 모델 없이도 최소한 동작하는가(graceful degradation)’를 항상 묻는다. 화려한 능력보다, 꺼졌을 때 무너지지 않는 설계가 결국 신뢰를 만든다.</p>\n<h3>출처</h3>\n<ul><li><a href=\"https://www.anthropic.com/news/fable-mythos-access\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Anthropic: Statement on the US government directive to suspend access to Fable 5 and Mythos 5 ↗</a></li><li><a href=\"https://venturebeat.com/technology/anthropic-blocks-all-public-access-to-claude-fable-5-mythos-5-following-us-government-order-what-enterprises-should-do\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">VentureBeat: Anthropic blocks all public access to Claude Fable 5, Mythos 5 — what enterprises should do ↗</a></li><li><a href=\"https://venturebeat.com/technology/openai-unveils-gpt-5-6-sol-terra-and-luna-models-but-only-accessible-to-limited-preview-partners-for-now-per-us-gov\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">VentureBeat: OpenAI unveils GPT-5.6 Sol, Terra and Luna — limited preview per US Gov ↗</a></li></ul>",
    "source": "Anthropic",
    "sourceUrl": "https://www.anthropic.com/news/fable-mythos-access",
    "tags": [
      "AIPolicy",
      "ExportControls",
      "FrontierModels"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-28-astro-markdown-component-any-framework",
    "category": "design",
    "date": "2026-06-28",
    "title": "마크다운을 컴포넌트에 넣을 때 깨지는 들여쓰기",
    "rawTitle": "Astro Markdown Component Utility for Any Framework",
    "summary": "마크다운을 컴포넌트 안에 곱게 들여쓰면 대부분의 라이브러리가 그 공백을 코드 블록으로 오해한다. Astro 슬롯과 작은 유틸로 프레임워크를 가리지 않고 푸는 법.",
    "bodyHtml": "<p>마크다운을 컴포넌트 안에 곱게 들여써 넣었더니 본문이 통째로 회색 코드 블록으로 변해버린 경험. 프론트엔드 개발자라면 한 번쯤 겪는 함정이다. CSS-Tricks가 2026년 6월 1일 공개한 Zell Liew의 글은 이 사소해 보이지만 끈질긴 문제를 정면으로 다룬다. 대부분의 마크다운 라이브러리가 들여쓴 공백을 ‘코드’로 오해해 <code>&lt;pre&gt;&lt;code&gt;</code>로 감싸버리기 때문인데, 저자는 이를 프레임워크를 가리지 않고 푸는 작은 유틸과 Astro 슬롯 활용법으로 풀어낸다.</p>\n<blockquote>\"I hit a snag when using most Markdown libraries.\"<cite>Zell Liew, CSS-Tricks</cite></blockquote>\n<h3>무슨 일인가</h3>\n<p>핵심은 ‘입력 정리’다. Splendid Labz의 <code>markdown()</code> 유틸은 마크다운 텍스트를 처리하기 전에 문제의 들여쓰기를 먼저 걷어낸다. <code>inline</code> 옵션으로 결과를 <code>&lt;p&gt;</code>로 감쌀지 말지도 고른다. 프레임워크별 연결 방식은 슬롯 처리 능력에 따라 갈린다. Astro는 <code>Astro.slots.render()</code>로 슬롯에 담긴 자식 콘텐츠를 문자열로 받아 유틸에 통과시키고, Svelte는 동적 슬롯 내용을 읽지 못해 props로 텍스트를 넘긴다. React·Vue는 같은 패턴을 직접 구현하면 된다. 결국 ‘어디에 마크다운을 두고, 어떻게 문자열로 꺼내느냐’가 전부다.</p>\n<h3>여러 시각</h3>\n<p>같은 문제를 Astro가 제공하는 기본기와 견주면 맥락이 분명해진다.</p>\n<ul><li><b>Astro 공식 문서(슬롯)</b> — 구조의 관점. <code>&lt;slot/&gt;</code>은 외부 HTML을 끼워 넣는 자리표시자이고, <code>Astro.slots</code> 유틸로 슬롯 콘텐츠를 직접 렌더링·문자열화할 수 있다. 이 글의 우회법이 사실 Astro의 기본기 위에 서 있음을 보여준다.</li><li><b>Astro 공식 문서(마크다운)</b> — 대안의 관점. 레이아웃은 <code>compiledContent()</code>로 마크다운을 HTML로, <code>rawContent()</code>로 원문 문자열을 돌려준다. 콘텐츠 양이 커지면 즉석 유틸보다 이런 네이티브 파이프라인이나 MDX가 더 견고하다는 점을 시사한다.</li></ul>\n<h3>왜 중요한가</h3>\n<p>이 작은 문제는 ‘콘텐츠와 컴포넌트의 경계’라는 큰 주제를 건드린다. 디자인 시스템이 성숙할수록 버튼·카드 같은 UI뿐 아니라 본문 텍스트도 컴포넌트로 다뤄야 하는데, 마크다운은 공백에 민감해 ‘코드 모양’과 ‘콘텐츠 모양’의 경계가 쉽게 무너진다. 들여쓰기 하나로 렌더링이 깨지면 디자인 QA에서 잡기도 어렵다. 프레임워크마다 슬롯 모델이 달라 ‘한 번 짜서 어디서나’가 생각보다 어렵다는 현실도 함께 드러난다.</p>\n<h3>실무 적용</h3>\n<ul><li>마크다운을 컴포넌트에 넣을 땐 들여쓰기를 펴거나 전용 유틸로 정규화해, 공백이 코드 블록으로 둔갑하는 일을 막는다.</li><li>슬롯에서 문자열을 꺼내는 API(<code>Astro.slots.render</code> 등)는 프레임워크마다 다르므로, 콘텐츠 렌더링 계층을 얇게 추상화해 갈아끼우기 쉽게 둔다.</li><li>본문 분량이 늘면 즉석 변환 대신 MDX·콘텐츠 컬렉션 같은 네이티브 파이프라인으로 옮겨 빌드 타임에 안정적으로 처리한다.</li></ul>\n<h3>Kenny의 관점</h3>\n<p>프론트엔드에서 이런 ‘공백 한 칸’ 버그가 무서운 이유는, 기능이 아니라 콘텐츠가 조용히 망가지기 때문이다. 테스트는 통과하는데 글이 코드처럼 보인다. 나는 마크다운을 다룰 때 ‘입력은 더럽고 출력은 깨끗해야 한다’를 전제로, 정규화 단계를 파이프라인 맨 앞에 못 박아 둔다. 그리고 프레임워크에 종속된 슬롯 트릭은 최소화한다 — 영리한 우회는 당장은 통하지만, 다음 사람이 왜 이렇게 짰는지 모르면 그게 곧 부채다. 콘텐츠를 컴포넌트로 다루는 시대일수록 경계를 단순하게 지키는 쪽이 오래 간다.</p>\n<h3>출처</h3>\n<ul><li><a href=\"https://css-tricks.com/astro-markdown-component-utility-any-framework/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">CSS-Tricks: Astro Markdown Component Utility for Any Framework ↗</a></li><li><a href=\"https://docs.astro.build/en/basics/astro-components/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Astro Docs: Components (Slots) ↗</a></li><li><a href=\"https://docs.astro.build/en/guides/markdown-content/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Astro Docs: Markdown in Astro ↗</a></li></ul>",
    "source": "CSS-Tricks",
    "sourceUrl": "https://css-tricks.com/astro-markdown-component-utility-any-framework/",
    "tags": [
      "Astro",
      "Markdown",
      "Components"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-28-anthropic-economic-index-cadences",
    "category": "ai",
    "date": "2026-06-28",
    "title": "AI 사용의 리듬: 새벽엔 잠, 저녁엔 레시피",
    "rawTitle": "Anthropic Economic Index report: Cadences",
    "summary": "앤트로픽이 클로드 사용 로그와 9,700명 설문으로 본 ‘AI 사용의 리듬’. 7시엔 뉴스, 18시엔 레시피, 새벽 5시엔 수면 고민 — AI가 일상의 생체시계를 그대로 비춘다.",
    "bodyHtml": "<p>AI가 언제 무엇을 묻는지를 들여다보면, 결국 사람의 하루가 보인다. 앤트로픽이 2026년 6월 26일 공개한 이코노믹 인덱스 ‘Cadences(리듬)’ 보고서는 클로드 사용 로그와 9,700명 설문을 엮어, AI 사용이 일상의 생체시계를 그대로 비춘다는 사실을 데이터로 보여준다. 아침 7시엔 뉴스 요청이, 저녁 6시엔 평소의 2.3배에 달하는 레시피 질문이, 새벽 5시엔 수면 고민이 몰린다. 단순한 통계 너머, 사람들이 AI를 어떻게 일과 삶에 녹여 쓰는지를 읽어내는 보고서다.</p>\n<blockquote>\"People who use Claude in the most automated way expect AI to take on more of their tasks in the next year, yet feel the most optimistic about what that means for their work.\"<cite>Anthropic Economic Index</cite></blockquote>\n<h3>무슨 일인가</h3>\n<p>보고서가 든 숫자는 사용의 결을 드러낸다. 평일 35% 수준이던 개인적 대화는 주말이면 50%까지 오르고, 고임금 직군일수록 주말에도 업무성 사용이 덜 줄어든다. 4월 14—15일엔 세금 관련 요청이 평소의 8배로 튀었다. 대화의 93%는 설명·문서·가이드 같은 구체적 산출물(artifact)로 이어지며, 고임금 직군의 대화는 저임금 직군보다 토큰을 2.07배 더 소비한다 — 더 복잡한 일을 맡긴다는 뜻이다. 설문에선 3분의 1이 1년 안에 AI가 업무 대부분을 처리할 것으로 봤지만, 정작 자기 일을 잃을 가능성을 높게 본 비율은 10%에 그쳤다.</p>\n<h3>여러 시각</h3>\n<p>같은 ‘AI와 일’의 흐름을 두 자료가 다른 층위에서 본다.</p>\n<ul><li><b>MIT 테크놀로지 리뷰(증강의 관점)</b> — 대체가 아니라 증강. 다수의 직무는 자동화와 혁신이 섞이며, 60% 이상이 AI를 ‘대체’가 아닌 ‘보조’ 도구로 활용하게 된다고 본다. 가장 자동화해 쓰는 사용자가 가장 낙관적이라는 앤트로픽의 결과와 결을 같이한다.</li><li><b>VentureBeat(확산 속도의 관점)</b> — 현장의 속도. 1,000명 이상 기업의 68%가 이미 에이전트형 AI를 도입했고, 누구나 ‘AI 에이전트를 만들고 관리하는 사람’이 되어가며 명확한 커뮤니케이션·전략적 사고가 새 핵심 역량으로 떠오른다고 짚는다.</li></ul>\n<h3>왜 중요한가</h3>\n<p>세 자료를 겹치면 2026년 AI 사용의 윤곽이 또렷해진다. 사용량은 이제 ‘얼마나 똑똑한가’가 아니라 ‘삶의 어디에 끼어드는가’로 측정되기 시작했다. AI가 일상의 리듬에 스며들수록 가장 깊이 쓰는 사람일수록 더 낙관적이라는 역설은 ‘익숙함이 불안을 이긴다’는 신호다. 동시에 고임금 직군이 더 무거운 일을 맡긴다는 토큰 격차는, AI 활용 능력 자체가 새로운 격차의 축이 될 수 있음을 경고한다.</p>\n<h3>실무 적용</h3>\n<ul><li>제품의 사용 지표를 ‘DAU’가 아니라 ‘시간대·요일별 의도(intent)’로 쪼개 보면, 사용자의 진짜 맥락과 피크 시점을 설계에 반영할 수 있다.</li><li>AI 기능은 산출물(artifact) 중심으로 설계한다 — 대화의 93%가 결과물로 이어지는 만큼, ‘대화’보다 ‘꺼내 쓸 수 있는 결과’를 먼저 만든다.</li><li>팀 안에서 AI를 ‘얼마나 자동화해 쓰는가’의 편차를 줄이는 교육에 투자해, 활용 격차가 성과 격차로 굳어지지 않게 한다.</li></ul>\n<h3>Kenny의 관점</h3>\n<p>프론트엔드·QA·PM을 오가며 일하는 입장에서 이 보고서의 진짜 가치는 ‘AI 사용을 UX 데이터처럼 읽을 수 있다’는 점이다. 사람들은 새벽 5시에 잠을 묻고 저녁 6시에 저녁을 묻는다 — 이건 기능 명세가 아니라 생활 맥락이다. 나는 AI 기능을 붙일 때 ‘무엇을 할 수 있나’보다 ‘사용자가 언제, 어떤 마음으로 부르나’를 먼저 그린다. 그리고 가장 깊이 쓰는 사용자가 가장 낙관적이라는 결과를, AX 관점에선 ‘초기 진입 마찰을 낮추면 신뢰가 따라온다’로 읽는다. 결국 AI 제품의 승부처는 모델이 아니라 일상의 리듬에 자연스레 얹히는 설계다.</p>\n<h3>출처</h3>\n<ul><li><a href=\"https://www.anthropic.com/research/economic-index-june-2026-report\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Anthropic: Economic Index report — Cadences ↗</a></li><li><a href=\"https://www.technologyreview.com/2026/01/21/1131366/rethinking-ais-future-in-an-augmented-workplace/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">MIT Technology Review: Rethinking AI’s future in an augmented workplace ↗</a></li><li><a href=\"https://venturebeat.com/ai/the-great-ai-agent-acceleration-why-enterprise-adoption-is-happening-faster-than-anyone-predicted\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">VentureBeat: The great AI agent acceleration ↗</a></li></ul>",
    "source": "Anthropic",
    "sourceUrl": "https://www.anthropic.com/research/economic-index-june-2026-report",
    "tags": [
      "AnthropicEconomicIndex",
      "AIatWork",
      "UsagePatterns"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-27-css-pie-chart-sans-javascript",
    "category": "design",
    "date": "2026-06-27",
    "title": "자바스크립트 없이 그리는 CSS 파이 차트",
    "rawTitle": "Another Stab at the Perfect CSS Pie Chart… Sans JavaScript!",
    "summary": "conic-gradient로 파이 차트를 그릴 때 막히는 건 '앞선 조각들의 누적 각도'다. 형제 상태를 모르는 CSS의 한계를 부모로 데이터를 끌어올려 순수 CSS로 푼 영리한 해법.",
    "bodyHtml": "<p>파이 차트를 자바스크립트 없이 순수 CSS로 그릴 수 있을까? CSS-Tricks가 2026년 6월 4일 공개한 Antoine Villepreux의 글은 이 오래된 질문에 새 답을 내놓는다. <code>conic-gradient</code>로 원형을 칠하는 건 쉽지만, 각 조각의 '시작 각도'를 정하려면 앞선 조각들의 누적 퍼센트가 필요하다. 문제는 CSS에서 형제(sibling) 요소가 서로의 상태를 알 수 없다는 점이다. 저자는 이 근본 제약을 정면으로 다시 붙든다.</p>\n<blockquote>\"I returned to the core issue: because of how CSS inheritance works, children cannot know the state of their siblings.\"<cite>Antoine Villepreux, CSS-Tricks</cite></blockquote>\n<h3>무슨 일인가</h3>\n<p>해법은 데이터를 자식이 아니라 부모 <code>&lt;ul&gt;</code>로 끌어올리는 것이다. 각 조각의 퍼센트를 부모의 data 속성에 인덱스로 담아 두고, <code>attr()</code> 함수로 읽어 <code>nth-child()</code>로 해당 조각에 분배한다. 그런 다음 <code>calc()</code>로 앞선 값들을 차곡차곡 더해 '시작 각도(--accum)'를 만든다. 부모는 모든 자식을 알기에, 형제끼리 공유하지 못하던 누적 계산을 부모가 대신 떠맡는 구조다. 저자는 곧 Baseline에 오를 <code>sibling-index()</code>·<code>sibling-count()</code>가 이 번거로운 우회를 통째로 없앨 것이라 본다.</p>\n<h3>여러 시각</h3>\n<p>같은 문제를 다른 각도에서 보면 한계와 맥락이 분명해진다.</p>\n<ul><li><b>CSS-Tricks(이전 시도)</b> — '완벽한 CSS 파이 차트'를 향한 초기 도전은 자바스크립트로 누적값을 계산해 채워 넣었다. 이번 글은 그 JS 의존을 걷어내고 같은 결과를 CSS만으로 재현했다는 점에서 진화다.</li><li><b>MDN(conic-gradient)</b> — 접근성의 관점. conic-gradient로 그린 차트는 결국 '이미지'라 대체 텍스트를 줄 수 없어 스크린리더에는 보이지 않는다. 시각화의 의미는 별도 마크업(표·텍스트)으로 반드시 보강해야 한다고 짚는다.</li></ul>\n<h3>왜 중요한가</h3>\n<p>이 사례는 CSS가 점점 '계산'을 흡수하는 큰 흐름을 보여준다. 예전엔 자바스크립트가 맡던 누적·인덱스 계산이 <code>attr()</code>·<code>calc()</code>로, 그리고 곧 <code>sibling-index()</code>로 네이티브에 들어온다. JS 의존이 줄면 번들이 가벼워지고 렌더링도 브라우저 최적화 경로를 탄다. 다만 영리한 우회일수록 코드의 의도가 가려지기 쉬워, '왜 이렇게 썼는지'를 설명할 수 있어야 유지보수가 산다.</p>\n<h3>실무 적용</h3>\n<ul><li>간단한 비율 시각화는 라이브러리 대신 conic-gradient + CSS 변수로 구현해 번들과 의존성을 줄인다.</li><li>CSS-only 차트는 스크린리더에 안 보이므로, 데이터를 <code>&lt;table&gt;</code>이나 visually-hidden 텍스트로 함께 제공해 접근성을 보강한다.</li><li>sibling-index()·sibling-count() 지원 현황을 점검해, 가능해지면 인덱스별 변수 나열 같은 보일러플레이트를 걷어낸다.</li></ul>\n<h3>Kenny의 관점</h3>\n<p>프론트엔드 관점에서 이 글의 진짜 교훈은 '기교'가 아니라 '경계 감각'이다. CSS로 못 하던 일이 매년 가능해지지만, 가능하다고 다 옳은 선택은 아니다. 나는 작은 도넛·게이지처럼 정적인 비율 표시는 CSS로 내리고, 인터랙션·툴팁·동적 갱신이 필요하면 그때 JS를 얹는다. 그리고 화면에 무엇을 그리든 '스크린리더에는 어떻게 들리나'를 먼저 묻는다. 예뻐 보이는 차트보다, 꺼졌을 때도 데이터가 전달되는 차트가 맞다.</p>\n<h3>출처</h3>\n<ul><li><a href=\"https://css-tricks.com/another-stab-at-the-perfect-css-pie-chart-sans-javascript/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">CSS-Tricks: Another Stab at the Perfect CSS Pie Chart… Sans JavaScript! ↗</a></li><li><a href=\"https://css-tricks.com/trying-to-make-the-perfect-pie-chart-in-css/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">CSS-Tricks: Trying to Make the Perfect Pie Chart in CSS ↗</a></li><li><a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/conic-gradient\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">MDN: conic-gradient() ↗</a></li></ul>",
    "source": "CSS-Tricks",
    "sourceUrl": "https://css-tricks.com/another-stab-at-the-perfect-css-pie-chart-sans-javascript/",
    "tags": [
      "CSS",
      "ConicGradient",
      "DataViz"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-27-leading-hybrid-human-ai-teams",
    "category": "ai",
    "date": "2026-06-27",
    "title": "AI가 동료가 된 팀, 리더십이 바뀐다",
    "rawTitle": "Learning to lead in a hybrid human-AI enterprise",
    "summary": "자율 에이전트가 늘면서 리더의 일은 '문제를 푸는 영웅'에서 '문제를 풀 무대를 설계하는 사람'으로 옮겨간다. 2년간 도입 300% 전망 속, 진짜 병목은 모델이 아니라 사람·거버넌스다.",
    "bodyHtml": "<p>AI 에이전트가 '도구'에서 '동료'로 넘어오면서, 진짜 과제는 모델 성능이 아니라 사람과 AI가 섞인 팀을 어떻게 이끄느냐로 옮겨가고 있다. MIT 테크놀로지 리뷰가 2026년 6월 9일 공개한 글은, 자율적으로 일하는 에이전트가 늘어나는 조직에서 리더의 역할 자체가 바뀐다고 짚는다. 앞으로 2년간 에이전트 도입이 최대 300% 늘 것으로 전망되는 가운데, 역할 배분·필요 역량·조직 문화를 다시 설계하지 않으면 생산성도 신뢰도 얻지 못한다는 경고다.</p>\n<blockquote>\"The nature of your job changes from being the hero who comes in to solve the problem to designing the hero who can solve the problem.\"<cite>Ateet Jayaswal, MIT Technology Review</cite></blockquote>\n<h3>무슨 일인가</h3>\n<p>기사가 든 수치는 변화의 속도를 보여준다. 고객지원·HR·영업 같은 초기 적용 영역에서 이미 30~50%의 생산성 향상이 나타났고, 2030년까지 현재 직무의 약 75%가 재설계·재교육·재배치를 필요로 할 것으로 본다. 인사 책임자의 86%는 '디지털 노동(AI 에이전트) 관리'가 자기 업무의 핵심이 될 것이라 답했지만, 73%는 정작 직원들이 AI가 자기 일을 어떻게 바꿀지조차 잘 모른다고 토로한다. 리더가 풀어야 할 건 기술이 아니라 사람과 신뢰의 문제라는 것이다.</p>\n<h3>여러 시각</h3>\n<p>같은 'AI 에이전트의 조직화' 흐름을 두 자료가 다른 층위에서 본다.</p>\n<ul><li><b>MIT 테크놀로지 리뷰(조직 설계)</b> — 더 근본적인 관점. 에이전트 시대엔 직무를 손보는 수준이 아니라 조직 구조 자체를 다시 그려야 하며, 85%가 '에이전트형 조직'을 원하지만 76%는 현재 운영·인프라가 이를 못 받친다고 짚는다.</li><li><b>VentureBeat(섀도 AI)</b> — 운영·보안의 관점. 마이크로소프트가 에이전트 관리 플랫폼 'Agent 365'를 정식 출시한 배경엔, 회사 몰래 쓰이는 '섀도 AI'를 통제 가능한 거버넌스 안으로 끌어들여야 한다는 절박함이 있다.</li></ul>\n<h3>왜 중요한가</h3>\n<p>세 자료를 겹치면 2026년 기업 AI의 병목이 또렷해진다. 모델은 충분히 똑똑해졌고, 막상 막히는 건 사람·프로세스·거버넌스다. 에이전트가 민감한 데이터에 접근하는 순간 'human-in-the-loop' 감독과 권한 설계가 필수가 되고, 직원이 AI를 신뢰하지 못하면 300% 도입 전망도 숫자에 그친다. 리더십의 정의가 '직접 문제를 푸는 영웅'에서 '문제를 풀 수 있는 시스템을 설계하는 사람'으로 옮겨가는 것이다.</p>\n<h3>실무 적용</h3>\n<ul><li>AI를 1:1 도구가 아니라 팀 멤버로 배치할 때, '맡길 일'과 '사람이 검수할 일(human-in-the-loop)'의 경계를 워크플로에 명시한다.</li><li>섀도 AI를 금지로 막기보다, 접근 권한·로그·감사 흐름을 갖춘 공식 경로를 먼저 제공해 양지로 끌어들인다.</li><li>팀의 'AI 리터러시'를 기본 역량으로 두고, 요구사항을 에이전트에 명확히 전달하는 '지시 설계' 능력을 새 핵심 스킬로 키운다.</li></ul>\n<h3>Kenny의 관점</h3>\n<p>프론트엔드·QA·PM을 오가며 일하는 입장에서 이 변화의 핵심은 'AX(Agent Experience)'다. 사람이 쓰는 UX만큼, 에이전트가 일하기 좋은 권한·맥락·피드백 구조를 설계하는 일이 곧 생산성을 가른다. 나는 에이전트에게 일을 맡길 때 'UI를 어떻게 보여줄까'보다 '무엇을 했고 어디서 멈춰 사람을 불러야 하나'를 먼저 정한다. 영웅을 자처하기보다 영웅이 일할 무대를 설계하는 쪽이, 결국 팀 전체를 빠르게 만든다.</p>\n<h3>출처</h3>\n<ul><li><a href=\"https://www.technologyreview.com/2026/06/09/1137830/learning-to-lead-in-a-hybrid-human-ai-enterprise/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">MIT Technology Review: Learning to lead in a hybrid human-AI enterprise ↗</a></li><li><a href=\"https://www.technologyreview.com/2026/05/26/1137584/rethinking-organizational-design-in-the-age-of-agentic-ai/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">MIT Technology Review: Rethinking organizational design in the age of agentic AI ↗</a></li><li><a href=\"https://venturebeat.com/technology/microsoft-takes-agent-365-out-of-preview-as-shadow-ai-becomes-an-enterprise-threat\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">VentureBeat: Microsoft takes Agent 365 out of preview as shadow AI becomes an enterprise threat ↗</a></li></ul>",
    "source": "MIT Technology Review",
    "sourceUrl": "https://www.technologyreview.com/2026/06/09/1137830/learning-to-lead-in-a-hybrid-human-ai-enterprise/",
    "tags": [
      "AIagents",
      "Leadership",
      "Governance"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-26-scroll-animations-decoded",
    "category": "design",
    "date": "2026-06-26",
    "title": "스크롤 애니메이션 4형제, 헷갈림 없이 구분하기",
    "rawTitle": "Scroll-Driven, Scroll-Triggered, Scroll States, and View Transitions",
    "summary": "스크롤 구동·스크롤 트리거·스크롤 상태·뷰 트랜지션은 비슷해 보이지만 작동 방식이 전혀 다르다. CSS-Tricks의 정리를 토대로 차이와 실무 선택 기준을 짚었다.",
    "bodyHtml": "<p>최근 CSS 스크롤 관련 기능이 한꺼번에 쏟아지면서 이름이 비슷한 네 가지 기술이 자주 혼동된다. CSS-Tricks의 제프 그레이엄은 스크롤 구동(scroll-driven), 스크롤 트리거(scroll-triggered), 스크롤 상태(scroll-state) 쿼리, 그리고 뷰 트랜지션을 한자리에 놓고 차이를 정리했다. 핵심은 ‘스크롤 진행도와 애니메이션이 직접 연결되는가’라는 한 가지 질문이다. 이름만 보고 고르면 의도와 다른 동작이 나오기 쉽다.</p>\n<blockquote>\"It helps me to spell things out like this.\"<cite>Geoff Graham, CSS-Tricks</cite></blockquote>\n<h3>무슨 일인가</h3>\n<p>스크롤 구동 애니메이션은 스크롤 위치와 진행도가 1:1로 묶여, 위로 올리면 거꾸로 재생되고 멈추면 곧바로 멈춘다. 스크롤 트리거는 요소가 특정 임계선을 넘는 순간 발동해 스크롤과 무관하게 끝까지 한 번 재생된다. 스크롤 상태 쿼리는 컨테이너가 특정 스크롤 조건에 도달했을 때 스타일을 바꾸는 중간 형태다. 뷰 트랜지션은 같은 문서 안의 상태 변화와 문서 간 페이지 전환을 모두 다루는 CSS+JS 통합 API다.</p>\n<h3>여러 시각</h3>\n<p>같은 흐름을 브라우저·표준 관점에서 보면 그림이 더 선명해진다.</p>\n<ul><li><b>CSS-Tricks(Interop 2026)</b> — 세 주요 엔진이 스크롤 구동 애니메이션·뷰 트랜지션·앵커 포지셔닝을 함께 맞추기로 하면서, ‘지원 여부 단서’를 달지 않고 쓸 수 있는 시대가 가까워졌다고 본다.</li><li><b>web.dev</b> — 2026년 들어 컨테이너 쿼리와 스크롤 상태 관련 기능이 차례로 Baseline에 올라, 실험 기능이 아니라 기본 도구로 다룰 수 있음을 데이터로 보여준다.</li></ul>\n<h3>왜 중요한가</h3>\n<p>네 기술은 목적이 달라 잘못 고르면 성능·접근성에서 비용을 치른다. 스크롤 진행도에 묶어야 할 효과를 트리거로 만들면 사용자가 위로 스크롤할 때 어색하게 멈추고, 반대로 한 번만 재생돼야 할 강조를 스크롤 구동으로 만들면 계속 깜빡인다. 또한 이들 대부분은 메인 스레드를 벗어나 처리되므로, 무거운 자바스크립트 스크롤 핸들러를 걷어내고 성능을 회복할 기회이기도 하다.</p>\n<h3>실무 적용</h3>\n<ul><li>진행 표시줄·패럴럭스처럼 스크롤과 동기화돼야 하는 효과는 scroll-driven(animation-timeline)으로 만든다.</li><li>화면 진입 시 한 번 등장시키는 강조는 scroll-triggered로 분리해 되돌이 재생을 막는다.</li><li>페이지 이동의 연결감이 필요하면 view-transition을 점진적 향상으로 적용해 미지원 브라우저에서도 깨지지 않게 한다.</li></ul>\n<h3>Kenny의 관점</h3>\n<p>프론트엔드에서 이 네 가지를 한 단어 ‘스크롤 애니메이션’으로 뭉뚱그리는 순간 디자인 QA가 어려워진다. 나는 기획 단계에서 ‘스크롤을 멈췄을 때 이 모션은 멈춰야 하나, 끝나야 하나’를 먼저 묻는다. 그 한 줄 정의가 곧 기술 선택이고, AX 관점에선 멀미·접근성(prefers-reduced-motion) 대응 범위까지 결정한다. 도구가 표준으로 안착한 지금은 ‘되는지’보다 ‘왜 이걸 쓰는지’를 설명할 수 있어야 한다.</p>\n<h3>출처</h3>\n<ul><li><a href=\"https://css-tricks.com/scroll-driven-scroll-triggered-scroll-states-and-view-transitions/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">CSS-Tricks: Scroll-Driven, Scroll-Triggered, Scroll States, and View Transitions ↗</a></li><li><a href=\"https://css-tricks.com/interop-2026/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">CSS-Tricks: Interop 2026 ↗</a></li><li><a href=\"https://web.dev/blog/web-platform-05-2026\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">web.dev: New to the web platform in May ↗</a></li></ul>",
    "source": "CSS-Tricks",
    "sourceUrl": "https://css-tricks.com/scroll-driven-scroll-triggered-scroll-states-and-view-transitions/",
    "tags": [
      "CSS",
      "Animation",
      "Scroll"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-26-claude-tag-slack-teammate",
    "category": "ai",
    "date": "2026-06-26",
    "title": "클로드를 팀원으로: 슬랙에 들어온 'Claude Tag'",
    "rawTitle": "Introducing Claude Tag",
    "summary": "앤트로픽이 슬랙에서 @Claude를 팀원처럼 호출해 일을 맡기는 ‘Claude Tag’를 공개했다. 채널 맥락을 학습하는 멀티플레이어형 협업 AI다.",
    "bodyHtml": "<p>6월 23일 앤트로픽이 슬랙에서 @Claude를 멘션해 업무를 맡기는 ‘Claude Tag’를 베타로 공개했다. 기존 ‘Claude in Slack’ 앱을 대체하며, 채널마다 하나의 클로드 인스턴스가 상주해 팀 전체가 함께 대화한다. 단순 챗봇 호출을 넘어 채널 맥락과 연결된 데이터를 시간이 지나며 학습하고, 미해결 작업을 스스로 챙기는 점이 핵심이다. AI를 ‘도구’에서 ‘비동기로 일하는 팀원’으로 옮기려는 시도다.</p>\n<blockquote>\"Tagging @Claude is now one of the main ways we get things done at Anthropic.\"<cite>Anthropic</cite></blockquote>\n<h3>무슨 일인가</h3>\n<p>Claude Tag는 Claude Enterprise·Team 고객에게 슬랙 베타로 제공되며 Claude Opus 4.8을 기반으로 한다. 채널에 상주한 인스턴스는 모두가 보는 공간에서 협업하고, 관리자는 어떤 도구·데이터·채널에 접근할지 세밀하게 통제한다. 사용자가 다른 일을 하는 동안 작업을 독립적으로 끝내고, 관련 정보를 먼저 띄우거나 후속 조치를 제안한다. 앤트로픽은 자사 제품팀 코드의 65%가 내부판 Claude Tag로 작성된다고 밝혔다.</p>\n<h3>여러 시각</h3>\n<p>이 발표는 ‘AI가 사무 업무를 떠맡는다’는 더 큰 흐름 위에 있다.</p>\n<ul><li><b>MIT Technology Review</b> — AI가 이미 회의 요약·인보이스·일정·SNS 기획 같은 기본 관리 업무를 처리할 수 있어, 전담 인력을 두기 어려운 소규모 조직일수록 효용이 크다고 본다. Claude Tag는 그 ‘관리 업무 대행’을 팀 채널 안으로 끌어들인 형태다.</li></ul>\n<h3>왜 중요한가</h3>\n<p>협업의 단위가 ‘사람이 AI를 호출’에서 ‘사람과 AI가 한 채널에 상주’로 바뀐다. 1:1 비공개 대화에 갇혀 있던 AI 작업이 팀 전체에 공개되면서 맥락 공유와 책임 추적이 쉬워지지만, 동시에 권한·데이터 접근 범위 설계가 보안의 핵심이 된다. 65%라는 내부 코드 비중은 마케팅 수치를 넘어, 조직이 AI를 상시 협업자로 전제하기 시작했다는 신호다.</p>\n<h3>실무 적용</h3>\n<ul><li>AI를 1:1 챗봇이 아니라 채널 상주 멤버로 배치해 맥락·결정 과정을 팀과 공유한다.</li><li>관리자 권한 설정(접근 가능한 도구·데이터·채널)을 도입 첫날의 보안 설계 항목으로 다룬다.</li><li>비동기 위임에 맞춰 ‘맡길 일’과 ‘사람이 검수할 일’의 경계를 명확히 하는 워크플로를 만든다.</li></ul>\n<h3>Kenny의 관점</h3>\n<p>프론트엔드·QA·PM을 오가며 일하는 입장에서 가장 와닿는 변화는 ‘AI가 스레드 맥락을 기억한다’는 점이다. 매번 배경을 다시 설명하던 비용이 사라지면, AI에게 맡길 수 있는 일의 단위가 작은 질문에서 며칠짜리 작업으로 커진다. 다만 채널 공개는 곧 실수도 공개라는 뜻이라, AX 관점에선 ‘클로드가 무엇을 했는지’ 투명하게 보이는 로그·승인 흐름 설계가 중요해진다. 팀원으로 들어온 AI에겐 도구 UX가 아니라 협업 에티켓이 필요하다.</p>\n<h3>출처</h3>\n<ul><li><a href=\"https://www.anthropic.com/news/introducing-claude-tag\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Anthropic: Introducing Claude Tag ↗</a></li><li><a href=\"https://www.technologyreview.com/2026/06/02/1138277/the-download-ai-tips-small-businesses-admin/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">MIT Technology Review: The Download — AI can run your admin department now ↗</a></li></ul>",
    "source": "Anthropic",
    "sourceUrl": "https://www.anthropic.com/news/introducing-claude-tag",
    "tags": [
      "Claude",
      "AI",
      "Collaboration"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-25-3d-view-transition-perspective",
    "category": "design",
    "date": "2026-06-25",
    "title": "3D 뷰 전환은 왜 깨질까, perspective의 함정",
    "rawTitle": "Why Isn't My 3D View Transition Working?",
    "summary": "뷰 트랜지션에 3D를 넣으면 화면이 평평해지는 이유는 의사(pseudo) 트리에 부모가 없기 때문이다. perspective 속성 대신 perspective() 함수를 써야 하고, 사파리는 그마저 막힌다.",
    "bodyHtml": "<p>페이지 전환에 입체감을 넣으려다 화면이 평평하게 뭉개지는 경험. CSS-Tricks가 2026년 6월 12일 공개한 글에서 Sunkanmi Fafowora는 그 원인을 정확히 짚는다. 뷰 트랜지션(View Transitions)으로 만든 의사 요소(pseudo) 트리는 일반 HTML 흐름 바깥, DOM 위 별도 레이어에 렌더된다. 그래서 조상 요소에 건 <code>perspective</code>는 끝내 닿지 않는다. 단순한 버그가 아니라 뷰 트랜지션의 렌더링 모델 자체에서 비롯된 함정이다.</p><blockquote>\"Since the view transition pseudo tree does not have a true parent, we've gotta use perspective().\"<cite>CSS-Tricks</cite></blockquote><h3>무슨 일인가</h3><p>핵심은 <code>perspective</code> 속성과 <code>perspective()</code> 함수의 차이다. <code>perspective</code> 속성은 부모 요소에 걸어 자식들이 공유하는 3D 공간을 만든다. 하지만 뷰 트랜지션 의사 트리에는 진짜 부모가 없으니 이 속성이 무력하다. 해결책은 부모가 필요 없는 <code>perspective()</code> 변형 함수를 <code>@keyframes</code> 안에서 요소 자신에 직접 적용하는 것이다. 단, 사파리는 스냅샷을 찍을 때 3D 맥락을 통째로 평면화해 <code>perspective()</code>마저 듣지 않는다(WebKit 버그 #283568·#302166).</p><h3>여러 시각</h3><p>같은 \"스크롤·전환 애니메이션\" 영역은 도구를 혼동하기 쉽다. CSS-Tricks의 다른 글들이 그 지형도를 보완한다.</p><ul><li><b>CSS-Tricks(스크롤·전환 4분류)</b> — 분류의 관점. 스크롤 구동(scroll-driven)은 스크롤 진행과 1:1로 묶이고, 스크롤 트리거(scroll-triggered)는 임계선을 넘으면 끝까지 한 번 재생되며, 스크롤 상태(scroll-state)는 sticky가 \"붙은\" 조건에서 스타일을 바꾸고, 뷰 트랜지션은 상태 A→B 전환을 맡는다. 넷을 구분해야 디버깅이 풀린다.</li><li><b>CSS-Tricks(View Transitions 레시피)</b> — 실전의 관점. 같은 API라도 추상 개념 대신 카드 확장·목록 전환 같은 시나리오별 레시피로 접근하면 감을 더 빨리 잡는다.</li></ul><h3>왜 중요한가</h3><p>뷰 트랜지션은 2026년 들어 크로스 도큐먼트까지 확장되며 \"JS 없이 매끄러운 페이지 전환\"의 표준 후보가 됐다. 하지만 의사 트리라는 독특한 렌더링 모델 탓에, 익숙한 3D 트릭이 그대로 통하지 않는다. <code>perspective</code> 하나가 왜 안 먹는지 모르면 한나절을 날린다. 표준이 강력해질수록, 그 내부 모델을 이해한 개발자와 \"왜 안 되지\"만 반복하는 개발자의 생산성 격차가 벌어진다.</p><h3>실무 적용</h3><ul><li>뷰 트랜지션에 3D를 줄 때는 조상에 <code>perspective</code> 속성을 걸지 말고, <code>@keyframes</code> 안에서 <code>perspective()</code> 함수를 요소에 직접 적용한다.</li><li>사파리는 스냅샷 단계에서 3D를 평면화하므로, 입체 전환은 점진적 향상(progressive enhancement)으로 설계하고 평면 fallback이 항상 자연스럽게 보이게 한다.</li><li>스크롤 효과를 넣기 전, 원하는 동작이 스크롤 구동·트리거·상태·뷰 트랜지션 중 무엇인지 먼저 분류해 잘못된 API로 디버깅하는 시간을 없앤다.</li></ul><h3>Kenny의 관점</h3><p>프론트엔드 관점에서 이 사례의 교훈은 \"추상화의 경계를 의심하라\"다. 뷰 트랜지션은 마치 일반 DOM처럼 보이지만 별도 레이어에서 돌아가고, 그 작은 차이가 <code>perspective</code>를 무력화한다. 나는 새 CSS API를 쓸 때 \"이게 어디서, 어떤 트리 위에서 렌더되는가\"를 먼저 확인한다. 화려한 3D 전환보다, 꺼졌을 때도 멀쩡한 평면 전환을 기본으로 두는 편이 사용자에게도 팀에게도 안전하다.</p><h3>출처</h3><ul><li><a href=\"https://css-tricks.com/why-isnt-my-3d-view-transition-working/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">CSS-Tricks: Why Isn't My 3D View Transition Working? ↗</a></li><li><a href=\"https://css-tricks.com/scroll-driven-scroll-triggered-scroll-states-and-view-transitions/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">CSS-Tricks: Scroll-Driven, Scroll-Triggered, Scroll States, and View Transitions ↗</a></li><li><a href=\"https://css-tricks.com/7-view-transitions-recipes-to-try/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">CSS-Tricks: 7 View Transitions Recipes to Try ↗</a></li></ul>",
    "source": "CSS-Tricks",
    "sourceUrl": "https://css-tricks.com/why-isnt-my-3d-view-transition-working/",
    "tags": [
      "CSS",
      "ViewTransitions",
      "Animation"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-25-project-glasswing-expansion-ai-security",
    "category": "ai",
    "date": "2026-06-25",
    "title": "AI가 취약점을 캐낸다, 글래스윙 확장의 양날",
    "rawTitle": "Expanding Project Glasswing",
    "summary": "앤트로픽이 보안 모델 글래스윙을 15개국 150여 개 기관으로 확장했다. 4월 이후 1만 건 넘는 치명적 결함을 찾아냈지만, 진짜 병목은 탐지가 아니라 패치 속도로 드러났다.",
    "bodyHtml": "<p>앤트로픽이 보안 특화 모델을 무기 삼아 방어 진영을 빠르게 넓히고 있다. 2026년 6월 2일, 회사는 'Project Glasswing'을 기존 약 50개 파트너에서 15개국 이상 150여 개 기관으로 확장한다고 밝혔다. 전력·수도·의료·통신·하드웨어 등 핵심 인프라 운영사들이 Claude Mythos 프리뷰로 자사 코드베이스의 취약점을 스캔한다. AI가 공격 도구가 될 수 있다는 공포의 뒷면에서, 같은 능력을 방어에 먼저 배치하려는 시도다.</p><blockquote>\"A major attack could affect more than 100 million people, with important ramifications for both global and national security.\"<cite>Anthropic</cite></blockquote><h3>무슨 일인가</h3><p>글래스윙의 성과는 구체적이다. 초기 파트너들은 4월 이후 Claude Mythos 프리뷰로 1만 건 넘는 고·치명도 보안 결함을 찾아냈다. 앤트로픽은 이번 확장의 목표를 두 가지로 든다. 첫째, 산업계가 안전한 방식으로 첨단 모델에 접근하도록 돕는 것. 둘째, 초점을 \"취약점 탐지\"에서 \"공개·패치·수정본 배포\"로 옮기는 것이다. 즉 결함을 찾는 일은 더 이상 병목이 아니며, 진짜 과제는 찾은 것을 얼마나 빨리 고치느냐로 이동했다는 선언이다.</p><h3>여러 시각</h3><p>같은 \"AI×보안\" 흐름을 두 자료가 다른 각도에서 본다.</p><ul><li><b>Anthropic(정부 수출통제 지시)</b> — 통제의 역설. 같은 6월, 미국 정부는 Fable 5·Mythos 5에 대한 모든 접근을 외국인 포함 전면 중단하라는 수출통제 지시를 내렸다(6월 12일 수령). 방어에 강력한 모델일수록 곧 통제 대상이 되는 긴장이다. 앤트로픽은 \"좁은 잠재적 탈옥(jailbreak)을 이유로 수억 명에게 배포된 상용 모델을 회수해야 한다는 데 동의하지 않는다\"며 따르되 반대한다는 입장을 냈다.</li><li><b>VentureBeat(패치가 너무 느리다)</b> — 운영의 관점. Mythos가 드러낸 불편한 진실은 탐지 속도가 아니라 기업의 패치 프로세스가 기계의 속도를 못 따라간다는 것이다. AI가 결함을 쏟아낼수록, 사람이 검토·배포하는 단계가 새로운 병목으로 떠오른다고 짚는다.</li></ul><h3>왜 중요한가</h3><p>세 자료를 겹치면 2026년 AI 보안의 구도가 보인다. 첫째, AI는 이미 방어에서 압도적 생산성을 낸다(1만 건 이상 탐지). 둘째, 그러나 그 능력은 곧 국가 통제의 대상이 된다(수출통제). 셋째, 조직의 진짜 약점은 모델이 아니라 그 뒤의 느린 사람·프로세스다. 공격이 자동화로 빨라지는데 탐지를 자동화하고도 패치가 수일~수주 걸린다면, 격차는 줄기는커녕 오히려 벌어진다.</p><h3>실무 적용</h3><ul><li>보안에 AI를 도입할 때 \"결함을 얼마나 찾느냐\"보다 \"찾은 결함을 며칠 만에 패치·배포하느냐\"(MTTR)를 핵심 지표로 삼는다.</li><li>강력한 모델은 언제든 규제·수출통제로 접근이 끊길 수 있으므로, 단일 모델에 종속되지 않는 대체 경로와 폴백을 보안 파이프라인에 설계한다.</li><li>AI가 쏟아내는 취약점 리포트를 사람이 다 검토할 수 없으므로, 심각도 자동 분류·우선순위화·수정안 자동 생성까지 파이프라인을 확장해 사람 병목을 줄인다.</li></ul><h3>Kenny의 관점</h3><p>PM·사업기획과 프론트엔드를 오가는 입장에서 이 흐름의 핵심은 \"AI의 가치는 탐지가 아니라 마감에 있다\"는 것이다. 결함을 1만 건 찾아도 고치지 못하면 위험은 그대로다. 나는 AI를 워크플로에 넣을 때 자동화가 만드는 새 산출물(리포트·후보 코드)을 사람이 감당할 수 있는지부터 본다. 병목을 한 단계 뒤로 미루는 자동화는 진짜 자동화가 아니다. 통제 리스크가 상수가 된 지금, 단일 모델에 운명을 거는 설계도 피한다.</p><h3>출처</h3><ul><li><a href=\"https://www.anthropic.com/news/expanding-project-glasswing\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Anthropic: Expanding Project Glasswing ↗</a></li><li><a href=\"https://www.anthropic.com/news/fable-mythos-access\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Anthropic: Statement on the US government directive to suspend access to Fable 5 and Mythos 5 ↗</a></li><li><a href=\"https://venturebeat.com/security/claude-mythos-exposed-a-hard-truth-your-enterprise-patching-process-is-way-too-slow\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">VentureBeat: Claude Mythos exposed a hard truth: Your enterprise patching process is way too slow ↗</a></li></ul>",
    "source": "Anthropic",
    "sourceUrl": "https://www.anthropic.com/news/expanding-project-glasswing",
    "tags": [
      "Anthropic",
      "AISecurity",
      "Cybersecurity"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-24-modern-css-toolkit-memorable-experiences",
    "category": "design",
    "date": "2026-06-24",
    "title": "기억에 남는 웹, 모던 CSS 도구함과 절제의 미학",
    "rawTitle": "Creating Memorable Web Experiences: A Modern CSS Toolkit",
    "summary": "글자 분할·clip-path·스크롤 연동·3D까지 순수 CSS로 가능해진 시대, 화려함의 장벽은 무너졌다. 이제 경쟁은 '무엇을 안 움직일까'라는 절제로 옮겨간다.",
    "bodyHtml": "<p>화려한 인터랙션을 넣는 기술적 장벽은 거의 사라졌다. <code>SplitText</code>로 글자를 쪼개 흩뿌리고, <code>clip-path</code>·<code>mask</code>·스크롤 연동 애니메이션·3D 변환을 자바스크립트 없이 순수 CSS로 구현한다. CSS-Tricks가 2026년 6월 10일 정리한 \"모던 CSS 도구함\"은 그 가능성을 한자리에 모았다. 그런데 글의 진짜 메시지는 \"무엇을 할 수 있나\"가 아니라 \"왜, 언제 움직여야 하나\"라는 절제의 질문이다.</p><blockquote>\"Everything communicates, and our animations are no exception.\"<cite>CSS-Tricks</cite></blockquote><h3>무슨 일인가</h3><p>기사는 여섯 가지 기법을 든다. 글자 분할 애니메이션, <code>clip-path</code>·<code>mask</code>, <code>animation-timeline</code> 기반 스크롤 연동, <code>perspective</code>·<code>preserve-3d</code> 3D 변환, SVG 커스텀 커서, 앵커 포지셔닝이다. 하지만 핵심은 기법 목록이 아니라 그 앞에 둔 원칙이다. 움직임을 넣기 전에 톤·속도·감정을 규정하는 키워드를 먼저 정하고, 그 의도에 맞는 기법만 고르라는 것. 저자는 또 글자 분할이 스크린리더 지원이 들쭉날쭉하다는 점을 짚으며, 접근성 테스트를 거치지 않을 거라면 DOM을 쪼개는 대신 <code>letter-spacing</code> 같은 대안을 쓰라고 권한다.</p><h3>여러 시각</h3><p>같은 \"의도 있는 모션\" 문제를 두 자료가 다른 층위에서 본다.</p><ul><li><b>web.dev(prefers-reduced-motion)</b> — 절제의 의무 관점. 애니메이션은 일부 사용자에게 어지럼·메스꺼움 같은 전정기관 반응을 일으킬 수 있어 \"적은 움직임\"이 의학적 필요가 된다. 동시에 <code>transform</code>·<code>opacity</code> 위주로 컴포지터 스레드에서 처리해 성능까지 챙기라고 짚는다.</li><li><b>Josh W. Comeau(Squash and Stretch)</b> — 장인의 관점. 1981년 디즈니 애니메이터들이 정리한 원칙에서 출발해, 움직임이 \"좋게 느껴지게\" 만드는 디테일과 <code>prefers-reduced-motion</code> 존중을 함께 가르친다. 같은 효과라도 타이밍과 가속 곡선이 인상을 가른다는 것이다.</li></ul><h3>왜 중요한가</h3><p>기법이 흔해질수록 차별점은 \"무엇을 안 움직일까\"로 옮겨간다. 모두가 스크롤 패럴랙스를 붙일 수 있게 되면 그 효과는 더 이상 인상적이지 않고, 오히려 산만함·성능 저하·접근성 문제로 남는다. 절제된 모션은 메시지를 보조하고, 과한 모션은 메시지를 가린다. 도구의 평준화가 곧 취향과 판단의 경쟁으로 바뀐다는 뜻이다.</p><h3>실무 적용</h3><ul><li>움직임을 코딩하기 전에 톤·속도·감정 키워드를 먼저 적고, 각 애니메이션이 그 의도에 부합하는지 검토하는 체크 단계를 둔다.</li><li>모든 모션에 <code>prefers-reduced-motion</code> 분기를 기본값으로 넣고, 핵심 정보 전달은 애니메이션이 꺼져도 완결되게 설계한다.</li><li>성능을 위해 layout·paint를 유발하는 속성 대신 <code>transform</code>·<code>opacity</code>로 애니메이션하고, 글자 분할은 스크린리더 테스트를 통과한 경우에만 쓴다.</li></ul><h3>Kenny의 관점</h3><p>프론트엔드 관점에서 이 글의 핵심은 \"기술 과시에서 의도 설계로\"의 이동이다. 이제 누구나 화려한 효과를 붙일 수 있으니, 차별점은 효과의 개수가 아니라 \"이 움직임이 무엇을 말하는가\"다. 나는 새 인터랙션을 넣을 때 \"이걸 끄면 사용자가 무엇을 잃는가\"를 먼저 묻는다. 잃는 게 없다면 그 모션은 장식일 뿐이고, 장식은 빼는 쪽이 대개 옳다.</p><h3>출처</h3><ul><li><a href=\"https://css-tricks.com/creating-memorable-web-experiences-a-modern-css-toolkit/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">CSS-Tricks: Creating Memorable Web Experiences: A Modern CSS Toolkit ↗</a></li><li><a href=\"https://web.dev/articles/prefers-reduced-motion\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">web.dev: prefers-reduced-motion: Sometimes less movement is more ↗</a></li><li><a href=\"https://www.joshwcomeau.com/animation/squash-and-stretch/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Josh W. Comeau: Squash and Stretch ↗</a></li></ul>",
    "source": "CSS-Tricks",
    "sourceUrl": "https://css-tricks.com/creating-memorable-web-experiences-a-modern-css-toolkit/",
    "tags": [
      "CSS",
      "Animation",
      "UX"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-24-anthropic-public-record-ai-opinion",
    "category": "ai",
    "date": "2026-06-24",
    "title": "AI를 향한 미국인의 속마음, 5만 2천 명의 기록",
    "rawTitle": "Results from first Anthropic Public Record",
    "summary": "앤트로픽이 미국인 약 5만 2천 명에게 AI를 물었다. 혜택은 원하되 만든 기업을 신뢰한다는 응답은 15%뿐. 신뢰 위기의 뿌리는 성능이 아니라 경험의 격차였다.",
    "bodyHtml": "<p>앤트로픽이 미국인 약 5만 2천 명에게 AI를 어떻게 생각하는지 물었다. 'Anthropic Public Record'라 이름 붙인 이 설문은 2025년 11~12월, 50개 주 전역의 전국 대표 표본으로 진행됐다. 결과는 한쪽으로 쏠리지 않았다. 질병 정복 같은 기대와 일자리 상실 같은 두려움이 공존하고, 정부 개입을 원하는 목소리는 71%로 초당파적이다. 그런데 가장 눈에 띄는 건, AI 개발을 만드는 기업에 맡겨도 된다는 신뢰가 단 15%라는 점이다.</p><blockquote>\"The direction AI takes should not be set only by the companies building it.\"<cite>Anthropic</cite></blockquote><h3>무슨 일인가</h3><p>설문은 기대·두려움·규제 인식을 갈라 물었다. 기대 1위는 질병 치료(48%)였고 장애인 지원(36%)이 뒤를 이었다. 두려움은 일자리 대체(64%)가 압도했고 인지적 의존(56%), 허위정보(52%) 순이었다. 규제에선 71%가 정부 개입을 원했고 지역·정파 차이는 작았다. 반면 AI 개발 결정을 기업에 맡겨도 된다는 신뢰는 15%로, 조사된 기관 중 최저였다. 모델을 만든 회사가 스스로 \"우리만 믿고 맡기지 말라\"는 데이터를 공개한 셈이다.</p><h3>여러 시각</h3><p>같은 \"AI 여론\"을 두 자료가 다른 각도에서 본다.</p><ul><li><b>Anthropic(Public Record)</b> — 합의 관점. 미국인은 정파·지역을 넘어 \"AI의 혜택은 원하되 기업의 책임을 요구한다\"는 데서 의외로 일치한다는 점을 부각한다.</li><li><b>MIT Technology Review(왜 의견이 갈리나)</b> — 분열 관점. 전문가의 73%가 일자리 영향을 긍정하지만 대중은 23%만 동의해 약 50%p 격차가 난다. 유료 도구를 쓰는 파워유저와 몇 달 전 무료 버전을 써본 사람은 사실상 다른 기술을 경험하기 때문이라고 본다.</li></ul><h3>왜 중요한가</h3><p>두 자료를 겹치면 역설이 드러난다. 큰 틀(혜택 기대 + 기업 불신 + 규제 요구)에서는 합의하지만, \"AI가 실제로 얼마나 쓸 만한가\"라는 체감에서는 전문가와 대중이 갈린다. 즉 신뢰 위기의 뿌리는 능력 부족이 아니라 경험의 격차다. 제품을 만드는 쪽에는 \"성능을 더 올리면 신뢰가 따라온다\"는 가정이 틀릴 수 있다는 경고이기도 하다.</p><h3>실무 적용</h3><ul><li>AI 기능을 내놓을 때 능력 과시보다 \"무엇을 못 하는지\"를 투명하게 알려, 들쭉날쭉한 성능(jagged frontier)에서 오는 실망을 관리한다.</li><li>무료·유료 경험 격차가 신뢰 격차로 이어지므로, 무료 사용자에게도 핵심 가치는 안정적으로 닿게 하는 품질 하한선을 설계한다.</li><li>일자리·의존·허위정보 같은 구체적 두려움을 제품 메시지와 거버넌스에 반영해, 기업 불신(15%)을 전제로 한 책임 구조를 갖춘다.</li></ul><h3>Kenny의 관점</h3><p>사업기획과 프론트엔드를 오가는 입장에서 이 조사의 교훈은 \"신뢰는 벤치마크가 아니라 경험에서 온다\"는 것이다. 대중의 23%만 일자리 낙관에 동의하는 현실은 모델 점수로 메울 수 없다. 나는 AI 기능을 붙일 때 최고 성능 시나리오가 아니라 \"처음 써보는 사람이 가장 먼저 마주칠 실패\"를 기준으로 UX를 설계한다. 불신이 기본값인 시대엔, 못하는 걸 솔직히 보여주는 제품이 결국 더 신뢰받는다.</p><h3>출처</h3><ul><li><a href=\"https://www.anthropic.com/news/anthropic-public-record\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Anthropic: Results from first Anthropic Public Record ↗</a></li><li><a href=\"https://www.technologyreview.com/2026/04/13/1135720/why-opinion-on-ai-is-so-divided/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">MIT Technology Review: Why opinion on AI is so divided ↗</a></li></ul>",
    "source": "Anthropic",
    "sourceUrl": "https://www.anthropic.com/news/anthropic-public-record",
    "tags": [
      "Anthropic",
      "PublicOpinion",
      "AIPolicy"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-23-css-shape-function-complex-shapes",
    "category": "design",
    "date": "2026-06-23",
    "title": "순수 CSS로 복잡한 도형 그리기, shape() 함수의 시대",
    "rawTitle": "Making Complex CSS Shapes Using shape()",
    "summary": "SVG 없이 CSS만으로 물결·블롭 같은 복잡한 도형을 그리는 shape() 함수. 2026년 2월 Baseline에 올라 모든 주요 브라우저에서 쓸 수 있게 됐다.",
    "bodyHtml": "<p>CSS로 복잡한 도형을 만들려면 그동안 SVG 파일이나 길고 암호 같은 <code>path()</code> 좌표 문자열에 기대야 했다. 이제 <code>shape()</code> 함수가 그 자리를 대신한다. <code>line</code>·<code>arc</code>·<code>curve</code> 같은 명령을 사람이 읽을 수 있는 문법으로 이어 붙여, 물결 구분선부터 유기적인 블롭까지 순수 CSS만으로 그린다. 2026년 2월 이 기능이 Baseline에 올라 모든 주요 브라우저에서 쓸 수 있게 되면서, 이미지 없이 도형을 다루는 방식이 본격적으로 바뀌고 있다.</p><blockquote>\"The main trick is to ensure two adjacent curve create a smooth curvature so that the full shape appears as one continuous curve.\"<cite>CSS-Tricks</cite></blockquote><h3>무슨 일인가</h3><p>CSS-Tricks의 Temani Afif는 여러 개의 <code>curve</code> 명령을 연결해 복잡한 도형을 만드는 원리를 정리했다. 비결은 인접한 두 <code>curve</code>의 연결점을 두 제어점이 이루는 구간 안에 놓아, 전체 경로가 하나의 연속된 곡선처럼 보이게 하는 것이다. 물결 구분선은 가장자리에 제어점을 여러 개 두고 수직으로 무작위 오프셋을 준 뒤 이웃한 점들의 중간점을 이어 그리고, 블롭은 원 둘레에 점을 분포시켜 중심 쪽으로 무작위로 당겨 유기적인 윤곽을 만든다. 무엇보다 <code>shape()</code> 안에서 <code>calc()</code>·CSS 변수·단위를 그대로 쓸 수 있어, 좌표를 고정한 SVG와 달리 반응형으로 동작한다.</p><h3>여러 시각</h3><p>같은 <code>shape()</code>를 두 자료가 다른 층위에서 본다.</p><ul><li><b>web.dev(2026년 2월 Baseline 다이제스트)</b> — 표준·호환성 관점. <code>shape()</code>가 2월 Baseline \"Newly available\"에 올라 모든 엔진에서 쓸 수 있게 됐고, <code>path()</code>의 후계자로서 CSS 단위와 <code>calc()</code>·변수를 지원한다고 짚는다.</li><li><b>CSS-Tricks(shape() Commands)</b> — 문법 입문 관점. <code>line</code>·<code>arc</code>·<code>curve</code> 명령이 <code>path()</code>의 암호 같은 좌표보다 \"평범한 영어\"처럼 읽힌다는 가독성 이점을 강조한다. 작성 시점엔 애니메이션이 안 됐는데, 약 1년 만의 위 글에서 애니메이션이 가능해진 점이 이 기능의 성숙 속도를 보여준다.</li></ul><h3>왜 중요한가</h3><p>그동안 복잡한 도형은 디자이너가 만든 SVG 자산이거나, 손으로 다듬기 어려운 <code>path()</code> 문자열이었다. <code>shape()</code>는 도형의 기하를 CSS 안으로 가져와 변수·<code>calc()</code>로 매개변수화한다. 즉 화면 크기나 디자인 토큰에 따라 도형이 반응하고, 같은 점 개수를 가진 두 변형은 부드럽게 전환·애니메이션할 수 있다. 디자인 자산과 코드의 경계가 흐려지고, 도형이 정적 이미지가 아니라 살아 있는 스타일이 된다는 뜻이다.</p><h3>실무 적용</h3><ul><li><code>shape()</code>는 점진적 향상으로 도입하고, 미지원 환경을 위해 단순한 폴백 도형이나 <code>clip-path</code> 대체를 함께 설계한다.</li><li>물결 구분선·블롭 같은 반복 도형은 제어점 개수(granularity)와 크기를 CSS 변수로 빼서 한 곳에서 조절하는 토큰으로 만든다.</li><li>애니메이션을 쓸 땐 두 도형 변형의 점 개수를 반드시 동일하게 맞추고, <code>animation-timeline: scroll()</code>과 결합해 스크롤 기반 효과로 확장한다.</li></ul><h3>Kenny의 관점</h3><p>프론트엔드 관점에서 <code>shape()</code>의 진짜 의미는 \"도형의 코드화\"다. 그동안 곡선 하나 바꾸려면 디자이너에게 SVG를 다시 받아야 했지만, 이제 곡률이 변수가 되어 개발자가 직접 조율한다. 다만 강력함은 복잡함을 부른다. 제어점과 중간점 계산이 쌓이면 CSS는 금세 읽기 어려워진다. 나는 <code>shape()</code>를 \"토큰으로 관리되는 소수의 재사용 도형\"으로 한정하고, 일회성 장식은 여전히 SVG에 맡기는 분업을 권한다.</p><h3>출처</h3><ul><li><a href=\"https://css-tricks.com/complex-css-shapes-with-shape-function/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">CSS-Tricks: Making Complex CSS Shapes Using shape() ↗</a></li><li><a href=\"https://web.dev/blog/baseline-digest-feb-2026\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">web.dev: February 2026 Baseline monthly digest ↗</a></li><li><a href=\"https://css-tricks.com/css-shape-commands/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">CSS-Tricks: CSS shape() Commands ↗</a></li></ul>",
    "source": "CSS-Tricks",
    "sourceUrl": "https://css-tricks.com/complex-css-shapes-with-shape-function/",
    "tags": [
      "CSS",
      "ShapeFunction",
      "Frontend"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-23-anthropic-seoul-office-korea-ecosystem",
    "category": "ai",
    "date": "2026-06-23",
    "title": "앤트로픽 서울 입성, 한국 AI 생태계를 정조준하다",
    "rawTitle": "Anthropic opens Seoul office and announces new partnerships across the Korean AI ecosystem",
    "summary": "앤트로픽이 도쿄·벵갈루루에 이어 아시아 세 번째로 서울 사무소를 열고 네이버·넥슨·삼성SDS 등과 손잡았다. 최전선 AI 기업이 한국 시장을 직접 공략하기 시작했다.",
    "bodyHtml": "<p>앤트로픽이 2026년 6월 서울에 사무소를 열었다. 도쿄·벵갈루루에 이은 아시아·태평양 세 번째 거점으로, 한국이 클로드 사용량 상위권 국가라는 점을 직접 공략하는 행보다. 단순한 영업 거점이 아니다. 과학기술정보통신부와 AI 안전 협력 MOU를 맺고, 네이버·넥슨·삼성SDS 같은 대형 기업 배포를 함께 발표했다. 최전선 AI 기업이 한국 생태계에 본격적으로 들어왔다는 신호다.</p><blockquote>\"What I see in Korea are teams who understand that innovation and safety are two sides of the same coin.\"<cite>KiYoung Choi, Anthropic Korea</cite></blockquote><h3>무슨 일인가</h3><p>서울 사무소는 30년 경력의 최기영(KiYoung Choi) 대표가 이끈다. 앤트로픽은 과기정통부와 MOU를 맺어 한국어 모델 안전성 평가와 사이버 위협 정보 공유를 한국 AI안전연구소와 협력하기로 했다. 기업 배포 사례도 구체적이다. 네이버는 엔지니어링 조직 전체에 Claude Code를, 넥슨은 라이브 서비스 게임에, LG CNS는 수천 명 직원에게 클로드를 도입한다. 한화솔루션은 데이터 레지던시 요건에 맞춰 AWS Bedrock으로, 삼성SDS는 삼성전자 전반에 적용한다. KAIST·고려대·연세대·포스텍 컨소시엄(NAIRL) 연구자 약 60명에게도 클로드 접근권을 제공한다.</p><h3>여러 시각</h3><p>같은 확장을 두 발표가 다른 각도에서 비춘다.</p><ul><li><b>Anthropic(최기영 대표 선임, 5월 26일)</b> — 출시 이전 리더십·\"왜 한국인가\" 관점. 한국 사용자가 인구 대비 기대치의 약 3.5배로 클로드를 쓰고, SK텔레콤·로앤컴퍼니가 이미 맞춤형 클로드 앱(고객 서비스·법률 자문)을 만들고 있었다는 수요 근거를 제시한다.</li><li><b>Anthropic(TCS 파트너십, 6월 12일)</b> — 글로벌 규제 산업 관점. 컨설팅 기업 TCS가 56개국 5만 명에게 클로드를 배포하고 보험 청구·대출 자문 같은 규제 강한 업무에 적용한다. 한국 로컬 공략과 글로벌 엔터프라이즈 확장이 같은 전략의 두 축임을 보여준다.</li></ul><h3>왜 중요한가</h3><p>세 소식을 겹치면 그림이 분명해진다. AI 경쟁의 무대가 모델 성능 발표에서 \"현지 시장 침투\"로 옮겨가고 있다. 사무소·정부 MOU·대형 레퍼런스를 한 묶음으로 들고 오는 방식은, 클라우드 사업자들이 그랬듯 AI에서도 규제·데이터 주권·현지 파트너십이 핵심 변수가 됐음을 뜻한다. 한국 기업에는 글로벌 최전선 모델을 현지 조건(데이터 레지던시·한국어 안전성)으로 쓸 길이 열린 것이다.</p><h3>실무 적용</h3><ul><li>클로드 도입을 검토한다면 데이터 레지던시가 필요한 워크로드는 AWS Bedrock 등 현지 리전 경로로, 일반 워크로드는 직접 API로 나눠 배포 경로를 설계한다.</li><li>한국어 안전성 평가가 본격화되는 만큼, 자사 프롬프트·필터를 한국어 맥락에서 별도로 검증하는 절차를 둔다.</li><li>네이버의 Claude Code 전사 도입처럼 개발 생산성 도구는 일부 팀 파일럿 → 성과 측정 → 전사 확대의 단계적 롤아웃으로 접근한다.</li></ul><h3>Kenny의 관점</h3><p>사업기획과 프론트엔드를 오가는 입장에서 이번 소식의 핵심은 \"접근성의 현지화\"다. 그동안 최전선 모델은 빠르지만 멀리 있는 도구였는데, 정부 MOU와 현지 파트너십이 붙으면서 규제 리스크와 한국어 품질이라는 두 장벽이 낮아진다. 다만 대형 레퍼런스에 휩쓸려 \"남들이 쓰니 우리도\"로 도입하면 비용만 남는다. 나는 모델을 들이기 전에 \"이 업무가 한국어·규제 맥락에서도 모델이 안정적으로 잘하는 일인가\"를 먼저 검증하는 순서를 권한다.</p><h3>출처</h3><ul><li><a href=\"https://www.anthropic.com/news/seoul-office-partnerships-korean-ai-ecosystem\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Anthropic: Anthropic opens Seoul office and announces new partnerships across the Korean AI ecosystem ↗</a></li><li><a href=\"https://www.anthropic.com/news/kiyoung-choi-representative-director-anthropic-korea\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Anthropic: Anthropic appoints KiYoung Choi as Representative Director of Korea ↗</a></li><li><a href=\"https://www.anthropic.com/news/tcs-anthropic-partnership\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Anthropic: TCS and Anthropic partner to bring Claude to regulated industries ↗</a></li></ul>",
    "source": "Anthropic",
    "sourceUrl": "https://www.anthropic.com/news/seoul-office-partnerships-korean-ai-ecosystem",
    "tags": [
      "Anthropic",
      "Korea",
      "EnterpriseAI"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-22-css-at-function-custom-functions",
    "category": "design",
    "date": "2026-06-22",
    "title": "CSS @function, 스타일시트가 프로그래밍을 배우다",
    "rawTitle": "Functions in CSS?!",
    "summary": "인자를 받아 값을 반환하는 사용자 정의 함수 @function이 CSS에 들어왔다. Chrome이 먼저 구현했고 올해 베이스라인 진입이 점쳐진다. 전처리기 없이 로직을 런타임 CSS로 되돌리는 변화다.",
    "bodyHtml": "<p>CSS는 오랫동안 \"선언적\"이라는 정체성에 머물렀다. 변수는 있어도 인자를 받아 계산해 돌려주는 진짜 함수는 없었다. 이제 <code>@function</code> 규칙이 그 빈자리를 메운다. 인자를 받고 타입을 검사하며 결과를 반환하는 사용자 정의 함수가 CSS에 들어온 것이다. Chrome 141이 먼저 구현을 붙였고, 업계는 올해 베이스라인 진입을 점친다. 스타일시트가 프로그래밍 언어의 문법을 흡수하기 시작한 지금, 프론트엔드의 추상화 방식이 흔들린다.</p><blockquote>\"Custom functions allow authors the same power as custom properties, but parameterized.\"<cite>CSS-Tricks</cite></blockquote><h3>무슨 일인가</h3><p><code>@function</code>은 <code>--my-fn()</code> 같은 대시 함수로 호출하고 <code>result</code> 디스크립터로 값을 반환한다. 인자에 기본값과 타입(<code>&lt;length&gt;</code> 등)을 지정할 수 있고, 내부에서 <code>@media</code>·<code>@supports</code>로 조건 분기까지 가능하다. 다만 한계도 분명하다. 지역 변수·재귀·리스트 인자·조기 반환이 없고, 함수 정의를 바꿔 스타일을 자동 갱신하는 것도 불가능하다. 아직 Chromium 계열 실험 단계라 Firefox·Safari 지원은 진행 중이다.</p><h3>여러 시각</h3><p>같은 \"프로그래밍되는 CSS\" 흐름을 두 자료가 다른 층위에서 본다.</p><ul><li><b>web.dev</b> — <code>@property</code>가 베이스라인에 오르며 커스텀 속성에 타입과 애니메이션 가능성을 부여했다. 변수에 \"의미\"를 입힌 그 흐름의 연장선에 <code>@function</code>이 있다.</li><li><b>CSS-Tricks(What's !important #13)</b> — <code>@function</code>을 \"올해 베이스라인에 오를 가장 큰 기능\"으로 꼽으면서도, <code>alpha()</code> 같은 작은 함수부터 익히며 단계적으로 접근하라고 권한다.</li></ul><h3>왜 중요한가</h3><p>그동안 복잡한 계산 로직은 Sass 같은 전처리기나 자바스크립트로 밀어냈다. <code>@function</code>은 그 로직을 런타임 CSS 안으로 되돌린다. 빌드 도구 없이도 유동 타이포그래피, 반응형 그리드, 간격 스케일을 함수 하나로 재사용할 수 있다. 전처리기 의존을 줄이고 디자인 토큰을 더 선언적으로 표현하는 길이 열린다는 뜻이다.</p><h3>실무 적용</h3><ul><li><code>@function</code>은 점진적 향상으로만 도입하고, <code>@supports</code>로 미지원 브라우저용 폴백을 함께 설계한다.</li><li>반복되는 <code>clamp()</code> 기반 유동 타이포그래피나 간격 계산을 함수로 추출해 디자인 시스템의 단일 출처로 삼는다.</li><li><code>@property</code>로 타입을 지정한 커스텀 속성과 <code>@function</code>을 함께 써, 입력 검증과 계산을 CSS 레이어에서 일관되게 처리한다.</li></ul><h3>Kenny의 관점</h3><p>프론트엔드 관점에서 <code>@function</code>의 진짜 의미는 \"전처리기 탈출\"이 아니라 \"관심사의 재배치\"다. 계산이 빌드 타임에서 런타임으로 내려오면, 컨테이너 크기나 사용자 설정 같은 실시간 맥락에 함수가 반응할 수 있다. 다만 강력함은 남용을 부른다. CSS에 로직이 쌓일수록 디버깅은 어려워진다. 나는 <code>@function</code>을 \"토큰을 만드는 작은 순수 함수\"로만 제한하고, 분기 로직은 여전히 명시적으로 드러내는 규율을 권한다.</p><h3>출처</h3><ul><li><a href=\"https://css-tricks.com/functions-in-css/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">CSS-Tricks: Functions in CSS?! ↗</a></li><li><a href=\"https://web.dev/blog/at-property-baseline\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">web.dev: @property — Next-gen CSS variables now with universal browser support ↗</a></li><li><a href=\"https://css-tricks.com/whats-important-13/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">CSS-Tricks: What's !important #13 ↗</a></li></ul>",
    "source": "CSS-Tricks",
    "sourceUrl": "https://css-tricks.com/functions-in-css/",
    "tags": [
      "CSS",
      "AtFunction",
      "Frontend"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-22-claude-fable-5-export-directive",
    "category": "ai",
    "date": "2026-06-22",
    "title": "최강 모델 페이블 5, 출시 사흘 만에 빗장",
    "rawTitle": "Claude Fable 5 and Claude Mythos 5",
    "summary": "앤트로픽이 역대 최강 모델 페이블 5를 공개했지만, 사흘 뒤 미국 정부가 국가안보를 이유로 전면 접근 중단을 명령했다. 최전선 AI가 수출 통제 대상이 된 분기점을 세 출처로 분석한다.",
    "bodyHtml": "<p>앤트로픽이 6월 9일 역대 가장 강력한 모델 클로드 페이블 5(Fable 5)와 제한 공개 모델 미토스 5(Mythos 5)를 공개했다. 그런데 사흘 뒤인 6월 12일, 미국 정부가 국가안보를 이유로 두 모델의 전면 접근 중단을 명령했다. 출시와 빗장이 한 주 안에 겹친 이 사건은 최전선 AI가 더 이상 순수 기술 제품이 아니라 수출 통제의 대상이 됐음을 보여준다.</p><blockquote>\"We are complying with the government's legal directive and are removing access to Fable 5 and Mythos 5 for all users.\"<cite>Anthropic</cite></blockquote><h3>무슨 일인가</h3><p>페이블 5는 소프트웨어 엔지니어링·지식 노동·비전·과학 연구 전반에서 최고 수준 성능을 내세웠고, 입력 100만 토큰당 10달러·출력 50달러로 책정됐다. 사이버보안·생물/화학·증류(distillation) 질의를 막는 분류기 3종을 새로 달고, 차단 시 Opus 4.8로 폴백한다. 1000시간 넘는 레드팀에서 보편적 탈옥은 발견되지 않았다고 밝혔다. 미토스 5는 분자생물학 가설 생성에서 Opus급 대비 약 80% 선호됐을 만큼 연구 능력이 두드러진다.</p><h3>여러 시각</h3><p>같은 사건을 세 출처가 다른 각도에서 본다.</p><ul><li><b>Anthropic(출시 공지)</b> — 능력과 안전을 함께 강조하는 제품 관점. 분류기·폴백·레드팀으로 위험을 관리했다고 설명한다.</li><li><b>Anthropic(정부 지침 성명)</b> — 정책 관점. 정부가 시연한 건 \"코드 취약점 분석\"이라는 좁은 비보편 탈옥뿐이며, 같은 약점은 타사 모델에도 흔하다고 반박한다. 따르되 동의하지 않는다는 입장이다.</li><li><b>MIT Technology Review</b> — 거시 관점. AI 능력 급상승의 이면에서 딥페이크 피해, 사회적 반발, 그리고 \"진보인지 위험인지 여전히 불확실\"하다는 점을 짚는다.</li></ul><h3>왜 중요한가</h3><p>세 시각을 겹치면 분기점이 보인다. 모델 능력이 임계선을 넘자 규제의 단위가 \"콘텐츠 정책\"에서 \"수출 통제\"로 올라섰다. 좁은 탈옥 하나로 최첨단 모델 전체가 차단될 수 있다면, 기업의 모델 선택은 성능뿐 아니라 지정학·규제 리스크까지 계산해야 한다. AI가 반도체처럼 국가 안보 자산으로 다뤄지기 시작했다는 신호다.</p><h3>실무 적용</h3><ul><li>최전선 모델에 핵심 기능을 묶지 말고, 규제로 접근이 끊겨도 대체 모델로 폴백할 추상화 계층을 둔다.</li><li>글로벌 서비스라면 모델 접근이 국적·지역에 따라 달라질 수 있음을 전제로, 지역별 모델 라우팅과 다운그레이드 경로를 미리 설계한다.</li><li>벤더 평가 기준에 성능·가격뿐 아니라 수출 통제·정책 변동 시 SLA와 공지 절차를 명시한다.</li></ul><h3>Kenny의 관점</h3><p>사업기획과 프론트엔드를 오가는 입장에서 이번 사건의 교훈은 \"가장 똑똑한 모델\"이 \"가장 안정적인 모델\"은 아니라는 것이다. 사흘 만에 빗장이 걸리는 모델 위에 제품의 핵심 경험을 올리는 건 위험하다. 나는 모델을 고를 때 벤치마크 점수보다 \"이 접근이 다음 분기에도 같은 조건으로 유지될까\"를 먼저 본다. 규제 시대의 AI 설계는 능력의 최대치가 아니라 가용성의 하한선을 지키는 일이 됐다.</p><h3>출처</h3><ul><li><a href=\"https://www.anthropic.com/news/claude-fable-5-mythos-5\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Anthropic: Claude Fable 5 and Claude Mythos 5 ↗</a></li><li><a href=\"https://www.anthropic.com/news/fable-mythos-access\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Anthropic: Statement on the US government directive to suspend access to Fable 5 and Mythos 5 ↗</a></li><li><a href=\"https://www.technologyreview.com/2026/06/09/1138582/five-things-you-need-to-know-about-ai/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">MIT Technology Review: Five things you need to know about AI ↗</a></li></ul>",
    "source": "Anthropic",
    "sourceUrl": "https://www.anthropic.com/news/claude-fable-5-mythos-5",
    "tags": [
      "Anthropic",
      "ExportControl",
      "AIPolicy"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-21-cross-document-view-transitions-gotchas",
    "category": "design",
    "date": "2026-06-21",
    "title": "교차 문서 뷰 트랜지션, 튜토리얼이 안 알려준 함정들",
    "rawTitle": "Cross-Document View Transitions: The Gotchas Nobody Mentions",
    "summary": "MPA에서도 프레임워크 없이 부드러운 페이지 전환을 구현하는 교차 문서 뷰 트랜지션. 다만 4초 타임아웃과 이미지 왜곡 같은 함정이 실무에서 발목을 잡는다.",
    "bodyHtml": "<p>다중 페이지 앱(MPA)에서도 SPA처럼 부드러운 화면 전환을 구현하려는 시도는 오래된 숙원이었다. 교차 문서 뷰 트랜지션은 자바스크립트 프레임워크 없이 CSS 한 줄로 이를 가능하게 하지만, 막상 적용하면 튜토리얼이 다루지 않는 함정들이 줄줄이 튀어나온다. CSS-Tricks는 2026년 5월, 실제 도입 과정에서 마주치는 숨은 제약들을 정리했다. 기능이 Baseline에 안착한 지금이야말로 이런 현실적 디테일이 중요해진 시점이다.</p><blockquote>\"Cross-document view transitions have a hard 4-second timeout. If the new page doesn't reach a renderable state within 4 seconds, the transition dies.\"<cite>CSS-Tricks</cite></blockquote><h3>무슨 일인가</h3><p>핵심은 더 이상 <code>&lt;meta name=\"view-transition\"&gt;</code> 태그를 쓰지 않는다는 점이다. 현재 표준은 CSS의 <code>@view-transition { navigation: auto; }</code> 규칙이며, 구버전 문법은 폐기됐다. 더 치명적인 함정은 내비게이션 시작 후 4초의 하드 타임아웃으로, 새 페이지가 그 안에 렌더 가능한 상태에 도달하지 못하면 애니메이션이 조용히 사라진다. 또한 전환용 의사 요소의 기본값이 <code>object-fit: fill</code>이라 이미지가 찌그러지는데, 이는 <code>object-fit: cover</code>로 잡아야 한다.</p><h3>여러 시각</h3><p>같은 뷰 트랜지션이라도 자료마다 강조점이 다르다.</p><ul><li><b>web.dev</b> — 동일 문서 뷰 트랜지션이 Firefox 144와 함께 Baseline에 진입했다고 알리며, 브라우저 호환성과 성숙도를 강조하는 공식 관점.</li><li><b>CSS-Tricks(7 Recipes)</b> — 픽셀 디졸브, 와이프, 원형 리빌, 3D 플립 등 바로 복사해 쓰는 레시피 중심으로, 이론보다 손으로 익히는 실전 관점.</li></ul><h3>왜 중요한가</h3><p>그동안 부드러운 페이지 전환은 사실상 SPA의 전유물이었고, 그 대가로 라우팅과 상태 관리의 복잡도를 떠안아야 했다. 교차 문서 뷰 트랜지션은 평범한 서버 렌더링 MPA에 CSS만으로 동일한 연속성을 부여한다. 즉 프레임워크 종속성을 줄이면서도 UX 품질은 끌어올릴 수 있다는 뜻이다. 다만 함정을 모르면 \"가끔 동작하고 가끔 안 되는\" 불안정한 경험으로 이어진다.</p><h3>실무 적용</h3><ul><li>구문을 점검하라. 폐기된 메타 태그 대신 <code>@view-transition</code> 규칙을 쓰고, Safari 18.2 이상·Chromium 계열만 지원됨을 전제로 점진적 향상으로 설계한다.</li><li>4초 타임아웃을 의식해 새 페이지의 초기 렌더 비용을 줄여라. 무거운 데이터 페치는 전환 이후로 미루는 편이 안전하다.</li><li>이미지가 포함된 전환에는 의사 요소에 <code>object-fit: cover</code>를 명시하고, <code>pageswap</code>·<code>pagereveal</code> 이벤트로 양 페이지의 상태를 조율한다.</li></ul><h3>Kenny의 관점</h3><p>뷰 트랜지션의 진짜 가치는 화려한 효과가 아니라 \"인지적 연속성\"에 있다. 사용자가 어디서 어디로 이동했는지 시각적으로 이어 보여주면 방향 감각 상실이 줄고 체감 속도가 빨라진다. 그래서 나는 3D 플립 같은 과시적 전환보다 공유 요소(<code>view-transition-name</code>) 매칭으로 맥락을 잇는 절제된 사용을 권한다. 다만 4초 타임아웃은 곧 성능 예산 문제이므로, 전환을 켜는 순간 LCP 최적화가 선택이 아닌 필수가 된다는 점을 잊지 말아야 한다.</p><h3>출처</h3><ul><li><a href=\"https://css-tricks.com/cross-document-view-transitions-part-1/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">CSS-Tricks: Cross-Document View Transitions: The Gotchas Nobody Mentions ↗</a></li><li><a href=\"https://web.dev/blog/same-document-view-transitions-are-now-baseline-newly-available\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">web.dev: Same-document view transitions have become Baseline Newly available ↗</a></li><li><a href=\"https://css-tricks.com/7-view-transitions-recipes-to-try/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">CSS-Tricks: 7 View Transitions Recipes to Try ↗</a></li></ul>",
    "source": "CSS-Tricks",
    "sourceUrl": "https://css-tricks.com/cross-document-view-transitions-part-1/",
    "tags": [
      "ViewTransitions",
      "CSS",
      "UX"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-21-ai-self-improvement",
    "category": "ai",
    "date": "2026-06-21",
    "title": "스스로 고치는 AI, 자기개선의 다섯 갈래",
    "rawTitle": "Five ways that AI is learning to improve itself",
    "summary": "AI가 코딩·인프라·에이전트 설계 전반에서 스스로를 개선하기 시작했다. 실패를 기억해 다음에 덜 틀리는 에이전트 설계가 실무의 핵심 변수가 된다.",
    "bodyHtml": "<p>AI가 사람의 손을 거치지 않고 스스로를 개선하기 시작했다. MIT Technology Review는 코딩 생산성, 칩·커널 같은 인프라 최적화, 합성 데이터와 자가 평가, 에이전트 설계, 연구 수행까지 다섯 갈래에서 AI가 자기 발전에 기여하고 있다고 정리했다. 핵심은 더 큰 모델이 아니라 \"한 번 틀린 일을 다음에는 덜 틀리는\" 루프다. 프런트엔드·기획 실무자에게도 이는 도구가 한 번 만들고 끝나는 것이 아니라 사용하며 진화한다는 전제 변화를 뜻한다.</p><blockquote>\"The length of tasks that AI systems can complete independently has doubled every seven months since 2019, accelerating to every four months since 2024.\"<cite>MIT Technology Review</cite></blockquote><h3>무슨 일인가</h3><p>기사는 자기개선이 단번의 도약이 아니라 누적되는 점진 과정임을 강조한다. AlphaEvolve의 학습 속도 개선은 1% 남짓이지만, 모델이 자기 프롬프트와 도구를 다듬고 합성 데이터로 스스로를 훈련시키는 메커니즘이 겹치면서 효과가 복리로 쌓인다. 동시에 해킹·무기 설계·조작 능력의 가속이라는 위험도 같은 곡선 위에 있어, 자기개선은 기회와 리스크를 한 묶음으로 키운다는 점을 분명히 한다.</p><h3>여러 시각</h3><p>같은 흐름을 제품 현장에서 보면 그림이 더 구체적이다.</p><ul><li><b>MIT Technology Review</b> — 자기개선을 산업 전체의 거시 추세로 보고, 능력 향상과 안전 위험이 같은 속도로 커진다는 점을 경고한다.</li><li><b>Anthropic Engineering</b> — 거대 담론 대신 실무 패턴을 제시한다. 에이전트가 성공한 접근과 흔한 실수를 재사용 가능한 스킬로 갈무리하고, 길을 벗어나면 무엇이 잘못됐는지 스스로 돌아보게 하라고 권한다.</li></ul><h3>왜 중요한가</h3><p>지금까지 LLM 에이전트의 약점은 \"기억상실\"이었다. 오늘 실패한 작업을 내일도 똑같이 실패하고, 사람이 매번 프롬프트를 손봐야 했다. 실패를 외부 메모리·스킬로 축적하는 구조가 자리 잡으면, 개선의 단위가 모델 재학습이 아니라 시스템 운영으로 내려온다. 즉 모델을 못 바꾸는 우리도 \"개선되는 AI\"를 직접 설계할 수 있게 된다.</p><h3>실무 적용</h3><ul><li>에이전트의 실패 로그를 버리지 말고 재사용 가능한 스킬·체크리스트로 환원하는 회수 루프를 제품에 내장한다.</li><li>UX 차원에서 에이전트가 막혔을 때 임의로 진행하지 않고 \"무엇을 모르는지\" 사용자에게 되묻는 명시적 일시정지를 설계한다.</li><li>모델 교체 없이 외부 메모리·프롬프트·도구 사용 전략만 갱신해도 품질이 오르도록 평가-반영 파이프라인을 분리한다.</li></ul><h3>Kenny의 관점</h3><p>프런트엔드·AX 관점에서 진짜 변화는 \"버전 고정 제품\"의 종말이다. 어제와 오늘의 에이전트가 다르게 행동한다면, 우리는 결정적 화면이 아니라 학습 곡선을 위한 UI를 그려야 한다. 실패를 숨기지 않고 회고로 전환하는 인터페이스, 그리고 자기개선의 경계를 사용자가 통제하는 안전장치가 다음 경쟁력의 분기점이 될 것이다.</p><h3>출처</h3><ul><li><a href=\"https://www.technologyreview.com/2025/08/06/1121193/five-ways-that-ai-is-learning-to-improve-itself/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">MIT Technology Review: Five ways that AI is learning to improve itself ↗</a></li><li><a href=\"https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Anthropic: Equipping agents for the real world with Agent Skills ↗</a></li></ul>",
    "source": "MIT Technology Review",
    "sourceUrl": "https://www.technologyreview.com/2025/08/06/1121193/five-ways-that-ai-is-learning-to-improve-itself/",
    "tags": [
      "SelfImprovingAI",
      "AgentSkills",
      "AX"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-20-css-baseline-may-2026",
    "category": "design",
    "date": "2026-06-20",
    "title": "쏟아지는 CSS, 베이스라인으로 안전선 긋기",
    "rawTitle": "May 2026 Baseline monthly digest",
    "summary": "매달 새 CSS가 쏟아지는 시대, 무엇을 지금 프로덕션에 써도 되나. web.dev 5월 베이스라인 다이제스트를 Interop 2026·DevTools 통합과 겹쳐 '안전하게 쓰는 기준'을 정리한다.",
    "bodyHtml": "<p>매달 새로운 CSS 기능이 쏟아진다. 문제는 “멋진 기능”이 아니라 “지금 프로덕션에 써도 되는 기능”을 가려내는 일이다. web.dev가 6월 3일 펴낸 5월 베이스라인(Baseline) 다이제스트는 바로 그 경계를 매달 갱신한다. 어떤 기능이 이제 막 모든 핵심 브라우저에 도달했고(Newly available), 어떤 기능이 충분히 무르익어 마음 놓고 써도 되는지(Widely available)를 한 장에 정리한다.</p><blockquote>“Baseline gives you clear information about which web platform features are safe to use in your projects today.”<cite>web.dev</cite></blockquote><h3>무슨 일인가</h3><p>5월 다이제스트에서 새로 베이스라인에 진입한 기능은 여섯 가지다. 부모 컨테이너의 커스텀 속성으로 자식을 스타일링하는 <code>container style queries</code>, <code>&lt;dialog&gt;</code>·<code>&lt;details&gt;</code>의 열림 상태를 잡는 <code>:open</code> 의사클래스, 팝오버를 연 컨트롤을 식별하는 <code>ToggleEvent.source</code>, 픽셀아트·QR에 유용한 <code>image-rendering</code>, 밑줄이 글자 꼬리를 피하게 하는 <code>text-decoration-skip-ink: all</code>, 그리고 여러 탭이 공유하는 <code>SharedWorker</code>다. 동시에 <code>lh</code>·<code>rlh</code> 단위, <code>clip-path</code>, <code>:user-invalid</code> 같은 기능은 이제 '널리 사용 가능' 단계로 올라서 폴백 고민 없이 쓸 수 있게 됐다.</p><h3>여러 시각</h3><p>같은 “빠르게 변하는 CSS” 문제를 세 글이 다른 층위에서 다룬다.</p><ul><li><b>web.dev (5월 베이스라인 다이제스트)</b> — '새로 사용 가능'과 '널리 사용 가능'을 매달 구분해, 실험 기능과 안전 기능 사이의 선을 분명히 긋는다.</li><li><b>CSS-Tricks (Interop 2026)</b> — Blink·WebKit·Gecko 세 엔진이 앵커 포지셔닝, 뷰 트랜지션, 스크롤 기반 애니메이션 등을 올해 함께 맞추기로 합의했다며, 베이스라인이 빨라지는 근본 동력을 짚는다.</li><li><b>web.dev (Chrome DevTools의 베이스라인)</b> — 이제 DevTools 요소 패널과 Browserslist 쿼리에서 베이스라인 상태를 바로 확인할 수 있어, 지원 여부 판단을 도구로 자동화하는 길을 연다.</li></ul><h3>왜 중요한가</h3><p>세 글을 겹치면 그림이 분명해진다. 엔진들이 합의(Interop)로 기능을 빠르게 수렴시키고, 베이스라인이 그 결과를 매달 '안전선'으로 번역하며, DevTools·Browserslist가 그 선을 코드와 워크플로에 박아 넣는다. 과거엔 “이 기능 사파리에서 되나?”를 일일이 caniuse로 뒤졌지만, 이제는 '베이스라인 진입 여부'라는 공통 언어로 팀이 합의할 수 있다. 새 기능을 빨리 쓰는 능력만큼, 무엇을 아직 쓰지 말지 판단하는 능력이 중요해졌다.</p><h3>실무 적용</h3><ul><li>새 CSS를 도입할 때 “멋진가”가 아니라 “베이스라인 단계가 무엇인가”를 먼저 확인하고, Newly와 Widely를 구분해 폴백 전략을 정하라.</li><li>Browserslist에 베이스라인 쿼리를 걸고 DevTools의 베이스라인 표시를 켜, 지원 여부 판단을 사람의 기억이 아닌 도구에 맡겨라.</li><li>매달 베이스라인 다이제스트를 팀 채널에 공유해, '언제부터 써도 되는지'를 개인이 아닌 팀 합의로 만들어라.</li></ul><h3>Kenny의 관점</h3><p>프론트엔드 실무에서 가장 비싼 비용은 새 기능을 모르는 게 아니라, 써도 되는 시점을 잘못 잡는 것이다. 너무 일찍 쓰면 폴백 지옥에, 너무 늦게 쓰면 JS로 떡칠한 레거시에 갇힌다. 베이스라인은 그 타이밍 결정을 개인의 직감에서 팀의 공통 기준으로 옮겨준다. 나는 새 컴포넌트를 설계할 때 “이 기능의 베이스라인 단계는?”을 코드 리뷰 체크리스트의 첫 줄로 둔다.</p><h3>출처</h3><ul><li><a href=\"https://web.dev/blog/baseline-digest-may-2026\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">web.dev: May 2026 Baseline monthly digest ↗</a></li><li><a href=\"https://css-tricks.com/interop-2026/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">CSS-Tricks: Interop 2026 ↗</a></li><li><a href=\"https://web.dev/blog/baseline-devtools-css\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">web.dev: Baseline for CSS properties now in Chrome DevTools ↗</a></li></ul>",
    "source": "web.dev",
    "sourceUrl": "https://web.dev/blog/baseline-digest-may-2026",
    "tags": [
      "CSS",
      "Baseline",
      "Interop"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-20-anthropic-ipo-s1",
    "category": "ai",
    "date": "2026-06-20",
    "title": "앤트로픽 IPO 신호탄, AI 상업화의 분기점",
    "rawTitle": "Anthropic confidentially submits draft S-1 to the SEC",
    "summary": "앤트로픽이 SEC에 IPO용 S-1 초안을 비공개 제출했다. 80배 성장과 9천억 달러 몸값, 그리고 고객 집중·가격 전쟁이라는 그늘까지 세 출처로 분석한다.",
    "bodyHtml": "<p>AI 업계에서 가장 빠르게 성장한 회사가 상장 채비를 시작했다. 앤트로픽은 6월 1일 미국 증권거래위원회(SEC)에 IPO를 위한 양식 S-1 등록 초안을 비공개로 제출했다고 밝혔다. 라이벌 오픈AI보다 먼저 공개시장 문을 두드린 것으로, 이르면 올가을 상장이 거론된다. 불과 1년여 만에 매출이 수십 배로 뛴 회사가 이제 “사적 자본”에서 “공적 시장”으로 무대를 옮기려 한다.</p><blockquote>“The number of shares to be offered and the price have not yet been set.”<cite>Anthropic</cite></blockquote><h3>무슨 일인가</h3><p>이번 제출은 증권법 Rule 135에 따른 통지로, 아직 주식 수도 가격도 정해지지 않았고 “매도 청약이 아니다”라고 앤트로픽은 선을 그었다. 비공개(confidential) 제출이라 SEC 심사가 끝날 때까지 재무 내역은 공개되지 않지만, 심사 뒤 시장 상황에 따라 상장을 진행할 수 있는 선택지를 확보했다는 뜻이다. 핵심은 타이밍이다. AI 기업들이 막대한 적자를 감수하며 투자를 쏟아붓는 국면에서, 앤트로픽이 공개시장의 검증대에 먼저 오르겠다고 나선 것이다.</p><h3>여러 시각</h3><p>같은 “앤트로픽 상장”을 세 출처가 다른 각도에서 본다.</p><ul><li><b>Anthropic (S-1 제출 공지)</b> — 절차 관점. 가격·물량 미정, Rule 135 통지라는 점을 강조하며 시점과 조건에 유연성을 남겼다.</li><li><b>VentureBeat (80배 성장)</b> — 성장 관점. 연환산 80배 성장으로 매출 런레이트가 300억 달러에 이르렀고, 기업가치는 1년여 만에 615억 달러에서 9천억 달러 이상으로 치솟았다고 전한다. 세일즈포스가 20년 걸려 도달한 매출을 3년 만에 따라잡은 셈이다.</li><li><b>VentureBeat (고객 집중 위험)</b> — 위험 관점. 매출이 소수 대형 고객에 묶여 있고 AI 가격 전쟁이 마진을 압박한다며, 폭발적 성장 이면의 취약점을 짚는다.</li></ul><h3>왜 중요한가</h3><p>세 시각을 겹치면 AI 상업화의 분기점이 보인다. 성장 속도는 전례가 없지만, 상장은 그 성장을 분기마다 공개 검증받겠다는 약속이기도 하다. 매출이 소수 고객에 집중되고 가격 전쟁으로 마진이 눌리는 상황에서, 공개시장은 “얼마나 빨리 크나”보다 “얼마나 오래 버티나”를 묻는다. 앤트로픽의 S-1은 한 회사의 사건이 아니라, AI 산업 전체가 '성장 서사'에서 '수익성 증명'으로 넘어가는 신호다.</p><h3>실무 적용</h3><ul><li>AI를 제품에 얹는다면 단일 모델 공급사에 묶이지 않도록 추상화 계층을 두고, 가격·정책 변동에 대비한 대체 모델 평가를 상시화하라.</li><li>가격 전쟁은 단기적으로 비용을 낮추지만 공급사 마진을 압박한다 — 장기 계약과 요금 설계 시 공급사의 지속가능성도 리스크로 함께 보라.</li><li>상장 이후엔 기능보다 신뢰성·정책 안정성이 협상 카드가 된다. 벤더 선정 기준에 SLA·데이터 정책·로드맵 투명성을 명시하라.</li></ul><h3>Kenny의 관점</h3><p>사업기획과 프론트엔드를 오가는 입장에서 이번 S-1은 “AI는 공짜로 빨리 큰다”는 환상에 금을 긋는 사건이다. 매출 80배 뒤에는 소수 고객 의존과 가격 전쟁이라는 그늘이 있다. 우리가 제품에 AI를 붙일 때 진짜 질문은 “어느 모델이 가장 똑똑한가”가 아니라 “이 공급사가 3년 뒤에도 같은 조건으로 곁에 있을까”다. 나는 모델을 고를 때 성능표보다 계약·정책의 지속가능성을 먼저 본다.</p><h3>출처</h3><ul><li><a href=\"https://www.anthropic.com/news/confidential-draft-s1-sec\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Anthropic: Anthropic confidentially submits draft S-1 to the SEC ↗</a></li><li><a href=\"https://venturebeat.com/technology/anthropic-says-it-hit-a-30-billion-revenue-run-rate-after-crazy-80x-growth\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">VentureBeat: Anthropic hits $30 billion revenue run rate after 80x growth ↗</a></li><li><a href=\"https://venturebeat.com/business/anthropic-revenue-tied-to-two-customers-as-ai-pricing-war-threatens-margins\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">VentureBeat: Anthropic revenue tied to two customers as AI pricing war threatens margins ↗</a></li></ul>",
    "source": "Anthropic",
    "sourceUrl": "https://www.anthropic.com/news/confidential-draft-s1-sec",
    "tags": [
      "Anthropic",
      "IPO",
      "AIBusiness"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-19-aria-notify",
    "category": "design",
    "date": "2026-06-19",
    "title": "ariaNotify(), 스크린리더 알림의 양날의 검",
    "rawTitle": "The Siren Song of ariaNotify()",
    "summary": "새 ariaNotify() API는 aria-live의 고질적 타이밍 문제를 없애지만, 너무 쉬워서 옛 alert()처럼 사용자를 괴롭히기 쉽다. 편의와 절제 사이의 균형을 세 출처로 짚는다.",
    "bodyHtml": "<p>화면이 바뀌었다는 사실을 스크린리더 사용자에게 어떻게 알릴까. 그동안 답은 사실상 <code>aria-live</code> 영역 하나뿐이었고, 그마저도 브라우저·보조기술마다 제멋대로 동작해 개발자를 괴롭혔다. 2026년 6월, 새 <code>ariaNotify()</code> API가 \"문자열 하나만 넘기면 스크린리더가 읽어준다\"는 깔끔한 대안으로 등장했다. 그런데 CSS-Tricks의 Mat Marquis는 이 편리함이야말로 함정일 수 있다고 경고한다.</p><blockquote>\"ARIA leaves no room for interpretation; what we say goes, full stop.\"<cite>CSS-Tricks</cite></blockquote><h3>무슨 일인가</h3><p>ariaNotify()는 요소나 document에서 호출해 알릴 문자열과 우선순위(normal·high)를 넘기면 스크린리더가 그대로 읽는다. 기존 aria-live는 영역이 DOM에 미리 존재해야 하고 <code>display:none</code>에서 토글하면 안 읽히는 등 타이밍 문제가 많았는데, 이 API는 그런 숨은 마크업 트릭 없이 직접 알림을 띄운다. 파이어폭스 150이 먼저 지원을 붙였다. 문제는 호출이 너무 쉬워서, 옛 <code>alert()</code>처럼 아무 데서나 남발하기 쉽다는 점이다.</p><h3>여러 시각</h3><p>같은 \"알림\" 문제를 세 글이 다른 높이에서 본다.</p><ul><li><b>CSS-Tricks (Mat Marquis)</b> — ariaNotify()는 진짜 문제를 풀지만, 쉬운 만큼 과도한 알림으로 숙련된 스크린리더 사용자를 방해할 위험이 크다며 절제를 강조한다.</li><li><b>web.dev (Hiding and updating content)</b> — 전통적 aria-live의 polite·assertive와 aria-atomic·relevant·busy를 정리하되, 영역이 로드 시점에 존재해야 하고 스크린리더마다 동작이 달라 테스트가 필수라고 짚는다.</li><li><b>web.dev (Introduction to ARIA)</b> — \"ARIA의 첫 번째 규칙은 ARIA를 쓰지 않는 것\"이라는 원칙으로, 네이티브 HTML로 되는 일에 굳이 ARIA를 덧씌우지 말라고 상기시킨다.</li></ul><h3>왜 중요한가</h3><p>세 글을 겹치면 결론이 모인다. 새 API의 가치는 기술이 아니라 절제에서 나온다. ariaNotify()는 aria-live의 고질적 타이밍 문제를 없애지만, 그만큼 \"읽어줄 수 있다\"가 \"읽어줘야 한다\"로 오해되기 쉽다. 스크린리더 사용자에게 불필요한 알림은 시각 사용자에게 모달 팝업을 연달아 띄우는 것과 같다. 접근성은 더 많이 말하는 게 아니라, 꼭 필요한 것만 정확한 순간에 말하는 일이다.</p><h3>실무 적용</h3><ul><li>알림이 정말 필요한지 먼저 묻고, 포커스 이동이나 네이티브 HTML로 이미 전달되는 맥락은 ariaNotify()로 중복 안내하지 마라.</li><li>새 API는 점진적 향상으로 깔되, 미지원 브라우저를 위해 검증된 aria-live 폴백을 함께 설계하라.</li><li>high 우선순위는 작업을 가로막아야 할 만큼 급한 경우로만 한정하고, 대부분의 알림은 normal로 큐에 쌓아라.</li></ul><h3>Kenny의 관점</h3><p>프론트엔드·AX 관점에서 ariaNotify()는 \"권한이 생기면 책임도 커진다\"는 접근성의 오랜 교훈을 다시 꺼낸다. 그동안 aria-live가 까다로웠던 건 역설적으로 남용을 막는 마찰이기도 했다. 마찰이 사라진 지금, 무엇을 알릴지 결정하는 판단이 곧 품질이 된다. 나는 알림을 늘리는 코드를 리뷰할 때 \"이 소리를 끄고 싶은 사용자는 어떻게 하지\"를 함께 묻는 것을 기본 규칙으로 삼는다.</p><h3>출처</h3><ul><li><a href=\"https://css-tricks.com/the-siren-song-of-arianotify/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">CSS-Tricks: The Siren Song of ariaNotify() ↗</a></li><li><a href=\"https://web.dev/hiding-and-updating-content/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">web.dev: Hiding and updating content ↗</a></li><li><a href=\"https://web.dev/articles/semantics-aria\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">web.dev: Introduction to ARIA ↗</a></li></ul>",
    "source": "CSS-Tricks",
    "sourceUrl": "https://css-tricks.com/the-siren-song-of-arianotify/",
    "tags": [
      "Accessibility",
      "ARIA",
      "ScreenReader"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-19-why-koreans-love-ai",
    "category": "ai",
    "date": "2026-06-19",
    "title": "세계가 AI를 겁낼 때, 한국은 끌어안는다",
    "rawTitle": "Why do South Koreans love AI so much?",
    "summary": "AI를 걱정하는 한국인은 25개국 중 가장 적다. 정부 주도 전략, 기술로 도약한 기억, 그리고 앤트로픽의 서울 진출까지—한국 AI 열풍의 동력과 그늘을 세 출처로 분석한다.",
    "bodyHtml": "<p>AI를 향한 불안이 전 세계를 덮을 때, 한국은 정반대로 움직인다. MIT 테크놀로지 리뷰에 따르면 \"AI가 기대보다 걱정된다\"는 한국인은 16%로, 조사된 25개국 중 가장 낮다(미국은 50%). 마침 같은 주에 앤트로픽이 서울 사무소를 열고 한국 AI 생태계 파트너십을 쏟아내면서, 한국은 글로벌 AI 기업이 가장 탐내는 시장이 됐다. 무엇이 이 열기를 만들었나.</p><blockquote>\"South Koreans have consistently and relentlessly been told by the government about AI's potential to create a better future.\"<cite>MIT Technology Review</cite></blockquote><h3>무슨 일인가</h3><p>기사는 한국의 AI 사랑을 정부·역사·일상 세 갈래로 설명한다. 이재명 정부는 \"AI 3대 강국\"을 내걸고 국가AI전략위원회와 소버린 AI 파운데이션 모델 사업을 추진한다. 철강·반도체·스마트폰으로 가난을 벗어난 \"기술로 도약\"의 기억이 AI에도 그대로 투영된다. 실제로 20대의 46%가 챗봇으로 운세를 봤고, 다수가 매일 AI를 쓴다. 2024년 AI 기본법은 안전보다 발전에 무게를 두고, 응답자 70%가 규제보다 과학 발전을 우선한다고 답했다.</p><h3>여러 시각</h3><p>같은 \"한국의 AI 열풍\"을 세 출처가 다른 입구에서 본다.</p><ul><li><b>MIT Technology Review (Michelle Kim)</b> — 문화·정책 관점. 정부의 일관된 메시지와 기술 성공의 기억이 낙관을 만들지만, 64%는 일자리 위협도 동시에 우려한다는 양면성을 짚는다.</li><li><b>Anthropic (서울 사무소)</b> — 시장 관점. LG CNS·삼성SDS·한화솔루션이 Claude를 도입하고, 한국 사용자가 총량·1인당 사용량 모두 세계 5위 안에 든다며 아시아태평양 매출이 1년 새 10배 늘었다고 밝힌다.</li><li><b>VentureBeat (SKT 파트너십)</b> — 주권 관점. SK텔레콤이 앤트로픽에 1억 달러를 투입해 Claude와 한국어·통신 역량을 결합한 다국어 모델을 함께 만들며, 외산 모델 도입과 자체 모델 육성을 동시에 노린다.</li></ul><h3>왜 중요한가</h3><p>세 시각을 겹치면 한국 AI 열풍의 구조가 보인다. 위에서는 정부가 비전을 밀고, 옆에서는 앤트로픽 같은 외국 기업이 시장을 파고들며, 안에서는 SKT처럼 자체 역량을 키운다. 다만 낙관이 곧 무비판은 아니다. 같은 조사에서 일자리 불안은 64%로 높고, 안전보다 발전을 택한 기본법은 사고가 터지면 되돌리기 어렵다. 빠른 수용은 강점이지만, 속도가 검증을 앞지르면 신뢰는 한순간에 무너진다.</p><h3>실무 적용</h3><ul><li>한국 시장용 AI 제품은 \"수용도가 높다\"를 전제로, 온보딩 마찰을 줄이고 업무·생활을 아우르는 일상 활용 시나리오를 전면에 배치하라.</li><li>높은 낙관 뒤의 64% 일자리 불안을 외면하지 말고, 사람을 대체가 아닌 증강하는 메시지와 검수 가능한 UI로 신뢰를 쌓아라.</li><li>데이터 레지던시와 한국어 품질을 기본 요구사항으로 두고, 외산·국산 모델을 함께 평가하는 출구 전략을 설계하라.</li></ul><h3>Kenny의 관점</h3><p>사업기획과 프론트엔드를 오가는 입장에서 한국의 높은 AI 수용도는 기회이자 함정이다. 사용자가 새 기능을 빨리 받아들인다는 건, 그만큼 실망도 빠르다는 뜻이다. 앤트로픽이 서울에 깃발을 꽂은 지금, 차별화는 모델 성능이 아니라 한국어 맥락과 신뢰 경험에서 갈린다. 나는 \"빨리 쓰게 만들기\"보다 \"오래 믿게 만들기\"를 화면 설계의 첫 질문으로 둔다.</p><h3>출처</h3><ul><li><a href=\"https://www.technologyreview.com/2026/06/15/1138983/why-do-south-koreans-love-ai-so-much/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">MIT Technology Review: Why do South Koreans love AI so much? ↗</a></li><li><a href=\"https://www.anthropic.com/news/seoul-office-partnerships-korean-ai-ecosystem\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Anthropic: Anthropic opens Seoul office and announces new partnerships across the Korean AI ecosystem ↗</a></li><li><a href=\"https://venturebeat.com/ai/ai-startup-anthropic-gets-100m-to-build-custom-llm-for-telecom-industry\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">VentureBeat: AI startup Anthropic gets $100M to build custom LLM for telecom industry ↗</a></li></ul>",
    "source": "MIT Technology Review",
    "sourceUrl": "https://www.technologyreview.com/2026/06/15/1138983/why-do-south-koreans-love-ai-so-much/",
    "tags": [
      "AIKorea",
      "AIAdoption",
      "AIPolicy"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-18-css-centering-2026",
    "category": "design",
    "date": "2026-06-18",
    "title": "2026년의 CSS 센터링, 트릭에서 의도로",
    "rawTitle": "The State of CSS Centering in 2026",
    "summary": "div 가운데 정렬은 이제 transform 트릭이 아니라 place-self·anchor-center·text-box·safe로 정렬 의도를 선언하는 문제다. 2026년 CSS 센터링을 세 출처로 정리한다.",
    "bodyHtml": "<p>\"div 하나 가운데 정렬\"은 한때 프론트엔드의 농담이자 통과의례였다. 그런데 2026년의 CSS 센터링은 더 이상 transform 트릭이나 마진 핵을 외우는 문제가 아니다. <code>place-content</code>, <code>anchor-center</code>, <code>text-box</code>, <code>safe</code> 키워드까지 더해지면서, 이제는 \"어떻게 가운데 두느냐\"가 아니라 \"어떤 정렬 의도를 선언하느냐\"의 문제가 됐다. 같은 주제를 세 출처가 나란히 정리한 지금이 센터링 지식을 새로 고칠 적기다.</p><blockquote>\"It's about understanding how alignment works, considering your specific use case and layout.\"<cite>CSS-Tricks</cite></blockquote><h3>무슨 일인가</h3><p>CSS-Tricks의 2026 센터링 정리는 핵심을 세 갈래로 나눈다. 첫째, 절대 위치 센터링이 <code>transform: translate(-50%,-50%)</code>에서 <code>inset: 0; place-self: center</code>로 옮겨갔다. 둘째, <code>text-box</code> 속성으로 폰트 위아래의 군더더기 여백을 잘라 픽셀 단위 수직 정렬을 맞춘다. 셋째, 앵커 포지셔닝의 <code>center</code>(영역 기준)와 <code>anchor-center</code>(앵커 기준)가 새로운 정렬 축을 만든다. 무엇보다 <code>safe</code> 키워드는 콘텐츠가 넘칠 때 잘려 사라지는 사고를 막는다.</p><h3>여러 시각</h3><p>같은 \"가운데 정렬\"을 세 출처가 다른 높이에서 본다.</p><ul><li><b>CSS-Tricks</b> — 2026 최신 기능(text-box, safe/unsafe, anchor-center)을 묶어 \"코드 암기가 아니라 정렬 원리 이해\"가 본질이라고 정리한다.</li><li><b>web.dev</b> — <code>place-content: center</code>, gentle-flex 같은 재사용 패턴을 카탈로그처럼 제시하고, <code>align-content</code>가 block 레이아웃까지 Baseline에 들어왔음을 짚는다.</li><li><b>Josh W. Comeau</b> — 수십 가지 방법 대신 \"flex + justify/align-items\"를 가장 자주 쓰는 기본값으로 권하며, 자식이 컨테이너를 넘쳐도 깨지지 않는 실용성을 강조한다.</li></ul><h3>왜 중요한가</h3><p>세 글을 겹치면 결론이 모인다. 센터링엔 단일 정답이 없고, 레이아웃 알고리즘(flex·grid·block·absolute)마다 정렬의 의미가 다르다. 그래서 \"가운데 두는 코드\"만 외우면 오히려 함정에 빠진다. <code>align-content</code>가 block에도 들어오고 <code>safe</code> 정렬이 표준이 되면서, 이제 중요한 건 \"이 요소가 어떤 컨텍스트에서 어떻게 넘칠 수 있는가\"를 먼저 묻는 습관이다. 정렬은 장식이 아니라 콘텐츠 보존과 접근성의 문제다.</p><h3>실무 적용</h3><ul><li>새 absolute 센터링은 transform 핵 대신 <code>inset: 0; place-self: center</code>로 쓰고, 레거시 폴백만 transform으로 남겨라.</li><li>텍스트 블록의 수직 어긋남은 line-height 땜질 대신 <code>text-box</code>로 폰트 메트릭을 직접 잘라 맞춰라.</li><li>가변 콘텐츠를 가운데 둘 땐 항상 <code>safe</code> 키워드를 붙여 좁은 화면에서 잘려 사라지는 일을 막아라.</li></ul><h3>Kenny의 관점</h3><p>프론트엔드·AX 관점에서 센터링의 진화는 \"의도를 코드로 말하기\"의 축소판이다. <code>transform: translate(-50%,-50%)</code>는 결과(좌표)를 적는 코드였고, <code>place-self: center</code>는 의도(가운데)를 적는 코드다. 의도가 드러나는 코드는 사람이 읽기 쉽고, AI 보조 도구가 레이아웃을 추론하기도 쉽다. 나는 신규 코드에서 정렬 의도와 넘침(overflow) 시나리오를 한 쌍으로 묶어 리뷰하는 걸 기본 규칙으로 삼는다.</p><h3>출처</h3><ul><li><a href=\"https://css-tricks.com/the-state-of-css-centering-in-2026/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">CSS-Tricks: The State of CSS Centering in 2026 ↗</a></li><li><a href=\"https://web.dev/articles/centering-in-css\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">web.dev: Centering in CSS ↗</a></li><li><a href=\"https://www.joshwcomeau.com/css/center-a-div/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Josh W. Comeau: How To Center a Div ↗</a></li></ul>",
    "source": "CSS-Tricks",
    "sourceUrl": "https://css-tricks.com/the-state-of-css-centering-in-2026/",
    "tags": [
      "CSS",
      "Centering",
      "Layout"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-18-ai-agent-security",
    "category": "ai",
    "date": "2026-06-18",
    "title": "수백만 AI 에이전트의 시대, 보안이 먼저다",
    "rawTitle": "Google DeepMind is worried about what happens when millions of agents start to interact",
    "summary": "구글 딥마인드는 멀티에이전트 안전 연구에 1천만 달러를 건다. 메타 AI 봇 탈취 사건은 그 위험이 이미 현실임을 보여준다. 에이전트 시대의 진짜 과제는 통제와 방어다.",
    "bodyHtml": "<p>AI 에이전트가 사람을 대신해 이메일을 바꾸고 계정을 복구하고 코드를 고치기 시작하면서, 질문이 바뀌었다. \"에이전트가 무엇을 할 수 있나\"에서 \"에이전트가 서로, 그리고 공격자와 어떻게 부딪치나\"로. 구글 딥마인드는 수백만 에이전트가 동시에 상호작용할 때 벌어질 일을 연구하라며 1천만 달러를 내놨다. 같은 시기 메타의 AI 지원 봇이 인스타그램 계정 탈취에 악용된 사건은, 그 위험이 미래가 아니라 지금임을 못 박았다.</p><blockquote>\"The main issue is that there just isn't really a field of research for multi-agent safety yet.\"<cite>MIT Technology Review</cite></blockquote><h3>무슨 일인가</h3><p>딥마인드는 슈미트 사이언스, 영국 ARIA, Cooperative AI Foundation, Google.org와 함께 멀티에이전트 안전 연구 자금 1천만 달러를 조성했다. AGI 안전 연구를 이끄는 Rohin Shah는 \"몇 달 안에\" 에이전트 배포가 우려스러운 규모에 이를 것으로 본다. 명시된 위험은 사기·프롬프트 인젝션·사이버공격·시스템 탈취, 그리고 장기적으로는 경제적 연쇄 붕괴다. 핵심은 단일 에이전트의 정렬(alignment)이 아니라, 여러 에이전트가 얽힐 때 생기는 창발적 위험을 다룰 학문 자체가 아직 없다는 점이다.</p><h3>여러 시각</h3><p>같은 \"에이전트 보안\"을 세 출처가 연구·공격·방어의 세 입구에서 본다.</p><ul><li><b>MIT Technology Review (딥마인드)</b> — 멀티에이전트 상호작용의 창발적 위험을 연구할 \"분야 자체가 없다\"며 학계의 선제 연구를 촉구한다.</li><li><b>MIT Technology Review (메타 해킹)</b> — 거창한 위협이 아니라 VPN으로 위치만 맞춘 뒤 봇에게 이메일 변경을 요청하는 단순 수법으로 계정이 털린 현실을 보여준다.</li><li><b>Anthropic (Project Glasswing)</b> — 공격이 아니라 방어 쪽에서 AI를 먼저 무장시키자는 접근. Claude 기반 모델로 취약점을 찾아 패치하며 이미 1만 건 넘는 고위험 결함을 발견했다.</li></ul><h3>왜 중요한가</h3><p>세 관점을 겹치면 흐름이 분명하다. 위험은 모델이 \"더 똑똑해져서\"가 아니라 \"세상에 실제 행동을 위임받아서\" 커진다. 메타 사례처럼 정교한 해킹이 아닌 평범한 사회공학이 에이전트를 통과하고, 딥마인드 경고처럼 그런 에이전트가 수백만 개로 얽히면 단일 사고가 연쇄가 된다. 그래서 방어의 승부는 모델 성능이 아니라 권한 경계·검증·관측에서 갈린다. Glasswing이 보여주듯 방어 측도 AI로 속도를 내야 비대칭 우위를 지킬 수 있다.</p><h3>실무 적용</h3><ul><li>에이전트에 실제 행동(계정·결제·메일 변경)을 위임할 땐, 모델 응답과 별개로 신원 재확인·승인 게이트를 코드 레벨에서 강제하라.</li><li>프롬프트 인젝션을 전제로 설계하라 — 외부 입력은 명령이 아니라 데이터로 취급하고, 권한 범위를 최소화한 뒤 감사 로그를 남겨라.</li><li>출시 전 레드팀(단순 사회공학 시나리오 포함)을 필수 게이트로 두고, 비용을 이유로 건너뛰지 마라.</li></ul><h3>Kenny의 관점</h3><p>프론트엔드·AX 관점에서 이 문제의 무대는 결국 \"사람이 개입하는 화면\"이다. 메타 봇이 털린 건 모델이 멍청해서가 아니라, 위험한 행동을 사람 확인 없이 끝까지 수행하도록 흐름이 설계됐기 때문이다. 에이전트가 계정·결제 같은 비가역적 행동을 하기 직전엔, 무엇을·왜·누구 권한으로 하는지 사용자가 멈추고 검토할 표면이 있어야 한다. 자율성과 통제감을 동시에 주는 인터페이스, 그것이 에이전트 보안의 마지막 1마일이다.</p><h3>출처</h3><ul><li><a href=\"https://www.technologyreview.com/2026/06/11/1138794/google-deepmind-is-worried-about-what-happens-when-millions-of-agents-start-to-interact/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">MIT Technology Review: Google DeepMind is worried about what happens when millions of agents start to interact ↗</a></li><li><a href=\"https://www.technologyreview.com/2026/06/05/1138437/the-meta-hack-shows-theres-more-to-ai-security-than-mythos/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">MIT Technology Review: The Meta hack shows there's more to AI security than Mythos ↗</a></li><li><a href=\"https://www.anthropic.com/news/expanding-project-glasswing\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Anthropic: Expanding Project Glasswing ↗</a></li></ul>",
    "source": "MIT Technology Review",
    "sourceUrl": "https://www.technologyreview.com/2026/06/11/1138794/google-deepmind-is-worried-about-what-happens-when-millions-of-agents-start-to-interact/",
    "tags": [
      "AIAgents",
      "AISecurity",
      "MultiAgent"
    ],
    "thumb": ""
  },
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
    "id": "2026-06-15-ai-in-testing-blindspots",
    "category": "plan",
    "date": "2026-06-15",
    "title": "AI는 테스팅의 사각지대를 자동화한다",
    "rawTitle": "Back to the basics: Rethinking how we use AI in testing",
    "summary": "AI는 테스팅을 빠르게 하지만, 인간의 이해 없이는 사각지대를 그대로 자동화할 뿐이다. 반복 작업엔 AI를, 위험 판단엔 사람을 둬야 한다.",
    "bodyHtml": "<p>\"AI로 테스트 케이스를 자동 생성한다\"는 말은 이제 흔하다. 그러나 Ministry of Testing의 Konstantinos Konstantakopoulos는 정반대 지점을 짚는다. 속도가 아니라 이해(understanding)가 빠진 자동화는 품질을 만드는 게 아니라 잘못된 확신을 만든다는 것이다. AI를 어디에 쓸지보다, 어디에 쓰면 안 되는지를 먼저 정의해야 한다는 주장이다. 기획·QA·프론트엔드를 오가는 입장에서 가장 뼈아픈 경고다.</p><blockquote>\"AI는 우리를 더 빠르게 움직이게 하지만, 인간의 이해가 없으면 우리는 단지 사각지대를 자동화하는 것일 뿐이다.\"<cite>Ministry of Testing</cite></blockquote><h3>무슨 일인가</h3><p>저자는 AI를 반복적이고 정의가 명확한 작업에 한정하라고 말한다. 테스트 플랜 포맷팅, 목업 데이터 생성, 결과 요약 같은 일이다. 반대로 리스크 평가, 비즈니스 규칙 해석, 테스트 전략의 첫 설계처럼 시스템 거동과 맥락에 의존하는 작업은 사람의 몫으로 남겨야 한다고 본다. AI의 출력은 정답이 아니라 출발점이며, 수기 분석과 대조해 빠진 부분을 찾아내는 검증 단계가 반드시 따라야 한다는 것이다.</p><h3>여러 시각</h3><p>두 출처는 AI를 도구로 보되, 그 도구를 다루는 규율의 위치를 비교하면 흥미롭게 갈린다.</p><ul><li><b>Ministry of Testing</b> — QA 관점에서 AI는 사람의 판단을 대체하는 게 아니라 보조한다. 협업·분석·시스템 이해라는 기초가 먼저고, 자동화는 그 위에 얹는다.</li><li><b>Mind the Product</b> — 기획 관점에서 Parv Sondhi는 AI/ML을 트렌드라는 이유로 로드맵에 끼워 넣지 말라고 한다. 핵심 가치에 정렬되어야 하고, 편향 점검과 모델 정확도 같은 새 품질 지표를 측정해야 한다는 것이다.</li></ul><h3>왜 중요한가</h3><p>두 글은 결국 같은 곳을 가리킨다. AI는 \"무엇을 빠르게 할 수 있는가\"의 문제가 아니라 \"의도와 책임을 누가 지는가\"의 문제라는 점이다. QA가 위험 판단을 AI에 위임하면 사각지대가 그대로 통과되고, 기획이 AI 기능을 가치 정렬 없이 넣으면 측정할 수 없는 제품이 나온다. 속도는 늘 측정 가능하지만, 빠진 이해는 측정되지 않은 채 출시까지 따라온다. 그래서 위험할수록 사람이 앞에 서야 한다.</p><h3>실무 적용</h3><ul><li>AI에 맡길 작업과 막을 작업을 먼저 문서로 분리한다 — 데이터 생성·요약은 위임, 리스크 기반 전략 설계는 사람.</li><li>AI가 생성한 테스트는 머지 전 수기 분석과 대조해 커버리지 공백을 역으로 점검한다.</li><li>AI 기능을 담은 제품에는 모델 정확도·편향·사용자 만족 같은 새 품질 지표를 기획 단계에서 정의해 둔다.</li></ul><h3>Kenny의 관점</h3><p>프론트엔드에서 AI가 만든 테스트는 화면이 \"렌더링됐다\"까지는 잘 잡지만 \"의도대로 작동했다\"는 잡지 못한다. 기획이 정의한 사용자 의도를 QA가 검증 기준으로 번역하고, 그 기준을 AI에게 출발점으로 던지는 순서가 무너지면 안 된다. 즉 AI는 실행 속도를 담당하고, 기획·QA·프론트엔드를 잇는 사람은 의도와 위험의 정의를 담당한다. 이 경계선을 명문화하는 것 자체가 지금 시대의 품질 전략이다.</p><h3>출처</h3><ul><li><a href=\"https://www.ministryoftesting.com/articles/back-to-the-basics-rethinking-how-we-use-ai-in-testing\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Ministry of Testing: Back to the basics: Rethinking how we use AI in testing ↗</a></li><li><a href=\"https://www.mindtheproduct.com/the-product-managers-playbook-for-ai-ml-integration/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Mind the Product: The product manager's playbook for AI/ML integration ↗</a></li></ul>",
    "source": "Ministry of Testing",
    "sourceUrl": "https://www.ministryoftesting.com/articles/back-to-the-basics-rethinking-how-we-use-ai-in-testing",
    "tags": [
      "QA",
      "AITesting",
      "TestStrategy"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-14-how-linear-builds-product",
    "category": "pm",
    "date": "2026-06-14",
    "title": "Linear는 왜 PM 없이 더 잘 만드나",
    "rawTitle": "How Linear builds product",
    "summary": "Linear는 PM 1명·OKR·A/B 없이 취향과 고객 몰입으로 빠르게 출시한다. 프레임워크보다 판단과 오너십이 PM 크래프트의 본질임을 보여준다.",
    "bodyHtml": "<p>제품팀을 운영하다 보면 프레임워크에 기대고 싶은 순간이 온다. RICE, OKR, A/B 테스트로 의사결정을 객관화하면 마음이 편하다. 그런데 협업 도구 Linear는 이 거의 전부를 버렸다. PM은 단 한 명(Head of Product)뿐이고, 프로젝트 리드는 엔지니어·디자이너 중에서 나온다. 그럼에도 제품 완성도와 출시 속도는 업계가 부러워하는 수준이다. 무엇이 이걸 가능하게 하나.</p><blockquote>\"Product goals should be about how we add value for our existing customers or expand to a new customer base.\"<cite>Lenny's Newsletter</cite></blockquote><h3>무슨 일인가</h3><p>Linear는 12개월 방향만 리더십이 잡고, 향후 2개 분기만 구체화한다. 작업은 로드맵·이슈 발굴·고객 요청·유지보수의 네 갈래로 흐르고, 프로젝트마다 팀이 모였다 해산한다. 복잡한 점수 랭킹 대신 고객 몰입과 리더의 판단으로 우선순위를 정하고, OKR과 A/B 테스트는 쓰지 않는다. 대신 피처 플래그로 며칠 만에 내부 검증을 돌리고 베타 고객(Linear Origins)에게서 선택적 피드백을 받는다. 즉 프로세스를 줄인 자리를 '취향(taste)'과 오너십으로 채운 것이다.</p><h3>여러 시각</h3><p>같은 PM 크래프트를 세 글이 다른 각도에서 본다.</p><ul><li><b>Lenny's Newsletter (Linear)</b> — 프레임워크를 최소화하고 소수의 판단·취향으로 빠르게 출시하는 게 더 높은 완성도를 낳을 수 있다는 실증.</li><li><b>a16z (Ben Horowitz)</b> — \"좋은 PM은 제품의 CEO\"이며 결과에 전적인 책임을 진다. Linear가 PM 수를 줄여도 굴러가는 이유는 오너십이 팀 전체에 분산됐기 때문.</li><li><b>Mind the Product (C. Todd Lombardo)</b> — 로드맵은 기능 목록이 아니라 \"전략의 프로토타입\"이며 산출물(output)이 아닌 성과(outcome)로 그려야 한다. Linear의 2분기 구체화·12개월 방향이 정확히 이 형태다.</li></ul><h3>왜 중요한가</h3><p>세 글을 겹쳐 보면 결론이 모인다. 프로세스는 판단을 대체하지 못하고, 오너십과 고객 이해라는 토대 위에서만 의미를 가진다. Horowitz의 책임 윤리, Lombardo의 성과 중심 로드맵, Linear의 취향 기반 실행은 모두 \"무엇을 만들지\"를 외부 점수표가 아니라 팀의 명확한 관점에서 끌어낸다. 프레임워크가 약한 팀이 도구를 더 쌓으면 오히려 결정이 느려진다. 진짜 레버는 누가 책임지고, 어떤 고객 문제를 풀지에 대한 합의다.</p><h3>실무 적용</h3><ul><li>로드맵을 기능·날짜표가 아니라 분기별 성과(outcome) 테마로 다시 그리고, 12개월 방향과 2분기 상세를 분리한다.</li><li>우선순위 점수 산식을 맹신하기 전에 \"이게 어떤 고객 문제를 더 잘 푸는가\"를 한 문장으로 먼저 답하게 한다.</li><li>모든 프로젝트에 명시적 리드(오너)를 세워 책임 소재를 분명히 하고, 피처 플래그로 작게 빨리 검증한다.</li></ul><h3>Kenny의 관점</h3><p>프론트엔드와 PM을 오가며 느끼는 건, 출시 속도의 병목은 대개 코드가 아니라 결정이라는 점이다. Linear가 피처 플래그로 며칠 만에 프로토타입을 붙이는 건 엔지니어링 역량인 동시에 \"빨리 보고 빨리 판단한다\"는 PM 문화의 산물이다. AX 관점에서도 마찬가지다. 좋은 UI는 점수표가 아니라 팀의 취향과 고객 맥락에서 나온다. 결국 프레임워크는 판단을 돕는 보조선일 뿐, 오너십과 고객 이해라는 본질을 대신할 수 없다.</p><h3>출처</h3><ul><li><a href=\"https://www.lennysnewsletter.com/p/how-linear-builds-product\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Lenny's Newsletter: How Linear builds product ↗</a></li><li><a href=\"https://a16z.com/good-product-manager-bad-product-manager/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">a16z: Good Product Manager/Bad Product Manager ↗</a></li><li><a href=\"https://www.mindtheproduct.com/roadmaps-are-dead-long-live-roadmaps-by-c-todd-lombardo/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Mind the Product: Roadmaps are dead! Long live roadmaps! ↗</a></li></ul>",
    "source": "Lenny's Newsletter",
    "sourceUrl": "https://www.lennysnewsletter.com/p/how-linear-builds-product",
    "tags": [
      "ProductManagement",
      "Roadmap",
      "Prioritization"
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
    "id": "2026-06-12-prd-living-document",
    "category": "plan",
    "date": "2026-06-12",
    "title": "PRD는 한 번 쓰고 끝나는 문서가 아니다",
    "rawTitle": "Don't let your first Product Requirements Document be your last",
    "summary": "기획 문서는 고정된 템플릿이 아니라 불확실성에 맞춰 진화하는 도구다. 좋은 PRD는 의도를 담고, 테스트 가능한 형태로 다듬어진다.",
    "bodyHtml": "<p>기획자가 가장 자주 듣는 질문 중 하나는 \"PRD를 어떻게 써야 하나요\"다. 정답 템플릿을 찾으려는 욕심은 오히려 첫 문서를 마지막 문서로 만든다. Mind the Product에 정리된 Adam Darcy의 글은 70명의 PM을 조사해 표준 양식의 부재가 불안을 키운다는 점을 짚는다. 흥미롭게도 그 해법은 더 엄격한 템플릿이 아니라, 프로젝트 성격에 맞게 섹션을 골라 쓰는 유연한 도구였다.</p><blockquote>\"많은 PM이 겪는 불안은 표준화된 PRD 템플릿과 명확한 기대치가 없다는 데서 비롯된다.\"<cite>Mind the Product</cite></blockquote><h3>무슨 일인가</h3><p>Darcy는 회사마다 PRD 기준이 제각각이라 신입 PM일수록 \"제대로 쓰고 있는가\"라는 사회적 불안에 시달린다고 본다. 그래서 그는 고정 양식 대신, 필요한 섹션을 선택하고 각 항목에 가이드를 붙인 PRD 생성기를 만들었다. 핵심은 문서의 형식이 아니라 문서가 담아야 할 의도와 맥락이며, 첫 PRD는 완성본이 아니라 계속 다듬어지는 살아있는 산출물이라는 것이다.</p><h3>여러 시각</h3><p>세 출처는 \"무엇을 만들지 정의하기\"를 서로 다른 각도에서 본다.</p><ul><li><b>Mind the Product (Darcy)</b> — PRD는 불확실성과 팀 맥락에 맞춰 유연하게 진화해야 하며, 형식보다 의도 전달이 중요하다.</li><li><b>Mind the Product (Massey)</b> — 좋은 명세는 제품의 의도, 개발 목표, 제약을 명확히 담아야 하며 디테일 부족이 값비싼 실패를 부른다는 점을 강조한다.</li><li><b>Ministry of Testing</b> — 같은 요구사항을 테스터 관점에서 보면, given/when/then 같은 검증 가능한 수용 기준으로 다듬어야 모호함과 버그를 줄일 수 있다.</li></ul><h3>왜 중요한가</h3><p>기획 문서의 목적은 합의와 검증이지, 형식 채우기가 아니다. 의도와 제약을 담되 그것이 테스트 가능한 기준으로 환원되지 않으면, 개발과 QA 단계에서 해석 차이가 폭발한다. 반대로 수용 기준만 잔뜩 나열하고 \"왜 만드는가\"라는 의도가 빠지면, 만들 수는 있어도 잘못된 것을 만들게 된다. 결국 좋은 기획은 의도와 검증 가능성을 한 문서 안에서 잇는 일이다.</p><h3>실무 적용</h3><ul><li>PRD를 고정 템플릿이 아니라 프로젝트 불확실성에 맞춰 섹션을 가감하는 살아있는 문서로 운영한다.</li><li>각 요구사항 옆에 의도(왜)와 제약을 명시하고, 동시에 given/when/then 형태의 수용 기준을 함께 적는다.</li><li>기획 리뷰에 QA를 초대해 모호한 문장을 검증 가능한 기준으로 일찍 바꾼다.</li></ul><h3>Kenny의 관점</h3><p>프론트엔드를 구현하다 보면 PRD의 모호한 한 줄이 가장 비싼 비용이라는 걸 매번 느낀다. \"적절히 노출한다\" 같은 문장은 화면 구현 시점에 반드시 협의로 되돌아온다. 그래서 나는 기획 단계에서부터 의도를 문장으로 남기되, 그 문장을 곧바로 컴포넌트 상태와 수용 기준으로 번역해 본다. 기획·프론트·QA가 같은 문서를 읽고 같은 화면을 떠올릴 때, PRD는 비로소 첫 문서로 끝나지 않는다.</p><h3>출처</h3><ul><li><a href=\"https://www.mindtheproduct.com/dont-let-your-first-prd-be-your-last/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Mind the Product: Don't let your first Product Requirements Document be your last ↗</a></li><li><a href=\"https://www.mindtheproduct.com/importance-product-specifications/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Mind the Product: The Importance of Product Specifications ↗</a></li><li><a href=\"https://www.ministryoftesting.com/software-testing-glossary/acceptance-criteria\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Ministry of Testing: Acceptance criteria ↗</a></li></ul>",
    "source": "Mind the Product",
    "sourceUrl": "https://www.mindtheproduct.com/dont-let-your-first-prd-be-your-last/",
    "tags": [
      "ProductPlanning",
      "PRD",
      "AcceptanceCriteria"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-11-ai-gtm-demos-to-deals",
    "category": "pm",
    "date": "2026-06-11",
    "title": "데모는 쉽고 제품은 어렵다: AI GTM의 진실",
    "rawTitle": "From Demos to Deals: Insights for Building in Enterprise AI",
    "summary": "AI 시대의 성장 공식은 화려한 데모가 아니라 프로덕션 완성도와 빠른 출시 속도, 그리고 무너지지 않는 해자에서 나온다.",
    "bodyHtml": "<p>AI 제품을 만드는 사람이라면 누구나 인상적인 데모 하나쯤은 만들어봤을 것이다. 문제는 그다음이다. a16z는 엔터프라이즈 AI 기업의 성패가 데모가 아니라 \"고객이 스스로 끌어당기는\" 프로덕션급 제품에서 갈린다고 진단한다. 토큰 비용이 백만 토큰당 30달러에서 5달러 아래로 떨어지면서 진입장벽은 무너졌고, 시장은 비슷한 앱들로 넘쳐난다. 결국 차별화는 데모의 화려함이 아니라 마지막 1마일의 제품 완성도에서 결정된다.</p><blockquote>\"인상적인 AI 데모를 만드는 것은 쉽지만, 제품의 마지막 1마일은 유난히 어렵다.\"<cite>Andreessen Horowitz</cite></blockquote><h3>무슨 일인가</h3><p>a16z에 따르면 AI 기업의 성장 벤치마크 자체가 다시 쓰였다. 선두 기업의 연 10배 성장이 표준이 되었고, 시리즈 A 단계 중간값이 과거 성공 기준이던 100만 달러 ARR을 넘어선다. 하지만 비결정적 모델 출력과 지저분한 데이터, 예측 불가능한 사용자 행동 탓에 데모를 실제 제품으로 만드는 일은 여전히 고통스럽다. 빠른 출시 속도가 브랜드 우위를 만들지만, 지속성은 기록 시스템 장악·워크플로 락인·깊은 통합·신뢰 관계 같은 해자에서 나온다.</p><h3>여러 시각</h3><p>같은 'AI 성장'을 세 매체가 서로 다른 각도에서 본다.</p><ul><li><b>a16z</b> — 공급 측 관점. 데모를 넘어선 프로덕션 완성도와 해자가 카테고리 리더십을 결정한다고 본다.</li><li><b>Lenny's Newsletter (Elena Verna)</b> — 성장 전술 관점. 기존 성장 공식의 60~70%가 AI에서 무용해졌고, 무료 제품 자체가 최강의 획득 엔진이며 3개월마다 PMF를 다시 찾아야 한다고 주장한다.</li><li><b>Mind the Product</b> — GTM 모션 선택 관점. 세일즈 주도·제품 주도·하이브리드 중 무엇을 택하느냐가 엔터프라이즈 획득 전략을 가른다고 정리한다.</li></ul><h3>왜 중요한가</h3><p>세 시각을 겹쳐 보면 하나의 흐름이 보인다. 진입장벽이 사라진 시장에서 차별화는 '무엇을 보여주는가'가 아니라 '얼마나 빨리 진짜 가치를 전달하느냐'로 이동했다. 무료 제품으로 사용자를 끌어들이되, 그 안에서 즉각적 가치를 증명하고, 워크플로에 박혀 떠날 수 없게 만드는 것. 이것이 PLG와 세일즈를 잇는 새로운 엔터프라이즈 공식이다. 데모 단계의 흥분과 실제 매출 사이의 간극을 메우지 못하면, 빠른 성장도 빠른 이탈로 끝난다.</p><h3>실무 적용</h3><ul><li>데모 완성도가 아니라 '마지막 1마일'에 리소스를 몰아라. 비결정적 출력에 대한 테스트·오케스트레이션이 곧 제품 경쟁력이다.</li><li>무료 진입 경로에서 가입 전에 가치를 체감시키고, 제품 팀이 활성화 지표를 직접 소유하게 하라.</li><li>고객 세그먼트별로 제품 주도·세일즈 주도·하이브리드 모션을 구분하고, PMF를 분기 단위로 재점검하라.</li></ul><h3>Kenny의 관점</h3><p>사업기획 입장에서 가장 무서운 문장은 \"데모는 쉽다\"이다. 투자 자료와 데모는 화려한데 실제 온보딩 화면에서 사용자가 이탈하는 제품을 너무 많이 봤다. 프론트엔드·AX 관점에서 보면 a16z가 말한 '마지막 1마일'은 결국 첫 화면의 입력 경험, 응답 지연을 견디게 하는 인터랙션, 비결정적 출력을 신뢰로 바꾸는 UI에서 결정된다. 사업기획이 GTM 모션을 정의하면, 프론트엔드가 그 가치를 가입 이전에 체감시키는 표면을 만든다. 데모를 매출로 바꾸는 다리는 결국 제품 표면 위에 놓인다.</p><h3>출처</h3><ul><li><a href=\"https://a16z.com/insights-for-enterprise-ai-builders/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Andreessen Horowitz: From Demos to Deals: Insights for Building in Enterprise AI ↗</a></li><li><a href=\"https://www.lennysnewsletter.com/p/the-new-ai-growth-playbook-for-2026-elena-verna\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Lenny's Newsletter: The new AI growth playbook for 2026 (Elena Verna) ↗</a></li><li><a href=\"https://www.mindtheproduct.com/crafting-a-go-to-market-strategy-for-enterprise-product-management/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Mind the Product: Crafting a go-to-market strategy for enterprise product management ↗</a></li></ul>",
    "source": "Andreessen Horowitz (a16z)",
    "sourceUrl": "https://a16z.com/insights-for-enterprise-ai-builders/",
    "tags": [
      "GoToMarket",
      "EnterpriseAI",
      "ProductLedGrowth"
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
