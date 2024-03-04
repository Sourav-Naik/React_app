import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Component/About";
import Navbar from "./Component/Header/Navbar/Navbar";
import Cart from "./component2/cart";
import Login from "./Component/Login";
import Footer from "./Component/Footer/Footer";
import Signup from "./Component/Signup";
import Product from "./Component/Product";
import Home from "./Component/home";
function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#055060";
    }
  };

  return (
    <div className="App d-flex flex-column">
      <Router>
        <div id="navbar">
          <Navbar mode={mode} toggleMode={toggleMode} />
        </div>
        <div
          id="main"
          className="conatiner align-items-center d-flex justify-content-center"
        >
          <Routes>
            <Route exact path="/" element={<Home mode={mode} />} />
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/login" element={<Login mode={mode} />} />
            <Route
              exact
              path="/login/signup"
              element={<Signup mode={mode} />}
            />
            <Route exact path="/cart" element={<Cart mode={mode} />} />
            <Route exact path="/products" element={<Product mode={mode} />} />
          </Routes>
        </div>

        <div id="footer">
          <Footer mode={mode} />
        </div>
      </Router>
    </div>
  );
}
export default App;
