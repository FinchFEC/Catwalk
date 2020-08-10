import React from 'react';
import PropTypes from 'prop-types';

class AddReviewCharacteristicsInput extends React.Component {
  render() {
    return (
      <>
        {Object.keys(this.props.characteristics).map((characteristic) => {
          return (
            <React.Fragment key={characteristic}>
              {characteristic}
              {[...new Array(5)].map((ele, i) => {
                return (
                  <label htmlFor={`${characteristic}`} key={i}>
                    <input
                      type='radio'
                      id={`${characteristic.toLowerCase()}-${i + 1}`}
                      name={`${characteristic.toLowerCase()}`}
                    />
                    {i + 1}
                  </label>
                );
              })}
              <br />
            </React.Fragment>
          );
        })}
      </>
    );
  }
}

AddReviewCharacteristicsInput.propTypes = {
  characteristics: PropTypes.object.isRequired,
};

export default AddReviewCharacteristicsInput;
