import axios from "axios";

const MYPAGE_API_BASE_URL = "http://localhost:8080/shop_mypage/";

class MyPageService {
  mypageOrder(userId) {
    console.log("myPageOrder");
    return axios.post(MYPAGE_API_BASE_URL + userId + "/order");
  }

  mypageWish(userId) {
    console.log("myPageWishList");
    return axios.post(MYPAGE_API_BASE_URL + userId + "/wish_list");
  }

  mypageCart(userId) {
    console.log("myPageCart");
    return axios.post(MYPAGE_API_BASE_URL + userId + "/cancle");
  }

  mypageCoupon(userId) {
    console.log("myPageCancle");
    return axios.post(MYPAGE_API_BASE_URL + userId + "/coupon");
  }

  mypagePoint(userId) {
    console.log("mypagePoint");
    return axios.post(MYPAGE_API_BASE_URL + userId + "/point");
  }

  mypageQnA(userId) {
    console.log("mypageQnA");
    return axios.post(MYPAGE_API_BASE_URL + userId + "/qna");
  }

  mypageUpdate(userId) {
    console.log("mypageUpdate");
    return axios.post(MYPAGE_API_BASE_URL + userId + "/update");
  }

  mypageWithdrawal(userId) {
    console.log("mypageWithdrawal");
    return axios.post(MYPAGE_API_BASE_URL + userId + "/withdrawal");
  }
}

export default new MyPageService();
