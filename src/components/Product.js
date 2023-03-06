import "../css/Product.css";
import { basketActions } from "../store/basketSlice";
import { productDetailsActions } from "../store/productSlice";
import { useDispatch } from "react-redux";
import ProductRating from "./ProductRating";
import { useHistory } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { style } from "@mui/system";
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

  let history = useHistory();
  return (
    <div
      className="product"
      onClick={() => {
        history.push("/productDetails");
        dispatch(
          productDetailsActions.selectOneProduct({
            id,
            category,
            title,
            description,
            image,
            price,
            rating,
            amount,
          })
        );
      }}
    >
      <p className="product__category">{category}</p>
      <div className="product__info">
        <p className="product__info">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <ProductRating rating={rating} />
      </div>

      <img src={image[0]} alt="" loading="lazy" className="img-product" />
    </div>
  );
}

export default Product;
