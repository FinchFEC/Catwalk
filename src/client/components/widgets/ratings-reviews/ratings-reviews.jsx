import React from 'react';
import PropTypes from 'prop-types';
import AddReviewModal from './add-review-modal';

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
};
