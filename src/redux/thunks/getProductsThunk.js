import { productDetailsActions } from "../slices/productSlice";
export const getProductsThunk = () => async (dispatch) => {
  await fetch(`https://dummyjson.com/products?limit=100`)
    .then((res) => res.json())
    .then((data) => {
      dispatch(productDetailsActions.allProducts(data.products));
      dispatch(productDetailsActions.allCategory(data.products));
    })
    .catch((r) => alert(r));
};
