import React from 'react';
import ReviewTileTextBody from './review-tile-text-body';
import ReviewTileImgContainer from './review-tile-img-container';
import Stars from './stars';

class ReviewTile extends React.Component {
  render() {
    return (
      <div
        className='review-tile'
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '50%',
          border: '2px solid black',
          fontFamily: 'arial',
        }}
      >
        <Stars rating={3.25} />
        <ReviewTileImgContainer imgs={['#', '#', '#', '#', '#']} />
        <ReviewTileTextBody text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a mollis ex, eu pharetra leo. Mauris nec nunc eget ligula volutpat imperdiet eget nec orci. Nam tristique accumsan eros id cursus. Aliquam commodo hendrerit urna. Morbi eget laoreet urna. Fusce facilisis neque felis, eget iaculis lectus rutrum et. Quisque sodales nulla id laoreet rhoncus. Donec id lorem quis ante vulputate cursus a nec lectus. Duis facilisis orci nisl, in congue mauris commodo eu. Proin diam est, facilisis sit amet ligula sed, porttitor semper orci. Vestibulum in vestibulum urna.' />
      </div>
    );
  }
}

export default ReviewTile;
