import React from 'react';
import { motion } from 'framer-motion';

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const TransitionOverlay = () => {
  return (
    <motion.div
      className="transition-overlay"
      initial="hidden"
      animate="visible"
      variants={overlayVariants}
      transition={{ duration: 0.5 }}
    />
  );
};

export default TransitionOverlay;
