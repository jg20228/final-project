import React, { useEffect, useState } from "react";
import MypageHeader from "./MypageHeader";
import Side from "./Side";
import { Grid } from "@material-ui/core";
import MypageWishListTable from "./MypageWishListTable";
import WishListService from "../../service/mypage/WishListService";
import Axios from "axios";

const WishList = () => {
  const [wishListData, setWishListData] = useState([]);
  const test = async () => {
    console.log("mypageWish");
    let res = await Axios.post(
      "http://localhost:8080/shop_mypage/wish_list/" + "2"
    );
    setWishListData(res.data);
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
                <MypageWishListTable wishListData={wishListData} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
};

export default WishList;
