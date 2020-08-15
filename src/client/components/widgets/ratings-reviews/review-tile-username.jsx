import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../assets/icons';

class ReviewTileUsername extends React.Component {
  render() {
    return (
      <div className='review-tile-username-container'>
        {this.props.verified && (
          <span>
            <FontAwesomeIcon icon={['far', 'check-circle']} />
            Verified User&nbsp;
          </span>
        )}
        <span className='review-tile-username'>{this.props.username}</span>
      </div>
    );
  }
}

ReviewTileUsername.propTypes = {
  username: PropTypes.string.isRequired,
  verified: PropTypes.bool.isRequired,
};

export default ReviewTileUsername;
