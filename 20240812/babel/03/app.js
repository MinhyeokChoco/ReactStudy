class App extends React.Component {
    // 페이지 렌더링
    render() {
        // JSX 문법은 무조건 하나의 태그로 감싸서 내보내야 함
        return (
            <ul>
                <li>list num</li>
                <li>list num</li>
                <li>list num</li>
            </ul>
        )
    }
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);