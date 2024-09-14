import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const cardsData = [
  {
    icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
    title: 'Responsive Design',
    description: 'Create mobile-friendly websites that adapt to different devices',
  },
  {
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
    title: 'SEO Optimization',
    description: 'Boost website visibility on search engines for increased traffic',
  },
  {
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
    title: 'CMS Integration',
    description: 'Add user-friendly content management for updates',
  },
  {
    icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
    title: 'E-commerce Setup',
    description: 'Establish an online store with secure payment processing',
  },
];

function Service({ showLink }) {
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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % (cardsData.length - itemsToShow + 1)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? cardsData.length - itemsToShow : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [itemsToShow]);

  return (
      <div className="bg-gradient-to-br  py-16">
        <div className=" mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            We Provide the Best Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We offer top-notch software services for your needs
          </p>
          <div className="relative">
            <div className="flex items-center justify-center">
              <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 absolute left-0 z-10"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <div className="flex overflow-hidden">
                {cardsData.slice(currentIndex, currentIndex + itemsToShow).map((service, index) => (
                    <div key={service.title} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4">
                      <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <svg className="w-12 h-12 text-blue-500 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                        </svg>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{service.title}</h3>
                        <p className="text-gray-600 text-center">{service.description}</p>
                      </div>
                    </div>
                ))}
              </div>
              <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 absolute right-0 z-10"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
          {showLink && (
              <div className="text-center mt-12">
                <a
                    href="/services"
                    className="inline-block bg-orangeColor text-white font-semibold py-2 px-6 rounded-full hover:bg-orange-500 transition-colors duration-300"
                >
                  See All Services
                </a>
              </div>
          )}
        </div>
      </div>
  );
}

export default Service;