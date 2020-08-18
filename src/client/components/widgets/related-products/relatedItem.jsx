import React from "react";
import PropTypes from "prop-types";
// import ComparisonModalContainer from "../../../redux/containers/relatedContainers/comparisonModalContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RelatedItem = ({ item, toggleComparison, changeCompared }) => {
  const itemUrl = item.image.data.results[0].photos[0].url;
  return (
    <div id={`box-${item.info.data.id}`}>
      <FontAwesomeIcon icon={["far", "star"]} onClick={toggleComparison} />
      <button
        onClick={() => {
          toggleComparison();
          changeCompared(item.info);
        }}
        type="button"
      >
        Compare
      </button>
      <img
        src={itemUrl}
        alt={item.image.data.results[0].photos[0].thumbnail_url}
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
  toggleComparison: PropTypes.func.isRequired,
  changeCompared: PropTypes.func.isRequired,
};

export default RelatedItem;
