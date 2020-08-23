import React from "react";
import Header from "./layout/include/Header";
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

function App() {
  return (
    <div>
      <Header />
      <br />
      <Route path="/shop" component={Unit} />
      <Route path="/about" component={About} />
      <Route path="/review" component={Review} />
      <Route path="/cscenter" component={CSCENTER} />
      <Route path="/cart" component={Cart} />
      {/* myPage */}
      <Route path="/mypage" component={Mypage} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/payment" component={Payment} />
      <Route path="/mypage/wish" component={Cart} />
      <Route path="/mypage/cancle" component={Cart} />
      <Route path="/mypage/coupon" component={Cart} />
      <Route path="/mypage/point" component={Cart} />
      <Route path="/mypage/qna" component={Cart} />
      <Route path="/mypage/edit" component={Cart} />
      <Route path="/mypage/exit" component={Cart} />
    </div>
  );
}

export default App;
