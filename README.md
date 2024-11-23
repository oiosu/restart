# 🐳Restart Project

### ✋ Long time no see. Let's do "react" again.



### 1. `vite` 기반 React 프로젝트 생성 및 패키지 설치

```bash
npm create vite@latest restart-clone --template react
```

```bash
cd restart-clone
```

```bash
npm install
```

```bash
npm install react-router-dom axios styled-components
npm install @mui/material @emotion/react @emotion/styled
npm install @reduxjs/toolkit react-redux
npm install prop-types
```



### 2. 파일 구조

```bash
restart-pjt
└─ restart-clone
   ├─ eslint.config.js
   ├─ index.html
   ├─ package-lock.json
   ├─ package.json
   ├─ public
   │  └─ assets
   ├─ README.md
   ├─ src
   │  ├─ App.jsx
   │  ├─ components
   │  │  ├─ Footer.jsx
   │  │  ├─ Header.jsx
   │  │  └─ Layout.jsx
   │  ├─ main.jsx
   │  ├─ pages
   │  │  ├─ Careers.css
   │  │  ├─ Careers.jsx
   │  │  ├─ Home.css
   │  │  ├─ Home.jsx
   │  │  ├─ JabDetail.jsx
   │  │  └─ NotFound.jsx
   │  ├─ redux
   │  │  ├─ slices
   │  │  └─ store.js
   │  ├─ services
   │  │  └─ api.js
   │  └─ styles
   │     ├─ GlobalStyle.js
   │     └─ theme.js
   └─ vite.config.js
```



### 3. 실행

```bash  
npm run dev
```
