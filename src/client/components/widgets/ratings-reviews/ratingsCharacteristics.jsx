import React from 'react';
import PropTypes from 'prop-types';
import RatingBreakdownBar from './rating-breakdown-bar';

class RatingsCharacteristics extends React.Component {
  render() {
    {
      Object.entries(this.props.characteristics).map((ele, i) => {
        return (
          <div className='ratings-characteristics-header'>
            <RatingBreakdownBar rating={ele[0]} percent={ele[1][value] / 5} />
          </div>
        );
      });
    }
  }
}

RatingsCharacteristics.propTypes = {
  characteristics: PropTypes.object.isRequired,
};
