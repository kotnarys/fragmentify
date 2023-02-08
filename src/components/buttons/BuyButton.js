import React from "react";
import "../index.css";

export default function BuyButton(props) {
  //  function reserveClick() {}
  //  function purchaseClick() {}
  //  function buyClick() {}

  if (props.children === "BUY") {
    return (
      <button onClick="buyClick" className="btns bg-violets">
        {props.children}
      </button>
    );
  } else if (props.children === "PURCHASE") {
    return (
      <button onClick="purchaseClick" className="btns bg-violets">
        {props.children}
      </button>
    );
  } else if (props.children === "RESERVE") {
    return (
      <button onClick="reserveClick" className="btns bg-violets">
        {props.children}
      </button>
    );
  }
}
