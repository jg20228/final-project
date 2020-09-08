import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Unit from "./pages/Shop";
import About from "./pages/About";
import Review from "./pages/Review";
import CSCENTER from "./pages/CSCENTER";
import Cart from "./pages/Cart";
import Detail from "./pages/Detail";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Payment from "./pages/Payment";
import Mypage from "./pages/Mypage/Mypage";
import WishList from "./pages/Mypage/WishList";
import Cancle from "./pages/Mypage/Cancle";
import Coupon from "./pages/Mypage/Coupon";
import Point from "./pages/Mypage/Point";
import QnA from "./pages/Mypage/QnA";
import Edit from "./pages/Mypage/Edit";
import Exit from "./pages/Mypage/Exit";
import Notice from "./pages/Notice";
import PageQnA from "./pages/PageQnA";
import TermsOfService from "./pages/TermsOfService";
import PolicyPrivacy from "./pages/PolicyPrivacy";
import Animal from "./pages/Animal";
import Test98 from "./detailsTest/Test98";

const Router = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/write" component={Test98} />
        <Route exact path="/tos" component={TermsOfService} />
        <Route exact path="/pp" component={PolicyPrivacy} />
        <Route exact path="/notice" component={Notice} />
        <Route exact path="/animal" component={Animal} />
        <Route exact path="/qna" component={PageQnA} />
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Unit} />
        <Route path="/about" component={About} />
        <Route path="/review" component={Review} />
        <Route path="/cscenter" component={CSCENTER} />
        <Route path="/cart" component={Cart} />
        <Route path="/shop/detail" component={Detail} />
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
      </Switch>
    </div>
  );
};

export default Router;
