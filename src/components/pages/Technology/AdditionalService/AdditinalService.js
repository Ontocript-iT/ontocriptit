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
            <div>
            <img  style={{width:"300px"}} src={wordpress}></img>
           
            </div>
            <div>

            <img  style={{width:"300px",marginTop:"-60px"}} src={html}></img>

            </div>
            <div>

<img  style={{width:"300px",marginTop:"-60px"}} src={css}></img>

</div>
<div>

<img  style={{width:"300px",marginTop:"-60px"}} src={js}></img>

</div>
<div>

<img  style={{width:"300px",marginTop:"-60px",marginLeft:"-20px"}} src={java}></img>

</div>

        </div>
       

      
    </div>
  )
}
