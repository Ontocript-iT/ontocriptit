import React from 'react'
import './AdditinalService.css';
import html from '../../../../Assets/htmlimg.png'
import css from '../../../../Assets/cssimg.png'
import js from '../../../../Assets/jsimg.png'
import java from '../../../../Assets/javaimg.png'
import wordpress from '../../../../Assets/wordPress.png'

export default function AdditinalService() {
  return (
    <div className='add-service-container'>
      <h1 style={{fontSize:"40px",color:"#152039",textAlign:"center"}}>
        Our Additional Services
      </h1>
      <div className='add-img-container'>
        <div className="image-container">
          <img src={wordpress} alt="WordPress" style={{width:"250px",marginRight:"40px"}} />
        </div>
        <div className="image-container">
          <img src={html} alt="HTML" style={{width:"250px",marginTop:"-60px",marginRight:"40px"}} />
        </div>
        <div className="image-container">
          <img src={css} alt="CSS" style={{width:"250px",marginTop:"-60px",marginRight:"40px"}} />
        </div>
        <div className="image-container">
          <img src={js} alt="JavaScript" style={{width:"250px",marginTop:"-60px",marginRight:"40px"}} />
        </div>
        <div className="image-container">
          <img src={java} alt="Java" style={{width:"250px",marginTop:"-60px",marginLeft:"-20px"}} />
        </div>
      </div>
    </div>
  )
}
