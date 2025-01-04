import { useEffect } from "react";
import { Slider } from "./components/Slider";
import { ArrowRight } from "react-bootstrap-icons"

const Landing = () => {
  useEffect(() => {
    document.title = `Home`;
  }, []);

  return (
    <div className="h-screen flex flex-col items-center  text-center">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-2">
        I take photos, sometimes.
      </h1>

      {/* Description */}
      <p className="mb-6 w-[40%]">
        As a hobbyist photographer, I aim to capture the beauty of the world through my lens and bring a unique perspective to every image I create.
      </p>

      <div
        className="mb-6 relative overflow-hidden w-[70%]"
        style={{
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
        }}
      >
        <Slider />
      </div>

      {/* Button */}
      <button className="btn btn-outline px-6 py-2">
        View All <ArrowRight className="text-lg" />
      </button>

      {/* Footer */}
      <footer className="absolute bottom-4 text-sm text-gray-500">
        &copy; <a href="https://hirusha.xyz">Hirusha Adikari</a>, 2020 - {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export { Landing };
