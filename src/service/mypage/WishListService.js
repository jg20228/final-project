import Axios from "axios";

const WISH_API_BASE_URL = "http://localhost:8080/shop_mypage/wish_list";
//const WISH_API_BASE_URL = "http://192.168.0.28:8080/shop_mypage/wish_list";

class WishListService {
  //user의 wishList 보기
  showWish(userId) {
    console.log("showWish");
    return Axios.post(WISH_API_BASE_URL + userId);
  }
  //wish insert
  insertWish(userId, productId) {
    console.log("insertWish");
    return Axios.post(WISH_API_BASE_URL + "/" + userId + "/" + productId);
  }
  //wish delete
  deleteWish(userId, productId) {
    console.log("showWish");
    return Axios.delete(WISH_API_BASE_URL + "/" + userId + "/" + productId);
  }
}

export default WishListService;
