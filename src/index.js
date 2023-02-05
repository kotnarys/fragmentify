import React from "react";
import { render } from "react-dom";
import "./index.css";
import StartButton from "./components/StartButton.js";
import Buttons from "./components/Buttons";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      {/* <StartButton />
      <Buttons>SPLIT</Buttons>
      <Buttons>PURCHASE</Buttons>
      <Buttons>RESERVE</Buttons>
      <Buttons>PRIMARY</Buttons>
      <Buttons>MARKETPLACE</Buttons>
      <Buttons>SELL</Buttons>
      <Buttons>CANCEL SELL</Buttons>
      <Buttons>BUY</Buttons>
      <Buttons>JOIN</Buttons>
      <Buttons>APPLY</Buttons> */}
      <Profile />
    </>
  );
}

render(<App />, document.querySelector("#root"));
