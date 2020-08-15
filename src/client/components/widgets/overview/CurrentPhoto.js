import React from "react";
import "../../../assets/scss/overview.scss";
import { FaArrowLeft, FaArrowRight, FaExpand } from "react-icons/fa";

const CurrentPhoto = () => {
  return (
    <div className="current-photo">
      <span id="left-arrow">
        <FaArrowLeft />
      </span>
      <span id="right-arrow">
        <FaArrowRight />
      </span>
      <span id="expand">
        <FaExpand />
      </span>
    </div>
  );
};

export default CurrentPhoto;
