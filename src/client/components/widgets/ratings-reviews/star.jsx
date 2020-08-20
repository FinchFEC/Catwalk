import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import '../../../assets/icons';

const Star = ({ onClick, index, rating }) => {
  return (
    <div
      className='star-container'
      style={{ position: 'relative', display: 'inline-block' }}
      onClick={() => {
        onClick(index);
      }}
    >
      <div>
        <FontAwesomeIcon icon={['far', 'star']} />
      </div>
      <div
        className='star-overlay'
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: `${rating}%`,
          overflow: 'hidden',
        }}
      >
        <FontAwesomeIcon icon={['fas', 'star']} color='#444' />
      </div>
    </div>
  );
};

Star.defaultProps = {
  onClick: () => {},
};

Star.propTypes = {
  rating: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

export default Star;
