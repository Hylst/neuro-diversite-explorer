import React from 'react';
import { motion } from 'framer-motion';

/**
 * Interface pour les propriétés du composant MemoryTip
 */
interface MemoryTipProps {
  title: string;
  description: string;
  tips: string[];
  bgColor: string;
  delay: number;
  icon?: React.ReactNode;
}

/**
 * Composant MemoryTip - Affiche une astuce ou un conseil de mémorisation
 * avec animation et mise en forme personnalisable
 */
const MemoryTip: React.FC<MemoryTipProps> = ({ 
  title, 
  description, 
  tips, 
  bgColor, 
  delay, 
  icon 
}) => {
  return (
    <motion.div
      className={`p-4 rounded-lg mt-6 ${bgColor}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <h4 className="font-semibold mb-2 flex items-center gap-2">
        {icon && icon}
        {title}
      </h4>
      <p className="mb-2">{description}</p>
      
      {tips.length > 0 && (
        <ul className="list-disc pl-5 space-y-1">
          {tips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

export default MemoryTip;