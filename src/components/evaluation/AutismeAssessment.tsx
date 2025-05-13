
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { InfoIcon, ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react';
import { AssessmentResult } from '@/types/custom-types';

interface Question {
  id: number;
  text: string;
}

const questions: Question[] = [
  { id: 1, text: "Je remarque souvent des détails que d'autres personnes ne remarquent pas." },
  { id: 2, text: "Je préfère faire les choses de la même façon encore et encore." },
  { id: 3, text: "Je trouve qu'il est facile de «lire entre les lignes» lorsque quelqu'un me parle." },
  { id: 4, text: "Je trouve souvent difficile d'imaginer ce que ce serait d'être quelqu'un d'autre." },
  { id: 5, text: "Je suis souvent le dernier à comprendre une blague." },
  { id: 6, text: "Je trouve les situations sociales faciles." },
  { id: 7, text: "J'ai tendance à remarquer les détails que d'autres ne voient pas." },
  { id: 8, text: "Je préfère passer du temps avec des personnes plutôt que seul(e)." },
  { id: 9, text: "Je trouve facile de faire plus d'une chose à la fois." },
  { id: 10, text: "Lorsque je parle au téléphone, je ne suis pas sûr(e) de quand c'est mon tour de parler." }
];

const AutismeAssessment = () => {
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
        setCurrentQuestion(prev => prev + 1);
        setSelectedOption(undefined); // Réinitialise la sélection pour la question suivante
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
  
  const calculateScore = () => {
    let score = 0;
    
    // Questions 3, 6, 8, 9 are reverse scored
    const reverseQuestions = [3, 6, 8, 9];
    
    Object.entries(answers).forEach(([questionId, answer]) => {
      const qId = parseInt(questionId);
      
      if (reverseQuestions.includes(qId)) {
        // Reverse scoring
        if (answer === 'disagree' || answer === 'strongly_disagree') {
          score += 1;
        } else if (answer === 'slightly_disagree') {
          score += 0.5;
        }
      } else {
        // Regular scoring
        if (answer === 'agree' || answer === 'strongly_agree') {
          score += 1;
        } else if (answer === 'slightly_agree') {
          score += 0.5;
        }
      }
    });
    
    return score;
  };
  
  const getInterpretation = (score: number): AssessmentResult => {
    const maxScore = questions.length;
    const percentage = (score / maxScore) * 100;
    
    if (percentage >= 65) {
      return {
        score: score,
        level: "Élevé",
        description: "Vos réponses suggèrent plusieurs traits compatibles avec l'autisme. Un diagnostic professionnel serait recommandé.",
        color: "bg-orange-500",
        suggestions: [
          "Consultez un neuropsychologue ou psychiatre spécialisé en troubles neurodéveloppementaux",
          "Explorez les ressources dédiées aux personnes autistes dans notre section 'Vivre avec'",
          "Rejoignez des groupes de soutien pour adultes autistes ou soupçonnant l'être",
          "Lisez des témoignages d'autres personnes autistes dans notre section 'Communauté'"
        ]
      };
    } else if (percentage >= 40) {
      return {
        score: score,
        level: "Modéré",
        description: "Quelques traits autistiques sont présents. Une évaluation approfondie pourrait être bénéfique.",
        color: "bg-yellow-500",
        suggestions: [
          "Envisagez une consultation avec un professionnel pour une évaluation plus approfondie",
          "Explorez les stratégies d'adaptation dans notre section 'Vivre avec'",
          "Informez-vous davantage sur la neurodiversité et les traits autistiques",
          "Tenez un journal de vos expériences sociales et sensorielles pour mieux les comprendre"
        ]
      };
    } else {
      return {
        score: score,
        level: "Faible",
        description: "Peu d'indicateurs d'autisme ont été identifiés dans vos réponses.",
        color: "bg-green-500",
        suggestions: [
          "Continuez à explorer les sujets de la neurodiversité qui vous intéressent",
          "Si vous avez toujours des préoccupations, n'hésitez pas à consulter un professionnel",
          "Explorez d'autres auto-évaluations pour d'autres types de neurodiversité",
          "Lisez sur les différentes formes de neurodiversité dans notre section 'Comprendre'"
        ]
      };
    }
  };
  
  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setSelectedOption(undefined);
  };
  
  const score = calculateScore();
  const interpretation = getInterpretation(score);
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Auto-évaluation des traits autistiques (AQ-10)</CardTitle>
        <CardDescription>
          Basé sur l'Autism-Spectrum Quotient (AQ-10), un questionnaire d'auto-évaluation scientifiquement validé
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
                Ce questionnaire est uniquement un outil de dépistage initial. Un score élevé ne constitue pas un diagnostic et un score bas n'exclut pas la possibilité d'être autiste.
              </AlertDescription>
            </Alert>
            
            <h3 className="text-lg font-medium mb-4">{questions[currentQuestion].text}</h3>
            
            <RadioGroup key={questions[currentQuestion].id} value={selectedOption} onValueChange={handleOptionSelect} className="space-y-3">
              {['strongly_disagree', 'disagree', 'slightly_disagree', 'slightly_agree', 'agree', 'strongly_agree'].map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option} className="capitalize">
                    {option === 'strongly_disagree' && "Pas du tout d'accord"}
                    {option === 'disagree' && "Pas d'accord"}
                    {option === 'slightly_disagree' && "Plutôt pas d'accord"}
                    {option === 'slightly_agree' && "Plutôt d'accord"}
                    {option === 'agree' && "D'accord"}
                    {option === 'strongly_agree' && "Tout à fait d'accord"}
                  </Label>
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
                Niveau d'indicateurs de traits autistiques: <span className="font-medium">{interpretation.level}</span>
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
              <h3 className="font-medium mb-2">Recommandations:</h3>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                {interpretation.suggestions.map((suggestion, index) => (
                  <li key={index}>{suggestion}</li>
                ))}
              </ul>
            </div>
            
            <div className="pt-4">
              <h3 className="font-medium mb-2">Prochaines étapes:</h3>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Ces résultats sont indicatifs et ne constituent pas un diagnostic.</li>
                <li>Si vous avez obtenu un score élevé, envisagez de consulter un neuropsychologue spécialisé dans l'autisme.</li>
                <li>Un diagnostic formel peut ouvrir droit à des aménagements scolaires, professionnels ou dans la vie quotidienne.</li>
                <li>Explorez les ressources disponibles dans la section "Vivre avec" de notre site.</li>
              </ul>
            </div>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex justify-between">
        {!showResults ? (
          <>
            <Button 
              variant="outline" 
              onClick={handlePreviousQuestion}
              disabled={currentQuestion === 0}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Question précédente
            </Button>
            <Button 
              onClick={handleNextQuestion}
              disabled={!selectedOption}
            >
              {currentQuestion < questions.length - 1 ? (
                <>Question suivante <ArrowRight className="ml-2 h-4 w-4" /></>
              ) : (
                'Voir les résultats'
              )}
            </Button>
          </>
        ) : (
          <Button 
            variant="outline" 
            onClick={resetAssessment}
            className="w-full"
          >
            <RotateCcw className="mr-2 h-4 w-4" /> Recommencer le test
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default AutismeAssessment;
