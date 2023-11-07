import React from "react";
import { Carousel } from "react-responsive-carousel";
function ProductCarousel({ images }) {
  return (
    <div className="productDetails__left">
      <Carousel
        infiniteLoop
        showStatus={false}
        showIndicators={document.body.offsetWidth > 700 ? false : true}
        showArrows={false}
        showThumbs={document.body.offsetWidth > 700 ? true : false}
        interval={5000}
        className="productDetails__left__carousel"
      >
        {images.map((img) => {
          return (
            <img
              src={img}
              key={img}
              alt="carousel__image"
              loading="lazy"
              className="carousel__image"
            />
          );
        })}
      </Carousel>
    </div>
  );
}

export default ProductCarousel;
