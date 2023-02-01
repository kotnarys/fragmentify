import React from "react";
import { render } from "react-dom";
import "./index.css";
import StartButton from "./components/StartButton.js";
import NavButton from "./components/NavButton";
import SellButton from "./components/SellButton";
import NFTButtons from "./components/NFTButtons";
import BuyButton from "./components/BuyButton";

function App() {
  return (
    <>
      <StartButton />

      <NavButton>PRIMARY</NavButton>
      <NavButton>MARKETPLACE</NavButton>

      <SellButton>CANCEL SELL</SellButton>
      <SellButton>SELL</SellButton>

      <NFTButtons>SPLIT</NFTButtons>
      <NFTButtons>JOIN</NFTButtons>
      <NFTButtons>APPLY</NFTButtons>

      <BuyButton>PURCHASE</BuyButton>
      <BuyButton>RESERVE</BuyButton>
      <BuyButton>BUY</BuyButton>
    </>
  );
}

render(<App />, document.querySelector("#root"));
