import { useEffect, useState } from "react";
import "../css/Home.css";
import Banner from "../components/Banner";
import Product from "../components/Product";
function HomePage() {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    let FakeStoreAPI = async () => {
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    };
    FakeStoreAPI();
  }, []);
  let productsBefore = products.slice(0, 6);
  let productsAfter = products.slice(6);

  return (
    <>
      <div className="home">
        <Banner />
      </div>
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
            />
          );
        })}
        <img src="https://links.papareact.com/dyz" alt="banner" />
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
            />
          );
        })}
      </div>
    </>
  );
}

export default HomePage;
