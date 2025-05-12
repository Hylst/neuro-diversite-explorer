
import React from 'react';
import { Button } from '@/components/ui/button';
import { ZoomIn, ZoomOut, RotateCcw, Eye, EyeOff, ChevronRight, ChevronLeft } from 'lucide-react';
import { BrainViewMode } from '../types/brain-types';

interface BrainViewControlsProps {
  zoomIn: () => void;
  zoomOut: () => void;
  reset: () => void;
  toggleLabels: () => void;
  switchView: (direction: 'next' | 'prev') => void;
  viewMode: BrainViewMode;
  showLabels: boolean;
}

const BrainViewControls: React.FC<BrainViewControlsProps> = ({
  zoomIn,
  zoomOut,
  reset,
  toggleLabels,
  switchView,
  viewMode,
  showLabels
}) => {
  return (
    <>
      <div className="absolute top-4 left-4 z-10 flex gap-2">
        <Button variant="secondary" size="sm" onClick={zoomIn}>
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button variant="secondary" size="sm" onClick={zoomOut}>
          <ZoomOut className="h-4 w-4" />
        </Button>
        <Button variant="secondary" size="sm" onClick={reset}>
          <RotateCcw className="h-4 w-4" />
        </Button>
        <Button variant="secondary" size="sm" onClick={toggleLabels}>
          {showLabels ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
        </Button>
      </div>
      
      <div className="absolute top-4 right-4 z-10 flex gap-2">
        <Button variant="secondary" size="sm" onClick={() => switchView('prev')}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="bg-secondary px-3 py-1 rounded-md text-sm font-medium">
          Vue {viewMode === '3d' ? '3D' :
              viewMode === 'lateral' ? 'latérale' : 
              viewMode === 'medial' ? 'médiale' :
              viewMode === 'superior' ? 'supérieure' : 'inférieure'}
        </div>
        <Button variant="secondary" size="sm" onClick={() => switchView('next')}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
};

export default BrainViewControls;
