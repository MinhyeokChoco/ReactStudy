import React from 'react';
import TodoItem from './TodoItem';

function TodoBoard(props) {

    return (
        <div id='list-wrap'>
            {props.todoList.map((item, index) => <TodoItem item={item} key={index} />)}
        </div>
    )
}

export default TodoBoard;