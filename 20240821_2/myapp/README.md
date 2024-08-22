## useCallBack
> 함수의 내용을 메모이제이션 해준다.

```js
const a = () => {
    // b = 1
    // c = 2
    return b + c;
}

a() === 3

// b = 5
// c = 4
a() === 3

import {useCallback} from "react";

// 메모이제이션된 함수를 반환
// 재연산을 할지 안할지는 두번째 매개변수로 배열의 타입을 전달
// 배열의 요소는 주시할 값 (메모이제이션된 함수의 내용이 바뀌었다고 받아들임)
const hello = "안녕";
const handlerCallback = useCallback(() => {
    console.log(hello)
}, [])

handlerCallback(); === "안녕"
hello = "반가워"
handlerCallback(); === "안녕"

const hello = "안녕";
const handlerCallback = useCallback(() => {
    console.log(hello)
}, [hello])

handlerCallback(); === "안녕"
hello = "반가워"
handlerCallback(); === "반가워"

```

## useReducer
- useState를 대체할 수 있는 hook 함수
> useState는 단순한 값의 상태를 다룰 때
- useReducer 여러개의 상태의 값을 구분지어서 사용할 때 가독성의 이점을 가질 수 있다.
> useReducer 복잡한 여러개의 상태를 다룰 경우
- useReducer 비동기 처리시에도 가독성의 장점을 가질 수 있다.

1. state
    - 사용할 상태 변수

2. despatch
    - reducer의 함수를 실행 시킨다. (상태를 업데이트 할 때 사용)
    - 객체를 전달을 매개변수로 받아서 상태를 업데이트 시킨다.
    - 객체의 내용에는 어떤 행동을 취할건지의 문자열의 값과 상태를 업데이트 할 때 사용할 값
    - reducer의 함수의 내용은 조건문으로 작성을 해서 전달받은 행동의 값을 조건처리 해서 상태를 업데이트 해준다.
    - reducer의 함수 (메뉴판)

3. initialState
    - 초기값을 전달할 객체