import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Side from "./Side";
import MypageHeader from "./MypageHeader";
import MypageQnATable from "./MypageQnATable";
import MyPageService from "../../service/MyPageService";

const QnA = () => {
  const [mypageQnA, setMypageQnA] = useState([]);
  const test = async () => {
    console.log("mypageQnA");
    let res = await MyPageService.mypageQnA(2);
    setMypageQnA(res.data);
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
                <MypageQnATable mypageQnA={mypageQnA} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
};

export default QnA;
