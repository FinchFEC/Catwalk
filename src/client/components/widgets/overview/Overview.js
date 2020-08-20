import React, { useState, useEffect, Fragment } from "react";
import "../../../assets/scss/overview.scss";
import CurrentPhoto from "./CurrentPhoto.js";
import ExpandedPhoto from "./ExpandedPhoto.js";
import ProductInformation from "./ProductInformation.js";
import Description from "./Description.js";

const Overview = (props) => {
  props.getStylesByProductId(props.productId);

  const [view, setView] = useState("main");
  const [defaultStyleIndex, setDefaultStyle] = useState(0);

  const changeView = (type) => {
    setView(type);
  };

  const getDefaultStyle = (props) => {
    for (var i = 0; i < props.styles.results.length; i++) {
      if (props.styles.results[i]["default?"] === 1) {
        setDefaultStyle(i);
      }
    }
  };

  return (
    <div className="overview-component">
      {view === "main" ? (
        <Fragment>
          <CurrentPhoto changeView={changeView} />
          <ProductInformation
            avgRating={props.avgRating}
            currentInfo={props.currentInfo}
          />
        </Fragment>
      ) : (
        <ExpandedPhoto changeView={changeView} />
      )}
      <Description currentInfo={props.currentInfo} />
    </div>
  );
};

export default Overview;
