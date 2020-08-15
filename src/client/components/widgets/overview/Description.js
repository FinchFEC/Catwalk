import React from "react";
import "../../../assets/scss/overview.scss";
import { GrCheckmark } from "react-icons/gr";

const Description = () => {
  return (
    <div className="description">
      <div className="slogan">
        <div>
          <p id="slogan">
            <strong>"slogan" "Blend in to your crowd"</strong>
          </p>
          <p id="description">
            "description": "The So Fatigues will wake you up and fit you in.
            This high energy camo will have you blending in to even the wildest
            surroundings."
          </p>
        </div>
      </div>
      <div className="features">
        <p id="features">
          <GrCheckmark /> "features" feature-value
        </p>
      </div>
    </div>
  );
};

export default Description;
