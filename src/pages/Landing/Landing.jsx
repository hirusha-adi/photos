import { useEffect } from "react";
import { Slider } from "./components/Slider";
import { ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Landing = () => {
  useEffect(() => {
    document.title = `Home`;
  }, []);

  return (
    <div className="h-screen flex flex-col items-center lg:justify-center text-center">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-2 mt-16 lg:mt-0">
        i take photos, sometimes.
      </h1>

      {/* Description */}
      <p className="mb-6 lg:w-[60%] px-6 pt-8 md:pt-2">
        As a hobbyist photographer, I aim to capture the beauty of the world
        through my lens and bring a unique perspective to every image I create.
      </p>

      <div className="mb-6 w-[95%] md:w-[70%]">
        <Slider />
      </div>

      {/* Button */}
      <Link to={"/all"} className="btn btn-outline px-6 py-2">
        View All <ArrowRight className="text-lg" />
      </Link>

      {/* Footer */}
      <footer className="absolute bottom-4 text-sm text-gray-500">
        &copy; <a href="https://hirusha.xyz">Hirusha Adikari</a>, 2020 -{" "}
        {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export { Landing };
