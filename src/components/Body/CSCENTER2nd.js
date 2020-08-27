import React from "react";
import { Button, Grid } from "@material-ui/core";

const CSCENTER2nd = () => {
  return (
    <div>
      <Grid item xs={12}>
        <div className="padding_size40"></div>
      </Grid>
      <Grid item xs={12}>
        <div className="flex_box">
          <div className="blue_box"></div>
          <p className="cs_title">계좌이체</p>
          <p className="cs_title2"> Account Transfer</p>
        </div>
        <div className="padding_size40"></div>
        <p className="sub_title"> 계좌번호</p>
        <p className="cs_content">xx은행 000-000000-00-000</p>
        <p className="cs_content">예금주 : OOO</p>
        <p>
          무통장 송금시 예금주와 입금액을 다시 한번 확인 해주시길 바랍니다.
          <br />* 오후 4시 이전 입금건은 당일 발송 처리됩니다.
          <br />* 현금영수증 발급은 구매일로부터 5일 이내에 가능합니다.
        </p>
        <div className="padding_size40"></div>
      </Grid>
      <Grid item xs={12}>
        <hr className="line" />
      </Grid>
      <Grid item xs={12}>
        <div className="flex_box_around">
          <p className="sub_title"> 환불계좌</p>
          <div>
            <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
            >
              주문내역
            </Button>
          </div>
        </div>
        <p>
          * 무통장 송금 결제시 환불계좌를 정확히 입력해주시기 바랍니다.
          <br />* 환불 과정 중 고객님의 부주의로 인한 사고가 발생할 경우 당사가
          책임지지 않습니다.
          <br />* 입력하신 환불계좌는 '회원정보>주문내역>주문상세내역'을 통해
          확인이 가능하며, 계좌를 잘못 입력하신 경우 아르아르 고객센터로
          문의해주시면 빠른 처리 도와드리겠습니다.
        </p>
      </Grid>
      <Grid item xs={12}>
        <div className="padding_size40"></div>
      </Grid>
    </div>
  );
};

export default CSCENTER2nd;
