import { Component } from "react";
import Boom from "../components/Boom";

export default class BoomGame extends Component {
    constructor() {
        super()
        this.state = {
            Over: false,
            Count: 0,
            boom: Math.floor(Math.random() * 9),
            boomCount: 9
        }
    }

    componentDidMount() {
        // 최초에 한번 호출
        console.log(this.state)
    }

    componentDidUpdate() {
        // 상태 변수가 변경되면 호출해야할 로직
        console.log("설마 게임 끝?");
    }

    componentWillUnmount() {
        // 컴포넌트가 화면에서 보이지 않게 된 경우
    }

    setCount = () => {
        this.setState({ ...this.state, Count: this.state.Count + 1 });
    }

    gameOver = () => {
        this.setState({ ...this.state, Over: true });
    }

    setBoom = () => {
        // 폭탄 초기화
        const count = this.state.boomCount;
        return (Array(count).fill(null).map((e, index) => <Boom gameOver={this.gameOver}
            setValue={index === this.state.boom ? this.gameOver : this.setCount} Over={this.state.Over} />))
    }

    render() {
        return (<div className="boom-game-manger">
            <span>{this.state.Count}</span>
            {this.state.Over ? <div>게임 오버</div> : <this.setBoom />}
        </div>)
    }
}


// 1 게임 매니저 V
// 2 폭탄 V
// 3 게임 매니저의 역활 분리(게임 점수 V, 게임 오버 , 랜덤한 지뢰의 값 )
// 4 폭탄의 역활(활성화인지 비활성화인지 V)