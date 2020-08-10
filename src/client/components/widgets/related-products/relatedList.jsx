import React from 'react';

const relatedItems = [
  { name: "Hat 1", type: "Hat", image: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" },
  { name: "Hat 2", type: "Hat", image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
  { name: "Hat 3", type: "Hat", image: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
  { name: "Hat 4", type: "Hat", image: "https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
  { name: "Hat 5", type: "Hat", image: "https://images.unsplash.com/photo-1517941823-815bea90d291?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
];

const RelatedList = () => (
  <div>
    Here is my related products subcomponent!
    {relatedItems.map((item) => (
      <span>
        <div>{item.name}</div>
        <div>This item is type {item.type}</div>
        <img src={item.image}></img>
      </span>
    ))}
  </div>
);

export default RelatedList;
