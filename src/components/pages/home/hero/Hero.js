import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
    const colors = {
        blueColor: '#152039',
        whiteColor: '#ffffff'
    };

    const backgroundGradients = {
        initial: { scale: 0.9, opacity: 0 },
        animate: { scale: 1, opacity: 0.2 },
        transition: { duration: 2, ease: "easeOut" }
    };

    return (
        <div className="relative pt-16 overflow-hidden bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 h-[70vh] sm:pt-20 md:h-[80vh] flex items-center" >
            {/* Abstract tech background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{ backgroundColor: colors.blueColor }}>
                    <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke={`${colors.whiteColor}10`} strokeWidth="1"/>
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>
            </div>

            {/* Animated code snippet */}
            <motion.div
                className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-opacity-10 rounded-l-lg overflow-hidden"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{ backgroundColor: `${colors.whiteColor}10` }}
            >
                <pre className="text-xs text-green-400 md:text-sm p-4" >
                    <code>
                        {`function welcome(user) {
  const greeting = greet(user);
  if (greeting.isWarm) {
    return engage(greeting);
  }
  return assist(user);
}


`}
                    </code>
                </pre>
            </motion.div>

            {/* Content */}
            <div className="relative  z-10 text-left px-8 md:px-16 max-w-4xl">
                <motion.h3
                    className="text-lg sm:text-xl font-light mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ color: colors.whiteColor }}
                >
                    Welcome to the
                </motion.h3>
                <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ color: colors.whiteColor }}
                >
                    OntocriptiT Software Solutions
                </motion.h1>
                <motion.p
                    className="text-lg mb-8 max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{ color: `${colors.whiteColor}CC` }}
                >
                    At OntocriptiT, we craft cutting-edge software that drives business success. With expertise in web development, mobile apps, and cloud computing, we provide customized, scalable solutions that prioritize innovation, efficiency, and client satisfaction. Let us transform your vision into a digital reality
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex space-x-4"
                >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                            to="/contact"
                            className="px-8 py-3 rounded-md font-semibold text-lg transition duration-300 ease-in-out flex items-center"
                            style={{ backgroundColor: colors.whiteColor, color: colors.blueColor }}
                        >
                            Let's talk
                            <motion.div
                                initial={{ x: 0 }}
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </motion.div>
                        </Link>
                        <Link
                            to="/portfolio"
                            className="px-8 py-3 mt-4 mb-20 bg-orangeColor text-whiteColor rounded-md font-semibold text-lg transition duration-300 ease-in-out flex items-center"

                        >
                            See our works
                            <motion.div
                                initial={{ x: 0 }}
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </motion.div>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <motion.div
                className="absolute top-0 left-0 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl"
                style={{ backgroundColor: `${colors.whiteColor}20` }}
                {...backgroundGradients}
            ></motion.div>
            <motion.div
                className="absolute bottom-0 right-0 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl"
                style={{ backgroundColor: `${colors.whiteColor}20` }}
                {...backgroundGradients}
            ></motion.div>
        </div>
    );
};

export default Hero;