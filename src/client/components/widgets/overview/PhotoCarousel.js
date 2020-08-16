import React from "react";
import "../../../assets/scss/overview.scss";
import { IoIosArrowDown } from "react-icons/io";

const PhotoCarousel = () => {
  return (
    <div className="photo-carousel">
      <span id="photo-1"></span>
      <span id="photo-2"></span>
      <span id="photo-3"></span>
      <span id="photo-4"></span>
      <span id="photo-5"></span>
      <span id="arrow-down">
        <IoIosArrowDown />
      </span>
    </div>
  );
};

export default PhotoCarousel;
