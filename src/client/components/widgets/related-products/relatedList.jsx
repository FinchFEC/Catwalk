import React from "react";
import PropTypes from "prop-types";
import RelatedItem from "./relatedItem.jsx";
import ComparisonModal from "./comparisonModal";

const relatedItems = [
  {
    data: { results: [{ photos: [{ url: "", thumbnail_url: "" }] }] },
  },
  {
    data: { results: [{ photos: [{ url: "", thumbnail_url: "" }] }] },
  },
  {
    data: { results: [{ photos: [{ url: "", thumbnail_url: "" }] }] },
  },
  {
    data: { results: [{ photos: [{ url: "", thumbnail_url: "" }] }] },
  },
  {
    data: { results: [{ photos: [{ url: "", thumbnail_url: "" }] }] },
  },
  {
    data: { results: [{ photos: [{ url: "", thumbnail_url: "" }] }] },
  },
  {
    data: { results: [{ photos: [{ url: "", thumbnail_url: "" }] }] },
  },
  {
    data: { results: [{ photos: [{ url: "", thumbnail_url: "" }] }] },
  },
];

const RelatedList = ({
  relatedInfo,
  relatedImages,
  showComparison,
  toggleComparison,
}) => {
  const arrOfItemsAndImages = [];
  for (let i = 0; i < relatedInfo.length; i++) {
    arrOfItemsAndImages.push({
      info: relatedInfo[i],
      image: relatedImages[i] || relatedItems[i],
    });
  }
  console.log('----comparison', showComparison);
  return (
    <div>
      <div id="container-1">
        {arrOfItemsAndImages.map((item) => (
          <RelatedItem item={item} toggleComparison={toggleComparison} />
        ))}
      </div>
      {showComparison && <ComparisonModal />}
    </div>
  );
};

RelatedList.propTypes = {
  relatedInfo: PropTypes.array.isRequired,
  relatedImages: PropTypes.array.isRequired,
  showComparison: PropTypes.bool.isRequired,
  toggleComparison: PropTypes.func.isRequired,
};

export default RelatedList;
