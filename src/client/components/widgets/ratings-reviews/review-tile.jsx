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
        <StaticStars rating={1.5} />
        <ReviewTileUsername username='' verified />
        <ReviewTileSummary reviewSummary={this.props.summary} />
        <div className='review-tile-date'>
          {this.props.date.month}
          {this.props.date.date}
          ,&nbsp;
          {this.props.date.year}
        </div>
        <ReviewTileTextBody text={this.props.body} />
        {this.props.imgs && <ReviewTileImgContainer imgs={this.props.imgs} />}
        {this.props.recommend && (
          <div>
            <FontAwesomeIcon icon={['fas', 'check']} />
            &nbsp;I recommend this product
          </div>
        )}
        {this.props.response && <ReviewTileResponse />}
      </div>
    );
  }
}

export default ReviewTile;

ReviewTile.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  summary: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  imgs: PropTypes.array.isRequired,
  recommend: PropTypes.bool.isRequired,
  response: PropTypes.string.isRequired,
};
