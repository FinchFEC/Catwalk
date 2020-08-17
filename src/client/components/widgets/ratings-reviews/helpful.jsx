import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Helpful extends React.Component {
  constructor(props) {
    super(props);
    this.clickYes = this.clickYes.bind(this);
  }

  clickYes() {
    axios
      .put(`/reviews/helpful/:${this.props.reviewId}`)
      .then((data) => {
        console.log('marked helpful');
        console.log('data from markHelpful:', data);
      })
      .catch((err) => {
        console.log('error send helpful put call');
        console.log(err);
      });
  }

  render() {
    return (
      <div className='helpful'>
        Was this review helpful?&nbsp;
        <span className='helpful-btn' onClick={this.clickYes}>
          Yes
        </span>
        &nbsp;(
        {this.props.helpful})
      </div>
    );
  }
}

Helpful.propTypes = {
  helpful: PropTypes.number.isRequired,
  reviewId: PropTypes.number.isRequired,
};

export default Helpful;
