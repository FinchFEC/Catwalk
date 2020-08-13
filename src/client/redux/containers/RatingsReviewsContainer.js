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
    noMoreReviews: state.noMoreReviews,
    productId: state.productId,
    sort: state.sort,
    page: state.page,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getReviewsByProduct() {
      dispatch(getReviewsByProductThunk());
    },
    getReviewMetadata() {
      dispatch(getReviewMetadataThunk());
    },
    changeSort(sort) {
      dispatch({ type: 'CHANGE_SORT', data: sort });
    },
  };
}

const RatingsReviewsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RatingsReviews);

export default RatingsReviewsContainer;
