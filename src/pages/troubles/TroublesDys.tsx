
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BookOpen, BrainCircuit, Calculator, MessageSquare, Pencil, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const TroublesDys = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="bg-muted py-12 md:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Troubles <span className="neuro-gradient-text">Dys</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Explorez l'ensemble des troubles spécifiques du langage et des apprentissages
              </p>
            </div>
          </div>
        </div>

        <div className="container py-12">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Qu'est-ce que les troubles Dys ?</h2>
            <p className="text-muted-foreground mb-4">
              Les troubles "Dys" constituent un ensemble de troubles cognitifs spécifiques et durables qui affectent 
              l'acquisition de certaines compétences fondamentales chez des personnes ayant par ailleurs une intelligence normale. 
              Ces troubles neurodéveloppementaux ont un impact significatif sur la vie quotidienne, notamment dans le cadre scolaire 
              et professionnel.
            </p>
            <p className="text-muted-foreground mb-4">
              Ils se caractérisent par des déficits dans des domaines particuliers comme la lecture, l'écriture, 
              le calcul ou la coordination, sans altération des autres fonctions intellectuelles. Ces troubles spécifiques 
              des apprentissages touchent environ 8% de la population. Ils sont d'origine neurobiologique, 
              probablement génétique, et durent toute la vie, mais peuvent être considérablement améliorés 
              avec des prises en charge adaptées.
            </p>
            <p className="text-muted-foreground">
              Contrairement aux idées reçues, les troubles Dys ne sont pas liés à un manque d'intelligence, 
              de motivation ou d'éducation. Il s'agit de différences neurologiques dans le traitement de 
              l'information qui nécessitent des adaptations et des méthodes d'apprentissage spécifiques.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="neuro-card border-neuro-blue">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-secondary">
                    <BookOpen className="h-6 w-6 text-neuro-blue" />
                  </div>
                  <CardTitle>Dyslexie</CardTitle>
                </div>
                <CardDescription>Trouble spécifique de l'apprentissage de la lecture et de l'orthographe</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-medium mb-2">Symptômes principaux:</h4>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Difficultés à décoder les mots et à associer sons et lettres</li>
                  <li>Confusion entre lettres visuellement similaires (p/q, b/d)</li>
                  <li>Difficultés à reconnaître des mots familiers</li>
                  <li>Lenteur et imprécision en lecture</li>
                  <li>Difficultés de compréhension des textes lus</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/troubles/dyslexie">
                    En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="neuro-card border-neuro-orange">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-secondary">
                    <BrainCircuit className="h-6 w-6 text-neuro-orange" />
                  </div>
                  <CardTitle>Dyspraxie</CardTitle>
                </div>
                <CardDescription>Trouble de la coordination et de la planification des mouvements</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-medium mb-2">Symptômes principaux:</h4>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Difficultés dans les activités manuelles fines (écriture, découpage)</li>
                  <li>Maladresse dans les mouvements et les gestes quotidiens</li>
                  <li>Problèmes d'organisation spatiale</li>
                  <li>Lenteur d'exécution des tâches motrices</li>
                  <li>Difficultés à apprendre de nouveaux gestes complexes</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/troubles/dyspraxie">
                    En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="neuro-card border-neuro-green">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-secondary">
                    <Calculator className="h-6 w-6 text-neuro-green" />
                  </div>
                  <CardTitle>Dyscalculie</CardTitle>
                </div>
                <CardDescription>Trouble spécifique des apprentissages en mathématiques</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-medium mb-2">Symptômes principaux:</h4>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Difficultés à comprendre les concepts de base (quantité, numération)</li>
                  <li>Problèmes avec les opérations mathématiques de base</li>
                  <li>Troubles de mémorisation des faits numériques (tables)</li>
                  <li>Difficultés à résoudre des problèmes mathématiques</li>
                  <li>Confusion dans les séquences numériques et les symboles</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/troubles/dyscalculie">
                    En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="neuro-card border-neuro-purple">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-secondary">
                    <MessageSquare className="h-6 w-6 text-neuro-purple" />
                  </div>
                  <CardTitle>Dysphasie</CardTitle>
                </div>
                <CardDescription>Trouble spécifique du développement du langage oral</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-medium mb-2">Symptômes principaux:</h4>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Retard significatif dans l'acquisition du langage</li>
                  <li>Difficultés à s'exprimer clairement et à trouver les mots</li>
                  <li>Troubles de la compréhension orale</li>
                  <li>Difficultés avec la syntaxe et la grammaire</li>
                  <li>Prononciation atypique persistante</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/troubles/dysphasie">
                    En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="neuro-card border-neuro-red">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-secondary">
                    <FileText className="h-6 w-6 text-neuro-red" />
                  </div>
                  <CardTitle>Dysorthographie</CardTitle>
                </div>
                <CardDescription>Trouble spécifique de l'acquisition et de la maîtrise de l'orthographe</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-medium mb-2">Symptômes principaux:</h4>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Difficultés persistantes en orthographe malgré un apprentissage normal</li>
                  <li>Erreurs phonologiques (confusion des sons proches)</li>
                  <li>Difficultés avec les règles grammaticales</li>
                  <li>Omission ou ajout de lettres dans les mots</li>
                  <li>Souvent associée à la dyslexie</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/troubles/dysorthographie">
                    En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="neuro-card border-neuro-blue">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-secondary">
                    <Pencil className="h-6 w-6 text-neuro-blue" />
                  </div>
                  <CardTitle>Dysgraphie</CardTitle>
                </div>
                <CardDescription>Trouble spécifique de l'écriture affectant le geste graphique</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-medium mb-2">Symptômes principaux:</h4>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Écriture laborieuse, lente et peu lisible</li>
                  <li>Difficultés dans la formation des lettres</li>
                  <li>Tenue incorrecte du stylo</li>
                  <li>Fatigue rapide lors de l'écriture</li>
                  <li>Organisation spatiale perturbée sur la page</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/troubles/dysgraphie">
                    En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="bg-muted p-6 rounded-lg mb-12">
            <h3 className="text-xl font-semibold mb-4">Comorbidités et associations fréquentes</h3>
            <p className="text-muted-foreground mb-4">
              Il est important de noter que les troubles Dys sont souvent associés entre eux. 
              Une personne peut présenter plusieurs troubles concomitants, ce qui rend parfois 
              le diagnostic plus complexe. Par exemple, environ 40% des personnes dyslexiques 
              présentent également une dysorthographie.
            </p>
            <p className="text-muted-foreground mb-4">
              De plus, il existe souvent des associations avec d'autres troubles neurodéveloppementaux :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <span className="font-medium">Trouble du Déficit de l'Attention avec ou sans Hyperactivité (TDAH)</span> 
                – La comorbidité entre troubles Dys et TDAH est fréquente, avec environ 30-50% des enfants présentant à la fois un TDAH et un trouble Dys.
              </li>
              <li>
                <span className="font-medium">Trouble du Spectre de l'Autisme (TSA)</span> 
                – Certaines personnes autistes peuvent également présenter des profils Dys spécifiques.
              </li>
              <li>
                <span className="font-medium">Troubles de la coordination</span> 
                – Les difficultés motrices peuvent coexister avec les troubles des apprentissages.
              </li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Cette coexistence de plusieurs troubles nécessite une approche globale et multidisciplinaire 
              pour établir un diagnostic précis et proposer des interventions adaptées.
            </p>
          </div>

          <div className="space-y-6 mb-12">
            <h2 className="text-2xl font-bold">Approches thérapeutiques</h2>
            <p className="text-muted-foreground">
              La prise en charge des troubles Dys repose sur une approche pluridisciplinaire impliquant différents professionnels :
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Orthophoniste</h4>
                <p className="text-sm text-muted-foreground">
                  Pour la dyslexie, la dysorthographie et la dysphasie – travail sur le langage écrit et oral.
                </p>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Psychomotricien</h4>
                <p className="text-sm text-muted-foreground">
                  Pour la dyspraxie et la dysgraphie – rééducation des gestes et de la coordination.
                </p>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Ergothérapeute</h4>
                <p className="text-sm text-muted-foreground">
                  Pour adapter l'environnement et proposer des outils de compensation.
                </p>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Neuropsychologue</h4>
                <p className="text-sm text-muted-foreground">
                  Pour l'évaluation cognitive et le suivi des progrès.
                </p>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Psychologue</h4>
                <p className="text-sm text-muted-foreground">
                  Pour le soutien psychologique et l'accompagnement de l'estime de soi.
                </p>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Enseignant spécialisé</h4>
                <p className="text-sm text-muted-foreground">
                  Pour les adaptations pédagogiques et le soutien scolaire ciblé.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Ressources supplémentaires</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link to="/auto-evaluation">Faire un test d'auto-évaluation</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/ressources/strategies-apprentissage">Stratégies d'apprentissage adaptées</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/ressources/guide-administratif">Guide des démarches administratives</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>    </div>
  );
};

export default TroublesDys;
