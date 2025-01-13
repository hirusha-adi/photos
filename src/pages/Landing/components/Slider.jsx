import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Slider = () => {
  const images = Array(10).fill("https://placehold.co/300x300");

  return (
    <div className="">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        breakpoints={{
          // sm
          640: { slidesPerView: 1 },
          // TODO: Consider this. md
          // 768: { slidesPerView: 2 },
          // lg
          1024: { slidesPerView: 3 },
        }}
      >
        {images.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            <div className="w-full aspect-square">
              <img
                src={imageUrl}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export { Slider };
