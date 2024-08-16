import './App.css';
import React, { useState } from 'react';
import TodoBoard from './components/todolist/TodoBoard';
import Header from './components/page/Header';
import Footer from './components/page/Footer';

function App() {

  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addItem = () => {
    console.log('i am todoList', inputValue)
    setTodoList([...todoList, inputValue])
  }

  return (
    <div className="App">
      <Header />
      <div id='body'>
        <div id='input-wrap'>
          <input type="text" value={inputValue} onChange={event => { setInputValue(event.target.value) }} id='input' />
          <button onClick={addItem} id='input-btn'>추가</button>
        </div>
        <TodoBoard todoList={todoList} />
      </div>
      <Footer />
    </div>
  );
}

export default App;

// 버튼 추가 해서 삭제 할 수 있게 만들고
// 리스트 CSS 좀 더 만지기
// 위아래 가운데 정렬 하고 오른쪽에 버튼 추가
// 버튼 누르면 삭제 기능 구현해보기
// 참고 사이트
// https://velog.io/@hsecode/React-%EC%B4%88%EA%B0%84%EB%8B%A8-%ED%88%AC%EB%91%90%EB%A6%AC%EC%8A%A4%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0