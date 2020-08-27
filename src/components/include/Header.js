import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import styles from "../../css/Header.css";
import aboutA from "../../images/img/header.png";

const Header = () => {
  return (
    <Grid container className="header">
      <div className="padding_box"></div>
      <div className="header_box">
        <Grid item xs={2}></Grid>
        <Grid item xs={3}>
          <div>
            <Link to="/">
              <img className="head_img" src={aboutA} alt="" />
            </Link>
          </div>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={4}>
          <Grid container>
            <div className="header_box">
              <Grid item xs={1}>
                <Link to="/shop">
                  <p>SHOP </p>
                </Link>
              </Grid>
              <div>
                <Link to="/about">
                  <p>ABOUT </p>
                </Link>
              </div>
              <div>
                <Link to="/review">
                  <p>REVIEW </p>
                </Link>
              </div>
              <div>
                <Link to="/cscenter">
                  <p>CS_CENTER</p>
                </Link>
              </div>
              <div>
                <Link to="/mypage">
                  <p>MyPage</p>
                </Link>
              </div>
              <div>
                <Link to="/cart">
                  <p>Cart</p>
                </Link>
              </div>
              <div>
                <Link to="/signin">
                  <p>signin</p>
                </Link>
              </div>

              <Link onClick={() => window.scrollTo(0, 0)} to="/signup">
                <p>signup</p>
              </Link>

              <Link to="/payment">
                <p>payment</p>
              </Link>

              <Link to="/shop/detail">
                <p>detail</p>
              </Link>
            </div>
          </Grid>
        </Grid>
      </div>
      <Grid item xs={2}></Grid>
    </Grid>
  );
};

export default Header;
