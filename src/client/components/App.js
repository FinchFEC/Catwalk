import React from 'react';
import ProductListContainer from '../redux/containers/productListContainer.js';
import RR from './widgets/ratings-reviews/rr.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <div>
          <ProductListContainer />
        </div>
        <RR />
      </div>
    );
  }
}

export default App;
