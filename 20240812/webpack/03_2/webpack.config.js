const path = require('path');

const htmlWebPackPlugin = require('html-webpack-plugin');
// htmlWebPackPlugin : 번들링이 될 때 html 생성 설정 속성을 줄 수 있는 플러그인

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    module: {
        rules: [
            {
                // 읽을 파일 확장자 js와 jsx
                test: /\.(js|jsx)$/,

                // 읽는 내용에서 제외 시키고 싶은 파일들 혹은 폴더
                exclude: /node_modules/,

                // 로더는 바벨
                use: ["babel-loader"]
            }
        ]
    },

    // 사용할 플러그인
    plugin: [
        // html을 생성해줄 플러그인
        new htmlWebPackPlugin({
            // template 우리가 번들링 된 곳에 생성할 html의 내용을 제공할 파일
            template: 'src/index.html',
            // 번들링에서 생설될 html의 이름
            filename: "myIndex.html"
        })
    ],

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    }
}

// css 로더를 추가해보기

// 목표, 중요한 것 : 바벨과 웹팩이 어떠한 목적성을 가지고 사용 되는지 알아야 함
// 어떤 역할을 담당하고 있는지 내부를 파악 해야 함