import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import Heading from "../../Shared/Heading";
import CardProducts from "./CardProducts";
import axios from "axios";
import PS5 from "../../Images/PS5.png";
import Speaker from "../../Images/Speaker.png";
import Headphones from "../../Images/Headphones.png";
import TShirt from "../../Images/TShirt.png";

const ProductSlider = ({ data }) => {
  return (
    <div className="container-center h-80 my-6">
      <div className="h-full max-md:hidden">
        <Swiper
          className="h-full bg-gray-600/20 dark:bg-gray-500/20 rounded-lg max-md:hidden"
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={1}
          slidesPerView={5}
          //   navigation
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          //   pagination={{ clickable: true }}
          //   scrollbar={{ draggable: true }}
        >
          {data.map((item, key) => (
            <SwiperSlide className="p-6 ">
              <CardProducts key={key} item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="h-full md:hidden">
        <Swiper
          className="h-full bg-gray-600/20 dark:bg-gray-500/20 rounded-lg "
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={1}
          slidesPerView={1}
          //   navigation
          loop={true}
          //   pagination={{ clickable: true }}
          //   scrollbar={{ draggable: true }}
        >
          {data.map((item, key) => (
            <SwiperSlide className="p-6 ">
              <CardProducts key={key} item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductSlider;
