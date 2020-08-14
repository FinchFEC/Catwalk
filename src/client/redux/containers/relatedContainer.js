import { connect } from 'react-redux';
import RelatedProducts from '../../components/widgets/related-products/relatedMaster.jsx';
import getRelatedProductIDs from '../action-creators/getRelatedProductIDs';

function mapStateToProps(state) {
  return {
    relatedProducts: state.relatedProducts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getRelatedProductIDs(productId) {
      dispatch(getRelatedProductIDs(productId));
    },
  };
}

const RelatedProductsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RelatedProducts);

export default RelatedProductsContainer;