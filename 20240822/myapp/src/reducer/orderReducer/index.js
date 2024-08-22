// 리듀서 함수
// 초기값을 기본으로 할당

// state
// 기본값을 할당
// 초기에는 기본값이 사용된다.

const initialState = {
    order: ""
}

const reducer = (state = initialState, action) => {
    // state 초기에는 기본값으로 할당한 initialState가 할당되고
    // 상태를 업데이트한 이후에는 이전 상태값을 할당해준다.
    // reducer 꼭 반환 값이 있어야 한다.
    // 그래서 switch 문에서 break가 아닌 return을 사용
    const { type, payload } = action;
    switch (type) {
        case "짜계치":
            return { ...state, order: "짜계치" };

        case "낙곱새대창우동사리전골":
            return { ...state, order: "낙곱새대창우동사리전골" }

        default:
            return state;
    }
}

export default reducer;