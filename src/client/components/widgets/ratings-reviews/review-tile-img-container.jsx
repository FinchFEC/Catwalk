import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImgModal from './img-modal';

class ReviewTileImgContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImgUrl: '',
      selectedImgId: null,
    };
    this.handleSelectImg = this.handleSelectImg.bind(this);
  }

  handleSelectImg(img) {
    this.setState({
      selectedImgUrl: img.url,
      selectedImgId: img.id,
    });
  }

  render() {
    return (
      <div className='review-tile-img-container'>
        {this.props.imgs.map((img) => {
          return (
            <div className='review-tile-img' key={i}>
              <img src='#' alt={img.id} onClick={this.handleSelectImg} />
            </div>
          );
        })}
        <ImgModal
          src={this.state.selectedImgUrl}
          id={this.state.selectedImgId}
        />
      </div>
    );
  }
}

ReviewTileImgContainer.propTypes = {
  imgs: PropTypes.array.isRequired,
};

export default ReviewTileImgContainer;
