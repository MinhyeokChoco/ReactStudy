import { atom, selector } from 'recoil';

// 스토어 생성
export const countState = atom({
    key: "count",
    default: {
        num: 0,
        name: "pageCount"
    }
})

export const LoginCheck = selector({
    key: "LoginCheck",
    get: (async ({ get }) => {
        const data = await new Promise((res, rej) => {
            const { uid, upw } = get(Login);
            const user = { uid: "123", upw: "456" }
        })
    })
})