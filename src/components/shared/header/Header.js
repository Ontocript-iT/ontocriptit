import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import "./Header.css";
import logo from "./ontocript.png"; // Assuming NavigationBar.js is in the components directory
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom'; 

const styles = {
  appBar: {
    backgroundColor: "#FFFFFF", // Change this to the desired color
  },
};

function Header() {
  
  return (
    <AppBar position="stastic" style={styles.appBar}>
      <nav>
        <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="headerLinks">
        <ul>
          <li>
            <a  href="/">Home</a>
          </li>
          <li>
            <a href="/aboutus">About us</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/blog">Blogs</a>
          </li>
          <li>
            <a href="/technology">Technology</a>
          </li>
          <li>
            <a href="/process">Process</a>
          </li>
          <li>
            <a className="contactUs" href="/contact">
              Contact Us
            </a>
          </li>
        </ul>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </AppBar>
  );
}

export default Header;
