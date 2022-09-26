import React from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "../../components/menu-item/menu-item";
import { ProductCards } from "../../components/product-card/product-card";
import "./menu-page.css";

const menuList = [
  {
    image: "/images/food_1.svg",
    title: "Устрицы по рокфеллеровски",
    description:
      "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры ",
    price: 2700,
    weight: "500 г.",
    id: 1,
  },
  {
    image: "/images/food_2.svg",
    title: "Свиные ребрышки на гриле с зеленью",
    description:
      "Не следует, однако забывать, что реализация намеченных плановых ",
    price: 1600,
    weight: "750 г.",
    id: 2,
  },
  {
    image: "/images/food_3.svg",
    title: "Креветки по-королевски в лимонном соке",
    description:
      "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу",
    price: 1820,
    weight: "7 шт.",
    id: 3,
  },
  {
    image: "/images/food_1.svg",
    title: "Устрицы по рокфеллеровски",
    description:
      "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры ",
    price: 2700,
    weight: "500 г.",
    id: 4,
  },
  {
    image: "/images/food_2.svg",
    title: "Свиные ребрышки на гриле с зеленью",
    description:
      "Не следует, однако забывать, что реализация намеченных плановых ",
    price: 1600,
    weight: "750 г.",
    id: 5,
  },
  {
    image: "/images/food_3.svg",
    title: "Креветки по-королевски в лимонном соке",
    description:
      "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу",
    price: 1820,
    weight: "7 шт.",
    id: 6,
  },
  {
    image: "/images/food_1.svg",
    title: "Устрицы по рокфеллеровски",
    description:
      "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры ",
    price: 2700,
    weight: "500 г.",
    id: 7,
  },
  {
    image: "/images/food_2.svg",
    title: "Свиные ребрышки на гриле с зеленью",
    description:
      "Не следует, однако забывать, что реализация намеченных плановых ",
    price: 1600,
    weight: "750 г.",
    id: 8,
  },
];

export const MenuPage = () => {
  return (
    <div className="menu__container">
      <div className="">
        <header className="menu__header">
          <h1>наша продукция</h1>
          <div className="menu__header__inputs">
            <ProductCards />
            <Link className="menu__header__btn" to="/entry-page">Выйти</Link>
          </div>
        </header>
        <div className=""></div>
      </div>
      <div className="menu-page">
        {menuList.map((dish) => (
          <MenuItem dish={dish} key={dish.id} />
        ))}
      </div>
    </div>
  );
};
