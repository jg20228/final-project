import axios from "axios";

//const MYPAGE_API_BASE_URL = "http://localhost:8080/shop_mypage";
const MYPAGE_API_BASE_URL = "http://192.168.0.103:8080/shop_mypage";
const config = {
  headers: {
    Authorization: "Bearer " + localStorage.getItem("jwtToken"),
  },
};

class MyPageService {
  mypageOrder(userId) {
    console.log("myPageOrder");
    console.log(config);
    return axios.post(MYPAGE_API_BASE_URL + "/order/" + userId, "data", config);
  }

  mypageCancle(userId) {
    console.log("mypageCancle");
    return axios.post(
      MYPAGE_API_BASE_URL + "/cancle/" + userId,
      "data",
      config
    );
  }

  mypageCoupon(userId) {
    console.log("mypageCoupon");
    return axios.post(
      MYPAGE_API_BASE_URL + "/coupon/" + userId,
      "data",
      config
    );
  }

  mypagePoint(userId) {
    console.log("mypagePoint");
    return axios.post(MYPAGE_API_BASE_URL + "/point/" + userId, "data", config);
  }

  mypageQnA(userId) {
    console.log("mypageQnA");
    return axios.post(MYPAGE_API_BASE_URL + "/qna/" + userId, "data", config);
  }

  mypageUpdate(userId) {
    console.log("mypageUpdate");
    return axios.post(
      MYPAGE_API_BASE_URL + "/update/" + userId,
      "data",
      config
    );
  }

  mypageWithdrawal(userId) {
    console.log("mypageWithdrawal");
    return axios.post(
      MYPAGE_API_BASE_URL + "/withdrawal/" + userId,
      "data",
      config
    );
  }
}

export default new MyPageService();
