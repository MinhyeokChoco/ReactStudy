import React from "react";

function TodoItem({ item, index, handleDelete }) {

    return (
        <div className="todo-item">
            <span>{item}</span>
            <button className="btnDel" onClick={() => handleDelete(index)}>삭제</button>
        </div>
    )
}

export default TodoItem;