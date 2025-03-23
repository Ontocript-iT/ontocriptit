import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Ravishadi from "../../../Assets/ravishadhiMockup.png"
import Cpepstopik from "../../../Assets/cpedpstopik.png"
import Footer from "../../shared/footer/Footer";
import {motion} from "framer-motion";




const projects = [
  {
    id: 1,
    title: 'Company Website',
    description: 'Developed a portfolio website for a garment company to showcase their designs, production expertise, and brand identity. Ensured a modern, user-friendly interface for seamless navigation and enhanced online presence',
    image: Ravishadi,
    category: 'Web Development'
  },
  {
    id: 2,
    title: 'Korean Class E Learning platform',
    description: 'Developed a Korean Class E-Learning Platform for interactive language learning, featuring video lessons, quizzes, and progress tracking. Designed for seamless user experience and effective online education.',
    image: Cpepstopik,
    category: 'Web Development'
  },
  // {
  //   id: 3,
  //   title: 'AI-Powered Chatbot',
  //   description: 'An intelligent chatbot using natural language processing to provide customer support for a large telecom company.',
  //   image: '/api/placeholder/600/400',
  //   category: 'AI & Machine Learning'
  // },
  // {
  //   id: 4,
  //   title: 'Data Visualization Dashboard',
  //   description: 'An interactive dashboard for visualizing complex datasets, built with React and D3.js.',
  //   image: '/api/placeholder/600/400',
  //   category: 'Data Visualization'
  // },
  // {
  //   id: 5,
  //   title: 'Smart Home IoT System',
  //   description: 'An IoT system for home automation, including mobile app control and integration with popular smart home devices.',
  //   image: '/api/placeholder/600/400',
  //   category: 'IoT'
  // },
  // {
  //   id: 6,
  //   title: 'Blockchain-based Supply Chain',
  //   description: 'A blockchain solution for tracking and verifying the supply chain of luxury goods.',
  //   image: '/api/placeholder/600/400',
  //   category: 'Blockchain'
  // },
];

const PortfolioPage = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
      <div>
        <div
            className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 h-[60vh] md:h-[70vh] flex items-center">
          {/* Abstract tech background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-black">
              <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)"/>
              </svg>
            </div>
          </div>

          {/* Animated code snippet */}
          <motion.div
              className="absolute right-0 hidden w-1/3 overflow-hidden bg-white rounded-l-lg top-1/4 h-1/2 bg-opacity-10 md:block"
              initial={{x: "100%"}}
              animate={{x: 0}}
              transition={{duration: 1, ease: "easeOut"}}
          >
        <pre className="p-4 text-xs text-green-400 md:text-sm">
          <code>
            {`function transform(idea) {
  const solution = analyze(idea);
  if (solution.isInnovative) {
    return build(solution);
  }
  return evolve(idea);
}

`}
          </code>
        </pre>
          </motion.div>

          {/* Content */}
          <div className="relative z-10 max-w-4xl px-8 text-left md:px-16">
            <motion.h3
                className="mb-4 text-lg font-light text-blue-300 sm:text-xl"
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.6}}
            >
              Hello, Explorer
            </motion.h3>
            <motion.h1
                className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: 0.2}}
            >
              Browse Our Portfolio
            </motion.h1>
            <motion.p
                className="max-w-2xl mb-8 text-gray-300 text-md"
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: 0.4}}
            >
              Explore our portfolio to see how we deliver innovative, scalable software solutions. Our expert team creates high-performance applications and websites, ensuring seamless user experiences and business success
            </motion.p>
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: 0.6}}
                className="flex space-x-4"
            >
              {/*<a*/}
              {/*    href="#our-services"*/}
              {/*    className="px-6 py-3 font-semibold text-white transition duration-300 ease-in-out transform bg-blue-600 rounded-md hover:bg-blue-700 hover:-translate-y-1"*/}
              {/*>*/}
              {/*    Our Services*/}
              {/*</a>*/}
              {/*<a*/}
              {/*    href="#contact-us"*/}
              {/*    className="px-6 py-3 font-semibold text-white transition duration-300 ease-in-out transform bg-transparent border border-white rounded-md hover:bg-white hover:text-blue-900 hover:-translate-y-1"*/}
              {/*>*/}
              {/*    Contact Us*/}
              {/*</a>*/}
            </motion.div>
          </div>

          {/* Decorative elements */}
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div
              className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div
              className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        <div className="min-h-screen px-4 py-12 bg-gray-100 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                  <div
                      key={project.id}
                      className="overflow-hidden transition-all duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105"
                      onMouseEnter={() => setHoveredProject(project.id)}
                      onMouseLeave={() => setHoveredProject(null)}
                  >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-48 mt-10"
                    />
                    <div className="p-6">
                      <h3 className="mb-2 text-xl font-semibold text-gray-800">
                        {project.title}
                      </h3>
                      <p className="mb-4 text-gray-600">{project.description}</p>
                      <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-500">
                    {project.category}
                  </span>
                        {/* {hoveredProject === project.id && (
                            <button
                                className="flex items-center text-blue-500 transition-colors duration-300 hover:text-blue-600">
                              Learn More
                              <ArrowRight className="w-4 h-4 ml-1"/>
                            </button>
                        )} */}
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
        <Footer/>
      </div>
  );
};

export default PortfolioPage;