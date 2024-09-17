import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Ravishadi from "../../../Assets/ravishadhiMockup.png"
import Footer from "../../shared/footer/Footer";




const projects = [
  {
    id: 1,
    title: 'Company portfolio',
    description: 'A fully responsive e-commerce website with user authentication, product catalog, and payment integration.',
    image: Ravishadi,
    category: 'Web Development'
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    description: 'An iOS and Android app for secure mobile banking with features like account management and fund transfers.',
    image: '/api/placeholder/600/400',
    category: 'Mobile App'
  },
  {
    id: 3,
    title: 'AI-Powered Chatbot',
    description: 'An intelligent chatbot using natural language processing to provide customer support for a large telecom company.',
    image: '/api/placeholder/600/400',
    category: 'AI & Machine Learning'
  },
  {
    id: 4,
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets, built with React and D3.js.',
    image: '/api/placeholder/600/400',
    category: 'Data Visualization'
  },
  {
    id: 5,
    title: 'Smart Home IoT System',
    description: 'An IoT system for home automation, including mobile app control and integration with popular smart home devices.',
    image: '/api/placeholder/600/400',
    category: 'IoT'
  },
  {
    id: 6,
    title: 'Blockchain-based Supply Chain',
    description: 'A blockchain solution for tracking and verifying the supply chain of luxury goods.',
    image: '/api/placeholder/600/400',
    category: 'Blockchain'
  },
];

const PortfolioPage = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
      <div>
      <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-extrabold text-blueColor text-center mb-12">
            Our Portfolio
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
                <div
                    key={project.id}
                    className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105"
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                >
                  <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 mt-10 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-blue-500">
                    {project.category}
                  </span>
                      {hoveredProject === project.id && (
                          <button className="flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-300">
                            Learn More
                            <ArrowRight className="ml-1 w-4 h-4" />
                          </button>
                      )}
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