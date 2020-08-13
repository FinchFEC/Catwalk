import React from 'react';
import PropTypes from 'prop-types';

class AddReviewCharacteristicsInput extends React.Component {
  render() {
    return (
      <>
        {Object.entries(this.props.characteristics).map(
          (characteristicArray) => {
            return (
              <React.Fragment key={characteristicArray[0]}>
                {characteristicArray[0]}
                {[...new Array(5)].map((ele, i) => {
                  return (
                    <label htmlFor={`${characteristicArray[0]}-${i}`} key={i}>
                      <input
                        type='radio'
                        id={`${characteristicArray[0]}-${i}`}
                        name={characteristicArray[1]['id']}
                        value={i + 1}
                        onChange={this.props.onChange}
                      />
                      {i + 1}
                    </label>
                  );
                })}
                <br />
              </React.Fragment>
            );
          }
        )}
      </>
    );
  }
}

AddReviewCharacteristicsInput.propTypes = {
  characteristics: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddReviewCharacteristicsInput;
