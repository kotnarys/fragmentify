import React from "react";
import "../index.css";

export default function SellButton(props) {
  // function sellClick() {}
  // function cancelSellClick() {}

  if (props.children === "SELL") {
    return (
      <button onClick="SellClick" className="btns bg-reds">
        {props.children}
      </button>
    );
  } else if (props.children === "CANCEL SELL") {
    return (
      <button onClick="CancelSellClick" className="btns bg-reds">
        {props.children}
      </button>
    );
  }
}
