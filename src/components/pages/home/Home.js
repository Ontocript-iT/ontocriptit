
import React from 'react'
import Hero from './hero/Hero'
import ServiceSub from './service/ServiceSub'
import WhyUs from './whyUs/WhyUs'
import TechStacks from './techStacks/TechStacks'
import Contact from './contact/Contact'
import OurTeam from './ourTeam/OurTeam'



import Footer from '../../shared/footer/Footer'
import AnimatedPage from '../../AnimatedPage'
import ClientSays from './clientSays/ClientSays'
import ServiceSuite from "../services/service-suite/ServiceSuite";
import ProfessionalAchievements from "../../shared/Professional Achievements/ProfessionalAchievements";
import { PartyMode } from '@mui/icons-material'
import OurPartners from './partners/Partners'



function Home() {
  const shouldShowLink = true;
  return (
    <div className='h-auto'>
      <AnimatedPage>
        <Hero />
        <ServiceSub showLink={shouldShowLink} />
        <WhyUs />
        <ServiceSuite />
        <TechStacks />
        <Contact />
        {/* <OurWorks /> */}
        {/* <OurTeam /> */}
        {/*<Contact/>*/}
        <ClientSays />
        <ProfessionalAchievements />
        <OurPartners />
        <Footer />
      </AnimatedPage>
    </div>

  );
}

export default Home;
