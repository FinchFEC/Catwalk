import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReviewTileTextBody from './review-tile-text-body';
import ReviewTileImgContainer from './review-tile-img-container';
import StaticStars from './static-stars';
import ReviewTileSummary from './review-tile-summary';
import ReviewTileUsername from './review-tile-username';
import ReviewTileResponse from './review-tile-response';
import Helpful from './helpful';
import '../../../assets/icons';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    console.log('reviewId:', props.id);
    this.state = {
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
    };
  }

  render() {
    return (
      <div className='review-tile'>
        <div className='review-tile-header'>
          <StaticStars rating={this.props.rating} />
          <div className='review-tile-metadata'>
            <ReviewTileUsername username={this.props.username} verified />
            <span className='review-tile-date'>
              {this.state.months[this.props.date.getMonth()]}
              &nbsp;
              {this.props.date.getDate()}
              ,&nbsp;
              {this.props.date.getFullYear()}
            </span>
          </div>
        </div>
        <ReviewTileSummary reviewSummary={this.props.summary} />
        <ReviewTileTextBody text={this.props.body} />
        {this.props.imgs.length > 1 && (
          <ReviewTileImgContainer
            imgs={this.props.imgs}
            onClick={this.props.handleSelectImg}
          />
        )}
        {this.props.recommend === 1 && (
          <div className='review-recommend'>
            <FontAwesomeIcon icon={['fas', 'check']} />
            &nbsp;I recommend this product
          </div>
        )}
        {this.props.response && (
          <ReviewTileResponse response={this.props.response} />
        )}
        <Helpful helpful={this.props.helpful} reviewId={this.props.id} />
      </div>
    );
  }
}

export default ReviewTile;

ReviewTile.defaultProps = {
  response: '',
};

ReviewTile.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  summary: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  imgs: PropTypes.array.isRequired,
  recommend: PropTypes.number.isRequired,
  response: PropTypes.string,
  rating: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  handleSelectImg: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  helpful: PropTypes.number.isRequired,
};
