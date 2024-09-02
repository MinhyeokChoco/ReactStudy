import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0, // 만약 설정 안하면 0으로 설정됨, 0이 기본값, 원하는 시간도 setTimeout처럼 주는지
      // 썩는 시간을 주는 옵션으로써 Infinity는 무한으로 준다는 설정이기 때문에 새로운 업데이트가 불가능하다.

      // gcTime : 10000, // 기본값이 5분
      retry: 0, // 요청이 실패하면 몇번 재요청하고 오류를 발생시킬지
      suspense: true, // react의 suspense 컴포넌트의 비동기 처리 로직을 사용할 수 있다.
    },
  },
})
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
    {/* <ReactQueryDevtools initialIsOpen={false} buttonPosition={"top-left"} /> */}
    {/* 기본 값은 bottom-right */}
    {/* 버튼 포지션이 무엇을 의미하는지 */}
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
