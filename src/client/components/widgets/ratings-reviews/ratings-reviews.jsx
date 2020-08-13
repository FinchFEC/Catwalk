import React from 'react';
import PropTypes from 'prop-types';
import AddReviewModal from './add-review-modal';
import ReviewTilesContainer from './review-tiles-container';
import Rating from './rating';
import ImgModal from './img-modal';
import '../../../assets/scss/styles.scss';
import '../../../assets/scss/ratings-reviews.scss';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.props.getReviewMetadata();
    this.props.getReviewsByProduct();
    this.state = {
      addReview: false,
      filters: {},
      selectedImgUrl: '',
      selectedImgId: '',
    };
    this.handleAddReviewBtnClick = this.handleAddReviewBtnClick.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
    this.handleFilterClick = this.handleFilterClick.bind(this);
    this.handleSelectImg = this.handleSelectImg.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.modalRef = React.createRef();
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

  handleAddReviewBtnClick(e) {
    e.stopPropagation();
    this.setState({
      addReview: true,
    });
    this.props.getReviewsByProduct(4);
  }

  handleFilterClick(rating) {
    this.setState((state) => {
      if (state.filters.hasOwnProperty(rating)) {
        const newFilters = { ...state.filters };
        delete newFilters[rating];
        return {
          filters: newFilters,
        };
      }
      const newFilters = { ...state.filters, [rating]: true };
      return {
        filters: newFilters,
      };
    });
  }

  handleModalClick(e) {
    if (e.target === this.modalRef.current) {
      this.setState({
        addReview: false,
      });
    }
  }

  render() {
    return (
      <div className='ratings-reviews'>
        {Object.getOwnPropertyNames(this.props.reviewRatings).length > 1 && (
          <Rating
            ratings={this.props.reviewRatings}
            recommended={this.props.reviewRecommended}
            characteristics={this.props.reviewCharacteristics}
            filterClick={this.handleFilterClick}
          />
        )}
        <div className='right'>
          {this.props.reviews.length > 1 && (
            <ReviewTilesContainer
              reviews={this.props.reviews}
              handleSelectImg={this.handleSelectImg}
              noMoreReviews={this.props.noMoreReviews}
              onClick={this.props.getReviewsByProduct}
            />
          )}
          {Object.getOwnPropertyNames(this.props.reviewCharacteristics).length >
            1 && (
            <div
              className='add-review-btn'
              onClick={this.handleAddReviewBtnClick}
            >
              ADD A REVIEW +
            </div>
          )}
          {this.state.addReview && this.props.reviewCharacteristics && (
            <AddReviewModal
              ref={this.modalRef}
              characteristics={this.props.reviewCharacteristics}
              onClick={this.handleModalClick}
            />
          )}
          {this.state.selectedImgUrl && (
            <ImgModal
              src={this.state.selectedImgUrl}
              id={this.state.selectedImgId}
              onClick={this.handleCloseModal}
            />
          )}
        </div>
      </div>
    );
  }
}

export default RatingsReviews;

RatingsReviews.propTypes = {
  getReviewMetadata: PropTypes.func.isRequired,
  getReviewsByProduct: PropTypes.func.isRequired,
  reviewCharacteristics: PropTypes.object.isRequired,
  reviewRatings: PropTypes.object.isRequired,
  reviewRecommended: PropTypes.object.isRequired,
  reviews: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  productId: PropTypes.number.isRequired,
  noMoreReviews: PropTypes.bool.isRequired,
  sort: PropTypes.string.isRequired,
};
