import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex bg-violet-600 fixed w-full p-5 text-white">
      <Link className="text-2xl font-bold " to={"/"}>
        <i className="fa-solid fa-truck-fast me-2"></i>Daily Cart
      </Link>
      <ul className="flex-1 text-right">
        <li className="list-none inline-block px-5">
          <input
            style={{ width: "300px" }}
            className="rounded p-2"
            type="text"
            placeholder="Search Products Here !!"
          />
        </li>

        <Link to={'/wishlist'}>
          <li className="list-none inline-block px-5">
            <i className="fa-solid fa-heart text-red-600"></i>Wishlist{" "}
            <span className="bg-black text-white p-1">20</span>
          </li>
        </Link>

        <Link to={'/cart'}>
          <li className="list-none inline-block px-5">
            <i className="fa-solid fa-cart-plus text-green-600"></i>Cart{" "}
            <span className="bg-black text-white p-1">20</span>
          </li>
        </Link>
        
      </ul>
    </nav>
  );
};

export default Header;
