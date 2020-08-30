import React, { Component } from "react";
import Carousel from "nuka-carousel";
import { Link } from "react-router-dom";
import MainService from "../../service/MainService";

class HomeCarousel extends Component {
  render() {
    let { carousels } = this.props;
    console.log(carousels);
    return (
      <Carousel
        onCreate={this.handleCreate}
        wrapAround={true}
        autoplay={true}
        autoplayInterval={4000}
        speed={2000}
        withoutControls={true}
        height={800}
      >
        {carousels.map((carousel) => (
          <div key={carousel.id}>
            <Link to={"/shop/detail/" + carousel.id} className="img__">
              <img src={MainService.imgRoot() + carousel.bgimg} alt="" />
            </Link>
          </div>
        ))}
      </Carousel>
    );
  }
}

export default HomeCarousel;
