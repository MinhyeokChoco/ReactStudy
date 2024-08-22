import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // App 컴포넌트의 모든 자식 컴포넌트가 전역 store 상태에 접근 할 수 있게
  // store에 컴포넌트를 주입
  // react-redux에서 hook을 제공을 하고 Provider도 제공
  // 사용할 전역 상태 인스턴스 store를 전달
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
