import React from 'react';
import PropTypes from 'prop-types';
import RatingBreakdownBar from './rating-breakdown-bar';

class RatingCharacteristics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Size: ['A size too small', 'A size too wide'],
      Width: ['Too narrow', 'Too wide'],
      Comfort: ['Uncomfortable', 'Perfect'],
      Quality: ['Poor', 'Perfect'],
      Length: ['Runs short', 'Runs long'],
      Fit: ['Runs tight', 'Runs long'],
    };
  }

  render() {
    return (
      <div className='rating-characteristics'>
        {Object.entries(this.props.characteristics).map((ele, i) => {
          return (
            <div style={{ marginBottom: '5px' }}>
              <div className='ratings-characteristics-header' key={i}>
                <div>{ele[0]}</div>
              </div>
              <RatingBreakdownBar
                rating=''
                percent={parseInt(((ele[1].value / 5) * 100).toFixed(2), 10)}
              />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '10px',
                }}
              >
                <span style={{ marginLeft: '8px' }}>
                  {this.state[ele[0]][0]}
                </span>
                <span>{this.state[ele[0]][1]}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

RatingCharacteristics.propTypes = {
  characteristics: PropTypes.object.isRequired,
};

export default RatingCharacteristics;
