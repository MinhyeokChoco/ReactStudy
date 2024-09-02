# Infinity Queries
> 무한으로 데이터를 표현할 때, 무한스크롤이나 더보기 같은 요청 로직을 처리할 때 사용하면 좋다.
> 캐시 메모리 관리도 유용하다.

```js
import { useInfiniteQuery } from "@tanstack/react-query";
const { 
        data, // 요청에 따른 값을 할당
        hasNextPage, // 다음 페이지가 존재하는지 여부, boolean 값으로 있으면 true 없으면 false 
        fetchNextPage, // 다음 페이지로 이동하는 요청
        isFetchingNextPage // 다음 페이지를 로딩하는 중 여부, boolean 값
        } = useInfiniteQuery ({
    queryKey : ['pagination'], // 고유의 유니크 키, 캐시 메모리 관리로 내부적으로 사용
    queryFn : apiFn, // 요청 비동기 함수
    initialPageParams : 1,
    // 페이지 번호, 1번부터 시작하겠다는 뜻, initial 초기 Page 페이지
    // 요청의 값의 초기값 / 예시) 페이지 넘버
    getNextPageParams(lastPage, allPages) {
        // lastPage : 마지막으로 가져온 내용
        // allPage : 지금까지 가져온 전체 페이지
        return allPages.length < 10 ? allPages.length + 1 : undefined;
        // 반환한 결과에 따라서 다음 페이지가 있는지 여부를 체크
    }
})
```

npm 설치

```sh
npm i @tanstack/react-query
npm i @tanstack/react-query-devtools
```

# Jotai