// 1회용: 마케터 사이트 content.js 를 읽어 CX 버전 content.js 를 생성
// 사용법: node tools/make-content.js  (이후엔 tools/content.js 만 직접 수정)
const fs = require('fs');
const path = require('path');
const M = require('../../portfolio-site/tools/content.js');
const pick = (slug) => JSON.parse(JSON.stringify(M.projects.find((p) => p.slug === slug)));

// ── 공통 프로젝트: 마케터 버전 상세를 재사용하되 CX 관점으로 제목 · 요약만 바꿈 ──
const voc = pick('voc-system');
Object.assign(voc, {
  featured: true,
  hook: '하루 50건의 클레임을 "처리할 건"이 아니라 "고칠 포인트"로 바꿨습니다.',
  resultShort: '일 50건 × 7년 · 동일 문의 재발 감소',
  field: 'cs', fieldLabel: 'CS · VOC 분석',
});

const b2b = {
  slug: 'b2b-accounts',
  hook: '거래처마다 다른 구매 주기와 이력을 기준으로 맞춤 응대했습니다.',
  resultShort: '거래처 20개사 · 장기 파트너십 유지',
  title: 'B2B 거래처 20개사 관리 — 견적 · 큐레이팅 · 운영 상담',
  short: 'B2B 거래처 관리',
  period: '2018.10 – 2026.02',
  field: 'cs', fieldLabel: 'B2B · 거래처 관리',
  kind: 'work', kindLabel: '실무 프로젝트',
  thumbTitle: '20개사', thumbSub: 'B2B 거래처 · 장기 파트너십',
  problem: '거래처마다 구매 주기 · 선호 상품 · 클레임 이력이 달라 일괄 대응이 통하지 않는 상황에서, 장기 거래를 유지하기',
  role: 'B2B 회원사 운영 상담, 대량 구매 견적, 제품 큐레이팅, 입점사 재고 관리',
  result: '거래처 20개사 장기 파트너십 유지 · 결품 클레임 감소',
  basis: '2018.10 ~ 2026.02 · 담당 거래처 수 기준',
  links: [{ label: '노션 경력기술서', url: 'https://app.notion.com/p/308f987eedab82c6bf0b81e942d5d5ed' }],
  detail: {
    summaryResult: '거래처 20개사 장기 파트너십 유지 · 결품 클레임 감소',
    scope: [
      '대상: B2B 회원사 20개사 (도소매 거래처), 홈쇼핑 · 종합몰 입점사',
      '본인 역할: 운영 상담 · 대량 구매 견적 · 제품 큐레이팅 · 입점사 재고 관리 (1인 담당)',
      '협업: 물류(출고 일정), 상품(신제품 · 단종 정보)',
    ],
    background: [
      '거래처마다 구매 주기, 선호 상품군, 과거 클레임 이력이 달랐습니다. 같은 안내를 일괄로 보내면 어떤 거래처에는 맞지 않는 정보가 갔습니다.',
      '입점사 쪽은 재고 정보가 늦게 공유되면 그대로 결품 클레임으로 돌아왔습니다.',
    ],
    goal: [
      '거래처별 이력을 기준으로 견적 · 제품 추천을 맞춤 제안해 재구매를 유지하기',
      '입점사 재고를 먼저 관리해 결품 클레임을 줄이기',
    ],
    insight: [
      'B2B 고객이 원하는 것은 할인보다 <strong>정확한 납기와 재고 정보</strong>였습니다. 신뢰는 "언제 받을 수 있는지"를 틀리지 않는 데서 쌓였습니다.',
    ],
    strategy: [
      '거래처별 상담 이력(구매 주기 · 선호 상품 · 클레임)을 기준으로 견적과 추천을 다르게 제안',
      '입점사 재고를 데이터로 관리해 결품 가능성이 보이면 먼저 안내',
      '대량 구매 문의는 견적과 함께 대체 상품 · 납기 옵션을 같이 제시',
    ],
    execution: [
      '거래처 20개사 운영 상담 · 대량 구매 견적 · 제품 큐레이팅',
      '홈쇼핑 · 종합몰 입점사 재고를 Excel 기반으로 관리하며 결품 대응',
      '반복되는 거래처 문의를 정리해 안내 자료로 만들어 재문의 감소',
    ],
    results: [
      { b: '거래처 20개사 장기 파트너십 유지', basis: '2018.10 ~ 2026.02 · 담당 거래처 기준' },
      { b: '입점사 결품 클레임 감소', basis: '재고를 데이터로 관리하기 시작한 이후 결품으로 인한 클레임이 눈에 띄게 줄어듦 · 운영 기록 기준' },
    ],
  },
};

