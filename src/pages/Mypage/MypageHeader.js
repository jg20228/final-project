import React from "react";
import { Grid } from "@material-ui/core";
import imgA from "../../images/img4/userProfile.png";

const MypageHeader = () => {
  return (
    <Grid container>
      <Grid item xs={5} className="profile">
        <Grid container>
          <Grid item xs={3}>
            <img src={imgA} alt="" />
          </Grid>
          <Grid item xs={9}>
            <p className="member">김성수님 안녕하세요. </p>
            <p className="fontsmall">누적 구매 금액: 0원</p>
          </Grid>
        </Grid>
      </Grid>
      <div className="line"></div>
      <Grid item xs={3}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xs={12}>
            <p className="fontsmall">포인트</p>
            <p className="bold">2,000</p>
          </Grid>
        </Grid>
      </Grid>
      <div className="line"></div>
      <Grid item xs={3}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xs={12}>
            <p className="fontsmall">쿠폰</p>
            <p className="bold">0</p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MypageHeader;
