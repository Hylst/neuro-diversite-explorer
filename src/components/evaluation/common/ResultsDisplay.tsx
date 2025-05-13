import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { InfoIcon, RotateCcw, ExternalLink } from 'lucide-react';
import { AssessmentResult } from '@/types/custom-types';

interface ResultsDisplayProps {
  title: string;
  score?: number;
  maxScore?: number;
  result: AssessmentResult;
  onReset: () => void;
  resources?: Array<{ name: string; url: string }>;
}

/**
 * Composant réutilisable pour afficher les résultats des questionnaires
 * Inclut le score, l'interprétation, les suggestions personnalisées et les ressources
 */
const ResultsDisplay: React.FC<ResultsDisplayProps> = ({
  title,
  score,
  maxScore,
  result,
  onReset,
  resources
}) => {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {score !== undefined && maxScore !== undefined && (
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">
              {score} / {maxScore}
            </div>
            <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className={`h-full ${result.color} rounded-full`}
                style={{ width: `${(score / maxScore) * 100}%` }}
              ></div>
            </div>
          </div>
        )}
        
        <Alert>
          <InfoIcon className="h-4 w-4" />
          <AlertTitle>Niveau: {result.level}</AlertTitle>
          <AlertDescription>{result.description}</AlertDescription>
        </Alert>
        
        {result.suggestions && result.suggestions.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">Suggestions personnalisées</h3>
            <ul className="list-disc pl-5 space-y-2">
              {result.suggestions.map((suggestion, index) => (
                <li key={index}>{suggestion}</li>
              ))}
            </ul>
          </div>
        )}
        
        {resources && resources.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">Ressources utiles</h3>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index} className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4 text-blue-500" />
                  <a 
                    href={resource.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={onReset} 
          variant="outline" 
          className="flex items-center gap-2 w-full"
        >
          <RotateCcw className="h-4 w-4" />
          Recommencer le questionnaire
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResultsDisplay;