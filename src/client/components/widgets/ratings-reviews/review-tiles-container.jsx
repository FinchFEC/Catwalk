import React from 'react';
import PropTypes from 'prop-types';
import ReviewTile from './review-tile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../assets/icons';

class ReviewTilesContainer extends React.Component {
  render() {
    return (
      <div className='review-tile-container'>
        <div className='dropdown'>
          <div className='dropdown-btn'>
            SORT BY&nbsp;
            <FontAwesomeIcon icon={['fas', 'caret-down']} />
          </div>
          <div className='dropdown-content'>
            <div
              className='option'
              onClick={() => {
                this.props.onChangeSort('relevant');
              }}
            >
              Relevant
            </div>
            <div
              className='option'
              onClick={() => {
                this.props.onChangeSort('newest');
              }}
            >
              Newest
            </div>
            <div
              className='option'
              onClick={() => {
                this.props.onChangeSort('helpful');
              }}
            >
              Helpful
            </div>
          </div>
        </div>

        {this.props.reviews.map((review) => {
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
              handleSelectImg={this.props.handleSelectImg}
            />
          );
        })}
        {!this.props.noMoreReviews && (
          <div onClick={this.props.onClick} className='show-more-reviews-btn'>
            SHOW MORE REVIEWS
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
  onChangeSort: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
};

export default ReviewTilesContainer;
