import React, { useState } from "react";
import PropTypes from "prop-types";
import RelatedItem from "./relatedItem.jsx";
import ComparisonModal from "./comparisonModal";

const relatedItems = [];
for (let i = 0; i < 25; i++) {
  relatedItems.push({
    data: {
      results: [
        {
          photos: [
            {
              url:
                "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
              thumbnail_url:
                "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            },
          ],
        },
      ],
    },
  });
}

const RelatedList = ({
  relatedInfo,
  relatedImages,
  showComparison,
  toggleComparison,
  currentInfo,
  ratings,
  navigateToProduct,
}) => {
  const [compared, setCompared] = useState(relatedImages[0]);
  const [scrollOffset, setScrollOffset] = useState(0);
  const arrOfItemsAndImages = [];
  for (let i = 0; i < relatedInfo.length; i++) {
    arrOfItemsAndImages.push({
      info: relatedInfo[i],
      image: relatedImages[i] || relatedItems[i],
      rating: ratings[i] || { data: { results: ["", ""] } },
    });
  }
  function scrollItems(e) {
    e.preventDefault();
    if (!scrollOffset && e.target.value === "left") {
      console.log("can't scroll left");
    } else if (scrollOffset >= 100 && e.target.value === "right") {
      console.log("can't scroll right");
    } else if (e.target.value === "right") {
      setScrollOffset(scrollOffset + 20);
      console.log("scrolled right from offset ", scrollOffset);
    } else if (e.target.value === "left") {
      setScrollOffset(scrollOffset - 20);
      console.log("scrolled left from offset ", scrollOffset);
    }
  }

  return (
    <div>
      {/* <button
        id="rel_slide_left"
        value="left"
        type="button"
        onClick={scrollItems}
      >
        {"<"}
      </button> */}
      <div className="container-1">
        {arrOfItemsAndImages.map((item, i) => (
          <RelatedItem
            item={item}
            toggleComparison={toggleComparison}
            changeCompared={(obj) => setCompared(obj)}
            navigateToProduct={navigateToProduct}
            key={i}
          />
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
      {/* <button
        id="rel_slide_right"
        value="right"
        type="button"
        onClick={scrollItems}
      >
        {">"}
      </button> */}
    </div>
  );
};

RelatedList.propTypes = {
  relatedInfo: PropTypes.array.isRequired,
  relatedImages: PropTypes.array.isRequired,
  showComparison: PropTypes.bool.isRequired,
  toggleComparison: PropTypes.func.isRequired,
  currentInfo: PropTypes.object.isRequired,
  ratings: PropTypes.array.isRequired,
  navigateToProduct: PropTypes.func.isRequired,
};

export default RelatedList;
