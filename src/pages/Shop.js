import React, { useState } from "react";
import shopB from "../images/img/shopbanner.jpg";
import shop_item from "../images/img/shop_item.gif";
import Grid from "@material-ui/core/Grid";

import styles from "../css/Shop.css";
import Axios from "axios";
import MainService from "../service/MainService";

const test = async () => {
  let shopData = await MainService.fetchShop();
  console.log(shopData.data);
};

const Unit = () => {
  test();
  const { banner } = shopData;
  console.log("shop");
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
      <Grid item xs={8}>
        <Grid container>
          <Grid item xs={4}>
            <img className="mainBody" src={shop_item} alt="" />
          </Grid>

          <Grid item xs={4}>
            <img className="mainBody" src={shop_item} alt="" />
          </Grid>

          <Grid item xs={4}>
            <img className="mainBody" src={shop_item} alt="" />
          </Grid>
        </Grid>
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
