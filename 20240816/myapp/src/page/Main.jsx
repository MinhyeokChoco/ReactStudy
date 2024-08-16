import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Main = () => {
    // useNavigate 반환 데이터 타입 함수
    // navigate : 페이지 이동을 시켜주는 함수가 할당
    const navigate = useNavigate();

    const handler = () => {
        navigate('/boomGame')
    }

    return (
        <div>
            메인 페이지
            <br /><a href='/boomGame'>안녕</a>
            <br /><Link to={'/boomGame'}>boom page</Link>
            <button onClick={handler}>boom page</button>

            <Link to={'/rspGame'}>가위바위보 page</Link>
        </div>
    )
}

export default Main

// boom 게임을 클래스 함수 컴포넌트에서 화살표 함수 컴포넌트로 만들고
// 메인페이지, boom 페이지 하나, GameOver 페이지
// 메인 페이지에서 게임 시작을 누르면 3 2 1 후 boom 페이지로 이동되게끔 
// 플레이를 하다가 게임오버 페이지 점수를 보여줄 것.
// 재시작 버튼 누르면 다시 메인 페이지로 이동