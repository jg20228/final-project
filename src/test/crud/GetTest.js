import React, { Component } from "react";
import Axios from "axios";
import src from "*.bmp";

class GetTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  getData = () => {
    Axios.get("http://192.168.0.25:8080/test/1")
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
        {data.map((product) => (
          <img src={data.thumb} alt="" />
        ))}
      </div>
    );
  }
}
export default GetTest;
