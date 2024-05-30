# Did-I-Applied-Here?

## 개요

- 취업준비를 하다보면 여러 채용사이트를 사용하게 됩니다. 그러나 각 채용사이트마다 지원회사가 공유되지 않기때문에
  직접 정리해 줄 필요가 있습니다. 메모장에 정리할 수도 있지만 조금 이라도 수고를 덜기위해 따로 간단한 웹 서비스를 만들게 되었습니다.

## 사용스택

- vite + React + TypeScript / supabase / React-Query / RTK / styled-components

## 사용법

페이지는 로그인 페이지 & 메인 페이지로 두개로 이뤄져있습니다. 카카오로 로그인 해주신뒤 (**!!로그인 필수!!**)지원하신 플랫폼과 회사명을 넣어주시고 등록해주시면 끝입니다.
(현재 플랫폼은 원티드,잡코리아,인텔리픽,점핏,사람인,랠릿,기타로 이루어져 있습니다.)

![스크린샷 2024-05-30 시간: 12 50 09](https://github.com/HIITMEMARIO/did-i-applied-here/assets/135943045/e4de529f-8762-4207-a98a-05f9c3e84eef)

![스크린샷 2024-05-30 시간: 12 58 35](https://github.com/HIITMEMARIO/did-i-applied-here/assets/135943045/09b95046-a036-46b1-bc1d-bafd264d1d2a)

#### 지원시 이런 식으로 추가가 됩니다.

![스크린샷 2024-05-30 시간: 13 00 25](https://github.com/HIITMEMARIO/did-i-applied-here/assets/135943045/e380bc56-a221-4ca4-9792-d711d8f72ca7)

#### 모바일 환경도 지원하고 있습니다!

![스크린샷 2024-05-30 시간: 13 07 50](https://github.com/HIITMEMARIO/did-i-applied-here/assets/135943045/c99cddd7-07ad-4b7f-a43e-4d316c8c3bb7)

![스크린샷 2024-05-30 시간: 13 08 07](https://github.com/HIITMEMARIO/did-i-applied-here/assets/135943045/087188cc-6039-46e6-970a-0faa0b79397d)

## 폴더 구조

```
📦src
 ┣ 📂Pages
 ┃ ┗ 📜Main.tsx
 ┣ 📂api
 ┃ ┣ 📜auth.ts
 ┃ ┗ 📜company.ts
 ┣ 📂assets
 ┃ ┗ 📂fonts
 ┃ ┃ ┣ 📜subset-NanumSquareRoundB.woff2
 ┃ ┃ ┣ 📜subset-NanumSquareRoundEB.woff2
 ┃ ┃ ┣ 📜subset-NanumSquareRoundL.woff2
 ┃ ┃ ┗ 📜subset-NanumSquareRoundR.woff2
 ┣ 📂components
 ┃ ┣ 📂UI
 ┃ ┃ ┗ 📜Button.tsx
 ┃ ┣ 📜Cards.tsx
 ┃ ┣ 📜Login.tsx
 ┃ ┣ 📜LoginProtectedRoute.tsx
 ┃ ┗ 📜ProtectedRoute.tsx
 ┣ 📂hooks
 ┃ ┗ 📜useHandleCompany.ts
 ┣ 📂redux
 ┃ ┣ 📂config
 ┃ ┃ ┗ 📜configStore.ts
 ┃ ┗ 📂modules
 ┃ ┃ ┗ 📜authSlice.ts
 ┣ 📂route
 ┃ ┗ 📜Router.tsx
 ┣ 📂shared
 ┃ ┗ 📂supabase
 ┃ ┃ ┗ 📜supabase.ts
 ┣ 📂styles
 ┃ ┗ 📜GlobalStyle.ts
 ┣ 📂types
 ┃ ┣ 📜addDataType.ts
 ┃ ┗ 📜supabase.ts
 ┣ 📂utils
 ┃ ┗ 📜selectValue.ts
 ┣ 📜App.tsx
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
```

(추후 커뮤니티 기능 추가 예정)
