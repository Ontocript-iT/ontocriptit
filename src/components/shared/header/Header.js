import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import "./Header.css";
import logo from "./ontocript.png"; // Assuming NavigationBar.js is in the components directory
import { Outlet } from "react-router-dom";
import { Link,useLocation  } from 'react-router-dom'; 
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { useState } from "react";

const styles = {
  appBar: {
    backgroundColor: "#FFFFFF", // Change this to the desired color
  },
};

function Header() {
  const location = useLocation();
  const isActive = location.pathname === '/blog'
  const [isClick,setIsClick] = useState(false);
  
  const toggleClick = () =>{
    setIsClick(!isClick);
  }
  return (


    <AppBar position="stastic" style={styles.appBar}>
      <nav>
        <div className="logo-and-btn">
            <div className="logo">
            <Link to="/">
              <img src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="btn-menu" onClick={toggleClick}>
              {!isClick ? 
                <MenuIcon fontSize="large" />
                :
                <CloseIcon fontSize="large"/>
              }
            </div>
        </div>
        <div className = {isClick ? 'headerLinks': 'headerLinks headerLinks_none' }>
        <ul>
          <li>
            <a  href="/"  className={location.pathname === '/' ? 'activeLink' : ''}>Home</a>
          </li>
          <li>
            <a href="/aboutus" className={location.pathname === '/aboutus' ? 'activeLink' : ''}>About us</a>
          </li>
          <li>
            <a href="/services" className={location.pathname === '/services' ? 'activeLink' : ''}>Services</a>
          </li>
          <li>
            <a href="/blog" className={isActive ? 'activeLink' : ''}>Blogs</a>
          </li>
          <li>
            <a href="/technology" className={location.pathname === '/technology' ? 'activeLink' : ''}>Technology</a>
          </li>
          {/* <li>
            <a href="/process">Process</a>
          </li> */}
          <li>
            <a  id="contactUs" href="/contact" className={location.pathname === '/contact' ? 'activeLink' : ''}>
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
