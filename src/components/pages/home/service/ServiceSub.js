import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import './Service.css';
import design from '../../../../Assets/Design.png';
import seo from '../../../../Assets/SEO.png';
import cms from '../../../../Assets/CMS.png';
import ecommerce from '../../../../Assets/Ecommerce.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Service({ showLink }) {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [dots, setDots] = useState(false);

  useEffect(() => {
    const updateSettings = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 1024) {
        setSlidesToShow(screenWidth < 580 ? 1 : screenWidth < 768 ? 2 : screenWidth < 1100 ?3 : 4);
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

  const settings = {
    dots: dots,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  const cardsData = [
    {
      img: design,
      title: 'Responsive Design',
      description: 'Create mobile-friendly websites that adapt to different devices',
    },
    {
      img: seo,
      title: 'SEO Optimization',
      description: 'Boost website visibility on search engines for increased traffic',
    },
    {
      img: cms,
      title: 'CMS Integration',
      description: 'Add user-friendly content management for updates',
    },
    {
      img: ecommerce,
      title: 'E-commerce Setup',
      description: 'Establish an online store with secure payment processing',
    },
  ];

  return (
    <div className='service-section'>
      <div className='service-content'>
        <div className='service-content-title'>
          <h3>We Provide the Best Services</h3>
        </div>
        <div className='service-content-sub-title'>
          <span>We offer top-notch software services for your needs</span>
        </div>
        <div className='service-cards'>
          <Slider {...settings}>
            {cardsData.map((d) => (
              <div className='service-card' key={d.title}>
                <div className='service-image'>
                  <img src={d.img} alt={d.title} />
                </div>
                <div className='service-title'>{d.title}</div>
                <div className='service-description'>{d.description}</div>
              </div>
            ))}
          </Slider>
        </div>
        <div className='all-services'>
        {showLink && (
        <a href='/services' className='see-all-services'>
          See All Services
        </a>
      )}
        </div>
      </div>
    </div>
  );
}

export default Service;
