import React from 'react'
import MainHero from './MainHero/MainHero'
import Footer from '../../shared/footer/Footer'
import MiddleBlogs from './MiddleBlogs/MiddleBlogs'
import AnimatedPage from '../../AnimatedPage'

export default function Blog() {
  return (
    <div>
      <AnimatedPage>
       <MainHero/>
       <MiddleBlogs/>
       <Footer/>
       </AnimatedPage>

      
    </div>
  )
}
