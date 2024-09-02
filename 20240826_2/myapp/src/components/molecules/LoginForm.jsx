import React, { useEffect } from "react";
import { useRecoilValueLoadable, useResetRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { Login, LoginCheck } from '../recoil/CountAtom';

const LoginForm = () => {

    const [uidInput, setUidInput] = useState();
    const [upwInput, setUpwInput] = useState();

    const loginState = useRecoilValue(Login)
    const setLoginSTate = useSetRecoilState(Login);
    const loadableLoginState = useRecoilValueLoadable(LoginCheck);
    const resetLoginState = useResetRecoilState(Login);

    const handlerLogin = (e) => {
        e.poreventDefault();
        // const { uid, upw } = e.target;
        setLoginSTate({ uid: uidInput, upw: upwInput })
    }

    useEffect(() => {
        // console.log(loadableLoginState);
        const { state } = loadableLoginState
        switch (state) {
            case "hasError":
                resetLoginState()
                break;
            case "hasValue":
                console.log("로그인 성공 !!")
                break;
            case "loading":
                console.log("로그인 중 ..")
                break;
            default:
                break;
        }
    }, [loadableLoginState]);

    useEffect(() => {
        console.log(loginState);
    }, [loginState])

    const uidInputHandler = (e) => {
        setUidInput(e.target.value)
    }

    const upwInputHandler = (e) => {
        setUpwInput(e.target.value)
    }

    return (
        <form onSubmit={handlerLogin}>
            <label htmlFor="">아이디</label>
            <input type="text" name="uid" value={uidInput} onChange={uidInputHandler} />
            <label htmlFor="">비밀번호</label>
            <input type="password" name="upw" value={upwInput} onChange={upwInputHandler} />
            <button>로그인</button>
        </form>
    )
}

// export default LoginForm;