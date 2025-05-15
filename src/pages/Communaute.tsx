
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CommunauteLayout from '@/components/communaute/CommunauteLayout';
import CommunauteTabs from '@/components/communaute/CommunauteTabs';
import { TabsContent } from '@/components/ui/tabs';
import CartographieTab from '@/components/communaute/CartographieTab';
import BlogTab from '@/components/communaute/BlogTab';
import ForumTab from '@/components/communaute/ForumTab';
import EventsTab from '@/components/communaute/EventsTab';
import FAQTab from '@/components/communaute/FAQTab';

const Communaute = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('carte');
  
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tabParam = queryParams.get('tab');
    if (tabParam && ['carte', 'blog', 'forum', 'evenements', 'faq'].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [location]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    navigate(`/communaute?tab=${value}`, { replace: true });
  };

  return (
    <CommunauteLayout title="Communauté" subtitle="et échange">
      <CommunauteTabs activeTab={activeTab} onTabChange={handleTabChange}>
        <TabsContent value="carte">
          <CartographieTab />
        </TabsContent>
        
        <TabsContent value="blog">
          <BlogTab />
        </TabsContent>
        
        <TabsContent value="forum">
          <ForumTab />
        </TabsContent>
        
        <TabsContent value="evenements">
          <EventsTab />
        </TabsContent>
        
        <TabsContent value="faq">
          <FAQTab />
        </TabsContent>
      </CommunauteTabs>
    </CommunauteLayout>
  );
};

export default Communaute;
