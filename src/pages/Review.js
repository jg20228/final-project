import React, { useEffect, useState, useRef } from "react";
import { Grid, Button } from "@material-ui/core";
import reviewA from "../images/img3/review_banner.jpg";
import styles from "../css/Review.css";
import ReviewTable from "../components/ReviewTable";
import ReviewService from "../service/ReviewService";
import Axios from "axios";

const Review = () => {
  const [reviewData, setReviewData] = useState([]);
  const test = async () => {
    console.log("fetchReview");
    let res = await Axios.get("http://localhost:8080/review");
    //let res = await Axios.get("http://192.168.0.103:8080/review");
    setReviewData(res.data);
  };

  useEffect(() => {
    test();
  }, []);
  return (
    <Grid container>
      <Grid item xs={2}>
        <div></div>
      </Grid>

      <Grid item xs={8}>
        <Grid container>
          <Grid item xs={12}>
            <img className="banner" src={reviewA} alt="" />
          </Grid>
          <Grid item xs={12}>
            <div className="padding_size60"></div>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={2}>
        <div></div>
      </Grid>

      <Grid item xs={2}>
        <div></div>
      </Grid>

      <Grid item xs={8}>
        <Grid container>
          <Grid item xs={12}>
            전체(0004) | 포토 구매평(000)
          </Grid>
          <Grid item xs={12}>
            <div className="padding_size60"></div>
          </Grid>

          <Grid item xs={12}>
            <ReviewTable reviewData={reviewData} />
          </Grid>

          <Grid item xs={12}>
            <div className="padding_size60"></div>
          </Grid>
          <Grid item xs={11}></Grid>
          <Grid item xs={1}>
            <Button variant="contained" color="secondary">
              글쓰기
            </Button>
          </Grid>

          {/* 검색구간 */}
          <Grid item xs={12}>
            {/*  <div className="padding_size60">검색</div> */}
          </Grid>
          {/* 페이징 */}
          <Grid item xs={12}>
            {/* <div className="padding_size60">페이징</div> */}
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={2}>
        <div></div>
      </Grid>
    </Grid>
  );
};

export default Review;
