import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import { Pagination } from "swiper";
import ImageOne from "../../assets/images/NFT_2.jpg";

export default function ImageSlider() {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={20}
      grabCursor={true}
      modules={[Pagination]}
      parallax={true}
    >
      <SwiperSlide>
        <img src={ImageOne} alt="img1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ImageOne} alt="img1" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={ImageOne} alt="img1" />
      </SwiperSlide>
    </Swiper>
  );
}
