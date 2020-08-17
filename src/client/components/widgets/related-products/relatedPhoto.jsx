import React from "react";
import PropTypes from "prop-types";

const RelatedPhoto = ({ image }) => (
  <div>
    <img src={image.data.results[0].photos[0].url} alt="" width="128px" />
  </div>
);

RelatedPhoto.propTypes = {
  image: PropTypes.object.isRequired,
};

export default RelatedPhoto;
