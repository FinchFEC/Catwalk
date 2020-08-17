import React from "react";
import PropTypes from "prop-types";
import RelatedItem from "./relatedItem.jsx";

const relatedItems = [
  {
    data: { results: [{ photos: [{ url: "" }] }] },
  },
  {
    data: { results: [{ photos: [{ url: "" }] }] },
  },
  {
    data: { results: [{ photos: [{ url: "" }] }] },
  },
  {
    data: { results: [{ photos: [{ url: "" }] }] },
  },
  {
    data: { results: [{ photos: [{ url: "" }] }] },
  },
];

const RelatedList = ({ relatedInfo, relatedImages }) => {
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
        <h3>RELATED PRODUCTS</h3>
        {arrOfItemsAndImages.map((item) => (
          <RelatedItem item={item} />
        ))}
      </div>
    </div>
  );
};

RelatedList.propTypes = {
  relatedInfo: PropTypes.array.isRequired,
  relatedImages: PropTypes.array.isRequired,
};

export default RelatedList;
