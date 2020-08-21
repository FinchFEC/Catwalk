import React, { useState } from "react";
import "../../../assets/scss/overview.scss";
import { GrFormCheckmark } from "react-icons/gr";

const StyleSelector = ({ styles, currentStyle }) => {
  //const [style, setStyle] = useState("");
  console.log(
    "styles in styleselector: ",
    currentStyle.photos[0].thumbnail_url
  );
  return (
    <div className="style-selector">
      <div className="style-type">
        <div className="row">STYLE >{currentStyle.name}</div>
      </div>

      <div className="selected-style-container">
        <div
          className="style-icon"
          style={{ backgroundImage: currentStyle.photos[0].thumbnail_url }}
        >
          <div className="checkmark">
            <GrFormCheckmark />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleSelector;
