import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Helpful extends React.Component {
  constructor(props) {
    super(props);
  }

  clickYes() {
    axios
      .put(`/reviews/helpful/:${this.props.reviewId}`)
      .catch((err) => console.log(err))
      .then((data) => {
        console.log('marked helpful');
        console.log('data from markHelpful:', data);
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
