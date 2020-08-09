import React from 'react';
import PropTypes from 'prop-types';
import Star from './star';

const StaticStars = (props) => {
  let rating = props.rating * 100;
  return (
    <div className='stars-container'>
      {[...new Array(5)].map((star, index) => {
        if (rating > 100) {
          rating -= 100;
          return <Star rating={100} key={index} index={index} />;
        }
        const starRating = rating;
        rating = 0;
        return <Star rating={starRating} key={index} index={index} />;
      })}
    </div>
  );
};

export default StaticStars;

StaticStars.propTypes = {
  rating: PropTypes.number.isRequired,
};
