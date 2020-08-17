import React from 'react';
import PropTypes from 'prop-types';

class ReviewTileSummary extends React.Component {
  render() {
    const reviewSummaryLength = this.props.reviewSummary.length;
    return (
      <div className='review-tile-summary'>
        <div
          className='review-summary-heading'
          title={this.props.reviewSummary}
        >
          {reviewSummaryLength <= 60
            ? this.props.reviewSummary
            : `${this.props.reviewSummary.slice(0, 61)}...`}
        </div>
        {reviewSummaryLength > 60 && (
          <div className='review-tile-summary-wrap'>
            {this.props.reviewSummary.slice(61)}
          </div>
        )}
      </div>
    );
  }
}

export default ReviewTileSummary;

ReviewTileSummary.propTypes = {
  reviewSummary: PropTypes.string.isRequired,
};
