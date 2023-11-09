import { useEffect } from "react";
import "../css/Home.css";
import { useSelector, useDispatch } from "react-redux";
import { productDetailsActions } from "../redux/slices/productSlice";
import { getProductsThunk } from "../redux/thunks/getProductsThunk.js";
import Banner from "../components/banner/Banner";
import Product from "../components/Product";
import LoadingSpinner from "../components/LoadingSpinner";
import PaginationC from "../components/PaginationC.jsx";

function HomePage() {
  const dispatch = useDispatch();
  const { category, showProducts } = useSelector(
    (state) => state.productDetails
  );
  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);
  useEffect(() => {
    if (category?.value === "All") {
      dispatch(productDetailsActions.showProducts(1));
    } else if (category?.value) {
      dispatch(productDetailsActions.filterProducts(category.value));
    }
  }, [dispatch, category?.value]);
  return (
    <>
      <div className="home">
        <Banner />
      </div>

      {!showProducts ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="home__row">
            {showProducts?.map((product) => (
              <Product data={product} key={"product" + product.id} />
            ))}
          </div>
          {category?.value === "All" && <PaginationC />}
          <a
            href="https://www.amazon.com/b?ie=UTF8&node=21429425011"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://links.papareact.com/dyz"
              alt="banner"
              className="banner__bottom"
            />
          </a>
        </>
      )}
    </>
  );
}

export default HomePage;
