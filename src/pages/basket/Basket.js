// import { click } from "@testing-library/user-event/dist/click";
import "./Basket.css";
import List from "../../components/elements/basket/basket-card";
import { basketList } from "../../components/elements/basket/basketList";
import { Link } from "react-router-dom";
import Menu from "../menu/Products";

function Basket() {
  return (
    <div className="basket">
      <div className="basket__container">
        <header className="basket__header">
          <Link className="basket__button_back" to="/"></Link>
          {/* <input className="basket__button_back" type="button" /> */}
          {/* <button className="button__back"></button> */}
          <h1 className="basket__header_text">
            Корзина с выбранными продуктами
          </h1>
        </header>

        <main className="basket_list">
          <div className="basket_list-block">
            {basketList.map((key) => {
              const { url, title, description, price,  } = key;
              return (
                <List
                  url={url}
                  title={title}
                  description={description}
                  price={price}
                
                />
              );
            })}
          </div>
          <hr className="basket_list-line" />
        </main>
        <footer className="basket__footer">
          <div className="basket__footer_price">
            <p className="basket__footer_price-text">Заказ на сумму:</p>
            <p className="basket__footer_price-amount">6 220 ₽</p>
          </div>
          <button className="basket__footer_button">Оформить заказ</button>
        </footer>
      </div>
    </div>
  );
}

export default Basket;