const ops = {
  slug: 'order-ops',
  hook: '주문이 밀리면 곧바로 클레임이 되는 구조를 하루 안에 끝나는 흐름으로 바꿨습니다.',
  resultShort: '일 200건 ~ 수천 건 · 국내 출고 + 해외 선적',
  title: '주문 · 출고 · 재고 운영 — 하루 200건이 밀리지 않는 구조',
  short: '주문 · 출고 · 재고 운영',
  period: '2018.10 – 2026.02',
  field: 'ops', fieldLabel: '운영 · 물류',
  kind: 'work', kindLabel: '실무 프로젝트',
  thumbTitle: '일 200건 ~', thumbSub: '피크 시즌 수천 건 · 출고 지연 최소화',
  problem: '주문이 밀리면 곧바로 배송 클레임으로 돌아오는 구조에서, 피크 시즌에도 출고 지연 없이 처리하기',
  role: '소매 주문 수집 · 주문서 발행 · 출고 관리, 입점사 재고 관리, 미주 수출 쉽먼트 리스트 작성',
  result: '일평균 200건, 피크 시즌 수천 건까지 출고 지연 최소화 · 미주 수출 선적 월 1~2건 병행',
  basis: '2018.10 ~ 2026.02 · 내부 주문 처리 기록 기준',
  links: [{ label: '노션 경력기술서', url: 'https://app.notion.com/p/308f987eedab82c6bf0b81e942d5d5ed' }],
  detail: {
    summaryResult: '일평균 200건 ~ 피크 수천 건 처리 · 국내 출고와 미주 수출 선적 병행',
    scope: [
      '범위: 소매 주문 수집 · 주문서 발행 · 출고, 상품 발주부터 출고까지 전 과정, 입점사(홈쇼핑 · 종합몰) 재고 · 출고 대응',
      '해외: 미주 수출 선적을 위한 쉽먼트 리스트 작성 (월 1~2건)',
      '본인 역할: 주문 · 출고 운영 담당 (1인) · 물류 · 상품 부서와 협업',
    ],
    background: [
      '주문이 하루만 밀려도 다음 날 배송 문의와 클레임으로 돌아왔습니다. CS를 맡은 사람이 출고도 맡고 있었기 때문에 그 연결이 바로 보였습니다.',
      '입점사 재고 정보가 늦으면 결품 상태로 주문이 들어와 취소 · 클레임이 생겼습니다.',
    ],
    goal: [
      '주문 수집 → 주문서 발행 → 출고까지 하루 안에 끝나는 흐름 만들기 — 지표: 출고 지연 건, 배송 클레임',
      '입점사 재고를 선제 관리해 결품 주문 줄이기',
    ],
    insight: [
      '출고 지연의 원인은 물량보다 <strong>순서와 정보 공유</strong>였습니다. 재고 확인이 주문 처리보다 먼저 와야 했습니다.',
    ],
    strategy: [
      '오전 주문 수집 → 재고 확인 → 주문서 발행 → 오후 출고로 하루 흐름을 고정',
      '입점사 재고를 데이터로 관리해 결품 가능성이 보이면 판매 채널에 먼저 공유',
      '피크 시즌은 출고 우선순위(배송 약속일 기준)를 정해 클레임이 될 건부터 처리',
    ],
    execution: [
      '일평균 200건 주문 수집 · 주문서 발행 · 출고 관리, 피크 시즌 수천 건 처리',
      '홈쇼핑 · 종합몰 입점사 재고 관리 및 출고 대응',
      '미주 수출 쉽먼트 리스트 작성 (월 1~2건) — 국내 출고와 해외 선적 병행',
    ],
    results: [
      { b: '일평균 200건 ~ 피크 시즌 수천 건 처리', basis: '2018.10 ~ 2026.02 · 내부 주문 처리 기록 기준' },
      { b: '결품 주문 · 배송 클레임 감소', basis: '재고 선제 관리와 출고 순서 고정 이후 · CS 접수 기록 기준' },
    ],
  },
};

