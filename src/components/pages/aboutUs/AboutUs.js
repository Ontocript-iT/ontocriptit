import React from 'react'
import Header from '../../shared/header/Header'
import Footer from '../../shared/footer/Footer'
import HeroInAboutUs from './heroSectionInAboutUs/HeroInAboutUs'
import SubOne from './subSectionOne/SubOne'
import WhyChoose from './whyChoose/WhyChoose'
import SubSectionTwo from './subSectionTwo/SubSectionTwo'
import LeadershipTeam from './leardershipTeam/LeadershipTeam'
import TeamPhotos from './teamPhotos/TeamPhotos'


export default function AboutUs() {
  return (
    <div>
        <HeroInAboutUs/>
        <SubOne/>
        <WhyChoose/>
        <SubSectionTwo/>
        <LeadershipTeam/>
        <TeamPhotos/>
        
        
        <Footer/>
   
      
    </div>
  )
}
