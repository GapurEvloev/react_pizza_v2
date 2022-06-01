import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";

import "./scss/app.scss";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
