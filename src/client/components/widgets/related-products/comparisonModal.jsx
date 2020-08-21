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
  const offsetCurrent = featuresArr.length - currentInfo.features.length;
  const offsetCurArr = [];
  for (let i = 0; i < offsetCurrent; i++) {
    offsetCurArr.push(" ");
  }
  const offsetCompared = featuresArr.length - compared.data.features.length;
  const offsetCompArr = [];
  for (let i = 0; i < offsetCompared; i++) {
    offsetCompArr.push(" ");
  }
  return (
    <div className="modal">
      <button type="button" onClick={() => toggleComparison()}>
        X
      </button>
      <h4>Comparing</h4>
      <div id="modal">
        <div id="modal-1">
          <h3>{currentInfo.name}</h3>
          <ul>
            {offsetCurArr.map(() => (
              <br />
            ))}
            {currentInfo.features.map((feat) => (
              <div>{feat.value}</div>
            ))}
          </ul>
        </div>
        <div id="category">
          <ul>
            {featuresArr.map((key) => (
              <div>{key}</div>
            ))}
          </ul>
        </div>
        <div id="modal-2">
          <h3>{compared.data.name}</h3>
          <ul>
            {compared.data.features.map((feature) => (
              <div>{feature.value}</div>
            ))}
            {offsetCompArr.map(() => (
              <br />
            ))}
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
