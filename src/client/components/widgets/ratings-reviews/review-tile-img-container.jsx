import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImgModal from './img-modal';

class ReviewTileImgContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImgUrl: '',
      selectedImgId: '',
    };
    this.handleSelectImg = this.handleSelectImg.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleSelectImg(img) {
    this.setState({
      selectedImgUrl: img.url,
      selectedImgId: img.id,
    });
  }

  handleCloseModal() {
    this.setState({
      selectedImgUrl: '',
      selectedImgId: '',
    });
  }

  render() {
    return (
      <div className='review-tile-img-container'>
        {this.props.imgs.map((img) => {
          return (
            <div key={img.id}>
              <img
                src={img.url}
                alt={img.id}
                onClick={() => this.handleSelectImg(img)}
                className='review-tile-img'
              />
            </div>
          );
        })}
        {this.state.selectedImgUrl && (
          <ImgModal
            src={this.state.selectedImgUrl}
            id={this.state.selectedImgId}
            onClick={this.handleCloseModal}
          />
        )}
      </div>
    );
  }
}

ReviewTileImgContainer.propTypes = {
  imgs: PropTypes.array.isRequired,
};

export default ReviewTileImgContainer;
