import React from 'react';
import PropTypes from 'prop-types';
import ReviewTile from './review-tile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../assets/icons';

function ReviewTilesContainer(props) {
  let reviews = props.reviews;
  if (props.filters.length > 0) {
    reviews = reviews.filter((review) => {
      if (props.filters.includes(review.rating)) {
        return true;
      }
      return false;
    });
  }

  return (
    <div className='review-tiles-container-outer'>
      <div className='dropdown'>
        <div className='dropdown-btn'>
          SORT BY&nbsp;
          <FontAwesomeIcon icon={['fas', 'caret-down']} />
        </div>
        <div className='dropdown-content'>
          <div
            className='option'
            onClick={() => {
              props.onChangeSort('relevant');
            }}
          >
            Relevant
          </div>
          <div
            className='option'
            onClick={() => {
              props.onChangeSort('newest');
            }}
          >
            Newest
          </div>
          <div
            className='option'
            onClick={() => {
              props.onChangeSort('helpful');
            }}
          >
            Helpful
          </div>
        </div>
      </div>
      <div className='review-tiles-container'>
        {reviews.map((review) => {
          return (
            <ReviewTile
              key={review.review_id}
              id={review.review_id}
              helpful={review.helpfulness}
              date={new Date(review.date)}
              summary={review.summary}
              body={review.body}
              imgs={review.photos}
              recommend={review.recommend}
              response={review.response}
              rating={review.rating}
              username={review.reviewer_name}
              handleSelectImg={props.handleSelectImg}
            />
          );
        })}
      </div>
    </div>
  );
}

ReviewTilesContainer.propTypes = {
  reviews: PropTypes.array.isRequired,
  handleSelectImg: PropTypes.func.isRequired,
  onChangeSort: PropTypes.func.isRequired,
  filters: PropTypes.array.isRequired,
};

export default ReviewTilesContainer;
