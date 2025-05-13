import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Users, Eye, Clock } from 'lucide-react';

interface ForumStatsProps {
  totalTopics: number;
  totalReplies: number;
  activeUsers: number;
  lastActive: string;
}

const ForumStats: React.FC<ForumStatsProps> = ({
  totalTopics = 93,
  totalReplies = 427,
  activeUsers = 156,
  lastActive = "aujourd'hui"
}) => {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center justify-center text-center p-2">
            <MessageCircle className="h-6 w-6 text-primary mb-2" />
            <div className="text-2xl font-bold">{totalTopics}</div>
            <div className="text-xs text-muted-foreground">Discussions</div>
          </div>
          
          <div className="flex flex-col items-center justify-center text-center p-2">
            <Eye className="h-6 w-6 text-primary mb-2" />
            <div className="text-2xl font-bold">{totalReplies}</div>
            <div className="text-xs text-muted-foreground">Réponses</div>
          </div>
          
          <div className="flex flex-col items-center justify-center text-center p-2">
            <Users className="h-6 w-6 text-primary mb-2" />
            <div className="text-2xl font-bold">{activeUsers}</div>
            <div className="text-xs text-muted-foreground">Utilisateurs actifs</div>
          </div>
          
          <div className="flex flex-col items-center justify-center text-center p-2">
            <Clock className="h-6 w-6 text-primary mb-2" />
            <div className="text-sm font-medium">Dernière activité</div>
            <div className="text-xs text-muted-foreground">{lastActive}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ForumStats;