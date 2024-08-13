const path = require("path");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    // module 모듈의 규칙을 설정
    module: {
        rules: [{
            test: /\.css$/,
            // test 읽을 파일
            // css가 붙은 파일을 읽어오고
            // 어떤 로더로 읽을지 확인
            use: ["style-loader", "css-loader"]
            // use 파일을 읽을때 사용할 로더 작성
            // "style-loader", "css-loader" : html 문서의 헤드에 style 태그를 추가 이후 css의 코드를 추가
        }]
    },

    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "dist")
    }
}