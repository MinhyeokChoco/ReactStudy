import React from 'react'
import { countState, paginationState } from './recoil/CountAtom'
import { useRecoilState } from 'recoil';
// useStated와 동일하게 value와 setState를 둘 다 제공한다.

const Count = () => {
    const [count, setCount] = useRecoilState(countState);
    count[pagination, setPagination] = useRecoilState(paginationState);

    const increment = () => {
        setCount({ ...count, num: count.num + 1 });
    }

    const decrement = () => {
        setCount({ ...count, num: count.num - 1 });
    }

    const pageIncrement = () => {
        setPagination();
    }

    return <>
        count : {count.num}
        <button onClick={increment}>증가</button>
        <button onClick={decrement}>감소</button>
        페이지 : {pagination}
        <button onClick={pageIncrement}>페이지 증가</button>
    </>
}

export default Count
