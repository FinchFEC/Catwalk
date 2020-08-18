import React from "react";
import PropTypes from "prop-types";

const ComparisonModal = ({
  toggleComparison,
  relatedInfo,
  currentInfo,
  compared,
}) => {
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
            {compared.data.features.map(() => (
              <li>N/A</li>
            ))}
            {currentInfo.features.map((feature) => {
              return <li>{feature.value}</li>;
            })}
          </ul>
        </div>
        <div id="category">
          <ul>
            {compared.data.features.map((feature) => (
              <li>{feature.feature}</li>
            ))}
            {currentInfo.features.map((feature) => (
              <li>{feature.feature}</li>
            ))}
          </ul>
        </div>
        <div id="modal-2">
          <h3>{compared.data.name}</h3>
          <ul>
            {/* {console.log(compared)} */}
            {compared.data.features.map((feature) => (
              <li>{feature.value}</li>
            ))}
            {currentInfo.features.map(() => (
              <li>N/A</li>
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
  compared: PropTypes.object.isRequired
};

export default ComparisonModal;
