import { Component } from 'react';
import Boom from '../components/Boom';
import BoomImage from '../image/boom.png';

export default class BoomGame extends Component {
    // 상태 변수 초기화
    constructor() {
        super()
        this.state = {
            over: false,
            Count: 0,
            boom: Math.floor(Math.random() * 9),
            boomCount: 9
        }
    }

    componentDidMount() {
        console.log(this.state)
        // 최초에 한번 호출
    }

    componentDidUpdate() {
        console.log('설마 게임 끝 ?')
        // 상태 변수가 변경되면 호출 해야 할 로직
    }

    componentWillUnmount() {
        // 컴포넌트가 화면에서 보이지 않게 된 경우
    }

    setCount = () => {
        this.setState({ ...this.state, count: this.state.count + 1 });
    }

    gameOver = () => {
        setTimeout(() => {
            this.setState({ ...this.state, over: true });
        }, 1000);
    }

    setBoom = () => {
        const count = this.state.boomCount;
        return (Array(count).fill(null).map((props, index) => <Boom gameOver={this.gameOver}
            setValue={index === this.state.boom ? this.setCount : this.setCount} over={this.state.over} />))
    }

    render() {
        return (
            <div className="boom-game-manager">
                <span>{this.state.Count}</span>
                {this.state.over ? <div>게임 오버</div> : <this.setBoom />}
            </div>
        )
    }
}

// { BoomGame }
// BoomGame

// 그러면 default로 하나만 export 내보냈는데
// 객체의 키 값으로 받아올 수 있다고 하셨는데
// import로 가져오고 클래스 안에 객체를 사용하고 싶을 때 구조분해할당해서 사용 하면 되는지 여쭤보기

// img src 뒤 alt는 무엇인지 알아보기
// img가 로드가 되지 않았을 때의 대체할 텍스트를 작성

// 1 게임 매니저 ok
// 2 폭탄 ok
// 3 게임 매니저의 역할 분리(게임 오버, 게임 점수 ok, 랜덤한 지뢰의 값)
// 4 폭탄의 역할(활성화인지, 비활성화인지 ok)