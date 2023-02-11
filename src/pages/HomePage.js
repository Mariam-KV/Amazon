import { useEffect, useState } from "react";
import "../css/Home.css";
import Banner from "../components/Banner";
import Product from "../components/Product";
import LoadingSpinner from "../components/LoadingSpinner";
function HomePage({ category }) {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    let FakeStoreAPI = async () => {
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) =>
          category !== "all"
            ? setProducts(
                data.filter((product) => product.category === category)
              )
            : setProducts(data)
        );
    };
    FakeStoreAPI();
  }, [category]);
  let productsBefore = products.slice(0, 8);
  let productsAfter = products.slice(8);
  return (
    <>
      <div className="home">
        <Banner />
      </div>

      {!products.length ? (
        <LoadingSpinner />
      ) : (
        <div className="home__row">
          {productsBefore?.map((product) => {
            return (
              <Product
                key={"product" + product.id}
                category={product.category}
                description={product.description}
                image={product.image}
                rating={Math.round(product.rating.rate)}
                id={product.id}
                title={product.title}
                price={product.price}
                amount={0}
              />
            );
          })}
          <a
            href="https://www.amazon.com/b?ie=UTF8&node=21429425011"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://links.papareact.com/dyz"
              alt="banner"
              className="banner"
            />
          </a>

          {productsAfter?.map((product) => {
            return (
              <Product
                key={"product" + product.id}
                category={product.category}
                description={product.description}
                image={product.image}
                rating={Math.round(product.rating.rate)}
                id={product.id}
                title={product.title}
                price={product.price}
                amount={0}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default HomePage;