const gb = pick('group-buying');
Object.assign(gb, {
  hook: '판매 콘텐츠부터 출고 · CS까지 한 사람이 끝냈습니다.',
  resultShort: '약 90회 · 20개월 · 강성 클레임 없이',
  field: 'commerce', fieldLabel: '커머스 · 공동구매 운영',
});

const sns = pick('sns-channel');
Object.assign(sns, {
  featured: false,
  title: 'VOC를 콘텐츠로 — 공식 SNS 팔로워 1,000명에서 10,000명으로',
  short: 'VOC를 콘텐츠로 · SNS 채널',
  hook: 'CS에서 반복되는 질문에 콘텐츠로 먼저 답했더니 문의는 줄고 팔로워는 늘었습니다.',
  resultShort: '팔로워 1,000 → 10,000 · 10개월',
  field: 'cs', fieldLabel: 'VOC → 콘텐츠',
});

const proc = {
  slug: 'ops-process',
  hook: '반복 업무는 사람이 아니라 체계가 지키게 했습니다.',
  resultShort: '체크리스트 · 운영 캘린더 · 준비 누락 최소화',
  title: '운영 프로세스 설계 — 체크리스트로 강의 준비 누락 최소화',
  short: '운영 프로세스 설계',
  period: '2017.03 – 2018.02',
  field: 'ops', fieldLabel: '운영 · 프로세스',
  kind: 'work', kindLabel: '실무 프로젝트',
  thumbTitle: '누락 최소화', thumbSub: '체크리스트 · 운영 캘린더 · 1년',
  problem: '강의 준비 누락이 강사 불만과 수업 차질로 직결되는 상황에서, 담당자가 바뀌어도 유지되는 운영 체계 만들기',
  role: '배재대학교 행정조교 · 학생 · 강사 관리, 수업 지원, 학과 인증 · 지원금 관리, 대학원 행정',
  result: '체크리스트 · 수업자료 사전 안내 · 운영 캘린더 도입, 1년간 강의 준비 누락 최소화',
  basis: '2017.03 ~ 2018.02 · 학과 운영 기록 기준',
  links: [],
  detail: {
    summaryResult: '체크리스트 · 운영 캘린더 도입 → 1년간 강의 준비 누락 최소화, 강사 만족도 향상',
    scope: [
      '대상: 학과 개설 강의 전체, 강사 · 학생 · 대학원 행정',
      '본인 역할: 행정조교 (1인) — 강의 운영 지원, 학과 인증 · 지원금 관리',
    ],
    background: [
      '강의 준비물 · 자료 · 일정이 담당자 기억에 의존하고 있어, 누락이 생기면 강사 불만과 수업 차질로 바로 이어졌습니다.',
    ],
    goal: [
      '준비 누락을 사람 기억이 아니라 체계로 막기 — 지표: 준비 누락 건, 강사 피드백',
    ],
    strategy: [
      '강의별 체크리스트를 만들어 준비 항목을 고정',
      '수업 자료를 사전에 안내해 당일 요청을 줄임',
      '일정별 운영 캘린더로 누가 봐도 다음 할 일이 보이게',
    ],
    execution: [
      '체크리스트 · 수업자료 사전 안내 · 일정별 운영 캘린더 운영',
      '학과 인증 · 지원금 관리, 대학원 행정 병행',
    ],
    results: [
      { b: '1년간 강의 준비 누락 최소화', basis: '2017.03 ~ 2018.02 · 학과 운영 기록 기준' },
      { b: '강의 품질 안정화 · 강사 만족도 향상', basis: '강사 피드백 기준' },
    ],
  },
};

const video = pick('ai-video');
Object.assign(video, { field: 'creative', fieldLabel: 'AI 콘텐츠 · 영상' });

