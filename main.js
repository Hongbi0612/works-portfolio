/* =========================================================
   Works Portfolio — 데이터 & 라우팅
   갤러리(#/) → 클릭 → 상세(#/p/<id>)
   앱 추가: 아래 PROJECTS 배열에 객체 하나만 추가하세요.
   텍스트는 { ko, jp } 로 쓰면 언어 토글에 자동 반영됩니다.

   ▸ 각 프로젝트의 "동작 화면"은 실제 라이브 앱을 그대로 재현한
     HTML 목업(SCREENS)입니다. 진짜 스크린샷 PNG로 바꾸려면
     screens[].img 에 이미지 경로를 넣으면 목업 대신 이미지를 씁니다.
   ========================================================= */

const I18N = {
  "a11y.skip": { ko: "본문으로 건너뛰기", jp: "本文へスキップ" },
  "gallery.title": { ko: "기획하고, 직접 만든 것들", jp: "企画して、自分で作ったもの" },
  "gallery.desc": {
    ko: "무엇을, 왜 만들었고 실제로 어떻게 움직이는지 — 카드를 눌러 확인하세요.",
    jp: "何を、なぜ作り、実際にどう動くのか — カードを押してご覧ください。"
  },
  "thumb.more": { ko: "자세히 보기", jp: "詳しく見る" },
  "next.title": { ko: "다음 작업 진행 중", jp: "次の作品を制作中" },
  "next.desc": { ko: "새 앱을 만들 때마다 여기에 추가됩니다.", jp: "新しいアプリを作るたびに、ここに追加されます。" },
  "detail.back": { ko: "작업 목록", jp: "作品一覧" },
  "detail.bg": { ko: "왜 만들었나", jp: "なぜ作ったか" },
  "detail.decisions": { ko: "기획 포인트", jp: "企画のポイント" },
  "detail.screens": { ko: "실제로 어떻게 움직이나", jp: "実際にどう動くか" },
  "detail.roadmap": { ko: "앞으로 (구현 예정)", jp: "今後（実装予定）" },
  "detail.about": { ko: "개요", jp: "概要" },
  "detail.platform": { ko: "플랫폼", jp: "プラットフォーム" },
  "detail.stack": { ko: "기술", jp: "技術" },
  "detail.status": { ko: "상태", jp: "状態" },
  "detail.prev": { ko: "이전", jp: "前へ" },
  "detail.next": { ko: "다음", jp: "次へ" },
  "screens.note": {
    ko: "* 실제 라이브 앱 화면을 재현한 예시입니다.",
    jp: "* 実際のライブアプリ画面を再現した例です。"
  },
};

/* =========================================================
   실제 화면 재현 (폰 목업) — 앱 UI는 실제 언어(한국어) 그대로
   ========================================================= */
