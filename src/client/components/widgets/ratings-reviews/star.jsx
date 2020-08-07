import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import '../../../assets/icons';

class Star extends React.Component {
  render() {
    return (
      <div
        className='star-container'
        style={{ position: 'relative', display: 'inline-block' }}
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
            width: this.props.rating + '%',
            overflow: 'hidden',
          }}
        >
          <FontAwesomeIcon icon={['fas', 'star']} color='black' />
        </div>
      </div>
    );
  }
}

export default Star;

Star.propTypes = {
  rating: PropTypes.number,
};
