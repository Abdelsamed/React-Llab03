import { Component } from "react";
class Task4 extends Component {
    constructor() {
        super();
        this.state = ({
            number: 0
        })
    }
    handlePlus() {
            this.setState({
                number: this.state.number +1
            })
    }
    handledecrement() {
        this.state.number > 1 &&
            this.setState({
                number: this.state.number - 1
            })
    }

    render() {
        return (
            <div className="btns-wrapper">
                <button className="Plus" onClick={() => this.handlePlus()}>+</button>
                <span>{this.state.number}</span>
                <button className="decerment" onClick={() => this.handledecrement()}>-</button>
            </div>
        )
    }
}
export default Task4;

