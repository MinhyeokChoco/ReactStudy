// input을 사용할때 재사용성이 높은 기능을 hook으로 정리

import { useState } from "react"

const useInput = (initialValue) => {
    // value, onChange 변수명을 정한 이유는 
    // 태그에 어트리뷰트로 전달을 할것이기 때문에
    const [value, setValue] = useState(initialValue);
    const [checked, setCheck] = useState(false);
    const onChange = (e) => {
        console.log(e.target.value);
        // 정규식 채크 부분을 넣게되면
        if (true) setCheck(true);
        setValue(e.target.value);
    }

    return { value, onChange, checked };
}

export default useInput;