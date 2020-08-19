import React from 'react';
import PropTypes from 'prop-types';
import RatingBreakdownBar from './rating-breakdown-bar';

class RatingBreakdown extends React.Component {
  render() {
    // console.log('this.props.filters:', this.props.filters);
    let ratingsCount = 0; // number of ratings
    Object.entries(this.props.ratings).forEach((arr) => {
      ratingsCount += arr[1];
    });
    return (
      <div className='rating-breakdown'>
        <span className='rating-breakdown-header'>Rating Breakdown</span>
        <div
          style={{ position: 'relative', height: '20px', marginBottom: '3px' }}
        >
          {this.props.filters.length >= 1 && (
            <div style={{ position: 'absolute' }}>
              Filtered by&nbsp;
              {this.props.filters.map((filter, index) => {
                if (index === this.props.filters.length - 1)
                  return `${filter} `;
                return `${filter}, `;
              })}
              {this.props.filters.length === 1 ? 'Star' : 'Stars'}
            </div>
          )}
        </div>
        {[...new Array(5)].map((ele, index) => {
          return (
            <RatingBreakdownBar
              key={index}
              rating={`${index + 1} Star`}
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
  filters: PropTypes.array.isRequired,
};

export default RatingBreakdown;
