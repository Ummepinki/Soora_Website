import React from "react";
import logo1 from "../../assets/assets/images/logo1.png";
import contract_us from "../../assets/assets/images/contact-icon.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="logo1">
      <div>
        <img src={logo1} alt="/" />
      </div>
      <div className="button">
        <button className="button_style" href="/">
          Contract Us
          <img src={contract_us} alt="contract_us" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
