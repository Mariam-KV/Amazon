import React from "react";
import { productDetailsActions } from "../redux/slices/productSlice";
import { useDispatch } from "react-redux";
function RelatedProducts({ data: { images, id } }) {
  const dispatch = useDispatch();
  return (
    <img
      src={images[0]}
      alt="related item "
      key={images[0]}
      className="related__items-images"
      onClick={() => dispatch(productDetailsActions.selectOneProduct(id))}
    />
  );
}

export default RelatedProducts;
