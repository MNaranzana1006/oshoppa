import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import Navbar from "./components/Navbar";
import ProductDetail from "./components/ProductDetail";
import Products from "./components/Products";
import ProductList from "./assets/inputs/ProductList";
function App() {
  const [isShowLoginModal, setIsShowLoginModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const toggleIsShowLoginModal = () => {
    setIsShowLoginModal(!isShowLoginModal);
  };
  const showProductDetail = (product) => {
    setSelectedProduct(product);
  };
  return (
    <Router>
      <Navbar toggleIsShowLoginModal={toggleIsShowLoginModal} />
      <Route path="/" exact>
        <Products
          productList={ProductList}
          showProductDetail={showProductDetail}
        />
      </Route>
      <Route path="/products/:id">
        <ProductDetail product={selectedProduct} />
      </Route>
      <LoginModal isOpen={isShowLoginModal} setIsOpen={setIsShowLoginModal} />
      <Footer />
    </Router>
  );
}

export default App;
