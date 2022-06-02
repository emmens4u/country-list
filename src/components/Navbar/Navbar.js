import React from "react";
import "../Navbar/Navbar.Style.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <h1 className="navbar-text">Where in the world?</h1>
        <div className="darkmode">
          <ion-icon className ="moon-logo" name="moon-outline"></ion-icon>Dark Mode
        </div>
      </div>
    </div>
  );
};

export default Navbar;
