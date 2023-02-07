import React from "react";
import "../../index.css";

export default function NFTButtons(props) {
  // function spliClick() {}
  //  function applyClick() {}
  //  function joinClick() {}

  if (props.children === "SPLIT") {
    return (
      <button onClick="SpltClick" className="btns bg-grens">
        {props.children}
      </button>
    );
  } else if (props.children === "APPLY") {
    return (
      <button onClick="applyClick" className="btns bg-grens">
        {props.children}
      </button>
    );
  } else if (props.children === "JOIN") {
    return (
      <button onClick="joinClick" className="btns bg-grens">
        {props.children}
      </button>
    );
  }
}
