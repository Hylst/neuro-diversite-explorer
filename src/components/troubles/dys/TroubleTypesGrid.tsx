import React from 'react';
import { Card } from '@/components/ui/card';

export interface TroubleType {
  title: string;
  description: string;
  borderColor?: string;
}

interface TroubleTypesGridProps {
  types: TroubleType[];
  borderColor?: string;
}

export const TroubleTypesGrid: React.FC<TroubleTypesGridProps> = ({ 
  types, 
  borderColor = "border-neuro-purple" 
}) => {
  return (
    <div className="grid md:grid-cols-2 gap-4 mb-4">
      {types.map((type, index) => (
        <Card key={index} className={`p-4 ${type.borderColor || borderColor}`}>
          <h3 className="font-semibold mb-2 text-neuro-purple">{type.title}</h3>
          <p className="text-sm text-muted-foreground">
            {type.description}
          </p>
        </Card>
      ))}
    </div>
  );
};