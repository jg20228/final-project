import React from "react";
import { Grid } from "@material-ui/core";
import reviewA from "../images/img3/review_banner.jpg";
import styles from "../css/Review.css";
import TableTest from "../components/TableTest";

const Review = () => {
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
            전체(0000) | 포토 구매평(000)
          </Grid>
          <Grid item xs={12}>
            <div className="padding_size60"></div>
          </Grid>

          <Grid item xs={12}>
            <TableTest />
          </Grid>

          <Grid item xs={12}>
            <div className="padding_size60"></div>
          </Grid>
          {/* 검색구간 */}
          <Grid item xs={12}>
            <div className="padding_size60">검색</div>
          </Grid>
          {/* 페이징 */}
          <Grid item xs={12}>
            <div className="padding_size60">페이징</div>
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
