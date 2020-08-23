import React from "react";
import Carousel from "nuka-carousel";
import imgA from "../homeimg/main1.jpg";
import imgB from "../homeimg/main2.jpg";
import imgC from "../homeimg/main3.jpg";
import imgD from "../homeimg/main4.jpg";
import imgE from "../homeimg/main5.jpg";
import imgF from "../homeimg/main6.jpg";

export default class extends React.Component {
  render() {
    return (
      <Carousel
        wrapAround={true}
        autoplay={true}
        autoplayInterval={4000}
        speed={2000}
        withoutControls={true}
      >
        <img src={imgA} alt="" />
        <img src={imgB} alt="" />
        <img src={imgC} alt="" />
        <img src={imgD} alt="" />
        <img src={imgE} alt="" />
        <img src={imgF} alt="" />
      </Carousel>
    );
  }
}
