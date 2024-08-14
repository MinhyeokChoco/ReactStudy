import { Component } from "react"
import BoomImg from "../image/boom.png";
import BoomActiveImg from "../image/boomActive.jpg";

export default class Boom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        }
    }

    componentDidMount() {
        console.log("최초에 한번 호출");
        console.log(this.state.isActive);
    }

    componentDidUpdate() {
        console.log("상태 업데이트");
        console.log(this.state.isActive);
    }

    onClickHandler = () => {
        if (this.state.isActive) return
        if (this.props.Over === true) return
        this.setState({ ...this.state, isActive: true })
        this.props.setValue();
    }

    render() {
        return (
            <div onClick={this.onClickHandler}>
                <img src={this.state.isActive ? BoomActiveImg : BoomImg} alt="" />
            </div>
        )
    }
}