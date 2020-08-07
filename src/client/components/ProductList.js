import React from "react";

const ProductList = ({ productList }) => (
  <ul>
    {productList.map((product) => (
      <li>{product.name}</li>
    ))}
  </ul>
);

export default ProductList;
