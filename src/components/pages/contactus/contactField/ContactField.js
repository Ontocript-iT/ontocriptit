import React from 'react'
import TextField from '@mui/material/TextField';
import "./ContactField.css";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import banner from "./banner_01.png"; 
import emailjs from "@emailjs/browser";

export default function ContactField() {


    

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform submission logic here, such as sending data to an API
       
      };
      
      

  return (
    <div className='textFieldContainer'>
        <form onSubmit={handleSubmit}>
        <div className='textFieldSubContainer'>
        
            <div className='leftTextField' >
                <div><TextField id="standard-basic" label="Full name*" variant="standard" /></div>
         
                <div> <TextField id="standard-basic" label="Email*" variant="standard" /></div>

            </div>
            <div className='leftTextField'>
                <div><TextField id="standard-basic" label="Last name*" variant="standard" /></div>
                <div> <TextField id="standard-basic" label="Company name" variant="standard" /></div>

            </div>
          

        </div>
         <div>
                <div> <TextField id="standard-basic-text-area" label="Message" variant="standard"   /></div>
                
        </div>
        <div className='checkBox'>

        <FormControlLabel required control={<Checkbox />} label={<span className="custom-label">I agree with ontocriptiT terms and conditions*</span>}  />
            
        </div>

        <div>
            <p className='subText'>Our team is just a message or call away, ready to engage, understand your unique requirements, and transform challenges into opportunities</p>
        </div>
      
        <button type="submit" className='submitBtn'>Submit</button>
        
    
        </form>

        <div>
            <img src={banner}></img>
        </div>

      
    </div>
  )
}
