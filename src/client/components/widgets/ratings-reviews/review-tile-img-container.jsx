import React from 'react';
import PropTypes from 'prop-types';

const ReviewTileImgContainer = ({ imgs }) => {
  return (
    <div
      className='review-tile-img-container'
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto auto auto auto auto',
        gridGap: '10px',
      }}
    >
      {imgs.map((img, i) => {
        return (
          <div
            className='review-tile-img'
            key={i}
            style={{
              width: '75px',
              height: '50px',
              border: '2px solid black',
            }}
          >
            <img
              src={'https://kbob.github.io/images/sample-5.jpg'}
              alt={`${i}`}
              style={{ width: '50px' }}
            />
          </div>
        );
      })}
    </div>
  );
};

ReviewTileImgContainer.propTypes = {
  imgs: PropTypes.array.isRequired,
};

export default ReviewTileImgContainer;
