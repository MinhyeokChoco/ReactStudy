import { atom, selector } from "recoil";

// 스토어 생성
export const countState = atom(
    {
        key: "count",
        default: {
            num: 0,
            name: "pageCount"
        }
    }
);

export const boardState = atom(
    {
        key: "board",
        default: {
            num: 0,
            name: "pageCount"
        }
    }
);

// 스토어의값으로 연산을 통해 상태변수를 생성
export const paginationState = selector({
    key: "pagination", // 디버깅 용도로 사용
    get: ({ get }) => {
        // get 다른 스토어의 값을 참조 할수 있는 메서드
        const { num } = get(countState);
        return `page ${num} 번째야`
        // 상태변수로 전달 return 값이
        // 게시글의 내용을 요청하는 연산을 한다고 가정하면
        // 게시글의 내용이 전역 상태로 관리될수 있다. 
    },
    set: ({ set, get }, newState) => {
        // newState === {num : 1, name : "pageCount"}
        const { num, name } = get(countState);
        // 스토어의 값을 변경
        // { num: num + 1, name } 전달한 값으로 스토어의 상태가 변경된다.
        set(countState, { num: num + 1, name })
    }
})


export const Login = atom({
    key: "Login",
    default: {
        uid: "",
        upw: ""
    }
})


export const LoginCheck = selector({
    key: "LoginCheck",
    get: async ({ get }) => {
        const data = await new Promise((res, rej) => {
            const { uid, upw } = get(Login);
            const user = { uid: "123", upw: "456" };
            if (user.uid === uid && user.upw === upw) {
                setTimeout(() => {
                    res("로그인 성공");
                }, 3000)
            } else rej("로그인 실패");
        })
        return data;
    }
})