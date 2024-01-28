import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
// Images
import beach from '../assets/images/beach_img.jpg';
import forest from '../assets/images/forest_img.jpg';
import city from '../assets/images/city_img.jpg';
import village from '../assets/images/village_img.jpg';
// Components
import CardSlider from './CardSlider';

const Slider = () => {

  return (
    <>
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'1'}

        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        breakpoints={{
          720: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        className="mySwiper"
        loop={true}
      >
        <SwiperSlide>
          <CardSlider img={city} location='Villa Real'/>
        </SwiperSlide>
        <SwiperSlide>
          <CardSlider img={forest} location='Bosques de Lindora'/>
        </SwiperSlide>
        <SwiperSlide>
          <CardSlider img={beach} location='Santa Cruz'/>
        </SwiperSlide>
        <SwiperSlide>
          <CardSlider img={village} location='San Rafael'/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
