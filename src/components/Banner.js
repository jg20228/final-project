import React from "react";
import Carousel from "nuka-carousel";
import imgA from "../images/homeimg/bannerimg1.jpg";
import imgB from "../images/homeimg/bannerimg2.jpg";
import imgC from "../images/homeimg/bannerimg3.jpg";

const Banner = () => {
  return (
    <Carousel
      wrapAround={true}
      autoplay={true}
      autoplayInterval={4000}
      speed={2000}
      slidesToShow={3}
      slideWidth={1}
      withoutControls={true}
    >
      <img src={imgA} />
      <img src={imgB} />
      <img src={imgC} />
      <img src={imgA} />
      <img src={imgB} />
      <img src={imgC} />
    </Carousel>
  );
};

export default Banner;
