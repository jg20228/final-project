import React from "react";
import { Button, Grid } from "@material-ui/core";
import styles from "../../css/CSCENTER.css";

const CSCENTER4th = () => {
  return (
    <div>
      <Grid item xs={12}>
        <div className="padding_size40"></div>
      </Grid>
      <Grid item xs={12}>
        <div className="flex_box">
          <div className="blue_box"></div>
          <p className="cs_title">교환반품</p>
          <p className="cs_title2"> Returncs & Exchanges</p>
        </div>
        <div className="padding_size40"></div>
        <p className="sub_title"> 반품주소</p>
        <p className="cs_content">경기도 김포시 고촌읍 태리 927-1 봄날창고</p>
        <p>
          * 교환반품 접수(고객센터 또는 홈페이지 Q&A를 먼저 해주신 후 상품을
          보내주셔야 합니다.)
          <br />* 교환반품은 상품을 수령하신 날로부터 7일 이내에 반품 조건을
          충족하는 한에서 가능합니다.
          <br />* 교환반품 신청 후 5일 이내(주말, 공휴일 제외) 물류센터에
          교환반품 상품이 도착하여야 합니다.
          <br />* 사은품이 함께 배송된 경우, 함께 보내주셔야 교환환불이
          가능합니다.
        </p>
        <div className="padding_size40"></div>
      </Grid>
      <Grid item xs={12}>
        <hr />
      </Grid>
      <Grid item xs={12}>
        <div className="flex_box_around">
          <p className="sub_title"> 환불조치</p>
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
          * 반품 완료 여부를 확인한 후 3영업일 이내에 환불해드리거나 환불에
          필요한 조치를 취해드립니다.
          <br />* 환불된 결제대금은 '회원정보>주문 상세내역' 또는 가입 계정과
          SMS를 통해 확인하실 수 있습니다.
          <br />* 신용카드로 결제하신 경우 승인 취소 처리로 결제 대금이 청구되지
          않게 합니다. 단, 신용카드 결제일자에 맞춰 대금이 청구될 수 있으며 이
          경우 익월 신용카드 대금 청구시 환급처리됩니다. <br />* 실시간
          계좌이체로 결제하신 경우 회원님의 은행 계좌로 환불해드립니다.
        </p>
      </Grid>
      <Grid item xs={12}>
        <div className="padding_size40"></div>
      </Grid>
    </div>
  );
};

export default CSCENTER4th;
