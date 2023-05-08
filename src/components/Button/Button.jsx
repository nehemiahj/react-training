import { Component } from "react";

class Button extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <button onClick={() => this.props.btnClick(this.props.name)} style={{ width: "200px", padding: "20px" }}>{this.props.name}</button>
        )
    }
}

export default Button;