const SCREENS = {
  /* ---------- PetMemoir ---------- */
  "pm-list": `
    <div class="ph-app pm">
      <div class="pm-nav"><span class="pm-logo">🐾 PetMemoir</span><span class="pm-nick">✏️ 닉네임 설정</span></div>
      <div class="pm-main">
        <div class="pm-row"><b class="pm-title">내 반려동물</b><span class="pm-acts"><span class="pm-ghost">코드 입력</span><span class="pm-btn">+ 등록</span></span></div>
        <div class="pm-pet"><span class="pm-ava">🐾</span><div class="pm-pet-t"><b>몽이</b><span class="pm-date">2022-04-10</span><span class="pm-sub">겁 많지만 애교 넘치는 골든리트리버…</span></div></div>
        <div class="pm-pet"><span class="pm-ava">🐾</span><div class="pm-pet-t"><b>종이호랑이</b><span class="pm-date">2023-05-23</span><span class="pm-sub">망</span></div></div>
      </div>
    </div>`,
  "pm-timeline": `
    <div class="ph-app pm">
      <div class="pm-nav"><span class="pm-logo">🐾 PetMemoir</span><span class="pm-nick">✏️ 닉네임</span></div>
      <div class="pm-main">
        <div class="pm-pethead"><span class="pm-ava">🐾</span><div><b class="pm-title">몽이</b><span class="pm-sub">겁 많지만 애교 넘치는 골든리트리버…</span></div></div>
        <div class="pm-toolbar"><span class="pm-chip">👪 가족 ▾</span><span class="pm-btn">+ 에피소드</span></div>
        <div class="pm-recovery">⚙ 안전하게 보관 (복구 코드)</div>
        <div class="pm-tl">
          <div class="pm-ep"><div class="pm-ep-h"><span class="pm-date">2024년 4월 10일</span><span class="pm-owner">소유자</span></div><b>두 번째 생일</b><p>고구마 케이크 앞에서 세상 진지한 표정. 두 살 축하해, 몽이야.</p><span class="pm-cmt">💬 댓글 0</span></div>
          <div class="pm-ep"><div class="pm-ep-h"><span class="pm-date">2023년 11월 20일</span><span class="pm-owner">소유자</span></div><b>동물병원 다녀온 날</b><p>예방접종하러 간 날. 잔뜩 겁먹은 표정이었지만 간식 하나에 금방 씩씩해졌다.</p><span class="pm-cmt">💬 댓글 0</span></div>
          <div class="pm-ep"><div class="pm-ep-h"><span class="pm-date">2023년 1월 3일</span><span class="pm-owner">소유자</span></div><b>첫 눈, 첫 겨울</b><p>눈밭에 코를 박고 킁킁. 하얀 눈 위에 남은 네 발자국이 꼭 그림 같았다.</p><span class="pm-cmt">💬 댓글 0</span></div>
        </div>
      </div>
    </div>`,
  "pm-form": `
    <div class="ph-app pm">
      <div class="pm-nav"><span class="pm-logo">🐾 PetMemoir</span><span class="pm-nick">✏️ 닉네임</span></div>
      <div class="pm-main">
        <b class="pm-title">에피소드 기록</b>
        <label class="pm-lab">날짜</label><div class="pm-field">2024 / 04 / 10 &nbsp;📅</div>
        <label class="pm-lab">제목 *</label><div class="pm-field">두 번째 생일</div>
        <label class="pm-lab">내용</label><div class="pm-field pm-area">고구마 케이크 앞에서 세상 진지한 표정. 두 살 축하해, 몽이야.</div>
        <label class="pm-lab">공개 범위</label>
        <div class="pm-radio"><span class="pm-r on">◉ 그룹 공개</span><span class="pm-r">○ 개인</span></div>
        <div class="pm-hint">개인으로 남기면 나만 볼 수 있어요.</div>
        <div class="pm-photo">사진 추가</div>
        <div class="pm-save">저장하기</div>
      </div>
    </div>`,

  /* ---------- readdasom (Booky) ---------- */
  "rd-splash": `
    <div class="ph-app rd rd-center">
      ${rdShelfSVG(96)}
      <div class="rd-brand">Booky</div>
      <div class="rd-slogan">나만의 책장 관리</div>
      <div class="rd-sub">읽은 책을 한 권씩 꽂아두고<br/>친구가 다음 책을 추천해줘요</div>
      <div class="rd-cta">로그인 없이 시작하기</div>
      <div class="rd-cta ghost"><span class="g-ico">G</span> 구글로 로그인하기</div>
      <div class="rd-fine">로그인하면 기기가 바뀌어도 책장이 유지돼요</div>
    </div>`,
  "rd-shelf": `
    <div class="ph-app rd">
      <div class="rd-top"><div><div class="rd-ey">BOOKY</div><b class="rd-h">다솜의 책장</b></div><span class="rd-plus">+</span></div>
      <div class="rd-prog"><span>4권 읽음</span><span>16권 남음 · 20%</span></div>
      <div class="rd-bar"><i style="width:20%"></i></div>
      <div class="rd-frame">
        <div class="rd-moon">🌙</div>
        <div class="rd-shelfrow">
          <div class="rd-spine"><span class="rd-mk"></span><span class="rd-mk"></span><span class="rd-mk"></span><span class="rd-mk"></span><span class="rd-mk"></span></div>
          <div class="rd-hbook"><span class="rd-mk"></span><span class="rd-mk"></span><span class="rd-mk"></span></div>
        </div>
        <div class="rd-shelfrow">
          <div class="rd-hbook"><span class="rd-mk"></span><span class="rd-mk"></span><span class="rd-mk"></span><span class="rd-mk"></span></div>
          <div class="rd-spine"><span class="rd-mk"></span><span class="rd-mk"></span><span class="rd-mk"></span></div>
        </div>
        <div class="rd-shelfrow"></div>
      </div>
      <div class="rd-tabs"><span class="on">📖<br/>서재</span><span>🗂<br/>카드</span><span>🌱<br/>꾸미기</span><span>⚙<br/>설정</span></div>
    </div>`,
  "rd-search": `
    <div class="ph-app rd">
      <div class="rd-dim">
        <div class="rd-top"><div><div class="rd-ey">BOOKY</div><b class="rd-h">다솜의 책장</b></div><span class="rd-plus">+</span></div>
        <div class="rd-frame short"><div class="rd-moon">🌙</div><div class="rd-shelfrow"></div><div class="rd-shelfrow"></div></div>
      </div>
      <div class="rd-sheet">
        <div class="rd-searchbar"><span class="rd-input">어린 왕자</span><span class="rd-search-btn">검색</span></div>
        <div class="rd-result"><span class="rd-cover c1">어린<br/>왕자</span><div class="rd-res-t"><b>어린 왕자</b><span>앙투안 드 생텍쥐페리</span></div><span class="rd-pick">선택</span></div>
        <div class="rd-result"><span class="rd-cover c2">Le<br/>Petit</span><div class="rd-res-t"><b>어린 왕자 (초판본)</b><span>앙투안 드 생텍쥐페리</span></div><span class="rd-pick">선택</span></div>
        <div class="rd-result"><span class="rd-cover c3">어린<br/>왕자</span><div class="rd-res-t"><b>어린왕자 (미니북)</b><span>앙투안 드 생텍쥐페리</span></div><span class="rd-pick">선택</span></div>
      </div>
    </div>`,
  "rd-review": `
    <div class="ph-app rd">
      <div class="rd-sheet full">
        <div class="rd-sheet-h">← 소감 남기기</div>
        <div class="rd-bookcard"><span class="rd-cover c1">데미안</span><div class="rd-res-t"><b>데미안</b><span>헤르만 헤세</span><span class="rd-genre">📖 소설 ✎</span></div></div>
        <div class="rd-qlabel">책장에 어떻게 꽂을까요?</div>
        <div class="rd-orient"><span class="on">📚<br/>세로로 꽂기</span><span>📖↓<br/>가로(아래)</span><span>📖↑<br/>가로(위)</span></div>
        <div class="rd-qlabel">이 책 얼마나 재밌었나요?</div>
        <div class="rd-rate"><span>🔖</span><span>🔖</span><span>🔖</span><span>🔖</span><span class="on">🔖</span></div>
        <div class="rd-area">나를 깨뜨리고 나온 새 한 마리.</div>
        <div class="rd-place">책장에 꽂기 📚</div>
      </div>
    </div>`,
  "rd-card": `
    <div class="ph-app rd rd-cardview">
      <div class="rd-cardclose">✕</div>
      <div class="rd-card">
        <div class="rd-card-head">
          <div><div class="rd-ey">BOOKY</div><b class="rd-card-h">다솜의 책장</b><div class="rd-card-date">2026년 7월 9일</div></div>
          <span class="rd-card-moon">🌙</span>
        </div>
        <div class="rd-card-shelf">
          <div class="rd-shelfrow">
            <div class="rd-spine"><span class="rd-mk"></span><span class="rd-mk"></span><span class="rd-mk"></span><span class="rd-mk"></span><span class="rd-mk"></span></div>
            <div class="rd-hbook"><span class="rd-mk"></span><span class="rd-mk"></span><span class="rd-mk"></span></div>
          </div>
          <div class="rd-shelfrow"><div class="rd-hbook"><span class="rd-mk"></span><span class="rd-mk"></span><span class="rd-mk"></span><span class="rd-mk"></span></div></div>
        </div>
        <div class="rd-card-foot">
          <span class="rd-card-genre">● 기타</span>
          <div class="rd-card-count"><b>4</b> <span>/20권 읽음</span></div>
          <span class="rd-card-brand">booky.app</span>
        </div>
      </div>
      <div class="rd-card-save">📸 이미지로 저장</div>
    </div>`,

  /* ---------- pasyamon (Cozy Village) ---------- */
  "cv-onboarding": `
    <div class="ph-app cv cv-onboard">
      <div class="cv-big">🏡</div>
      <div class="cv-brand">pasyamon</div>
      <p class="cv-lead">현실에서 마주친 동물·벌레·사람을 사진으로 포착하면,<br/>카드가 되어 나만의 마을에서 살아 움직여요.</p>
      <label class="cv-olab">마을 이름</label>
      <div class="cv-oinp">하린이의 숲</div>
      <label class="cv-olab">마을 테마</label>
      <div class="cv-themepick"><span class="on">🌳 숲마을</span><span>🗡️ 거친 마을</span><span>❄️ 눈마을</span></div>
      <div class="cv-cta">🌱 마을 만들기</div>
      <div class="cv-link">이미 마을이 있나요? 코드로 복구</div>
    </div>`,
  "cv-village": `
    <div class="ph-app cv">
      <div class="cv-top">
        <span class="cv-ttl">🏡 하린이의 숲</span><span class="cv-sp"></span>
        <span class="cv-gbtn">🌳</span><span class="cv-gbtn">☁️</span><span class="cv-gbtn">🎨</span><span class="cv-gbtn">🎴</span>
        <span class="cv-cap">📷 포착</span>
      </div>
      <div class="cv-ground">
        <span class="cv-deco" style="left:14px;top:16px;font-size:24px">🌳</span>
        <span class="cv-deco" style="right:16px;top:26px;font-size:22px">🌲</span>
        <span class="cv-deco" style="left:40%;top:12px">🌻</span>
        <span class="cv-deco" style="left:20px;bottom:60px">🪨</span>
        <span class="cv-deco" style="right:30px;bottom:96px">🌸</span>
        <span class="cv-cre" style="left:30%;top:38%"><span class="cv-body">🐈</span><span class="cv-shadow"></span></span>
        <span class="cv-cre" style="left:58%;top:30%"><span class="cv-body">🦋</span><span class="cv-shadow"></span></span>
        <span class="cv-cre leg" style="left:44%;top:56%"><span class="cv-pin">👑</span><span class="cv-body">🐕</span><span class="cv-shadow"></span></span>
        <span class="cv-cre" style="left:70%;top:60%"><span class="cv-body">🐿️</span><span class="cv-shadow"></span></span>
        <div class="cv-hint">주민을 탭하면 카드가 열려요 🐾</div>
      </div>
    </div>`,
  "cv-capture": `
    <div class="ph-app cv cv-stage">
      <div class="cv-top"><span class="cv-gbtn wide">← 취소</span><span class="cv-ttl2">생명체 카드화</span></div>
      <div class="cv-stagearea">
        <div class="cv-rays"></div>
        <div class="cv-banner">★ 레전더리 ★</div>
        ${cvCard("r5", "🐈", "?", 5, "#012", "2026.07.14")}
      </div>
      <div class="cv-result">
        <div class="cv-inp">이름 지어주기 (선택)</div>
        <div class="cv-inp">특징 한 줄 (선택) 예: 낮잠 자던 길냥이</div>
        <div class="cv-keep">🏡 마을에 보관하기</div>
      </div>
    </div>`,
  "cv-collection": `
    <div class="ph-app cv">
      <div class="cv-top"><span class="cv-gbtn wide">← 마을</span><span class="cv-ttl2">🎴 내 컬렉션</span></div>
      <div class="cv-filter">
        <span class="cv-chip on">전체</span><span class="cv-chip">5★</span><span class="cv-chip">4★</span><span class="cv-chip">3★</span><span class="cv-chip">2★</span>
        <span class="cv-sort">최신순 ▾</span>
      </div>
      <div class="cv-grid">
        ${cvMini("r5", "🐈", "레옹", 5)}
        ${cvMini("r3", "🦋", "나비", 3)}
        ${cvMini("r2", "🐿️", "도토리", 2)}
        ${cvMini("r4", "🦆", "꽥이", 4)}
        ${cvMini("r1", "🐌", "느림", 1)}
        ${cvMini("r3", "🐝", "붕붕", 3)}
      </div>
    </div>`,
  "cv-detail": `
    <div class="ph-app cv cv-detailview">
      ${cvCard("r5", "🐈", "레옹", 5, "#012", "2026.07.14")}
      <div class="cv-dmeta">
        <div class="cv-dname">레옹</div>
        <div class="cv-ddesc">★★★★★ 레전더리 · 12번째 주민</div>
        <div class="cv-dtraits">낮잠 자던 길냥이</div>
      </div>
      <div class="cv-dactions"><span class="cv-dbtn ghost">✏️ 편집</span><span class="cv-dbtn main">닫기</span></div>
    </div>`,
};

