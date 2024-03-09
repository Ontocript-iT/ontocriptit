import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './TechStacks.css';
import angular from '../../../../Assets/angular.png'
import spring from '../../../../Assets/spring.png'
import postgresql from '../../../../Assets/postgresql.png'
import mongodb from '../../../../Assets/mongodb.png'
import mysql from '../../../../Assets/mysql.png'
import postman from '../../../../Assets/postman.png'
import react from '../../../../Assets/reactjs.png'
import wordPress from '../../../../Assets/wordPress.png'

function TechStacks() {
  const [slidesToShow, setSlidesToShow] = useState(5);
  const [dots, setDots] = useState(false);

  useEffect(() => {
    const updateSettings = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 1024) {
        setSlidesToShow(screenWidth < 580 ? 1 : screenWidth < 768 ? 2 : screenWidth < 1100 ? 3 : 3);
      } else {
        setSlidesToShow(4);
        setDots(false);
      }
    };

    updateSettings();

    window.addEventListener('resize', updateSettings);

    return () => {
      window.removeEventListener('resize', updateSettings);
    };
  }, []);

  function Arrows() {
    return (
      <div
        style={{ display: "none" }}
      />
    );
  }

  const settings = {
    dots: dots,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    nextArrow: <Arrows />,
    prevArrow: <Arrows />
  };

  return (
    <div className='techstack-section'>
      <div className='techstack-content'>
        <div className='techstack-content-title'>
          <h3>
            Techstack We Work With
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
            <Slider {...settings}>
              <img src={react} />
              <img src={angular} />
              <img src={spring} />
              <img src={postgresql} />
              <img src={mongodb} />
              <img src={mysql} />
              <img src={postman} />
              <img src={wordPress} />
            </Slider>
          </div>
          <div class="end-line"></div>
        </div>
      </div>
    </div>
  )
}

export default TechStacks