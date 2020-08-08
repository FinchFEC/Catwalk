import React from 'react';
import PropTypes from 'prop-types';

class Helpful extends React.Component {
  render() {
    return (
      <div className='helpful'>
        Was this review helpful?
        <div className='helpful-yes'>
          Yes&nbsp;(
          {this.props.yes})
        </div>
      </div>
    );
  }
}

Helpful.propTypes = {
  yes: PropTypes.string.isRequired,
};

export default Helpful;
