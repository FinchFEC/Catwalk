import React from "react";
import "../../../assets/scss/overview.scss";
import { GrCheckmark } from "react-icons/gr";

const Description = () => {
  return (
    <div className="description">
      <div className="slogan-box">
        <div>
          <p id="slogan">
            <strong>Make yourself a morning person</strong>
          </p>
          <p id="description">
            Whether you're a morning person or not. Whether you're gym bound or
            not. Everyone looks good in joggers.
          </p>
        </div>
      </div>
      <div className="features-box">
        <p id="features">
          <GrCheckmark /> Fabric: 100% Cotton
          <br></br>
          <GrCheckmark /> Cut: Skinny
        </p>
      </div>
    </div>
  );
};

export default Description;
