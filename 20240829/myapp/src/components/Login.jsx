import React from 'react'
import { useInput } from '../hooks/useInput'
import { useMutation, useQuery } from '@tanstack/react-query';
import { getUsers, login, sign } from '../api/index';

const Login = () => {

    const uidLoginInput = useInput();
    const upwLogininput = useInput();
    const uidSignInput = useInput();
    const upwSigninput = useInput();

    const handlerLogin = () => {
        loginMutation.mutate({
            uid: uidLoginInput,
            upw: upwLogininput,
        },)
    }

    const handlerSign = () => {
        signMutation.mutate({ uid: uidSignInput.value, upw: upwSigninput.value })
    }

    const { data, refetch } = useQuery({
        queryKey: ["user"],
        queryFn: getUsers
    });

    const signMutation = useMutation({
        mutationFn: sign,
        onSuccess(data) {
            console.log(data);
            refetch()
        }
    });

    const loginMutation = useMutation({
        mutationFn: login,
        onSuccess(data) {
            console.log(data);
            refetch()
        }
    });

    return (<>
        <div>
            회원가입한 계정들
            {data.map((el, index) => <div key={"user" + index}>아이디 : {el.uid}</div>)}
        </div>
        <span>
            <label htmlFor="">아이디</label>
            <input type="text" {...uidLoginInput} />
            <label htmlFor="">비밀번호</label>
            <input type="text" {...upwLogininput} />
            <button onClick={handlerLogin}>로그인</button>
        </span>

        <span>
            <label htmlFor="">아이디</label>
            <input type="text" {...uidSignInput} />
            <label htmlFor="">비밀번호</label>
            <input type="text" {...upwSigninput} />
            <button onClick={handlerSign}>회원가입</button>
        </span>
    </>
    )
}

export default Login;