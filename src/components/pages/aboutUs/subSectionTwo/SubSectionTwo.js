
import React from 'react'
import "./SubSectionTwo.css";
import {colors} from "@mui/material";
import { Link } from 'react-router-dom';

export default function SubSectionTwo() {
  return (
    <div className='main-container'>

      <div className='sub-container'>


        <h1 className='sub-head-topic'>See Our Services</h1>
        <p className='sub-content'>we specialize in custom software development, responsive web and mobile apps, UI/UX
          design, quality assurance, and ongoing support. Our dedicated team ensures cutting-edge solutions that drive
          business success.     <Link to="/services">
        <span className="more-details">More Details...</span>
      </Link></p>
        <hr style={{backgroundColor: "white",height:"1px"}}></hr>

        <h1 className='sub-head-topic'>What are Technologies We Use</h1>
        <p className='sub-content'>Enhance your product using Angular and React.js for dynamic frontend experiences, Spring Boot for robust backend development, and MySQL and MongoDB for efficient data management. Utilize AWS and Firebase for scalability, reliability, and enhanced user experiences     <Link to="/technology">
        <span className="more-details">More Details...</span>
      </Link></p>

        <hr style={{backgroundColor: "white", height: "1px"}}></hr>
        <h1 className='sub-head-topic'>Read Our Blogs</h1>
        <p className='sub-content'>our insightful blogs delve into industry trends, best practices, and innovative
          solutions. Explore our diverse topics covering software development, technology insights, and business
          strategies to stay informed and inspired.     <Link to="/blog">
        <span className="more-details">More Details...</span>
      </Link></p>


      </div>

    </div>
  )
}
