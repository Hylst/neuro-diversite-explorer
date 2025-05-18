import React, { ReactNode } from 'react';
import { Card } from '@/components/ui/card';

interface TroubleSymptomCardProps {
  icon: ReactNode;
  title: string;
  symptoms: string[];
}

const TroubleSymptomCard: React.FC<TroubleSymptomCardProps> = ({ icon, title, symptoms }) => {
  return (
    <Card className="p-4">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <h4 className="font-medium">{title}</h4>
      </div>
      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
        {symptoms.map((symptom, index) => (
          <li key={index}>{symptom}</li>
        ))}
      </ul>
    </Card>
  );
};

export default TroubleSymptomCard;