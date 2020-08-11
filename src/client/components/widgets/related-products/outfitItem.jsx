import React from "react";

const OutfitItem = ({item}) => (
  <div id={`box-${item.number}`}>
    <img src={item.image} alt="" width="128px" />
    <h3>{item.name}</h3>
    <p>
      This item is type
      {" "}
      {item.type}
    </p>
    <p>${item.price}</p>
    <p>{item.stars}</p>
  </div>
);

export default OutfitItem;
