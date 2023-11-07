import { useEffect, useState } from "react";
import "../css/Home.css";
import { filterActions } from "../store/slices/filterSlice";
import { useSelector, useDispatch } from "react-redux";
import { productDetailsActions } from "../store/slices/productSlice";
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
  let category = useSelector((state) => state.filter.category);
  useEffect(() => {
    let FakeStoreAPI = async () => {
      await fetch(`https://dummyjson.com/products?limit=100`)
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.products);
          category.value
            ? setShowProducts(
                data.products.filter(
                  (product) => product.category === category.value
                )
              )
            : setShowProducts(data.products.slice(0, 8));

          dispatch(productDetailsActions.allProducts(data.products));
          dispatch(filterActions.allCategory(data.products));
        })
        .catch((r) => alert(r));
    };

    FakeStoreAPI();
  }, []);

  useEffect(() => {
    if (category.value) {
      setShowProducts(
        products.filter((product) => product.category === category.value)
      );
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

      {!products.length ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="home__row">
            {showProducts?.map((product) => {
              return (
                <Product
                  key={"product" + product.id}
                  category={product.category}
                  description={product.description}
                  image={product.images}
                  rating={product.rating}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  amount={0}
                />
              );
            })}
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
