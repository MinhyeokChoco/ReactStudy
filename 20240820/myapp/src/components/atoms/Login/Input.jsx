
// export const Input = ({ name, type }) => {
//     return (<input name={name} type={type}></input>);
// }

import useInput from "../../../hooks/useInput";

// 커스텀 훅
export const Input = (props) => {
    const userInput = useInput("");
    // { value, onChange }
    // return (<input {...props} {...userInput} />);
    return <>
        <input {...props} {...userInput} />
    </>
}