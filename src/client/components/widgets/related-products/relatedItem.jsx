import React from "react";
import PropTypes from "prop-types";

const RelatedItem = ({ item }) => (
  <div id={`box-${item.data.id}`}>
    {/* <img src={item.data.image} alt="" width="128px" /> */}
    <p>
      CATEGORY:
      {item.data.category}
    </p>
    <h3>{item.data.name}</h3>
    <p>
      $
      {item.data.default_price}
    </p>
    <p>{item.data.slogan}</p>
  </div>
);

RelatedItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default RelatedItem;
