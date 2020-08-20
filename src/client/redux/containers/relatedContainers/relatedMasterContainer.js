import { connect } from "react-redux";
import RelatedMaster from "../../../components/widgets/related-products/relatedMaster.jsx";
import actionCreators from "../../action-creators";

function mapStateToProps(state) {
  return {
    relatedInfo: state.relatedInfo,
    relatedImages: state.relatedImages,
    showComparison: state.showComparison,
    productId: state.productId,
    currentInfo: state.currentInfo,
    relatedRatings: state.relatedRatings,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getRelatedProductsInfo(prodId) {
      dispatch(actionCreators.getRelatedProductsInfo(prodId));
    },
    getAllRelatedImages(prodId) {
      dispatch(actionCreators.getAllRelatedImages(prodId));
    },
    toggleComparison() {
      dispatch(actionCreators.toggleComparison());
    },
    getCurrentProductInfo(prodId) {
      dispatch(actionCreators.getCurrentProductInfo(prodId));
    },
    getAllRelatedReviews(prodId) {
      dispatch(actionCreators.getAllRelatedReviews(prodId));
    },
    navigateToProduct(prodId) {
      dispatch(actionCreators.navigateToProduct(prodId));
    }
  };
}

const RelatedMasterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RelatedMaster);

export default RelatedMasterContainer;
