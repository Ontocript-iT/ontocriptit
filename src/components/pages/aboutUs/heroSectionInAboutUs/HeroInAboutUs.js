import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 h-[50vh] md:h-[60vh] flex items-center">
            {/* Abstract tech background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-black">
                    <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>
            </div>

            {/* Animated code snippet */}
            <motion.div
                className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-opacity-10 bg-white rounded-l-lg overflow-hidden hidden md:block"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
        <pre className="text-green-400 text-xs md:text-sm p-4">
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
            <div className="relative z-10 text-left px-8 md:px-16 max-w-4xl">
                <motion.h3
                    className="text-lg sm:text-xl text-blue-300 font-light mb-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Who is the
                </motion.h3>
                <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Ontocript It
                </motion.h1>
                <motion.p
                    className="text-gray-300 text-md mb-8 max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    At OntocriptiT, we turn ideas into impactful software. Specializing in web, mobile, and cloud technologies, we deliver tailored solutions to meet your business needs, with a focus on innovation and customer satisfaction              </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex space-x-4"
                >
                    {/*<a*/}
                    {/*    href="#our-services"*/}
                    {/*    className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1"*/}
                    {/*>*/}
                    {/*    Our Services*/}
                    {/*</a>*/}
                    {/*<a*/}
                    {/*    href="#contact-us"*/}
                    {/*    className="bg-transparent border border-white text-white font-semibold py-3 px-6 rounded-md hover:bg-white hover:text-blue-900 transition duration-300 ease-in-out transform hover:-translate-y-1"*/}
                    {/*>*/}
                    {/*    Contact Us*/}
                    {/*</a>*/}
                </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
    );
};

export default HeroSection;