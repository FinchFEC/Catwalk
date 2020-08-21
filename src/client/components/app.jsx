import React from "react";
import OverViewContainer from "../redux/containers/OverViewContainer.js";
// import ProductListContainer from '../redux/containers/productListContainer.js';
import "../assets/scss/styles.scss";
import RelatedMasterContainer from "../redux/containers/relatedContainers/relatedMasterContainer";
import RatingsReviewsContainer from "../redux/containers/RatingsReviewsContainer.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <div className="logo-placeholder">
            <img src="https://i.imgur.com/6q2NVa7.png" />
          </div>
          <p className="announcement">
            <em>SITE-WIDE ANNOUNCEMENT MESSAGE!</em> &mdash; SALE / DISCOUNT{" "}
            <strong>OFFER</strong>
            &mdash; <a href="">NEW PRODUCT HIGHLIGHT</a>{" "}
          </p>
        </header>
        <OverViewContainer />
        <RelatedMasterContainer />
        <section id="reviews">
          <RatingsReviewsContainer />
        </section>
      </div>
    );
  }
}

export default App;
