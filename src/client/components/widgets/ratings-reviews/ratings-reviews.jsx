import React from 'react';
import PropTypes from 'prop-types';
import ReviewTilesContainer from './review-tiles-container';
import '../../../assets/scss/ratings-reviews.scss';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.props.getReviewsByProduct(4);
  }

  render() {
    return (
      <div className='ratings-reviews'>
        {this.props.reviews.length > 1 && (
          <ReviewTilesContainer reviews={this.props.reviews} />
        )}
        {this.props.reviews &&
          console.log('this.props.reviews', this.props.reviews)}
      </div>
    );
  }
}

export default RatingsReviews;

RatingsReviews.propTypes = {
  getReviewsByProduct: PropTypes.func.isRequired,
  reviews: PropTypes.array.isRequired,
};
