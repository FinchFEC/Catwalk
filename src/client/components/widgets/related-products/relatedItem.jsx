import React from "react";
import PropTypes from 'prop-types';


const RelatedItem = ({item}) => (
  <div id={`box-${item.number}`}>
    <img src={item.image} alt="" width="128px" />
    <p>
      CATEGORY:
      {item.type}
    </p>
    <h3>{item.name}</h3>
    <p>{item.price}</p>
    <p>{item.stars}</p>
  </div>
);

RelatedItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default RelatedItem;
