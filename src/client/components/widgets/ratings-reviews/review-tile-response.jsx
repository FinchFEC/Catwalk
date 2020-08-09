import React from 'react';
import PropTypes from 'prop-types';

class ReviewTileResponse extends React.Component {
  render() {
    return (
      <div className='review-tile-response'>
        Response from seller
        {this.props.response}
      </div>
    );
  }
}

ReviewTileResponse.propTypes = {
  response: PropTypes.string.isRequired,
};

export default ReviewTileResponse;
