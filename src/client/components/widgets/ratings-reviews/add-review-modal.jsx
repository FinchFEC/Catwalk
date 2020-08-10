import React from 'react';
import PropTypes from 'prop-types';
import DynamicStars from './dynamic-stars';
import AddReviewCharacteristicsInput from './add-review-characteristics-input';
import AddReviewImageContainer from './add-review-image-container';

class addReviewModal extends React.Component {
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
  }

  render() {
    return (
      <div className='add-review-modal'>
        <DynamicStars />
        <form action='' method='post'>
          Do you recommend this product?
          <label htmlFor='recommendYes'>
            Yes
            <input id='recommendYes' name='recommend' type='radio' />
          </label>
          <label htmlFor='recommendNo'>
            No
            <input id='recommendNo' name='recommend' type='radio' />
          </label>
          <br />
          <AddReviewCharacteristicsInput
            characteristics={this.props.characteristics}
          />
          Summary
          <label htmlFor='summary'>
            <input id='summary' name='summary' value={this.state.summary} />
          </label>
          Body
          <label htmlFor='body'>
            <input id='body' name='body' value={this.state.body} />
          </label>
          <label htmlFor='usernameInput'>
            Username
            <input
              name='username'
              id='usernameInput'
              value={this.state.username}
            />
          </label>
          <label htmlFor='emailInput'>
            Email
            <input name='email' id='emailInput' value={this.state.email} />
          </label>
          <AddReviewImageContainer />
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default addReviewModal;

addReviewModal.propTypes = {
  characteristics: PropTypes.object.isRequired,
};
