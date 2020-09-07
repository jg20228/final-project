import React from "react";
import { Grid, TextField } from "@material-ui/core";
import styles from "../css/Payment.css";
import Pay from "../components/Pay";

const Payment = () => {
  return (
    <div className="grayBack">
      <Grid container>
        <div className="p_center">결제하기</div>
        <Grid item xs={12}>
          <div className="padding_size70"></div>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <Grid container>
            <Grid className="whiteBack" item xs={5}>
              <Grid container>
                <Grid item xs={12}>
                  주문/배송정보
                </Grid>
                <Grid item xs={6}>
                  <TextField id="standard-basic" defaultValue="Hello World" />
                </Grid>
                <Grid item xs={6}>
                  <TextField id="standard-basic" defaultValue="Hello World" />
                </Grid>
                <Grid item xs={12}>
                  <TextField id="standard-basic" defaultValue="Hello World" />
                </Grid>
                <Grid item xs={12}>
                  배송지 정보
                </Grid>
                <Grid item xs={6}>
                  <TextField id="standard-basic" defaultValue="Hello World" />
                </Grid>
                <Grid item xs={6}>
                  <TextField id="standard-basic" defaultValue="Hello World" />
                </Grid>
                <Grid item xs={12}>
                  <TextField id="standard-basic" defaultValue="Hello World" />
                </Grid>
                <Grid item xs={12}>
                  <TextField id="standard-basic" defaultValue="Hello World" />
                </Grid>
                <Grid item xs={12}>
                  배송메모
                </Grid>
                <Grid item xs={12}>
                  <TextField id="standard-basic" defaultValue="Hello World" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid className="whiteBack" item xs={5}>
              <Grid container>
                <Grid item xs={12}>
                  주문 상품 정보
                </Grid>
                <Grid item xs={12}>
                  물품1
                </Grid>
                <Grid item xs={12}>
                  물품2
                </Grid>
                <Grid item xs={12}>
                  상품 가격 203000
                </Grid>
                <Grid item xs={12}>
                  배송비 3000
                </Grid>
                <Grid item xs={12}>
                  포인트 사용 -2000
                </Grid>
                <Grid item xs={12}>
                  총 결제금액 204,000
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div className="padding_size70"></div>
          <Grid container>
            <Grid className="whiteBack" item xs={5}>
              <Grid container>
                <Grid item xs={12}>
                  쿠폰/포인트
                </Grid>
                <Grid item xs={12}>
                  포인트 보유 2000
                </Grid>
                <Grid item xs={12}>
                  2000 전액 사용
                </Grid>
                <Grid item xs={12}>
                  2000 포인트 이상 보유 및 ￦1 이상 구매시 사용가능
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
          <div className="padding_size70"></div>

          <Grid container>
            <Grid className="whiteBack" item xs={5}>
              <Grid container>
                <Grid item xs={12}>
                  결제수단
                </Grid>
                <Grid item xs={12}>
                  신용카드
                </Grid>
                <Grid item xs={12}>
                  실시간계좌이체
                </Grid>
                <Grid item xs={12}>
                  가상계좌
                </Grid>
                <Grid item xs={12}>
                  4,020 포인트 적립예정
                </Grid>
                <Grid item xs={12}>
                  <Pay />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
          <div className="padding_size70"></div>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
};

export default Payment;
