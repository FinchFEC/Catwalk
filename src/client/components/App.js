import React from 'react';
import ProductListContainer from '../redux/containers/productListContainer.js';
import RelatedProducts from './widgets/related-products/relatedMaster.jsx';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <h1>Hello {name}</h1>
        <div>
          <RelatedProducts/>
        </div>
      </div>
    );
  }
}

export default App;
