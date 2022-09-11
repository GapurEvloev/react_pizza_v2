import React from "react";
import { Link } from "react-router-dom";

import emptyImg from "../../assets/img/empty-cart.png";

const CartEmpty = () => {
  return (
    <div className="cart cart--empty">
      <h2>
        Cart is empty <span>😕</span>
      </h2>
      <p>
        You probably haven't ordered pizza yet.
        <br />
        To order pizza, go to the main page.
      </p>
      <img src={emptyImg} alt="Empty cart" />
      <Link to="/" className="button button--black">
        <span>Back</span>
      </Link>
    </div>
  );
};

export default CartEmpty;
