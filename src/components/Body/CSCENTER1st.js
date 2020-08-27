import React from "react";
import { Button, Grid } from "@material-ui/core";

const CSCENTER1st = () => {
  return (
    <div>
      <Grid item xs={12}>
        <div className="padding_size40"></div>
      </Grid>
      <Grid item xs={12}>
        <div className="flex_box">
          <div className="blue_box"></div>
          <p className="cs_title">고객문의</p>
          <p className="cs_title2"> Customer Inquiry</p>
        </div>
        <div className="padding_size40"></div>
        <p className="sub_title"> PHONE</p>
        <p className="cs_content">1666-9680</p>
        <p>
          아르아르 고객센터 운영 시간은 아래와 같습니다.
          <br />
          평일(MON~FRI) <br />
          11:00~17:00 (lunch: 13:00~14:00) <br />
          SAT, SUN, Holiday off
        </p>
        <p>
          * 주말, 공휴일은 휴무입니다. 이메일 혹은 게시판을 이용해주시길
          바랍니다.
        </p>
        <div className="padding_size40"></div>
      </Grid>
      <Grid item xs={12}>
        <hr className="line" />
      </Grid>
      <Grid item xs={12}>
        <div className="flex_box_around">
          <p className="sub_title"> Q&A</p>
          <div>
            <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
            >
              Q&A
            </Button>
          </div>
        </div>
        <p>
          * 홈페이지 내 Q&A 게시판 혹은 1:1 채팅 상담으로 문의해주시기 바랍니다.
          <br />* 저희 상담원이 고객님의 소리에 빠르고 친절하게 응답하겠습니다.
        </p>
      </Grid>
      <Grid item xs={12}>
        <hr className="line" />
      </Grid>
      <Grid item xs={12}>
        <div className="flex_box_around">
          <p className="sub_title"> E-MAIL</p>
          <div>
            <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
            >
              이메일 보내기
            </Button>
          </div>
        </div>
        <p>
          * 고객센터 영업시간 이외에는 이메일(cs@areuareu.com)로 문의해주시기
          바랍니다.
          <br />* 자세한 문의 내용과 연락처를 남겨주시면 빠른 시일 내에 연락
          드리겠습니다.
        </p>
        <div className="padding_size40"></div>
      </Grid>
    </div>
  );
};

export default CSCENTER1st;
