import React, { useState } from "react";
import "../../../assets/scss/overview.scss";
import { GrFormCheckmark } from "react-icons/gr";

const StyleSelector = ({ styles, currentStyle }) => {
  //const [style, setStyle] = useState("");

  return (
    <div className="style-selector">
      <div className="style-type">
        <div className="row">STYLE ></div>
      </div>

      <div className="selected-style-container">
        <div className="style-icon">
          <div className="checkmark">
            <GrFormCheckmark />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleSelector;
