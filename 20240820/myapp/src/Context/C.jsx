import React, { useContext } from 'react'
import { Store } from './Context'

const C = () => {
    // 전역 상태를 참조
    const { login } = useContext(Store);

    return (
        <div>
            {login ? "로그인 됬음" : "로그인 안됨"}
        </div>
    )
}

export default C
