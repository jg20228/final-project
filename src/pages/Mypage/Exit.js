import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import Side from "./Side";
import MypageHeader from "./MypageHeader";
import MypageTable from "./MypageTable";

const Exit = () => {
  useEffect(() => {
    let confirm_test = window.confirm("정말 탈퇴 하시겠습니까?");

    if (confirm_test === true) {
      alert("이용해주셔서 감사합니다.");
      // 확인(예) 버튼 클릭 시 이벤트
    } else if (confirm_test === false) {
      // 취소(아니오) 버튼 클릭 시 이벤트
    }
  });
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
              <Grid item></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
};

export default Exit;
