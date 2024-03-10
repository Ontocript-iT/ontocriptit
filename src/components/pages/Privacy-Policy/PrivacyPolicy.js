import React from 'react'
import TopHero from './TopHero/TopHero'
import Footer from '../../shared/footer/Footer'
import PrivacyAndPolicies from './PrivacyAndPolicy/PrivacyAndPolicies'
import AnimatedPage from '../../AnimatedPage'
import Contact from '../home/contact/Contact'


export default function PrivacyPolicy() {
  return (
    <div>
      <AnimatedPage>
        <TopHero/>
        <PrivacyAndPolicies/>
        <Contact/>
        <Footer/>

        </AnimatedPage>
      
    </div>
  )
}
