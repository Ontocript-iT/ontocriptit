import React from 'react'
import {AppBar,Toolbar,Button} from '@mui/material';
import './Header.css';
import logo from './ontocript.png'; // Assuming NavigationBar.js is in the components directory





const styles = {
  appBar: {
    backgroundColor: '#FFFFFF', // Change this to the desired color
  },
};

function Header() {
  return (

    <AppBar position='stastic' style={styles.appBar}>
    <nav>
    <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
    <ul>
      <li><a href="#">About us</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Blogs</a></li>
      <li><a href="#">Technology</a></li>
      <li><a href="#">Process</a></li>
      <li><a  className='contactUs' href="#">Contact Us</a></li>
    </ul>
  </nav>
   </AppBar>

  )
}

export default Header
