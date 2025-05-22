import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

/**
 * Interface pour les techniques individuelles
 */
interface Technique {
  name: string;
  description: string;
  glossaryTerm?: React.ReactNode;
}

/**
 * Interface pour les propriétés du composant TechniqueSection
 */
interface TechniqueSectionProps {
  title: string;
  icon: LucideIcon;
  techniques: Technique[];
  delay: number;
}

/**
 * Composant TechniqueSection - Affiche une section de techniques de mémorisation
 * avec animation et mise en forme cohérente
 */
const TechniqueSection: React.FC<TechniqueSectionProps> = ({ title, icon: Icon, techniques, delay }) => {
  return (
    <motion.div
      className="bg-muted p-4 rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <h4 className="font-semibold mb-2 text-neuro-purple flex items-center gap-2">
        <Icon className="h-4 w-4" /> {title}
      </h4>
      <ul className="list-disc pl-5 space-y-2">
        {techniques.map((technique, index) => (
          <li key={index}>
            <span className="font-medium">
              {technique.glossaryTerm || technique.name}
            </span> : 
            {technique.description}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default TechniqueSection;