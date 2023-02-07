import "../css/Product.css";
import { basketActions } from "../slices/store";
import { useDispatch } from "react-redux";
function Product({ id, category, title, description, image, price, rating }) {
  let dispatch = useDispatch();

  function addingToBasket() {
    dispatch(
      basketActions.addToBasket({
        id,
        category,
        description,
        title,
        image,
        price,
        rating,
      })
    );
  }

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__info">{category}</p>
        <p className="product__info">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          <p>{"🌟".repeat(rating)}</p>
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addingToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
