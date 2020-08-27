import React, { Component } from "react";
import Axios from "axios";

class GetTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  getData = () => {
    Axios.get("url")
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
        {data.map((dtoName) => ({
          /* <ComponentDto key={dtoName.id} content={dtoName.content} /> */
        }))}
      </div>
    );
  }
}
export default GetTest;
