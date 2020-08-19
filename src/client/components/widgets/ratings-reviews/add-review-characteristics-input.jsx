import React from 'react';
import PropTypes from 'prop-types';

class AddReviewCharacteristicsInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Size: null,
      Width: null,
      Comfort: null,
      Quality: null,
      Length: null,
      Fit: null,
      SizeText: [
        'A size too small',
        '1/2 a size too small',
        'Perfect',
        '1/2 a size too big',
        'A size too wide',
      ],
      WidthText: [
        'Too narrow',
        'Slightly narrow',
        'Perfect',
        'Slightly wide',
        'Too wide',
      ],
      ComfortText: [
        'Uncomfortable',
        'Slightly uncomfortable',
        'Ok',
        'Comfortable',
        'Perfect',
      ],
      QualityText: [
        'Poor',
        'Below average',
        'What I expected',
        'Pretty great',
        'Perfect',
      ],
      LengthText: [
        'Runs short',
        'Runs slightly short',
        'Perfect',
        'Runs slightly long',
        'Runs long',
      ],
      FitText: [
        'Runs tight',
        'Runs slightly tight',
        'Perfect',
        'Runs slightly long',
        'Runs long',
      ],
    };
  }

  render() {
    return (
      <>
        {Object.entries(this.props.characteristics).map(
          (characteristicArray) => {
            return (
              <div className='modal-input' key={characteristicArray[0]}>
                <div>{characteristicArray[0]}*&nbsp;</div>
                <div className='modal-input-container'>
                  {[...new Array(5)].map((ele, i) => {
                    return (
                      <div className='radio-group' key={i}>
                        <input
                          type='radio'
                          id={`${characteristicArray[0]}-${i}`}
                          name={characteristicArray[1].id}
                          value={i + 1}
                          onChange={(e) => {
                            this.setState({ [characteristicArray[0]]: i + 1 });
                            this.props.onChange(e);
                          }}
                          required
                        />
                        <label htmlFor={`${characteristicArray[0]}-${i}`}>
                          {this.state[`${characteristicArray[0]}Text`][i]}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
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
