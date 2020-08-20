import React from "react";
import "../../../assets/scss/overview.scss";
import { GrCheckmark } from "react-icons/gr";

const Description = ({ currentInfo }) => {
  console.log(currentInfo.features);
  return (
    <div className="description">
      <div className="slogan-box">
        <div>
          <p id="slogan">
            <strong>{currentInfo.slogan}</strong>
          </p>
          <p id="description">{currentInfo.description}</p>
        </div>
      </div>
      <div className="features-box">
        <p id="features"></p>
      </div>
    </div>
  );
};

export default Description;
