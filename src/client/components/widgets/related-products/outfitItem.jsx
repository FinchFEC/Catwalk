import React from "react";
import PropTypes from "prop-types";
import StaticStars from "../ratings-reviews/static-stars";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const OutfitItem = ({ item }) => (
  <div className="tile" id={`box-${item.number}`}>
    <FontAwesomeIcon id="close" icon={['far', 'times-circle']} />
    <img src={item.image} alt="" width="170px" height="240px" />
    <h3>{item.name}</h3>
    <p>{item.type}</p>
    <p>${item.price}</p>
    <StaticStars rating={4} />
  </div>
);

OutfitItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default OutfitItem;
