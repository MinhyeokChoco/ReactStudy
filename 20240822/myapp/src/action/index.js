import axios from "axios";

// 액션 크리에이터 함수
export const getUserAction = () => {
    return async (dispatch, getState) => {
        const { data } = await axios.get("http://localhost:4000")
        // console.log(data);
        dispatch({ type: data, payload: data })
    }
}