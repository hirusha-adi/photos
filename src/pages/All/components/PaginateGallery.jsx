import PropTypes from "prop-types";

const PaginateGallery = ({ totalPages, currentPage, handlePageChange }) => {
  return (
    <div className="flex justify-center mt-5">
      <div className="overflow-x-scroll">
        <div className="btn-group flex flex-row">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`btn ${currentPage === index + 1 ? "btn-active" : ""}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

PaginateGallery.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
};

export { PaginateGallery };
