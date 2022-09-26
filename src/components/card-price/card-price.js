import React from "react";
import { useDispatch } from "react-redux";
import { setItemInCart } from "../../redux/cart/reducer";
import { AddButton } from "../add-button/add-button";
import "./card-price.css";

export const CardPrice = ({ dish }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.stopPropagation();
    dispatch(setItemInCart(dish));
  };

  return (
    <div className="card_price">
      <p>
        {dish.price} ₽/ {dish.weight}
      </p>

      <AddButton type="primary" onClick={handleClick}></AddButton>
    </div>
  );
};
