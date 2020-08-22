import React from "react";
import PropTypes from "prop-types";
import StaticStars from "../ratings-reviews/static-stars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OutfitItem = ({ stdObj, rerender }) => {
  function removeThisFromStorage(e) {
    e.preventDefault();
    localStorage.removeItem(stdObj.id.toString());
    rerender();
  }
  return (
    <div className="tile" id={`box-${stdObj.id}`}>
      {console.log('info object passed into OutfitItem', stdObj)}
      <FontAwesomeIcon
        onClick={removeThisFromStorage}
        id="close"
        icon={["far", "times-circle"]}
      />
      <img className="related-image" src="" alt="outfit item" />
      <h3>{stdObj.name}</h3>
      <p>{stdObj.type}</p>
      <p>${stdObj.default_price}</p>
      <StaticStars rating={3.5} />
    </div>
  );
};

OutfitItem.propTypes = {
  stdObj: PropTypes.object.isRequired,
  rerender: PropTypes.func.isRequired,
};

export default OutfitItem;
