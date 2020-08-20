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
      filters: [],
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
  }

  handleFilterClick(rating) {
    this.setState((state) => {
      const index = state.filters.indexOf(rating);
      if (index >= 0) {
        const newFilters = [...state.filters];
        newFilters.splice(index, 1);
        return {
          filters: newFilters,
        };
      }
      const newFilters = [...state.filters, rating];
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
    // console.log('reviews:', this.props.reviews);
    // console.log('sort:', this.props.sort);
    // console.log('this.props.productInfo:', this.props.productInfo);
    return (
      <div className='ratings-reviews' id='ratingsReviews'>
        <Rating
          ratings={this.props.reviewRatings}
          recommended={this.props.reviewRecommended}
          characteristics={this.props.reviewCharacteristics}
          filterClick={this.handleFilterClick}
          filters={this.state.filters}
        />

        <div className='right'>
          {this.props.reviews.length >= 1 && (
            <ReviewTilesContainer
              reviews={this.props.reviews}
              handleSelectImg={this.handleSelectImg}
              onChangeSort={this.props.changeSort}
              sort={this.props.sort}
              filters={this.state.filters}
            />
          )}
          <div className='review-tiles-container-btns'>
            {this.props.reviewsBuffer.length > 0 && (
              <div
                onClick={this.props.getReviewsByProduct}
                className='show-more-reviews-btn'
              >
                SHOW MORE REVIEWS
              </div>
            )}
            <div
              className='add-review-btn'
              onClick={this.handleAddReviewBtnClick}
            >
              ADD A REVIEW +
            </div>
          </div>
          {this.state.addReview &&
            this.props.reviewCharacteristics &&
            this.props.productInfo && (
              <AddReviewModal
                ref={this.modalRef}
                characteristics={this.props.reviewCharacteristics}
                onClick={this.handleModalClick}
                productId={this.props.productId}
                name={this.props.productInfo.name}
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
  productId: PropTypes.number.isRequired,
  sort: PropTypes.string.isRequired,
  changeSort: PropTypes.func.isRequired,
  productInfo: PropTypes.object.isRequired,
  reviewsBuffer: PropTypes.array.isRequired,
};
