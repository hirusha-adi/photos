import { useEffect } from "react";
import { Slider } from "./components/Slider";

const Landing = () => {
  useEffect(() => {
    document.title = `Home`;
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center">
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        I take photos, sometimes.
      </h1>

      {/* Description */}
      <p className="text-gray-600 mb-6 w-[40%]">
        As a hobbyist photographer, I aim to capture the beauty of the world through my lens and bring a unique perspective to every image I create.
      </p>

      <div
        className="mb-6 relative overflow-hidden w-[70%]"
        style={{
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
        }}
      >
        <Slider />
      </div>

      {/* Button */}
      <button className="btn btn-primary px-6 py-2">
        View More
      </button>

      {/* Footer */}
      <footer className="absolute bottom-4 text-sm text-gray-500">
        &copy; <a href="https://hirusha.xyz">Hirusha Adikari</a>, 2020 - {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export { Landing };
