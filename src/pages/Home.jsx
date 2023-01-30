import React from "react";
import s from "./s.module.scss";
export default function Home() {
  return (
    <div className={s.home}>
      <div className={s.text}>
        <h1 className={s.heading}>Fragmented NFTs</h1>
        <p className={s.paragraph}>
          gallery of already fragmented NFTs that you can purchase on our
          markerplace
        </p>
      </div>
      <div></div>
    </div>
  );
}
