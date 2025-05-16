import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { BarChart, ExternalLink, Info } from 'lucide-react';
import { motion } from 'framer-motion';

interface AssessmentResult {
  type: string;
  score: number;
  date: string;
  interpretation: string;
  color: string;
}

interface ResultsDisplayProps {
  results: AssessmentResult[];
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results }) => {
  // Fonction pour déterminer la couleur en fonction du score
  const getScoreColor = (score: number): string => {
    if (score < 30) return 'bg-green-500';
    if (score < 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  // Fonction pour obtenir une description basée sur le type et le score
  const getRecommendation = (type: string, score: number): string => {
    if (type === 'TDAH') {
      if (score >= 60) return 'Envisagez de consulter un spécialiste pour une évaluation approfondie.';
      if (score >= 30) return 'Certains traits sont présents. Un suivi pourrait être bénéfique.';
      return 'Peu de traits significatifs détectés.';
    }
    if (type === 'Autisme') {
      if (score >= 60) return 'Des traits autistiques significatifs sont présents. Une consultation spécialisée est recommandée.';
      if (score >= 30) return 'Quelques traits autistiques sont présents. Un avis professionnel pourrait être utile.';
      return 'Peu de traits autistiques détectés.';
    }
    if (type === 'Dyslexie') {
      if (score >= 60) return 'Des difficultés significatives de lecture sont présentes. Une évaluation orthophonique est conseillée.';
      if (score >= 30) return 'Quelques difficultés de lecture sont présentes. Un suivi pourrait être bénéfique.';
      return 'Peu de difficultés de lecture détectées.';
    }
    return 'Consultez un professionnel pour interpréter ces résultats.';
  };

  // Animation variants pour les cartes
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: 'easeOut'
      }
    })
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart className="h-5 w-5" />
            Résultats d'évaluation
          </CardTitle>
          <CardDescription>
            Visualisez et comprenez vos résultats d'auto-évaluation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {results.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Vous n'avez pas encore effectué d'évaluation.</p>
              <Button className="mt-4" onClick={() => window.location.href = '/auto-evaluation'}>
                Faire une évaluation
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {results.map((result, index) => (
                <motion.div 
                  key={result.type} 
                  className="space-y-2"
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{result.type}</h3>
                      <p className="text-sm text-muted-foreground">Évalué le {result.date}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${result.color.replace('bg-', 'bg-opacity-20 text-')}`}>
                        {result.interpretation}
                      </span>
                      <span className="font-bold">{result.score}%</span>
                    </div>
                  </div>
                  
                  <Progress 
                    value={result.score} 
                    className="h-2" 
                    indicatorClassName={getScoreColor(result.score)}
                  />
                  
                  <div className="bg-muted p-3 rounded-md mt-2">
                    <div className="flex items-start gap-2">
                      <Info className="h-4 w-4 mt-0.5 flex-shrink-0 text-muted-foreground" />
                      <p className="text-sm">{getRecommendation(result.type, result.score)}</p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-xs"
                      onClick={() => window.location.href = `/auto-evaluation?tab=${result.type.toLowerCase()}`}
                    >
                      Refaire le test
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </motion.div>
              ))}

              <div className="bg-primary/5 p-4 rounded-lg mt-6">
                <h3 className="font-medium mb-2">Ressources personnalisées</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Basé sur vos résultats, voici quelques ressources qui pourraient vous être utiles :
                </p>
                <ul className="space-y-2 text-sm">
                  {results.some(r => r.type === 'TDAH' && r.score > 30) && (
                    <li>
                      <a href="/ressources?tag=tdah" className="text-primary hover:underline flex items-center">
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Ressources sur le TDAH
                      </a>
                    </li>
                  )}
                  {results.some(r => r.type === 'Autisme' && r.score > 30) && (
                    <li>
                      <a href="/ressources?tag=autisme" className="text-primary hover:underline flex items-center">
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Ressources sur l'autisme
                      </a>
                    </li>
                  )}
                  {results.some(r => r.type === 'Dyslexie' && r.score > 30) && (
                    <li>
                      <a href="/ressources?tag=dyslexie" className="text-primary hover:underline flex items-center">
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Ressources sur la dyslexie
                      </a>
                    </li>
                  )}
                  <li>
                    <a href="/communaute" className="text-primary hover:underline flex items-center">
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Échanger avec la communauté
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ResultsDisplay;