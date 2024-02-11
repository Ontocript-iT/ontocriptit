import React from 'react'
import './TechStacks.css'
import angular from '../../../../Assets/angular.png'
import spring from '../../../../Assets/spring.png'
import postgresql from '../../../../Assets/postgresql.png'
import mongodb from '../../../../Assets/mongodb.png'
import mysql from '../../../../Assets/mysql.png'
import postman from '../../../../Assets/postman.png'

function TechStacks() {
  return (
    <div className='techstack-section'>
      <div className='techstack-content'>
        <div className='techstack-content-title'>
          <h3>
            Techstack we work with
          </h3>
        </div>
        <div className='techstack-content-sub-title'>
          <span>
            We always look for new technologies to make sure our international clients get the best and newest digital products.          </span>
        </div>
        <div className='techstack-icons-section'>
          <div class="line-container">
            <div class="line"></div>
            <div class="techstack">Techstack</div>
            <div class="line"></div>
          </div>
          <div className='techstack-icons'>
            <img src={angular} />
            <img src={spring} />
            <img src={postgresql} />
            <img src={mongodb} />
            <img src={mysql} />
            <img src={postman} />
          </div>
          <div class="end-line"></div>
        </div>
      </div>
    </div>
  )
}

export default TechStacks