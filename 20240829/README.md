## react query v5버전
> 이름이 tanstack query로 변경이 되었는데
> 리액트에서만 사용하는게 아니라 vue, solid 등등 다른 라이브러리에서도 사용이 가능하게 됨
> 다른 프레임워크에서도 지원을 포함하게 되었다.
> 생태계 확장이 된 것.

## react query의 목적
> 패치와 캐시의 서버 데이터를 관리를 해주는 라이브러리
> 비동기의 과정을 도와주는게 목적인 라이브러리
> 리액트에서 서버의 상태를 가져오고 캐싱해서 지속적인 패칭을 막아준다.

- 캐싱 : 특정 데이터의 내용을 메모리에 저장해서 동일한 내용의 접근의 속도를 높이는 것. 서버의 부하를 줄일 수 있음

- 캐싱 데이터가 최신 데이터인지를 확인하고 캐시 메모리를 다뤄야 한다.
    (최신 데이터인지 판별할 수 있는 값을 줘서 처리를 해야 함) / 최신 데이터 : fresh data

최신 데이터는 요청을 보낸 직후 fresh한 데이터 상태가 되고
정해진 시간이 지나면 썩은 데이터 `stale`한 데이터 상태가 되면
다시 refresh (refetch) 를 해서 새로운 데이터를 가져올 수 있는 상태가 된다.

1. Refetch란?
리페치는 react-query에서 캐시에 저장된 데이터가 `stale`
즉, 만료된 데이터이고 특정 조건을 만족하면 해당 데이터를 서버에서 다시 가져와서 캐시 데이터로 저장하는 개념이다.

- fresh 상태와 stale 상태는 react query에서는 staleTime과 cacheTime의 값을 사용한다.
> 여기서 cacheTime은 v4 까지의 이름이고 v5 부터 gcTime으로 바뀌었다. (garbage collector)

- 패칭 이후 fresh 상태의 데이터가 생기고 staleTime이 지나면 stale 상태의 데이터로 변한다.
이후에 refresh를 할 수 있는 데이터의 상태

- gcTime은 데이터가 in active, 화면에 보이고 있는 상태 일 때 캐시된 데이터가 상주할 시간
gcTime의 시간 만큼만 데이터가 유지된다.

- gcTime이 남아있는 경우 데이터를 참조하게 되면 fetch 하는 동안 보여주는 데이터가 된다.
이전의 캐시데이터를 보여주다가 fetch 되고 이후에 최신 데이터를 가져와서 보여준다.
 
## tanstack query의 상태

> fetching (staletime start) -> fresh (staleTime end) -> stale ->
inactive (gcTime end) -> 캐시 메모리 삭제

- fresh : 신선한 데이터 상태, 재요청(refetch)이 불가능하다.
- stale : 썩은 데이터 상태, 데이터의 재요청이 가능한 상태이다.
- inactive : 화면에 데이터가 보이는 상태, gcTime이 지나면 gabarge collector에서 수집해서 제거해준다.

## tanstack query의 상태 관리와 기능
> 서버 데이터의 상태를 관리하는 라이브러리
1. 캐싱
2. 동일한 데이터의 중복 요청을 단일 요청으로 만들 수 있다.
3. 오래된 데이터의 업데이트
4. 데이터가 얼마나 상주하는지 알 수 있다.
5. 서버의 상태의 메모리 관리 및 가비지 수집의 관리

화면에 데이터가 보이는 상태가 무엇인지 : 화면에 데이터가 보이는 상태 = 화면에 렌더되고 있는 상태
fetch가 요청이 맞는지 = 요청이 맞음, 쿼리 요청을 발생
@가 무엇인지 : 디렉토리 구조로 되어 있다. tanstack 디렉토리 안에 react-query 라이브러리를 다운

## tanstack query 설치

```sh
npm i @tanstack/react-query
```

## tanstack query 사용

```js
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
// 속성을 정의하고
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0, // 만약 설정 안하면 0으로 설정됨, 0이 기본값
      // 원하는 시간도 setTimeout처럼 주는지 : 맞음
      // 썩는 시간을 주는 옵션으로써 Infinity는 무한으로 준다는 설정이기 때문에 새로운 업데이트가 불가능하다.
      // gcTime : 10000, // 기본값이 5분
      // gcTime이 끝나게 되면 gabarge collector에서 데이터를 수집해서 삭제
      retry: 0, // 요청이 실패하면 몇번 재요청하고 오류를 발생시킬지
    },
  },
})

// QueryClientProvider의 client 키의 값으로 전달.
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
```

