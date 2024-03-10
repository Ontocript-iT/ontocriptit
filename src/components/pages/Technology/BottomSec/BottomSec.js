import React from 'react'
import './BottomSec.css';
import External_Link from "../../../../Assets/External_Link.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';



export default function BottomSec() {
  return (
    <div className='tech-bottom-container'>
        <div>
            <h1 className='tech-bottom-heading-top'>Why Use these Technologies</h1>
            <p className='tech-bottom-content-main'   style={{marginLeft:"20px"}}>
            Our company chooses these technologies for their unmatched benefits, including enhanced scalability, lightning-fast performance, robust security measures, and unmatched flexibility. Each technology is carefully selected to ensure optimal development outcomes, empowering our projects with seamless scalability, fortified security protocols, and the agility to adapt to evolving requirements, driving innovation and success in every endeavo
            </p>

        </div>
        <div>
     <div className='tech-bottom-right'>

     <div>
     <h1 className='tech-bottom-heading'  style={{marginTop:"10px",marginLeft:"20px"}}>Scalability <FontAwesomeIcon icon={faCoffee} /></h1>
     <p className='tech-bottom-content'   style={{marginLeft:"20px"}}>These technologies enable seamless scalability, allowing our solutions to grow alongside your business needs.</p>
     </div>
     <div>
     <h1 className='tech-bottom-heading'  style={{marginTop:"10px",marginLeft:"20px"}}>Performance</h1>
     <p className='tech-bottom-content'   style={{marginLeft:"20px"}}>Leveraging these tools results in high-performing applications that deliver optimal user experiences.
</p>
     </div>

     <div>
     <h1 className='tech-bottom-heading'  style={{marginTop:"10px",marginLeft:"20px"}}>Security</h1>
     <p className='tech-bottom-content'  style={{marginLeft:"20px"}}>
Our choice of technologies prioritizes robust security measures, ensuring the safety and integrity of your data.
</p>
     </div>



     <div>
     <h1 className='tech-bottom-heading' style={{marginTop:"10px",marginLeft:"20px"}}>Flexibility</h1>
     <p className='tech-bottom-content'   style={{marginLeft:"20px"}}>With a versatile technology stack, we can adapt to changing project requirements and industry trends with ease.</p>
     </div>

     </div>
        </div>
      
    </div>
  )
}
