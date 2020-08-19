import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Helpful extends React.Component {
  constructor(props) {
    super(props);
    this.clickYes = this.clickYes.bind(this);
    this.clickReport = this.clickReport.bind(this);
  }

  clickYes() {
    if (localStorage.getItem(this.props.reviewId)) {
      return;
    }
    localStorage.setItem(this.props.reviewId, 1);
    axios
      .put(`http://18.224.37.110/reviews/helpful/:${this.props.reviewId}`)
      .then((data) => {
        console.log('marked helpful');
        console.log('data from clickYes:', data);
      })
      .catch((err) => {
        console.log('error send helpful put call');
        console.log(err);
      });
  }

  clickReport() {
    axios
      .put(`http://18.224.37.110/reviews/${this.props.reviewId}/report`)
      .then((data) => {
        console.log('clicked report');
        console.log('data from clickReport:', data);
      })
      .catch((err) => {
        console.log('error send report put call');
        console.log(err);
      });
  }

  render() {
    return (
      <div className='helpful'>
        Was this review helpful?&nbsp;
        <span className='helpful-btn' onClick={this.clickYes}>
          <u>Yes</u>&nbsp;({this.props.helpful})
        </span>
        <span className='review-report' onClick={this.clickReport}>
          Report
        </span>
      </div>
    );
  }
}

Helpful.propTypes = {
  helpful: PropTypes.number.isRequired,
  reviewId: PropTypes.number.isRequired,
};

export default Helpful;
