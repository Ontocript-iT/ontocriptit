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
import flutter from '../../../../Assets/flutter-logo.png';
import rNative from '../../../../Assets/react-native.png';
import remix from '../../../../Assets/remi.png';


const techStacks = [
  { name: 'React', icon: react },
  { name: 'Angular', icon: angular },
  { name: 'Spring', icon: spring },
  { name: 'PostgreSQL', icon: postgresql },
  { name: 'MongoDB', icon: mongodb },
  { name: 'MySQL', icon: mysql },
  { name: 'Postman', icon: postman },
  { name: 'WordPress', icon: wordPress },
  { name: 'Flutter', icon: flutter },
  { name: 'React Native', icon: rNative },
  { name: 'Remix', icon: remix },
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
      <div className="pb-10 bg-gray-100">
        <div className="container px-4 pt-3 mx-auto ">
          <h2 className="pt-4 mb-4 text-3xl font-bold text-center text-blueColor">
            Tech Stack We Work With
          </h2>
          <p className="max-w-2xl mx-auto mb-6 text-center text-gray-600 sm:mb-8">
            We always look for new technologies to ensure our international clients get the best and newest digital products.
          </p>
          <div className="relative mb">
            <div className="flex items-center justify-center mb-6">
              <div className="flex-grow h-px bg-gray-300"></div>
              <span className="px-4 font-semibold text-gray-500">Tech Stack</span>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>
            <div className="flex items-center justify-center">
              <button
                  onClick={prevSlide}
                  className="p-2 transition-colors duration-200 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <div className="flex mx-2 overflow-hidden">
                {techStacks.slice(currentIndex, currentIndex + itemsToShow).map((tech, index) => (
                    <div key={index} className="w-[200px] sm:w-1/2 md:w-1/3 lg:w-[300px] px-2">
                      <div className="flex flex-col items-center justify-center p-4 transition-all duration-200 bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1">
                        <img src={tech.icon} alt={tech.name} className="object-contain h-16 mb-2 w-28" />
                        <p className="text-[15px] font-medium text-gray-700">{tech.name}</p>
                      </div>
                    </div>
                ))}
              </div>
              <button
                  onClick={nextSlide}
                  className="p-2 transition-colors duration-200 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
