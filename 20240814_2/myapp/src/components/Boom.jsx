import { Component } from "react";
import BoomImg from '../image/boom.png';
import BoomActiveImg from '../image/boomActive.jpeg'

export default class Boom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        }
    }

    componentDidMount() {
        console.log('최초에 한번 호출');
        console.log(this.state.isActive);
    }

    componentDidUpdate() {
        console.log('상태 업데이트');
        console.log(this.state.isActive);
    }

    onClickHandler = () => {
        if (this.state.isActive) return
        if (this.props.over === true) return
        this.setState({ ...this.state, isActive: true })
        this.props.setValue();
    }

    render() {
        return (
            // 함수 실행식을 작성해놓으면 undefined를 반환하고 함수의 값을 작성해야 함
            <div onClick={this.onClickHandler}>
                <img src={this.state.isActive ? BoomActiveImg : BoomImg} alt="" />
            </div>
        )
    }
}

// super를 안 쓰면 왜 오류가 나는지 여쭤보기
// 부모 클래스의 생성자 함수의 호출 값을 호출해서 사용하기 위하여