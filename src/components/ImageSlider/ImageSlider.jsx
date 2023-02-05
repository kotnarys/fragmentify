import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import s from "./slide.module.scss";
import { Pagination } from "swiper";
// Также нужно убрать, как только разберусь с map
import ImageOne from "../../assets/images/NFT_1.jpg";
import { Link } from "react-router-dom";

export default function ImageSlider() {
  function stopPropagation(e) {
    e.stopPropagation();
  }
  return (
    <>
      <Swiper
        loop={true}
        slidesPerView={2}
        spaceBetween={30}
        grabCursor={true}
        modules={[Pagination]}
        className={s.product_image_slider}
      >
        {/* Стартовый вариант. Надо переделать */}
        <SwiperSlide>
          <Link to={".."} onClick={stopPropagation}>
            <img src={ImageOne} alt="img1" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={".."} onClick={stopPropagation}>
            <img src={ImageOne} alt="img1" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={".."} onClick={stopPropagation}>
            <img src={ImageOne} alt="img1" />
          </Link>
        </SwiperSlide>
        {/* TODO: Разобраться как выводить перебором */}
        {/* {images.map((item, index) => {
          <SwiperSlide key={index}>
            <img src={item} alt={"Slider"} />
          </SwiperSlide>;
        })} */}
      </Swiper>
    </>
  );
}
