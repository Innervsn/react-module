import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { calcTotalPrice } from "../utils";
import "./product-card.css";

export const ProductCards = () => {
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  const totalDish = items.reduce((acc) => (acc += 1), null);
  const navigate = useNavigate;

  const handleClick = useCallback(() => {
    navigate("/basket");
  }, [navigate]);

  return (
    <div className="products_cards">
      <div className="products">
        {totalDish > 0 ? (
          <p className="total__dish">{totalDish} товара</p>
        ) : (
          " "
        )}

        {totalPrice > 0 ? (
          <p className="total__price">на сумму {totalPrice} ₽</p>
        ) : (
          ""
        )}
      </div>
      <Link to="/basket-page">
        <button className="basket__button" onClick={handleClick}></button>
      </Link>
    </div>
  );
};
