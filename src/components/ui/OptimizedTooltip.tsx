import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Optimized Tooltip Component
 * Prevents performance issues with multiple tooltips by using useCallback
 * and optimized animation settings
 */
interface OptimizedTooltipProps {
  id: string;
  children: React.ReactNode;
  content: string;
  className?: string;
}

const OptimizedTooltip: React.FC<OptimizedTooltipProps> = ({ 
  id, 
  children, 
  content, 
  className = "cursor-help text-blue-600 hover:text-blue-800 transition-colors border-b border-dotted border-blue-400" 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  return (
    <div className="relative inline-block">
      <span 
        className={className}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </span>
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute z-50 w-64 p-3 bg-gray-900 text-white text-sm rounded-lg shadow-lg -top-2 left-full ml-2 pointer-events-none"
          >
            {content}
            <div className="absolute top-3 -left-1 w-2 h-2 bg-gray-900 rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OptimizedTooltip;