import React, { Component } from "react";
import Axios from "axios";

//const REVIEW_API_BASE_URL = "http://localhost:8080/review";
const REVIEW_API_BASE_URL = "http://192.168.0.28:8080/review";

class ReviewService extends Component {
  //리뷰 자세히보기
  reviewDetail(userId) {
    console.log("reviewDetail");
    return Axios.post(REVIEW_API_BASE_URL + "_detail/" + userId);
  }

  //리뷰 게시판
  fetchReview() {
    console.log("fetchReview");
    return Axios.get(REVIEW_API_BASE_URL);
  }

  //리뷰 등록
  insertReview() {
    console.log("insertReview");
    return Axios.post(REVIEW_API_BASE_URL);
  }

  //리뷰 수정
  updateReview() {
    console.log("updateReview");
    return Axios.put(REVIEW_API_BASE_URL);
  }

  //리뷰 삭제
  deleteReview(reviewId) {
    return Axios.delete(REVIEW_API_BASE_URL);
  }
}

export default ReviewService;
