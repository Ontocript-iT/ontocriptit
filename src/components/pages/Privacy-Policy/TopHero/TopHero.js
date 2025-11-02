import React from 'react';
import { motion } from 'framer-motion';

const TopHero = () => {
  return (
      <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 h-[50vh] md:h-[70vh] flex items-center pt-10 pb-10">
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
            className="absolute right-0 hidden w-1/3 overflow-hidden bg-white rounded-l-lg top-1/4 h-1/2 bg-opacity-10 md:block"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
        <pre className="p-4 text-xs text-green-400 md:text-sm">
          <code>
   {`function protectPrivacy(userData) {
  const policy = review(userData);
  if (policy.isCompliant) {
    return secure(userData);
  }
  return updatePolicy(userData);
}`}
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
            Ontocript iT
          </motion.h3>
          <motion.h1
              className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
          >
            PRIVACY POLICY
          </motion.h1>
          <motion.p
              className="max-w-2xl mb-8 text-gray-300 text-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
          >
            This Privacy Policy explains how we collect, use, and protect your personal data. By using our services, you agree to the terms outlined in this policy     </motion.p>
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
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
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>
  );
};

export default TopHero;