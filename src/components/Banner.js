import React from "react";
import "../css/Banner.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
function Banner() {
  return (
    <div className="banner">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            loading="lazy"
            src="https://links.papareact.com/6ff"
            alt="background1"
            className="home__image "
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://links.papareact.com/gi1"
            alt="background2"
            className="home__image "
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://links.papareact.com/7ma"
            alt="background3"
            className="home__image "
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
