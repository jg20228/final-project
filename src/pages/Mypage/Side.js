import React from "react";
import { Link } from "react-router-dom";

const Side = () => {
  return (
    <div>
      <ul className="list">
        <Link className="test" to="/mypage">
          <li>주문조회</li>
        </Link>
        <Link className="test" to="/mypage/wish">
          <li>위시리스트</li>
        </Link>

        <Link className="test" to="/mypage/cancle">
          <li>취소/교환/반품</li>
        </Link>

        <Link className="test" to="/mypage/coupon">
          <li>쿠폰</li>
        </Link>

        <Link className="test" to="/mypage/point">
          <li>포인트</li>
        </Link>

        <Link className="test" to="/mypage/qna">
          <li>1:1 문의</li>
        </Link>

        <Link className="test" to="/mypage/edit">
          <li>정보 수정</li>
        </Link>

        <Link className="test" to="/mypage/exit">
          <li>회원탈퇴</li>
        </Link>
      </ul>
    </div>
  );
};

export default Side;
