import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";


const Slider = () => {
  const animation = { duration: 5000, easing: (t) => t };

  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(slider) {
      slider.moveToIdx(5, true, animation);
    },
    updated(slider) {
      slider.moveToIdx(slider.track.details.abs + 5, true, animation);
    },
    animationEnded(slider) {
      slider.moveToIdx(slider.track.details.abs + 5, true, animation);
    },
    slides: { perView: "auto", spacing: 10 }, // Auto width and spacing
  });

  const placeholderImages = Array.from({ length: 5 }, (_, i) => ({
    src: `https://placehold.co/400x500?text=Slide+${i + 1}`,
    alt: `Placeholder ${i + 1}`,
  }));

  return (

    <div ref={sliderRef} className="keen-slider">
      {placeholderImages.map((image, index) => (
        <div className="keen-slider__slide" key={index}>
          <img
            src={image.src}
            alt={image.alt}
            className="rounded-lg"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      ))}
    </div>

  );
};

export { Slider };