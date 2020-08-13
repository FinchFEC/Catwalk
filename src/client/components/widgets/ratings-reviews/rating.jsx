import React from 'react';
import PropTypes from 'prop-types';
import RatingSummary from './rating-summary';
import RatingBreakdown from './rating-breakdown';

class Rating extends React.Component {
  render() {
    return (
      <div className='ratings'>
        <RatingSummary ratings={this.props.ratings} />
        <RatingBreakdown
          ratings={this.props.ratings}
          filterClick={this.props.filterClick}
        />
      </div>
    );
  }
}

Rating.propTypes = {
  ratings: PropTypes.object.isRequired,
  recommended: PropTypes.object.isRequired,
  characteristics: PropTypes.object.isRequired,
  filterClick: PropTypes.func.isRequired,
};

export default Rating;
