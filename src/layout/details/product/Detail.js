import React from "react";
import { Grid, Button } from "@material-ui/core";
import styles from "../../../css/Details.css";
import DetailQnATable from "./DetailQnATable.js";
import PhotoIcon from "@material-ui/icons/Photo";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Product from "../../Product";

const Detail = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <div className="product_img"></div>
              <div className="product_flex">
                <div className="product_title">제목입니다.</div>
                <div className="widthpadding"></div>
                <div className="product_status">상태들입니다.</div>
              </div>
              <div className="padding60px"></div>
              <div className="product_flex">
                <div className="product_discounted">할인가</div>
                <div className="widthpadding"></div>
                <div className="product_price">진짜가격</div>
              </div>
              <div className="disc">설명입니다.</div>
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
          <hr />
          {/* 여기는 상세정보, 구매평, Q&A 넣는 라인 */}
          <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <div className="product_content">컨텐츠 매우길다</div>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
          <hr />
          {/* 구매평 경계선 */}
          <Grid container>
            <Grid item xs={12}>
              <div className="product_flex">
                <div>구매평</div>
                <div className="review_count">숫자</div>
              </div>
              <div>
                <Button variant="contained" color="secondary">
                  구매평 작성
                </Button>
              </div>
              <div>
                <Button>
                  <PhotoIcon />
                  포토 구매평만 보기
                </Button>
              </div>
              <hr />
              <div className="review_flex">
                <Grid container>
                  <Grid item xs={8}>
                    <div className="review_left">
                      <div className="star_count">
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarBorderIcon />
                        <StarBorderIcon />
                      </div>
                      <div className="review_content">리뷰 내용입니다.</div>
                      <div className="review_comment">댓글 내용입니다.</div>
                      <div className="review_photo">사진 자리입니다.</div>
                    </div>
                  </Grid>
                  <Grid item xs={2}></Grid>
                  <Grid item xs={2}>
                    <div className="review_right">
                      <div className="username">전승****</div>
                      <div className="createdate">리뷰남긴날짜</div>
                      <div className="howtopay">결제방식</div>
                    </div>
                  </Grid>
                </Grid>
              </div>
              <hr />

              <div className="review_flex">
                <Grid container>
                  <Grid item xs={5}></Grid>
                  <Grid item xs={1}>
                    <div>paging block</div>
                  </Grid>
                  <Grid item xs={4}></Grid>
                  <Grid item xs={2}>
                    <div className="review_button">
                      <Button variant="contained" color="secondary">
                        구매평 작성
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
          <hr />
          {/* Q&A */}
          <div className="qna_flex">
            <div>Q&A</div>
            <div className="widthpadding"></div>
            <div>count</div>
          </div>
          <div>구매하시려는 상품에 대해 궁금한 점이 있으면 문의주세요.</div>
          <div className="qna_flex">
            <Button variant="contained" color="secondary">
              상품문의
            </Button>
            <div className="widthpadding"></div>
            <Button variant="contained" color="secondary">
              1:1 문의
            </Button>
          </div>
          <div>
            <DetailQnATable />
          </div>
          <div className="review_flex">
            <Grid container>
              <Grid item xs={5}></Grid>
              <Grid item xs={1}>
                <div>paging block</div>
              </Grid>
              <Grid item xs={4}></Grid>
              <Grid item xs={2}>
                <div className="review_button">
                  <Button variant="contained" color="secondary">
                    상품 문의
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
          <div>Related Products</div>
          <div>
            <Product />
          </div>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </div>
  );
};

export default Detail;
