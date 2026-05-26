/**
 * History (Our Work) Section Slider Data
 * - company: The name of the client, brand, or service (Large & Bold typography)
 * - project: The detail description of the work performed (Medium & Gray typography)
 * - important: Set to true if the item should be highlighted with larger sizes
 * - image: Temporary placeholder image URL from Lorem Picsum
 * - imgWidth: Custom width for the image block
 * - imgHeight: Custom height for the image block
 */

const historyDataTop = [
  { company: "SDU", project: "메인 및 입학지원센터 기획 · 디자인", important: true, image: "image/port/KennyBrochure_260521_page-0009.jpg", imgWidth: "155px", imgHeight: "95px" },
  { company: "Wonderful Indonesia", project: "인도네시아 관광청 모바일 앱 기획 · 디자인", important: true, image: "image/port/KennyBrochure_260521_page-0006.jpg", imgWidth: "140px", imgHeight: "90px" },
  { company: "SK telecom Btv", project: "GameGrid Web/TV 플랫폼 디자인 · 퍼블리싱", important: true, image: "image/port/KennyBrochure_260521_page-0015.jpg", imgWidth: "135px", imgHeight: "90px" },
  { company: "국립국제교육원", project: "교육인적자원센터 리뉴얼 기획 · 디자인", important: false, image: "image/port/KennyBrochure_260521_page-0010.jpg", imgWidth: "160px", imgHeight: "100px" },
  { company: "UK/CA/AU/Asia Insurance", project: "글로벌 보험 비즈니스 포털 웹서비스 리뉴얼", important: false },
  { company: "Minkonet", project: "Autobahn 사이트 디자인", important: false, image: "image/port/KennyBrochure_260521_page-0023.jpg", imgWidth: "125px", imgHeight: "80px" },
  { company: "SK telecom", project: "내부 영상회의 시스템 ‘together’ 웹 포털 디자인 · 퍼블리싱", important: false, image: "image/port/KennyBrochure_260521_page-0007.jpg", imgWidth: "110px", imgHeight: "110px" },
  { company: "용산 ITV", project: "웹/모바일 사이트 디자인 · 퍼블리싱", important: false },
  { company: "Jns factory", project: "‘hereforyou’ 앱 기획 · 디자인 · 퍼블리싱", important: false },
  { company: "경동나비엔", project: "내부 시스템 기획 · 디자인", important: false, image: "image/port/KennyBrochure_260521_page-0017.jpg", imgWidth: "145px", imgHeight: "100px" },
  { company: "한양사이버대학교", project: "포털 시스템 리뉴얼", important: false },
  { company: "영남이공대학교", project: "포털 리뉴얼 기획 · 디자인", important: false },
  { company: "신나는플랫폼", project: "‘smartFIDO’ 앱 기획 · 디자인", important: false },
  { company: "청와대", project: "웹/모바일 서비스 구축 · 운영", important: true, image: "image/port/KennyBrochure_260521_page-0002.jpg", imgWidth: "125px", imgHeight: "125px" },
  { company: "Lawfully.com", project: "Android / Web / Mobile Web 구축", important: true },
  { company: "KBS", project: "역사포털 및 광복절 특집 ‘나는 대한민국’ 캠페인 구축", important: true, image: "image/port/KennyBrochure_260521_page-0014.jpg", imgWidth: "150px", imgHeight: "90px" },
  { company: "GP Partners", project: "온라인 서비스 구축 · 유지보수", important: false },
];
const historyDataBottom = [
  { company: "BMW MINI", project: "온라인 연간 유지보수 · 프로모션", important: true, image: "image/port/KennyBrochure_260521_page-0004.jpg", imgWidth: "150px", imgHeight: "85px" },
  { company: "Global Brands", project: "콜롬비아 / 게토레이 / 메트라이프생명 프로모션 구축", important: true, image: "image/port/KennyBrochure_260521_page-0028.jpg", imgWidth: "130px", imgHeight: "90px" },
  { company: "청년희망재단", project: "웹/모바일 서비스 구축 · 운영", important: false, image: "image/port/KennyBrochure_260521_page-0013.jpg", imgWidth: "120px", imgHeight: "120px" },  
  { company: "Suncha", project: "웹/모바일 앱 구축", important: false },
  { company: "한국디자인진흥원", project: "내부 시스템 및 PMS 디자인", important: false },
  { company: "한국콘텐츠진흥원", project: "캐릭터 DB 포털 구축", important: false },
  { company: "보건복지부", project: "공공기관 시스템 디자인 · 구축", important: false },
  { company: "Riot Games", project: "리그오브레전드 (L.O.L) 오픈 홈페이지 구축 · 제작 관리", important: true },
  { company: "POSCO", project: "포스코 업무정보시스템 PL 및 모바일 앱 제작", important: true },
  { company: "신세계 / 두산 / 진로하이트", project: "대기업 모바일 · 태블릿 앱 제작", important: true, image: "image/port/KennyBrochure_260521_page-0030.jpg", imgWidth: "140px", imgHeight: "95px" },
  { company: "현대상선", project: "기업 사이트 리뉴얼 디자인", important: false },
  { company: "㈜세정", project: "기업 사이트 리뉴얼 · 구축", important: false },
  { company: "KB국민카드", project: "이벤트 프로모션 사이트 제작", important: false },
  { company: "NHN Me-today", project: "프로모션 디자인 · 마케팅", important: false },
  { company: "교육과학기술부", project: "SNS 통합 관리 시스템 구축", important: false },
  { company: "낙농자조금협의회", project: "온라인 시스템 · 마케팅 구축", important: false }  
];
const portfolioData = [
  {
    img: "image/port/KennyBrochure_260521_page-0002.jpg",
    title: "대통령비서실 청와대",
    shortTitle: "청와대",
    category: "Web / Mobile Web / 청와대비서실",
    desc: "국가 최고 기관의 대국민 소통 허브인 청와대 공식 웹사이트와 어린이 청와대, 소통 블로그의 유지보수 및 고도화를 담당했습니다. 공공 서비스의 핵심 가치인 웹 접근성 표준을 철저히 준수하고, 대규모 트래픽 분산 처리를 통해 신뢰성과 안정성을 갖춘 공공 서비스 환경을 제공했습니다."
  },
  {
    img: "image/port/KennyBrochure_260521_page-0003.jpg",
    title: "HELVESKO KOREA BX",
    shortTitle: "Helvesko BX",
    category: "Web / Mobile / HELVESKO",
    desc: "스위스 프리미엄 컴포트 슈즈 브랜드 헬베스코 코리아의 국내 런칭에 맞추어 BX(Brand Experience) 디자인 전략 및 기획을 총괄했습니다. 브랜드의 신뢰도 높은 전통과 편안함이라는 가치를 디지털 미디어 전반에 성공적으로 정착시켰습니다."
  },
  {
    img: "image/port/KennyBrochure_260521_page-0004.jpg",
    title: "BMW MINI Stay Open 캠페인",
    shortTitle: "MINI Stay Open",
    category: "Responsive Web / BMW MINI",
    desc: "BMW MINI의 고유한 브랜드 감성을 담은 글로벌 디지털 캠페인 프로모션 플랫폼을 설계했습니다. 모바일과 데스크톱 환경 모두에서 세련되고 역동적인 비주얼을 제공하며 사용자의 높은 참여와 브랜드 몰입을 성공적으로 이끌어냈습니다."
  },
  {
    img: "image/port/KennyBrochure_260521_page-0005.jpg",
    title: "BMW MINI STAY OPEN 사진 공모전",
    shortTitle: "MINI 사진공모전",
    category: "Responsive Web / BMW MINI",
    desc: "BMW MINI 오너 및 팬들을 위한 온라인 사진 공모전 플랫폼을 반응형 웹으로 구축했습니다. 사용자들이 자유롭게 사진을 업로드하고 소통할 수 있는 갤러리 UX와 안정적인 업로드 모듈을 설계해 폭발적인 반응을 이끌어냈습니다."
  },
  {
    img: "image/port/KennyBrochure_260521_page-0006.jpg",
    title: "Wonderful Indonesia 모바일 앱",
    shortTitle: "Indonesia 앱",
    category: "Mobile App / 인도네시아 관광청",
    desc: "인도네시아 관광청의 공식 글로벌 여행 가이드 모바일 애플리케이션을 구축했습니다. 직관적인 UI/UX로 방대한 여행 정보와 인터랙티브 지도를 제공하여 여행자들의 편의성과 접근성을 획기적으로 개선했습니다."
  },
  {
    img: "image/port/KennyBrochure_260521_page-0007.jpg",
    title: "SK together 내부 영상 회의 시스템",
    shortTitle: "SK together",
    category: "Responsive Web / SKT",
    desc: "SK텔레콤 임직원들을 위한 차세대 웹 기반 화상 회의 및 협업 솔루션의 UI/UX 설계를 담당했습니다. 높은 보안 기준과 일관된 인터페이스를 통해 효율적인 비대면 협업 및 원활한 사내 커뮤니케이션 환경을 완벽하게 구축했습니다."
  },
  {
    img: "image/port/KennyBrochure_260521_page-0008.jpg",
    title: "Berrylink BX 기획 & 디자인",
    shortTitle: "Berrylink BX",
    category: "Web / Mobile / berrylink",
    desc: "글로벌 커넥팅 플랫폼 베리링크의 아이덴티티 수립과 BX(Brand Experience) 디자인을 담당했습니다. 세련되고 트렌디한 감각의 웹/모바일 통합 비주얼 가이드를 수립하고, 일관성 있는 브랜드 터치포인트를 창출했습니다."
  },
  {
    img: "image/port/KennyBrochure_260521_page-0009.jpg",
    title: "서울디지털대학교 홈페이지 개편",
    shortTitle: "SDU 홈페이지",
    category: "Responsive Web / 서울디지털대학교",
    desc: "국내 대표 사이버 대학인 서울디지털대학교의 메인 포털 사이트를 반응형 웹으로 대대적인 리뉴얼을 진행했습니다. 방대한 교육 콘텐츠의 정보 구조(IA)를 효율적으로 재설계하여 학생 및 일반 사용자의 접근 편의성을 극대화했습니다."
  },
  {
    img: "image/port/KennyBrochure_260521_page-0010.jpg",
    title: "국립국제교육원 국외인적자원시스템",
    shortTitle: "국립국제교육원",
    category: "Responsive Web / 국립국제교육원",
    desc: "글로벌 인적 자원 교류 및 관리를 위한 국가 교육 시스템의 대대적인 고도화 개편을 담당했습니다. 강력한 행정 편의성과 엄격한 웹 표준 및 접근성을 모두 준수한 반응형 프론트엔드 환경을 제공했습니다."
  },
  {
    img: "image/port/KennyBrochure_260521_page-0011.jpg",
    title: "BMW MINI 웹 서비스 구축 & 운영",
    shortTitle: "MINI 웹서비스",
    category: "Web / Mobile Web / BMW MINI",
    desc: "BMW MINI 브랜드의 공식 디지털 허브 채널을 구축하고 고도화 유지보수를 전담했습니다. 브랜드 아이덴티티에 충실한 고급스러운 인터랙션을 완벽하게 퍼블리싱하고 지속적으로 성능을 고도화했습니다."
  },
  {
    img: "image/port/KennyBrochure_260521_page-0012.jpg",
    title: "BMW MINI 공식 액세서리 몰",
    shortTitle: "MINI 액세서리몰",
    category: "Web / Mobile Web / BMW MINI",
    desc: "BMW MINI의 라이프스타일 및 순정 차량 액세서리를 판매하는 공식 온라인 몰을 구축했습니다. 직관적인 상품 탐색 구조와 간편한 결제 프로세스 설계를 통해 사용자의 쇼핑 편의성을 대폭 향상시켰습니다."
  },
  {
    img: "image/port/KennyBrochure_260521_page-0013.jpg",
    title: "청년희망재단 디지털 플랫폼",
    shortTitle: "청년희망재단",
    category: "Web / Mobile / Android / 청년희망재단",
    desc: "청년 일자리 지원과 정보 통합을 위한 디지털 플랫폼을 웹, 모바일, 그리고 네이티브 안드로이드 앱으로 종합 구축했습니다. 구직 활동에 꼭 필요한 맞춤형 채용 추천 알고리즘과 직관적인 이력서 매칭 UX를 디자인하여 청년들과 기업 간의 연결성을 획기적으로 개선했습니다."
  },
  {
    img: "image/port/KennyBrochure_260521_page-0014.jpg",
    title: "KBS 8.15 나는 대한민국 캠페인",
    shortTitle: "KBS 8.15",
    category: "Web / Mobile Web / iOS / Android / KBS",
    desc: "광복 70주년 대국민 축제인 KBS '나는 대한민국'의 캠페인 디지털 허브를 웹, 모바일, 그리고 iOS/안드로이드 앱 패키지로 원스톱 개발했습니다. 수만 명의 사용자가 실시간으로 합창 음원을 제출하고 소통할 수 있는 미디어 파이프라인과 글로벌 투표 시스템을 매끄럽게 구현했습니다."
  },
  {
    img: "image/port/KennyBrochure_260521_page-0015.jpg",
    title: "SK Btv Gamegrid TV 플랫폼 & 웹",
    shortTitle: "Btv Gamegrid",
    category: "Responsive Web / TV Platform / SK텔레콤",
    desc: "Btv 셋톱박스 환경에서 구동되는 클라우드 게임 서비스의 TV 탑재용 UI/UX 디자인 및 소개 반응형 웹을 동시 개발했습니다. 리모컨 조작에 최적화된 직관적인 내비게이션 환경을 구현해 새로운 홈 엔터테인먼트 경험을 선사했습니다."
  },
  {
    img: "image/port/KennyBrochure_260521_page-0016.jpg",
    title: "KBS 역사포털 아카이브",
    shortTitle: "KBS 역사포털",
    category: "Web / Mobile Web / iOS / Android / KBS",
    desc: "방대한 역사 교육 및 다큐멘터리 자료를 손쉽게 탐색할 수 있는 공영방송 역사 아카이브 포털을 PC 및 모바일 멀티 플랫폼에 최적화하여 구축했습니다. 미디어 스트리밍 최적화 기술과 다차원 카테고리 필터 시스템을 적용하여 디지털 교육 접근성을 크게 높였습니다."
  },
  {
    img: "image/port/KennyBrochure_260521_page-0017.jpg",
    title: "경동나비엔 임직원 업무 포털",
    shortTitle: "경동나비엔",
    category: "Responsive Web / 경동나비엔",
    desc: "보일러 업계 글로벌 리더 경동나비엔의 통합 업무 관리 포털 시스템을 반응형 웹으로 새롭게 구축했습니다. 방대한 사내 데이터와 결재 라인을 일목요연하게 파악할 수 있는 효율적인 대시보드 UI를 기획하여 업무 효율성을 혁신했습니다."
  },
  {
    img: "image/port/KennyBrochure_260521_page-0018.jpg",
    title: "보해 '아홉시반 주립대학' 캠페인",
    shortTitle: "아홉시반 캠페인",
    category: "Web / Mobile Web / 보해양조",
    desc: "주류 업계의 가상 대학 콘셉트 마케팅인 보해 '아홉시반 주립대학'의 몰입형 인터랙티브 웹서비스를 개발하여 2014 대한민국 광고대상 '금상'을 수상했습니다. 웹 애니메이션과 학번 발급, 가상 수강신청 등 재치 있는 기믹 요소를 완벽하게 퍼블리싱했습니다."
  },
  {
    img: "image/port/KennyBrochure_260521_page-0019.jpg",
    title: "기획재정부 공공 정책 프로모션",
    shortTitle: "기획재정부",
    category: "Web / Mobile Web / 기획재정부",
    desc: "국가 거시 경제와 공공 정책을 국민에게 친근하게 알리기 위한 기획재정부의 디지털 홍보 웹사이트를 구축했습니다. 어려운 인포그래픽을 알기 쉬운 그래픽과 스크롤 인터랙션으로 구현하여 신뢰도 높은 공공 대국민 소통 채널을 구축했습니다."
  },
  {
    img: "image/port/KennyBrochure_260521_page-0020.jpg",
    title: "CANTV 라이브 비디오 포털",
    shortTitle: "CANTV",
    category: "Web / CANTV",
    desc: "글로벌 멀티미디어 미디어 플랫폼 CANTV의 라이브 비디오 스트리밍 웹 서비스를 구축했습니다. 대용량 미디어 데이터를 지연 없이 빠르게 송출하고 사용자 인터랙션에 반응하는 고가용성의 비디오 포털 UX를 제공했습니다."
  },
  {
    img: "image/port/KennyBrochure_260521_page-0021.jpg",
    title: "기아자동차 K9 골프 프로모션",
    shortTitle: "K9 골프",
    category: "Web / 기아자동차",
    desc: "기아자동차 플래그십 세단 K9 오너들을 위한 골프 인비테이셔널 대회의 공식 디지털 프로모션 사이트를 완벽히 퍼블리싱했습니다. 고품격 브랜드 가치에 걸맞은 품격 있는 비주얼 디자인과 온라인 실시간 예약 시스템을 매끄럽게 연동했습니다."
  },
  {
    img: "image/port/KennyBrochure_260521_page-0023.jpg",
    title: "Minkonet Autobhan Site Design",
    shortTitle: "Autobhan",
    category: "Responsible WEB & APP / Minkonet",
    desc: "민코넷의 글로벌 모바일 게임 방송 및 스트리밍 솔루션 '아우토반(Autobhan)'의 웹 및 앱 통합 디자인을 설계했습니다. 붉은색 톤의 강렬한 브랜딩과 세련된 다크 모드 UI를 기획하고 설계했습니다."
  },
  {
    img: "image/port/KennyBrochure_260521_page-0024.jpg",
    title: "소망화장품 VOICE MIRROR 구축",
    shortTitle: "Voice Mirror",
    category: "Android Application / 소망화장품",
    desc: "뷰티 업계 최초로 음성 반응형 디지털 거울 및 카메라 필터 연동 안드로이드 애플리케이션을 기획 및 구축하여 2014 대한민국 광고대상 '대상'을 수상했습니다. 감각적인 하이엔드 모션 그래픽과 사용자 음성 톤 분석 알고리즘의 결합으로 독보적인 브랜드 경험을 선사했습니다."
  },
  {
    img: "image/port/KennyBrochure_260521_page-0025.jpg",
    title: "IVC 차량제어 솔루션",
    shortTitle: "IVC 차량제어",
    category: "Android Application / IVC",
    desc: "차량의 시동, 도어 제어, 조명, 온도 조절 및 카메라 뷰 등 복잡한 차량 제어 기능을 직관적인 다이얼 및 원형 UX로 풀어낸 안드로이드 애플리케이션 'IVC APPLICATION'을 성공적으로 디자인 및 구축했습니다."
  },
  {
    img: "image/port/KennyBrochure_260521_page-0026.jpg",
    title: "Swing download APP",
    shortTitle: "Swing App",
    category: "Android, iOS / Minkonet",
    desc: "게이머들이 자신의 게임 플레이를 360도 VR 및 실시간 방송으로 스트리밍하고 소셜 미디어(Youtube, Facebook 등)에 공유할 수 있는 미들웨어 솔루션 'swing'의 공식 소개 웹사이트 및 다운로드 앱 페이지를 설계하고 구현했습니다."
  },
  {
    img: "image/port/KennyBrochure_260521_page-0027.jpg",
    title: "NH 바로바로 어플리케이션 구축",
    shortTitle: "NH 바로바로",
    category: "Android, iOS / 농협",
    desc: "농축산물을 빠르고 스마트하게 주문하고 결제할 수 있는 농협의 대표적인 핀테크 모바일 마켓 서비스 'NH 바로바로' 애플리케이션을 구축했습니다. 모바일 결제 최적화 및 직관적인 카테고리 구성으로 누구나 사용하기 편리한 환경을 제공했습니다."
  },
  {
    img: "image/port/KennyBrochure_260521_page-0028.jpg",
    title: "메트라이프 금융 브로셔 제작",
    shortTitle: "메트라이프",
    category: "Print & Web PDF / 메트라이프",
    desc: "메트라이프 금융서비스의 멘토링 시스템 및 FP(Financial Partner) 성공 가이드를 소개하는 고품격 디지털 금융 브로셔 및 프레젠테이션 디자인을 전담 제작했습니다. 깔끔한 블루 톤 테마와 시각화된 인포그래픽을 통해 신뢰감을 극대화했습니다."
  },
  {
    img: "image/port/KennyBrochure_260521_page-0029.jpg",
    title: "멀티 브랜드 웹 프로모션 & 스타트업 플랫폼 구축",
    shortTitle: "직방 · 스텔라",
    category: "WEB, Mobile Web, Tablet / 스텔라, 직방, 송도 Ipark, 라셈드",
    desc: "스텔라 크리스마스 프로모션, 직방 초기 스타트업 플랫폼 런칭, 송도 아이파크 분양 홍보, 그리고 루트로닉의 프리미엄 뷰티 솔루션 '라셈드'의 멀티 디바이스 반응형 웹 및 브랜드 프로모션 환경을 고감도로 구축했습니다."
  },
  {
    img: "image/port/KennyBrochure_260521_page-0030.jpg",
    title: "브랜드 & 엔터프라이즈 디지털 플랫폼 디자인",
    shortTitle: "Style War · PLAN B",
    category: "WEB, Mobile APP, Tablet / Style War, 오늘안치과, 해림덴텍, PLAN B",
    desc: "패션 배틀 플랫폼 '스타일워'의 웹 및 모바일 앱, 첨단 의료 서비스 '오늘안치과' 공식 사이트, 의료 기기 전문 '해림덴텍'의 글로벌 웹, 그리고 기업용 협업 포털 'PLAN B'의 멀티 플랫폼 UI/UX를 세련되게 설계하고 기획했습니다."
  },
  {
    img: "image/port/KennyBrochure_260521_page-0032.jpg",
    title: "IHOA 쇼핑상세 & SNS 비주얼 구축",
    shortTitle: "IHOA",
    category: "Mobile Web, SNS / 아이호아",
    desc: "프리미엄 뷰티 브랜드 '아이호아(IHOA)'의 쇼핑몰 상세 페이지 아키텍처와 감성적인 마케팅 SNS 비주얼 콘텐츠를 기획 및 디자인했습니다. 세련된 타이포그래피와 제품의 프리미엄 성분을 돋보이게 하는 감각적인 그리드 레이아웃을 통해 브랜드 아이덴티티를 확립했습니다."
  },
  {
    img: "image/port/KennyBrochure_260521_page-0033.jpg",
    title: "이커머스 상품 상세 페이지 디자인",
    shortTitle: "Nami 리빙몰",
    category: "Mobile Web, E-Commerce / Nami markets",
    desc: "'나미마켓'에서 유통되는 대표 리빙 상품(창문 틈새 차단 풍지판, 기능성 옥스포드 앞치마, 감성형 불멍가습기)의 네이버 스마트스토어 및 오픈마켓 쇼핑 상세 페이지를 기획하고 고감도로 퍼블리싱했습니다. 사용자의 구매 결정 흐름에 맞춘 레이아웃과 정보 시각화를 통해 전환율을 획기적으로 향상시켰습니다."
  },
  {
    img: "image/port/KennyBrochure_260521_page-0034.jpg",
    title: "겨울 리빙/패션 이커머스 상세 디자인",
    shortTitle: "Nami 패션몰",
    category: "Mobile Web, E-Commerce / Nami markets",
    desc: "겨울 시즌 상품인 프리미엄 방한 패딩바지, 포근 패딩목도리, 미끄럼 방지 양털슬리퍼의 모바일 최적화 쇼핑 상세 페이지를 기획하고 구축했습니다. 보온성과 실용성 등의 상품 셀링 포인트를 그래픽과 아이콘으로 알기 쉽게 전달해 브랜딩 가치를 강화했습니다."
  },
  {
    img: "image/port/KennyBrochure_260521_page-0035.jpg",
    title: "Helvesko 쇼핑상세 구축",
    shortTitle: "Helvesko 쇼핑",
    category: "Mobile Web, E-Commerce / 헬베스코",
    desc: "스위스 프리미엄 컴포트 슈즈 브랜드 '헬베스코(Helvesko)'의 국내 온라인 쇼핑 상세 페이지 및 모바일 웹 콘텐츠를 디자인하고 구축했습니다. 브랜드의 핵심 가치인 친환경 천연 가죽 소재와 스위스 특유 of 장인 정신 기술력을 감각적으로 시각화했습니다."
  },
  {
    img: "image/port/KennyBrochure_260521_page-0036.jpg",
    title: "Helvesko SNS & 모바일 광고 비주얼",
    shortTitle: "Helvesko SNS",
    category: "SNS, Mobile Web / 헬베스코",
    desc: "스위스 컴포트 골프화 브랜드 '헬베스코 골프(Helvesko Golf)'의 SNS 마케팅용 인스타그램 피드 및 모바일 광고 비주얼 디자인을 제작했습니다. 필드의 푸른 감성과 고해상도 제품 실사 컷, 그리고 세련된 타이포그래피를 조화롭게 구성해 스타일리시하고 차별화된 프리미엄 골프 브랜드 이미지를 확립했습니다."
  }
];

if (typeof window !== "undefined") {
  window.portfolioData = portfolioData;
}
