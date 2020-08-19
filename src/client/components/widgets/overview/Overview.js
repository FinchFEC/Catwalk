import React, { useState, useEffect } from "react";
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
      {view === "expanded" ? (
        <ExpandedPhoto />
      ) : (
        <CurrentPhoto changeView={changeView} />
      )}
      <ProductInformation />
      <Description />
    </div>
  );
};

export default Overview;
