import React from "react";
import Slider from "react-slick";
import imgA from "../../images/homeimg/item1.png";
import imgB from "../../images/homeimg/item2.png";
import imgC from "../../images/homeimg/item3.png";
import imgD from "../../images/homeimg/main_review1.jpg";
import imgE from "../../images/homeimg/main_review2.jpg";
import styles from "../../css/Product.css";
import { Grid } from "@material-ui/core";

class Product extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <Slider {...settings}>
        <div>
          <img className="img" src={imgA} alt="" />
          <p>여기에 상품 설명</p>
        </div>
        <div>
          <img className="img" src={imgB} alt="" />
          <p>여기에 상품 설명</p>
        </div>
        <div>
          <img className="img" src={imgC} alt="" />
          <p>여기에 상품 설명</p>
        </div>
        <div>
          <img className="img" src={imgA} alt="" />
          <p>여기에 상품 설명</p>
        </div>
        <div>
          <img className="img" src={imgB} alt="" />
          <p>여기에 상품 설명</p>
        </div>
        <div>
          <img className="img" src={imgC} alt="" />
          <p>여기에 상품 설명</p>
        </div>
      </Slider>
    );
  }
}
export default Product;
