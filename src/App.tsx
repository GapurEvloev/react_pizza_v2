import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import FullPizza from "./pages/FullPizza";
import MainLayout from "./layouts";

import "./scss/app.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="pizza/:id" element={<FullPizza />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
