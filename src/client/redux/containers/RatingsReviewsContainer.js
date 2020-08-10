import { connect } from 'react-redux';
import RatingsReviews from '../../components/widgets/ratings-reviews/ratings-reviews.jsx';
import getReviewMetadataThunk from '../action-creators/getReviewMetadataThunk';

function mapStateToProps({
  reviewCharacteristics,
  reviewRatings,
  reviewRecommended,
}) {
  return {
    reviewCharacteristics,
    reviewRatings,
    reviewRecommended,
  };
}

function mapDispatchToProps(dispatch) {
  return {
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
