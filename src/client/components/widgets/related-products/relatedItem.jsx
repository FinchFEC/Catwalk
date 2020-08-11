import React from "react";

const RelatedItem = ({item}) => (
  <div id={`box-${item.number}`}>
    <img src={item.image} alt="" width="128px" />
    <p>
      CATEGORY:
      {item.type}
    </p>
    <h3>{item.name}</h3>
    <p>${item.price}</p>
    <p>{item.stars}</p>
  </div>
);

export default RelatedItem;
