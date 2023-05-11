import { useState } from "react";
import withCounter from "../../../HOC/withCounter/withCounter";
import "./CardHoverCounter.scss";
function CardHoverCounter(props) {
  return (
    <div
      className="CardHoverCounter"
      // style={{ backgroundColor: background }}
      onMouseEnter={props.inCount}
    >
      Card Hover Counter
      <br />
      <br />
      {props.count}
    </div>
  );
}
export default withCounter(CardHoverCounter);
