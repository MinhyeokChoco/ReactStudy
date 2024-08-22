import { useState } from "react";
import Login from "./components/Page/Login/Login";
import Main from "./components/Page/Main/Main";
import { Routes, Route, Navigate } from "react-router-dom"
import MyPage from "./components/Page/MyPage/MyPage";
import Detail from "./components/Page/Detail/Detail";
import Shop from "./components/Page/Shop/Shop";

function App() {
  // 전역에서 필요한 로그인 정보 모든 컴포넌트가 필요함
  // 전역 상태 배우기전에 전역상태를 뭐뭐를 사용해야할까 설계를 하는 사고를 키우자.
  const [loginInfo, setLoginInfo] = useState(null);

  // 컴포넌트가 컴포넌트를 반환
  // 리다이렉트를 시키는 컴포넌트
  // 고차 컴포넌트
  const Redireact = () => {
    // if (loginInfo) return <MyPage loginInfo={loginInfo} />
    // return (<Login />)
    // 이거 제일 문제 경로가 http://localhost:3000/mypage 인데 로그인 컴포넌트가 뜸. 
    // 이러면 url을 관리할수가 없지.

    // Navigate 컴포넌트 활용
    // 리다이렉트 재요청 보냄
    if (loginInfo) return <MyPage loginInfo={loginInfo} />
    return (<Navigate to={'/login'} />)
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login loginInfo={{ loginInfo, setLoginInfo }} />} />
        <Route path="/mypage" element={<Redireact />} />
        <Route path="/shop" element={<Shop />} />
        {/* 상세페이지에서 상태변수로 다루게 되면 공유가 안됨 */}
        <Route path="/detail/:num" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
