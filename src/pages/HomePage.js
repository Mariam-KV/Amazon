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
  console.log(products);
  return (
    <>
      <div className="home">
        <Banner />
      </div>
      <div className="home__row">
        {products?.map((product) => {
          return (
            <Product
              category={product.category}
              description={product.description}
              image={product.image}
              rating={product.rating}
              id={product.id}
              title={product.title}
              price={product.prcie}
            />
          );
        })}
      </div>
    </>
  );
}

export default HomePage;
