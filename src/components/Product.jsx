import "../css/Product.css";
import { productDetailsActions } from "../redux/slices/productSlice";
import { useDispatch } from "react-redux";
import ProductRating from "./ProductRating";
import { useHistory } from "react-router-dom";
function Product({
  data: { id, category, title, description, images, price, rating, amount },
}) {
  let dispatch = useDispatch();
  let history = useHistory();
  return (
    <div
      className="product"
      onClick={() => {
        history.push("/productDetails");
        dispatch(productDetailsActions.selectOneProduct(id));
        dispatch(productDetailsActions.relatedProducts(category));
      }}
    >
      <div className="product__info">
        <p className="product__info">{title}</p>
        <p className="product__price">
          <small>$ </small>
          <strong>{price}</strong>
        </p>
        <ProductRating rating={rating} />
      </div>

      <img src={images[0]} alt="" loading="lazy" className="img-product" />
    </div>
  );
}

export default Product;
