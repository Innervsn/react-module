import { click } from "@testing-library/user-event/dist/click";
import "./Products.css";
import Products from "../../components/elements/menu/products-card";
import { menuList } from "../../components/elements/menu/menuList";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function Menu(handlePlus,
  count,
  setCount,) {
  // const sum = 1200;
  // let sumProducts = [];
  // let result = 0;

  // const addPriceProduct = (price) => {
  //   sumProducts.push(price);
  //   // console.log(sumProducts);
  //   result = sumProducts.reduce((sum, current) => {
  //     return sum + current;
  //   }, 0);
  //   // console.log("сумма товаров = ", result);
  // };

[count, setCount] = useState(0);

  handlePlus = () => {
    setCount(count + 1);
  };

  // const handleMinus = () => {
  //   setCount(count -1)
  // }

  // return <div className="App">
  //   <button onClick={handlePlus}>Увеличить</button>
  //   <button onClick={handleMinus}>Уменьшить</button>
  //   <br />
  //   {count}
  // </div>;

  return (
    <main className="main">
      <div className="container">
        <header className="header">
          <h1>наша продукция</h1>
          <div className="basket">
            <div className="products">
              <p>3 товара</p>
              <p>123</p>
            </div>
            <Link className="basket__button" to="/basket"></Link>
            {/* <button className="basket__button" type="button">
            </button> */}
          </div>
        </header>

        <div className="menu">
          {menuList.map((dish) => {
            const {
              url,
              title,
              description,
              price,
              weight,
              button,
              handleClick,
              handlePlus,
              count,
              setCount,
            } = dish;
            return (
              <Products
                url={url}
                title={title}
                description={description}
                price={price}
                weight={weight}
                button={button}
                handlePlus={handlePlus}
                // count={count}
                // setCount={setCount}
                // handleClick={(e) => addPriceProduct(price)(e)}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Menu;
