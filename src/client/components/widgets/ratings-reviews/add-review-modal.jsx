import React from 'react';
import PropTypes from 'prop-types';
import DynamicStars from './dynamic-stars';
import AddReviewCharacteristicsInput from './add-review-characteristics-input';
import AddReviewImageContainer from './add-review-image-container';
import axios from 'axios';

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
      imgs: [],
      characteristics: {},
      ratingText: ['Poor', 'Fair', 'Average', 'Good', 'Great'],
    };
    this.handleStarClick = this.handleStarClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCharacteristicInputChange = this.handleCharacteristicInputChange.bind(
      this
    );
  }

  handleStarClick(rating) {
    this.setState({
      rating,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
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
          <h3 className='review-modal-header'>Write your review about </h3>
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
              </label>
            </div>
            <AddReviewImageContainer />
            <input type='submit' value='Submit' />
          </form>
        </div>
      </div>
    );
  }
}

export default React.forwardRef((props, ref) => (
  <AddReviewModal
    innerRef={ref}
    characteristics={props.characteristics}
    onClick={props.onClick}
  />
));

AddReviewModal.propTypes = {
  characteristics: PropTypes.object.isRequired,
  innerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
};
