import { useState } from "react";
import { useCallback } from "react";

export const Callback = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    const handlerIncrement = useCallback(() => {
        setCount(prve => prve + count2);
    }, []);

    const handlerIncrement2 = useCallback(() => {
        setCount2(prve => prve + 1)
    }, [count2])

    return <>
        <div>
            count : {count}
            <button onClick={handlerIncrement}>count 증가</button>
        </div>
        <div>
            count2 : {count2}
            <button onClick={handlerIncrement2}>count2 증가</button>
        </div>
    </>
    // 무한 스크롤을 만들때
}