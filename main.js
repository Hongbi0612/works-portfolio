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
      <div class="rd-prog"><span>1권 읽음</span><span>19권 남음 · 5%</span></div>
      <div class="rd-bar"><i style="width:5%"></i></div>
      <div class="rd-frame">
        <div class="rd-moon">🌙</div>
        <div class="rd-shelfrow">
          <div class="rd-spine"><span>데</span><span>미</span><span>안</span></div>
        </div>
        <div class="rd-shelfrow"></div>
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
};

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
      ko: "독서 기록 앱은 대부분 ‘데이터베이스 같은 리스트’로 끝납니다. 다 읽고 나면 다시 열지 않게 되죠. 인스타그램의 책장 일러스트 게시물이 좋아요 1.8만·저장 1만을 받는 걸 보고, ‘내 책장을 시각적으로 채우는 재미’와 ‘나를 아는 친구가 다음 책을 추천하는’ 경험에 빈자리가 있다고 봤습니다.",
      jp: "読書記録アプリの多くは『データベースのようなリスト』で終わります。読み終えると二度と開かなくなる。Instagramの本棚イラスト投稿が「いいね1.8万・保存1万」を集めるのを見て、『自分の本棚を視覚的に埋める楽しさ』と『自分を知る友達が次の本を薦める』体験に空白があると考えました。"
    },
    decisions: {
      ko: [
        { point: "리스트가 아니라 ‘시각적 책장’", why: "책이 한 권씩 꽂히는 걸 보는 재미와 꾸미기 애착. 책장이 다 차면 새 책장이 열려서, 자연스러운 시즌·연간 회고가 됩니다." },
        { point: "AI 추천이 아니라 ‘친구 추천’", why: "나를 아는 사람이 골라주는 한 권이 알고리즘 추천보다 힘이 셉니다. 사람 사이의 추천을 핵심에 뒀어요." },
        { point: "웹 공유 링크", why: "앱을 안 깐 친구도 내 책장을 구경할 수 있게. 설치 장벽 없이 퍼지는 바이럴 진입점입니다." },
        { point: "로그인 없이 시작", why: "일단 책장부터 만들고 재미를 느끼게. 원하면 나중에 구글 연동으로 기기 이동에 대비합니다." },
        { point: "한국 책 데이터(카카오 API) + 장르 자동 분류", why: "글로벌 앱이 약한 한국 책 검색과 감성 커버를 채우고, 꽂을 때 장르를 자동 분류해 손이 덜 가게 했어요." }
      ],
      jp: [
        { point: "リストではなく『視覚的な本棚』", why: "本が一冊ずつ挿さる楽しさと、飾る愛着。本棚が埋まると新しい本棚が開き、自然な季節・年間の振り返りになります。" },
        { point: "AI推薦ではなく『友達の推薦』", why: "自分を知る人が選ぶ一冊は、アルゴリズム推薦より強い。人と人の推薦を中心に据えました。" },
        { point: "ウェブ共有リンク", why: "アプリ未インストールの友達も本棚を見られるように。設置障壁なく広がるバイラルの入口です。" },
        { point: "ログインなしで開始", why: "まず本棚を作って楽しさを感じてもらう。必要なら後からGoogle連携で機種変更に備えます。" },
        { point: "韓国の書籍データ(カカオAPI) + ジャンル自動分類", why: "グローバルアプリが弱い韓国書籍の検索と感性的なカバーを補い、挿す時にジャンルを自動分類して手間を減らしました。" }
      ]
    },
    screens: {
      ko: [
        { s: "rd-splash", cap: "로그인 없이 바로 시작 — 밤하늘 책장 컨셉" },
        { s: "rd-shelf", cap: "내 책장에 책이 한 권씩. 진행률·다음 책장" },
        { s: "rd-search", cap: "카카오 책 검색 — 실제 표지·저자로 찾기" },
        { s: "rd-review", cap: "별점·한줄 소감·꽂는 방향을 정해 꽂기" }
      ],
      jp: [
        { s: "rd-splash", cap: "ログインなしですぐ開始 — 夜空の本棚コンセプト" },
        { s: "rd-shelf", cap: "本棚に一冊ずつ。進捗・次の本棚" },
        { s: "rd-search", cap: "カカオ書籍検索 — 実際の表紙・著者で探す" },
        { s: "rd-review", cap: "評価・一言感想・挿す向きを決めて挿す" }
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
];

/* =========================================================
   렌더링
   ========================================================= */
let lang = localStorage.getItem("works_lang") || "ko";
const t = (o) => (o && o[lang] != null ? o[lang] : o && o.ko) || "";
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function phone(screenKey, imgSrc) {
  const inner = imgSrc
    ? `<img class="ph-img" src="${imgSrc}" alt="" />`
    : (SCREENS[screenKey] || "");
  return `<div class="phone"><div class="phone-notch"></div><div class="phone-scr">${inner}</div></div>`;
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
