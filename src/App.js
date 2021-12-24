import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/about/About";
import Footer from "./Footer";
import HomeLanding from "./components/landing/Landing";
import ProductCard from "./components/products/Products";
import ProductDetail from "./components/product_detail/ProductDetail";
import React from "react";

function App() {
  return (
    <>
      <Router>
        <div className="counter">
          <ul className="nav-links">
            <li className="list-prod">
              <Link className="links" to="/">
                Home
              </Link>
            </li>
            <li className="list-prod">
              <Link className="links" to="/products">
                Products
              </Link>
            </li>
            <li className="list-prod">
              <Link className="links" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<HomeLanding />}></Route>
          <Route path="/products" element={<ProductCard />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products" element={<ProductDetail />}></Route>
          <Route
            path="/products/detail/:id"
            element={<ProductDetail />}
          ></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
