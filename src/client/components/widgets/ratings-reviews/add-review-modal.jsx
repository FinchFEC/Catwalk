import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import DynamicStars from './dynamic-stars';
import AddReviewCharacteristicsInput from './add-review-characteristics-input';
import AddReviewImageContainer from './add-review-image-container';

class AddReviewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: null,
      recommend: null,
      summary: '',
      body: '',
      email: '',
      username: '',
      images: [],
      characteristics: {},
      ratingText: ['Poor', 'Fair', 'Average', 'Good', 'Great'],
      error: false,
      success: false,
    };
    console.log('sort:', props.sort);
    console.log('typeof sort:', typeof props.sort);
    this.handleStarClick = this.handleStarClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCharacteristicInputChange = this.handleCharacteristicInputChange.bind(
      this
    );
    this.handleAddImages = this.handleAddImages.bind(this);
  }

  handleStarClick(rating) {
    this.setState({
      rating,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios
      .post('http://18.224.37.110/reviews', {
        product_id: this.props.productId,
        rating: this.state.rating,
        summary: this.state.summary,
        body: this.state.body,
        recommend: this.state.recommend,
        name: this.state.username,
        email: this.state.email,
        photos: this.state.images,
        // photos: ['https://images.unsplash.com/photo-1560769629-975ec94e6a86'],
        characteristics: this.state.characteristics,
      })
      .then((data) => {
        console.log('successfully posted new review');
        console.log(data);
        this.props.changeSort(this.props.sort);
        this.setState({
          success: true,
          error: false,
        });
      })
      .catch((err) => {
        console.log('error posting new review');
        console.log(err);
        this.setState({
          error: true,
          success: false,
        });
      });
  }

  handleAddImages(images) {
    this.setState({
      images,
    });
  }

  handleCharacteristicInputChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState((state) => {
      return {
        characteristics: Object.assign(state.characteristics, {
          [name]: parseInt(value, 10),
        }),
      };
    });
  }

  handleInputChange(e) {
    if (e.target.name === 'recommend') {
      if (parseInt(e.target.value, 10) === 1) {
        this.setState({
          recommend: true,
        });
      } else {
        this.setState({
          recommend: false,
        });
      }
    } else if (e.target.name === 'summary') {
      this.setState({
        summary: e.target.value,
      });
    } else if (e.target.name === 'body') {
      this.setState({
        body: e.target.value,
      });
    } else if (e.target.name === 'username') {
      this.setState({
        username: e.target.value,
      });
    } else if (e.target.name === 'email') {
      this.setState({
        email: e.target.value,
      });
    }
  }

  render() {
    return (
      <div
        className='add-review-modal'
        ref={this.props.innerRef}
        onClick={this.props.onClick}
      >
        <div className='review-modal-content'>
          <h3 className='review-modal-header'>
            Write your review about {this.props.name}
          </h3>
          Rating* <DynamicStars onClick={this.handleStarClick} />
          {this.state.rating && this.state.ratingText[this.state.rating - 1]}
          <form action='' method='post' onSubmit={this.handleSubmit}>
            <div className='modal-input'>
              Do you recommend this product?*&nbsp;
              <label htmlFor='recommendYes'>
                Yes
                <input
                  id='recommendYes'
                  name='recommend'
                  type='radio'
                  value={1}
                  onChange={this.handleInputChange}
                  required
                />
              </label>
              <label htmlFor='recommendNo'>
                No
                <input
                  id='recommendNo'
                  name='recommend'
                  type='radio'
                  value={0}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>
            <AddReviewCharacteristicsInput
              characteristics={this.props.characteristics}
              onChange={this.handleCharacteristicInputChange}
            />
            <div className='modal-input'>
              <div>Summary</div>
              <label htmlFor='summary'>
                <input
                  id='summary'
                  name='summary'
                  value={this.state.summary}
                  onChange={this.handleInputChange}
                  maxLength='60'
                  className='add-review-modal-text-input'
                  placeholder='Summary'
                />
              </label>
            </div>
            <div className='modal-input'>
              <div>Body*</div>
              <label htmlFor='body'>
                <input
                  id='body'
                  name='body'
                  value={this.state.body}
                  onChange={this.handleInputChange}
                  minLength='50'
                  className='add-review-modal-text-input'
                  required
                  placeholder='Review Body'
                />
              </label>
              <div>
                Minimum characters left:{' '}
                {this.state.body.length < 50 ? 50 - this.state.body.length : 0}
              </div>
            </div>
            <div className='modal-input'>
              <label htmlFor='usernameInput'>
                <div>Username*</div>
                <input
                  name='username'
                  id='usernameInput'
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  className='add-review-modal-text-input'
                  required
                  placeholder='Username'
                />
              </label>
            </div>
            <div className='modal-input'>
              <label htmlFor='emailInput'>
                <div>Email*</div>
                <input
                  name='email'
                  type='email'
                  id='emailInput'
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  maxLength='60'
                  className='add-review-modal-text-input'
                  required
                  placeholder='Email'
                />
                <div>
                  <small>
                    For authentication reasons, you will not be emailed
                  </small>
                </div>
              </label>
            </div>
            <AddReviewImageContainer onChange={this.handleAddImages} />
            <input type='submit' value='Submit' />
            <div className='close-review-modal' onClick={this.props.onClose}>
              Cancel
            </div>
          </form>
        </div>
        {this.state.success && (
          <div className='success'>Successfully Posted</div>
        )}
        {this.state.error && <div className='error'>Error Posting</div>}
      </div>
    );
  }
}

export default React.forwardRef((props, ref) => (
  <AddReviewModal
    innerRef={ref}
    characteristics={props.characteristics}
    onClick={props.onClick}
    productId={props.productId}
    name={props.name}
    changeSort={props.changeSort}
    sort={props.sort}
    onClose={props.onClose}
  />
));

AddReviewModal.propTypes = {
  productId: PropTypes.number.isRequired,
  characteristics: PropTypes.object.isRequired,
  innerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  changeSort: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
