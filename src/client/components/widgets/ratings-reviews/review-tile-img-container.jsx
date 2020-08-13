import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ReviewTileImgContainer extends Component {
  render() {
    return (
      <div className='review-tile-img-container'>
        {this.props.imgs.map((img) => {
          return (
            <div key={img.id}>
              <img
                src={img.url}
                alt={img.id}
                onClick={() => this.props.onClick(img)}
                className='review-tile-img'
              />
            </div>
          );
        })}
      </div>
    );
  }
}

ReviewTileImgContainer.propTypes = {
  imgs: PropTypes.array.isRequired,
};

export default ReviewTileImgContainer;
