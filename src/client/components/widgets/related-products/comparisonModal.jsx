import React from "react";
import PropTypes from "prop-types";

const ComparisonModal = ({
  toggleComparison,
  relatedInfo,
  currentInfo,
  compared,
}) => {
  const mergedInfoObj = {};
  compared.data.features.forEach((feature) => {
    mergedInfoObj[feature.feature] = feature.value;
  });
  currentInfo.features.forEach((feature) => {
    mergedInfoObj[feature.feature] = feature.value;
  });
  const featuresArr = Object.keys(mergedInfoObj);
  return (
    <div className="modal">
      <button type="button" onClick={() => toggleComparison()}>
        X
      </button>
      <div id="modal">
        <h4>Comparing</h4>
        <div id="modal-1">
          <h3>{currentInfo.name}</h3>
          <ul>
            {currentInfo.features.length !== compared.data.features.length &&
              compared.data.features.map(() => <li>X</li>)}
            {currentInfo.features.map((feat) => (
              <li>{feat.value}</li>
            ))}
          </ul>
        </div>
        <div id="category">
          <ul>
            {featuresArr.map((key) => (
              <li>{key}</li>
            ))}
          </ul>
        </div>
        <div id="modal-2">
          <h3>{compared.data.name}</h3>
          <ul>
            {compared.data.features.map((feature) => (
              <li>{feature.value}</li>
            ))}
            {currentInfo.features.length !== compared.data.features.length &&
              currentInfo.features.map(() => <li>X</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

ComparisonModal.propTypes = {
  toggleComparison: PropTypes.func.isRequired,
  relatedInfo: PropTypes.array.isRequired,
  currentInfo: PropTypes.object.isRequired,
  compared: PropTypes.object.isRequired,
};

export default ComparisonModal;
