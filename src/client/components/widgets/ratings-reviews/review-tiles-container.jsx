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
            />
          );
        })}
      </div>
    );
  }
}

ReviewTilesContainer.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewTilesContainer;
