import React from "react";
import { Grid } from "@material-ui/core";
import MypageTable from "./MypageTable";
import styles from "../../css/mypage.css";
import Side from "./Side";
import MypageHeader from "./MypageHeader";

const Mypage = () => {
  return (
    <Grid container className="box">
      <Grid item xs={2}></Grid>
      <Grid item className="main" xs={8}>
        <Grid container>
          <Grid item className="" xs={2}>
            <Side />
          </Grid>
          <Grid item className="content" xs={10}>
            <MypageHeader />
            <Grid container className="boxcardtable">
              <Grid item>
                <MypageTable />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
};

export default Mypage;
