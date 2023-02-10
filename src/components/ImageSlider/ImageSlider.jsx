import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import s from "./slider.module.scss";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import ImageOne from "../../assets/images/NFT_1.jpg";
import ImageTwo from "../../assets/images/NFT_2.jpg";
import ImageThree from "../../assets/images/NFT_3.jpg";
import ImageFour from "../../assets/images/NFT_4.jpg";

export default function ImageSlider() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const desktopCarousel = {
    effect: "coverflow",
    coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    modules: [EffectCoverflow, Pagination],
    slidesPerView: 3,
    parallax: true,
  };
  const mobileCarousel = {
    effect: "cards",
    cardsEffect: {
      slideShadows: false,
    },
    modules: [EffectCards],
  };
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowWidth]);

  return (
    <Swiper
      {...(windowWidth > 1280 ? { ...desktopCarousel } : { ...mobileCarousel })}
      className={s.container}
    >
      <SwiperSlide>
        <div className={s.box}>
          <img src={ImageTwo} alt="img2" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={s.box}>
          <img src={ImageThree} alt="img3" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={s.box}>
          <img src={ImageFour} alt="img4" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={s.box}>
          <img src={ImageTwo} alt="img2" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
