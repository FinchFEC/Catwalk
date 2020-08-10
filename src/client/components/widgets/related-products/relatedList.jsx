import React from "react";
import RelatedItem from "./relatedItem.jsx";

const relatedItems = [
  {
    number: 1,
    price: 25,
    stars: "***",
    name: "Hat 1",
    type: "Hat",
    image:
      "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  },
  {
    number: 2,
    price: 25,
    stars: "***",
    name: "Hat 2",
    type: "Hat",
    image:
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    number: 3,
    price: 25,
    stars: "***",
    name: "Hat 3",
    type: "Hat",
    image:
      "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    number: 4,
    price: 25,
    stars: "***",
    name: "Hat 4",
    type: "Hat",
    image:
      "https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    number: 5,
    price: 25,
    stars: "***",
    name: "Hat 5",
    type: "Hat",
    image:
      "https://images.unsplash.com/photo-1517941823-815bea90d291?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
];

const RelatedList = () => (
  <div id="container-1">
    <h1>RELATED PRODUCTS</h1>
    <br />
    {relatedItems.map((item) => (
      <RelatedItem item={item} />
    ))}
  </div>
);

export default RelatedList;
