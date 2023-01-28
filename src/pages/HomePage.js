import React from "react";
import "../css/Home.css";
import Product from "../components/Product";
function HomePage() {
  return (
    <>
      <div className="home">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="background"
          className="home__image "
        />
      </div>
      <div className="home__row">
        <Product
          id="1"
          title="first"
          image="https://m.media-amazon.com/images/I/91931AxlUPL._AC_SR175,263_QL70_.jpg"
          price="2"
          rating="5"
        />
        <Product
          id="2"
          title="second"
          image="https://m.media-amazon.com/images/I/91931AxlUPL._AC_SR175,263_QL70_.jpg"
          price="2"
          rating="5"
        />
        <Product
          id="3"
          title="third"
          image="https://m.media-amazon.com/images/I/91931AxlUPL._AC_SR175,263_QL70_.jpg"
          price="2"
          rating="3"
        />

        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </>
  );
}

export default HomePage;
