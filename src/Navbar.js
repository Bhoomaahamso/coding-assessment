import React from "react";
import "./Navbar.css";
import Button from "@material-ui/core/Button";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/8/81/Brilliant_Logo.svg"
          alt=""
        />
        <h3>BRILLIANT</h3>
      </div>
      <div className="nav-item">
        <div className="options">
          <h5>TODAY</h5>
          <h5 className="active">COURSES</h5>
          <h5>PRACTICE</h5>
        </div>
        <div className="sign">
          <Button className="login">Log in</Button>
          <Button className="signup">Sign up</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
