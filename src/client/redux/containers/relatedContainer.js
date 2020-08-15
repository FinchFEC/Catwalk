import { connect } from 'react-redux';
import RelatedProducts from '../../components/widgets/related-products/relatedMaster.jsx';
import getRelatedProductsInfo from '../action-creators/getRelatedProductsInfo';

function mapStateToProps(state) {
  return {
    relatedProducts: state.relatedInfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getRelatedProductsInfo(productId) {
      dispatch(getRelatedProductsInfo(productId));
    },
  };
}

const RelatedProductsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RelatedProducts);

export default RelatedProductsContainer;