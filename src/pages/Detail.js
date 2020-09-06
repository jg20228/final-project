import React, { useEffect, useState } from "react";
import { Grid, Button } from "@material-ui/core";
import styles from "../css/Details.css";
import DetailQnATable from "../components/DetailQnATable.js";
import PhotoIcon from "@material-ui/icons/Photo";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import MainService from "../service/MainService";
import DetailRelatedProduct from "../components/Home/DetailRelatedProduct";

const Detail = () => {
  const [details, setDetails] = useState({});

  const test = async () => {
    console.log(1, "detail페이지");
    const res = await MainService.fetchDetail(1);
    console.log(res.data);
    setDetails(res.data);
  };

  useEffect(() => {
    test();
  }, []);

  return (
    <div>
      <div>
        {details.detailProductRespDto == null
          ? "aa"
          : details.detailProductRespDto.id}
      </div>
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <div className="product_img">
                <img
                  src={
                    details.detailProductRespDto == null
                      ? "aa"
                      : MainService.imgRoot() +
                        details.detailProductRespDto.thumb
                  }
                  alt=""
                />
              </div>
              <div className="product_flex">
                <div className="product_title">
                  {details.detailProductRespDto == null
                    ? "aa"
                    : details.detailProductRespDto.title}
                </div>
                <div className="widthpadding"></div>
                <div className="product_status">
                  {details.detailProductRespDto == null
                    ? "aa"
                    : details.detailProductRespDto.best}
                </div>
                <div className="product_status">
                  {details.detailProductRespDto == null
                    ? "aa"
                    : details.detailProductRespDto.newly}
                </div>
                <div className="product_status">
                  {details.detailProductRespDto == null
                    ? "aa"
                    : details.detailProductRespDto.sale}
                </div>
              </div>
              <div className="padding60px"></div>
              <div className="product_flex">
                <div className="product_discounted">
                  {details.detailProductRespDto == null
                    ? "aa"
                    : details.detailProductRespDto.discounted}
                </div>
                <div className="widthpadding"></div>
                <div className="product_price">
                  {details.detailProductRespDto == null
                    ? "aa"
                    : details.detailProductRespDto.price}
                </div>
              </div>
              <div className="disc">
                {" "}
                {details.detailProductRespDto == null
                  ? "aa"
                  : details.detailProductRespDto.disc}
              </div>
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
          <hr />
          {/* 여기는 상세정보, 구매평, Q&A 넣는 라인 */}
          <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <div className="product_content">
                {details.detailProductRespDto == null
                  ? "aa"
                  : details.detailProductRespDto.content}
              </div>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
          <hr />
          {/* 구매평 경계선 */}
          <Grid container>
            <Grid item xs={12}>
              <div className="product_flex">
                <div>구매평</div>
                <div className="widthpadding"></div>
                <div className="review_count">
                  {details.detailProductRespDto == null
                    ? "aa"
                    : details.detailReviewRespDto.length}
                </div>
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
              <div>
                {details.detailProductRespDto == null
                  ? "aa"
                  : details.detailReviewRespDto.map((row) => (
                      <Grid container>
                        <Grid item xs={12}>
                          <div className="review_flex">
                            <Grid item xs={8}>
                              <div className="review_left">
                                <div className="star_count">
                                  <StarIcon />
                                  <StarIcon />
                                  <StarIcon />
                                  <StarBorderIcon />
                                  <StarBorderIcon />
                                </div>
                                <div className="review_content">
                                  {row.content}
                                </div>
                                <div className="review_comment">
                                  댓글 내용입니다.
                                </div>
                                <div className="review_photo">
                                  {row.img}
                                  <img src={row.img} alt="" />
                                </div>
                              </div>
                            </Grid>
                            <Grid item xs={2}></Grid>
                            <Grid item xs={2}>
                              <div className="username">전승****</div>
                              <div className="createdate">{row.createDate}</div>
                              <div className="howtopay">{row.howToPay}</div>
                            </Grid>
                          </div>
                          <div className="heightpadding"></div>
                        </Grid>
                      </Grid>
                    ))}
              </div>
              <hr />

              <div className="review_flex">
                <Grid container>
                  <Grid item xs={5}></Grid>
                  <Grid item xs={1}></Grid>
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
            <div>QnA</div>
            <div className="widthpadding"></div>
            <div>
              {details.detailProductRespDto == null
                ? "aa"
                : details.detailQnARespDto.length}
            </div>
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
          {details.detailProductRespDto == null ? (
            "aa"
          ) : (
            <DetailQnATable detailQnARespDto={details.detailQnARespDto} />
          )}
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
            {details.detailProductRespDto == null ? (
              "aa"
            ) : (
              <DetailRelatedProduct
                detailRelatedRespDto={details.detailRelatedRespDto}
              />
            )}
          </div>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </div>
  );
};

export default Detail;
