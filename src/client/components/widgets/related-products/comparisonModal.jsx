import React from "react";
import PropTypes from "prop-types";

const ComparisonModal = ({ toggleComparison, relatedInfo }) => {
  return (
    <div className="modal">
      <h3>COMPARISON MODAL</h3>
      <button type="button" onClick={() => toggleComparison()}>X</button>
      <div id="modal">
        <div id="modal-1">
          <h3>Product A</h3>
          <ul>
            <li>Detail 1</li>
            <li>Detail 2</li>
            <li>Detail 3</li>
            <li>Detail 4</li>
          </ul>
        </div>
        <div id="category">
          <h3>Categories</h3>
          <ul>
            {relatedInfo[0].data.features.map((feature) => (
              <li>{feature.feature}</li>
            ))}
          </ul>
        </div>
        <div id="modal-2">
          <h3>Product B</h3>
          <ul>
            <li>Detail 1</li>
            <li>Detail 2</li>
            <li>Detail 3</li>
            <li>Detail 4</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

ComparisonModal.propTypes = {
  toggleComparison: PropTypes.func.isRequired,
  relatedInfo: PropTypes.array.isRequired
};

export default ComparisonModal;
