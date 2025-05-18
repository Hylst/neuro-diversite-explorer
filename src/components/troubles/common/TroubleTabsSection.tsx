import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface TabContent {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TroubleTabsSectionProps {
  tabs: TabContent[];
  defaultTab?: string;
}

const TroubleTabsSection: React.FC<TroubleTabsSectionProps> = ({ 
  tabs, 
  defaultTab 
}) => {
  return (
    <Tabs defaultValue={defaultTab || tabs[0].id}>
      <TabsList className="grid w-full mb-4" style={{ gridTemplateColumns: `repeat(${tabs.length}, 1fr)` }}>
        {tabs.map(tab => (
          <TabsTrigger key={tab.id} value={tab.id}>{tab.label}</TabsTrigger>
        ))}
      </TabsList>
      
      {tabs.map(tab => (
        <TabsContent key={tab.id} value={tab.id} className="space-y-4">
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default TroubleTabsSection;