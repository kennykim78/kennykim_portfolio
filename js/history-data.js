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
  { company: "SDU", project: "메인 및 입학지원센터 기획 · 디자인", important: true },
  { company: "Wonderful Indonesia", project: "인도네시아 관광청 모바일 앱 기획 · 디자인", important: true, image: "https://picsum.photos/140/90?random=10", imgWidth: "140px", imgHeight: "90px" },
  { company: "SK telecom Btv", project: "GameGrid Web/TV 플랫폼 디자인 · 퍼블리싱", important: true },
  { company: "국립국제교육원", project: "교육인적자원센터 리뉴얼 기획 · 디자인", important: false, image: "https://picsum.photos/160/100?random=11", imgWidth: "160px", imgHeight: "100px" },
  { company: "UK/CA/AU/Asia Insurance", project: "글로벌 보험 비즈니스 포털 웹서비스 리뉴얼", important: false },
  { company: "Minkonet", project: "Autobahn 사이트 디자인", important: false },
  { company: "SK telecom", project: "내부 영상회의 시스템 ‘together’ 웹 포털 디자인 · 퍼블리싱", important: false, image: "https://picsum.photos/90/90?random=12", imgWidth: "90px", imgHeight: "90px" },
  { company: "용산 ITV", project: "웹/모바일 사이트 디자인 · 퍼블리싱", important: false },
  { company: "Jns factory", project: "‘hereforyou’ 앱 기획 · 디자인 · 퍼블리싱", important: false },
  { company: "경동나비엔", project: "내부 시스템 기획 · 디자인", important: false },
  { company: "한양사이버대학교", project: "포털 시스템 리뉴얼", important: false },
  { company: "영남이공대학교", project: "포털 리뉴얼 기획 · 디자인", important: false },
  { company: "신나는플랫폼", project: "‘smartFIDO’ 앱 기획 · 디자인", important: false },
  { company: "청와대", project: "웹/모바일 서비스 구축 · 운영", important: true, image: "https://picsum.photos/110/110?random=13", imgWidth: "110px", imgHeight: "110px" },
  { company: "Lawfully.com", project: "Android / Web / Mobile Web 구축", important: true },
  { company: "KBS", project: "역사포털 및 광복절 특집 ‘나는 대한민국’ 캠페인 구축", important: true },
  { company: "BMW MINI", project: "온라인 연간 유지보수 · 프로모션", important: true, image: "https://picsum.photos/150/85?random=14", imgWidth: "150px", imgHeight: "85px" },
  { company: "Global Brands", project: "콜롬비아 / 게토레이 / 메트라이프생명 프로모션 구축", important: true },
  { company: "청년희망재단", project: "웹/모바일 서비스 구축 · 운영", important: false },
  { company: "GP Partners", project: "온라인 서비스 구축 · 유지보수", important: false },
  { company: "Suncha", project: "웹/모바일 앱 구축", important: false },
  { company: "한국디자인진흥원", project: "내부 시스템 및 PMS 디자인", important: false },
  { company: "한국콘텐츠진흥원", project: "캐릭터 DB 포털 구축", important: false },
  { company: "보건복지부", project: "공공기관 시스템 디자인 · 구축", important: false }
];

const historyDataBottom = [
  { company: "Riot Games", project: "리그오브레전드 (L.O.L) 오픈 홈페이지 구축 · 제작 관리", important: true },
  { company: "POSCO", project: "포스코 업무정보시스템 PL 및 모바일 앱 제작", important: true },
  { company: "신세계 / 두산 / 진로하이트", project: "대기업 모바일 · 태블릿 앱 제작", important: true },
  { company: "현대상선", project: "기업 사이트 리뉴얼 디자인", important: false },
  { company: "㈜세정", project: "기업 사이트 리뉴얼 · 구축", important: false },
  { company: "KB국민카드", project: "이벤트 프로모션 사이트 제작", important: false, image: "https://picsum.photos/130/80?random=15", imgWidth: "130px", imgHeight: "80px" },
  { company: "NHN Me-today", project: "프로모션 디자인 · 마케팅", important: false },
  { company: "교육과학기술부", project: "SNS 통합 관리 시스템 구축", important: false },
  { company: "낙농자조금협의회", project: "온라인 시스템 · 마케팅 구축", important: false },
  { company: "직방", project: "모바일 앱 초기 버전 기획 · 디자인", important: true, image: "https://picsum.photos/100/100?random=16", imgWidth: "100px", imgHeight: "100px" },
  { company: "Tog", project: "소셜 네트워크 ‘토그(Tog)’ 메인 디자인 · 아트디렉팅", important: false },
  { company: "포스트딜", project: "소셜커머스 ‘포스트딜’ 웹/앱 기획 · 디자인", important: false, image: "https://picsum.photos/120/120?random=17", imgWidth: "120px", imgHeight: "120px" },
  { company: "소셜 커뮤니케이션", project: "아이폰/안드로이드 기반 앱 다수 기획 · 디자인", important: false },
  { company: "WebKit 프로젝트", project: "HTML5/CSS3 모바일 기술 적용", important: false },
  { company: "팀보이스", project: "2.0 UI/API 기획 및 대표 캐릭터 개발", important: true },
  { company: "팀보이스", project: "유료화 및 아이템샵 프로젝트 PM", important: false },
  { company: "Web 2.0 표준화", project: "시맨틱 웹 기반 솔루션 디자인", important: false },
  { company: "AJAX / Flex / Silverlight", project: "UI/UX 디자인 구현", important: false },
  { company: "마레제백화점", project: "백화점 그랜드 오픈 및 시즌 이벤트 광고 기획 · 제작 관리", important: false },
  { company: "마레제백화점", project: "500원 바자회 등 오프라인 이벤트 기획 · 운영", important: false },
  { company: "대한국제물류", project: "웹 리뉴얼 및 마케팅 총괄", important: true },
  { company: "Key Pet", project: "캐릭터 개발 및 저작권 등록", important: true },
  { company: "두산그룹웨어", project: "통합포털 Silverlight 기반 메인 디자인", important: false },
  { company: "로데브", project: "예술 분야 공공기관 웹사이트 유지보수", important: false },
  { company: "호주 비즈니스 사이트", project: "웹사이트 디자인 개발", important: false },
  { company: "C.I / B.I", project: "패키지 디자인 개발", important: false }
];
