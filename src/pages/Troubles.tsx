
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, BrainCircuit, Calculator, ScanSearch, Puzzle, MessageSquare, ArrowRight, Activity, HeartPulse, Brain, Pencil, FileText } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const Troubles = () => {
  const navigate = useNavigate();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const troubleIcons = {
    'dyslexie': <BookOpen className="h-6 w-6" />,
    'dyspraxie': <BrainCircuit className="h-6 w-6" />,
    'dyscalculie': <Calculator className="h-6 w-6" />,
    'dysphasie': <MessageSquare className="h-6 w-6" />,
    'dysorthographie': <FileText className="h-6 w-6" />,
    'dysgraphie': <Pencil className="h-6 w-6" />,
    'tdah': <ScanSearch className="h-6 w-6" />,
    'tsa': <Puzzle className="h-6 w-6" />,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="bg-muted py-12 md:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Troubles <span className="neuro-gradient-text">spécifiques</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Explorez chaque trouble neuro-développemental en détail: symptômes, diagnostic, et stratégies d'adaptation
              </p>
              <Button 
                size="lg"
                onClick={() => {
                  navigate('/auto-evaluation');
                  scrollToTop();
                }}
              >
                Faire un test d'auto-évaluation
              </Button>
            </div>
          </div>
        </div>

        <div className="container py-12">
          <Tabs defaultValue="dys" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-2xl grid-cols-4">
                <TabsTrigger value="dys">Troubles Dys</TabsTrigger>
                <TabsTrigger value="tdah">TDAH</TabsTrigger>
                <TabsTrigger value="tsa">TSA (Autisme)</TabsTrigger>
                <TabsTrigger value="neuro">Neurodégénératifs</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="dys">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    id: 'dyslexie',
                    title: 'Dyslexie',
                    description: 'Trouble spécifique de l\'apprentissage de la lecture et de l\'orthographe',
                    symptoms: ['Difficultés à décoder les mots', 'Confusion entre lettres similaires', 'Lenteur de lecture', 'Difficultés d\'orthographe'],
                    color: 'border-neuro-blue'
                  },
                  {
                    id: 'dyspraxie',
                    title: 'Dyspraxie',
                    description: 'Trouble affectant la coordination des mouvements et la motricité fine',
                    symptoms: ['Maladresse motrice', 'Difficultés d\'écriture', 'Problèmes d\'organisation spatiale', 'Difficultés avec les gestes du quotidien'],
                    color: 'border-neuro-orange'
                  },
                  {
                    id: 'dyscalculie',
                    title: 'Dyscalculie',
                    description: 'Trouble spécifique des apprentissages en mathématiques',
                    symptoms: ['Difficultés avec les nombres', 'Problèmes avec les opérations de base', 'Confusion dans les étapes de résolution', 'Troubles de mémorisation des tables'],
                    color: 'border-neuro-green'
                  },
                  {
                    id: 'dysphasie',
                    title: 'Dysphasie',
                    description: 'Trouble spécifique du développement du langage oral',
                    symptoms: ['Retard d\'acquisition du langage', 'Difficultés d\'expression', 'Troubles de compréhension', 'Vocabulaire limité'],
                    color: 'border-neuro-purple'
                  },
                  {
                    id: 'dysorthographie',
                    title: 'Dysorthographie',
                    description: 'Trouble spécifique de l\'acquisition et de la maîtrise de l\'orthographe',
                    symptoms: ['Erreurs phonologiques', 'Difficultés avec les règles grammaticales', 'Omission de lettres', 'Souvent associée à la dyslexie'],
                    color: 'border-neuro-red'
                  },
                  {
                    id: 'dysgraphie',
                    title: 'Dysgraphie',
                    description: 'Trouble spécifique de l\'écriture affectant le geste graphique',
                    symptoms: ['Écriture illisible', 'Tenue incorrecte du stylo', 'Lenteur d\'écriture', 'Fatigue rapide lors de l\'écriture'],
                    color: 'border-neuro-blue'
                  }
                ].map((trouble) => (
                  <Card key={trouble.id} className={`neuro-card ${trouble.color}`}>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-full bg-secondary">
                          {troubleIcons[trouble.id as keyof typeof troubleIcons]}
                        </div>
                        <CardTitle>{trouble.title}</CardTitle>
                      </div>
                      <CardDescription>{trouble.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-medium mb-2">Symptômes principaux:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        {trouble.symptoms.map((symptom, index) => (
                          <li key={index}>{symptom}</li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link to={`/troubles/${trouble.id}`}>
                          En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="mt-10 text-center">
                <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                  Les troubles Dys sont souvent associés entre eux et peuvent être accompagnés d'autres 
                  troubles neurodéveloppementaux. Une approche globale est essentielle pour un diagnostic 
                  précis et une prise en charge adaptée.
                </p>
                <Button 
                  onClick={() => {
                    navigate('/troubles/dys');
                    scrollToTop();
                  }}
                >
                  Voir tous les troubles Dys
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="tdah">
              <div className="max-w-4xl mx-auto">
                <Card className="neuro-card border-neuro-purple">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-full bg-secondary">
                        <ScanSearch className="h-6 w-6 text-neuro-purple" />
                      </div>
                      <CardTitle>Trouble du Déficit de l'Attention avec ou sans Hyperactivité (TDAH)</CardTitle>
                    </div>
                    <CardDescription>
                      Trouble neurodéveloppemental caractérisé par des difficultés d'attention, 
                      d'impulsivité et/ou d'hyperactivité
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-2">Les trois présentations du TDAH:</h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        {[
                          {
                            type: 'Inattentif',
                            symptoms: ['Difficultés à maintenir l\'attention', 'Distractibilité', 'Oublis fréquents', 'Perte d\'objets']
                          },
                          {
                            type: 'Hyperactif/Impulsif',
                            symptoms: ['Agitation motrice', 'Difficultés à rester assis', 'Interruption des autres', 'Impatience']
                          },
                          {
                            type: 'Mixte',
                            symptoms: ['Combine des symptômes des deux types', 'Présentation la plus fréquente', 'Varie selon les contextes']
                          }
                        ].map((presentation, index) => (
                          <div key={index} className="bg-secondary p-4 rounded-lg">
                            <h5 className="font-semibold text-sm mb-2">Type {presentation.type}</h5>
                            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                              {presentation.symptoms.map((symptom, i) => (
                                <li key={i}>{symptom}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Manifestations selon l'âge:</h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        {[
                          {
                            age: 'Enfant',
                            signs: ['Agitation constante', 'Difficultés scolaires', 'Impulsivité dans les jeux', 'Oubli du matériel']
                          },
                          {
                            age: 'Adolescent',
                            signs: ['Désorganisation', 'Procrastination', 'Difficultés à suivre des conversations', 'Prise de risque']
                          },
                          {
                            age: 'Adulte',
                            signs: ['Difficultés professionnelles', 'Problèmes d\'organisation', 'Impatience', 'Épuisement mental']
                          }
                        ].map((ageGroup, index) => (
                          <div key={index} className="bg-secondary p-4 rounded-lg">
                            <h5 className="font-semibold text-sm mb-2">{ageGroup.age}</h5>
                            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                              {ageGroup.signs.map((sign, i) => (
                                <li key={i}>{sign}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button asChild>
                      <Link to="/troubles/tdah">
                        Explorer le TDAH en détail <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="tsa">
              <div className="max-w-4xl mx-auto">
                <Card className="neuro-card border-neuro-green">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-full bg-secondary">
                        <Puzzle className="h-6 w-6 text-neuro-green" />
                      </div>
                      <CardTitle>Trouble du Spectre de l'Autisme (TSA)</CardTitle>
                    </div>
                    <CardDescription>
                      Condition neurodéveloppementale caractérisée par des différences dans la communication sociale
                      et des particularités sensorielles et comportementales
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p>
                      Le concept de "spectre" souligne la grande diversité des manifestations de l'autisme, 
                      qui varient considérablement d'une personne à l'autre en termes d'intensité des traits et de besoins de soutien.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2">Caractéristiques principales:</h4>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>Différences dans la communication sociale et les interactions</li>
                          <li>Intérêts spécifiques souvent intenses et focalisés</li>
                          <li>Sensibilité sensorielle différente (hyper ou hyposensibilité)</li>
                          <li>Besoin de routines et réactions au changement</li>
                          <li>Mouvements répétitifs ou stimming (autorégulation)</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Forces souvent associées:</h4>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>Attention aux détails et excellente mémoire</li>
                          <li>Pensée logique et analytique</li>
                          <li>Expertise approfondie dans les domaines d'intérêt</li>
                          <li>Franchise et honnêteté</li>
                          <li>Perception différente et créativité</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Parcours de diagnostic:</h4>
                      <div className="bg-secondary p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          Le diagnostic de TSA est établi par une équipe pluridisciplinaire (psychiatre, psychologue, orthophoniste, 
                          psychomotricien...) à l'aide d'observations cliniques et d'outils standardisés. De nombreuses personnes 
                          reçoivent un diagnostic tardif, notamment les femmes et les personnes présentant moins de traits visibles.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button asChild>
                      <Link to="/troubles/autisme-detail">
                        Explorer l'autisme en détail <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="neuro">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold">Troubles neurodégénératifs et post-traumatiques</h2>
                  <p className="text-muted-foreground mt-2">
                    Ces troubles concernent la dégénérescence ou les lésions du système nerveux, entraînant des modifications cognitives et comportementales
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  <Card className="neuro-card border-neuro-red">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-full bg-secondary">
                          <Brain className="h-6 w-6 text-neuro-red" />
                        </div>
                        <CardTitle>Maladies neurodégénératives</CardTitle>
                      </div>
                      <CardDescription>
                        Conditions progressives affectant les cellules nerveuses
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Types principaux:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li><span className="font-medium">Maladie d'Alzheimer:</span> Troubles de la mémoire, désorientation, changements de personnalité</li>
                          <li><span className="font-medium">Maladie de Parkinson:</span> Tremblements, rigidité musculaire, lenteur des mouvements</li>
                          <li><span className="font-medium">Sclérose en plaques:</span> Fatigue, troubles visuels, problèmes de coordination</li>
                          <li><span className="font-medium">Maladie de Huntington:</span> Mouvements involontaires, troubles cognitifs et psychiatriques</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Impact neuropsychologique:</h4>
                        <p className="text-sm text-muted-foreground">
                          Ces maladies provoquent des déficits progressifs dans diverses fonctions cognitives comme la mémoire, 
                          l'attention, les fonctions exécutives ou le langage, nécessitant des adaptations continues de l'environnement 
                          et des stratégies de communication.
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link to="/troubles/neurodegeneratifs">
                          En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  <Card className="neuro-card border-neuro-blue">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-full bg-secondary">
                          <Activity className="h-6 w-6 text-neuro-blue" />
                        </div>
                        <CardTitle>Troubles post-traumatiques cérébraux</CardTitle>
                      </div>
                      <CardDescription>
                        Conséquences neurologiques suite à des lésions cérébrales
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Causes fréquentes:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Accidents vasculaires cérébraux (AVC)</li>
                          <li>Traumatismes crâniens (accidents, chutes, sports)</li>
                          <li>Anoxie cérébrale (privation d'oxygène)</li>
                          <li>Infections neurologiques (encéphalites, méningites)</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Conséquences possibles:</h4>
                        <p className="text-sm text-muted-foreground">
                          Les lésions cérébrales peuvent entraîner divers déficits cognitifs et comportementaux: troubles 
                          de l'attention, difficultés de mémoire, difficultés de planification, changements émotionnels, 
                          altérations de la personnalité. Contrairement aux maladies neurodégénératives, une amélioration est 
                          souvent possible grâce à la plasticité cérébrale et à la rééducation.
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link to="/troubles/lesions-cerebrales">
                          En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
                
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Différences avec les troubles neurodéveloppementaux</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Troubles neurodéveloppementaux:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Présents dès la naissance ou l'enfance</li>
                        <li>Résultent d'anomalies dans le développement du cerveau</li>
                        <li>Relativement stables dans le temps</li>
                        <li>Nécessitent des adaptations permanentes</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Troubles neurodégénératifs/traumatiques:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Surviennent après un développement normal</li>
                        <li>Causés par des maladies ou des traumatismes</li>
                        <li>Évolutifs (dégénératifs) ou avec potentiel de récupération (traumatiques)</li>
                        <li>Nécessitent des adaptations évolutives</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>    </div>
  );
};

export default Troubles;
