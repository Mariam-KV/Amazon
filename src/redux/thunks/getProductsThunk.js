import { productDetailsActions } from "../slices/productSlice";
export const getProductsThunk = (data) => async (dispatch) => {
  await fetch(`https://dummyjson.com/products?limit=100`)
    .then((res) => res.json())
    .then((data) => dispatch(productDetailsActions.allProducts(data.products)))
    .catch((r) => alert(r));
};
