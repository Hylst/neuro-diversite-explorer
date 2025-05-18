import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TroubleHeroSectionProps {
  title: string;
  subtitle: string;
  color: string;
}

const TroubleHeroSection: React.FC<TroubleHeroSectionProps> = ({ title, subtitle, color }) => {
  return (
    <div className="bg-muted py-12 md:py-20">
      <div className="container">
        <div className="flex items-center mb-6">
          <Button variant="ghost" size="icon" asChild className="mr-2">
            <Link to="/troubles">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Retour</span>
            </Link>
          </Button>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={color}>{title}</span>
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default TroubleHeroSection;