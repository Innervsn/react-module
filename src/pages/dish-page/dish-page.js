import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ProductCards } from "../../components/product-card/product-card";
import { setItemInCart } from "../../redux/cart/reducer";
import "./dish-page.css";

export const DishPage = () => {
  const dish = useSelector((state) => state.dish.currentDish);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.stopPropagation();
    dispatch(setItemInCart(dish));
  };

  if (!dish) return null;

  return (
    <div className="dish-page">
      <div className="dish-page__container">
        <header className="dish-page__header">
          <div>
            <Link className="dish-page__button_back" to="/"></Link>
          </div>
          <div className="dish-page__inputs">
            <ProductCards />
            <Link className="dish-page__header__btn" to="/entry-page">
              Выйти
            </Link>
          </div>
        </header>
        <div className="dish-page__card">
          <div>
            <img className="dish-page__card__preview" src={dish.image} alt="" />
          </div>
          <div className="dish-page__discription">
            <div className="dish-page__discription__text">
              <h1 className="dish-page__discription__text-title">
                {dish.title}
              </h1>
              <p className="dish-page__discription__text-about">
                {dish.description}
              </p>
            </div>
            <div className="dish-page__discription__amount">
              <p className="dish-page__discription__amount-price">
                {dish.price} ₽ / {dish.weight}
              </p>
              <button
                className="dish-page__discription__amount-btn"
                type="primary"
                onClick={handleClick}
              >
                В корзину
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
