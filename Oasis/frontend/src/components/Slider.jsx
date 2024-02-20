import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
// Data
import { useGetHousesQuery } from "../slices/housesApiSlice";
import CardSpecs from '../components/micro_components/CardSpecs'
import Load from './micro_components/Load';

//TODO: Make a getFavorites query
const Slider = () => {

  const { data , error, isLoading } = useGetHousesQuery();

  return (
    <>
      {isLoading ? (
        <Load />
      ) : error ? (
        <p>{error?.data?.message || error.error}</p>
      ) : (
      <>
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'1'}

        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          700: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        loop={true}
        className='h-100'
        style={{ background: '#fff', borderRadius: '10px',}}
      >
        {/* TODO: load the last products */}
          {data.houses.map((house) => (
        <SwiperSlide key={house._id}
        style={{display:'grid', placeItems:'center'}}>
            <CardSpecs home={house}/>
        </SwiperSlide>
          ))}
      </Swiper>
    </>
    )}
  </>
  );
}

export default Slider;
