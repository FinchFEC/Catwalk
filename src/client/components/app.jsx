import React from "react";
import Overview from "./widgets/overview/Overview.js";
// import ProductListContainer from '../redux/containers/productListContainer.js';
import RelatedProducts from "./widgets/related-products/relatedMaster.jsx";
import "../assets/scss/styles.scss";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <header>
          <p className="announcement">
            <em>SITE-WIDE ANNOUNCEMENT MESSAGE!</em> &mdash; SALE / DISCOUNT{" "}
            <strong>OFFER</strong>
            &mdash; <a href="">NEW PRODUCT HIGHLIGHT</a>{" "}
          </p>
        </header>
        <div>
          <Overview />
          <RelatedProducts />
        </div>
      </div>
    );
  }
}

export default App;
