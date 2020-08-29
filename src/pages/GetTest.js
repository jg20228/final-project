import React from "react";
import Axios from "axios";
import { Component } from "react";

class GetTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  getData = () => {
    Axios.get("http://192.168.0.25:8080/test/product/8")
      .then((res) => {
        return this.setState({ data: res.data });
      })
      .catch((res) => console.log(res));
  };

  componentDidMount() {
    this.getData();
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <img src={"http://192.168.0.25:8080" + data.thumb} alt="" />
      </div>
    );
  }
}
export default GetTest;
