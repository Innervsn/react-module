import React from "react";
import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "../../redux/cart/reducer";
import "./basket-item.css";

export const BasketItem = ({ dish }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteItemFromCart(dish.id));
  };

  return (
    <div>
      <div className="basket_card">
        <div className="basket_card-products">
          <img className="basket_card-products_img" src={dish.image} alt="" />
          <h2 className="basket_card-products_title">{dish.title}</h2>
        </div>
        <div className="basket_card-amount">
          <p className="basket_card-amount_price">{dish.price} ₽</p>
          <button
            className="basket_card-amount_button"
            type="button"
            onClick={handleClick}
          ></button>
        </div>
      </div>
    </div>
  );
};
