import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
function App() {
  const [isShowLoginModal, setIsShowLoginModal] = useState(false);
  const toggleIsShowLoginModal = () => {
    setIsShowLoginModal(!isShowLoginModal);
  };
  return (
    <Router>
      <Navbar toggleIsShowLoginModal={toggleIsShowLoginModal} />
      <Products />
      <Footer />
      <LoginModal isOpen={isShowLoginModal} setIsOpen={setIsShowLoginModal} />
    </Router>
  );
}

export default App;
