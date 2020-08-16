import React from "react";
import Overview from "./widgets/overview/Overview.js";
// import ProductListContainer from '../redux/containers/productListContainer.js';
import "../assets/scss/styles.scss";
import RelatedProductsContainer from "../redux/containers/relatedContainer.js";
import RatingsReviewsContainer from "../redux/containers/RatingsReviewsContainer.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <p className="announcement">
            <em>SITE-WIDE ANNOUNCEMENT MESSAGE!</em> &mdash; SALE / DISCOUNT{" "}
            <strong>OFFER</strong>
            &mdash; <a href="">NEW PRODUCT HIGHLIGHT</a>{" "}
          </p>
        </header>
        <Overview />
        <RelatedProductsContainer />
        <RatingsReviewsContainer />
      </div>
    );
  }
}

export default App;
