import React from 'react'
import Hero from './hero/Hero'
import Service from './service/Service'
import WhyUs from './whyUs/WhyUs'
import TechStacks from './techStacks/TechStacks'
import Contact from './contact/Contact'
import OurWorks from './ourWorks/OurWorks'
import OurTeam from './ourTeam/OurTeam'


import Header from "../../shared/header/Header";
import Process from "../process/Process";
import Contact from "./contact/Contact";
import Hero from "./hero/Hero";
import OurTeam from "./ourTeam/OurTeam";
import OurWorks from "./ourWorks/OurWorks";
import Service from "./service/Service";
import TechStacks from "./techStacks/TechStacks";
import WhyUs from "./whyUs/WhyUs";

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

    </div>

  );
}

export default Home;
