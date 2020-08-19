import React from "react";
import Overview from "./widgets/overview/Overview.js";
// import ProductListContainer from '../redux/containers/productListContainer.js';
import "../assets/scss/styles.scss";
import RelatedMasterContainer from "../redux/containers/relatedContainers/relatedMasterContainer";
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
        <RelatedMasterContainer />
        <section id="reviews">
          <RatingsReviewsContainer />
        </section>
      </div>
    );
  }
}

export default App;
