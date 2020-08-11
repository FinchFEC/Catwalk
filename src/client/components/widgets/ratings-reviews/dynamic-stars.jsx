import React from 'react';
import Star from './star';
import PropTypes from 'prop-types';

class DynamicStars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
    };
    this.handleStarClick = this.handleStarClick.bind(this);
  }

  handleStarClick(index) {
    this.setState(
      {
        rating: index + 1,
      },
      () => {
        this.props.onClick(this.state.rating);
      }
    );
  }

  render() {
    let rating = this.state.rating * 100;
    return (
      <div className='stars-container'>
        {[...new Array(5)].map((star, index) => {
          if (rating > 100) {
            rating -= 100;
            return (
              <Star
                rating={100}
                key={index}
                index={index}
                onClick={this.handleStarClick}
              />
            );
          }
          const starRating = rating;
          rating = 0;
          return (
            <Star
              rating={starRating}
              key={index}
              index={index}
              onClick={this.handleStarClick}
            />
          );
        })}
      </div>
    );
  }
}

DynamicStars.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DynamicStars;
