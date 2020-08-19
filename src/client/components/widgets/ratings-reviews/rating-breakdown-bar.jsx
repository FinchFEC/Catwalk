import React from 'react';
import PropTypes from 'prop-types';
import '../../../assets/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class RatingBreakdownBar extends React.Component {
  render() {
    return (
      <div className='rating-breakdown-bar'>
        <span
          className='breakdown-bar-rating'
          onClick={() =>
            this.props.onClick(parseInt(this.props.rating.slice(0, 1)))
          }
          style={{ boxSizing: 'border-box', minWidth: '20%' }}
        >
          {this.props.rating}
        </span>
        <span
          className='breakdown-bar'
          style={{
            position: 'relative',
            display: 'inline-block',
            height: '12px',
          }}
        >
          <span
            className='breakdown-bar-inner'
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
              backgroundColor: '#8eda14',
            }}
          />
          {this.props.rating === '' && (
            <span
              style={{
                width: `${parseInt(this.props.percent, 10)}%`,
                height: '12px',
                position: 'absolute',
                bottom: '2px',
                marginLeft: '10px',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                backgroundColor: 'transparent',
              }}
            >
              <FontAwesomeIcon icon={['fas', 'caret-down']} size='2x' />
            </span>
          )}
        </span>
      </div>
    );
  }
}

RatingBreakdownBar.defaultProps = {
  onClick: () => {},
};

RatingBreakdownBar.propTypes = {
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  percent: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

export default RatingBreakdownBar;
