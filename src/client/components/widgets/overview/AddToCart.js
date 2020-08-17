import React from "react";
import "../../../assets/scss/overview.scss";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlinePlus, AiOutlineStar } from "react-icons/ai";

const AddToCart = () => {
  return (
    <div className="add-to-cart">
      <div className="select-size">
        <div className="select-size-box">
          <select>
            <option value="0">SELECT SIZE</option>
          </select>
        </div>
        <div className="quantity" />
      </div>
      <div className="add-to-bag">
        <div className="add-to-bag-box">
          <AiOutlinePlus />
        </div>
        <div className="add-to-favorites">
          <AiOutlineStar />
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
