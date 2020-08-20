import React, { useState, useEffect, Fragment } from "react";
import "../../../assets/scss/overview.scss";
import CurrentPhoto from "./CurrentPhoto.js";
import ExpandedPhoto from "./ExpandedPhoto.js";
import ProductInformation from "./ProductInformation.js";
import Description from "./Description.js";

const Overview = (props) => {
  const styles = props.styles;
  //props.getStylesByProductId(props.productId);
  //console.log(props.currentInfo.features);
  const changeView = (type) => {
    setView(type);
  };

  const [view, setView] = useState("main");
  const [currentStyle, changeCurrentStyle] = useState(props.styles[3]);

  const findDefault = (styles) => {
    for (var i = 0; i < styles.length; i++) {
      if (styles[i]["default?"] === 1) {
        changeCurrentStyle(props.styles[i]);
      }
    }
  };

  useEffect(() => {
    findDefault(styles);
  });

  return (
    <div className="overview-component">
      {view === "main" ? (
        <Fragment>
          <CurrentPhoto changeView={changeView} />
          <ProductInformation
            avgRating={props.avgRating}
            currentInfo={props.currentInfo}
            styles={props.styles}
            currentStyle={currentStyle}
          />
        </Fragment>
      ) : (
        <ExpandedPhoto changeView={changeView} />
      )}
      <Description
        currentInfo={props.currentInfo}
        features={props.currentInfo.features}
      />
    </div>
  );
};

export default Overview;
