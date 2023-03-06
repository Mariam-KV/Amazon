import { useState } from "react";
import "../css/productDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { basketActions } from "../store/basketSlice";
import { Carousel } from "react-responsive-carousel";
import Amount from "./Amount";
function ProductDetails() {
  let { id, category, title, description, image, price, rating, amount } =
    useSelector((state) => state.productDetails.oneProduct);
  let dispatch = useDispatch();
  let [changedAmount, setAmount] = useState(1);
  function addingToBasket() {
    dispatch(
      basketActions.addToBasket({
        id,
        category,
        description,
        title,
        image: image[0],
        price,
        rating,
        amount: changedAmount,
      })
    );
    setAmount(1);
  }
  function onAmount(e) {
    setAmount(e);
  }

  return (
    <div className="productDetails">
      <div className="productDetails__left">
        <Carousel
          infiniteLoop
          showStatus={false}
          showIndicators={document.body.offsetWidth > 800 ? false : true}
          showArrows={false}
          showThumbs={document.body.offsetWidth > 800 ? true : false}
          interval={5000}
          className="productDetails__left__carousel"
        >
          {image.map((img) => {
            return (
              <img
                src={img}
                alt=""
                loading="lazy"
                className="carousel__image"
              />
            );
          })}
        </Carousel>
      </div>
      <div className="productDetails__right">
        <h2>{title}</h2>
        <strong>$ {price}.00</strong>
        <p className="productDetails__right-description">{description}</p>
        <div className="productDetails__right-buttons">
          <Amount
            onAmount={onAmount}
            changedAmount={changedAmount}
            className="amount"
          />
          <button onClick={() => addingToBasket()}>Add to Basket</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
