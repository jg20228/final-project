import axios from "axios";

//const MYPAGE_API_BASE_URL = "http://localhost:8080/shop_mypage/";
const MYPAGE_API_BASE_URL = "http://192.168.0.28:8080/shop_mypage/";

class MyPageService {
  mypageOrder(userId) {
    console.log("myPageOrder");
    return axios.post(MYPAGE_API_BASE_URL + userId + "/order");
  }
  mypageCancle(userId) {
    console.log("myPageCart");
    return axios.post(MYPAGE_API_BASE_URL + userId + "/cancle");
  }

  mypagePoint(userId) {
    console.log("mypagePoint");
    return axios.post(MYPAGE_API_BASE_URL + userId + "/point");
  }

  mypageUpdate(userId) {
    console.log("mypageUpdate");
    return axios.post(MYPAGE_API_BASE_URL + userId + "/update");
  }

  mypageWithdrawal(userId) {
    console.log("mypageWithdrawal");
    return axios.post(MYPAGE_API_BASE_URL + userId + "/withdrawal");
  }

  mypageWish(userId) {
    console.log("myPageWishList");
    return axios.post(MYPAGE_API_BASE_URL + userId + "/wish_list");
  }

  mypageWishDelete(wishId) {
    console.log("mypageWishDelete");
    return axios.delete(MYPAGE_API_BASE_URL + wishId + "/wish_list");
  }

  mypageCoupon(userId) {
    console.log("myPageCancle");
    return axios.post(MYPAGE_API_BASE_URL + userId + "/coupon");
  }

  mypageQnA(userId) {
    console.log("mypageQnA");
    return axios.post(MYPAGE_API_BASE_URL + userId + "/qna");
  }
}

export default new MyPageService();
