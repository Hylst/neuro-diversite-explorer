
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Calculator, Brain, CheckCircle, AlertCircle, BookCheck, ExternalLink, Info } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

// Import des composants modulaires
import {
  PresentationSection,
  SymptomsSection,
  DiagnosticSection,
  InterventionsSection,
  ResourcesSection
} from '@/components/troubles/dyscalculie';

const Dyscalculie = () => {
  // Function to scroll to top when clicking links
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="bg-muted py-12 md:py-20">
          <div className="container">
            <div className="flex items-center mb-6">
              <Button variant="ghost" size="icon" asChild className="mr-2">
                <Link to="/troubles">
                  <ArrowLeft className="h-5 w-5" />
                  <span className="sr-only">Retour</span>
                </Link>
              </Button>
            </div>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                La <span className="neuro-gradient-text">Dyscalculie</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Trouble spécifique des apprentissages en mathématiques
              </p>
            </div>
          </div>
        </div>

        <div className="container py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Qu'est-ce que la dyscalculie ?</h2>
                <p className="text-muted-foreground mb-4">
                  La dyscalculie est un trouble spécifique des apprentissages qui affecte l'acquisition des compétences mathématiques 
                  chez des personnes dont l'intelligence générale est dans la norme. Elle se caractérise par des difficultés persistantes 
                  à comprendre, manipuler et utiliser les nombres et les concepts mathématiques, malgré un enseignement approprié.
                </p>
                <p className="text-muted-foreground mb-4">
                  Ce trouble neurodéveloppemental touche entre 
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="underline decoration-dotted underline-offset-4">
                        3% et 7% de la population scolaire
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        <p>Source: Étude de prévalence de l'INSERM (2019) et méta-analyse de Butterworth et al. (2011)</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>, 
                  avec une répartition 
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="underline decoration-dotted underline-offset-4">
                        équilibrée entre filles et garçons
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        <p>Source: Étude épidémiologique de Devine et al. (2013) et rapport de l'American Psychiatric Association (DSM-5, 2013)</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>, 
                  contrairement à d'autres troubles d'apprentissage.
                </p>
                <p className="text-muted-foreground">
                  La dyscalculie peut exister seule, mais elle est souvent associée à d'autres troubles neurodéveloppementaux comme 
                  la dyslexie, le TDAH ou la dyspraxie. Elle persiste généralement tout au long de la vie, bien que des stratégies 
                  de compensation et des interventions adaptées puissent considérablement améliorer les compétences mathématiques.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Les différents types de dyscalculie</h2>
                <p className="text-muted-foreground mb-4">
                  On distingue généralement plusieurs types de dyscalculie, selon l'origine des difficultés:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <Card className="p-4 border-neuro-green">
                    <h3 className="font-semibold mb-2 text-neuro-green">Dyscalculie du sens du nombre</h3>
                    <p className="text-sm text-muted-foreground">
                      Difficulté fondamentale à comprendre les quantités et à développer une représentation mentale des nombres. 
                      Problèmes pour estimer, comparer des quantités et comprendre la valeur des nombres.
                    </p>
                  </Card>
                  
                  <Card className="p-4 border-neuro-green">
                    <h3 className="font-semibold mb-2 text-neuro-green">Dyscalculie procédurale</h3>
                    <p className="text-sm text-muted-foreground">
                      Difficultés à exécuter les procédures mathématiques et à suivre les étapes des opérations. 
                      Problèmes avec les algorithmes de calcul et les séquences d'opérations.
                    </p>
                  </Card>
                  
                  <Card className="p-4 border-neuro-green">
                    <h3 className="font-semibold mb-2 text-neuro-green">Dyscalculie visuo-spatiale</h3>
                    <p className="text-sm text-muted-foreground">
                      Difficultés liées à l'organisation spatiale des nombres et des calculs. Problèmes d'alignement des chiffres, 
                      de lecture des tableaux et de compréhension des représentations géométriques.
                    </p>
                  </Card>
                  
                  <Card className="p-4 border-neuro-green">
                    <h3 className="font-semibold mb-2 text-neuro-green">Dyscalculie liée à la mémoire</h3>
                    <p className="text-sm text-muted-foreground">
                      Difficultés à mémoriser et récupérer les faits numériques de base (tables d'addition, de multiplication). 
                      Nécessité de recalculer systématiquement ce que les autres ont automatisé.
                    </p>
                  </Card>
                </div>
                
                <p className="text-muted-foreground">
                  Ces différentes formes peuvent coexister et s'influencer mutuellement. L'identification du type 
                  prédominant est importante pour orienter la prise en charge de manière adaptée.
                </p>
              </div>

              <Tabs defaultValue="symptoms">
                <TabsList className="grid grid-cols-4 mb-4">
                  <TabsTrigger value="symptoms">Symptômes</TabsTrigger>
                  <TabsTrigger value="diagnosis">Diagnostic</TabsTrigger>
                  <TabsTrigger value="treatment">Prise en charge</TabsTrigger>
                  <TabsTrigger value="daily">Vie quotidienne</TabsTrigger>
                </TabsList>
                
                <TabsContent value="symptoms" className="space-y-4">
                  <SymptomsSection />
                </TabsContent>
                
                <TabsContent value="diagnosis" className="space-y-4">
                  <DiagnosticSection />
                </TabsContent>
                
                <TabsContent value="treatment" className="space-y-4">
                  <InterventionsSection />
                </TabsContent>
                
                <TabsContent value="daily" className="space-y-4">
                  <ResourcesSection />
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-6">
              <Card className="bg-muted">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                    <CheckCircle className="h-5 w-5 text-neuro-green" />
                    À retenir
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <div className="min-w-[8px] pt-1.5">
                        <div className="h-1.5 w-1.5 rounded-full bg-neuro-green" />
                      </div>
                      <span>La dyscalculie est un trouble persistant des apprentissages mathématiques</span>
                    </li>
                    <li className="flex gap-2">
                      <div className="min-w-[8px] pt-1.5">
                        <div className="h-1.5 w-1.5 rounded-full bg-neuro-green" />
                      </div>
                      <span>Elle peut affecter le sens du nombre, les procédures ou la mémoire</span>
                    </li>
                    <li className="flex gap-2">
                      <div className="min-w-[8px] pt-1.5">
                        <div className="h-1.5 w-1.5 rounded-full bg-neuro-green" />
                      </div>
                      <span>Elle n'est pas liée à l'intelligence ou au manque d'effort</span>
                    </li>
                    <li className="flex gap-2">
                      <div className="min-w-[8px] pt-1.5">
                        <div className="h-1.5 w-1.5 rounded-full bg-neuro-green" />
                      </div>
                      <span>L'orthophonie et la neuropsychologie sont au cœur de la prise en charge</span>
                    </li>
                    <li className="flex gap-2">
                      <div className="min-w-[8px] pt-1.5">
                        <div className="h-1.5 w-1.5 rounded-full bg-neuro-green" />
                      </div>
                      <span>Les outils numériques offrent d'excellentes alternatives</span>
                    </li>
                    <li className="flex gap-2">
                      <div className="min-w-[8px] pt-1.5">
                        <div className="h-1.5 w-1.5 rounded-full bg-neuro-green" />
                      </div>
                      <span>Des adaptations scolaires sont indispensables</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-muted">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                    <AlertCircle className="h-5 w-5 text-neuro-green" />
                    Comorbidités fréquentes
                  </h3>
                  <div className="space-y-3">
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <div className="flex items-center gap-2 cursor-help">
                          <div className="p-1 rounded-full bg-neuro-light-blue">
                            <Calculator className="h-4 w-4 text-neuro-blue" />
                          </div>
                          <span>Dyspraxie</span>
                        </div>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold">Trouble de la coordination motrice</h4>
                          <p className="text-xs text-muted-foreground">Difficultés attentionnelles impactant le contrôle du geste mathématique</p>
                        </div>
                      </HoverCardContent>
                    </HoverCard>

                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <div className="flex items-center gap-2 cursor-help">
                          <div className="p-1 rounded-full bg-neuro-light-purple">
                            <Brain className="h-4 w-4 text-neuro-purple" />
                          </div>
                          <span>TDAH</span>
                        </div>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold">Difficultés attentionnelles</h4>
                          <p className="text-xs text-muted-foreground">Difficultés attentionnelles impactant la concentration sur les calculs</p>
                        </div>
                      </HoverCardContent>
                    </HoverCard>

                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <div className="flex items-center gap-2 cursor-help">
                          <div className="p-1 rounded-full bg-neuro-light-orange">
                            <BookCheck className="h-4 w-4 text-neuro-orange" />
                          </div>
                          <span>Dyslexie/dysorthographie</span>
                        </div>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold">Troubles souvent associés dans le cadre du langage écrit</h4>
                          <p className="text-xs text-muted-foreground">Difficultés avec les symboles mathématiques et la compréhension des énoncés</p>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-muted">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                    <ExternalLink className="h-5 w-5 text-neuro-green" />
                    Testez vos connaissances
                  </h3>
                  <div className="text-center">
                    <Button className="w-full bg-neuro-green hover:bg-neuro-green/90 text-white">
                      Faire le test sur les troubles DYS
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-muted">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                    <Calculator className="h-5 w-5 text-neuro-green" />
                    Explorer d'autres troubles
                  </h3>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link to="/troubles/dyspraxie" onClick={scrollToTop}>
                        Dyspraxie
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link to="/troubles/dysorthographie" onClick={scrollToTop}>
                        Dysorthographie
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link to="/troubles/dyslexie" onClick={scrollToTop}>
                        Dyslexie
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dyscalculie;
