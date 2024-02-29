import React from 'react'
import TopHero from './TopHero/TopHero'
import Footer from '../../shared/footer/Footer'
import HeadTopText from "./HeadTop/HeadTopText";
import TechStack from "./TechStack/TechStack";
import TechSecTwo from "./TechStackSecTwo/TechSecTwo";
import AwsSection from "./AwsSection/AwsSection";
import BottomSec from './BottomSec/BottomSec';

export default function Technology() {
  return (
    <div>
        <TopHero/>
        <HeadTopText/>
        <TechStack/>
        <TechSecTwo/>
        <AwsSection/>
        <BottomSec/>
        <Footer/>
      
    </div>
  )
}
