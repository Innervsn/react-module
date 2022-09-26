import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BasketItem } from "../../components/basket-item/basket-item";
import { calcTotalPrice } from "../../components/utils";
import "./basket-page.css";

export const BasketPage = () => {
  const items = useSelector((state) => state.cart.itemsInCart);

  if (items.lenght < 1) {
    return <h1>Ваша корзина пуста</h1>;
  }

  return (
    <div className="basket__page">
      <div className="basket__container">
        <header className="basket__header">
          <Link className="basket__button_back" to="/"></Link>
          <h1 className="basket__header_text">Корзина с выбранными товарами</h1>
          <Link className="basket__header__btn" to="/entry-page">
            Выйти
          </Link>
        </header>

        <div className="basket_block">
          <div className="basket_list">
            {items.map((dish) => (
              <BasketItem dish={dish} />
            ))}
          </div>
          <div className="basket_line_block">
            <hr className="basket_list-line" />
          </div>

          <div className="">
            <footer className="basket__footer">
              <div className="basket__footer_price">
                <p className="basket__footer_price-text">Заказ на сумму :</p>
                <p className="basket__footer_price-amount">
                  {calcTotalPrice(items)} ₽
                </p>
              </div>
              <button className="basket__footer_button">Оформить заказ</button>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};
