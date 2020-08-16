import React from 'react';
import PropTypes from 'prop-types';

class Helpful extends React.Component {
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
        Was this review helpful?
        <div className='helpful-yes'>
          <span className='helpful-btn' onClick={this.clickYes}>
            Yes
          </span>
          &nbsp;(
          {this.props.helpful})
        </div>
      </div>
    );
  }
}

Helpful.propTypes = {
  helpful: PropTypes.string.isRequired,
  reviewId: PropTypes.number.isRequired,
};

export default Helpful;
