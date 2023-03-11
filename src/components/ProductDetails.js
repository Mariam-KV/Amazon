import { useEffect, useState } from "react";
import "../css/productDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { basketActions } from "../store/basketSlice";
import { productDetailsActions } from "../store/productSlice";
import { Carousel } from "react-responsive-carousel";
import ProductRating from "./ProductRating";
import Amount from "./Amount";
import Review from "./Review";
function ProductDetails() {
  let { id, category, title, description, image, price, rating } = useSelector(
    (state) => state.productDetails.oneProduct
  );
  let related = useSelector((state) => state.productDetails.related);
  let totalAmount = useSelector((state) => state.basket.totalAmount);
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
    dispatch(basketActions.changeColor(true));
  }
  useEffect(() => {
    let timer = setTimeout(() => {
      dispatch(basketActions.changeColor(false));
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [totalAmount]);
  function onAmount(e) {
    setAmount(e);
  }
  return (
    <>
      <div className="productDetails">
        <div className="productDetails__left">
          <Carousel
            infiniteLoop
            showStatus={false}
            showIndicators={document.body.offsetWidth > 700 ? false : true}
            showArrows={false}
            showThumbs={document.body.offsetWidth > 700 ? true : false}
            interval={5000}
            className="productDetails__left__carousel"
          >
            {image.map((img) => {
              return (
                <img
                  src={img}
                  key={img}
                  alt="carousel__image"
                  loading="lazy"
                  className="carousel__image"
                />
              );
            })}
          </Carousel>
        </div>
        <div className="productDetails__right">
          <div>
            <ProductRating rating={rating} />
            <h2>{title}</h2>

            <strong>$ {price}.00</strong>
            <p className="productDetails__right-description">{description}</p>
            <div className="productDetails__right-buttons">
              <Amount
                onAmount={onAmount}
                changedAmount={changedAmount}
                className="amount"
              />
              <button onClick={() => addingToBasket()}>Add to Cart</button>
            </div>
          </div>
          <div className="related">
            <p className="related__title">Products related to this item</p>
            <div className="related__items">
              {related
                .filter((el) => el.id !== id)
                .map((el) => {
                  return (
                    <img
                      src={el.images[0]}
                      alt="related item "
                      key={el.images[0]}
                      className="related__items-images"
                      onClick={() => {
                        dispatch(
                          productDetailsActions.selectOneProduct({
                            id: el.id,
                            category: el.category,
                            title: el.title,
                            description: el.description,
                            image: el.images,
                            price: el.price,
                            rating: el.rating,
                            amount: el.amount,
                          })
                        );
                      }}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <Review stars={rating} id={id} />
    </>
  );
}

export default ProductDetails;
