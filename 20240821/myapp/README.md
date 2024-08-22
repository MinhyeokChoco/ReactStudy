## useCallBack
> 함수의 내용을 메모이제이션 해준다.

```js
const a = () => {
    // b = 1
    // c = 2
    return b + c;
}

a(); === 3;

// b = 5
// c = 4
a(); === 3

import {useCallback} from "react";

// 메모이제이션된 함수를 반환
// 재연산을 할지 안할지는 두번째 매개변수로 배열의 타입을 전달 배열의 요소는 주시할 값(메모이제이션된 함수의 내용이 바뀌었다고 받아들임)
let hello = "안녕";
const handlerCallback = useCallback(()=>{
    console.log(hello)
}, [])

handlerCallback(); === "안녕"
hello = "반가워";
handlerCallback(); === "안녕"

const handlerCallback = useCallback(()=>{
    console.log(hello)
}, [hello])
handlerCallback(); === "안녕"

handlerCallback(); === "반가워"
```


## useReducer
- useState를 대체할수 있는 hook 함수
> useState는 단순한 값의 상태를 다룰때
- useReducer 여러개의 상태의 값을 구분지어서 사용할때 가독성의 이점을 가질수 있다.
> useReducer 복잡한 여러개의 상태를 다룰경우
- useReducer 비동기 처리시에도 가독성의 장점을 가질수 있다.
  
1. state
   - 사용할 상태 변수
2. dispatch
   - reducer의 함수를 실행 시킨다.(상태를 업데이트할때 사용)
   - 객체를 전달을 매개변수로 받아서 상태를 업데이트 시킨다.
   - 객체의 내용에는 어떤 행동을 취할거냐의 문자열의 값과 상태를 업데이트할때 사용할 값
   - reducer의 함수의 내용은 조건문으로 작성을 해서 전달받은 행동의 값을 조건처리해서 상태를 업데이트 해준다.
   - reducer의 함수(메뉴판)
3. initialState
   - 초기값을 전달할 객체

> reducer는 이전 상탱와 action의 객체의 내용을 합쳐서 상태를 업데이트 해주면 된다.
> useState를 사용할때 보다 복잡한 상태를 다룰경우 가독성을 좋게 처리할수 있다.

```js
// dispatch 함수를 호출하면 useReuducer로 생성한 상태변수를 업데이트 하기위해 접근한다.
// 상태변수를 업데이트 하기위해서는 dispatch 함수를 호출해야한다.
<button onClick={() => {dispatch({type : "LOGIN", payload : { uid : "soon", upw : "123"}})}}>클릭</button>


// reuducer 메뉴판
// 직접 만든 함수
const reducer = (state, action) => {
    // state 처음에 초기값 이후 부터는 현재 업데이트 상태
    // action === {type : "LOGIN", payload : { uid : "soon", upw : "123"}}
    // reducer 함수에서 반환되는 값이 상태를 업데이트 시킨다.
    /*
        state = {
            userInfo : null,
            data : [],
            count : 0
        }
    */
    const {type, payload} = action;
    if(type === "LOGIN"){
        // fetch get uid로 조회를 해서
        // 비교를 하고 
        if(false) return {...state, userInfo : null}; // 로그인 실패시
        return {...state, userInfo : {uid : "soon", nick : "soon123"}}
        // state === {uid : "soon", nick : "soon123"}
    }else if(type === "LOGOUT") {
        
    }else if(type === "SIGNUP") {
        
    }else{
        return state;
    }
    // reducer는 반환값이 꼭 있어야 한다.
    // reducer에서 반환한 값으로 상태를 업데이트한다.
}

// 초기값
const initialState = {
    userInfo : null,
    data : [],
    count : 0
}

const [state, dispatch] = useReducer(reducer, initialState);

```