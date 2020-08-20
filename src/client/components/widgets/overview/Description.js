import React from "react";
import "../../../assets/scss/overview.scss";
import { GrCheckmark } from "react-icons/gr";

const Description = ({ currentInfo }) => {
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
        <p id="features">
          <GrCheckmark /> Fabric: 100% Cotton
          <br />
          <GrCheckmark /> Cut: Skinny
        </p>
      </div>
    </div>
  );
};

export default Description;
