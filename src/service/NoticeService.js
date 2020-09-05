import React, { Component } from "react";
import Axios from "axios";

//미리 넣어둔 데이터 경로
//const NOTICE_BASE_URL = "http://localhost:8080/notice";
const NOTICE_BASE_URL = "http://192.168.0.28:8080/notice";

class NoticeService extends Component {
  //공지사항
  fetchNotice() {
    console.log("fetchNotice");
    return Axios.get(NOTICE_BASE_URL);
  }

  //공지사항 디테일
  fetchNoticeDetail(noticeId) {
    console.log("fetchNoticeDetail");
    return Axios.get(NOTICE_BASE_URL + "_detail/" + noticeId);
  }
}

export default NoticeService;
