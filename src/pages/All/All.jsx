import { useEffect, useState } from "react";
import { Gallery } from "./components/Gallery";
import { NavBar } from "./components/NavBar";
import PhotosJson from "../../assets/photos.json";

const All = () => {
  const [currentPhotos, setCurrentPhotos] = useState(PhotosJson.photos);
  const [categories, setCategories] = useState({
    tags: [],
    locations: [],
    countries: [],
  });

  useEffect(() => {
    document.title = `All Photos`;
  });

  useEffect(() => {
    setCategories({
      tags: PhotosJson.sidebar_data.tags,
      locations: PhotosJson.sidebar_data.locations,
      countries: PhotosJson.sidebar_data.countries,
    });
  }, []);

  console.log(categories.tags);

  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <NavBar />
          <div className="mb-16 lg:mb-32">
            <Gallery currentPhotos={currentPhotos} />
          </div>
          <div className="block lg:hidden text-center mb-10">
            &copy; Hirusha Adikari, 2020 - {new Date().getFullYear()}
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Countries */}
            <div className="text-lg border-b pb-2 mb-2">Countries</div>
            {categories.countries.map((country, index) => (
              <div className="form-control" key={index}>
                <label className="label cursor-pointer">
                  <span className="label-text">{country}</span>
                  <input type="checkbox" defaultChecked className="checkbox" />
                </label>
              </div>
            ))}

            {/* Tags */}
            <div className="text-lg border-b pb-2 mb-2">Tags</div>
            {categories.tags.map((tag, index) => (
              <div className="form-control" key={index}>
                <label className="label cursor-pointer">
                  <span className="label-text">{tag}</span>
                  <input type="checkbox" defaultChecked className="checkbox" />
                </label>
              </div>
            ))}

            {/* Locations */}
            <div className="text-lg border-b pb-2 mb-2">Locations</div>
            {categories.locations.map((location, index) => (
              <div className="form-control" key={index}>
                <label className="label cursor-pointer">
                  <span className="label-text">{location}</span>
                  <input type="checkbox" defaultChecked className="checkbox" />
                </label>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export { All };
