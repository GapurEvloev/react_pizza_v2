import React from "react";
import Header from "./components/Header";

import "./scss/app.scss";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Cart from "./Pages/Cart";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/" element={<Cart />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
