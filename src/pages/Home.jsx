import React from "react";
import Button from "../components/Button";
import s from "./s.module.scss";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import GuideDAO from "../assets/images/GuideDAO.png";
import GitHub from "../assets/images/GitHub.png";

export default function Home() {
  return (
    <div className={s.startPage}>
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
      <div className={s.carousel}>
        <ImageSlider />
      </div>
      <div className={s.footer}>
        <div className={s.icon}>
          <a href="https://www.guidedao.xyz/">
            <img src={GuideDAO} alt="GuideDAO_Link" />
          </a>
        </div>
        <div className={s.devs}>
          <img src={GitHub} alt="GitHub_Image" />
          <div className={s.marquee_container}>
            <p className={s.marquee}>
              @kotnarys @3TERRRNITY @Serggoal @Bubble7777 @stunter777
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
