import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import city from '../assets/images/city_img.jpg';
import forest from '../assets/images/beach_img.jpg';
import beach from '../assets/images/forest_img.jpg';


const Slider = () => {

  return (
    <>
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        loop={true}
      >
        <SwiperSlide>
          <img src={city} alt='city'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={forest} alt='forest'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={beach} alt='beach'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={city} alt='city'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={forest} alt='forest'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={beach} alt='beach'/>
        </SwiperSlide>

        
      </Swiper>
    </>
  );
}

export default Slider;
