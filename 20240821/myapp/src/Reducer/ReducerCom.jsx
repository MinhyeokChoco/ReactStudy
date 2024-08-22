import React, { useReducer } from 'react'
import { INCREMENT, DECREMENT } from './Const';
import { useEffect } from 'react';

// 자주 사용할 상수 정리

const ReducerCom = () => {
    const initialState = {
        count: 0,
        login: false
    };

    // 메뉴판
    const reducer = (state, action) => {
        const { type, payload } = action;
        // type 어떤 행동을 취할건지
        // payload 상태를 업데이트할때 필요한 값
        // 반환값이 없으면 에러 발생
        switch (type) {
            case INCREMENT:
                return { ...state, count: state.count + payload.count }
            case DECREMENT:
                return { ...state, count: state.count - 1 };
            default: return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const handlerIncrement = () => {
        dispatch({ type: INCREMENT, payload: { count: 2 } })
    }

    const handlerDecrement = () => {
        dispatch({ type: DECREMENT })
    }

    // redux가 편해진다

    useEffect(() => {
        console.log(state.count);
    }, [state.count])

    return (
        <div>
            count : {state.count}
            login : {state.login ? "로그인 됨" : "로그인 안됨"}
            <button onClick={handlerIncrement}>증가</button>
            <button onClick={handlerDecrement}>감소</button>
        </div>
    )
}

export default ReducerCom

// useContext + useReducer를 사용을 해서 로그인 페이지 구현
// 회원가입 페이지 구현