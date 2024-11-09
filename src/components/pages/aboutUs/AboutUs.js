import React from 'react'
import Header from '../../shared/header/Header'
import Footer from '../../shared/footer/Footer'
import HeroInAboutUs from './heroSectionInAboutUs/HeroInAboutUs'
import SubOne from './subSectionOne/SubOne'
import WhyChoose from './whyChoose/WhyChoose'
import SubSectionTwo from './subSectionTwo/SubSectionTwo'
import LeadershipTeam from './leardershipTeam/LeadershipTeam'
import TeamPhotos from './teamPhotos/TeamPhotos'
import AnimatedPage from '../../AnimatedPage'
import Contact from '../home/contact/Contact'




export default function AboutUs() {
  return (
    <div>
      <AnimatedPage>
        <HeroInAboutUs/>
        {/*<SubOne/>*/}
        <WhyChoose/>
        <SubSectionTwo/>
        <LeadershipTeam/>
        <TeamPhotos/>
        
        <Contact/>
        <Footer/>

        </AnimatedPage>
   
      
    </div>
  )
}
