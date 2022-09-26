import React from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { CardPrice } from "../card-price/card-price";
import { setCurrentDish } from "../../redux/dishes/reducer";
import "./menu-item.css";

export const MenuItem = ({ dish }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setCurrentDish(dish));
    navigate.push(`${dish.title}`);
  };

  return (
    <div className="card__item" onClick={handleClick}>
      <Link to="/dish-page">
        <img className="card__preview" src={dish.image} alt="" />
      </Link>
      <div className="card__text">
        <h2 className="card__title">{dish.title}</h2>
        <p className="card__discription">{dish.description}</p>
      </div>

      <div className="">
        <CardPrice dish={dish} />
      </div>
    </div>
  );
};
