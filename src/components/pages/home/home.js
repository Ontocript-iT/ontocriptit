import React from 'react'
import Hero from './hero/Hero'
import Service from './service/Service'
import WhyUs from './whyUs/WhyUs'
import TechStacks from './techStacks/TechStacks'
import Contact from './contact/Contact'
import OurWorks from './ourWorks/OurWorks'
import OurTeam from './ourTeam/OurTeam'

import Footer from "../../shared/footer/Footer";
import Header from "../../shared/header/Header";
import Process from "../process/Process";

function Home() {
  return (
    <div>

      <Hero />
      <Service />
      <WhyUs />
      <TechStacks />
      <Contact />
      <OurWorks />
      <OurTeam />

      <h1>Hi,Welcome to home page of the Ontocript iT</h1>
      <Footer/>

    </div>
   
  );
}

export default Home;
