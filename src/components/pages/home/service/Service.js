import React from 'react';
import Slider from 'react-slick';
import './Service.css';
import design from '../../../../Assets/Design.png';
import seo from '../../../../Assets/SEO.png';
import cms from '../../../../Assets/CMS.png';
import ecommerce from '../../../../Assets/Ecommerce.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Service() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
          <h3>We provide the best services</h3>
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
          <a href='#' className='see-all-services'>
            See All Services
          </a>
        </div>
      </div>
    </div>
  );
}

export default Service;
