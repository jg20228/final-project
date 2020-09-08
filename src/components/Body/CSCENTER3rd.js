import React from "react";
import { Button, Grid } from "@material-ui/core";
import styles from "../../css/CSCENTER.css";

const CSCENTER3rd = () => {
  return (
    <div>
      <Grid item xs={12}>
        <div className="padding_size40"></div>
      </Grid>
      <Grid item xs={12}>
        <div className="flex_box">
          <div className="blue_box"></div>
          <p className="cs_title">배송안내</p>
          <p className="cs_title2"> Delivery Instruction</p>
        </div>
        <div className="padding_size40"></div>
        <div className="flex_box_around">
          <p className="sub_title"> 배송조회</p>
          <div>
            <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
            >
              배송조회
            </Button>
          </div>
        </div>
        <p className="cs_content">
          * CJ대한통운과 제휴 계약을 통해 제품을 안전하고 신속하게 고객님의
          집으로 배송해드립니다.
        </p>
        <p className="cs_content">
          * 제품이 발송되면 배송 확인 이메일에 안내된 조회 번호를 통해
          www.cj.com에서 배송 상황을 조회 하실 수 있습니다.
        </p>
        <div className="padding_size40"></div>
      </Grid>
      <Grid item xs={12}>
        <hr />
      </Grid>
      <Grid item xs={12}>
        <p className="sub_title"> 배송료</p>
        <p>기본 배송료 3,000원</p>
        <p>(50,000원 이상 구매 시 무료배송)</p>
        <p>* 제주도 : 3,000원 / 도서산간지역: 5,000원 추가</p>
      </Grid>
      <Grid item xs={12}>
        <div className="padding_size40"></div>
      </Grid>
    </div>
  );
};

export default CSCENTER3rd;
