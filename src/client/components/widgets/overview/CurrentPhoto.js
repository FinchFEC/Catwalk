import React from "react";
import "../../../assets/scss/overview.scss";
import { FaArrowLeft, FaArrowRight, FaExpand } from "react-icons/fa";
import PhotoCarousel from "./PhotoCarousel.js";

const CurrentPhoto = ({ changeView, currentStyle }) => {
  return (
    <div className="current-photo-container">
      <div id="current-photo"></div>
      <PhotoCarousel />
      <span id="left-arrow">
        <FaArrowLeft />
      </span>
      <span id="right-arrow">
        <FaArrowRight />
      </span>
      <span id="expand">
        <FaExpand onClick={() => changeView("expanded")} />
      </span>
    </div>
  );
};

export default CurrentPhoto;
