import React from 'react';
import PropTypes from 'prop-types';

import AddReviewModal from './add-review-modal';
import ReviewTilesContainer from './review-tiles-container';
import '../../../assets/scss/ratings-reviews.scss';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.props.getReviewMetadata(4);
    this.state = {
      addReview: false,
    };
    this.handleAddReviewBtnClick = this.handleAddReviewBtnClick.bind(this);
  }

  handleAddReviewBtnClick(e) {
    e.stopPropagation();
    this.setState({
      addReview: true,
    });
    this.props.getReviewsByProduct(4);
  }

  render() {
    return (
      <div>
        <div className='add-review-btn' onClick={this.handleAddReviewBtnClick}>
          Add Review
        </div>
        {this.state.addReview && this.props.reviewCharacteristics && (
          <AddReviewModal characteristics={this.props.reviewCharacteristics} />
        )}
        <div className='ratings-reviews'>
          {this.props.reviews.length > 1 && (
            <ReviewTilesContainer reviews={this.props.reviews} />
          )}
          {this.props.reviews &&
            console.log('this.props.reviews', this.props.reviews)}
        </div>
      </div>
    );
  }
}

export default RatingsReviews;

RatingsReviews.propTypes = {
  getReviewMetadata: PropTypes.func.isRequired,
  reviewCharacteristics: PropTypes.object.isRequired,
  reviewRatings: PropTypes.object.isRequired,
  reviewRecommended: PropTypes.object.isRequired,
  getReviewsByProduct: PropTypes.func.isRequired,
  reviews: PropTypes.array.isRequired,
};
