import React from 'react';
import PropTypes from 'prop-types';
import RatingBreakdownBar from './rating-breakdown-bar';

class RatingCharacteristics extends React.Component {
  render() {
    return (
      <div className='rating-characteristics'>
        {Object.entries(this.props.characteristics).map((ele, i) => {
          return (
            <div className='ratings-characteristics-header' key={i}>
              <RatingBreakdownBar
                rating={ele[0]}
                percent={((ele[1].value / 5) * 100).toFixed(2)}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

RatingCharacteristics.propTypes = {
  characteristics: PropTypes.object.isRequired,
};

export default RatingCharacteristics;
