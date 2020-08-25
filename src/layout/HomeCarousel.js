import React from "react";
import Carousel from "nuka-carousel";
import imgA from "../homeimg/main1.jpg";
import imgB from "../homeimg/main2.jpg";
import imgC from "../homeimg/main3.jpg";
import imgD from "../homeimg/main4.jpg";
import imgE from "../homeimg/main5.jpg";
import imgF from "../homeimg/main6.jpg";
import Axios from "axios";

export default class extends React.Component {
  state = {
    homeCarousel: [
      {
        id: "",
        title: "",
        thumb: "",
        price: "",
        disc: "",
      },
    ],
  };

  componentDidMount() {
    console.log("componentDidMount");
    Axios.get("http://192.168.0.103:8080/list2")
      // 응답(성공)
      .then(function (response) {
        console.log(response);
      })
      // 응답(실패)
      .catch(function (error) {
        console.log(error);
      })
      // 응답(항상 실행)
      .then(function () {
        // ...
      });
  }

  handleCreate = (data) => {
    const { homeCarousel } = this.state;
    this.setState({
      homeCarousel: homeCarousel.concat({
        ...data,
      }),
    });
    console.log("123214124" + this.state);
  };

  render() {
    return (
      <Carousel
        onCreate={this.handleCreate}
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
