import React, { useEffect, useState, Component } from "react";
import Banner from "../components/Home/Banner";
import HomeCarousel from "../components/Home/HomeCarousel";
import styles from "../css/home.css";
import Product from "../components/Home/Product";
import Review from "../components/Home/Review";
import { FormHelperText, Grid } from "@material-ui/core";
import imgA from "../images/homeimg/bot_img_event.jpg";
import imgB from "../images/homeimg/bot_img_review.gif";
import imgC from "../images/homeimg/bot_left_img1.jpg";
import imgD from "../images/homeimg/bot_top_img1.jpg";
import MainService from "../service/MainService";
import Axios from "axios";

class Homeopy extends Component {
  state = {
    carousels: [],
    banner: [],
    products: [],
    reviews: [],
  };

  // API 호출 함수 -당연히 바로 디비 접근 못함.
  getPosts = async () => {
    console.log("!(!");
    let res = await MainService.fetchHome();
    console.log(res.data.homeReviewRespDto);
    this.setState({ carousels: res.data.homeAdResoDto });
    this.setState({ banner: res.data.homeNoticeRespDto });
    this.setState({ products: res.data.homeProductRespDto });
    this.setState({ reviews: res.data.homeReviewRespDto });
    console.log(this.state);
    console.log("!)");
  };

  componentDidMount() {
    this.getPosts();
  }

  render() {
    let { carousels } = this.state;
    let { banner } = this.state;
    let { products } = this.state;
    let { reviews } = this.state;
    console.log("렌더링전");
    console.log(carousels);
    return (
      <div>
        <HomeCarousel carousels={carousels} />
        <div className="padding80px"></div>
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Banner banner={banner} />
            <p className="bannerFont">
              아르아르는 생활용품 안전의 새로운 기준을 만들어 갑니다.
            </p>
            <div className="padding80px"></div>
            <Grid container>
              <Grid item xs={1}></Grid>

              <Grid item xs={5}>
                <div className="padding80px"></div>
                <p className="Product_font">PRODUCTS</p>
                <Product products={products} />
              </Grid>
              <Grid item xs={1}></Grid>

              <Grid item xs={5}>
                <Review reviews={reviews} />
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
  }
}

export default Homeopy;
