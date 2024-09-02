import { useEffect } from "react";
import { Button } from "../atoms/Button";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from "../../action";

export const Form = () => {
    // store에 접근해서 전역 상태를 참조
    // useSelector : store의 상태를 참조할 수 있게 도와주는 hook 함수
    // useSelector로 값을 참조하면 가져온 상태를 주시하게 된다.
    // 주시하고 있는 값이 변하면 해당 컴포넌트가 리렌더링
    // 매개변수로 콜백함수 전달.
    // 콜백함수에서 반환된 값을 주시한다.
    // 콜백함수의 매개변수로 현재 상태를 할당해준다.

    const order = useSelector(state => state.orderReducer.order);
    console.log(order);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(order);
    }, [order])

    const handlerOrder = (e) => {
        if (e.target.innerText === "짜계치 주문") {
            // await axios.get() === 이런 부분은 함수로 정리, 액션 크리에이터 함수
            // dispatch(async (dispatch, getState) => {
            // getState : 현재 상태의 객체 (두번째 매개변수로 들어옴)
            //     const payload = await axios.get()
            //     dispatch({ type: "짜계치", payload: {} })
            // }) // 매개변수로 함수를 전달하면 액션 크리에이터 함수로 처리를 한다.
            // 여기는 비동기처리가 끝날때 까지 동작 하지 않는다.
            dispatch(getUserAction())
        } else if (e.target.innerText === "낙곱새대창우동사리전골 주문") {
            dispatch({ type: "낙곱새대창우동사리전골", payload: {} })
        }
    }

    return <>
        <h1>{order === "" ? "주문하시겠습니까?" : `${order} 나왔습니다.`}</h1>
        <Button onClick={handlerOrder}>짜계치 주문</Button>
        <Button onClick={handlerOrder}>낙곱새대창우동사리전골 주문</Button>
    </>
}