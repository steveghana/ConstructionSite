import React from "react";
import { ShoppingCart, PersonOutline, Search } from "@material-ui/icons";
function Nav() {
  return (
    <nav className="nav">
      <div className="nav_item_header">SNEAKER.TOWN</div>
      <ul className="nav_item_wrapper">
        <div className="nav_content">
          <li className="nav_content_list_item">Home</li>
          <li className="nav_content_list_item">Products</li>
          <li className="nav_content_list_item">Brands</li>
          <li className="nav_content_list_item">About Us</li>
          <li className="nav_content_list_item">Contact Us</li>
          <li className="nav_content_list_item">Log in</li>
        </div>
      </ul>
      <div className="nav_item_icons icons">
        <Search />
        <PersonOutline />
        <ShoppingCart />
      </div>
    </nav>
  );
}

export default Nav;
