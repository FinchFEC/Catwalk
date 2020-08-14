import React from 'react';
import PropTypes from 'prop-types';
import StaticStars from './static-stars';

class RatingSummary extends React.Component {
  render() {
    let ratingsCount = 0; // number of ratings
    let totalRating = 0;
    Object.entries(this.props.ratings).forEach((arr) => {
      ratingsCount += arr[1];
      totalRating += arr[0] * arr[1];
    });
    let avgRating = (totalRating / ratingsCount).toFixed(2);
    if (isNaN(avgRating)) {
      avgRating = 0;
    }
    // console.log('totalRating:', totalRating);
    // console.log('ratingsCount:', ratingsCount);
    // console.log('avgRating:', avgRating);
    return (
      <div className='ratings-summary'>
        <div className='average-rating'>{avgRating}</div>
        <StaticStars rating={parseFloat(avgRating, 10)} />
        <div className='ratings-count'>
          based on&nbsp;
          {ratingsCount}
          &nbsp;ratings
        </div>
      </div>
    );
  }
}

RatingSummary.propTypes = {
  ratings: PropTypes.object.isRequired,
};

export default RatingSummary;
