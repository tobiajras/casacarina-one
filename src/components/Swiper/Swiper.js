import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/autoplay";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { carouselData } from "../../data/carouselData";

export default () => {
  return (
    <Swiper
      // spaceBetween={50}?
      height={"300px"}
      modules={[Autoplay, Pagination, Navigation]}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{
        clickable: true,
      }}
      loop={true}
    >
      {carouselData.map((data) => {
        return (
          <SwiperSlide key={data.id}>
            <img
              className="swiper__img"
              src={`assets/Fondos/${data.src}`}
              alt=""
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
