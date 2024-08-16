import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Game from './page/Game';
import Boom from './page/Boom';
import Main from './page/Main';

const App = () => {

  // 생명주기
  // 'react hook' : 기능을 가져온다. (자주 사용하는 유용한 기능들을 hook 만들어 뒀음)
  // 접두사로 use가 꼭 붙는다. (규칙)

  // 상태 변수는 값을 가지고 있는 변수 하나, 상태 변수 전환 함수 하나, 이렇게 두가지를 가지고 있어야 한다.

  // useState의 반환 데이터 타입은 배열의 타입을 반환한다. (첫번째 상태 변수, 두번째 setState 함수)
  // 함수 호출 할 때 매개변수로 전달하는 값이 초기값
  // count === [value, setState]

  // const [count, setCount] = useState(0)
  // const [name, setName] = useState('');

  // const increment = () => {
  //   setCount(count + 1);
  // }

  // useEffect : 첫번째 매개변수로 함수를 전달, 두번째 매개변수로 배열의 요소로 주시할 값을 전달
  // 만약 배열이 빈 배열이면 mount의 생명주기 함수

  // useEffect(() => {
  //   console.log(count);
  // }, [])

  // useEffect(() => {
  //   console.log("나는 마운트와 업데이트")
  //   console.log(count);
  // }, [count, name]);

  // 생명주기 willUnmount
  // useEffect(() => {
  //   return () => {
  //     // 반환한 함수를 컴포넌트가 사라졌을 때 호출
  //     console.log('컴포넌트가 사라졌다.')
  //   }
  // }, []);

  return (
    <div>
      {/* 안녕하세요
      <p>count : {count}</p>
      <button onClick={increment}>증가</button>
      <p>name : {name}</p>

      <button onClick={() => { setName("newName") }}>이름 변경</button> */}
      <div>gnb</div> {/* gnb : global navigation bar의 약자 / footer */}
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/rspGame' element={<Game />} />
        <Route path='/boomGame' element={<Boom />} />
      </Routes>
      <div>footer</div>
    </div>
  )
}

export default App;
