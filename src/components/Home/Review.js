import React from "react";
import Slider from "react-slick";
import imgA from "../../images/homeimg/main_review1.jpg";
import imgB from "../../images/homeimg/main_review2.jpg";
import styles from "../../css/Product.css";
import { Grid } from "@material-ui/core";

class Review extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider className="width" {...settings}>
        <div>
          <img className="rv_img" src={imgA} alt="" />
        </div>
        <div>
          <img className="rv_img" src={imgB} alt="" />
        </div>
      </Slider>
    );
  }
}
export default Review;
