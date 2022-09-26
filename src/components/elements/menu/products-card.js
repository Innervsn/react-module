import "./products-card.css";

function Products({ url, title, description, price, weight, button, handleClick }) {
  return (
    <div className="card">
      <img className="card__preview" src={url} alt="" />
      <div className="card__text">
        <h2 className="card__title">{title}</h2>
        <p className="card__discription">{description}</p>
      </div>

      <div className="card_price">
        <p>
          {price} ₽/ {weight}
        </p>
        <button
          onClick={handleClick}
          className="card__button"
          type="button"
          src={button}
        ></button>
      </div>
    </div>
  );
}

export default Products;
