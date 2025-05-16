import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import TroubleIcon, { TroubleIconType } from './TroubleIcon';

interface TroubleCardProps {
  id: TroubleIconType;
  title: string;
  description: string;
  symptoms: string[];
  color: string;
  linkTo?: string;
  buttonText?: string;
}

const TroubleCard: React.FC<TroubleCardProps> = ({
  id,
  title,
  description,
  symptoms,
  color,
  linkTo,
  buttonText = 'En savoir plus'
}) => {
  return (
    <Card className={`neuro-card ${color}`}>
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-full bg-secondary">
            <TroubleIcon trouble={id} />
          </div>
          <CardTitle>{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <h4 className="font-medium mb-2">Symptômes principaux:</h4>
        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
          {symptoms.map((symptom, index) => (
            <li key={index}>{symptom}</li>
          ))}
        </ul>
      </CardContent>
      {linkTo && (
        <CardFooter>
          <Button variant="outline" className="w-full" asChild>
            <Link to={linkTo}>
              {buttonText} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default TroubleCard;