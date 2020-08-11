import React from 'react';
import PropTypes from 'prop-types';
import AddReviewModal from './add-review-modal';
import ReviewTilesContainer from './review-tiles-container';
import '../../../assets/scss/styles.scss';
import '../../../assets/scss/ratings-reviews.scss';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.props.getReviewMetadata(4);
    this.props.getReviewsByProduct(4);
    this.state = {
      addReview: false,
    };
    this.handleAddReviewBtnClick = this.handleAddReviewBtnClick.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
    this.modalRef = React.createRef();
  }

  handleAddReviewBtnClick(e) {
    e.stopPropagation();
    this.setState({
      addReview: true,
    });
    this.props.getReviewsByProduct(4);
  }

  handleModalClick(e) {
    if (e.target === this.modalRef.current) {
      this.setState({
        addReview: false,
      });
    }
  }

  render() {
    return (
      <div className='ratings-reviews'>
        <div className='add-review-btn' onClick={this.handleAddReviewBtnClick}>
          ADD A REVIEW +
        </div>
        {this.state.addReview && this.props.reviewCharacteristics && (
          <AddReviewModal
            ref={this.modalRef}
            characteristics={this.props.reviewCharacteristics}
            onClick={this.handleModalClick}
          />
        )}
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
  getReviewMetadata: PropTypes.func.isRequired,
  getReviewsByProduct: PropTypes.func.isRequired,
  reviewCharacteristics: PropTypes.object.isRequired,
  reviewRatings: PropTypes.object.isRequired,
  reviewRecommended: PropTypes.object.isRequired,
  reviews: PropTypes.array.isRequired,
};
