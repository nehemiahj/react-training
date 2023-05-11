// import { Component } from "react";

function Button(props) {
    return (
        <button onClick={(e) => props.btnClick(props.name)} style={{ width: "200px", padding: "20px" }}>{props.name}</button>
    )
}

export default Button;