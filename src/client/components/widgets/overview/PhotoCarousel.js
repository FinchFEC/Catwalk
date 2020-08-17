import React from "react";
import "../../../assets/scss/overview.scss";
import { IoIosArrowDown } from "react-icons/io";

const PhotoCarousel = () => {
  return (
    <div className="photo-carousel">
      <span id="photo-1" />
      <span id="photo-2" />
      <span id="photo-3" />
      <span id="photo-4" />
      <span id="photo-5" />
      <span id="arrow-down">
        <IoIosArrowDown />
      </span>
    </div>
  );
};

export default PhotoCarousel;
