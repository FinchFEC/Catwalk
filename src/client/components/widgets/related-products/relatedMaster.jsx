import React from "react";
import PropTypes from "prop-types";
import RelatedList from "./relatedList";
import OutfitList from "./outfitList";
import "../../../assets/scss/related.scss";

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.props.getRelatedProductsInfo(4);
    this.props.getAllRelatedImages(4);
  }
  
  render() {
    return (
      <div>
        <RelatedList relatedInfo={this.props.relatedInfo} relatedImages={this.props.relatedImages} />
        <OutfitList />
      </div>
    );
  }
}



RelatedProducts.propTypes = {
  relatedInfo: PropTypes.array.isRequired,
  relatedImages: PropTypes.array.isRequired,
  getRelatedProductsInfo: PropTypes.func.isRequired,
  getAllRelatedImages: PropTypes.func.isRequired,
};

export default RelatedProducts;
