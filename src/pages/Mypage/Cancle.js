import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import MypageHeader from "./MypageHeader";
import Side from "./Side";
import MypageCancleTable from "./MypageCancleTable";
import MyPageService from "../../service/MyPageService";

const Cancle = () => {
  const [mypageCancle, setMypageCancle] = useState([]);
  const test = async () => {
    console.log("mypageCancle");
    let res = await MyPageService.mypageCancle(2);
    setMypageCancle(res.data);
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
                <MypageCancleTable mypageCancle={mypageCancle} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
};

export default Cancle;
