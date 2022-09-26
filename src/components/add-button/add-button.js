import React from "react";
import "./add-button.css";

export const AddButton = ({ onClick, children }) => {

  return (
    <button className="card__button" onClick={onClick}>
      {children}
    </button>
  );
};
