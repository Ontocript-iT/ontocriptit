import React from 'react'
import Hero from './hero/Hero'
import ServiceSub from './service/ServiceSub'
import WhyUs from './whyUs/WhyUs'
import TechStacks from './techStacks/TechStacks'
import Contact from './contact/Contact'

import OurTeam from './ourTeam/OurTeam'



import Footer from '../../shared/footer/Footer'
import AnimatedPage from '../../AnimatedPage'



function Home() {
  const shouldShowLink = true; 
  return (
    <div>

      <AnimatedPage>

      <Hero />
      <ServiceSub  showLink={shouldShowLink} />
      <WhyUs />
      <TechStacks />
      <Contact />
      {/* <OurWorks /> */}
      <OurTeam />
      {/*<Contact/>*/}
      <Footer />
      </AnimatedPage>

    </div>

  );
}

export default Home;
