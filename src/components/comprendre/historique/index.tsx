import React from 'react';
import { TabsContent } from '@/components/ui/tabs';
import HistoriqueNeurodiversite from './HistoriqueNeurodiversite';
import FiguresEmblematiques from './FiguresEmblematiques';

const HistoriqueTab: React.FC = () => {
  return (
    <TabsContent value="historique">
      <div className="max-w-4xl mx-auto space-y-8">
        <HistoriqueNeurodiversite />
        <FiguresEmblematiques />
      </div>
    </TabsContent>
  );
};

export default HistoriqueTab;