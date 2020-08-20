import React, { useState, useEffect, Fragment } from "react";
import "../../../assets/scss/overview.scss";
import CurrentPhoto from "./CurrentPhoto.js";
import ExpandedPhoto from "./ExpandedPhoto.js";
import ProductInformation from "./ProductInformation.js";
import Description from "./Description.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Overview = (props) => {
  props.getStylesByProductId(props.productId);

  const [view, setView] = useState("main");

  const changeView = (type) => {
    setView(type);
  };

  return (
    <div className="overview-component">
      {view === "main" ? (
        <Fragment>
          <CurrentPhoto changeView={changeView} />
          <ProductInformation props={props} />
        </Fragment>
      ) : (
        <ExpandedPhoto changeView={changeView} />
      )}
      <Description />
    </div>
  );
};

export default Overview;
