import React from "react";
import PropTypes from "prop-types";
import ComparisonModalContainer from "../../../redux/containers/comparisonModalContainer";

const RelatedItem = ({ item }) => {
  return (
    <div id={`box-${item.info.data.id}`}>
      <ComparisonModalContainer />
      <img
        src={item.image.data.results[0].photos[0].url}
        alt=""
        width="128px"
      />
      <p>{item.info.data.category}</p>
      <h3>{item.info.data.name}</h3>
      <p>${item.info.data.default_price}</p>
      <p>{item.info.data.slogan}</p>
    </div>
  );
};

RelatedItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default RelatedItem;
