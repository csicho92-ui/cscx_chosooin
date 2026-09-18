export const HERO = {
  title: ["고객의 말을 콘텐츠로", "번역하는 마케터, 조수인"],
  lines: [
    "7년간 하루 평균 50건의 고객 목소리를 들었고,",
    "하루 평균 200건에서 수천 건까지의 주문을 처리했습니다.",
    "그 데이터로 SNS 팔로워를 10개월 만에 10배로 키웠습니다.",
  ],
};

// type: "work" 는 궤도를 도는 작업물, "fun" 은 그냥 떠다니는 이모지
// number: 섹션에서 크게 보여줄 숫자 한 줄
// bullets: 문제 → 한 일 → 결과 순서로 3줄
export const ITEMS = [
  {
    id: 1, type: "work", slug: "sns", emoji: "📈",
    label: "SNS 팔로워 1,000 → 10,000",
    number: "10배 / 10개월",
    period: "2024.06 ~ 2026.02 · 메인 담당",
    bullets: [
      "인지도 낮은 공식 채널, 광고 예산 없음",
      "주간 도달률·참여율 분석으로 반응 시간대와 포맷 도출, 댓글·DM을 팬덤 접점으로 운영",
      "10개월 만에 팔로워 10배, 추가 광고 없이 자연 유입 비중 극대화",
    ],
    url: "https://app.notion.com/p/e74f987eedab82ed865481d52ba55c08",
  },
  {
    id: 2, type: "work", slug: "gongu", emoji: "🛒",
    label: "SNS 팬덤을 매출로 — 공동구매 약 90회",
    number: "20개월 · 자사 채널 + 인플루언서 채널",
    period: "2024.06 ~ 2026.02 · 자사 월 1회 + 인플루언서 월 3~4회",
    bullets: [
      "인플루언서는 판매만, 밴더 협의·재고·출고·CS는 전부 내가",
      "동시 3~4건이 겹치는 달에도 결품·배송 관련 강성 클레임 없이 운영, 회차당 최대 1,000만 원대까지",
      "SNS에서 쌓은 신뢰가 실제 구매로 이어짐을 20개월간 검증",
    ],
    url: "https://app.notion.com/p/3dbf987eedab8110b7cfe076e63a343c",
  },
  {
    id: 3, type: "work", slug: "blog", emoji: "✍️",
    label: "네이버 AI 브리핑 인용 10,000회",
    number: "8개월 만에 10,000회",
    period: "2026.01 ~ · 마케팅·AI 블로그",
    bullets: [
      "검색 유입이 키워드 순위에서 AI 답변 인용으로 이동 중",
      "AI 검색 최적화(AEO)를 실무 전에 개인 채널로 직접 검증",
      "마케팅 질문에 AI가 내 글을 답으로 고른다 = 전문성을 제3자가 검증",
    ],
    url: "https://blog.naver.com/whtndls5",
  },
  {
    id: 4, type: "work", slug: "award", emoji: "🏆",
    label: "AI 영상 공모전 최우수상",
    number: "2026 기업 맞춤형 AI 영상 제작 공모전",
    period: "경기북부여성새로일하기센터 · 경기북부상공회의소",
    bullets: [
      "실제 기업 3곳의 홍보영상을 생성형 AI로 제작",
      "'AI 툴을 쓸 줄 안다'가 아니라 기업 니즈를 듣고 영상으로 답함",
      "수상작: 주주콘크리트 기업 홍보영상",
    ],
    url: "https://youtu.be/rPshS8vxwPE",
  },
  {
    id: 5, type: "work", slug: "cs", emoji: "🎧",
    label: "클레임 재발 방지 체계",
    number: "일 50건 × 7년",
    period: "2018.10 ~ 2026.02 · B2C·B2B 클레임 응대, 거래처 20개사",
    bullets: [
      "같은 클레임이 매일 반복 유입",
      "유형별로 정리해 상품 정보·안내 문구 개선안으로 바꿔 유관 부서에 전달",
      "동일 문의 재발 감소, 응대 스크립트 표준화",
    ],
    url: "https://app.notion.com/p/3dbf987eedab8183ba9ae2362b9ae11c",
  },
  {
    id: 6, type: "work", slug: "ads", emoji: "📊",
    label: "광고 운영 · 소재 효율화",
    number: "소재 6종 A/B",
    period: "메타 · 네이버 광고 직접 기획·집행",
    bullets: [
      "예산이 감으로 나뉘고, 어떤 소재가 왜 잘 되는지 설명이 안 됐음",
      "소재 6종을 같은 조건에서 동시 집행, CPC·도달·빈도 비교",
      "저효율 소재 예산을 고효율 소재로 재배분, 네이버 쇼핑 노출 로직에 맞춰 상품명·상세페이지 최적화",
    ],
    url: "https://app.notion.com/p/3dbf987eedab81a4ba94c36642798d64",
  },
  {
    id: 7, type: "work", slug: "web", emoji: "🛠️",
    label: "랜딩 · 앱 직접 빌드",
    number: "앱 3개",
    period: "2026.08 ~ · 클로드코드 부트캠프",
    bullets: [
      "마케팅에서 제일 자주 막히는 지점은 '만들어 줄 사람을 기다리는 시간'",
      "사주·MBTI 소셜 게임 앱, 가계부 앱, 커머스 화면을 React·Expo로 직접 제작",
      "이 페이지도 직접 만들었습니다",
    ],
    url: "https://app.notion.com/p/3b2f987eedab800f94dbf8e5b8c4b1e9",
  },
  {
    id: 8, type: "work", slug: "design", emoji: "🎨",
    label: "디자인 챌린지 100일",
    number: "100일 개근",
    period: "2026.02 ~ 2026.05 · Photoshop · Illustrator · 생성형 AI",
    bullets: [
      "카드뉴스·상세페이지·포스터·패키지 띠지까지 매일 하나씩",
      "기획부터 산출물까지 외주 없이 원스톱 제작 프로세스 내재화",
      "마케팅 메시지를 비주얼로 치환하는 감각",
    ],
    url: "https://app.notion.com/p/fa8f987eedab82f4a7bd01d79b2d2731",
  },

  { id: 11, type: "fun", emoji: "☕" },
  { id: 12, type: "fun", emoji: "🐶" },
  { id: 13, type: "fun", emoji: "🎧" },
  { id: 14, type: "fun", emoji: "🍰" },
  { id: 15, type: "fun", emoji: "🤞" },
  { id: 16, type: "fun", emoji: "🐒" },
  { id: 17, type: "fun", emoji: "🐈" },
  { id: 18, type: "fun", emoji: "🍕" },
  { id: 19, type: "fun", emoji: "🤩" },
];
