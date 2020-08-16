import React from "react";
import "../../../assets/scss/overview.scss";
import { GrFormCheckmark } from "react-icons/gr";

const StyleSelector = () => {
  return (
    <div className="style-selector">
      <div className="style-type">STYLE > Black</div>
      <div className="selected-style-container">
        <div className="style-icon">
          <div className="checkmark">
            <GrFormCheckmark />
          </div>
        </div>
        <div className="style-icon"></div>
        <div className="style-icon"></div>
        <div className="style-icon"></div>
        <div className="style-icon"></div>
        <div className="style-icon"></div>
        <div className="style-icon"></div>
        <div className="style-icon"></div>
      </div>
    </div>
  );
};

export default StyleSelector;
