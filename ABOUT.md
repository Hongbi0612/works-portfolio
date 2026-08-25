# AI 활용 포트폴리오 (Works) — 안내

## 공개 링크

- **사이트**: https://hongbi0612.github.io/works-portfolio/
- **저장소**: https://github.com/Hongbi0612/works-portfolio
- 특정 앱만 공유하려면 상세 URL을 그대로 보내면 됩니다
  - PetMemoir → `https://hongbi0612.github.io/works-portfolio/#/p/petmemoir`
  - Booky → `.../#/p/booky`
  - pasyamon → `.../#/p/pasyamon`

## 활용 용도

**AI를 활용해 직접 기획·제작한 개인 앱 작업물**을 보여주는 포트폴리오입니다.
"내가 어떤 사람인지" 어필하기보다, 개발자·디자이너가 결과물을 보여주듯
**"무엇을, 왜 만들었고 실제로 어떻게 움직이는가"**를 보여주는 것이 목적.

- **한/일 토글**을 지원해 국내·일본 양쪽에 공유 가능 (**기본값 JP**)
- 앞으로 새 앱을 만들 때마다 **계속 추가**하는 구조
- 일본 이직용 포트폴리오(`../포트폴리오/`)와 별개 — 이쪽은 "만든 것" 중심

## 무엇이 담겼나

현재 3개 앱 수록, 각 앱마다:

1. **개요** — 플랫폼 · 기술 · 상태 · 링크 (커밋 수·코드 줄 같은 개발 수치는 넣지 않음)
2. **왜 만들었나** — 배경·동기
3. **기획 포인트** — 핵심 기획 결정 + 그 이유 (결정 → 왜)
4. **실제로 어떻게 움직이나** — 실제 라이브 앱을 재현한 폰 화면 + 흐름 설명
5. **앞으로 (구현 예정)** — 아직 안 만든 것을 만든 척하지 않고 계획으로 분리 (해당 앱만)

수록 앱:

| 앱 | 한 줄 | 상태 | 플랫폼 · 기술 |
|---|---|---|---|
| **PetMemoir** | 반려동물과의 기억을 시간축 연재로 남기는 웹앱 | LIVE 운영 중 ([petmemoir-app.vercel.app](https://petmemoir-app.vercel.app)) | 웹(PWA) · Next.js 16 · React 19 · Supabase · Tailwind |
| **Booky** | 내 책장을 시각적으로 채우고 친구가 다음 책을 추천하는 독서기록 앱 | MVP 핵심 흐름 동작 중 ([bookyhb-app.vercel.app](https://bookyhb-app.vercel.app)) | 모바일(iOS/Android) + 웹 공유 · React Native · Expo · Supabase · Next.js |
| **pasyamon** | 길에서 마주친 동물·벌레·사람을 찍으면 배경이 지워진 채 내 마을 주민이 되는 힐링 게임 | 프로토타입 · 핵심 루프 검증 중 ([pasyamon.vercel.app](https://pasyamon.vercel.app)) | 웹(PWA, QR 배포) · @imgly 온디바이스 배경제거 · IndexedDB · Supabase(암호화 백업) |

## 어떻게 작동하나

- **정적 웹사이트** — 빌드 불필요. `index.html` + `style.css` + `main.js`
- **해시 라우팅** — 갤러리(`#/`) ↔ 상세(`#/p/<id>`). 특정 앱 URL을 그대로 공유 가능
- **데이터 기반** — 모든 콘텐츠가 `main.js`의 `PROJECTS` 배열. 앱 추가 = 객체 하나 추가
- **한/일 토글** — 모든 텍스트를 `{ ko, jp }` 로 관리, 선택은 브라우저에 저장 (기본 JP)
- **동작 화면** — 실제 라이브 앱을 재현한 HTML 폰 목업(반응형). 진짜 스크린샷 PNG로 교체 가능 (`images/`에 넣고 `screens[].img` 연결 — pasyamon은 실제 스크린샷 사용 중)
- **톤** — 다크 + 그라데이션 포인트
- **로컬 확인** — `cd ai-portfolio && python3 -m http.server 4599` → http://localhost:4599
- **배포** — GitHub Pages (`main` 브랜치 push 시 반영). 폴더 그대로 Vercel / Netlify 업로드도 가능

기술 상세·앱 추가 방법은 `README.md` 참고.

## 관련 포트폴리오

- 일본 이직용 포트폴리오: `../포트폴리오/` — PM·사업기획 이직 제출용. 자세한 건 그쪽 `ABOUT.md` 참고.
