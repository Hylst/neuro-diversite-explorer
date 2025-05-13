
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { InfoIcon, HelpCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import QuestionnaireNavigation from './common/QuestionnaireNavigation';
import ResultsDisplay from './common/ResultsDisplay';
import QuestionTooltip from './common/QuestionTooltip';

interface Question {
  id: number;
  text: string;
  tooltip?: string;
  category: 'inattention' | 'hyperactivite' | 'impulsivite';
}

const questions: Question[] = [
  { 
    id: 1, 
    text: "Avez-vous du mal à prêter attention aux détails ou faites-vous des erreurs d'inattention?", 
    tooltip: "Par exemple: erreurs dans les documents, oubli de détails importants.",
    category: 'inattention'
  },
  { 
    id: 2, 
    text: "Avez-vous du mal à maintenir votre attention lors de tâches ou d'activités?", 
    tooltip: "Difficulté à rester concentré(e) pendant les réunions, la lecture, les conversations.",
    category: 'inattention'
  },
  { 
    id: 3, 
    text: "Avez-vous l'impression de ne pas écouter quand on vous parle directement?",
    tooltip: "L'esprit semble ailleurs même dans une conversation en face à face.",
    category: 'inattention'
  },
  { 
    id: 4, 
    text: "Avez-vous du mal à suivre les instructions jusqu'au bout?", 
    tooltip: "Ne pas terminer des tâches même si vous comprenez ce qu'il faut faire.",
    category: 'inattention'
  },
  { 
    id: 5, 
    text: "Avez-vous des difficultés à organiser des tâches et des activités?",
    tooltip: "Problèmes avec la gestion du temps, respect des délais, rangement.",
    category: 'inattention'
  },
  { 
    id: 6, 
    text: "Évitez-vous les tâches qui nécessitent un effort mental soutenu?",
    tooltip: "Procrastination face aux rapports, formulaires, lecture de longs documents.",
    category: 'inattention'
  },
  { 
    id: 7, 
    text: "Perdez-vous souvent des objets nécessaires à vos activités?",
    tooltip: "Clés, téléphone, portefeuille, documents importants, etc.",
    category: 'inattention'
  },
  { 
    id: 8, 
    text: "Êtes-vous facilement distrait(e) par des stimuli externes?",
    tooltip: "Bruits, conversations, notifications, mouvement, etc.",
    category: 'inattention'
  },
  { 
    id: 9, 
    text: "Avez-vous tendance à oublier des choses dans la vie quotidienne?",
    tooltip: "Rendez-vous, appels à retourner, tâches à accomplir, etc.",
    category: 'inattention'
  },
  { 
    id: 10, 
    text: "Vous agitez-vous souvent les mains ou les pieds, ou bougez-vous sur votre siège?",
    category: 'hyperactivite'
  },
  { 
    id: 11, 
    text: "Vous levez-vous souvent dans des situations où vous devriez rester assis(e)?",
    category: 'hyperactivite'
  },
  { 
    id: 12, 
    text: "Vous sentez-vous souvent agité(e) ou comme 'propulsé(e) par un moteur'?",
    tooltip: "Sensation interne de ne pas pouvoir rester en place ou se détendre.",
    category: 'hyperactivite'
  },
  { 
    id: 13, 
    text: "Avez-vous du mal à vous engager dans des activités calmes?",
    category: 'hyperactivite'
  },
  { 
    id: 14, 
    text: "Parlez-vous souvent de manière excessive?",
    category: 'hyperactivite'
  },
  { 
    id: 15, 
    text: "Répondez-vous souvent aux questions avant qu'elles soient terminées?",
    category: 'impulsivite'
  },
  { 
    id: 16, 
    text: "Avez-vous du mal à attendre votre tour?",
    tooltip: "Dans les files d'attente, les conversations, les jeux, etc.",
    category: 'impulsivite'
  },
  { 
    id: 17, 
    text: "Interrompez-vous souvent les autres ou faites-vous intrusion?",
    tooltip: "Couper la parole, interrompre des conversations ou des activités.",
    category: 'impulsivite'
  },
  { 
    id: 18, 
    text: "Prenez-vous souvent des décisions impulsives?",
    tooltip: "Achats impulsifs, changements de plans soudains, décisions sans réfléchir aux conséquences.",
    category: 'impulsivite'
  }
];

const TDAHAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState<string>("");
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
  
  const handleAnswer = (value: string) => {
    setAnswers(prev => ({ ...prev, [questions[currentQuestion].id]: value }));
    
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(prev => prev + 1);
        setSelectedOption(undefined); // Réinitialise la sélection pour la question suivante
      }, 300);
    } else {
      setShowResults(true);
    }
  };
  
  const calculateScores = () => {
    const scores = {
      inattention: 0,
      hyperactivite: 0,
      impulsivite: 0,
      total: 0
    };
    
    Object.entries(answers).forEach(([id, answer]) => {
      const question = questions.find(q => q.id === parseInt(id));
      
      if (!question) return;
      
      let points = 0;
      if (answer === 'souvent') points = 1;
      if (answer === 'tres_souvent') points = 2;
      
      scores[question.category] += points;
      scores.total += points;
    });
    
    return scores;
  };
  
  const getInterpretation = (scores: ReturnType<typeof calculateScores>) => {
    const maxTotal = questions.length * 2;
    const percentage = (scores.total / maxTotal) * 100;
    
    const inattentionQuestions = questions.filter(q => q.category === 'inattention').length;
    const hyperactiviteQuestions = questions.filter(q => q.category === 'hyperactivite').length;
    const impulsiviteQuestions = questions.filter(q => q.category === 'impulsivite' || q.category === 'hyperactivite').length;
    
    const inattentionPercentage = (scores.inattention / (inattentionQuestions * 2)) * 100;
    const hyperactivitePercentage = (scores.hyperactivite / (hyperactiviteQuestions * 2)) * 100;
    const impulsivitePercentage = (scores.impulsivite / (impulsiviteQuestions * 2)) * 100;
    
    let type = '';
    if (inattentionPercentage >= 60 && (hyperactivitePercentage + impulsivitePercentage) / 2 >= 60) {
      type = 'type combiné';
    } else if (inattentionPercentage >= 60) {
      type = 'type inattentif prédominant';
    } else if ((hyperactivitePercentage + impulsivitePercentage) / 2 >= 60) {
      type = 'type hyperactif/impulsif prédominant';
    }
    
    if (percentage >= 60) {
      return {
        level: "Élevé",
        description: `Vos réponses indiquent plusieurs traits compatibles avec le TDAH, ${type}. Une évaluation professionnelle serait recommandée.`,
        color: "bg-orange-500"
      };
    } else if (percentage >= 40) {
      return {
        level: "Modéré",
        description: "Quelques difficultés d'attention, d'hyperactivité ou d'impulsivité sont présentes. Une évaluation approfondie pourrait être bénéfique.",
        color: "bg-yellow-500"
      };
    } else {
      return {
        level: "Faible",
        description: "Peu d'indicateurs de TDAH ont été identifiés dans vos réponses.",
        color: "bg-green-500"
      };
    }
  };
  
  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setSelectedOption(undefined);
  };
  
  const scores = calculateScores();
  const interpretation = getInterpretation(scores);
  
  // Ressources pour le TDAH
  const tdahResources = [
    { name: "HAS - Recommandations sur le TDAH", url: "https://www.has-sante.fr/jcms/c_2012647/fr/trouble-deficit-de-l-attention-avec-ou-sans-hyperactivite-tdah-reperer-la-souffrance-accompagner-l-enfant-et-la-famille" },
    { name: "TDAH France", url: "https://www.tdah-france.fr/" },
    { name: "Centre de référence des troubles des apprentissages", url: "http://www.centrereference-mnd.fr/fr/le-reseau-national-des-centres.html" },
    { name: "Guide pratique du TDAH chez l'adulte", url: "https://www.has-sante.fr/upload/docs/application/pdf/2023-03/guidance_2023_tdah_de_ladulte_mel.pdf" },
    { name: "Webinaires et conférences sur le TDAH", url: "https://www.tdah-france.fr/-CONFERENCES-.html" }
  ];
  
  return (
    <Card className="w-full max-w-3xl mx-auto">
      {!showResults ? (
        <>
          <CardHeader>
            <CardTitle>Auto-évaluation du TDAH</CardTitle>
            <CardDescription>
              Ce questionnaire est basé sur les critères diagnostiques du TDAH chez l'adulte. 
              Il ne remplace pas un diagnostic professionnel.
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="text-lg font-medium">{questions[currentQuestion].text}</div>
                
                {questions[currentQuestion].tooltip && (
                  <QuestionTooltip content={questions[currentQuestion].tooltip} />
                )}
              </div>
              
            <RadioGroup key={questions[currentQuestion].id} value={selectedOption} onValueChange={handleOptionSelect} className="space-y-3">
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
                    <RadioGroupItem value="tres_souvent" id="tres_souvent" />
                    <Label htmlFor="tres_souvent">Très souvent</Label>
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
          title="Résultats - Auto-évaluation du TDAH"
          score={scores.total}
          maxScore={questions.length * 2}
          result={interpretation}
          onReset={resetAssessment}
          resources={tdahResources}
        />
      )}
    </Card>
  );
};

export default TDAHAssessment;
