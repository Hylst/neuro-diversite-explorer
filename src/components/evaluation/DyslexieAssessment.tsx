
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { InfoIcon } from 'lucide-react';
import QuestionTooltip from './common/QuestionTooltip';
import QuestionnaireNavigation from './common/QuestionnaireNavigation';
import ResultsDisplay from './common/ResultsDisplay';

interface Question {
  id: number;
  text: string;
  tooltip?: string;
}

const questions: Question[] = [
  { id: 1, text: "Avez-vous des difficultés à lire à voix haute?", tooltip: "Par exemple, hésitations fréquentes, lecture saccadée, erreurs de prononciation." },
  { id: 2, text: "Inversez-vous souvent l'ordre des lettres dans les mots (exemple: 'por' au lieu de 'pro')?" },
  { id: 3, text: "Vous sentez-vous fatigué(e) après avoir lu pendant une période courte?", tooltip: "Une lecture même brève peut demander un effort considérable et entraîner une fatigue visuelle ou mentale." },
  { id: 4, text: "Avez-vous du mal à vous souvenir de ce que vous venez de lire?" },
  { id: 5, text: "Trouvez-vous difficile de suivre les instructions écrites?", tooltip: "Par exemple, comprendre et exécuter des consignes dans un manuel, une recette, ou un formulaire." },
  { id: 6, text: "Avez-vous du mal à prendre des notes pendant qu'une personne parle?" },
  { id: 7, text: "Préférez-vous l'information présentée sous forme d'images ou d'explications orales plutôt que de texte écrit?" },
  { id: 8, text: "Avez-vous des difficultés avec l'orthographe, même pour des mots courants?" },
  { id: 9, text: "Votre lecture est-elle lente et laborieuse, vous obligeant à relire des passages pour en saisir le sens ?", tooltip: "Cela peut se manifester par une vitesse de lecture significativement plus lente que la moyenne, ou le besoin de décoder laborieusement chaque mot." },
  { id: 10, text: "Confondez-vous souvent des mots qui se ressemblent visuellement (comme 'chien' et 'chine')?" },
  { id: 11, text: "Avez-vous des difficultés à identifier ou manipuler les sons dans les mots (par exemple, rimes, segmentation en syllabes) ?", tooltip: "Difficulté à entendre les sons individuels dans les mots, à trouver des mots qui riment, ou à décomposer les mots en syllabes." },
  { id: 12, text: "Avez-vous des difficultés à organiser vos idées pour l'écriture ou à gérer votre temps pour les tâches de lecture/écriture ?", tooltip: "Par exemple, structurer un texte, planifier les étapes d'une rédaction, ou estimer le temps nécessaire pour lire un document." }
];

const DyslexieAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined);
  
  const handleOptionSelect = (value: string) => {
    setSelectedOption(value);
  };
  
  const handleNextQuestion = () => {
    if (selectedOption) {
      setAnswers(prev => ({ ...prev, [questions[currentQuestion].id]: selectedOption }));
      
      if (currentQuestion < questions.length - 1) {
        // Utiliser setState avec callback pour garantir l'ordre des opérations
        setCurrentQuestion(prev => {
          // Réinitialiser la sélection immédiatement après avoir changé la question
          setTimeout(() => setSelectedOption(undefined), 50);
          return prev + 1;
        });
      } else {
        setShowResults(true);
      }
    }
  };
  
  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setSelectedOption(answers[questions[currentQuestion - 1].id]);
    }
  };
  
  const handleAnswer = (value: string) => {
    setAnswers(prev => ({ ...prev, [questions[currentQuestion].id]: value }));
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      // Utiliser setTimeout pour s'assurer que la réinitialisation se produit après le changement de question
      setTimeout(() => setSelectedOption(undefined), 50);
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
  
  // Ressources pour la dyslexie
  const dyslexieResources = [
    { name: "Fédération Française des DYS", url: "https://www.ffdys.com/" },
    { name: "APEDA-France", url: "https://www.apeda-france.com/" },
    { name: "INSERM - Dossier sur la dyslexie", url: "https://www.inserm.fr/dossier/dyslexie/" },
    { name: "ANAPEDYS - Association nationale d'associations d'adultes et de parents d'enfants dys", url: "https://www.anapedys.org/" },
    { name: "Plateforme de rééducation en ligne DYS", url: "https://www.cognibulle.com/" }
  ];
  
  return (
    <Card className="w-full max-w-3xl mx-auto">
      {!showResults ? (
        <>
          <CardHeader>
            <CardTitle>Auto-évaluation de la dyslexie</CardTitle>
            <CardDescription>
              Cet outil d'auto-évaluation peut aider à identifier des traits associés à la dyslexie. 
              Il ne remplace pas un diagnostic professionnel.
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-6">
              <h3 className="text-lg font-medium">
                {questions[currentQuestion].tooltip ? (
                  <QuestionTooltip text={questions[currentQuestion].text} tooltip={questions[currentQuestion].tooltip!} />
                ) : (
                  questions[currentQuestion].text
                )}
              </h3>
              
              <RadioGroup 
                key={questions[currentQuestion].id} // Ajout de la clé unique
                value={selectedOption} 
                onValueChange={handleOptionSelect}
              >
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="jamais" id="jamais" />
                    <Label htmlFor="jamais">Jamais</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="rarement" id="rarement" />
                    <Label htmlFor="rarement">Rarement</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="parfois" id="parfois" />
                    <Label htmlFor="parfois">Parfois</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="souvent" id="souvent" />
                    <Label htmlFor="souvent">Souvent</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="toujours" id="toujours" />
                    <Label htmlFor="toujours">Toujours</Label>
                  </div>
                </div>
              </RadioGroup>
              
              <QuestionnaireNavigation
                currentQuestion={currentQuestion}
                totalQuestions={questions.length}
                onPrevious={handlePreviousQuestion}
                onNext={handleNextQuestion}
                canGoNext={!!selectedOption}
                isFirstQuestion={currentQuestion === 0}
              />
            </div>
          </CardContent>
        </>
      ) : (
        <ResultsDisplay
          title="Résultats - Auto-évaluation de la dyslexie"
          score={score}
          maxScore={questions.length}
          result={interpretation}
          onReset={resetAssessment}
          resources={dyslexieResources}
        />
      )}
    </Card>
  );
};

export default DyslexieAssessment;
