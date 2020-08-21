import React, { useState, useEffect, Fragment } from "react";
import "../../../assets/scss/overview.scss";
import CurrentPhoto from "./CurrentPhoto.js";
import ExpandedPhoto from "./ExpandedPhoto.js";
import ProductInformation from "./ProductInformation.js";
import Description from "./Description.js";

const Overview = (props) => {
  //props.getStylesByProductId(props.productId);

  const changeView = (type) => {
    setView(type);
  };

  const [view, setView] = useState("main");
  const [stylesState, setStyles] = useState([]);

  //const [currentStyle, changeCurrentStyle] = useState({});

  //console.log("styles from props: ", props.styles.results);
  const currentStyle = props.styles.results[0];
  console.log("CURRENT STYLE", currentStyle);
  // const findDefault = (styles) => {
  //   for (var i = 0; i < styles.length; i++) {
  //     if (styles[i]["default?"] === 1) {
  //       changeCurrentStyle(stylesState[i]);
  //     }
  //   }
  // };

  useEffect(() => {
    setStyles((state) => props.getStylesByProductId(props.productId));
  }, [props.productId]);

  // useEffect(() => {
  //   findDefault(stylesState);
  // }, [props.productId]);

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
