import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
function App() {
  const [isShowLoginModal, setIsShowLoginModal] = useState(false);
  const toggleIsShowLoginModal = () => {
    setIsShowLoginModal(!isShowLoginModal);
  };
  return (
    <Router>
      <Navbar toggleIsShowLoginModal={toggleIsShowLoginModal} />
      <Route path="/" exact component={MainPage}/>
      <LoginModal isOpen={isShowLoginModal} setIsOpen={setIsShowLoginModal} />
      <Footer />
    </Router>
  );
}

export default App;
