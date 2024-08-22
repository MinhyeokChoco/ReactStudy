import { useState, createContext } from "react"
import A from "./A";

// context 객체를 생성
// Store 전역상태를 관리할 인스턴스
export const Store = createContext();

// props 드릴링
export const Context = () => {
    const [login, setLogin] = useState(false);

    // 전역 상태로 관리
    const obj = {
        login,
        setLogin
    }

    // Store.Provider 전역상태를 공유할 부모 컴포넌트를 감싸준다.
    // 전역 상태로 관리할 키를 value, 값을 props 로 전달

    return (
        <Store.Provider value={obj}>
            <A></A>
        </Store.Provider>
    )
}