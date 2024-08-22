import React from 'react'
import { useCallback } from 'react';
import { useState } from 'react'

const Scroll = () => {
    const [data, setData] = useState([]);
    const [fetchData, setFetchData] = useState([]);

    const handlerFetch = useCallback(() => {
        setData(prve => [...prve, fetchData])
    }, [fetchData]) // fetchData 데이터의 값이 바뀌지 않으면 아이템의 개수는 바뀌지 않는다.

    const handlerScroll = async (e) => {
        if (true) { // 스크롤이 화면의 맨 밑에 도달했을 때
            setFetchData(await axios.get());
            handlerFetch();
        }
    }

    return (
        <div onScroll={handlerScroll}>
            {data.map(e => <div>e.name</div>)}
        </div>
    )
}

export default Scroll;