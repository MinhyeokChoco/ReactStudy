// ES6 문법
const test = (msg) => {
    const arr = [1, 2, 3];

    // 스프레드 연산자
    const arr2 = [...arr];

    // 템플릿 리터럴 ES6
    console.log(...arr, msg);
}

test("안뇽");