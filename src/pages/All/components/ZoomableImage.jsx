import PropTypes from "prop-types";
import { useCallback, useState } from "react";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ZoomableImage = ({ photo }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoomChange = useCallback((shouldZoom) => {
    setIsZoomed(shouldZoom);
  }, []);

  return (
    <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
      <div className="w-full aspect-square overflow-hidden">
        <img
          src={
            isZoomed
              ? `/images/${photo.filename}`
              : `/thumbnails/${photo.filename}`
          }
          alt={photo.name}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </ControlledZoom>
  );
};

ZoomableImage.propTypes = {
  photo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    filename: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    locations: PropTypes.arrayOf(PropTypes.string).isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
};

export { ZoomableImage };
