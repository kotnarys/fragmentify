import React from "react";
import "../index.css";

export default function Patter() {
  return (
    <>
      <div>
        <nav className="flex justify-between m-4">
          <div>
            <button>
              <img src="../assets/images/home.png" />
            </button>
            <button>
              <img src="../assets/images/back.png" />
            </button>
          </div>
          <button className="bg-grays text-white rounded-full w-48 h-9 font-lalezar active:translate-y-1 hover:opacity-80">
            CONNECT WALLET
          </button>
        </nav>
        <div className="py-10 flex justify-center">
          <div className="bg-grays w-11/12 min-h-screen">lorem</div>
        </div>
      </div>
    </>
  );
}
