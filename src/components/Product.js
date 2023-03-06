import "../css/Product.css";
import { productDetailsActions } from "../store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductRating from "./ProductRating";
import { useHistory } from "react-router-dom";
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
  let allProduct = useSelector((state) => state.productDetails.allProduct);
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
        dispatch(
          productDetailsActions.relatedProducts(
            allProduct.filter((el) => el.category === category)
          )
        );
      }}
    >
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
