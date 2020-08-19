import React, { useState, useEffect, Fragment } from "react";
import "../../../assets/scss/overview.scss";
import CurrentPhoto from "./CurrentPhoto.js";
import ExpandedPhoto from "./ExpandedPhoto.js";
import ProductInformation from "./ProductInformation.js";
import Description from "./Description.js";

const Overview = () => {
  const changeView = (type) => {
    setView(type);
  };

  const [view, setView] = useState("main");

  return (
    <div className="overview-component">
      {view === "main" ? (
        <Fragment>
          <CurrentPhoto changeView={changeView} />
          <ProductInformation />
        </Fragment>
      ) : (
        <ExpandedPhoto changeView={changeView} />
      )}
      <Description />
    </div>
  );
};

export default Overview;
