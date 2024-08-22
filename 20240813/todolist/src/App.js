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

  const handleDelete = (index) => {
    const newList = [...todoList];
    newList.splice(index, 1);
    setTodoList(newList);
  }

  return (
    <div className="App">
      <Header />
      <div id='body'>
        <div id='input-wrap'>
          <input type="text" value={inputValue} onChange={event => { setInputValue(event.target.value) }} id='input' />
          <button onClick={addItem} id='input-btn'>추가</button>
        </div>
        <TodoBoard todoList={todoList} handleDelete={handleDelete} />
      </div>
      <Footer />
    </div>
  );
}

export default App;