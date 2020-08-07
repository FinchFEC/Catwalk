import React from "react";
import ProductListContainer from "../redux/containers/productListContainer.js";
import Overview from "./widgets/overview/Overview.js";
import RelatedProducts from "./widgets/related-products/relatedMaster.jsx";
import RR from "./widgets/ratings-reviews/rr.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <div>
          <Overview />
        </div>
        <div>
          <RelatedProducts />
        </div>
        <RR />
      </div>
    );
  }
}

export default App;
