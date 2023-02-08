import React from "react";
import Button from "../components/Button";

import s from "./s.module.scss";
import ImageSlider from "../components/ImageSlider/ImageSlider";

export default function Home() {
  return (
    <div className={s.startPage}>
      <div className={s.home}>
        <div className={s.home__content}>
          <div className={s.text}>
            <h1 className={s.heading}>Fragmented NFTs</h1>
            <p className={s.paragraph}>
              You can divide your NFT into several pieces or buy someone else's
              part of the NFT
            </p>
          </div>
          <div className={s.btn}>
            <Button />
          </div>
        </div>
      </div>
      <ImageSlider />
    </div>
  );
}
