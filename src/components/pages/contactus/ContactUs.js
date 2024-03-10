import React from 'react'
import TopHero from './topHero/TopHero'
import Header from '../../shared/header/Header'
import ContactInWhite from './contactInWhite/ContactInWhite'
import ContactField from './contactField/ContactField'
import Footer from '../../shared/footer/Footer'
import AnimatedPage from '../../AnimatedPage'








export default function ContactUs() {
  return (
    <div>
     <AnimatedPage>
      <TopHero/>
      <ContactInWhite/>
      <ContactField/>
      <Footer/>
      </AnimatedPage>
      
      

      



    </div>
  )
}
