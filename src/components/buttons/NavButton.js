import React from "react";
import "../index.css";

export default function NavButton(props) {
  //  function primaryClick() {}
  //  function marketplaceClick() {}

  if (props.children === "PRIMARY") {
    return (
      <button
        onClick="primaryClick"
        className="rounded-full w-36 h-8 font-lalezar hover:opacity-80 active:translate-y-0.5; bg-whites text-black"
      >
        {props.children}
      </button>
    );
  } else if (props.children === "MARKETPLACE") {
    return (
      <button
        onClick="primaryClick"
        className="rounded-full w-36 h-8 font-lalezar hover:opacity-80 active:translate-y-0.5; bg-whites text-black"
      >
        {props.children}
      </button>
    );
  }
}
