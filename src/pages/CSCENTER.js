import React from "react";
import { Grid, Button } from "@material-ui/core";
import aboutA from "../images/img4/banner.jpg";
import CSCENTER_BUTTON from "../components/Body/CSCENTER_BUTTON";
import styles from "../css/CSCENTER.css";
import CSCENTER1st from "../components/Body/CSCENTER1st";
import CSCENTER2nd from "../components/Body/CSCENTER2nd";
import CSCENTER3rd from "../components/Body/CSCENTER3rd";
import CSCENTER4th from "../components/Body/CSCENTER4th";
import { Link } from "react-router-dom";

const CSCENTER = () => {
  return (
    <Grid container>
      <Grid item xs={"auto"}>
        <img className="banner" src={aboutA} alt="" />
      </Grid>
      <Grid item xs={3}></Grid>

      <Grid item xs={6}>
        <Grid container>
          <Grid item xs={12}>
            <CSCENTER_BUTTON />
          </Grid>
          <Grid item xs={12}>
            <div className="padding_size40"></div>
          </Grid>
          <Grid item xs={12}>
            <p> * 버튼을 누르면 자동으로 이동합니다.</p>
          </Grid>
          <Grid item xs={12}>
            <hr />
          </Grid>
          <Grid item xs={12}>
            <CSCENTER1st />
          </Grid>
          <Grid item xs={12} className="grid">
            <CSCENTER2nd />
          </Grid>
          <Grid item xs={12}>
            <CSCENTER3rd />
          </Grid>
          <Grid item xs={12} className="grid">
            <CSCENTER4th />
          </Grid>
        </Grid>
        <Grid item xs={12} className="padding_size40"></Grid>
        <Grid item xs={12} className="centerbox">
          추가로 궁금하신 점이 있으신가요?
        </Grid>
        <Grid item xs={12} className="padding_size40"></Grid>
        <Grid item xs={12} className="centerbox">
          <Link to="/mypage/qna">
            <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
            >
              Q&A
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} className="padding_size40"></Grid>
        <Grid item xs={12} className="padding_size40"></Grid>
      </Grid>
      <Grid item xs={3}></Grid>
    </Grid>
  );
};

export default CSCENTER;
