import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import PS5 from "../../Images/PS5.png";
import Speaker from "../../Images/Speaker.png";
import Headphones from "../../Images/Headphones.png";
import TShirt from "../../Images/TShirt.png";

const HeroSlider = () => {
  return (
    <div className="container-center h-120">
      <Swiper
        className="h-full bg-gray-600/20 dark:bg-gray-500/20 rounded-lg"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        //   navigation
        loop={true}
        //   pagination={{ clickable: true }}
        //   scrollbar={{ draggable: true }}
      >
        <SwiperSlide className="p-6 ">
          <div className="md:grid md:grid-cols-2 gap-20">
              <div className="max-md:flex flex-col justify-center items-center md:mt-7">
                <h1 className="bg-linear-to-r from-primary to-secondry p-1 w-fit bg-clip-text text-transparent text-4xl md:text-5xl font-semibold">Big Sales</h1>
                <h1 className="md:mt-20 text-5xl md:text-8xl text-white/50 font-bold uppercase">Playstation</h1>
                <button className="px-4 py-2 bg-linear-to-r from-primary to-secondry rounded-full text-white md:mt-20 ml-6 md:scale-125 max-md:mt-4 md:hover:scale-140 cursor-pointer font transition-all duration-300 font-semibold">Shop Now</button>
              </div>

            <div className="md:w-120 md:h-120 sm:h-95 md:ml-20">
              <img src={PS5} alt="Playstation 5" className="w-full h-full" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-6 ">
          <div className="md:grid md:grid-cols-2 gap-20">
              <div className="max-md:flex flex-col justify-center items-center md:mt-7">
                <h1 className="bg-linear-to-r from-primary to-secondry p-1 w-fit bg-clip-text text-transparent text-4xl md:text-5xl font-semibold">Big Sales</h1>
                <h1 className="md:mt-15 text-5xl md:text-8xl text-white/50 font-bold uppercase">Speaker</h1>
                <button className="px-4 py-2 bg-linear-to-r from-primary to-secondry rounded-full text-white md:mt-20 ml-6 md:scale-125 max-md:mt-4 md:hover:scale-140 cursor-pointer font transition-all duration-300 font-semibold">Shop Now</button>
              </div>

            <div className="md:w-100 md:h-80 sm:h-95 md:ml-20 mt-14">
              <img src={Speaker} alt="Playstation 5" className="w-full h-full" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-6 ">
          <div className="md:grid md:grid-cols-2 gap-20">
              <div className="max-md:flex flex-col justify-center items-center md:mt-7">
                <h1 className="bg-linear-to-r from-primary to-secondry p-1 w-fit bg-clip-text text-transparent text-4xl md:text-5xl font-semibold">Big Sales</h1>
                <h1 className="md:mt-20 text-5xl md:text-8xl text-white/50 font-bold uppercase">Headphones</h1>
                <button className="px-4 py-2 bg-linear-to-r from-primary to-secondry rounded-full text-white md:mt-20 ml-6 md:scale-125 max-md:mt-4 md:hover:scale-140 cursor-pointer font transition-all duration-300 font-semibold">Shop Now</button>
              </div>

            <div className="md:w-120 md:h-90 sm:h-95  md:ml-20 mt-10 scale-110">
              <img src={Headphones} alt="Playstation 5" className="w-full h-full" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-6 ">
          <div className="md:grid md:grid-cols-2 gap-20">
              <div className="max-md:flex flex-col justify-center items-center md:mt-7">
                <h1 className="bg-linear-to-r from-primary to-secondry p-1 w-fit bg-clip-text text-transparent text-4xl md:text-5xl font-semibold">Big Sales</h1>
                <h1 className="md:mt-10 text-5xl md:text-8xl text-white/50 font-bold uppercase">Men Shirt</h1>
                <button className="px-4 py-2 bg-linear-to-r from-primary to-secondry rounded-full text-white md:mt-20 ml-6 md:scale-125 max-md:mt-4 md:hover:scale-140 cursor-pointer font transition-all duration-300 font-semibold">Shop Now</button>
              </div>

            <div className="md:w-100 md:h-80 sm:h-95 md:ml-20 mt-12 md:scale-125">
              <img src={TShirt} alt="Playstation 5" className="w-full h-full" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
