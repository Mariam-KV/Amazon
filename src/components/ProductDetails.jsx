import { useEffect, useState } from "react";
import "../css/productDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { basketActions } from "../redux/slices/basketSlice";
import RelatedProducts from "./RelatedProducts";
import ProductCarousel from "./ProductCarousel";
import { sidebarActions } from "../redux/slices/sidebarSlice";
import ProductRating from "./ProductRating";
import Amount from "./amount/Amount";
import Review from "./review/Review";
function ProductDetails() {
  const { id, category, title, description, images, price, rating } =
    useSelector((state) => state.productDetails.oneProduct[0]);

  const related = useSelector((state) => state.productDetails.related);
  const totalAmount = useSelector((state) => state.basket.totalAmount);
  const dispatch = useDispatch();
  const [changedAmount, setAmount] = useState(1);
  function addingToBasket() {
    dispatch(
      basketActions.addToBasket({
        id,
        category,
        description,
        title,
        images: images[0],
        price,
        rating,
        amount: changedAmount,
      })
    );
    setAmount(1);
    dispatch(basketActions.changeColor(true));
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(basketActions.changeColor(false));
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, totalAmount]);

  return (
    <>
      <div className="productDetails">
        <ProductCarousel images={images} />
        <div className="productDetails__right">
          <ProductRating rating={rating} />
          <h2>{title}</h2>

          <strong>$ {price}.00</strong>
          <p className="productDetails__right-description">{description}</p>
          <div className="productDetails__right-buttons">
            <Amount
              onAmount={(e) => setAmount(e)}
              changedAmount={changedAmount}
              className="amount"
            />
            <button
              onClick={() => {
                addingToBasket();
                dispatch(sidebarActions.toggleShow(true));
              }}
            >
              Add to Cart
            </button>
          </div>
          <div className="related">
            <p className="related__title">Products related to this item</p>
            <div className="related__items">
              {related
                .filter((el) => el.id !== id)
                .map((el) => (
                  <RelatedProducts data={el} key={el.id} />
                ))}
            </div>
          </div>
        </div>
      </div>
      <Review stars={rating} id={id} />
    </>
  );
}

export default ProductDetails;
