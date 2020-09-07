import React, { useState, useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import CartTable from "../components/Body/CartTable";
import styles from "../css/Cart.css";
import CartService from "../service/CartService";
import Axios from "axios";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("jwtToken"),
    },
  };
  const test = async () => {
    console.log(1, "detail페이지");
    const res = await Axios.post(
      "http://localhost:8080/shop_cart/" + "1",
      "data",
      config
    );
    console.log(res.data);
    setCart(res.data);
  };

  useEffect(() => {
    test();
  }, []);

  return (
    <Grid container>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Grid container>
          <div className="flex">
            <p>장바구니 </p>
            <div className="padding_size10W"></div>
            <p>1</p>
          </div>
          <CartTable cart={cart} />
        </Grid>
        <div className="flex">
          <div className="flex">
            <div>
              <Button
                variant="contained"
                color="primary"
                href="#contained-buttons"
              >
                선택 상품 삭제
              </Button>
            </div>
            <div className="padding_size10W"></div>
            <div>
              <Button
                variant="contained"
                color="primary"
                href="#contained-buttons"
              >
                위시리스트 담기
              </Button>
            </div>
          </div>
          <div className="inline">
            <div>결제 금액</div>
            <div>44,000</div>
          </div>
        </div>
        <div className="padding_size45"></div>
        <div className="flex_center">
          <div>
            <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
            >
              쇼핑 계속하기
            </Button>
          </div>
          <div className="padding_size10W"></div>
          <div>
            <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
            >
              주문하기
            </Button>
          </div>
        </div>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
};

export default Cart;
