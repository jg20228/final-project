import React from "react";
import Carousel from "nuka-carousel";
import styles from "../../css/Img.css";
import { Link } from "react-router-dom";
import MainService from "../../service/MainService";

const Banner = (props) => {
  const { banner } = props;
  console.log(banner);
  return (
    <Carousel
      wrapAround={true}
      autoplay={true}
      autoplayInterval={4000}
      speed={2000}
      withoutControls={true}
      height={200}
      initialSlideWidth={100}
      slidesToShow={3}
      slideWidth={1}
    >
      {banner.map((item) => (
        <div key={item.id}>
          <Link to={"/shop/detail/" + item.id} className="img__">
            <img
              className="img__"
              src={MainService.imgRoot() + item.thumb}
              alt=""
            />
          </Link>
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