/* pasyamon 카드/미니카드 헬퍼 (등급 프레임 재현) */
function cvStars(n) {
  return "★".repeat(n) + "<span class='cv-star-off'>" + "★".repeat(5 - n) + "</span>";
}
function cvCard(rarity, emoji, name, stars, dex, date) {
  return `<div class="cv-card ${rarity}">
      <div class="cv-c-head"><span class="cv-c-name">${name}</span><span class="cv-c-stars">${cvStars(stars)}</span></div>
      <div class="cv-c-art">${emoji}</div>
      <div class="cv-c-foot"><span>${dex}</span><span>${date}</span></div>
    </div>`;
}
function cvMini(rarity, emoji, name, stars) {
  return `<div class="cv-mini ${rarity}">
      <div class="cv-mini-art">${emoji}</div>
      <div class="cv-mini-b"><span>${name}</span><span class="cv-mini-stars">${cvStars(stars)}</span></div>
    </div>`;
}

function rdShelfSVG(size) {
  return `<svg class="rd-illust" width="${size}" height="${size}" viewBox="0 0 100 100" aria-hidden="true">
    <defs><linearGradient id="rdsp" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a78bfa"/><stop offset="1" stop-color="#6d4bd6"/></linearGradient></defs>
    <rect x="14" y="18" width="72" height="64" rx="9" fill="none" stroke="#7c5cff" stroke-width="3"/>
    <rect x="20" y="24" width="60" height="52" rx="4" fill="#160c34"/>
    <g fill="url(#rdsp)">
      <rect x="26" y="30" width="6" height="20" rx="1.5"/><rect x="34" y="34" width="6" height="16" rx="1.5"/>
      <rect x="42" y="28" width="6" height="22" rx="1.5"/><rect x="50" y="33" width="6" height="17" rx="1.5"/>
      <rect x="58" y="30" width="6" height="20" rx="1.5"/>
      <rect x="26" y="56" width="6" height="18" rx="1.5"/><rect x="34" y="58" width="6" height="16" rx="1.5"/>
      <rect x="50" y="56" width="6" height="18" rx="1.5"/><rect x="58" y="58" width="6" height="16" rx="1.5"/>
    </g>
    <rect x="42" y="59" width="16" height="6" rx="1.5" fill="#ded7ff" transform="rotate(-16 50 62)"/>
    <line x1="20" y1="52" x2="80" y2="52" stroke="#7c5cff" stroke-width="2"/>
    <circle cx="74" cy="26" r="7" fill="#f6c453"/><circle cx="71" cy="24" r="6" fill="#160c34"/>
  </svg>`;
}

