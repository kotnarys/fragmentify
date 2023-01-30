import React from "react";
import { render } from "react-dom";
import "./index.css";
import Button from "./Components/Button";

function App() {
  return (
    <>
      <Button />
    </>
  );
}

render(<App />, document.querySelector("#root"));
