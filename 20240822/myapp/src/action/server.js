const express = require('express');
const cors = require("cors")

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    console.log("123")
    res.send('짜계치')
})

app.listen('4000', () => {
    console.log('server on');
})