/* =========================================================
   프로젝트 (여기에 앱을 추가하세요)
   ========================================================= */
const PROJECTS = [
  {
    id: "petmemoir",
    name: "PetMemoir",
    theme: "pm",
    concept: { ko: "반려동물 기록 웹앱", jp: "ペット記録ウェブアプリ" },
    status: "live",
    badge: { ko: "LIVE 운영 중", jp: "LIVE 稼働中" },
    hero: "pm-timeline",
    tagline: {
      ko: "반려동물과의 기억을 시간축 연재 작품으로 남기는 웹앱",
      jp: "ペットとの記憶を時間軸の連載作品として残すウェブアプリ"
    },
    background: {
      ko: "반려동물이 곁을 떠났을 때의 그리움은 생각보다 큽니다. 그런데 함께한 순간들은 사진첩 여기저기에 흩어진 채 점점 흐려지죠. ‘더 자주, 더 많이 남겨둘걸’ 하는 후회를 줄이고 싶었습니다. 그래서 거창한 기록이 아니라, 잊기 전에 가볍게·자주 남기는 것을 목표로 삼았어요. 기존 앱들이 ‘건강 기록’, ‘AI 사진 변환’, ‘커뮤니티’로 나뉘어 있던 것과 달리, 함께한 이야기를 시간 순서로 한곳에 쌓아두는 데 집중했습니다.",
      jp: "ペットが旅立ったときの寂しさは、思ったより大きいものです。けれど一緒に過ごした瞬間は、アルバムのあちこちに散らばったまま少しずつ薄れていきます。『もっと頻繁に、もっとたくさん残しておけば』という後悔を減らしたかった。だから大げさな記録ではなく、忘れる前に気軽に・こまめに残すことを目標にしました。既存アプリが「健康記録」「AI写真変換」「コミュニティ」に分かれていたのと違い、一緒の物語を時間順に一箇所へ積み上げることに集中しました。"
    },
    roadmap: {
      note: {
        ko: "지금은 ‘가볍게 자주 기록하기’에 집중하고 있고, 아래 기능은 나중에 구현할 예정입니다.",
        jp: "今は『気軽にこまめに記録する』ことに集中していて、下の機能は今後実装予定です。"
      },
      items: {
        ko: ["사진·영상을 만화/일러스트풍으로 바꾸는 AI 변환", "추억을 네컷 만화로 자동 구성"],
        jp: ["写真・動画をマンガ/イラスト風に変える AI 変換", "思い出を4コマ漫画に自動構成"]
      }
    },
    decisions: {
      ko: [
        { point: "로그인 화면을 아예 없앴다 (익명 인증)", why: "기록은 마음먹은 순간 3초 안에 시작돼야 합니다. 회원가입은 그 자체로 가장 큰 이탈 지점이라, 접속하면 바로 쓸 수 있게 했어요." },
        { point: "낱장 사진이 아니라 ‘시간축 연재’ 뷰", why: "사진 한 장씩 흩어지면 다시 안 봅니다. 날짜순으로 이어 붙여 하나의 이야기로 만들면, 쌓일수록 떠나기 어려운 애착이 생깁니다." },
        { point: "에피소드마다 ‘개인 / 가족 공개’ 선택", why: "혼자만 간직하고 싶은 기억과 함께 보고 싶은 기억은 다릅니다. 가족 공유는 부가 기능이고, 본질은 ‘개인이 자주 기록하는 것’이라는 판단." },
        { point: "반려동물마다 복구 코드 발급", why: "로그인이 없으니 기기를 바꾸면 기록을 잃을 수 있습니다. 그 위험을 소유권을 되찾는 복구 코드로 막았어요." },
        { point: "성공 지표를 ‘사용자 수’가 아니라 ‘계속 쓰는가’로", why: "펫로스까지 다루는 제품이라 ‘얼마나 많이’보다 ‘쓴 사람이 계속 쓰는가(주간 기록률)’를 핵심 지표로 뒀습니다." }
      ],
      jp: [
        { point: "ログイン画面をなくした（匿名認証）", why: "記録は思い立った瞬間、3秒以内に始められるべき。会員登録それ自体が最大の離脱ポイントなので、開いたらすぐ書けるようにしました。" },
        { point: "写真の羅列ではなく『時間軸の連載』ビュー", why: "写真がバラバラだと二度と見返しません。日付順につないで一つの物語にすると、積み上がるほど手放しにくい愛着が生まれます。" },
        { point: "エピソードごとに『個人 / 家族公開』を選択", why: "一人で大切にしたい記憶と、共有したい記憶は違います。家族共有は付加機能で、本質は『個人がこまめに記録すること』という判断。" },
        { point: "ペットごとに復旧コードを発行", why: "ログインがないため、機種変更で記録を失う恐れがあります。その危険を、所有権を取り戻す復旧コードで防ぎました。" },
        { point: "成功指標を『ユーザー数』ではなく『使い続けるか』に", why: "ペットロスまで扱う製品なので、『どれだけ多く』より『書いた人が使い続けるか（週間記録率）』を主要指標に置きました。" }
      ]
    },
    screens: {
      ko: [
        { s: "pm-list", cap: "로그인 없이 접속하면 바로 내 반려동물 목록" },
        { s: "pm-timeline", cap: "날짜순으로 쌓이는 타임라인 — ‘연재’ 뷰" },
        { s: "pm-form", cap: "제목·내용·공개 범위(개인/가족)로 한 편 기록" }
      ],
      jp: [
        { s: "pm-list", cap: "ログインなしで開くと、すぐ自分のペット一覧" },
        { s: "pm-timeline", cap: "日付順に積み上がるタイムライン — 『連載』ビュー" },
        { s: "pm-form", cap: "タイトル・本文・公開範囲(個人/家族)で一編を記録" }
      ]
    },
    meta: {
      platform: { ko: "웹 (PWA · 모바일 설치 가능)", jp: "ウェブ (PWA・モバイル設置可)" },
      stack: "Next.js 16 · React 19 · Supabase · Tailwind",
      statusText: { ko: "라이브 운영 중", jp: "ライブ稼働中" }
    },
    links: [
      { label: { ko: "라이브 데모 ↗", jp: "ライブデモ ↗" }, url: "https://petmemoir-app.vercel.app", primary: true },
    ]
  },
  {
    id: "booky",
    name: "Booky",
    theme: "rd",
    concept: { ko: "시각적 독서기록 앱", jp: "ビジュアル読書記録アプリ" },
    status: "live",
    badge: { ko: "MVP 동작 중", jp: "MVP 稼働中" },
    hero: "rd-shelf",
    tagline: {
      ko: "내 책장을 시각적으로 채우고, 친구가 다음 책을 추천해주는 독서 기록 앱",
      jp: "自分の本棚を視覚的に埋め、友達が次の本を薦めてくれる読書記録アプリ"
    },
    background: {
      ko: "무엇이든 SNS에 공유하고 싶어 하는 요즘이지만, 정작 온전히 ‘내 것’이라 부를 수 있는 공간은 드뭅니다. 인스타그램에서 우연히 본 책장 일러스트에서 힌트를 얻어, 읽은 책으로 나만의 책장을 채워가는 앱을 떠올렸어요. 독서 기록 앱은 대부분 ‘데이터베이스 같은 리스트’로 끝나 다 읽고 나면 다시 열지 않게 되는데, ‘시각적으로 내 책장을 채우는 재미’와 ‘나를 아는 친구가 다음 책을 추천하는’ 경험으로 계속 열어보고 싶은 나만의 공간을 만들고 싶었습니다.",
      jp: "何でもSNSに共有したい今の時代ですが、本当に『自分だけのもの』と呼べる空間は意外と少ない。Instagramでたまたま見かけた本棚イラストからヒントを得て、読んだ本で自分だけの本棚を埋めていくアプリを思いつきました。読書記録アプリの多くは『データベースのようなリスト』で終わり、読み終えると二度と開かなくなります。『視覚的に本棚を埋める楽しさ』と『自分を知る友達が次の本を薦める』体験で、また開きたくなる自分だけの空間を作りたかったのです。"
    },
    decisions: {
      ko: [
        { point: "리스트가 아니라 ‘시각적 책장’", why: "책이 한 권씩 꽂히는 걸 보는 재미와 꾸미기 애착. 책장이 다 차면 새 책장이 열려서, 자연스러운 시즌·연간 회고가 됩니다." },
        { point: "실제 책장처럼 세로·가로로 마구잡이로 꽂고, ‘책갈피’로 재미를 표시", why: "진짜 책장을 정리하듯 세로·가로 방향을 자유롭게 골라 꽂게 했어요. 별점(★) 대신 책등에 ‘책갈피’를 꽂아 얼마나 재미있었는지를 남기는, 아날로그 감성의 손맛을 살리고 싶었습니다." },
        { point: "AI 추천이 아니라 ‘친구 추천’", why: "나를 아는 사람이 골라주는 한 권이 알고리즘 추천보다 힘이 셉니다. 사람 사이의 추천을 핵심에 뒀어요." },
        { point: "내 책장을 ‘카드’ 한 장으로 저장해 SNS에 공유", why: "공유하고 싶은 마음을 버튼 한 번으로. 내 책장을 예쁜 카드 이미지로 저장해 인스타 스토리 등에 가볍게 올릴 수 있게 했습니다. (앱 미설치자용 웹 공유 링크도 함께)" },
        { point: "로그인 없이 시작", why: "일단 책장부터 만들고 재미를 느끼게. 원하면 나중에 구글 연동으로 기기 이동에 대비합니다." },
        { point: "한국 책 데이터(카카오 API) + 장르 자동 분류", why: "글로벌 앱이 약한 한국 책 검색과 감성 커버를 채우고, 꽂을 때 장르를 자동 분류해 손이 덜 가게 했어요." }
      ],
      jp: [
        { point: "リストではなく『視覚的な本棚』", why: "本が一冊ずつ挿さる楽しさと、飾る愛着。本棚が埋まると新しい本棚が開き、自然な季節・年間の振り返りになります。" },
        { point: "本物の本棚のように縦・横に自由に挿し、『しおり』で楽しさを表現", why: "本物の本棚を整えるように、縦・横の向きを自由に選んで挿せるようにしました。星評価(★)の代わりに背表紙へ『しおり』を挿して、どれだけ面白かったかを残す——アナログな手触りを大切にしたかったのです。" },
        { point: "AI推薦ではなく『友達の推薦』", why: "自分を知る人が選ぶ一冊は、アルゴリズム推薦より強い。人と人の推薦を中心に据えました。" },
        { point: "自分の本棚を『カード』一枚で保存してSNSに共有", why: "共有したい気持ちをワンタップで。自分の本棚をきれいなカード画像として保存し、インスタのストーリーなどに気軽に載せられるようにしました。(未インストールの人向けにウェブ共有リンクも)" },
        { point: "ログインなしで開始", why: "まず本棚を作って楽しさを感じてもらう。必要なら後からGoogle連携で機種変更に備えます。" },
        { point: "韓国の書籍データ(カカオAPI) + ジャンル自動分類", why: "グローバルアプリが弱い韓国書籍の検索と感性的なカバーを補い、挿す時にジャンルを自動分類して手間を減らしました。" }
      ]
    },
    screens: {
      ko: [
        { s: "rd-splash", cap: "로그인 없이 바로 시작 — 밤하늘 책장 컨셉" },
        { s: "rd-shelf", cap: "세로·가로로 자유롭게 꽂은 내 책장. 책등의 ‘책갈피’가 재미 점수" },
        { s: "rd-search", cap: "카카오 책 검색 — 실제 표지·저자로 찾기" },
        { s: "rd-review", cap: "꽂는 방향(세로/가로) + 책갈피로 재미 표시 + 한줄 소감" },
        { s: "rd-card", cap: "내 책장을 카드 한 장으로 저장해 SNS에 공유" }
      ],
      jp: [
        { s: "rd-splash", cap: "ログインなしですぐ開始 — 夜空の本棚コンセプト" },
        { s: "rd-shelf", cap: "縦・横に自由に挿した本棚。背表紙の『しおり』が楽しさスコア" },
        { s: "rd-search", cap: "カカオ書籍検索 — 実際の表紙・著者で探す" },
        { s: "rd-review", cap: "挿す向き(縦/横) + しおりで楽しさ + 一言感想" },
        { s: "rd-card", cap: "自分の本棚をカード一枚で保存してSNSに共有" }
      ]
    },
    meta: {
      platform: { ko: "모바일 (iOS/Android) + 웹 공유", jp: "モバイル (iOS/Android) + ウェブ共有" },
      stack: "React Native · Expo · Supabase · Next.js",
      statusText: { ko: "MVP 핵심 흐름 동작 중", jp: "MVPコア機能 稼働中" }
    },
    links: [
      { label: { ko: "웹 공유 뷰", jp: "ウェブ共有ビュー" }, url: "#", disabled: true },
    ]
  },
  {
    id: "pasyamon",
    name: "pasyamon",
    theme: "cv",
    concept: { ko: "사진 포획 힐링 게임", jp: "写真ポケットヒーリングゲーム" },
    status: "wip",
    badge: { ko: "프로토타입 검증 중", jp: "プロトタイプ検証中" },
    hero: "cv-village",
    heroImg: "images/pasyamon-village.png",
    tagline: {
      ko: "길에서 마주친 동물·벌레·사람을 사진으로 찍으면, 배경이 지워진 채 내 마을에 살아 움직이는 주민이 되는 힐링 게임",
      jp: "道で出会った動物・虫・人を写真に撮ると、背景が消えて自分の村で動き回る住民になるヒーリングゲーム"
    },
    background: {
      ko: "동물의 숲·스타듀밸리 같은 힐링 게임을 좋아하지만, 늘 아쉬웠던 건 마을 주민도 수집물도 결국 ‘개발사가 만들어 정해둔 것’이라는 점이었어요. 나만의 것이 아니죠. 반대로 우리는 매일 길에서 예쁜 길고양이, 날아든 나비, 친구를 마주칩니다. 그 현실의 순간을 사진으로 ‘포획’해 내 세계로 가져오면 어떨까 — 여기서 출발했습니다. ‘수집·도감’ 욕구, ‘나만의 공간 꾸미기’ 욕구, 그리고 ‘현실과 연결된 개인화’를 하나로 묶은 게임이에요. 처음부터 크게 만들기보다, 이 핵심 경험이 정말 재미있는지를 최소 비용으로 먼저 확인하는 데 집중했습니다.",
      jp: "『あつまれ どうぶつの森』やスターデューバレーのようなヒーリングゲームが好きですが、いつも物足りなかったのは、村の住民も収集物も結局『開発会社が作って決めたもの』だという点でした。自分だけのものではないのです。一方で私たちは毎日、道で可愛い野良猫や飛んできた蝶、友達に出会います。その現実の瞬間を写真で『捕獲』して自分の世界に持ち込めたら——ここから始まりました。『収集・図鑑』欲求、『自分だけの空間を飾る』欲求、そして『現実とつながった個人化』を一つに束ねたゲームです。最初から大きく作るより、この核心体験が本当に面白いかを最小コストでまず確かめることに集中しました。"
    },
    decisions: {
      ko: [
        { point: "네이티브 앱이 아니라 ‘웹(PWA)’으로 먼저", why: "핵심 재미가 검증되지 않은 단계에서 앱스토어·유료 계정에 투자하는 건 위험합니다. iOS는 무료로 QR 앱 설치가 안 된다는 제약도 있었어요. 그래서 QR→브라우저→홈 화면 추가로 iOS·안드로이드 동시에 돌아가는 PWA로, 운영비 0원에서 가설부터 확인하기로 했습니다." },
        { point: "배경 제거를 ‘가장 먼저’ 검증했다", why: "‘사진에서 피사체만 오려낸다’가 이 게임의 심장인데, 브라우저에서 그게 빠르고 깔끔하게 될지가 최대 리스크였어요. 그래서 기획을 늘리기 전에 온디바이스(브라우저 안) 배경 제거부터 실험해 ‘된다’를 확인하고 다음으로 넘어갔습니다." },
        { point: "사진은 전부 기기에만 저장 (완전 로컬)", why: "남의 반려동물, 때로는 사람까지 찍는 게임이라 사진은 곧 개인정보입니다. 서버로 보내지 않고 기기(브라우저) 안에만 저장해 프라이버시 부담과 서버 비용을 동시에 없앴어요." },
        { point: "클라우드 백업을 넣되 ‘우리도 못 여는’ 방식으로", why: "완전 로컬은 기기를 바꾸면 마을을 잃습니다. 그래서 백업을 추가하되, 내가 정한 PIN으로 종단 암호화해서 저장했어요. PIN 없이는 운영자인 우리조차 열어볼 수 없습니다 — 편의와 프라이버시를 둘 다 지키려는 절충." },
        { point: "포켓몬 카드처럼 ‘랜덤 별점 + 개봉 연출’", why: "같은 고양이를 찍어도 결과가 다르면 ‘다시 하고 싶어’집니다. 촬영 결과에 가중 랜덤 별점(1~5★)을 주고, 카드가 열리는 순간을 연출해 뽑기의 두근거림을 넣었어요." },
        { point: "오려낸 사진이 ‘살아있게’ 보이도록 움직임을 넣음", why: "정지된 컷아웃은 스티커 같아서 금방 질립니다. 지면을 배회하고 통통 튀고 그림자·좌우 기울임을 더해, 정적인 사진 한 장이 ‘내 마을에 사는 주민’처럼 느껴지게 했어요." },
        { point: "성공을 ‘다운로드 수’가 아니라 ‘다시 하고 싶은가’로", why: "초기엔 서버도 계정도 없으니 화려한 지표 대신, 첫 촬영→마을 배치 완료율과 소규모 유저의 재방문·재미를 핵심으로 봤습니다. 재미가 증명돼야 네이티브로 갈 이유가 생기니까요." }
      ],
      jp: [
        { point: "ネイティブアプリではなく『ウェブ(PWA)』で先に", why: "核心の面白さが検証されていない段階でアプリストアや有料アカウントに投資するのは危険です。iOSは無料でQRアプリ設置ができない制約もありました。そこでQR→ブラウザ→ホーム画面追加でiOS・Android同時に動くPWAとして、運営費0円から仮説の検証を始めることにしました。" },
        { point: "背景除去を『真っ先に』検証した", why: "『写真から被写体だけを切り抜く』がこのゲームの心臓ですが、ブラウザでそれが速く綺麗にできるかが最大のリスクでした。だから企画を広げる前に、オンデバイス(ブラウザ内)背景除去から実験して『できる』を確認し、次へ進みました。" },
        { point: "写真はすべて端末にだけ保存 (完全ローカル)", why: "他人のペット、時には人まで撮るゲームなので、写真はすなわち個人情報です。サーバーに送らず端末(ブラウザ)内だけに保存し、プライバシー負担とサーバー費用を同時になくしました。" },
        { point: "クラウドバックアップを『運営者も開けない』方式で", why: "完全ローカルは機種変更で村を失います。そこでバックアップを追加しつつ、自分で決めたPINで端末間暗号化して保存しました。PINなしでは運営者である私たちさえ開けません——利便性とプライバシーの両立を狙った折衷です。" },
        { point: "ポケモンカードのような『ランダム星評価 + 開封演出』", why: "同じ猫を撮っても結果が違えば『もう一度やりたく』なります。撮影結果に加重ランダムの星評価(1~5★)を与え、カードが開く瞬間を演出してガチャのドキドキを入れました。" },
        { point: "切り抜いた写真が『生きて』見えるよう動きを追加", why: "静止した切り抜きはステッカーのようで飽きます。地面を歩き回り、ぴょんと跳ね、影・左右の傾きを加えて、静止した一枚の写真が『自分の村に住む住民』のように感じられるようにしました。" },
        { point: "成功を『ダウンロード数』ではなく『また遊びたいか』で", why: "初期はサーバーもアカウントもないので、派手な指標の代わりに、初回撮影→村への配置の完了率と、少人数ユーザーの再訪問・面白さを核心に置きました。面白さが証明されて初めてネイティブへ進む理由が生まれるからです。" }
      ]
    },
    screens: {
      ko: [
        { s: "cv-onboarding", img: "images/pasyamon-onboarding.png", cap: "로그인 없이 마을 이름·테마만 정하면 시작 (숲/거친/눈)" },
        { s: "cv-village", img: "images/pasyamon-village.png", cap: "내가 포획한 생명체들이 배회하는 마을 — 실제 앱은 직접 찍은 사진이 주민이 됨" },
        { s: "cv-capture", img: "images/pasyamon-capture.png", cap: "촬영→배경 제거→카드 개봉. 가중 랜덤 별점과 등급 연출" },
        { s: "cv-collection", img: "images/pasyamon-collection.png", cap: "도감/컬렉션 — 등급 필터·정렬로 모은 카드 모아보기" },
        { s: "cv-detail", img: "images/pasyamon-detail.png", cap: "카드 상세 — 이름·특징·별점, 편집 가능" }
      ],
      jp: [
        { s: "cv-onboarding", img: "images/pasyamon-onboarding.png", cap: "ログインなしで村名・テーマを決めるだけで開始 (森/荒野/雪)" },
        { s: "cv-village", img: "images/pasyamon-village.png", cap: "捕獲した生き物が歩き回る村 — 実際のアプリは自分で撮った写真が住民になる" },
        { s: "cv-capture", img: "images/pasyamon-capture.png", cap: "撮影→背景除去→カード開封。加重ランダムの星評価と等級演出" },
        { s: "cv-collection", img: "images/pasyamon-collection.png", cap: "図鑑/コレクション — 等級フィルター・並べ替えで集めたカードを一覧" },
        { s: "cv-detail", img: "images/pasyamon-detail.png", cap: "カード詳細 — 名前・特徴・星評価、編集可能" }
      ]
    },
    roadmap: {
      note: {
        ko: "지금은 웹 PWA로 ‘핵심 루프가 재미있는가’를 검증하는 단계이고, 아래는 검증을 통과하면 진행할 계획입니다.",
        jp: "今はウェブPWAで『核心ループが面白いか』を検証する段階で、下は検証を通過したら進める計画です。"
      },
      items: {
        ko: ["Unity 네이티브 이전 (iOS Vision·App Store 출시)", "🌊 바다 테마 추가", "소규모 실사용자 리텐션·재미 검증"],
        jp: ["Unityネイティブ移行 (iOS Vision・App Storeリリース)", "🌊 海テーマ追加", "少人数の実ユーザーによるリテンション・面白さ検証"]
      }
    },
    meta: {
      platform: { ko: "웹 (PWA · 모바일, QR 배포)", jp: "ウェブ (PWA・モバイル、QR配布)" },
      stack: "PWA · @imgly 온디바이스 배경제거 · IndexedDB · Supabase(암호화 백업)",
      statusText: { ko: "프로토타입 · 핵심 루프 동작", jp: "プロトタイプ・コアループ稼働" }
    },
    links: [
      { label: { ko: "곧 배포 예정", jp: "近日公開予定" }, url: "#", disabled: true },
    ]
  },
];

