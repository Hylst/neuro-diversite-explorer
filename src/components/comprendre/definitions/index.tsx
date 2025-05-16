import React from 'react';
import { TabsContent } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import NeurotypiqueVsNeurodivergent from './NeurotypiqueVsNeurodivergent';
import ModelesMedicalSocial from './ModelesMedicalSocial';
import GlossaireTermes from './GlossaireTermes';
import ParadigmesFondamentaux from './ParadigmesFondamentaux';

const DefinitionsTab: React.FC = () => {
  return (
    <TabsContent value="definitions">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <NeurotypiqueVsNeurodivergent />
          <ModelesMedicalSocial />
        </div>
        <GlossaireTermes />
        <ParadigmesFondamentaux />
      </div>
    </TabsContent>
  );
};

export default DefinitionsTab;