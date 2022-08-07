import { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

import { useEffect, useState } from "react";
import { ImagesTypes } from "../../models/ImagesTypes";
import { listImages } from "../../services/LoremPicsum";
import * as S from "./styles";

export function MySwiper() {
  const [images, setImages] = useState<ImagesTypes[]>([]);

  useEffect(() => {
    listImages().then((result) => {
      setImages(result);
    });
  }, []);

  return (
    <S.SwiperContainer>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        navigation
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="my-swiper"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id} className="my-slide">
            <img src={image.download_url} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.SwiperContainer>
  );
}
