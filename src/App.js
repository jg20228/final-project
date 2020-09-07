import React from "react";
import Header from "./components/include/Header";
import Footer from "./components/include/Footer";
import Router from "./Router";
import Test98 from "./detailsTest/Test98";
function App() {
  return (
    <div>
      <Test98 />
      <Header />
      <Router />
      {/* myPage */}
      <Footer />
    </div>
  );
}

export default App;
