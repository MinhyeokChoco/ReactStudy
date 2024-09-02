import React from 'react';
import axios from 'axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getTodoList } from '../api/index.js';
import { useState } from 'react';

const Todo = () => {
    const [todoInput, setTodoInput] = useState();

    const { data, refetch } = useQuery({
        queryKey: ["todo"],
        queryFn: getTodoList,
        retry: 0,
    })

    const mutation = useMutation({
        mutationFn: async (data) => {
            console.log(data)
            const _data = await axios.post('http://localhost:4000/todo', { ...data })
            console.log(_data)
            return _data
        },
        onMutate(data) {
            // mutation 객체 안에 함수를 호출해서 mutation을 호출하면
            // 매개변수로 전달한 내용을 확인할 수 있다.
            console.log(data);
        },
        onError(err) {
            console.log(err);
        },
        onSettled() {
            // 맨 마지막에 호출 되는 내용
            // console.log("123");
        },
        onSuccess() {
            console.log(data);
            refetch()
        }
    });

    // 둘 다 동일
    // if (status === "pending") return <>loading..</>
    // if (isLoading) return <>loading..</>

    // 둘 다 동일
    // if (status === "error") return <>error...</>
    // if (isError) return <>error...</>

    // key={"todo" + index} key값을 줘야 하는 이유는
    // 리액트가 리렌더링을 감지할 때 key 값으로 판단 해서 그리기 때문에
    // key 값이 없으면 자식으로 컴포넌트를 동적으로 생성하는 경우에 리렌더링이 되지 않는 문제가 발생 할 수 있다.
    // 동적으로 생성했을 때는 키 값이

    const todoInputHandler = (e) => {
        setTodoInput(e.target.value)
    }

    const handlerClick = () => {
        const todo = {
            id: data.length + 1,
            name: todoInput
        }
        mutation.mutate(todo)
    }
    return (
        <div>
            {/* {data.map(el, index => <div key={"todo" + index}>{el.id} : {el.name}</div>)}
             */}
            <input type="text" name='todoData' value={todoInput} onChange={todoInputHandler} />
            <button onClick={handlerClick}>작성</button>
            {data.map((el, index) => <div key={"todo" + index}>{el.id} : {el.name}</div>)}
        </div>
    )
}

export default Todo;