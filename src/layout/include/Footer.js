import React from "react";
import { Grid, Breadcrumbs, Typography } from "@material-ui/core";
import aboutA from "../../img/footer.png";
import styles from "../../css/Footer.css";
import { Link } from "react-router-dom";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

export default function SimpleBreadcrumbs() {
  return (
    <div>
      <div className="padding_height"></div>
      <div className="padding_height"></div>
      <div className="padding_height"></div>

      <Grid className="footer" container>
        <Grid item xs={2}></Grid>
        <Grid item xs={1}>
          <div>
            <img className="foot_img" src={aboutA} alt="" />
          </div>
        </Grid>
        <Grid item xs={7}>
          <div className="padding_inline">
            <div className="padding"></div>
            <div>
              <div className="padding_height"></div>
              <div className="link_div">
                <Breadcrumbs aria-label="breadcrumb">
                  <Link
                    onClick={() => window.scrollTo(0, 0)}
                    className="test"
                    color="inherit"
                    to="/about"
                  >
                    회사소개
                  </Link>
                  <Link
                    onClick={() => window.scrollTo(0, 0)}
                    className="test"
                    color="inherit"
                    to="/"
                  >
                    동물실험정책
                  </Link>
                  <Link
                    onClick={() => window.scrollTo(0, 0)}
                    className="test"
                    color="inherit"
                    to="/"
                  >
                    개인정보처리방침
                  </Link>
                  <Link
                    onClick={() => window.scrollTo(0, 0)}
                    className="test"
                    color="inherit"
                    to="/"
                  >
                    이용약관
                  </Link>
                  <Link
                    onClick={() => window.scrollTo(0, 0)}
                    className="test"
                    color="inherit"
                    to="/cscenter"
                  >
                    고객센터
                  </Link>
                </Breadcrumbs>
              </div>
              <div className="padding_height"></div>
              <pre className="pre">
                부산광역시 부산진구 부전동 | 사이트 운영자 : 아르아르 |
                대표이사: 아르르 <br />
                사업자등록번호 : 000-00-00000 사업자정보확인 | 통신판매업
                신고번호 : 2020-부산-0000 |개인정보보호책임자:아르르
                <br />
                고객센터 : 0000-0000 | 이메일 : cs@1234.com | 운영시간 : 월~금
                10:00 - 17:00 (점심시간 13:00 - 14:00)
                <br /> <br />
                고객님은 안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서
                가입한 (주)케이지이니시스의 구매안전서비스를 이용하실 수
                있습니다.
                <br />
                서비스 가입사실 확인
                <br />
                <br />
                Copyright ⓒ AREUAREU All rights reserved.
              </pre>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <a
            className="footer_ico"
            href="javascript:window.open('https://www.instagram.com/','_blank');"
          >
            <InstagramIcon />
          </a>

          <a
            className="footer_ico"
            href="javascript:window.open('https://www.facebook.com/','_blank');"
          >
            <FacebookIcon />
          </a>

          <a
            className="footer_ico"
            href="javascript:window.open('https://blog.naver.com/tjdtnsla911','_blank');"
          >
            <ChatBubbleOutlineIcon />
          </a>
        </Grid>
      </Grid>
    </div>
  );
}
