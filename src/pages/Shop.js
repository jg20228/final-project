import React, { useState, useEffect } from "react";
import shopB from "../images/img/shopbanner.jpg";
import shop_item from "../images/img/shop_item.gif";
import Grid from "@material-ui/core/Grid";

import styles from "../css/Shop.css";
import Axios from "axios";
import MainService from "../service/MainService";
import { Link } from "react-router-dom";

const Unit = () => {
  const [shopData, setShopData] = useState([]);
  const test = async () => {
    console.log("shop1");
    let res = await MainService.fetchShop();
    setShopData(res.data);
  };

  useEffect(() => {
    test();
  }, []);

  return (
    <Grid container direction="row" justify="space-between" alignItems="center">
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
          <p className="shop_font">SET PRODUCTS</p>
          <br />
        </div>
      </Grid>
      <Grid item xs={2}></Grid>

      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <hr />
      </Grid>
      <Grid item xs={2}></Grid>

      <Grid item xs={12}>
        <div className="padding_size60"></div>
      </Grid>

      <Grid item xs={2}></Grid>
      <Grid item xs={8} justify="space-between" alignItems="center">
        <Grid container>
          {shopData.map((item) => {
            if (item.categoryId === 2) {
              return (
                <Grid item xs={4} key={item.id}>
                  <Link to={"/shop/detail/" + item.id}>
                    <img
                      className="img__"
                      src={MainService.imgRoot() + item.thumb}
                      alt=""
                    />
                  </Link>
                  <div className="center">
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                  </div>
                </Grid>
              );
            }
            return null;
          })}
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
          <br />
        </div>
      </Grid>

      <Grid item xs={2}></Grid>

      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <hr />
      </Grid>
      <Grid item xs={2}></Grid>

      <Grid item xs={12}>
        <div className="padding_size60"></div>
      </Grid>

      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Grid container>
          {shopData.map((item) => {
            if (item.categoryId === 1) {
              return (
                <Grid item xs={4} key={item.id}>
                  <Link to={"/shop/detail/" + item.id}>
                    <img
                      className="img__"
                      src={MainService.imgRoot() + item.thumb}
                      alt=""
                    />
                  </Link>
                  <div className="center">
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                  </div>
                </Grid>
              );
            }
            return null;
          })}
        </Grid>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
};

export default Unit;
