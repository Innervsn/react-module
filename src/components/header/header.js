import React from "react";
import { ProductCards } from "../product-card/";
import "./header.css";

export const Header = () => {
  return (
    <div className="header-container">
      <header className="header">
        <h1>наша продукция</h1>
        <div>
          <ProductCards />
        </div>
      </header>
      <div className=""></div>
    </div>
  );
};
