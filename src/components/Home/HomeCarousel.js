import React from "react";
import Carousel from "nuka-carousel";
import imgA from "../../images/homeimg/main1.jpg";
import imgB from "../../images/homeimg/main2.jpg";
import imgC from "../../images/homeimg/main3.jpg";
import imgD from "../../images/homeimg/main4.jpg";
import imgE from "../../images/homeimg/main5.jpg";
import imgF from "../../images/homeimg/main6.jpg";
import Axios from "axios";

export default class extends React.Component {
  state = {
    homeCarousel: [
      {
        id: "",
        thumb: "",
        title: "",
        price: "",
        discounted: "",
        sale: "",
        newly: "",
        best: "",
      },
    ],
  };

  componentDidMount() {
    const { homeCarousel } = this.state;
    console.log(this.state);
    console.log("componentDidMount");
    Axios.get("http://localhost:8080/list2")
      // 응답(성공)
      .then(function (response) {
        console.log(response.data);
        this.setState({
          title: response.data.title,
        });
        console.log(this.state);
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
