import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import styled from "./Slider.module.css";
import "../../styles/swiperModules/swiper.scss";
import "../../styles/swiperModules/navigation.scss";
import "../../styles/swiperModules/pagination.scss";

const Slider = () => {
  SwiperCore.use([Navigation, Pagination, Autoplay]);

  return (
    <section className={styled.slider}>
      <Swiper
        className={styled.slide}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 6000 }}
      >
        {Array.from({ length: 4 }, (v, i) => (
          <SwiperSlide key={i}>
            <img src={`/image/slide${i + 1}.png`} alt={`slide-${i + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
