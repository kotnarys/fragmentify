import React from "react";
import Button from "../components/Button";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import { productImages } from "../assets";
import s from "./s.module.scss";

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
      <div className={s.slider}>
        <ImageSlider images={productImages} />
      </div>
    </div>
  );
}
