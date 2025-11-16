import React, { useState, useEffect, useCallback } from 'react';
import { CheckCircle, Shield, TrendingUp, Layers } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import image1 from "../../../../Assets/1234.png"
import image2 from "../../../../Assets/12345.png"

// Separate data into a constants file or separate module
const SERVICES_DATA = [
  {
    icon: CheckCircle,
    title: 'Expertise',
    description: 'Our team comprises seasoned professionals with extensive experience in IT solutions.',
  },
  {
    icon: Shield,
    title: 'Reliability',
    description: 'Count on us for dependable, 24/7 support to keep your operations running smoothly.',
  },
  {
    icon: Layers,
    title: 'Customization',
    description: 'We tailor our services to meet your specific business needs, ensuring optimal outcomes.',
  },
  {
    icon: TrendingUp,
    title: 'Scalability',
    description: 'Catalysts for change, scaling your business seamlessly.',
  },
];

const BADGE_DATA = [
  {
    icon: TrendingUp,
    title: 'Business Growth',
    description: 'Strategic solutions driving your business forward.',
  },
  {
    icon: Shield,
    title: 'IT Consultancy',
    description: 'Expert guidance for your technology infrastructure.',
  },
  {
    icon: Layers,
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud computing services.',
  },
  {
    icon: CheckCircle,
    title: 'Digital Transformation',
    description: 'Innovative approaches to modernize your business.',
  },
];

// Added missing cardsData for the carousel
const cardsData = [
  {
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs.'
  },
  {
    icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
    title: 'Cloud Services',
    description: 'Scalable and secure cloud computing solutions.'
  },
  {
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'IT Consulting',
    description: 'Expert guidance for your technology infrastructure.'
  },
  {
    icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
    title: 'Digital Transformation',
    description: 'Innovative approaches to modernize your business.'
  }
];

const ServiceBadge = ({ icon: Icon, title, description }) => (
    <div className="flex flex-col items-center p-4 text-center transition-colors rounded-lg hover:bg-blue-50">
      <div className="flex items-center justify-center w-12 h-12 mb-3 text-blue-500 bg-blue-100 rounded-full">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="mb-2 font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
);

const Service = ({ showLink = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsToShow(1);
      else if (window.innerWidth < 768) setItemsToShow(2);
      else if (window.innerWidth < 1024) setItemsToShow(3);
      else setItemsToShow(4);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % (cardsData.length - itemsToShow + 1)
    );
  }, [itemsToShow]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? cardsData.length - itemsToShow : prevIndex - 1
    );
  }, [itemsToShow]);

  return (
      <>
        <div className="pt-16 pb-20 bg-gray-100">
          <div className="px-4 mx-auto lg:px-8">
            {/* About Section */}
            <div className="grid items-center gap-12 lg:grid-cols-2">
              {/* Images */}
              <div className="relative grid grid-cols-2 gap-4 order-1 lg:order-first h-[450px] sm:ml-32">
                <div className="absolute top-0 left-0 w-[65%] z-10 shadow-2xl rounded-lg overflow-hidden transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <img
                      src={image1}
                      alt="Team collaboration"
                      className="w-full h-full md:h-[475px] lg:h-full xl:h-[600px] object-cover"
                  />
                </div>
                <div className="absolute top-16 right-0 w-[65%] z-20 shadow-1xl rounded-lg overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <img
                      src={image2}
                      alt="Tech solutions"
                      className="w-[300px] object-cover"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div>
                <h2 className="mb-4 text-2xl font-bold leading-tight md:text-4xl text-blueColor">
                  We Provide the Best <span className="text-blue-600">IT Solutions</span>
                </h2>
                <p className="mb-6 text-base text-gray-700 md:text-lg">
                  At Ontocript IT, we specialize in delivering cutting-edge technology solutions tailored to meet the unique needs of businesses. Our experienced team offers reliable, scalable, and cost-effective services, including cloud computing, cybersecurity, software development, and IT consulting.
                </p>
                <ul className="space-y-4 text-gray-700">
                  {SERVICES_DATA.map((service, index) => (
                      <li key={index} className="flex items-start">
                        <service.icon className="flex-shrink-0 w-6 h-6 mt-6 mr-3 text-blue-500" />
                        <p className="mt-6">
                          <span className="font-medium">{service.title}: </span>
                          {service.description}
                        </p>
                      </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Badge Section */}
            <div className="lg:mt-32 md:mt-8">
              <h3 className="mb-8 text-2xl font-bold text-center text-blueColor md:text-3xl">
                Our Core Capabilities
              </h3>
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {BADGE_DATA.map((badge, index) => (
                    <ServiceBadge key={index} {...badge} />
                ))}
              </div>
            </div>

            {/* Services Carousel Section */}
            {/*<div className="py-16 bg-gradient-to-br">*/}
            {/*  <div className="px-4 mx-auto ">*/}
            {/*    <h2 className="mb-4 text-3xl font-bold text-center text-gray-800">*/}
            {/*      We Provide the Best Services*/}
            {/*    </h2>*/}
            {/*    <p className="max-w-2xl mx-auto mb-12 text-center text-gray-600">*/}
            {/*      We offer top-notch software services for your needs*/}
            {/*    </p>*/}
            {/*    <div className="relative">*/}
            {/*      <div className="flex items-center justify-center">*/}
            {/*        <button*/}
            {/*            onClick={prevSlide}*/}
            {/*            className="absolute left-0 z-10 p-2 transition-colors duration-200 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"*/}
            {/*        >*/}
            {/*          <ChevronLeft className="w-6 h-6 text-gray-600" />*/}
            {/*        </button>*/}
            {/*        <div className="flex overflow-hidden">*/}
            {/*          {cardsData.slice(currentIndex, currentIndex + itemsToShow).map((service, index) => (*/}
            {/*              <div key={service.title} className="w-full px-4 sm:w-1/2 md:w-1/3 lg:w-1/4">*/}
            {/*                <div className="p-6 overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1">*/}
            {/*                  <svg className="w-12 h-12 mx-auto mb-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">*/}
            {/*                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />*/}
            {/*                  </svg>*/}
            {/*                  <h3 className="mb-2 text-xl font-semibold text-center text-gray-800">{service.title}</h3>*/}
            {/*                  <p className="text-center text-gray-600">{service.description}</p>*/}
            {/*                </div>*/}
            {/*              </div>*/}
            {/*          ))}*/}
            {/*        </div>*/}
            {/*        <button*/}
            {/*            onClick={nextSlide}*/}
            {/*            className="absolute right-0 z-10 p-2 transition-colors duration-200 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"*/}
            {/*        >*/}
            {/*          <ChevronRight className="w-6 h-6 text-gray-600" />*/}
            {/*        </button>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*    {showLink && (*/}
            {/*        <div className="mt-12 text-center">*/}
            {/*          <a*/}
            {/*              href="/services"*/}
            {/*              className="inline-block px-6 py-2 font-semibold text-white transition-colors duration-300 rounded-full bg-orangeColor hover:bg-orange-500"*/}
            {/*          >*/}
            {/*            See All Services*/}
            {/*          </a>*/}
            {/*        </div>*/}
            {/*    )}*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </div>
      </>
  );
};

export default Service;