import React from "react";
import Axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: "Bearer " + localStorage.getItem("jwtToken"),
  },
};

const PostTest = async (response) => {
  console.log(1, response);
  let jwtToken = await Axios.post(
    "http://192.168.0.25:8080/",
    { data: "test01" },
    JSON.stringify(response),
    config
  );
  if (jwtToken.status === 200) {
    console.log(2, jwtToken.data);
    localStorage.setItem("jwtToken", jwtToken.data);
  }
};

export default PostTest;
