import React from 'react'
import TopHero from './TopHero/TopHero'
import Footer from '../../shared/footer/Footer'
import TechStack from "./TechStack/TechStack";
import AwsSection from "./AwsSection/AwsSection";
import BottomSec from './BottomSec/BottomSec';
import AnimatedPage from '../../AnimatedPage';
import Contact from '../home/contact/Contact';



export default function Technology() {
  return (
    <div>
      <AnimatedPage>
        <TopHero/>
        {/*<HeadTopText/>*/}
        <TechStack/>
        {/*<TechSecTwo/>*/}
        <AwsSection/>
        <BottomSec/>
        {/*<AdditinalService/>*/}
        <Contact/>
        <Footer/>
       
        </AnimatedPage>
      
    </div>
  )
}
