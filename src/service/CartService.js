import React, { Component } from "react";
import Axios from "axios";

//const CART_API_BASE_URL = "http://localhost:8080/shop_cart";
const CART_API_BASE_URL = "http://192.168.0.28:8080/shop_cart";

class CartService extends Component {
  //QNA 등록
  insertCart(userId) {
    console.log("insertQnA");
    return Axios.post(CART_API_BASE_URL + "/" + userId);
  }

  //QNA 수정
  updateCart() {
    console.log("updateQnA");
    return Axios.put(CART_API_BASE_URL);
  }

  //QNA 삭제
  deleteCart(cartId) {
    console.log("deleteQnA");
    return Axios.delete(CART_API_BASE_URL + "/" + cartId);
  }
}

export default CartService;
