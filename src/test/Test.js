import React, { Component } from "react";
import Axios from "axios";
import Listpage from "./lp";

class Test extends Component {
  state = {
    loading: false,
    homeCarousel: [],
  };

  componentDidMount() {
    console.log("componentDidMount");
    this.loadItem();
  }

  loadItem = async () => {
    Axios.get("http://localhost:8080/list2")
      .then(({ data }) => {
        console.log(data);
        console.log("setState전");
        this.setState({
          loading: true,
          homeCarousel: data,
        });
        console.log("setState후");
        console.log(data[0].id);
        console.log(this.state.homeCarousel[0].id);
      })
      .catch((e) => {
        // API 호출이 실패한 경우
        console.error(e); // 에러표시
        this.setState({
          loading: false,
        });
      });
  };

  render() {
    const { homeCarousel } = this.state;
    console.log("여기는 render");
    console.log(homeCarousel);

    return (
      <div>
        <Listpage Itemcard={homeCarousel} />
      </div>
    );
  }
}

export default Test;
