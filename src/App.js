import React from "react";
import Header from "./layout/include/Header";
import Footer from "./layout/include/Footer";
import SignIn from "./layout/header/SignIn";
import SignUp from "./layout/header/SignUp";
import Payment from "./layout/header/Payment";
import Unit from "./layout/header/Shop";
import About from "./layout/header/About";
import { Route } from "react-router-dom";
import Cart from "./layout/header/Cart";
import Review from "./layout/header/Review";
import CSCENTER from "./layout/header/CSCENTER";
import Mypage from "./layout/mypage/Mypage";
import Home from "./layout/Home";
import Banner from "./layout/Banner";
import Test from "./test/Test";
import Detail from "./layout/details/product/Detail";
import WishList from "./layout/mypage/WishList";
import Cancle from "./layout/mypage/Cancle";
import QnA from "./layout/mypage/QnA";
import Point from "./layout/mypage/Point";
import Exit from "./layout/mypage/Exit";
import Coupon from "./layout/mypage/Coupon";
import Edit from "./layout/mypage/Edit";

function App() {
  return (
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/shop" component={Unit} />
      <Route path="/about" component={About} />
      <Route path="/review" component={Review} />
      <Route path="/cscenter" component={CSCENTER} />
      <Route path="/cart" component={Cart} />
      <Route path="/shop/detail" component={Detail} />
      {/* myPage */}
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/payment" component={Payment} />
      <Route exact path="/mypage" component={Mypage} />
      <Route path="/mypage/wish" component={WishList} />
      <Route path="/mypage/cancle" component={Cancle} />
      <Route path="/mypage/coupon" component={Coupon} />
      <Route path="/mypage/point" component={Point} />
      <Route path="/mypage/qna" component={QnA} />
      <Route path="/mypage/edit" component={Edit} />
      <Route path="/mypage/exit" component={Exit} />
      <Footer />
    </div>
  );
}

export default App;
