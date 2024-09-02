const express = require('express');
const app = express();

const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors());

// 쿼리문으로 where을 통해서 작성하면 편하게 작성할 수 있음
const Item = [
    { id: 1, title: "hyeok" },
    { id: 2, title: "jae" },
    { id: 3, title: "minji" },
    { id: 4, title: "joonghyeon" },
    { id: 5, title: "seok" },
    { id: 6, title: "god_kkh" },
    { id: 7, title: "jong" },
    { id: 8, title: "what" },
    { id: 9, title: "why" },
    { id: 10, title: "who" },
] // 2개씩 보여준다고 가정하면 5개의 페이지 넘버


// 보여주는 글의 갯수
const pageViewCount = 2;

app.get('/page/:pageIndex', (req, res) => {
    // params가 현재 /:pageIndex 여서 const pageIndex 생성
    const { pageIndex } = req.params;

    // pageIndex
    const index = parseInt(pageIndex);

    // 페이지 번호에 해당하는 시작 인덱스 계산
    const startIndex = (index - 1) * pageViewCount;
    // startIndex 글의 배열에서 잘라야 하는 시작점 인덱스

    const pageItem = Item.slice(startIndex, startIndex + pageViewCount);

    res.send(pageItem);
})

app.listen(4000, () => {
    console.log('서버 드가자 ~');
});