import React from "react";
import { Grid, Button } from "@material-ui/core";
import aboutA from "../../img4/banner.jpg";
import CSCENTER_BUTTON from "./CSCENTER_BUTTON";
import styles from "../../css/CSCENTER.css";
import CSCENTER1st from "./CSCENTER1st";
import CSCENTER2nd from "./CSCENTER2nd";
import CSCENTER3rd from "./CSCENTER3rd";
import CSCENTER4th from "./CSCENTER4th";

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
            <hr className="line" />
          </Grid>
          <Grid item xs={12}>
            <CSCENTER1st />
          </Grid>
          {/*  */}
          <Grid item xs={12} className="grid">
            <CSCENTER2nd />
          </Grid>
          {/*  */}
          <Grid item xs={12}>
            <CSCENTER3rd />
          </Grid>
          {/*  */}
          <Grid item xs={12} className="grid">
            <CSCENTER4th />
          </Grid>
        </Grid>
        {/*  */}
        <Grid item xs={12} className="padding_size40"></Grid>
        <Grid item xs={12} className="centerbox">
          추가로 궁금하신 점이 있으신가요?
        </Grid>
        <Grid item xs={12} className="padding_size40"></Grid>
        <Grid item xs={12} className="centerbox">
          <Button variant="contained" color="primary" href="#contained-buttons">
            Q&A
          </Button>
        </Grid>
        <Grid item xs={12} className="padding_size40"></Grid>
        <Grid item xs={12} className="padding_size40"></Grid>
      </Grid>
      <Grid item xs={3}></Grid>
    </Grid>
  );
};

export default CSCENTER;
