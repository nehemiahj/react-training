import { Component } from "react";
import "./CustomButton.scss";
class CustomButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button className="buttonStyle" onClick={this.props.onClick}>
        {this.props.name}
      </button>
    );
  }
}

export default CustomButton;
