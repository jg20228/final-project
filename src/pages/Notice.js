import React, { Component, useEffect, useState } from "react";
import imgA from "../images/banner_notice.jpg";
import NoticeBoard from "../components/NoticeBoard";
import { Grid } from "@material-ui/core";
import Axios from "axios";

const Notice = () => {
  const [myNotice, setMyNotice] = useState([]);
  const test = async () => {
    console.log("mypageCoupon");
    //let res = await Axios.get("http://localhost:8080/notice");
    let res = await Axios.get("http://192.168.0.103:8080/notice");
    setMyNotice(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    test();
  }, []);
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
              <NoticeBoard myNotice={myNotice} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </div>
  );
};

export default Notice;
