import React from "react";
import PropTypes from "prop-types";

const ProjectDetails = ({ images, description }) => {
  return (
    <div>
      <div className="image-gallery">
        {images.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
        ))}
      </div>
      <p className="description">{description}</p>
    </div>
  );
};

ProjectDetails.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
};

export default ProjectDetails;
