import React from 'react';
import PropTypes from 'prop-types';
import Star from './star.jsx';

class Stars extends React.Component {
  render() {
    let rating = this.props.rating * 100;
    return (
      <div className='stars-container'>
        {[...new Array(5)].map((star, index) => {
          if (rating > 100) {
            rating -= 100;
            return <Star rating={100} key={index} />;
          } else {
            let starRating = rating;
            rating = 0;
            return <Star rating={starRating} key={index} />;
          }
        })}
      </div>
    );
  }
}

export default Stars;

Star.propTypes = {
  rating: PropTypes.number,
};
