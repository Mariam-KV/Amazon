import { useEffect, useState } from "react";
import "../css/Home.css";

import Banner from "../components/Banner";
import Product from "../components/Product";
import LoadingSpinner from "../components/LoadingSpinner";
let skip = 20;
function HomePage({ category, onAllCategory }) {
  let [products, setProducts] = useState([]);
  let [showProducts, setShowProducts] = useState([]);
  console.log(skip);
  useEffect(() => {
    let FakeStoreAPI = async () => {
      await fetch(`https://dummyjson.com/products?limit=100`)
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.products);
          let allCategory = [];
          data.products.map((element) => {
            if (!allCategory.includes(element.category)) {
              return allCategory.push(element.category);
            }
            return;
          });
          onAllCategory(allCategory);
          // fetch("https://fir-214b5-default-rtdb.firebaseio.com/products.json", {
          //   method: "POST",
          //   body: JSON.stringify(data),
          // });
        })
        .catch((r) => console.log(r));
    };
    FakeStoreAPI();
  }, []);

  if (category !== "all") {
    products = products.filter((product) => product.category === category);
  }
  let productsBefore = products.slice(0, 8);
  let productsAfter = products.slice(8, 20);
  let More = () => {
    skip += 10;
    productsAfter = products.slice(20, skip);
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
                  image={product.images[0]}
                  rating={Math.round(product.rating)}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  amount={0}
                />
              );
            })}

            {category === "all" && (
              <>
                {showProducts?.map((product) => {
                  return (
                    <Product
                      key={"product" + product.id}
                      category={product.category}
                      description={product.description}
                      image={product.images[0]}
                      rating={Math.round(product.rating)}
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
          {category === "all" && skip !== 100 && (
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
