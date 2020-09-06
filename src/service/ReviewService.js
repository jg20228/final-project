import axios from "axios";

const REVIEW_API_BASE_URL = "http://localhost:8080/review";
//const REVIEW_API_BASE_URL = "http://192.168.0.28:8080/review";

class ReviewService {
  //리뷰 게시판 이동
  fetchReview() {
    return axios.get(REVIEW_API_BASE_URL + "");
  }

  //리뷰 자세히보기
  reviewDetail(reviewId) {
    console.log("reviewDetail");
    return axios.post(REVIEW_API_BASE_URL + "_detail/" + reviewId);
  }

  //리뷰 등록
  insertReview() {
    console.log("insertReview");
    return axios.post(REVIEW_API_BASE_URL);
  }

  //리뷰 수정
  updateReview() {
    console.log("updateReview");
    return axios.put(REVIEW_API_BASE_URL);
  }

  //리뷰 삭제
  deleteReview(reviewId) {
    return axios.delete(REVIEW_API_BASE_URL + "/" + reviewId);
  }
}

export default ReviewService;
