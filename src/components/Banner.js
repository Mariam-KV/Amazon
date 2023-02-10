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
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        className="carousel"
      >
        <a
          target="_blank"
          rel="noreferrer"
          className="banner__anchor"
          href="https://www.primevideo.com/?ref_=dvm_pds_amz_GE_lb_s_g_mkw_sGSBSjvUF-dc_pcrid_507092003712&mrntrk=slid__pgrid_123397624710_pgeo_1007469_x__adext__ptid_kwd-312570255760"
        >
          <div>
            <img
              loading="lazy"
              src="https://links.papareact.com/6ff"
              alt="background-carousel"
              className="home__image"
            />
          </div>
        </a>

        <a
          href="https://www.amazon.com/Audible-Books-and-Originals/b?ie=UTF8&node=18145289011"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <img
              loading="lazy"
              src="https://links.papareact.com/gi1"
              alt="background-carousel"
              className="home__image"
            />
          </div>
        </a>

        <a href="https://music.amazon.com/" target="_blank" rel="noreferrer">
          <div>
            <img
              loading="lazy"
              src="https://links.papareact.com/7ma"
              alt="background-carousel"
              className="home__image"
            />
          </div>
        </a>
      </Carousel>
    </div>
  );
}

export default Banner;
