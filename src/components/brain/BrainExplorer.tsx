
import React, { useState, Suspense, lazy } from 'react';
import { Brain } from 'lucide-react';
import { brainRegions } from './data/brain-regions-data';
import { BrainViewMode } from './types/brain-types';
import BrainViewControls from './explorer/BrainViewControls';
import BrainInfoPanel from './explorer/BrainInfoPanel';
import LoadingSpinner from '../ui/loading-spinner';

// Lazy load 3D components
const Brain3DModel = lazy(() => import('./Brain3DModel'));
const Brain2DVisualization = lazy(() => import('./explorer/Brain2DVisualization'));

const BrainExplorer = () => {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [viewMode, setViewMode] = useState<BrainViewMode>('3d');
  const [rotationSpeed, setRotationSpeed] = useState(0.5);
  const [showLabels, setShowLabels] = useState(true);

  const handleZoomIn = () => {
    if (zoomLevel < 1.5) setZoomLevel(zoomLevel + 0.1);
  };

  const handleZoomOut = () => {
    if (zoomLevel > 0.8) setZoomLevel(zoomLevel - 0.1);
  };

  const handleReset = () => {
    setZoomLevel(1);
    setRotation(0);
    setActiveRegion(null);
  };

  const switchView = (direction: 'next' | 'prev') => {
    const views: BrainViewMode[] = ['3d', 'lateral', 'medial', 'superior', 'inferior'];
    const currentIndex = views.indexOf(viewMode);
    
    if (direction === 'next') {
      setViewMode(views[(currentIndex + 1) % views.length]);
    } else {
      setViewMode(views[(currentIndex - 1 + views.length) % views.length]);
    }
  };

  const toggleLabels = () => {
    setShowLabels(!showLabels);
  };

  // Get the selected region information
  const selectedRegion = activeRegion 
    ? brainRegions.find(region => region.id === activeRegion) 
    : null;

  return (
    <div className="flex flex-col md:flex-row h-[600px]">
      {/* Brain Visualization */}
      <div className="w-full md:w-3/5 h-full bg-muted/30 relative flex items-center justify-center overflow-hidden">
        <BrainViewControls 
          zoomIn={handleZoomIn}
          zoomOut={handleZoomOut}
          reset={handleReset}
          toggleLabels={toggleLabels}
          switchView={switchView}
          viewMode={viewMode}
          showLabels={showLabels}
        />
        
        {/* Brain Visualization Based on View Mode with Suspense */}
        <Suspense fallback={
          <div className="w-full h-full flex items-center justify-center">
            <LoadingSpinner size="lg" text="Chargement du modèle cérébral..." />
          </div>
        }>
          {viewMode === '3d' ? (
            <div className="w-full h-full">
              <Brain3DModel 
                activeRegion={activeRegion} 
                setActiveRegion={setActiveRegion} 
                showLabels={showLabels}
                rotationSpeed={rotationSpeed}
              />
            </div>
          ) : (
            <Brain2DVisualization 
              viewMode={viewMode}
              zoomLevel={zoomLevel}
              rotation={rotation}
              hoveredRegion={hoveredRegion}
              setHoveredRegion={setHoveredRegion}
              activeRegion={activeRegion}
              setActiveRegion={setActiveRegion}
            />
          )}
        </Suspense>
      </div>
      
      {/* Information Panel */}
      <div className="w-full md:w-2/5 h-full bg-card flex flex-col">
        <div className="p-6 border-b">
          <div className="flex items-center gap-2 mb-4">
            <Brain className="h-6 w-6 text-neuro-purple" />
            <h2 className="text-2xl font-bold">Explorateur du Cerveau</h2>
          </div>
          <p className="text-muted-foreground">
            Explorez les différentes régions du cerveau en les sélectionnant sur le modèle. Vous pouvez zoomer, faire pivoter et changer la vue pour observer les structures cérébrales sous différents angles.
          </p>
        </div>
        
        <div className="p-6 overflow-auto flex-1">
          <BrainInfoPanel 
            activeRegion={selectedRegion} 
            onClose={() => setActiveRegion(null)} 
          />
        </div>
      </div>
    </div>
  );
};

export default BrainExplorer;
