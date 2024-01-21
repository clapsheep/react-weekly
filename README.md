# reat-weekly Home Work

야무샘의 리액트 강의, 주간 숙제
- [x] JSX 또는 React API를 사용해, Vanilla 프로젝트에서 구현한 
인터페이스의 일부를 마크업하여 웹 브라우저에 렌더링되도록 만듭니다.

---
## 1주차 :  마켓칼리 Header 리액트로 마크업하기.

### 사용한 기술스택
1. Vite
2. React
3. TailwindCSS


### 환경구성 방안
vite에서 제공하는 react 스케폴딩을 활용하여, 마크업 개발환경 구성,
TailwindCSSd에서 제공하는 react용 tailwindCSS 설정 참고.

-> 어려웠던 점 : 수업시간에 활요한 pnpm을 활용한 셋팅을 하고싶었으나,
pnpm으로 설정하는 방법을 찾지 못해, 기존 바닐라프로젝트와 같이 npm으로 구성

### 마켓칼리 시안, Header 파트 구현 전략
- header와 nav로 크게 두부분으로 구성된 헤더파트를 각각의 JSX파일을 따로 만들어 main.jsx에 import 시킴 (약간의 컴포넌트?)
