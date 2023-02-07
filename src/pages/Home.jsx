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
              gallery of already fragmented NFTs that you can purchase on our
              markerplace
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
