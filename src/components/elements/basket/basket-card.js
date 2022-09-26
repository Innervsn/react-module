import "./basket-card.css";

function List({ url, title, price, button }) {
  return (
    <div className="basket_card">
      <div className="basket_card-products">
        <img className="products_img" src={url} alt="" />
        <h2 className="products_title">{title}</h2>
      </div>
      <div className="amount">
        <p className="amount_price">{price}</p>
        <button className="amount_button" type="button" src={button}></button>
      </div>
    </div>
  );
}

export default List;
