<<<<<<< HEAD
const productList = (state = [], action) => {
=======
import Redux from "redux";

var productList = (
  state = [
    {
      id: 1,
      name: "Camo Onesie",
      slogan: "Blend in to your crowd",
      description:
        "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
      category: "Jackets",
      default_price: "140",
    },
    {
      id: 2,
      name: "Bright Future Sunglasses",
      slogan: "You've got to wear shades",
      description:
        "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
      category: "Accessories",
      default_price: "69",
    },
  ],
  action
) => {
>>>>>>> master
  switch (action.type) {
    case 'GET_PRODUCT_LIST':
      return action.products;
    default:
      return state;
  }
};

export default productList;
