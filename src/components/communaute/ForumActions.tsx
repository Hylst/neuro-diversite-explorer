
import React from 'react';
import { Button } from '@/components/ui/button';
import { Filter, Bell, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

interface ForumActionsProps {
  onNewTopic: () => void;
}

const ForumActions: React.FC<ForumActionsProps> = ({ onNewTopic }) => {
  return (
    <div className="flex gap-2">
      <Button 
        variant="outline" 
        size="icon" 
        title="Filtrer les discussions"
        onClick={() => toast.info("Filtrage disponible prochainement")}
      >
        <Filter className="h-4 w-4" />
        <span className="sr-only">Filtrer les discussions</span>
      </Button>
      
      <Button 
        variant="outline" 
        size="icon" 
        title="Notifications"
        onClick={() => toast.info("Notifications disponibles prochainement")}
      >
        <Bell className="h-4 w-4" />
        <span className="sr-only">Notifications</span>
      </Button>
      
      <Button onClick={onNewTopic} className="hidden sm:flex">
        <MessageCircle className="mr-2 h-4 w-4" />
        Nouvelle discussion
      </Button>
      
      <Button onClick={onNewTopic} size="icon" className="sm:hidden">
        <MessageCircle className="h-4 w-4" />
        <span className="sr-only">Nouvelle discussion</span>
      </Button>
    </div>
  );
};

export default ForumActions;
