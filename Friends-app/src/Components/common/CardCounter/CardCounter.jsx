import { Component } from "react";
import "./CardCounter.scss";
import withCounter from "../../../HOC/withCounter/withCounter";
class CardCounter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className="CardCounterStyle"
        style={{ backgroundColor: this.props.background }}
        onClick={this.props.inCount}
      >
        Card Counter
        <br />
        <br />
        {this.props.count}
      </div>
    );
  }
}

export default withCounter(CardCounter);
