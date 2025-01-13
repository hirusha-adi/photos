import PropTypes from "prop-types";
import { useState } from "react";
import { PaginateGallery } from "./PaginateGallery";

const Gallery = ({ currentPhotos }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 5;

  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotosToShow = currentPhotos.slice(
    indexOfFirstPhoto,
    indexOfLastPhoto
  );

  const totalPages = Math.ceil(currentPhotos.length / photosPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <PaginateGallery
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />

      <div className="flex justify-center items-center mt-5">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
          {currentPhotosToShow.map((photo, index) => (
            <div key={index} className="w-full aspect-square overflow-hidden">
              <img
                src={`/images/${photo.filename}`}
                alt={photo.name}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>

      <PaginateGallery
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </>
  );
};

Gallery.propTypes = {
  currentPhotos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      filename: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      locations: PropTypes.arrayOf(PropTypes.string).isRequired,
      country: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export { Gallery };
