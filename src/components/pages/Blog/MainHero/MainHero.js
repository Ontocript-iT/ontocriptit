import React from 'react'
import './MainHero.css'
import blogImage from "./Rectangle 25.png"; 

export default function MainHero() {
  return (
    <div className='container-blog'>
    <div className='textContainer'>
        
    <h3>Read Our Blog Posts</h3>
    <h1 className='mainText'>FEATURED BLOGS</h1>
    <div className='featured-blogs'>
        <div className='featured-blogs-left'>
            <img src={blogImage}></img>
            <h2>Why Next.js Popular among Undergradutes?</h2>
            <p className='blog-content-text'>Discover the Hype: Why Next.js is the Go-To Choice for Undergraduates in Web Development 💡🚀 #NextJS #WebDev #StudentLife</p>
            <a className='blog-read-more' href='#'>Read more...</a>

        </div>
        <div>
        <img src={blogImage}></img>
      
            <h2>Why Next.js Popular among Undergradutes?</h2>
            <p className='blog-content-text'>Discover the Hype: Why Next.js is the Go-To Choice for Undergraduates in Web Development 💡🚀 #NextJS #WebDev #StudentLife</p>
            <a className='blog-read-more' href='#'>Read more...</a>

        </div>
    </div>




    </div>
    
   

   

  
</div>
  )
}

