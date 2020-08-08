import React from 'react';
import ProductListContainer from '../redux/containers/productListContainer';
import RR from './widgets/ratings-reviews/ratings-reviews';
import RelatedProducts from './widgets/related-products/relatedMaster';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <div>
          <RelatedProducts />
        </div>
        <RR />
      </div>
    );
  }
}

export default App;
