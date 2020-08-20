import React from "react";
import PropTypes from "prop-types";
// import ComparisonModalContainer from "../../../redux/containers/relatedContainers/comparisonModalContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StaticStars from "../ratings-reviews/static-stars";

const RelatedItem = ({
  item,
  toggleComparison,
  changeCompared,
  navigateToProduct,
}) => {
  console.log("ITEM.IMAGE", item.image);
  const itemUrl = item.image.data.results[0].photos[0].url;
  let ratingsCount = 0; // number of ratings
  let totalRating = 0;

  item.rating.data.results.forEach((thing) => {
    ratingsCount += 1;
    totalRating += thing.rating;
  });
  let avgRating = Number((totalRating / ratingsCount).toFixed(2));
  if (isNaN(avgRating)) {
    avgRating = 0;
  }
  return (
    <div
      onClick={() => navigateToProduct(item.info.data.id)}
      className="tile"
      id={`box-${item.info.data.id}`}
    >
      <FontAwesomeIcon
        onClick={() => {
          toggleComparison();
          changeCompared(item.info);
        }}
        icon={["far", "star"]}
        className="star_icon_alt"
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
      {avgRating !== 0 && <StaticStars rating={avgRating} />}
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
