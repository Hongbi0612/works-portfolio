# Works Portfolio

기획하고 직접 만든 **앱 작업물**을 보여주는 개인 포트폴리오.
자기 어필이 아니라 **"무엇을, 왜 만들었고 실제로 어떻게 움직이는지"**를 보여주는 게 목적입니다.

**갤러리(썸네일) → 클릭 → 상세** · **한/일 언어 토글** · **다크 테마** · 빌드 불필요.

## 상세 페이지 구성 (각 앱)

1. **개요** — 플랫폼 · 기술 · 상태 · 링크 (커밋 수·코드 줄 같은 수치는 넣지 않음)
2. **왜 만들었나** — 배경·동기 서술
3. **기획 포인트** — 핵심 기획 결정 + 그 이유 (결정 → 왜)
4. **실제로 어떻게 움직이나** — 실제 라이브 앱을 재현한 **폰 화면**들 + 흐름 설명

## 파일 구조

| 파일 | 역할 |
|------|------|
| `index.html` | 골격 (nav + `main#app` + footer) |
| `style.css` | 다크 테마 + 폰 목업 + 두 앱 화면 스타일 |
| `main.js` | **콘텐츠 데이터 + 화면 재현 + 라우팅** — 여기만 고치면 됨 |
| `images/` | (선택) 실제 스크린샷 PNG를 넣는 곳 |

## 실행

```bash
cd ai-portfolio
python3 -m http.server 4599   # → http://localhost:4599
```

폴더 그대로 Vercel / Netlify / GitHub Pages 에 올려 배포할 수 있습니다.

## 📸 “동작 화면”에 대하여 — 재현 목업 vs 실제 스크린샷

현재 각 앱의 “실제로 어떻게 움직이나” 화면은 **실제 라이브 앱을 그대로 재현한 HTML 목업**입니다.
(라이브 앱을 직접 확인하고 화면·색·텍스트를 그대로 옮겨 만든 것 — 반응형이라 어떤 화면에서도 깨지지 않습니다.)

**진짜 스크린샷 PNG로 바꾸고 싶다면:**

1. 스크린샷을 찍어 `images/petmemoir/` · `images/readdasom/` 에 저장 (권장: 세로 스크린샷)
2. `main.js`의 해당 프로젝트 `screens` 항목에 `img` 경로를 추가하면 **목업 대신 이미지**가 표시됩니다:

```js
screens: {
  ko: [
    { s: "pm-timeline", cap: "타임라인 — 연재 뷰", img: "images/petmemoir/timeline.png" },
    // img 를 빼면 재현 목업(SCREENS[s])이 그대로 쓰입니다.
  ],
  jp: [ /* 동일 구조 */ ]
}
```

3. 갤러리 썸네일용 대표 이미지는 프로젝트 객체에 `heroImg: "images/..."` 를 추가하면 됩니다.

## 🔑 새 앱 추가하기

`main.js`의 `PROJECTS` 배열에 객체 하나만 추가하면 갤러리 카드와 상세 페이지가 자동 생성됩니다.
모든 텍스트는 `{ ko, jp }` 형태로 쓰면 언어 토글에 자동 반영됩니다.

```js
{
  id: "newapp",                 // URL: #/p/newapp
  name: "새앱",
  theme: "pm",                  // 썸네일 배경 톤 (pm=따뜻함 / rd=밤하늘) — 새 톤은 style.css에서 추가
  concept: { ko: "한 줄 분류", jp: "一行分類" },
  status: "live",               // live → 초록 뱃지 / wip → 청록 뱃지
  badge:  { ko: "LIVE 운영 중", jp: "LIVE 稼働中" },
  hero:   "pm-timeline",        // 갤러리 카드에 보여줄 대표 화면 키 (SCREENS의 키) 또는 heroImg 사용
  tagline:{ ko: "...", jp: "..." },
  background: { ko: "왜 만들었나 서술", jp: "..." },
  decisions: {
    ko: [ { point: "핵심 결정", why: "그 이유" } ],
    jp: [ { point: "...", why: "..." } ]
  },
  screens: {
    ko: [ { s: "pm-timeline", cap: "화면 설명", img: "images/..(선택)" } ],
    jp: [ { s: "pm-timeline", cap: "..." } ]
  },
  meta: {
    platform: { ko: "웹(PWA)", jp: "ウェブ(PWA)" },
    stack: "Next.js · Supabase",
    statusText: { ko: "운영 중", jp: "稼働中" }
  },
  links: [ { label: { ko: "라이브 데모 ↗", jp: "ライブデモ ↗" }, url: "https://...", primary: true } ]
}
```

새 앱의 화면을 목업으로 재현하려면 `main.js`의 `SCREENS` 객체에 `"키": \`<div class="ph-app ...">...</div>\`` 를 추가하고,
필요한 스타일을 `style.css`에 넣으면 됩니다. (더 간단히는 실제 스크린샷 PNG를 `img`로 넣는 방법을 권장.)

## 언어

기본값 한국어. 우상단 `KO / JP` 로 전환하며 선택은 브라우저에 저장됩니다.
언어를 바꿔도 보던 화면(갤러리/상세)은 유지됩니다.
