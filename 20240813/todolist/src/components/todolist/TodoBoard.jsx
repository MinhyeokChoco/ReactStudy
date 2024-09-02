import React from 'react';
import TodoItem from './TodoItem';

function TodoBoard({ todoList, handleDelete }) {

    return (
        <div id='list-wrap'>
            {todoList.map((item, index) => <TodoItem key={index} item={item} index={index} handleDelete={handleDelete} />)}
        </div>
    )
}

export default TodoBoard