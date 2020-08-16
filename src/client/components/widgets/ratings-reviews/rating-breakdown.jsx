import React from 'react';
import PropTypes from 'prop-types';
import RatingBreakdownBar from './rating-breakdown-bar';

class RatingBreakdown extends React.Component {
  render() {
    let ratingsCount = 0; // number of ratings
    Object.entries(this.props.ratings).forEach((arr) => {
      ratingsCount += arr[1];
    });
    return (
      <div className='rating-breakdown'>
        {[...new Array(5)].map((ele, index) => {
          return (
            <RatingBreakdownBar
              key={index}
              rating={index + 1}
              percent={
                this.props.ratings[index + 1]
                  ? (this.props.ratings[index + 1] / ratingsCount) * 100
                  : 0
              }
              onClick={this.props.filterClick}
            />
          );
        })}
      </div>
    );
  }
}

RatingBreakdown.propTypes = {
  ratings: PropTypes.object.isRequired,
  filterClick: PropTypes.func.isRequired,
};

export default RatingBreakdown;
