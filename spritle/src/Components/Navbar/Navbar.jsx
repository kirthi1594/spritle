import React from "react";
import "./Navbar.css";
import logo from "../../assets/spritle.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <ul>
        <li>ROI Calculator</li>
        <li>Success Stories</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>

      <button className="StartForFree">Start for Free</button>
    </div>
  );
};

export default Navbar;
