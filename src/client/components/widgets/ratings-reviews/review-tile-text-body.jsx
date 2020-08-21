import React from 'react';
import PropTypes from 'prop-types';

class ReviewTileTextBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
    };
    this.handleShowMoreClick = this.handleShowMoreClick.bind(this);
  }

  handleShowMoreClick() {
    this.setState((state) => ({
      showMore: !state.showMore,
    }));
  }

  render() {
    const text = this.props.text;
    const textLength = text.length;
    return (
      <div className='review-tile-text'>
        {textLength <= 250 && (
          <div className='review-tile-text-body'>{text}</div>
        )}
        {textLength > 250 && !this.state.showMore && (
          <div>
            <div className='review-tile-text-body'>
              {text.slice(0, 250)}
              ...
            </div>
            <div
              className='show-more-button'
              onClick={this.handleShowMoreClick}
            >
              Show More
            </div>
          </div>
        )}
        {textLength > 250 && this.state.showMore && (
          <div>
            <div className='review-tile-text-body'>{text}</div>
            <div className='hide-button' onClick={this.handleShowMoreClick}>
              Hide
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ReviewTileTextBody;

ReviewTileTextBody.propTypes = {
  text: PropTypes.string.isRequired,
};
