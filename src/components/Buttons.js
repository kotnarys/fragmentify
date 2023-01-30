import React from "react";
import "../index.css";

export default function Buttons(props) {
  // function spliClick() {}
  // function sellClick() {}
  // function cancelSellClick() {}
  //  function applyClick() {}
  //  function purchaseClick() {}
  //  function buyClick() {}
  //  function joinClick() {}
  //  function primaryClick() {}
  //  function marketplaceClick() {}
  if (props.children === "SPLIT") {
    return (
      <button onClick="SpltClick" className="btns bg-violets">
        {props.children}
      </button>
    );
  } else if (props.children === "PURCHASE") {
    return (
      <button onClick="purchaseClick" className="btns bg-violets">
        {props.children}
      </button>
    );
  } else if (props.children === "SELL") {
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
  } else if (props.children === "APPLY") {
    return (
      <button onClick="applyClick" className="btns bg-grens">
        {props.children}
      </button>
    );
  } else if (props.children === "BUY") {
    return (
      <button onClick="buyClick" className="btns bg-reds">
        {props.children}
      </button>
    );
  } else if (props.children === "JOIN") {
    return (
      <button onClick="joinClick" className="btns bg-grens">
        {props.children}
      </button>
    );
  } else if (props.children === "RESERVE") {
    return (
      <button onClick="purchaseClick" className="btns bg-violets">
        {props.children}
      </button>
    );
  } else if (props.children === "PRIMARY") {
    return (
      <button onClick="primaryClick" className="btns bg-violets">
        {props.children}
      </button>
    );
  } else if (props.children === "MARKETPLACE") {
    return (
      <button onClick="primaryClick" className="btns bg-violets">
        {props.children}
      </button>
    );
  }
}
