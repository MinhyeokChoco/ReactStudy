  # CRA

## CRA 설치 명령어 (Create-React-App)
```sh
npx create-react-app 프로젝트명
sudo npx create-react-app myapp
```

## CRA 구성
1. public : 정적 파일들이 있는 폴더
2. src : 소스코드를 모아두는 폴더, 동적인 파일도 포함된다.
- src/index.js : react의 루트 파일

## 테스트 환경 실행
- npm start : 파일로 생성하는 것이 아닌, 메모리 상에 빌드 내용을 가지고 기본적으로 3000번 포트에 테스트 환경을 구축해준다.

## 빌드 운영 배포
```sh
npm run build
```


### src/index.js
```js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// <React.StrictMode> : 로그 조사 엄격모드
```

### 아토믹 패턴
> 원자 분자 유기물 템플릿 페이지

### 컴포넌트
> UI의 단위, UI를 나눠서 구성 (레이아웃 구성)

### 리액트의 리렌더링
> 부모 컴포넌트가 리렌더링이 발생하면 모든 자식 컴포넌트는 리렌더링 된다. (메모 라는 기능을 알면 막을 수 있음)
> 내용으로 전달된 컴포넌트는 리렌더링이 발생되지 않는 경우가 발생 할 수 있다.


### 리액트 생명주기
