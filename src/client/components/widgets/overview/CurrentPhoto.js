import React from "react";
import "../../../assets/scss/overview.scss";
import { FaArrowLeft, FaArrowRight, FaExpand } from "react-icons/fa";
import PhotoCarousel from "./PhotoCarousel.js";

const CurrentPhoto = () => {
  return (
    <div className="current-photo-container">
      <div id="current-photo">
        <img src="https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" />
      </div>
      <PhotoCarousel />
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
