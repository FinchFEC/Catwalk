import { connect } from "react-redux";
import RelatedMaster from "../../../components/widgets/related-products/relatedMaster.jsx";
import actionCreators from "../../action-creators";
import productId from "../../reducers/productId.js";

function mapStateToProps(state) {
  return {
    relatedInfo: state.relatedInfo,
    relatedImages: state.relatedImages,
    showComparison: state.showComparison,
    productId: state.productId,
    currentInfo: state.currentInfo
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
    }
  };
}

const RelatedMasterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RelatedMaster);

export default RelatedMasterContainer;
