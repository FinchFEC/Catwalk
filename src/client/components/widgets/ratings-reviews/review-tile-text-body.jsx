import React from 'react';
import PropTypes from 'prop-types';

class ReviewTileTextBody extends React.Component {
  render() {
    let text = this.props.text;
    let rest = '';
    if (text.length > 250) {
      rest = text.slice(251);
      text = text.slice(0, 251);
    }
    return <div className='review-tile-text-body'>{text}</div>;
  }
}

export default ReviewTileTextBody;