/* =========================================================
   렌더링
   ========================================================= */
let lang = localStorage.getItem("works_lang") || "jp";
const t = (o) => (o && o[lang] != null ? o[lang] : o && o.ko) || "";
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function phone(screenKey, imgSrc) {
  const mock = SCREENS[screenKey] || "";
  // 실제 스크린샷(imgSrc)이 있으면 목업 위에 덮어 표시하고,
  // 파일이 아직 없으면 onerror로 이미지를 제거해 자동으로 목업 폴백.
  const img = imgSrc ? `<img class="ph-img" src="${imgSrc}" alt="" onerror="this.remove()" />` : "";
  return `<div class="phone"><div class="phone-notch"></div><div class="phone-scr">${mock}${img}</div></div>`;
}

/* ---------- 갤러리 ---------- */
function galleryHTML() {
  const cards = PROJECTS.map((p) => `
    <a class="thumb reveal" href="#/p/${p.id}" aria-label="${esc(p.name)}">
      <div class="thumb-visual ${p.theme}">${phone(p.hero, p.heroImg)}</div>
      <div class="thumb-body">
        <div class="thumb-top"><span class="thumb-name">${esc(p.name)}</span><span class="badge ${p.status === "live" ? "live" : "wip"}">${t(p.badge)}</span></div>
        <div class="thumb-concept">${t(p.concept)}</div>
        <p class="thumb-tagline">${t(p.tagline)}</p>
        <span class="thumb-more">${t(I18N["thumb.more"])} <span class="arrow">→</span></span>
      </div>
    </a>`).join("");

  const nextCard = `
    <div class="thumb thumb-next reveal">
      <div class="np-emoji">✨</div>
      <h3>${t(I18N["next.title"])}</h3>
      <p>${t(I18N["next.desc"])}</p>
    </div>`;

  return `
    <section class="gallery container">
      <div class="gallery-head reveal">
        <h1>${t(I18N["gallery.title"])}</h1>
        <p>${t(I18N["gallery.desc"])}</p>
      </div>
      <div class="grid">${cards}${nextCard}</div>
    </section>`;
}

