import React from "react";
import Slider from "react-slick";
import styles from "../../css/Product.css";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import MainService from "../../service/MainService";

class Product extends React.Component {
  render() {
    let { products } = this.props;
    console.log(products);
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
        {products.map((item) => (
          <div key={item.id}>
            <Link to={"/shop/detail/" + item.id} className="img__">
              <img
                className="img"
                src={MainService.imgRoot() + item.thumb}
                alt=""
              />
            </Link>
            <div className="center">
              <p>{item.title}</p>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </Slider>
    );
  }
}
export default Product;
