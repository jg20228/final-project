import React, { Component } from "react";
import imgA from "../images/banner_qna.jpg";
import NoticeBoard from "../components/NoticeBoard";
import { Grid } from "@material-ui/core";

class Notice extends Component {
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={12}>
                <img src={imgA} alt="" />
              </Grid>
              <Grid item xs={12}>
                <NoticeBoard />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </div>
    );
  }
}

export default Notice;