/* ---------- 상세 ---------- */
function detailHTML(p) {
  const idx = PROJECTS.findIndex((x) => x.id === p.id);
  const prev = PROJECTS[idx - 1], next = PROJECTS[idx + 1];

  const decisions = t(p.decisions).map((d) => `
    <li class="dec">
      <div class="dec-point">${esc(d.point)}</div>
      <div class="dec-why">${esc(d.why)}</div>
    </li>`).join("");

  const screens = t(p.screens).map((sc) => `
    <figure class="screen">
      ${phone(sc.s, sc.img)}
      <figcaption>${esc(sc.cap)}</figcaption>
    </figure>`).join("");

  const roadmap = p.roadmap ? `
      <div class="detail-sec">
        <h2 class="sec-h">${t(I18N["detail.roadmap"])}</h2>
        <p class="road-note">${esc(t(p.roadmap.note))}</p>
        <ul class="road-list">${t(p.roadmap.items).map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
      </div>` : "";

  const links = p.links.map((l) =>
    `<a class="link-btn ${l.primary ? "primary" : ""} ${l.disabled ? "disabled" : ""}"
        href="${l.url}" ${l.disabled ? 'aria-disabled="true"' : 'target="_blank" rel="noopener"'}>${t(l.label)}</a>`
  ).join("");

  const nav = `
    <div class="detail-nav">
      <div>${prev ? `<a href="#/p/${prev.id}"><span class="dn-lbl">← ${t(I18N["detail.prev"])}</span>${esc(prev.name)}</a>` : ""}</div>
      <div style="text-align:right">${next ? `<a href="#/p/${next.id}"><span class="dn-lbl">${t(I18N["detail.next"])} →</span>${esc(next.name)}</a>` : ""}</div>
    </div>`;

  return `
    <section class="detail container">
      <button class="detail-back" id="backBtn" type="button">← ${t(I18N["detail.back"])}</button>

      <header class="detail-hd">
        <div class="detail-hd-l">
          <div class="detail-top">
            <h1 class="detail-name">${esc(p.name)}</h1>
            <span class="badge ${p.status === "live" ? "live" : "wip"}">${t(p.badge)}</span>
          </div>
          <div class="detail-concept">${t(p.concept)}</div>
          <p class="detail-tagline">${t(p.tagline)}</p>
          <div class="detail-links">${links}</div>
        </div>
        <dl class="detail-meta">
          <div><dt>${t(I18N["detail.platform"])}</dt><dd>${t(p.meta.platform)}</dd></div>
          <div><dt>${t(I18N["detail.stack"])}</dt><dd>${esc(p.meta.stack)}</dd></div>
          <div><dt>${t(I18N["detail.status"])}</dt><dd>${t(p.meta.statusText)}</dd></div>
        </dl>
      </header>

      <div class="detail-sec">
        <h2 class="sec-h">${t(I18N["detail.bg"])}</h2>
        <p class="bg-text">${t(p.background)}</p>
      </div>

      <div class="detail-sec">
        <h2 class="sec-h">${t(I18N["detail.decisions"])}</h2>
        <ul class="dec-list">${decisions}</ul>
      </div>

      <div class="detail-sec">
        <h2 class="sec-h">${t(I18N["detail.screens"])}</h2>
        <div class="screens">${screens}</div>
        <p class="screens-note">${t(I18N["screens.note"])}</p>
      </div>

      ${roadmap}

      ${nav}
    </section>`;
}

