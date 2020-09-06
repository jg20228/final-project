import axios from "axios";
import { Router } from "react-router-dom";

const MAIN_API_BASE_URL = "http://localhost:8080";
//const MAIN_API_BASE_URL = "http://192.168.0.103:8080";

//미리 넣어둔 데이터 경로
const IMG_BASE_URL = "http://localhost:8080";
//const IMG_BASE_URL = "http://192.168.0.103:8080";

class MainService {
  //detail
  fetchDetail(productId) {
    return axios.get(MAIN_API_BASE_URL + "/shop_view/" + productId);
  }

  //login
  async login(data) {
    await axios({
      method: "post",
      url: MAIN_API_BASE_URL + "/oauth/jwt/common",
      data: data,
    }).then((response) => {
      console.log(response);
      if (response.status === 200) {
        //링크,바디,헤더(config-객체을 만들어서 담으면 됨)
        console.log(2, response.data);
        //웹 브라우저 localStorage에 저장 (나만의 static 공간)
        localStorage.setItem("jwtToken", response.data);
        document.location.href = "/";
        //alert("로그인 성공");
      }
    });
    return;
  }

  //logout
  logout(data) {
    return axios.post(MAIN_API_BASE_URL + "/logout", data);
  }
  //join
  join(data) {
    return axios.post(MAIN_API_BASE_URL + "/join", data);
  }

  //about 테이블 insert
  aboutPost(data) {
    return axios.post(MAIN_API_BASE_URL + "/about", data);
  }

  //img 경로 리턴
  imgRoot() {
    return IMG_BASE_URL;
  }
  //HOME페이지
  fetchHome() {
    return axios.get(MAIN_API_BASE_URL + "");
  }
  //SHOP페이지
  fetchShop() {
    console.log("SHOP");
    return axios.get(MAIN_API_BASE_URL + "/shop");
  }
  //상품 디테일
  fetchProductByID(productID) {
    console.log("fetchProductByID = ", productID);
    return axios.get(MAIN_API_BASE_URL + "/shop_view/" + productID);
  }
}

export default new MainService();
