import React from 'react';


const selectedOutfit = [
  {name: "Hat 1", type: "Hat", image: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
  {name: "Shirt 2", type: "Shirt", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
  {name: "Pants 3", type: "Pants", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
  {name: "Shoes 4", type: "Shoes", image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
  {name: "Accessory 5", type: "Accessory", image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}
];

const OutfitList = () => (
  <div>
    Here is my current user outfit subcomponent!
    {selectedOutfit.map((item) => (
      <span>
        <div>{item.name}</div>
        <div>This item is type {item.type}</div>
        <img src={item.image}></img>
      </span>
    ))}
  </div>
);

export default OutfitList;