/* ---------- 라우팅 ---------- */
function currentRoute() {
  const h = location.hash.replace(/^#\/?/, "");
  const m = h.match(/^p\/(.+)$/);
  return m ? { view: "detail", id: m[1] } : { view: "gallery" };
}

function render() {
  const app = document.getElementById("app");
  const route = currentRoute();
  if (route.view === "detail") {
    const p = PROJECTS.find((x) => x.id === route.id);
    if (!p) { location.hash = "#/"; return; }
    app.innerHTML = detailHTML(p);
    document.getElementById("backBtn").addEventListener("click", () => { location.hash = "#/"; });
  } else {
    app.innerHTML = galleryHTML();
  }
  renderStatic();
  observeReveals();
  window.scrollTo(0, 0);
}

function renderStatic() {
  document.documentElement.lang = lang === "jp" ? "ja" : "ko";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (I18N[key]) el.textContent = t(I18N[key]);
  });
  document.querySelectorAll(".lang-opt").forEach((el) => {
    el.classList.toggle("active", el.getAttribute("data-lang") === lang);
  });
  const note = document.getElementById("footerNote");
  if (note) note.textContent = lang === "jp" ? "作り続けています。 © 韓弘妃" : "계속 만들고 있습니다. © 韓弘妃";
}

let io;
function observeReveals() {
  if (io) io.disconnect();
  io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.08, rootMargin: "0px 0px -30px 0px" });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
}

document.getElementById("langToggle").addEventListener("click", () => {
  lang = lang === "ko" ? "jp" : "ko";
  localStorage.setItem("works_lang", lang);
  render();
});
window.addEventListener("hashchange", render);

const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 10);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

render();
