import React from "react";
import "./Banner.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import bannersData from "./bannersData";
function Banner() {
  return (
    <div className="banner">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        className="carousel"
      >
        {bannersData.map(({ href, img }) => (
          <a
            key={crypto.randomUUID()}
            target="_blank"
            rel="noreferrer"
            className="banner__anchor"
            href={href}
          >
            <div>
              <img
                loading="lazy"
                src={img}
                alt="background-carousel"
                className="home__image"
              />
            </div>
          </a>
        ))}
      </Carousel>
    </div>
  );
}

export default Banner;
