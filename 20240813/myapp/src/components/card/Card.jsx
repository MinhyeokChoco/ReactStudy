import React, { Component } from 'react'

export default class Card extends Component {
    constructor(props) {
        console.log(props)
        super(props)
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        // 최초 생성시 한번
        console.log("최초에 한번 나왔니?")
    }

    componentDidUpdate() {
        // 업데이트 될때마다 상태변수 변할때마다
        console.log("나 업데이트 됬어")
        // 상태변수가 업데이트되었을때
        console.log(this.state.count);
    }

    incrementCount = () => {
        this.setState({ ...this.state, count: this.state.count + 1 })
        // 아직 상태가 전환되기 전에 상태값이 찍히는것.
        console.log(this.state.count);
    }

    render() {
        return (
            <div className='card'>
                <div classNam="title">{this.props.title}</div>
                <div classNamee="content">
                    <p>{this.props.text}</p>
                    <p>{this.props.children}</p>
                    <button onClick={this.incrementCount}>카운트 증가</button>
                    <div>카운트 : {this.state.count}</div>
                </div>
            </div>
        )
    }
}
