import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "Ontocript IT (Pvt) Ltd";
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let isMounted = true;
    let index = 0;

    const handleTyping = () => {
      if (!isMounted) return;

      if (!isDeleting && displayText.length < fullText.length) {
        // Typing forward
        setDisplayText(fullText.slice(0, displayText.length + 1));
        setTypingSpeed(100);
      } else if (isDeleting && displayText.length > 0) {
        // Deleting backward
        setDisplayText(fullText.slice(0, displayText.length - 1));
        setTypingSpeed(50);
      } else if (displayText.length === fullText.length && !isDeleting) {
        // Pause at full text
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      } else if (isDeleting && displayText.length === 0) {
        // Reset to start typing again
        setIsDeleting(false);
      }

      setTimeout(handleTyping, typingSpeed);
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => {
      isMounted = false;
      clearTimeout(typingTimeout);
    };
  }, [displayText, isDeleting, typingSpeed]);

  const colors = {
    blueColor: "#152039",
    whiteColor: "#ffffff",
    orangeColor: "#FFA500",
  };

  const backgroundGradients = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 0.2 },
    transition: { duration: 2, ease: "easeOut" },
  };

  return (
    <div className="relative pt-2 overflow-hidden bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 min-h-[60vh] sm:pt-10 md:min-h-[70vh] flex items-center">
      {/* Abstract tech background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: colors.blueColor }}
        >
          <svg
            className="absolute w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
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
                  stroke={`${colors.whiteColor}10`}
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
        className="absolute right-0 hidden w-1/3 overflow-hidden rounded-l-lg top-1/4 h-1/2 bg-opacity-10 md:block"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ backgroundColor: `${colors.whiteColor}10` }}
      >
        <pre className="p-4 text-xs text-green-400 lg:text-sm">
          <code>
            {`function welcome(user) {
  const greeting = greet(user);
  if (greeting.isWarm) {
    return engage(greeting);
  }
  return assist(user);
}`}
          </code>
        </pre>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-8 text-left md:px-16">
        <motion.h3
          className="mb-1 text-lg font-light text-blue-300 sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ color: colors.whiteColor }}
        >
          Welcome to
        </motion.h3>
        <motion.h1
          className="mb-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ color: colors.whiteColor }}
        >
          {displayText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{
              duration: 0.7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block w-1 h-full ml-1 bg-white"
          />
        </motion.h1>
        <motion.p
          className="max-w-2xl mb-8 text-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ color: "white", opacity: 0.6 }} // Reduced opacity
        >
          Ontocript IT (Pvt) Ltd, we specialize in developing innovative and
          high performing software solutions that empower businesses to achieve
          success. With proven expertise in web development, mobile application
          development, and cloud computing, we deliver customized and scalable
          solutions tailored to meet each client’s unique needs. Our focus on
          innovation, efficiency, and client satisfaction ensures that we
          transform your vision into a powerful digital reality.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="px-8 py-3 sm:w-[44] w-[200px] rounded-md font-semibold text-[15px] transition duration-300 ease-in-out flex items-center justify-center"
              style={{
                backgroundColor: colors.whiteColor,
                color: colors.blueColor,
              }}
            >
              Let's talk
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.div>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/portfolio"
              className="px-8 py-3 sm:w-[44] w-[300px] bg-orangeColor text-whiteColor mb-10 rounded-md font-semibold text-[15px] transition duration-300 ease-in-out flex items-center justify-center"
            >
              See our works
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        style={{ backgroundColor: colors.whiteColor }}
        {...backgroundGradients}
      ></motion.div>
      <motion.div
        className="absolute bottom-0 right-0 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        style={{ backgroundColor: colors.whiteColor }}
        {...backgroundGradients}
      ></motion.div>
    </div>
  );
};

export default Hero;
