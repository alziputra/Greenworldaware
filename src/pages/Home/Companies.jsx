import { Swiper, SwiperSlide } from 'swiper/react';
import { sponsors } from '../../data/sponsors';
import { Autoplay } from 'swiper/modules';

const Companies = () => {
  return (
    <div className="flex w-full justify-center items-center bg-white h-full p-10">
      <div className="max-w-6xl overflow-hidden">
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {sponsors.map((item) => (
            <SwiperSlide key={item.title} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '150px' }}>
              <div className="flex items-centerjustify-center">
                <img className="flex items-center justify-center" src={item.imageUrl} alt={item.title} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Companies;
