import { useEffect, useState } from "react";
import "../css/Home.css";
import { filterActions } from "../store/filterSlice";
import { useSelector, useDispatch } from "react-redux";
import { productDetailsActions } from "../store/productSlice";
import Banner from "../components/Banner";
import Product from "../components/Product";
import LoadingSpinner from "../components/LoadingSpinner";
let skip = 8;
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
          dispatch(productDetailsActions.allProducts(data.products));
          dispatch(filterActions.allCategory(data.products));
        })
        .catch((r) => alert(r));
    };
    FakeStoreAPI();
  }, []);

  if (category?.value) {
    products = products.filter(
      (product) => product.category === category.value
    );
  }
  let productsBefore = products.slice(0, 8);

  let More = () => {
    skip += 8;
    let productsAfter = products.slice(8, skip);
    setShowProducts(productsAfter);
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
            {productsBefore?.map((product) => {
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

            {category?.length === 0 && (
              <>
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
              </>
            )}
          </div>
          {category?.length === 0 && skip < 100 && (
            <button className="button__load" onClick={() => More()}>
              Load more...
            </button>
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
