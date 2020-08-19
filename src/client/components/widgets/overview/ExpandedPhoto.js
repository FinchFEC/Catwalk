import React from "react";
import "../../../assets/scss/overview.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import PhotoCarousel from "./PhotoCarousel.js";

const ExpandedPhoto = ({ view }) => {
  return (
    <div className="expanded-photo-container">
      <div id="current-photo">
        <img src="https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"></img>
      </div>
      <PhotoCarousel />
      <span id="left-arrow">
        <FaArrowLeft />
      </span>
      <span id="right-arrow">
        <FaArrowRight />
      </span>
      <span id="fold">
        <GrFormClose onClick={() => state.view === "main"} />
      </span>
    </div>
  );
};

export default ExpandedPhoto;
