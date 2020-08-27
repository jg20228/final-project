import React, { useState } from "react";
import shopB from "../images/img/shopbanner.jpg";
import shop_item from "../images/img/shop_item.gif";
import Grid from "@material-ui/core/Grid";

import styles from "../css/Shop.css";
import Axios from "axios";

const test = async () => {
  let testData = await Axios("http://192.168.0.103:8989/test/index");
  console.log(testData);
};

const Unit = () => {
  test();
  return (
    <Grid container>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <img className="banner" src={shopB} alt="" />
      </Grid>
      <Grid item xs={2}></Grid>

      <Grid item xs={12}>
        <div className="padding_size60"></div>
      </Grid>

      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <div>
          <p className="shop_font">Set Products</p>
        </div>
      </Grid>
      <Grid item xs={2}></Grid>

      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <hr className="line" />
      </Grid>
      <Grid item xs={2}></Grid>

      <Grid item xs={2}></Grid>
      <Grid item xs={3}>
        <img className="mainBody" src={shop_item} alt="" />
      </Grid>

      <Grid item xs={3}>
        <img className="mainBody" src={shop_item} alt="" />
      </Grid>

      <Grid item xs={3}>
        <img className="mainBody" src={shop_item} alt="" />
      </Grid>
      <Grid item xs={2}></Grid>

      <Grid item xs={12}>
        <div className="padding_size60"></div>
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <div>
          <p className="shop_font">SINGLE PRODUCTS</p>
        </div>
      </Grid>
      <Grid item xs={2}></Grid>

      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <hr className="line" />
      </Grid>
      <Grid item xs={2}></Grid>

      <Grid item xs={2}></Grid>

      <Grid item xs={3}>
        <img className="mainBody" src={shop_item} alt="" />
      </Grid>

      <Grid item xs={3}>
        <img className="mainBody" src={shop_item} alt="" />
      </Grid>

      <Grid item xs={3}>
        <img className="mainBody" src={shop_item} alt="" />
      </Grid>

      <Grid item xs={2}></Grid>
    </Grid>
  );
};

export default Unit;
