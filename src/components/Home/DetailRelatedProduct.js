import React from "react";
import Slider from "react-slick";
import imgA from "../../images/homeimg/item1.png";
import imgB from "../../images/homeimg/item2.png";
import imgC from "../../images/homeimg/item3.png";
import imgD from "../../images/homeimg/main_review1.jpg";
import imgE from "../../images/homeimg/main_review2.jpg";
import styles from "../../css/Product.css";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import MainService from "../../service/MainService";

class DetailRelatedProduct extends React.Component {
  render() {
    let products = this.props.detailRelatedRespDto;
    console.log(products);
    var settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
    };
    return (
      <Slider {...settings}>
        {products.map((item) => (
          <div key={item.id}>
            {item.id}
            <Link to={"/shop/detail/" + item.id} className="img__">
              <img
                className="img"
                src={MainService.imgRoot() + item.thumb}
                alt=""
              />
            </Link>
            <p>{item.price}</p>
          </div>
        ))}
      </Slider>
    );
  }
}
export default DetailRelatedProduct;
