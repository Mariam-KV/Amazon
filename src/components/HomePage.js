import React from "react";
import "../css/Home.css";
import Product from "./Product";
function HomePage() {
  return (
    <>
      <div className="home">
        <div>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="background"
          />
        </div>
      </div>
      <Product />
    </>
  );
}

export default HomePage;
