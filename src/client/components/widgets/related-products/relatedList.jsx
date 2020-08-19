import React, { useState } from "react";
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
  currentInfo,
}) => {
  const [compared, setCompared] = useState(relatedImages[0]);
  const arrOfItemsAndImages = [];
  for (let i = 0; i < relatedInfo.length; i++) {
    arrOfItemsAndImages.push({
      info: relatedInfo[i],
      image: relatedImages[i] || relatedItems[i],
    });
  }
  return (
    <div>
      <div id="container-1">
        {arrOfItemsAndImages.map((item) => (
          <RelatedItem item={item} toggleComparison={toggleComparison} changeCompared={obj => setCompared(obj)} />
        ))}
      </div>
      {showComparison && (
        <ComparisonModal
          currentInfo={currentInfo}
          toggleComparison={toggleComparison}
          relatedInfo={relatedInfo}
          compared={compared}
        />
      )}
    </div>
  );
};

RelatedList.propTypes = {
  relatedInfo: PropTypes.array.isRequired,
  relatedImages: PropTypes.array.isRequired,
  showComparison: PropTypes.bool.isRequired,
  toggleComparison: PropTypes.func.isRequired,
  currentInfo: PropTypes.object.isRequired,
};

export default RelatedList;