const web = pick('web-building');
Object.assign(web, {
  title: '웹빌딩 — FAQ · 안내 페이지를 외주 없이 직접 만들고 고치기',
  short: '웹빌딩 (FAQ · 안내 페이지)',
  hook: '고객 안내 페이지 하나 고치려고 개발 일정을 기다리는 시간을 없애고 싶었습니다.',
  field: 'creative', fieldLabel: '웹 · 앱 프로토타입',
});
web.detail.background = [
  '개발자가 되려는 것이 아닙니다. 고객 안내 · FAQ · 공지 페이지 하나를 고치려고 개발 일정을 기다려야 했고, 그 시간을 없애기 위해 배웠습니다.',
];
web.detail.goal = ['FAQ · 공지 · 이벤트 안내 페이지와 간단한 앱을 외주 없이 직접 만들고 고칠 수 있는 수준'];
web.detail.results[1] = { b: '개발팀과의 대화 속도', basis: '페이지 하나에 필요한 일의 양을 알게 되어 "가능한 것 / 비싼 것"을 구분해 요청할 수 있게 됨' };

const projects = [voc, b2b, ops, gb, sns, proc, video, web];

const C = {
  site: {
    name: M.site.name,
    role: '고객관리 · CX',
    roleEn: 'Customer Experience',
    email: M.site.email,
    baseUrl: '',
    resume: { file: 'resume.pdf', ready: false },
    channels: [
      { label: '노션 포트폴리오', sub: '프로젝트 상세 · 경력기술서 원본', url: 'https://app.notion.com/p/a61f987eedab83eebe1781424f65bc0c', icon: 'notion' },
      { label: '네이버 블로그', sub: 'blog.naver.com/whtndls5 — 마케팅 · AI', url: 'https://blog.naver.com/whtndls5', icon: 'blog' },
    ],
  },
  intro: {
    headline: '고객의 불만을 <span class="mark">개선 포인트로 바꾸는</span> 사람입니다.',
    lead: '7년간 하루 평균 50건의 클레임을 응대하고 B2B 거래처 20개사를 관리했습니다. 고객 접점에서 얻은 데이터를 상품 · 안내 · 콘텐츠 개선으로 되돌려 보냈습니다.',
    sub: [
      '7년간 이커머스 유통사에서 <strong>하루 평균 50건의 클레임</strong>을 채팅 · 메일 · 유선으로 응대하고, <strong>B2B 거래처 20개사</strong>를 관리했습니다.',
      '하루 평균 200건에서 수천 건까지의 주문을 문제없이 처리했고, 공동구매 약 90회를 콘텐츠부터 출고 · CS까지 한 사람이 끝까지 실행했습니다.',
    ],
    keywords: ['클레임 응대 · VOC 분석', 'B2B 거래처 관리', '주문 · 출고 · 재고 운영'],
    metrics: [
      { slug: 'voc-system', label: '클레임 응대', pre: '7년간 하루 평균', num: '50', unit: '건', story: '채팅 · 메일 · 유선으로 들어오는 클레임을 응대하는 데서 그치지 않고, 반복 유형을 정리해 상품 정보와 안내 문구 개선안으로 바꿔 전달했습니다.' },
      { slug: 'b2b-accounts', label: 'B2B 거래처', pre: '장기 파트너십', num: '20', unit: '개사', story: '거래처마다 다른 구매 주기와 이력을 기준으로 견적과 제품 추천을 맞춤 제안했습니다. 정확한 납기 · 재고 안내가 신뢰를 만들었습니다.' },
      { slug: 'group-buying', label: '공동구매 운영', pre: '20개월 동안 약', num: '90', unit: '회', story: '약 90회를 운영하는 동안 결품이나 배송으로 인한 강성 클레임 없이 운영했습니다. 재고를 먼저 확정하고 콘텐츠를 만드는 순서를 지켰습니다.' },
    ],
  },
  fields: [
    { key: 'cs', label: 'CS · VOC' },
    { key: 'ops', label: '운영 · 물류' },
    { key: 'commerce', label: '커머스 · 공동구매' },
    { key: 'creative', label: 'AI · 제작' },
  ],
  projects,
  approach: [
    {
      title: '클레임을 "처리할 건"이 아니라 "고칠 포인트"로 봅니다',
      what: '반복되는 클레임을 유형화하고, 상품 정보 · 안내 문구 개선안으로 바꿔 유관 부서에 전달합니다.',
      cases: [{ slug: 'voc-system', label: '클레임 재발 방지 체계' }],
      learned: '고객의 불만 대부분은 "우리가 미리 말해주지 않은 것"에서 나왔습니다. 개선안이 반영되면 같은 문의가 줄었습니다.',
    },
    {
      title: '정확한 납기와 재고 정보가 신뢰를 만듭니다',
      what: '거래처별 이력을 기준으로 맞춤 제안하고, 결품 가능성이 보이면 먼저 안내합니다.',
      cases: [{ slug: 'b2b-accounts', label: 'B2B 거래처 20개사' }, { slug: 'order-ops', label: '주문 · 출고 · 재고 운영' }],
      learned: 'B2B 고객이 원하는 것은 할인보다 "언제 받을 수 있는지"를 틀리지 않는 것이었습니다.',
    },
    {
      title: '순서를 지키면 클레임이 줄어듭니다',
      what: '재고를 먼저 확정하고 콘텐츠를 만들고, 오전 수집 → 오후 출고처럼 하루 흐름을 고정합니다.',
      cases: [{ slug: 'group-buying', label: '공동구매 운영 약 90회' }, { slug: 'ops-process', label: '운영 프로세스 설계' }],
      learned: '출고 지연의 원인은 물량보다 순서와 정보 공유였습니다. 체계가 사람 기억을 대신하게 했습니다.',
    },
    {
      title: '고객이 묻기 전에 답합니다',
      what: 'CS에서 반복되는 질문을 콘텐츠와 안내 페이지로 먼저 답하고, 필요하면 페이지를 직접 만들어 고칩니다.',
      cases: [{ slug: 'sns-channel', label: 'VOC를 콘텐츠로' }, { slug: 'web-building', label: 'FAQ · 안내 페이지 직접 제작' }],
      learned: '문의는 줄고 신뢰는 올라갔습니다. 안내 페이지는 외주 없이 당일에 띄우고 고칠 수 있습니다.',
    },
  ],
  stack: ['Excel (수식 · 피벗)', '채팅 · 메일 · 유선 CS', '쿠팡 · 홈쇼핑 · 종합몰 입점 운영', '네이버 스마트스토어', '인스타그램', 'Photoshop', 'CapCut', 'Gemini · ChatGPT · Claude', 'Notion', 'HTML / CSS / JS', 'React · Next.js', 'Claude Code'],
  about: {
    oneLiner: '주문 · 출고 → CS → B2B 영업지원 → SNS · 공동구매까지, 고객 접점에서 시작해 운영 전체로 넓혀 왔습니다.',
    intro: [
      '주문 · 출고 운영에서 시작해 CS → B2B 영업지원 → SNS 채널 운영 · 공동구매까지 담당 범위를 넓혔습니다. 고객 접점에서 얻은 데이터를 상품 · 안내 · 콘텐츠 개선으로 되돌려 보내는 방식으로 일해 왔습니다.',
      '관심 있는 문제는 <strong>"같은 불만이 다시 들어오지 않게 하려면 무엇을 고쳐야 하는가"</strong>입니다. 응대 품질을 사람에 따라 달라지지 않게 만들고, 클레임이 개선으로 이어지는 구조를 만드는 일을 하고 싶습니다.',
    ],
    history: JSON.parse(JSON.stringify(M.about.history)).map((h) => {
      if (/행정조교/.test(h.title)) h.items = ['체크리스트 · 운영 캘린더 도입으로 강의 준비 누락 최소화 → <a href="projects/ops-process/">운영 프로세스 설계</a>'];
      if (/필국제무역/.test(h.title)) h.items = [
        'B2C · B2B 클레임 응대 (일평균 50건), 거래처 20개사 관리, VOC 분석 · 개선안 전달',
        '주문 수집 · 출고 (일평균 200건), 입점사 재고 관리, 미주 수출 선적 서류',
        '공식 SNS 운영, 메타 · 네이버 광고, 공동구매 약 90회 총괄',
      ];
      return h;
    }),
  },
  contact: M.contact,
};

const out = '// ============================================================\n// 고객관리 · CX 포트폴리오 콘텐츠 — 이 파일만 수정하고 `node tools/build.js` 실행\n// (최초 생성: tools/make-content.js 로 마케터 버전에서 변환)\n// ============================================================\n\nmodule.exports = ' + JSON.stringify(C, null, 2) + ';\n';
fs.writeFileSync(path.join(__dirname, 'content.js'), out);
console.log('written tools/content.js —', projects.length, 'projects');
