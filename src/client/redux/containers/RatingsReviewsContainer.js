import { connect } from 'react-redux';
import RatingsReviews from '../../components/widgets/ratings-reviews/ratings-reviews.jsx';
import getReviewsByProductThunk from '../action-creators/getReviewsByProductThunk';
import getReviewMetadataThunk from '../action-creators/getReviewMetadataThunk';
import getReviewByProductBySortThunk from '../action-creators/getReviewsByProductBySortThunk';

function mapStateToProps(state) {
  return {
    reviews: state.reviews,
    reviewsBuffer: state.reviewsBuffer,
    reviewCharacteristics: state.reviewCharacteristics,
    reviewRatings: state.reviewRatings,
    reviewRecommended: state.reviewRecommended,
    productId: state.productId,
    sort: state.sort,
    page: state.page,
    productInfo: state.currentInfo,
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
      dispatch(getReviewMetadataThunk());
      dispatch(getReviewByProductBySortThunk());
    },
  };
}

const RatingsReviewsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RatingsReviews);

export default RatingsReviewsContainer;
