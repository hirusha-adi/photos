import PropTypes from "prop-types";

const Gallery = ({ currentPhotos }) => {
  return (
    <>
      <div className="flex justify-center items-center mt-5">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
          {currentPhotos.map((photo, index) => (
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
