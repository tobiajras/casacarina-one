import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "./autoCarousel.scss";

import "swiper/scss";
import "swiper/scss/autoplay";
import "swiper/scss/pagination";
import { marcasData } from "../../data/marcasData";

export default function AutoCarousel() {
  return (
    <div className="autoCarousel__parentDiv">
      <Swiper
        spaceBetween={20}
        loop={true}
        speed={3000}
        modules={[Autoplay, Pagination]}
        slidesPerView={5}
        autoplay={{ delay: 0, disableOnInteraction: false }}
      >
        {marcasData.map(({ id, title, src }) => {
          return (
            <SwiperSlide key={id}>
              <img
                className="autoCarousel__img"
                src={`/assets/Marcas/${src}`}
                alt={title}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
