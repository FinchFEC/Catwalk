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

Rating.defaultProps = {
  ratings: [],
  recommended: {},
  characteristics: {},
};

Rating.propTypes = {
  ratings: PropTypes.object,
  recommended: PropTypes.object,
  characteristics: PropTypes.object,
  filterClick: PropTypes.func.isRequired,
};

export default Rating;
