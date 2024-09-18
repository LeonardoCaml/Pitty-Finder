import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

// css
import "./slide.css";

// database
import artigo from "../../databases/artigo.js";

export default function Slide() {
  const navigate = useNavigate();
  const handleClickArtigo = (id) => {
    navigate(`/artigo/${id}`);
  };
  const lista = artigo.slice(0, 5);

  return (
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
        <SwiperSlide
          className="slides"
          key={lista.id}
          onClick={() => handleClickArtigo(lista.id)}
        >
          <img src={lista.slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
