import React from "react";
import "../index.css";

export default function NavButton(props) {
  //  function primaryClick() {}
  //  function marketplaceClick() {}

  if (props.children === "PRIMARY") {
    return (
      <button onClick="primaryClick" className="btns bg-whites">
        {props.children}
      </button>
    );
  } else if (props.children === "MARKETPLACE") {
    return (
      <button onClick="primaryClick" className="btns bg-whites">
        {props.children}
      </button>
    );
  }
}
