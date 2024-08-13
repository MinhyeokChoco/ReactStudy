# babel
# webpack

## babel
- 자바스크립트 코드를 변환해준다. ES6 -> ES5
- 자바스크립트 컴파일

## babel의 목적
- 자바스크립트 문법이 진화를 꾸준히 하면서 ES5에서 ES6로 문법이 개발되고, ES6 문법이 개발되면서 많은 모듈이 생겼는데
- ES5에서 개발한 모듈을 모두 ES6로 직접 작성해서 수정하기에는 무리가 있어서 (너무 모듈이 많아서)
- ES6 문법을 ES5로 트랜스파일을 해서 사용하게 되었다.
- 손으로 일일히 수정하기에는 무리가 있기 때문에 탄생하게 되었다.

## babel common.js ES5, ES6 문법

common.js
```js
// a.js
const test = "hello"
const test2 = "hello2"

module.exports = {test, test2};

const {text, text2} = require("./a.js")
```

ES6
```js
// a.js
const test = "hello"
const test2 = "hello2"

export {test, test2};
export default test; // 한개만 내보낼 경우 X
// export로 여러개 내보낸 경우 같이 사용 불가.

// export {test, test2};
import {test, test2} from "./a.js"

// export default test;
import MyTest from "./a.js"
```

ES6 문법은 우리가 개발환경에서 편하게 작성하기 위해서 사용하는 문법

### babel 사용
- babel은 기본적으로 자바스크립트로 구성되어 있다.
- npm으로 설치 해서 사용

```sh
# --save-dev === -D : 개발 의존성 설치
npm install -D @babel/core @babel/cli @babel/preset-env
```

### babel의 환경 설정
- 변환을 하기 전에 우리가 원하는 형태로 변환하기 위해서 설정이 필요하다.
- .babelrc 파일을 만들어서 속성 설정값을 작성

```json
// .babelrc
{
    "presets" : "@babel/preset-env" // 기본 설정 preset 설정
}
```

> babel 컴파일
```sh
npx babel 변환할 파일의 경로 --out-file 변환을 해서 내보낼 경로

# Ex) app.js
npx babel app.js --out-file dist/app.js
```

> babel 컴파일 ES6 common.js 모듈 시스템
```sh
npm install -D @babel/core @babel/cli @babel/plugin-transform-modules-commonjs
npx babel server.js --out-file dist/server.js
```

> babel 컴파일 JSX 문법 -> javascript 문법
```sh
npm install -D @babel/core @babel/cli @babel/preset-env @babel/preset-react
```

## babel의 사용 목적
- 자바스크립트 컴파일러 ES6 JSX 문법 같은 자바스크립트 문법을 트랜스파일 해서 브라우저에서 이해할 수 있는 자바스크립트의 문법으로 변환한다.

## webpack의 사용 목적
- 모듈 번들러의 역할을 해준다. (번들링 한다.) 여러 개의 자바스크립트 파일, CSS 파일 등등 작업한 내용의 파일을 하나의 번들 파일로 묶어준다.
- 번들링의 이점 : 프로젝트의 실행 속도가 빨라진다.
- react는 webpack을 사용해서 작업 파일을 번들로 묶어서 배포를 진행.

## 모듈 번들러
- 웹을 구성할 때 다양한 파일과 기능을 작성한 작업 파일을 가지고 웹페이지를 그리는데 최소한의 파일만 가지고 컴파일을 진행한다. (웹페이지의 로딩 속도를 개선)
- 모듈 : 프로그램을 구성하는 구성요소
- 번들러 : 의존성이 있는 모듈 코드들을 파일로 만들어준다. 파일을 하나로 묶어서 만들어주는 역할

## webpack의 속성
1. entry : 진입점 지정, 시작점으로 사용할 모듈을 webpack에 알려줌
2. output : 번들링해서 내보내는 경로
3. loadres : 번들링 중에 모듈의 소스 코드에 적용되는 자바스크립트나 CSS 파일을 어떻게 처리할건지 (읽는 방법)
4. plugins : 추가로 사용할 플러그인들 사용 html 파일 생성, 번들을 최적화, 환경변수 세팅 등등

## webpack 실행
```sh
npm install -D webpack webpack-cli
npx webpack
```

## style 설정
```sh
npm install -D webpack webpack-cli css-loader style-loader
```

## webpack jsx babel 설정
```sh
# JSX -> js 변환 (babel을 통해서 변환), html 생성
npm install -D webpack webpack-cli @babel/core @babel/preset-env @babel/preset-react babel-loader html-webpack-plugin react react-dom
```