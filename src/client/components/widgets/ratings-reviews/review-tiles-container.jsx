import React from 'react';
import PropTypes from 'prop-types';
import ReviewTile from './review-tile';

class ReviewTilesContainer extends React.Component {
  render() {
    return (
      <div className='review-tile-container'>
        {this.props.reviews.map((review) => {
          return (
            <ReviewTile
              key={review.review_id}
              date={new Date(review.date)}
              summary={review.summary}
              body={review.body}
              imgs={review.photos}
              recommend={review.recommend}
              response={review.response}
              rating={review.rating}
              username={review.reviewer_name}
              handleSelectImg={this.props.handleSelectImg}
            />
          );
        })}
        {!this.props.noMoreReviews && (
          <div onClick={this.props.onClick} className='show-more-reviews-btn'>
            SHOW MORE REVIEWS{' '}
          </div>
        )}
      </div>
    );
  }
}

ReviewTilesContainer.propTypes = {
  reviews: PropTypes.array.isRequired,
  handleSelectImg: PropTypes.func.isRequired,
  noMoreReviews: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ReviewTilesContainer;
