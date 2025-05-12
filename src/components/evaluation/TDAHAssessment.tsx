
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { InfoIcon, HelpCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

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
  
  const handleAnswer = (value: string) => {
    setAnswers(prev => ({ ...prev, [questions[currentQuestion].id]: value }));
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
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
  };
  
  const scores = calculateScores();
  const interpretation = getInterpretation(scores);
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  
  const answerLabels = {
    'jamais': 'Jamais',
    'rarement': 'Rarement',
    'parfois': 'Parfois',
    'souvent': 'Souvent',
    'tres_souvent': 'Très souvent'
  };
  
  return (
    <TooltipProvider>
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Auto-évaluation du TDAH</CardTitle>
          <CardDescription>
            Cet outil d'auto-évaluation peut aider à identifier des traits associés au Trouble du Déficit de l'Attention avec ou sans Hyperactivité (TDAH). 
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
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-lg font-medium">{questions[currentQuestion].text}</h3>
                {questions[currentQuestion].tooltip && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="w-80">{questions[currentQuestion].tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                )}
              </div>
              
              <RadioGroup onValueChange={handleAnswer} className="space-y-3">
                {Object.entries(answerLabels).map(([value, label]) => (
                  <div key={value} className="flex items-center space-x-2">
                    <RadioGroupItem value={value} id={value} />
                    <Label htmlFor={value}>{label}</Label>
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
                  Niveau d'indicateurs de TDAH: <span className="font-medium">{interpretation.level}</span>
                </AlertDescription>
              </Alert>
              
              <div>
                <h3 className="font-medium mb-1">Interprétation:</h3>
                <p className="text-muted-foreground">{interpretation.description}</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-1">Score global:</h3>
                  <div className="w-full bg-muted rounded-full h-4 overflow-hidden">
                    <div 
                      className={`${interpretation.color} h-full transition-all duration-500 ease-out`}
                      style={{ width: `${(scores.total / (questions.length * 2)) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span>Minimal</span>
                    <span>Modéré</span>
                    <span>Significatif</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Répartition des symptômes:</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Inattention</span>
                        <span>{Math.round((scores.inattention / (questions.filter(q => q.category === 'inattention').length * 2)) * 100)}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                        <div 
                          className="bg-blue-500 h-full transition-all duration-500 ease-out"
                          style={{ width: `${(scores.inattention / (questions.filter(q => q.category === 'inattention').length * 2)) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Hyperactivité</span>
                        <span>{Math.round((scores.hyperactivite / (questions.filter(q => q.category === 'hyperactivite').length * 2)) * 100)}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                        <div 
                          className="bg-purple-500 h-full transition-all duration-500 ease-out"
                          style={{ width: `${(scores.hyperactivite / (questions.filter(q => q.category === 'hyperactivite').length * 2)) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Impulsivité</span>
                        <span>{Math.round((scores.impulsivite / (questions.filter(q => q.category === 'impulsivite').length * 2)) * 100)}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                        <div 
                          className="bg-pink-500 h-full transition-all duration-500 ease-out"
                          style={{ width: `${(scores.impulsivite / (questions.filter(q => q.category === 'impulsivite').length * 2)) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <h3 className="font-medium mb-2">Prochaines étapes:</h3>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Ces résultats sont indicatifs et ne constituent pas un diagnostic.</li>
                  <li>Si vous avez obtenu un score élevé, envisagez de consulter un psychiatre ou un neuropsychologue spécialisé.</li>
                  <li>Un diagnostic formel peut ouvrir droit à des traitements et des aménagements adaptés.</li>
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
    </TooltipProvider>
  );
};

export default TDAHAssessment;
