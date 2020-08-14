import React from 'react';
import Overview from './widgets/overview/Overview.js';
// import ProductListContainer from '../redux/containers/productListContainer.js';
import RelatedProducts from './widgets/related-products/relatedMaster.jsx';
import RatingsReviewsContainer from '../redux/containers/ratingsReviewsContainer.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <Overview />
        <RelatedProducts />
        <RatingsReviewsContainer />
      </div>
    );
  }
}

export default App;
