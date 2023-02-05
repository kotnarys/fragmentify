import React from "react";
import "../index.css";
import StartButton from "./StartButton.js";
import Buttons from "./Buttons.js";

export default function Profile() {
  return (
    <>
      <div className=" flex content-start flex-col h-full left-250 right-250 w-full bg-grays">
        <div className=" ">
          <h1 className=" py-10 flex justify-center text-4xl text-white font-lalezar">
            FULL
          </h1>
          <img
            src="https://www.cnet.com/a/img/resize/e547a2e4388fcc5ab560f821ac170a59b9fb0143/hub/2021/12/13/d319cda7-1ddd-4855-ac55-9dcd9ce0f6eb/unnamed.png?auto=webp&fit=crop&height=1200&width=1200"
            className="pl-5 w-64"
          />
          <Buttons className="flex justify-center btns bg-violets my-3 mx-16">
            SPLIT
          </Buttons>
        </div>
        <div className="">
          <h1 className=" py-10 flex justify-center text-4xl text-white font-lalezar">
            SPLITTED
          </h1>
          <div className="flex flex-col items-start">
            <div className="flex justify-center">
              <div className="inline-block">
                <img
                  src="https://www.cnet.com/a/img/resize/e547a2e4388fcc5ab560f821ac170a59b9fb0143/hub/2021/12/13/d319cda7-1ddd-4855-ac55-9dcd9ce0f6eb/unnamed.png?auto=webp&fit=crop&height=1200&width=1200"
                  className="pl-5 w-64 py-5"
                />
                <div className="flex flex-col">
                  <Buttons className="btns bg-reds my-3 mx-16 ">
                    CANCEL SELL
                  </Buttons>
                  <Buttons className="btns bg-reds my-3 mx-16 ">SELL</Buttons>
                </div>
              </div>
              <div className="flex flex-col items-start">
                <img
                  src="https://www.cnet.com/a/img/resize/e547a2e4388fcc5ab560f821ac170a59b9fb0143/hub/2021/12/13/d319cda7-1ddd-4855-ac55-9dcd9ce0f6eb/unnamed.png?auto=webp&fit=crop&height=1200&width=1200"
                  className="pl-5 w-64 py-5"
                />
                <h4 className=" btns my-3 px-10 mx-16">99/100</h4>
                <Buttons className=" btns bg-grens my-3 mx-16">JOIN</Buttons>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
