import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Ravishadi from "../../../Assets/ravishadhiMockup.png";
import Cpepstopik from "../../../Assets/cpedpstopik.png";
import BarAssociation from "../../../Assets/kbbba.png";
import FadaExpress from "../../../Assets/fdetask.png";
import Ruuma from "../../../Assets/rma.png";
import SocialMedia from "../../../Assets/np.png";
import GSC from "../../../Assets/gscc.png";
import Footer from "../../shared/footer/Footer";
import { motion } from "framer-motion";
import OurPartners from "../home/partners/Partners";

const projects = [
  {
    id: 1,
    title: "Company Website",
    description:
      "Developed a portfolio website for a garment company to showcase their designs, production expertise, and brand identity. Ensured a modern, user-friendly interface for seamless navigation and enhanced online presence.",
    image: Ravishadi,
    category: "Web Development",
  },
  {
    id: 2,
    title: "Korean Class E Learning platform",
    description:
      "Developed a Korean Class E-Learning Platform for interactive language learning, featuring video lessons, quizzes, and progress tracking. Designed for seamless user experience and effective online education.",
    image: Cpepstopik,
    category: "Web Development",
  },
  {
    id: 3,
    title: "Kalutara Bar Association Website",
    description:
      "We had the privilege of designing and developing the official website for the Kalutara Bar Association. The site was built with a clean, user-friendly interface to provide easy access to important information.",
    image: BarAssociation,

    category: "Web Development",
  },
  {
    id: 4,
    title: "Fadar Express App for Shopify",
    description:
      "We developed the Fadar Express app for Shopify, integrating one of Sri Lanka's leading delivery services directly into the Shopify platform. This app allows online store owners to easily manage deliveries, track shipments, and streamline order fulfillment with Fadar Express. With a smooth user experience and reliable integration, the app helps merchants enhance their logistics operations and provide fast, efficient delivery to customers across Sri Lanka.",
    image: FadaExpress,
    category: "Shopify App Development",
  },
  {
    id: 5,
    title: "Ruuma Mobile App",
    description:
      "We are in the process of developing a mobile app designed to help users discover boarding places nearby. Featuring an integrated map and advanced filtering options, the app will make it easier to find suitable accommodations based on individual preferences. Our development team is dedicated to refining the app continuously to deliver a smooth and reliable user experience.",
    image: Ruuma,
    category: "Mobile App Development",
  },
  {
    id: 6,
    title: "Social Media App",
    description:
      "We are developing a social media app designed to connect users and foster meaningful interactions. Our team is not only focused on building the backend functionality but also crafting intuitive and engaging user interfaces to ensure a seamless experience. The platform will offer features that enhance communication, sharing, and community engagement. Currently in active development, we are dedicated to continuously improving the app to meet users’ evolving needs.",
    image: SocialMedia,
    category: "Mobile App Development",
  },
    {
    id: 7,
    title: "Good Samaritan Club",
    description:
      "We designed and developed the official website for Good Samaritan Club Sri Lanka to strengthen their mission of serving communities with kindness and compassion. The website features a clean, modern design with user-friendly navigation, providing easy access to information about their charity projects, events, volunteer opportunities, and donation programs, helping them connect and engage effectively with supporters nationwide.",
    image: GSC,
    category: "Web Development",
  },
];

const DESCRIPTION_LIMIT = 150;

const PortfolioPage = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [expandedIds, setExpandedIds] = useState([]);

  const toggleDescription = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  return (
    <div>
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 h-[60vh] md:h-[70vh] flex items-center">
        {/* Abstract tech background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-black">
            <svg
              className="absolute w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        {/* Animated code snippet */}
        <motion.div
          className="absolute right-0 hidden w-1/3 overflow-hidden bg-white rounded-l-lg top-1/4 h-1/2 bg-opacity-10 md:block"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hello, Explorer
          </motion.h3>
          <motion.h1
            className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Browse Our Portfolio
          </motion.h1>
          <motion.p
            className="max-w-2xl mb-8 text-gray-300 text-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Explore our portfolio to see how we deliver innovative, scalable
            software solutions. Our expert team creates high-performance
            applications and websites, ensuring seamless user experiences and
            business success
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex space-x-4"
          >
            {/* Uncomment and customize if needed */}
            {/* <a
              href="#our-services"
              className="px-6 py-3 font-semibold text-white transition duration-300 ease-in-out transform bg-blue-600 rounded-md hover:bg-blue-700 hover:-translate-y-1"
            >
              Our Services
            </a>
            <a
              href="#contact-us"
              className="px-6 py-3 font-semibold text-white transition duration-300 ease-in-out transform bg-transparent border border-white rounded-md hover:bg-white hover:text-blue-900 hover:-translate-y-1"
            >
              Contact Us
            </a> */}
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      {/* Portfolio Grid */}

      <div className="min-h-screen px-4 py-12 bg-gray-100 sm:px-6 lg:px-8">
        <h2
          className="mt-6 mb-4 text-2xl font-bold text-center text-gray-800 md:text-3xl"
          data-aos="fade-up"
        >
          Our Successful Client Projects
        </h2>
        <p
          className="max-w-2xl mx-auto mb-12 text-base text-center text-gray-600 md:text-md"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Showcasing our innovative work and trusted partnerships that drive
          business growth through creative digital solutions
        </p>
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => {
              const isExpanded = expandedIds.includes(project.id);
              const shouldShowToggle =
                project.description.length > DESCRIPTION_LIMIT;
              const displayedDescription = isExpanded
                ? project.description
                : project.description.slice(0, DESCRIPTION_LIMIT) +
                  (shouldShowToggle ? "..." : "");

              return (
                <div
                  key={project.id}
                  className="overflow-hidden transition-transform duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Fixed height image container with object-cover */}
                  <div
                    className={`relative mt-3 overflow-hidden rounded-t-lg items-center ${
                      project.imageWidth || "w-full"
                    } ${project.imageHeight || "h-48"}`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="items-center object-cover w-full h-full"
                    />
                  </div>

                  <div className="flex flex-col p-6">
                    <h3 className="mb-2 text-xl font-semibold text-gray-800">
                      {project.title}
                    </h3>

                    <p className="flex-grow mb-2 text-justify text-gray-600">
                      {displayedDescription}
                    </p>

                    {shouldShowToggle && (
                      <button
                        onClick={() => toggleDescription(project.id)}
                        className="self-start text-blue-500 hover:text-blue-700 focus:outline-none"
                        aria-label={
                          isExpanded
                            ? "See less description"
                            : "See more description"
                        }
                      >
                        {isExpanded ? "See Less" : "See More"}
                      </button>
                    )}

                    <div className="mt-4">
                      <span className="text-sm font-medium text-blue-500">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <OurPartners />
      <Footer />
    </div>
  );
};

export default PortfolioPage;
