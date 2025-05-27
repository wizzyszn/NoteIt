import React from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

interface AnimatedRouterProviderProps {
  children: React.ReactNode;
}

const AnimatedRouterProvider: React.FC<AnimatedRouterProviderProps> = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <div key={location.pathname}>
        {children}
      </div>
    </AnimatePresence>
  );
};

export default AnimatedRouterProvider;