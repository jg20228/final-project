import React from "react";
import Slider from "react-slick";
import imgA from "../../images/homeimg/main_review1.jpg";
import imgB from "../../images/homeimg/main_review2.jpg";
import styles from "../../css/Product.css";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import MainService from "../../service/MainService";

class Review extends React.Component {
  render() {
    let { reviews } = this.props;
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
        {reviews.map((item) => (
          <div key={item.id}>
            <Link to={"/shop/detail/" + item.id} className="img__">
              <img
                className="rv_img"
                src={MainService.imgRoot() + item.img}
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
export default Review;
