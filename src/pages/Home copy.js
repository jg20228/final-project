import React, { useEffect, useState } from "react";
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
import HomeCarouselcopy from "../components/Home/HomeCarousel";

const Home = () => {
  const [carousels, setCarousel] = useState([]);
  const [banner, setBanner] = useState([]);
  const [product, setProduct] = useState([]);
  const [review, setReview] = useState([]);

  const getContents = async () => {
    console.log("!(!");
    let res = await MainService.fetchHome();
    console.log(res.data.homeAdResoDto);
    setCarousel({ data: res.data.homeAdResoDto });
    setBanner({ data: res.data.homeNoticeRespDto });
    setProduct({ data: res.data.homeProductRespDto });
    setReview({ data: res.data.homeReviewRespDto });
    console.log("!)");
  };

  useEffect(() => {
    getContents();
  }, []);
  return (
    <div>
      <HomeCarouselcopy carousels={carousels} />
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
