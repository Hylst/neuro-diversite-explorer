
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface CommunauteTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  children: React.ReactNode;
}

const CommunauteTabs = ({ activeTab, onTabChange, children }: CommunauteTabsProps) => {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
      <div className="flex justify-center mb-8">
        <TabsList className="grid w-full max-w-2xl grid-cols-5">
          <TabsTrigger value="carte">Cartographie</TabsTrigger>
          <TabsTrigger value="blog">Blog</TabsTrigger>
          <TabsTrigger value="forum">Forum</TabsTrigger>
          <TabsTrigger value="evenements">Événements</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
        </TabsList>
      </div>
      {children}
    </Tabs>
  );
};

export default CommunauteTabs;
