
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { InfoIcon } from 'lucide-react';

interface Question {
  id: number;
  text: string;
}

const questions: Question[] = [
  { id: 1, text: "Avez-vous des difficultés à lire à voix haute?" },
  { id: 2, text: "Inversez-vous souvent l'ordre des lettres dans les mots (exemple: 'por' au lieu de 'pro')?" },
  { id: 3, text: "Vous sentez-vous fatigué(e) après avoir lu pendant une période courte?" },
  { id: 4, text: "Avez-vous du mal à vous souvenir de ce que vous venez de lire?" },
  { id: 5, text: "Trouvez-vous difficile de suivre les instructions écrites?" },
  { id: 6, text: "Avez-vous du mal à prendre des notes pendant qu'une personne parle?" },
  { id: 7, text: "Préférez-vous l'information présentée sous forme d'images ou d'explications orales plutôt que de texte écrit?" },
  { id: 8, text: "Avez-vous des difficultés avec l'orthographe, même pour des mots courants?" },
  { id: 9, text: "Avez-vous besoin de relire plusieurs fois un texte pour le comprendre?" },
  { id: 10, text: "Confondez-vous souvent des mots qui se ressemblent visuellement (comme 'chien' et 'chine')?" }
];

const DyslexieAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  
  const handleAnswer = (value: string) => {
    setAnswers(prev => ({ ...prev, [questions[currentQuestion].id]: value }));
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };
  
  const calculateScore = () => {
    let score = 0;
    Object.values(answers).forEach(answer => {
      if (answer === 'souvent' || answer === 'toujours') {
        score += 1;
      } else if (answer === 'parfois') {
        score += 0.5;
      }
    });
    return score;
  };
  
  const getInterpretation = (score: number) => {
    const maxScore = questions.length;
    const percentage = (score / maxScore) * 100;
    
    if (percentage >= 70) {
      return {
        level: "Élevé",
        description: "Vos réponses suggèrent plusieurs traits compatibles avec la dyslexie. Un diagnostic professionnel serait recommandé.",
        color: "bg-orange-500"
      };
    } else if (percentage >= 40) {
      return {
        level: "Modéré",
        description: "Quelques difficultés de lecture sont présentes. Une évaluation approfondie pourrait être bénéfique.",
        color: "bg-yellow-500"
      };
    } else {
      return {
        level: "Faible",
        description: "Peu d'indicateurs de dyslexie ont été identifiés dans vos réponses.",
        color: "bg-green-500"
      };
    }
  };
  
  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };
  
  const score = calculateScore();
  const interpretation = getInterpretation(score);
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Auto-évaluation de la dyslexie</CardTitle>
        <CardDescription>
          Cet outil d'auto-évaluation peut aider à identifier des traits associés à la dyslexie. 
          Il ne remplace pas un diagnostic professionnel.
        </CardDescription>
        {!showResults && (
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span>Question {currentQuestion + 1} sur {questions.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}
      </CardHeader>
      
      <CardContent>
        {!showResults ? (
          <div>
            <h3 className="text-lg font-medium mb-4">{questions[currentQuestion].text}</h3>
            
            <RadioGroup onValueChange={handleAnswer} className="space-y-3">
              {['jamais', 'rarement', 'parfois', 'souvent', 'toujours'].map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option} className="capitalize">{option}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        ) : (
          <div className="space-y-6">
            <Alert>
              <InfoIcon className="h-4 w-4" />
              <AlertTitle>Résultats de l'auto-évaluation</AlertTitle>
              <AlertDescription>
                Niveau d'indicateurs de dyslexie: <span className="font-medium">{interpretation.level}</span>
              </AlertDescription>
            </Alert>
            
            <div>
              <h3 className="font-medium mb-1">Interprétation:</h3>
              <p className="text-muted-foreground">{interpretation.description}</p>
            </div>
            
            <div>
              <h3 className="font-medium mb-1">Score:</h3>
              <div className="w-full bg-muted rounded-full h-4 overflow-hidden">
                <div 
                  className={`${interpretation.color} h-full transition-all duration-500 ease-out`}
                  style={{ width: `${(score / questions.length) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span>Minimal</span>
                <span>Modéré</span>
                <span>Significatif</span>
              </div>
            </div>
            
            <div className="pt-4">
              <h3 className="font-medium mb-2">Prochaines étapes:</h3>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Ces résultats sont indicatifs et ne constituent pas un diagnostic.</li>
                <li>Si vous avez obtenu un score élevé, envisagez de consulter un neuropsychologue ou un orthophoniste spécialisé.</li>
                <li>Un diagnostic formel peut ouvrir droit à des aménagements scolaires ou professionnels.</li>
                <li>Explorez les ressources disponibles dans la section "Vivre avec" de notre site.</li>
              </ul>
            </div>
          </div>
        )}
      </CardContent>
      
      <CardFooter className={`flex ${showResults ? 'justify-between' : 'justify-end'}`}>
        {showResults && (
          <Button variant="outline" onClick={resetAssessment}>
            Recommencer
          </Button>
        )}
        {!showResults && currentQuestion > 0 && (
          <Button 
            variant="outline" 
            onClick={() => setCurrentQuestion(prev => prev - 1)}
          >
            Question précédente
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default DyslexieAssessment;
