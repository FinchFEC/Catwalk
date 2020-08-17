import { connect } from "react-redux";
import RelatedProducts from "../../components/widgets/related-products/relatedMaster.jsx";
import getRelatedProductsInfo from '../action-creators/getRelatedProductsInfo';
import getAllRelatedImages from '../action-creators/getAllRelatedImages';

function mapStateToProps(state) {
  return {
    relatedInfo: state.relatedInfo,
    relatedImages: state.relatedImages
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getRelatedProductsInfo(prodId) {
      dispatch(getRelatedProductsInfo(prodId));
    },
    getAllRelatedImages(prodId) {
      dispatch(getAllRelatedImages(prodId));
    },
  };
}

const RelatedProductsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RelatedProducts);

export default RelatedProductsContainer;
