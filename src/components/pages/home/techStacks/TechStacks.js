import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import angular from '../../../../Assets/angular.png';
import spring from '../../../../Assets/spring.png';
import postgresql from '../../../../Assets/postgresql.png';
import mongodb from '../../../../Assets/mongodb.png';
import mysql from '../../../../Assets/mysql.png';
import postman from '../../../../Assets/postman.png';
import react from '../../../../Assets/reactjs.png';
import wordPress from '../../../../Assets/wordPress.png';

const techStacks = [
  { name: 'React', icon: react },
  { name: 'Angular', icon: angular },
  { name: 'Spring', icon: spring },
  { name: 'PostgreSQL', icon: postgresql },
  { name: 'MongoDB', icon: mongodb },
  { name: 'MySQL', icon: mysql },
  { name: 'Postman', icon: postman },
  { name: 'WordPress', icon: wordPress },
];

const TechStacks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsToShow(1); // Full width on small devices
      else if (window.innerWidth < 768) setItemsToShow(2);
      else if (window.innerWidth < 1024) setItemsToShow(3);
      else setItemsToShow(5);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % (techStacks.length - itemsToShow + 1)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? techStacks.length - itemsToShow : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [itemsToShow]);

  return (
      <div className="bg-gray-100 py-32 -mt-24">
        <div className="container mx-auto px-4 pt-3 ">
          <h2 className="text-3xl font-bold text-center pt-4 mb-4 text-whiteColor">
            Tech Stack We Work With
          </h2>
          <p className="text-center text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            We always look for new technologies to ensure our international clients get the best and newest digital products.
          </p>
          <div className="relative mb">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gray-300 flex-grow"></div>
              <span className="px-4 text-gray-500 font-semibold">Tech Stack</span>
              <div className="h-px bg-gray-300 flex-grow"></div>
            </div>
            <div className="flex items-center justify-center">
              <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <div className="flex overflow-hidden mx-2">
                {techStacks.slice(currentIndex, currentIndex + itemsToShow).map((tech, index) => (
                    <div key={index} className="w-[200px] sm:w-1/2 md:w-1/3 lg:w-[300px] px-2">
                      <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                        <img src={tech.icon} alt={tech.name} className="w-28 h-16 mb-2 object-contain" />
                        <p className="text-[15px] font-medium text-gray-700">{tech.name}</p>
                      </div>
                    </div>
                ))}
              </div>
              <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default TechStacks;
