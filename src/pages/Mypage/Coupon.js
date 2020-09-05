import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Side from "./Side";
import MypageHeader from "./MypageHeader";
import MypageCouponTable from "./MypageCouponTable";
import MyPageService from "../../service/MyPageService";

const Coupon = () => {
  const [mypageCoupon, setMypageCoupon] = useState([]);
  const test = async () => {
    console.log("mypageCoupon");
    let res = await MyPageService.mypageCoupon(3);
    setMypageCoupon(res.data);
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
                <MypageCouponTable mypageCoupon={mypageCoupon} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
};

export default Coupon;
