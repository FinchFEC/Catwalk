import React from "react";
import PropTypes from "prop-types";
import OutfitItem from "./outfitItem.jsx";
import { calcAvgRating } from "../../../../dataManipulationHelpers";

// const selectedOutfit = [
//   {
//     name: "Hat 1",
//     price: 40,
//     type: "Hat",
//     number: 1,
//     stars: "****",
//     image:
//       "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//   },
//   {
//     name: "Shirt 2",
//     price: 40,
//     type: "Shirt",
//     number: 2,
//     stars: "****",
//     image:
//       "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//   },
//   {
//     name: "Pants 3",
//     price: 40,
//     type: "Pants",
//     number: 3,
//     stars: "****",
//     image:
//       "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//   },
//   {
//     name: "Shoes 4",
//     price: 40,
//     type: "Shoes",
//     number: 4,
//     stars: "****",
//     image:
//       "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//   },
//   {
//     name: "Accessory 5",
//     price: 40,
//     type: "Accessory",
//     number: 5,
//     stars: "****",
//     image:
//       "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//   },
// ];

const OutfitList = ({ currentInfo, rerender, currentStyles, avgRating }) => {
  function addCurrentProductToLocal(event) {
    event.preventDefault();
    localStorage.setItem(
      currentInfo.id.toString(),
      JSON.stringify(
        Object.assign(currentInfo, currentStyles.results[0].photos[0], {rating: avgRating})
      )
    );
    rerender();
  }
  const arrOfOutfitInfos = [];
  for (let i = 0; i < localStorage.length; i++) {
    if (Number(localStorage.key(i)) < 15) {
      arrOfOutfitInfos.push(
        JSON.parse(localStorage.getItem(localStorage.key(i)))
      );
    }
  }
  return (
    <div>
      {/* <button type="button">{"<"}</button> */}
      <div id="container-2">
        {console.log("currentStyles : ", currentStyles)}
        {console.log("average rating : ", avgRating)}
        <h4
          className="tile"
          id="add-outfit-btn"
          onClick={addCurrentProductToLocal}
        >
          Add Current Item To Outfit
        </h4>
        {arrOfOutfitInfos.map((stdObj, i) => (
          <OutfitItem stdObj={stdObj} rerender={rerender} key={i} />
        ))}
      </div>
      {/* <button type="button">{">"}</button> */}
    </div>
  );
};

OutfitList.propTypes = {
  currentInfo: PropTypes.object.isRequired,
  rerender: PropTypes.func.isRequired,
  currentStyles: PropTypes.object.isRequired,
  avgRating: PropTypes.number.isRequired,
};

export default OutfitList;
