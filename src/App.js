import React from "react";
import Header from "./components/include/Header";
import Footer from "./components/include/Footer";
import Router from "./Router";
function App() {
  return (
    <div>
      <Header />
      <Router />
      {/* myPage */}
      <Footer />
    </div>
  );
}

export default App;
