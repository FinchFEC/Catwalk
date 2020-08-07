import React from "react";
import "../../../assets/scss/overview.scss";

const Overview = () => {
  return (
    <div className="overview-component">
      <header>
        <p className="announcement">
          SITE-WIDE ANNOUNCEMENT MESSAGE! &mdash; SALE / DISCOUNT OFFER &mdash;{" "}
          <a href="">NEW PRODUCT HIGHLIGHT</a>{" "}
        </p>
      </header>
    </div>
  );
};

export default Overview;
