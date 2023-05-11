import { Component } from "react";
import "./ButtonCounter.scss";
import withCounter from "../../../HOC/withCounter/withCounter";
class ButtonCounter extends Component {
  constructor(props) {
    super(props);
    this.state={
      count:0
    }
  }
  render() {
    return (
      <div
        className="ButtonCounterStyle"
      >
        Button Counter
        <br />
        <button onClick={this.props.inCount}>Increament Counter</button>
        <br />
        <br />
        <br />
        {this.props.count}
      </div>
    );
  }
}

export default withCounter(ButtonCounter);