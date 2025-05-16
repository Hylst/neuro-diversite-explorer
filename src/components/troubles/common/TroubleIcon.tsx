import React from 'react';
import { BookOpen, BrainCircuit, Calculator, ScanSearch, Puzzle, MessageSquare, Activity, Brain, Pencil, FileText } from 'lucide-react';

export type TroubleIconType = 
  | 'dyslexie'
  | 'dyspraxie'
  | 'dyscalculie'
  | 'dysphasie'
  | 'dysorthographie'
  | 'dysgraphie'
  | 'tdah'
  | 'tsa'
  | 'neurodegeneratifs'
  | 'lesions-cerebrales';

interface TroubleIconProps {
  trouble: TroubleIconType;
  className?: string;
  color?: string;
}

const TroubleIcon: React.FC<TroubleIconProps> = ({ trouble, className = "h-6 w-6", color }) => {
  const getIcon = () => {
    switch (trouble) {
      case 'dyslexie':
        return <BookOpen className={className} style={color ? { color } : {}} />;
      case 'dyspraxie':
        return <BrainCircuit className={className} style={color ? { color } : {}} />;
      case 'dyscalculie':
        return <Calculator className={className} style={color ? { color } : {}} />;
      case 'dysphasie':
        return <MessageSquare className={className} style={color ? { color } : {}} />;
      case 'dysorthographie':
        return <FileText className={className} style={color ? { color } : {}} />;
      case 'dysgraphie':
        return <Pencil className={className} style={color ? { color } : {}} />;
      case 'tdah':
        return <ScanSearch className={className} style={color ? { color } : {}} />;
      case 'tsa':
        return <Puzzle className={className} style={color ? { color } : {}} />;
      case 'neurodegeneratifs':
        return <Brain className={className} style={color ? { color } : {}} />;
      case 'lesions-cerebrales':
        return <Activity className={className} style={color ? { color } : {}} />;
      default:
        return <BookOpen className={className} style={color ? { color } : {}} />;
    }
  };

  return getIcon();
};

export default TroubleIcon;