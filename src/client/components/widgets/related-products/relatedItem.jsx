import React from "react";
import PropTypes from "prop-types";
// import ComparisonModalContainer from "../../../redux/containers/relatedContainers/comparisonModalContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StaticStars from "../ratings-reviews/static-stars";
import {calcAvgRating} from "../../../../dataManipulationHelpers";

const RelatedItem = ({
  item,
  toggleComparison,
  changeCompared,
  navigateToProduct,
}) => {
  let itemUrl = item.image.data.results[0].photos[0].url;
  if (!itemUrl) {
    itemUrl =
      "https://sciences.ucf.edu/psychology/wp-content/uploads/sites/63/2019/09/No-Image-Available.png";
  }
  const avgRating = calcAvgRating(item.rating.data.results);
  return (
    <div className="tile-parent">
      <FontAwesomeIcon
        onClick={() => {
          toggleComparison();
          changeCompared(item.info);
        }}
        icon={["fa", "star"]}
        className="star_icon_alt"
      />
      <div
        onClick={() => navigateToProduct(item.info.data.id)}
        className="tile"
        id={`box-${item.info.data.id}`}
      >
        <img
          className="related-image"
          src={itemUrl}
          alt="some article of clothing"
        />
        <p>{item.info.data.category}</p>
        <h3>{item.info.data.name}</h3>
        <p>${item.info.data.default_price}</p>
        {avgRating !== 0 && <StaticStars rating={avgRating} />}
      </div>
    </div>
  );
};

RelatedItem.propTypes = {
  item: PropTypes.object.isRequired,
  toggleComparison: PropTypes.func.isRequired,
  changeCompared: PropTypes.func.isRequired,
  navigateToProduct: PropTypes.func.isRequired,
};

export default RelatedItem;
