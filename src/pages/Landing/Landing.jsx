import { useEffect } from "react";
import { Slider } from "./components/Slider";

const Landing = () => {
  useEffect(() => {
    document.title = `Home`;
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 text-center">
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        Photos | Hirusha Adikari
      </h1>

      {/* Description */}
      <p className="text-gray-600 mb-6">
        This site is to display/showcase all of my photos.
      </p>

      {/* Image Grid */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-6 w-[50%]">
        <img
          src="https://placehold.co/400x500.png"
          alt="Photo 1"
          className="rounded-lg shadow-md"
        />
        <img
          src="https://placehold.co/400x500.png"
          alt="Photo 2"
          className="rounded-lg shadow-md"
        />
        <img
          src="https://placehold.co/400x500.png"
          alt="Photo 3"
          className="rounded-lg shadow-md"
        />
        <img
          src="https://placehold.co/400x500.png"
          alt="Photo 4"
          className="rounded-lg shadow-md"
        />
        <img
          src="https://placehold.co/400x500.png"
          alt="Photo 4"
          className="rounded-lg shadow-md"
        />
      </div> */}

      <div className="">
        <Slider />
      </div>

      {/* Button */}
      <button className="btn btn-primary px-6 py-2">
        View More
      </button>

      {/* Footer */}
      <footer className="absolute bottom-4 text-sm text-gray-500">
        Copyright, Hirusha Adikari
      </footer>
    </div>
  );
};

export { Landing };
