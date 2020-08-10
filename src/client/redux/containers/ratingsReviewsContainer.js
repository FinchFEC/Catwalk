import { connect } from 'react-redux';
import RatingsReviews from '../../components/widgets/ratings-reviews/ratings-reviews.jsx';
import getReviewsByProductThunk from '../action-creators/getReviewsByProductThunk';

function mapStateToProps(state) {
  return {
    reviews: state.reviews,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getReviewsByProduct(productId) {
      console.log(productId);
      dispatch(getReviewsByProductThunk(productId));
    },
  };
}

const RatingsReviewsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RatingsReviews);

export default RatingsReviewsContainer;
