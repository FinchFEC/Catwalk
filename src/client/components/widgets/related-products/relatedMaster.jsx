import React from 'react';
import RelatedList from "./relatedList";
import OutfitList from "./outfitList";
import ComparisonModal from "./comparisonModal";
import "../../../assets/scss/related.scss";

const RelatedProducts = () => (
  <div>
    <RelatedList />
    <br />
    <OutfitList />
    <br />
    <ComparisonModal />
  </div>
);

export default RelatedProducts;
