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
      rating: 0,
      recommend: null,
      summary: '',
      body: '',
      email: '',
      imgs: [],
      characteristics: {},
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
          Rating <DynamicStars onClick={this.handleStarClick} />
          <form action='' method='post' onSubmit={this.handleSubmit}>
            <div className='modal-input'>
              Do you recommend this product?
              <label htmlFor='recommendYes'>
                Yes
                <input
                  id='recommendYes'
                  name='recommend'
                  type='radio'
                  value={1}
                  onChange={this.handleInputChange}
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
            Summary
            <label htmlFor='summary'>
              <input
                id='summary'
                name='summary'
                value={this.state.summary}
                onChange={this.handleInputChange}
              />
            </label>
            <div className='modal-input'>
              Body
              <label htmlFor='body'>
                <input
                  id='body'
                  name='body'
                  value={this.state.body}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>
            <div className='modal-input'>
              <label htmlFor='usernameInput'>
                Username
                <input
                  name='username'
                  id='usernameInput'
                  value={this.state.username}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>
            <div className='modal-input'>
              <label htmlFor='emailInput'>
                Email
                <input
                  name='email'
                  type='email'
                  id='emailInput'
                  value={this.state.email}
                  onChange={this.handleInputChange}
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
