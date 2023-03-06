import React from "react";
import "../css/productDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { basketActions } from "../store/basketSlice";
import { Carousel } from "react-responsive-carousel";
function ProductDetails() {
  let { id, category, title, description, image, price, rating, amount } =
    useSelector((state) => state.productDetails.oneProduct);
  let dispatch = useDispatch();
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
        amount,
      })
    );
  }
  return (
    <div className="productDetails">
      <div className="productDetails__left">
        <Carousel
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showArrows={false}
          showThumbs={true}
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
        <p>{price}</p>
        <p className="productDetails__right-description">{description}</p>
        <button onClick={() => addingToBasket()}>Add to Basket</button>
      </div>
    </div>
  );
}

export default ProductDetails;
