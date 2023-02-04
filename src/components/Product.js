import { useStateValue } from "../Context";
import "../css/Product.css";

function Product({ id, category,title,description, image, price, rating }) {
  let [state, dispatch] = useStateValue();

  function addingToBasket() {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        category,
        description,
        title,
        image,
        price,
        rating,
      },
    });
  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}fdfdfgfd</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}3232</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟🌟🌟🌟🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addingToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
