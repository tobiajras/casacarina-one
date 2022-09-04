import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/pagination';
import { carouselData } from '../../data/carouselData';

export default function CarouselSwiper() {
  return (
    <div className='carouselSwiper__parentDiv'>
      <Swiper
        className='carouselSwiper__Swiper'
        modules={[Autoplay, Pagination, EffectCoverflow]}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        speed={500}
      >
        {carouselData.map(({ id, title, src }) => {
          return (
            <SwiperSlide key={id}>
              <img
                className='carouselSwiper__img'
                src={`assets/Fondos/${src}`}
                alt={title}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
