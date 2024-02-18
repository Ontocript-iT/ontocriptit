import React from 'react'
import Header from '../../shared/header/Header'
import Footer from '../../shared/footer/Footer'
import HeroInAboutUs from './heroSectionInAboutUs/HeroInAboutUs'
import SubOne from './subSectionOne/SubOne'
import WhyChoose from './whyChoose/WhyChoose'


export default function AboutUs() {
  return (
    <div>
        <HeroInAboutUs/>
        <SubOne/>
        <WhyChoose/>
        
        <Footer/>
   
      
    </div>
  )
}
