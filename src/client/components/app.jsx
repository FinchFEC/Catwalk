import React from 'react';
import Overview from './widgets/overview/Overview.js';
// import ProductListContainer from '../redux/containers/productListContainer.js';
import RelatedProducts from './widgets/related-products/relatedMaster.jsx';
import RatingsReviewsContainer from '../redux/containers/RatingsReviewsContainer.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <div>
          <Overview />
          <RelatedProducts />
          <RatingsReviewsContainer />
        </div>
      </div>
    );
  }
}

export default App;
