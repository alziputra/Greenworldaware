import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";

const formatDate = (dateString) => {
  const currentDate = new Date(dateString);
  return currentDate.toDateString();
};

const NewsCarousel = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/news`);
        if (response.ok) {
          const data = await response.json();
          setNewsData(data.data);
        } else {
          console.error("Failed to fetch news data");
        }
      } catch (error) {
        console.error("Error while fetching news data:", error);
      }
    };

    fetchNewsData();
  }, []);

  return (
    <div className="max-w-5xl px-5 m-auto flex justify-between items-center mb-10">
      <div className="w-full">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-3xl mb-6">Berita Terkini</h2>
          <div className="flex w-96 h-[16px] bg-[#000000] rounded-[50px] mb-6 max-[980px]:hidden" />
        </div>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          pagination={{ clickable: true }}
        >
          {newsData.map((item) => (
            <SwiperSlide key={item.id} className="relative">
              <div className="flex items-end h-64">
                <img src={item.image} alt={formatDate(item.createdAt)} className="object-cover w-full h-full rounded" />
              </div>
              <div className="py-4 text-black mb-10">
                <h2 className="text-lg font-bold">{formatDate(item.createdAt)}</h2>
                <p className="text-sm mb-4">{item.description.slice(0, 100)}</p>
                <button className="font-bold py-2 rounded">Baca Selengkapnya</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NewsCarousel;
