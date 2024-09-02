import axios from 'axios';

export const getTodoList = async () => {
    const { data } = await axios.get("http://localhost:4000/todo");
    return data;
};

export const sign = async (_data) => {
    const { data } = await axios.post("http://localhost:4000/sign", _data)
    return data
}

export const getUsers = async () => {
    const { data } = await axios.get("http://localhost:4000/users")
    return data
}

export const login = async (_data) => {
    const { data } = await axios.post("http://localhost:4000/login", _data);
    return data
}