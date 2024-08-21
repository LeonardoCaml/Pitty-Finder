import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import foto from '../../constants/photos.js'

export default function Slide() {
  const lista = [
    { id: "1", test: foto.slide1 },
    { id: "2", test: foto.slide2 },
    { id: "3", test: foto.slide3 },
    { id: "4", test: foto.slide4 },
  ];

  return (
    <div className="slide-wrapper">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        className="slide"
      >
        {lista.map((lista) => (
          <SwiperSlide className="slides" key={lista.id}>
            <img src={lista.test}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
