import React from "react";
import { render } from "react-dom";
import "./index.css";
import Button from "./components/Button.js";

function App() {
  return (
    <>
      <Button />
    </>
  );
}

render(<App />, document.querySelector("#root"));