## dev tools 설치

```sh
npm i @tanstack/react-query-devtools
```

## tanstack query count
> src 폴더에 api 폴더 생성 후
> 경로를 api 폴더로 이동

```sh
npm init -y
# package-json 초기화 후
npm i express cors
# express, cors 설치
```

### useQuery // 이것도 훅인가요 ?
> 서버에 get의 요청을 보낼 때 사용
> 요청 메서드가 get 메서드를 요청 보낼 때 사용하는 hook


```js
import { useQuery } from "@tanstack/react-query";

const Count = () => {
    // useQuery
    // 첫번째 매개변수가 고유의 키값(유니크 키)이 될 배열 / ex) ['count', count]
    // 첫번째 매개변수의 팁은 해당 요청의 의존성을 가지고 있는 변수를 같이 넣어주면 좋다.
    // 두번째 매개변수 api 비동기 요청 함수
    // 세번째 매개변수 옵션 객체의 내용(로딩, 성공, 실패시 호출할 함수의 내용)
    // 매개변수 3개를 무조건 꼭 넣어줘야 하는지, 필요한 기본 값인지 여쭤보기

    // 버전이 업그레이드 되면서 다시 설명
    // 첫번째 매개변수가 쿼리의 내용 객체
    // 유니크 키와 값
    // 비동기 처리 함수의 키와 값
    const obj = useQuery({queryKey: : []}, queryFn : async () => {}, {}); // 반환하는 데이터 타입은 객체
}
```
// flux = redux
// atomic = recoil, jotai

### useQuery
- data : 쿼리 함수에서 반환한 값이 담기고
- dataUpdatedAt : 데이터 업데이트 된 시점
- error : 쿼리 함수에서 오류가 발생하면 오류 객체가 할당
- errorUpdateCount : 업데이트 횟수
- errorUpdatedAt : 업데이트 시점
- isLoading : 로딩중 상태일 경우 true 아닐 경우 false
- isPending : 요청 대기 상태일 경우 true 아닐 경우 false
- isStale : stale 상태가 되었는지 안되었는지, stale 상태면 true
- isSuccess : 성공의 여부 (true / false)
- refetch : 쿼리를 수동으로 다시 호출하는 메서드, 직접 호출해서 업데이트를 할 수 있는 메서드
- status : 로딩중인지 성공인지 에러인지 문자열로 반환

```js
    const obj = useQuery({
        queryKey: ["count"],
        queryFn: async () => {
            return await axios.get('http://localhost:4000/count')
        },
        refetchOnMount: true,
        refetchOnWindowFocus : true,
        enabled : false,
        retry : 10,
        select : (data) => {
            return data.map((i) => i)
        }
    })
    // refetchOnMount : 데이터가 썩은 상태가 되면 mount 마다 refetch를 실행
    // 기본값이 true
    // always로 설정하면 마운트마다 refetch를 실행
    // false 값이 들어가면 최초에 fetch를 진행하고 refetch를 하지 않음

    // refetchOnWindowFocus : always, boolean
    // 브라우저가 포커싱 될 때마다 refetch를 하는 속성값
    // 기본값, 최초에 true
    // true는 stale 상태 일 때만 윈도우 포커싱 하면 refetch
    // always로 설정하게 되면 포커싱 될 때마다 refetch
    // always는 fresh 데이터 상태 여도 refetch 한다.

    // enabled : 쿼리가 자동으로 실행되지 않도록 설정
    // enabled false로 하면 isPending이 true
    // 원할 때 refetch 메서드를 호출

    // retry : 시도 했을 때 오류가 발생하면 재시도를 몇번 할 지 결정

    // select : queryFn에서 반환한 데이터를 매개변수로 받아서 data키에 값을 할당해준다.
```

### useMutation
> tanstack-query에서 post 요청을 하는 경우 사용하는 hook
> 값을 전달해서 요청의 내용으로 포함시켜서 쿼리의 내용을 처리하기 위해서 사용