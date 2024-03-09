import React from 'react'
import MainHero from './MainHero/MainHero'
import Footer from '../../shared/footer/Footer'
import MiddleBlogs from './MiddleBlogs/MiddleBlogs'
import AnimatedPage from '../../AnimatedPage'
import Contact from '../home/contact/Contact'

export default function Blog() {
  return (
    <div>
      <AnimatedPage>
       <MainHero/>
       <MiddleBlogs/>
       <Contact/>
       <Footer/>
       </AnimatedPage>

      
    </div>
  )
}
