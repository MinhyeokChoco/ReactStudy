const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let count = 10;
let todoList = [{ id: 1, name: "hyeok" }]
let users = [];

app.get("/count", (req, res) => {
    res.send(count.toString());
})

app.post("/count", (req, res) => {
    const { incrementCount } = req.body;
    console.log(incrementCount);
    count += incrementCount
    res.send(count.toString());
})

app.get("/todo", (req, res) => {
    setTimeout(() => {
        res.send(todoList);
    }, 2000);
})

app.post("/todo", (req, res) => {
    console.log(req.body);
    const todoInput = req.body;
    console.log(todoInput);
    todoList.push(todoInput)
    console.log(todoList);
    res.send(todoList);
})

app.post("/sign", (req, res) => {
    const { uid, upw } = req.body;
    users.push({ uid, upw });
    console.log(typeof (uid, upw));
    res.send("가입 완료");
})

app.get("/users", (req, res) => {
    res.send(users);
})

app.post("/login", (req, res) => {
    const { uid, upw } = req.body;
    console.log(req.body);
    console.log(uid.value, upw.value);
    if (uid.value === users[0].uid && upw.value === users[0].upw) {
        res.send("로그인 완료");
    } else {
        res.send("로그인 실패");
    }
})

app.listen(4000, () => {
    console.log("server start");
})