import React from "react";
import { Link } from "react-router-dom";
import "../index.scss";

export default function Button(props) {
  return (
    <Link to={"/market"}>
      <button className="startBtn" {...props}>
        START
      </button>
    </Link>
  );
}
