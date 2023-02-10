import "../css/Product.css";
import { basketActions } from "../store";
import { useDispatch } from "react-redux";
import ProductRating from "./ProductRating";
function Product({
  id,
  category,
  title,
  description,
  image,
  price,
  rating,
  amount,
}) {
  let dispatch = useDispatch();
  let minRating = 5 - rating;

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
        amount,
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
        <ProductRating rating={rating} />
      </div>

      <img src={image} alt="" />

      <button onClick={addingToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
