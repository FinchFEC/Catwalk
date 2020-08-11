import { connect } from 'react-redux';
import RatingsReviews from '../../components/widgets/ratings-reviews/ratings-reviews.jsx';
import getReviewsByProductThunk from '../action-creators/getReviewsByProductThunk';
import getReviewMetadataThunk from '../action-creators/getReviewMetadataThunk';

function mapStateToProps(state) {
  return {
    reviews: state.reviews,
    reviewCharacteristics: state.reviewCharacteristics,
    reviewRatings: state.reviewRatings,
    reviewRecommended: state.reviewRecommended,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getReviewsByProduct(productId) {
      console.log(productId);
      dispatch(getReviewsByProductThunk(productId));
    },
    getReviewMetadata(productId) {
      dispatch(getReviewMetadataThunk(productId));
    },
  };
}

const RatingsReviewsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RatingsReviews);

export default RatingsReviewsContainer;
