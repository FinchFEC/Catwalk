import React from 'react';
import PropTypes from 'prop-types';
import RatingSummary from './rating-summary';
import RatingBreakdown from './rating-breakdown';
import RatingsCharacteristics from './rating-characteristics';

class Rating extends React.Component {
  render() {
    const numRecommend = Object.values(this.props.recommended).reduce(
      (acc, ele) => {
        return acc + ele;
      },
      0
    );
    const numRecommendedYes = this.props.recommended[1];
    const percentRecommended =
      (numRecommendedYes / numRecommend).toFixed(2) * 100 || 0;

    return (
      <div className='ratings'>
        <RatingSummary ratings={this.props.ratings} />
        <RatingBreakdown
          ratings={this.props.ratings}
          filterClick={this.props.filterClick}
          filters={this.props.filters}
        />
        Recommended by {percentRecommended}
        % of reviewers
        <RatingsCharacteristics characteristics={this.props.characteristics} />
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
  filters: PropTypes.array.isRequired,
};

export default Rating;
