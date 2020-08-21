import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/shop">
        <p>SHOP </p>
      </Link>
      <Link to="/about">
        <p>ABOUT </p>
      </Link>
      <Link to="/review">
        <p>REVIEW </p>
      </Link>
      <Link to="/cscenter">
        <p>CS CENTER </p>
      </Link>
      <Link to="/mypage">
        <p>My Page </p>
      </Link>
      <Link to="/cart">
        <p>Cart</p>
      </Link>
    </div>
  );
};

export default Header;
