
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { InfoIcon } from 'lucide-react';
import QuestionTooltip from './common/QuestionTooltip';

interface Question {
  id: number;
  text: string;
  tooltip?: string;
}

const questions: Question[] = [
  { id: 1, text: "J'ai des difficultés à effectuer des calculs mentaux simples dans la vie quotidienne." },
  { id: 2, text: "Je compte encore sur mes doigts pour les opérations de base." },
  { id: 3, text: "Je confonds souvent les symboles mathématiques (+, -, ×, ÷)." },
  { id: 4, text: "J'ai du mal à comprendre les concepts de temps (lire l'heure, estimer des durées).", tooltip: "Par exemple, lire une horloge analogique, estimer le temps nécessaire pour une tâche, comprendre un emploi du temps." },
  { id: 5, text: "Je trouve difficile de gérer l'argent ou de faire un budget." },
  { id: 6, text: "J'évite les situations qui impliquent des mathématiques ou des calculs." },
  { id: 7, text: "J'ai des difficultés à estimer des quantités (par exemple lors de la cuisine)." },
  { id: 8, text: "Je me perds facilement et j'ai du mal à utiliser une carte ou à m'orienter.", tooltip: "Par exemple, suivre un itinéraire donné, se repérer dans un lieu nouveau, ou comprendre les directions sur une carte." },
  { id: 9, text: "Je trouve difficile de mémoriser des séquences de chiffres comme des numéros de téléphone." },
  { id: 10, text: "Je me sens anxieux(se) quand je dois faire des mathématiques ou manipuler des nombres." }
];

const DyscalculieAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined);
  
  // Fonction pour gérer la sélection d'une option
  const handleOptionSelect = (value: string) => {
    setSelectedOption(value);
  };
  
  // Fonction pour passer à la question suivante
  const handleNextQuestion = () => {
    if (selectedOption) {
      // Enregistrer la réponse actuelle
      setAnswers(prev => ({ ...prev, [questions[currentQuestion].id]: selectedOption }));
      
      if (currentQuestion < questions.length - 1) {
        // Passer à la question suivante et réinitialiser la sélection
        setCurrentQuestion(prev => prev + 1);
        // Utiliser setTimeout pour s'assurer que la réinitialisation se produit après le changement de question
        setTimeout(() => setSelectedOption(undefined), 50);
      } else {
        // Si c'est la dernière question, afficher les résultats
        setShowResults(true);
      }
    }
  };
  
  // Fonction pour revenir à la question précédente
  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      // Restaurer la réponse précédente si elle existe
      setSelectedOption(answers[questions[currentQuestion - 1].id]);
    }
  };
  
  // Maintien de la fonction handleAnswer pour compatibilité
  const handleAnswer = (value: string) => {
    setAnswers(prev => ({ ...prev, [questions[currentQuestion].id]: value }));
    
    if (currentQuestion < questions.length - 1) {
      // Utiliser un délai plus long pour s'assurer que la réinitialisation fonctionne
      setTimeout(() => {
        setCurrentQuestion(prev => prev + 1);
        setSelectedOption(undefined);
      }, 500);
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
        description: "Vos réponses suggèrent plusieurs traits compatibles avec la dyscalculie. Un diagnostic professionnel serait recommandé.",
        color: "bg-orange-500"
      };
    } else if (percentage >= 40) {
      return {
        level: "Modéré",
        description: "Quelques difficultés avec les nombres sont présentes. Une évaluation approfondie pourrait être bénéfique.",
        color: "bg-yellow-500"
      };
    } else {
      return {
        level: "Faible",
        description: "Peu d'indicateurs de dyscalculie ont été identifiés dans vos réponses.",
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
        <CardTitle>Auto-évaluation de la dyscalculie</CardTitle>
        <CardDescription>
          Questionnaire d'identification des signes de trouble spécifique des apprentissages mathématiques
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
            <Alert className="mb-6">
              <InfoIcon className="h-4 w-4" />
              <AlertTitle>Information</AlertTitle>
              <AlertDescription>
                Ce questionnaire est uniquement un outil de dépistage initial. Un score élevé ne constitue pas un diagnostic et un score bas n'exclut pas la possibilité d'avoir une dyscalculie.
              </AlertDescription>
            </Alert>
            
            <h3 className="text-lg font-medium mb-4">
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
              className="space-y-3"
            >
              {['jamais', 'rarement', 'parfois', 'souvent', 'toujours'].map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option} className="capitalize">{option}</Label>
                </div>
              ))}
            </RadioGroup>
            
            <div className="flex justify-between mt-6">
              {currentQuestion > 0 && (
                <Button 
                  variant="outline" 
                  onClick={handlePreviousQuestion}
                  className="flex items-center gap-2"
                >
                  Question précédente
                </Button>
              )}
              <Button 
                onClick={handleNextQuestion}
                disabled={!selectedOption}
                className="ml-auto flex items-center gap-2"
              >
                {currentQuestion < questions.length - 1 ? 'Question suivante' : 'Voir les résultats'}
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <Alert>
              <InfoIcon className="h-4 w-4" />
              <AlertTitle>Résultats de l'auto-évaluation</AlertTitle>
              <AlertDescription>
                Niveau d'indicateurs de dyscalculie: <span className="font-medium">{interpretation.level}</span>
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
                <li>Si vous avez obtenu un score élevé, envisagez de consulter un neuropsychologue ou un orthophoniste.</li>
                <li>Des méthodes d'apprentissage adaptées peuvent significativement améliorer les compétences mathématiques.</li>
                <li>Un diagnostic formel peut ouvrir droit à des aménagements scolaires ou professionnels.</li>
              </ul>
            </div>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex justify-center">
        {showResults && (
          <Button variant="outline" onClick={resetAssessment}>
            Recommencer
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default DyscalculieAssessment;
