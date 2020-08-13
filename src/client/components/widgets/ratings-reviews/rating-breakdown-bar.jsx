import React from 'react';
import PropTypes from 'prop-types';

class RatingBreakdownBar extends React.Component {
  render() {
    return (
      <div className='rating-breakdown-bar'>
        <span
          className='breakdown-bar-rating'
          onClick={() => this.props.onClick(this.props.rating)}
          style={{ boxSizing: 'border-box', padding: '5px', width: '20%' }}
        >
          {this.props.rating}
          &nbsp;Star
        </span>
        <span
          className='breakdown-bar'
          style={{
            position: 'relative',
            display: 'inline-block',
            height: '12px',
            width: '80%',
            marginLeft: '5px',
          }}
        >
          <span
            className='breakdown-bar'
            style={{
              width: '100%',
              height: '12px',
              position: 'absolute',
              display: 'inline-block',
              backgroundColor: 'rgba(20,20,20,0.2)',
            }}
          />
          <span
            className='breakdown-bar-overlay'
            style={{
              width: `${this.props.percent}%`,
              height: '12px',
              position: 'absolute',
              display: 'inline-block',
              backgroundColor: 'green',
            }}
          />
        </span>
      </div>
    );
  }
}

RatingBreakdownBar.propTypes = {
  rating: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

export default RatingBreakdownBar;
