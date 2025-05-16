import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface TabsContainerProps {
  children: React.ReactNode;
  defaultTab?: string;
}

const TabsContainer: React.FC<TabsContainerProps> = ({ 
  children,
  defaultTab = "definitions" 
}) => {
  return (
    <Tabs defaultValue={defaultTab} className="w-full">
      <div className="flex justify-center mb-8 overflow-x-auto">
        <TabsList className="grid w-full max-w-4xl grid-cols-2 md:grid-cols-5">
          <TabsTrigger value="definitions">Définitions clés</TabsTrigger>
          <TabsTrigger value="cerveau">Fonctionnement cérébral</TabsTrigger>
          <TabsTrigger value="historique">Historique</TabsTrigger>
          <TabsTrigger value="statistiques">Chiffres clés</TabsTrigger>
          <TabsTrigger value="approches">Approches</TabsTrigger>
        </TabsList>
      </div>
      {children}
    </Tabs>
  );
};

export default TabsContainer;