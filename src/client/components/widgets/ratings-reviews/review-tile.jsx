import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReviewTileTextBody from './review-tile-text-body';
import ReviewTileImgContainer from './review-tile-img-container';
import StaticStars from './static-stars';
import ReviewTileSummary from './review-tile-summary';
import ReviewTileUsername from './review-tile-username';
import ReviewTileResponse from './review-tile-response';
import '../../../assets/icons';

class ReviewTile extends React.Component {
  render() {
    return (
      <div className='review-tile'>
        <div className='review-tile-header'>
          <StaticStars rating={this.props.rating} />
          <ReviewTileUsername username={this.props.username} verified />
          <div className='review-tile-date'>
            {this.props.date.getMonth()}
            &nbsp;
            {this.props.date.getDate()}
            ,&nbsp;
            {this.props.date.getFullYear()}
          </div>
        </div>
        <ReviewTileSummary reviewSummary={this.props.summary} />
        <ReviewTileTextBody text={this.props.body} />
        {this.props.imgs.length > 1 && (
          <ReviewTileImgContainer imgs={this.props.imgs} />
        )}
        {this.props.recommend && (
          <div>
            <FontAwesomeIcon icon={['fas', 'check']} />
            &nbsp;I recommend this product
          </div>
        )}
        {this.props.response && (
          <ReviewTileResponse response={this.props.response} />
        )}
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
};
