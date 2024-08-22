import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(0);

    const countIncrement = (e) => {
        setCount((prev) => prev + 1)
    }

    const itemIncrement = (e) => {
        setItem((prev) => prev + 1)
    }


    return (
        <div>
            <Child item={item} />
            <h1>count : {count}</h1>
            <button onClick={countIncrement}>증가</button>
            <button onClick={itemIncrement}>자식 카운트 증가</button>
        </div>
    )
}

export default Parent
