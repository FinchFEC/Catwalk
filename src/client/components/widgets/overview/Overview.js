import React, { useState, useEffect, Fragment } from "react";
import "../../../assets/scss/overview.scss";
import CurrentPhoto from "./CurrentPhoto.js";
import ExpandedPhoto from "./ExpandedPhoto.js";
import ProductInformation from "./ProductInformation.js";
import Description from "./Description.js";

const Overview = (props) => {
  //const styles = props.styles;
  const changeView = (type) => {
    setView(type);
  };

  const [view, setView] = useState("main");
  const [stylesState, setStyles] = useState(props.styles);
  const [currentStyle, changeCurrentStyle] = useState(props.styles[0]);

  const findDefault = (styles) => {
    for (var i = 0; i < styles.length; i++) {
      if (styles[i]["default?"] === 1) {
        changeCurrentStyle(props.styles[i]);
      }
    }
  };

  // useEffect(() => {
  //   setStyles(styles);
  // });

  useEffect(() => {
    findDefault(stylesState);
  });

  return (
    <div className="overview-component">
      {view === "main" ? (
        <Fragment>
          <CurrentPhoto changeView={changeView} currentStyle={currentStyle} />
          <ProductInformation
            avgRating={props.avgRating}
            currentInfo={props.currentInfo}
            styles={stylesState}
            currentStyle={currentStyle}
          />
        </Fragment>
      ) : (
        <ExpandedPhoto changeView={changeView} currentStyle={currentStyle} />
      )}
      <Description
        currentInfo={props.currentInfo}
        features={props.currentInfo.features}
      />
    </div>
  );
};

export default Overview;
