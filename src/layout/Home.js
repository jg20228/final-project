import React from "react";
import Banner from "./Banner";
import HomeCarousel from "./HomeCarousel";
import styles from "../css/home.css";
import Product from "./Product";
import Review from "./Review";
import { FormHelperText, Grid } from "@material-ui/core";
import imgA from "../homeimg/bot_img_event.jpg";
import imgB from "../homeimg/bot_img_review.gif";
import imgC from "../homeimg/bot_left_img1.jpg";
import imgD from "../homeimg/bot_top_img1.jpg";

const Home = () => {
  return (
    <div>
      <HomeCarousel />
      <div className="padding80px"></div>
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Banner />
          <p>아르아르는 생활용품 안전의 새로운 기준을 만들어 갑니다.</p>
          <div className="padding80px"></div>
          <Grid container>
            <Grid item xs={1}></Grid>

            <Grid item xs={5}>
              <div className="padding80px"></div>
              <p>Product</p>
              <Product />
            </Grid>
            <Grid item xs={1}></Grid>

            <Grid item xs={5}>
              <Review />
            </Grid>
          </Grid>
          <Grid container>
            <div className="padding80px"></div>
            <div className="bot_box">
              <Grid item xs={6}>
                <div>
                  <img className="bot_img_left" src={imgC} alt="" />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div>
                  <div>
                    <img className="bot_img_top" src={imgD} alt="" />
                  </div>
                  <div className="a">
                    <div>
                      <img className="bot_img_bot1" src={imgA} alt="" />
                    </div>
                    <div>
                      <img className="bot_img_bot2" src={imgB} alt="" />
                    </div>
                  </div>
                </div>
              </Grid>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      <div className="padding80px"></div>
      <div className="padding80px"></div>
    </div>
  );
};

export default Home;
