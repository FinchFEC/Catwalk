import React from "react";
import PropTypes from 'prop-types';


const OutfitItem = ({item}) => (
  <div id={`box-${item.number}`}>
    <img src={item.image} alt="" width="128px" />
    <h3>{item.name}</h3>
    <p>
      This item is type
      {" "}
      {item.type}
    </p>
    <p>{item.price}</p>
    <p>{item.stars}</p>
  </div>
);

OutfitItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default OutfitItem;
