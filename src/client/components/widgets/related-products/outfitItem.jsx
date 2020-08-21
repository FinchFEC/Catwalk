import React from "react";
import PropTypes from "prop-types";
import StaticStars from "../ratings-reviews/static-stars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OutfitItem = ({ stringifiedObj, rerender }) => {
  const stdObj = JSON.parse(stringifiedObj);
  function removeThisFromStorage(e) {
    e.preventDefault();
    localStorage.removeItem(stdObj.id.toString());
    rerender();
  }
  return (
    <div className="tile" id={`box-${stdObj.id}`}>
      <FontAwesomeIcon
        onClick={removeThisFromStorage}
        id="close"
        icon={["far", "times-circle"]}
      />
      {/* <img src={item.image} alt="" width="170px" height="240px" /> */}
      <h3>{stdObj.name}</h3>
      <p>{stdObj.type}</p>
      <p>${stdObj.default_price}</p>
      {/* <StaticStars rating={4} /> */}
    </div>
  );
};

OutfitItem.propTypes = {
  stringifiedObj: PropTypes.string.isRequired,
  rerender: PropTypes.func.isRequired,
};

export default OutfitItem;
