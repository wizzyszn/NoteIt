import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedPageProps {
  children: React.ReactNode;
}
const pageVariants = {
  initial: {
    scale: 0.8,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
  },
  exit: {
    scale: 0.8,
    opacity: 0,
  },
};
const pageTransition = {
  type: 'tween' as const,
  ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smoothness
  duration: 0.4,
};
const AnimatedPage: React.FC<AnimatedPageProps> = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
      style={{
        width: '100%',
        height: '100vh',
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;