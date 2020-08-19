import React from "react";
import PropTypes from "prop-types";
// import ComparisonModalContainer from "../../../redux/containers/relatedContainers/comparisonModalContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RelatedItem = ({ item, toggleComparison, changeCompared }) => {
  const itemUrl = item.image.data.results[0].photos[0].url;
  return (
    <div id={`box-${item.info.data.id}`}>
      <FontAwesomeIcon
        onClick={() => {
          toggleComparison();
          changeCompared(item.info);
        }}
        icon={["far", "star"]}
        className="star_icon"
      />
      <img
        src={itemUrl}
        alt={item.image.data.results[0].photos[0].thumbnail_url}
        width="170px"
        height="240px"
      />
      <p>{item.info.data.category}</p>
      <h3>{item.info.data.name}</h3>
      <p>${item.info.data.default_price}</p>
      <p>****</p>
    </div>
  );
};

RelatedItem.propTypes = {
  item: PropTypes.object.isRequired,
  toggleComparison: PropTypes.func.isRequired,
  changeCompared: PropTypes.func.isRequired,
};

export default RelatedItem;
