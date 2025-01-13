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
    slides: { perView: "auto", spacing: 5 },
  });

  // List of 10 placeholder image URLs with size 400x500
  const placeholderImages = Array.from({ length: 5 }, (_, i) => ({
    src: `https://placehold.co/400x500?text=Slide+${i + 1}`,
    alt: `Placeholder ${i + 1}`,
  }));

  return (
    <div ref={sliderRef} className="keen-slider h-[40vh] relative">
      {placeholderImages.map((image, index) => (
        <div
          className="keen-slider__slide flex items-center justify-center h-[100%] flex-shrink-0 md:flex-shrink"
          key={index}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="rounded-lg h-full w-auto object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export { Slider };
