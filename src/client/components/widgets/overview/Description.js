import React from "react";
import "../../../assets/scss/overview.scss";
import { GrCheckmark } from "react-icons/gr";

const Description = ({ currentInfo, features }) => {
  console.log(features);

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
        <div id="features">
          {features ? (
            features.map((feature) => (
              <div>
                <GrCheckmark /> {feature.feature}: {feature.value}
              </div>
            ))
          ) : (
            <div>
              <GrCheckmark /> No features
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Description;
