import React, { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface TroubleInfoCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  children: ReactNode;
}

const TroubleInfoCard: React.FC<TroubleInfoCardProps> = ({ icon, title, description, children }) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-2">
          {icon}
          <CardTitle>{title}</CardTitle>
        </div>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {children}
      </CardContent>
    </Card>
  );
};

export default TroubleInfoCard;