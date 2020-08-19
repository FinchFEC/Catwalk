import React from 'react';
import PropTypes from 'prop-types';

class ReviewTileResponse extends React.Component {
  render() {
    return (
      <div className='review-tile-response'>
        <div className='review-tile-response-header'>Response from seller:</div>
        <div>{this.props.response}</div>
      </div>
    );
  }
}

ReviewTileResponse.propTypes = {
  response: PropTypes.string.isRequired,
};

export default ReviewTileResponse;
