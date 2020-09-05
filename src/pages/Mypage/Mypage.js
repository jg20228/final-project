import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import MypageTable from "./MypageTable";
import styles from "../../css/mypage.css";
import Side from "./Side";
import MypageHeader from "./MypageHeader";
import MyPageService from "../../service/MyPageService";

const Mypage = () => {
  const [mypageData, setMypageData] = useState([]);
  const test = async () => {
    console.log("mypageOrder");
    //id값 수정
    let res = await MyPageService.mypageOrder(1);
    setMypageData(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    test();
  }, []);

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
                <MypageTable mypageData={mypageData} />
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
