import React from 'react'
import HeroSection from './Heo/HeroSection'
import SubSection from './MiddleSection/SubSection'
import ServiceSub from '../home/service/ServiceSub'
import Footer from '../../shared/footer/Footer'
import ServiceSuite from './service-suite/ServiceSuite'
import AnimatedPage from '../../AnimatedPage'
import Contact from '../home/contact/Contact'




export default function Service() {
  return (
    <div>

      <AnimatedPage>

       <HeroSection/>
       {/*<SubSection/>*/}
       <ServiceSub/>
       <ServiceSuite/>
  
      <Contact/>
       <Footer/>

       </AnimatedPage>
       

       
       
      
    </div>
  )
}
