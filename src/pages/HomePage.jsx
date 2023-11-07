import { useEffect, useState } from "react";
import "../css/Home.css";
import { useSelector, useDispatch } from "react-redux";
import { productDetailsActions } from "../redux/slices/productSlice";
import { getProductsThunk } from "../redux/thunks/getProductsThunk.js";
import Banner from "../components/banner/Banner";
import Product from "../components/Product";
import LoadingSpinner from "../components/LoadingSpinner";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      light: "#f0c14b",
      main: "#f0c14b",
      dark: "#f0c14b",
    },
  },
});

function HomePage() {
  let [products, setProducts] = useState([]);
  let [showProducts, setShowProducts] = useState([]);
  let dispatch = useDispatch();
  let { category, filterProducts } = useSelector(
    (state) => state.productDetails
  );
  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  useEffect(() => {
    if (category.value) {
      dispatch(productDetailsActions.filterProducts(category.value));
    } else {
      setShowProducts(products.slice(0, 8));
    }
  }, [category.value]);

  let More = (page) => {
    setShowProducts(products.slice((page - 1) * 8, (page - 1) * 8 + 8));
  };

  return (
    <>
      <div className="home">
        <Banner />
      </div>

      {!filterProducts.length ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="home__row">
            {filterProducts?.map((product) => (
              <Product data={product} key={"product" + product.id} />
            ))}
          </div>
          {category?.length === 0 && (
            <ThemeProvider theme={theme}>
              <Stack className="home__pagination">
                <Pagination
                  count={13}
                  color="primary"
                  onChange={(event, page) => (category.value ? "" : More(page))}
                />
              </Stack>
            </ThemeProvider>
          )}

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
