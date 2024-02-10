import React from 'react'
import Header from '../../shared/header/Header'
import Hero from '../home/hero/Hero'
import Service from './service/Service'
import WhyUs from './whyUs/WhyUs'
import TechStacks from './techStacks/TechStacks'
import Contact from './contact/Contact'
import OurWorks from './ourWorks/OurWorks'
import OurTeam from './ourTeam/OurTeam'

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Service />
      <WhyUs />
      <TechStacks />
      <Contact />
      <OurWorks />
      <OurTeam />
    </div>
  )
}

export default Home
