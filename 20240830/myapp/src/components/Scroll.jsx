import React from 'react'
import { useEffect } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { getPages } from '../api'

// hooks 폴더에 useScrollEnd.jsx 내용
const useScrollEnd = (onScrollToEnd) => {
    useEffect(() => {
        const handlerScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight)
                onScrollToEnd();
        }

        window.addEventListener('scroll', handlerScroll);

        return () => {
            window.removeEventListener('scroll', handlerScroll);
        }
    }, [onScrollToEnd])
}

const Scroll = () => {

    const {
        data,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage
    } = useInfiniteQuery({
        queryKey: ["pagination"],
        queryFn: getPages,
        initialPageParam: 1,
        getNextPageParam(lastPage, allPages) {
            return allPages.length < 10 ? allPages.length + 1 : undefined;
        }
    })

    useScrollEnd(fetchNextPage);

    return (<>
        <div className='scroll-content'>
            {console.log(data)};
            {data.pages.map((page, i) =>
                <div key={`page${i}`}>
                    <div className='newDiv'>
                        {page.map((el, i) => <div key={`content${i}`}>번호 : {el.id} 제목 : {el.title}</div>)}
                    </div>
                </div >
            )}
        </div>
    </>
    )
}

export default Scroll;