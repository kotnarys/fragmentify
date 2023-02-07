import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import s from "./slider.module.scss";
import { EffectCoverflow, Pagination } from "swiper";
import ImageOne from "../../assets/images/NFT_1.jpg";
import ImageTwo from "../../assets/images/NFT_2.jpg";
import ImageThree from "../../assets/images/NFT_3.png";

export default function ImageSlider() {
  return (
    <Swiper
      //косая галерея
      effect={"coverflow"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
      }}
      modules={[EffectCoverflow, Pagination]}
      slidesPerView={3}
      spaceBetween={10}
      parallax={true}
      // Дефолтная галерея
      // slidesPerView={3}
      // spaceBetween={20}
      // grabCursor={true}
      // modules={[Pagination]}
      // parallax={true}

      className={s.container}
    >
      <SwiperSlide>
        <div className={s.box}>
          <img src={ImageOne} alt="img1" />
        </div>
      </SwiperSlide>
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
          <img src={ImageOne} alt="img1" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
