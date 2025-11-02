import React from 'react'
import Footer from '../../shared/footer/Footer'
import HeroInAboutUs from './heroSectionInAboutUs/HeroInAboutUs'
import WhyChoose from './whyChoose/WhyChoose'
import SubSectionTwo from './subSectionTwo/SubSectionTwo'
import LeadershipTeam from './leardershipTeam/LeadershipTeam'
import TeamPhotos from './teamPhotos/TeamPhotos'
import AnimatedPage from '../../AnimatedPage'
import Contact from '../home/contact/Contact'
import ClientSays from "../home/clientSays/ClientSays";
import OurTeam from "../home/ourTeam/OurTeam";
import ProfessionalAchievements from "../../shared/Professional Achievements/ProfessionalAchievements";
import Company from "./Company/Company";
import OurPartners from '../home/partners/Partners'



export default function AboutUs() {
  return (
    <div>
      <AnimatedPage>
        <HeroInAboutUs/>

        <Company/>
        {/*<SubOne/>*/}
        <WhyChoose/>
        <SubSectionTwo/>

        {/* <OurTeam /> */}
        {/*<LeadershipTeam/>*/}

        <ProfessionalAchievements/>


        {/*<TeamPhotos/>*/}

        <ClientSays/>

        <OurPartners/>
        
        <Contact/>
        <Footer/>

        </AnimatedPage>
   
      
    </div>
  )
}
