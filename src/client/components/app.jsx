import React from 'react';
import Overview from './widgets/overview/Overview.js';
// import ProductListContainer from '../redux/containers/productListContainer.js';
import RelatedProductsContainer from '../redux/containers/relatedContainer.js';
import RatingsReviewsContainer from '../redux/containers/RatingsReviewsContainer.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <Overview />
        <RelatedProductsContainer />
        <RatingsReviewsContainer />
      </div>
    );
  }
}

export default App;
