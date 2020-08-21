import React from "react";
import PropTypes from "prop-types";
import RelatedList from "./relatedList";
import OutfitList from "./outfitList";
import "../../../assets/scss/related.scss";

class RelatedMaster extends React.Component {
  constructor(props) {
    super(props);
    props.getCurrentProductInfo(props.productId);
    props.getRelatedProductsInfo(props.productId);
    props.getAllRelatedImages(props.productId);
    props.getAllRelatedReviews(props.productId);
    this.rerender = this.rerender.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.productId !== prevProps.productId) {
      this.props.getCurrentProductInfo(this.props.productId);
      this.props.getRelatedProductsInfo(this.props.productId);
      this.props.getAllRelatedImages(this.props.productId);
      this.props.getAllRelatedReviews(this.props.productId);
    }
  }

  rerender() {
    this.forceUpdate();
  }

  render() {
    return (
      <div className="head_related">
        <h3>RELATED PRODUCTS</h3>
        <RelatedList
          relatedInfo={this.props.relatedInfo}
          relatedImages={this.props.relatedImages}
          toggleComparison={this.props.toggleComparison}
          showComparison={this.props.showComparison}
          currentInfo={this.props.currentInfo}
          ratings={this.props.relatedRatings}
          navigateToProduct={this.props.navigateToProduct}
        />
        <h3>YOUR OUTFIT</h3>
        <OutfitList
          productId={this.props.productId}
          currentInfo={this.props.currentInfo}
          rerender={this.rerender}
          currentStyles={this.props.currentStyles}
        />
      </div>
    );
  }
}

RelatedMaster.propTypes = {
  getRelatedProductsInfo: PropTypes.func.isRequired,
  getAllRelatedImages: PropTypes.func.isRequired,
  toggleComparison: PropTypes.func.isRequired,
  showComparison: PropTypes.bool.isRequired,
  relatedInfo: PropTypes.array.isRequired,
  relatedImages: PropTypes.array.isRequired,
  productId: PropTypes.number.isRequired,
  getCurrentProductInfo: PropTypes.func.isRequired,
  currentInfo: PropTypes.object.isRequired,
  getAllRelatedReviews: PropTypes.func.isRequired,
  relatedRatings: PropTypes.array.isRequired,
  navigateToProduct: PropTypes.func.isRequired,
  currentStyles: PropTypes.object.isRequired
};

export default RelatedMaster;
