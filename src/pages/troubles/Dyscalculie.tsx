
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, Book, ClipboardCheck, Lightbulb, Users, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Dyscalculie = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
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
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-neuro-green">Dyscalculie</span>
              </motion.h1>
              <motion.p 
                className="text-lg text-muted-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Trouble spécifique des apprentissages en mathématiques
              </motion.p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container py-12">
          <Tabs defaultValue="presentation" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-3xl grid-cols-5">
                <TabsTrigger value="presentation">Présentation</TabsTrigger>
                <TabsTrigger value="symptoms">Symptômes</TabsTrigger>
                <TabsTrigger value="diagnostic">Diagnostic</TabsTrigger>
                <TabsTrigger value="interventions">Interventions</TabsTrigger>
                <TabsTrigger value="resources">Ressources</TabsTrigger>
              </TabsList>
            </div>
            
            {/* Presentation Tab */}
            <TabsContent value="presentation">
              <div className="max-w-3xl mx-auto">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <Calculator className="h-6 w-6 text-neuro-green" />
                      <CardTitle>Comprendre la dyscalculie</CardTitle>
                    </div>
                    <CardDescription>
                      Un trouble d'apprentissage spécifique aux mathématiques
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground">
                      La dyscalculie est un trouble spécifique des apprentissages qui affecte l'acquisition des compétences mathématiques 
                      chez des personnes dont l'intelligence générale est dans la norme. Elle se caractérise par des difficultés persistantes 
                      à comprendre, manipuler et utiliser les nombres et les concepts mathématiques, malgré un enseignement approprié.
                    </p>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Prévalence</h3>
                      <p className="text-muted-foreground">
                        La dyscalculie toucherait entre 3% et 7% de la population scolaire, avec une répartition équilibrée entre filles et garçons, 
                        contrairement à d'autres troubles d'apprentissage comme la dyslexie. Ce trouble persiste généralement à l'âge adulte, 
                        bien que des stratégies compensatoires puissent être développées.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Origines neurobiologiques</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Bases cérébrales</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Différences dans le fonctionnement du sillon intrapariétal</li>
                            <li>Particularités dans les connexions entre régions cérébrales</li>
                            <li>Implique surtout le lobe pariétal (traitement numérique)</li>
                            <li>Possibles anomalies dans les circuits frontaux</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Facteurs contributifs</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Prédisposition génétique</li>
                            <li>Hérédité souvent observée dans les familles</li>
                            <li>Facteurs périnataux possibles</li>
                            <li>Interactions complexes gènes-environnement</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Mécanismes cognitifs impliqués</h3>
                      <div className="space-y-3">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Sens du nombre</h4>
                          <p className="text-muted-foreground">
                            Capacité innée à percevoir, approximer et comparer des quantités. La dyscalculie peut impliquer un déficit 
                            de ce "sens numérique" fondamental, parfois appelé "module numérique approximatif".
                          </p>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Subitisation</h4>
                          <p className="text-muted-foreground">
                            Capacité à reconnaître instantanément de petites quantités (1 à 4 objets) sans compter. Souvent altérée 
                            chez les personnes dyscalculiques, ce qui complique l'élaboration de représentations numériques stables.
                          </p>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Mémoire de travail</h4>
                          <p className="text-muted-foreground">
                            Système permettant de maintenir et manipuler temporairement des informations. Essentielle pour les calculs 
                            mentaux et la résolution de problèmes, elle est souvent impliquée dans les difficultés mathématiques.
                          </p>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Représentation spatiale des nombres</h4>
                          <p className="text-muted-foreground">
                            Capacité à organiser les nombres sur une "ligne numérique mentale". Cette représentation spatiale est 
                            souvent moins précise chez les personnes dyscalculiques.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Différents profils de dyscalculie</h3>
                      <div className="space-y-3">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Dyscalculie du développement</h4>
                          <p className="text-muted-foreground">
                            Forme primaire présente dès les premières acquisitions numériques, d'origine neurobiologique.
                          </p>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Dyscalculie procédurale</h4>
                          <p className="text-muted-foreground">
                            Difficultés avec les procédures de calcul et les algorithmes mathématiques.
                          </p>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Dyscalculie sémantique</h4>
                          <p className="text-muted-foreground">
                            Difficultés à comprendre les concepts et relations mathématiques.
                          </p>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Dyscalculie visuo-spatiale</h4>
                          <p className="text-muted-foreground">
                            Problèmes liés à l'organisation spatiale des nombres et des calculs.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Comorbidités fréquentes</h3>
                      <p className="text-muted-foreground mb-3">
                        La dyscalculie se présente souvent en association avec d'autres troubles :
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Dyslexie (30-40% des cas)</li>
                        <li>Trouble du déficit de l'attention avec ou sans hyperactivité (TDAH)</li>
                        <li>Dyspraxie (trouble de la coordination)</li>
                        <li>Troubles anxieux, particulièrement l'anxiété mathématique</li>
                        <li>Troubles du langage oral</li>
                      </ul>
                      <p className="text-muted-foreground mt-3">
                        Ces co-occurrences compliquent souvent le diagnostic et nécessitent une prise en charge globale et coordonnée.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Symptoms Tab */}
            <TabsContent value="symptoms">
              <div className="max-w-3xl mx-auto">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <Users className="h-6 w-6 text-neuro-green" />
                      <CardTitle>Manifestations et symptômes</CardTitle>
                    </div>
                    <CardDescription>
                      Les signes caractéristiques de la dyscalculie à différents âges
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-3">Signes précoces (maternelle et début de primaire)</h3>
                      <div className="bg-secondary p-4 rounded-lg mb-4">
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>Difficultés persistantes avec le comptage et la correspondance terme à terme</li>
                          <li>Lenteur dans l'apprentissage des nombres et leur séquence</li>
                          <li>Difficulté à reconnaître de petites quantités sans compter (subitisation)</li>
                          <li>Problèmes de compréhension des concepts "plus que" et "moins que"</li>
                          <li>Difficultés à associer un symbole numérique à la quantité correspondante</li>
                          <li>Confusion dans les activités de tri et de classification</li>
                          <li>Difficultés avec les concepts temporels (avant/après, hier/demain)</li>
                        </ul>
                      </div>
                      <p className="text-muted-foreground">
                        Ces difficultés précoces peuvent être des signaux d'alerte, mais ne sont pas toujours spécifiques à la dyscalculie, 
                        car de nombreux enfants présentent des rythmes d'acquisition variables dans le domaine numérique.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Manifestations en primaire</h3>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Numération et calcul</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Difficultés persistantes avec les tables d'addition et de multiplication</li>
                            <li>Recours systématique au comptage sur les doigts, même pour des calculs simples</li>
                            <li>Erreurs dans l'alignement des chiffres en calcul posé</li>
                            <li>Incompréhension de la valeur positionnelle (unités, dizaines...)</li>
                            <li>Difficultés avec les concepts de retenue et d'emprunt</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Raisonnement et problèmes</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Difficultés à identifier l'opération adaptée dans un problème</li>
                            <li>Incompréhension des énoncés mathématiques</li>
                            <li>Confusion entre différentes unités de mesure</li>
                            <li>Difficultés avec les estimations et approximations</li>
                            <li>Problèmes pour comprendre les fractions et les décimaux</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Manifestations au collège et lycée</h3>
                      <div className="bg-secondary p-4 rounded-lg mb-4">
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>Persistance des difficultés avec les opérations de base</li>
                          <li>Problèmes majeurs avec l'algèbre et les formules mathématiques</li>
                          <li>Difficultés à comprendre les concepts abstraits (variables, équations)</li>
                          <li>Troubles de la représentation géométrique et spatiale</li>
                          <li>Incapacité à automatiser les procédures mathématiques</li>
                          <li>Difficultés avec les conversions et les proportions</li>
                          <li>Anxiété mathématique souvent marquée</li>
                          <li>Évitement des situations impliquant des mathématiques</li>
                        </ul>
                      </div>
                      <p className="text-muted-foreground">
                        À cet âge, l'écart avec les pairs devient souvent plus flagrant et les conséquences sur la confiance en soi 
                        et l'orientation scolaire peuvent être importantes.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Manifestations chez l'adulte</h3>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Vie quotidienne</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Difficultés à gérer un budget</li>
                            <li>Problèmes avec la monnaie et les transactions</li>
                            <li>Confusion dans l'estimation des durées et des distances</li>
                            <li>Difficultés à lire l'heure sur une horloge analogique</li>
                            <li>Problèmes d'orientation spatiale et temporelle</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Vie professionnelle</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Évitement des métiers impliquant des calculs</li>
                            <li>Anxiété lors de tâches numériques</li>
                            <li>Difficultés avec les tableurs et logiciels de calcul</li>
                            <li>Problèmes dans la gestion du temps</li>
                            <li>Recours à des stratégies compensatoires</li>
                          </ul>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        Beaucoup d'adultes dyscalculiques développent des stratégies d'adaptation efficaces mais peuvent continuer 
                        à ressentir une anxiété significative face aux situations impliquant des mathématiques.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Impacts secondaires</h3>
                      <div className="space-y-3">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Impact psychologique</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Anxiété mathématique pouvant atteindre le niveau de phobie</li>
                            <li>Diminution de l'estime de soi et sentiment d'incompétence</li>
                            <li>Stress chronique face aux situations d'évaluation</li>
                            <li>Sentiment d'être "stupide" malgré des capacités normales</li>
                            <li>Risque accru de troubles anxieux et dépressifs</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Impact scolaire et professionnel</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Limitation des choix d'orientation scolaire et professionnelle</li>
                            <li>Risque d'échec scolaire global par découragement</li>
                            <li>Difficultés dans les autres matières scientifiques (physique, chimie)</li>
                            <li>Problèmes potentiels en géographie, économie, technologie</li>
                            <li>Obstacles à certaines formations professionnelles</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Signes associés pouvant compliquer le tableau</h3>
                      <div className="bg-secondary p-4 rounded-lg">
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Difficultés de langage mathématique (compréhension des termes spécifiques)</li>
                          <li>Problèmes visuo-spatiaux (organisation d'une feuille de calcul, géométrie)</li>
                          <li>Troubles de la mémoire de travail limitant les capacités de calcul mental</li>
                          <li>Difficultés attentionnelles affectant la concentration sur les tâches mathématiques</li>
                          <li>Lenteur d'exécution rendant les évaluations chronométrées particulièrement difficiles</li>
                          <li>Difficultés de planification et d'organisation du travail mathématique</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Points forts souvent observés</h3>
                      <p className="text-muted-foreground mb-3">
                        Malgré les difficultés, les personnes dyscalculiques présentent souvent des compétences préservées voire supérieures dans d'autres domaines :
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Compétences verbales et de communication</li>
                        <li>Créativité et pensée "hors des sentiers battus"</li>
                        <li>Empathie et intelligence émotionnelle</li>
                        <li>Capacités de raisonnement non numérique</li>
                        <li>Aptitudes artistiques</li>
                        <li>Intuition et pensée globale</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Diagnostic Tab */}
            <TabsContent value="diagnostic">
              <div className="max-w-3xl mx-auto">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <ClipboardCheck className="h-6 w-6 text-neuro-green" />
                      <CardTitle>Diagnostic et évaluation</CardTitle>
                    </div>
                    <CardDescription>
                      Le processus et les outils pour identifier la dyscalculie
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground">
                      Le diagnostic de la dyscalculie est un processus complexe qui nécessite une approche pluridisciplinaire. 
                      Il vise à déterminer la nature précise des difficultés, à éliminer d'autres causes possibles et à orienter 
                      vers une prise en charge adaptée.
                    </p>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Critères diagnostiques</h3>
                      <p className="text-muted-foreground mb-3">
                        Selon le DSM-5 (Manuel diagnostique et statistique des troubles mentaux), le diagnostic de trouble spécifique 
                        des apprentissages avec déficit en mathématiques (dyscalculie) repose sur plusieurs critères :
                      </p>
                      <div className="space-y-3">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">A. Difficultés d'apprentissage et d'utilisation des compétences académiques</h4>
                          <p className="text-muted-foreground">
                            Persistance d'au moins un des symptômes suivants pendant au moins 6 mois malgré des interventions ciblées :
                          </p>
                          <ul className="list-disc pl-5 text-muted-foreground mt-2">
                            <li>Difficulté dans la maîtrise du sens des nombres, des faits numériques ou du calcul</li>
                            <li>Difficulté dans le raisonnement mathématique</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">B. Compétences significativement en dessous du niveau attendu</h4>
                          <p className="text-muted-foreground">
                            Les aptitudes mathématiques sont nettement inférieures à celles attendues pour l'âge chronologique 
                            et interfèrent significativement avec la réussite scolaire ou professionnelle et les activités quotidiennes.
                          </p>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">C. Début pendant les années scolaires</h4>
                          <p className="text-muted-foreground">
                            Les difficultés se manifestent durant la période scolaire, même si elles peuvent ne devenir pleinement 
                            apparentes que lorsque les demandes excèdent les capacités limitées de l'individu.
                          </p>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">D. Non mieux expliquées par d'autres conditions</h4>
                          <p className="text-muted-foreground">
                            Les difficultés ne sont pas mieux expliquées par un trouble du développement intellectuel, des troubles 
                            sensoriels, des troubles neurologiques, un manque d'éducation ou des facteurs psychosociaux.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Professionnels impliqués</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Évaluation initiale</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Médecin (pédiatre, neuropédiatre)</li>
                            <li>Psychologue scolaire</li>
                            <li>Enseignant spécialisé</li>
                            <li>Orthophoniste</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Diagnostic approfondi</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Neuropsychologue</li>
                            <li>Orthophoniste spécialisé</li>
                            <li>Psychologue cognitiviste</li>
                            <li>Ergothérapeute (pour aspects visuo-spatiaux)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Processus d'évaluation</h3>
                      <ol className="list-decimal pl-5 space-y-3 text-muted-foreground">
                        <li>
                          <span className="font-medium">Anamnèse complète</span>
                          <p>Histoire développementale, antécédents familiaux, parcours scolaire, interventions déjà tentées</p>
                        </li>
                        <li>
                          <span className="font-medium">Évaluation cognitive générale</span>
                          <p>Tests d'intelligence pour évaluer les capacités intellectuelles globales et exclure une déficience intellectuelle</p>
                        </li>
                        <li>
                          <span className="font-medium">Évaluation des capacités mathématiques</span>
                          <p>Tests standardisés mesurant différents aspects des compétences numériques et mathématiques</p>
                        </li>
                        <li>
                          <span className="font-medium">Évaluation des fonctions cognitives associées</span>
                          <p>Mémoire de travail, attention, fonctions visuo-spatiales, langage</p>
                        </li>
                        <li>
                          <span className="font-medium">Recherche de comorbidités</span>
                          <p>Dépistage d'autres troubles des apprentissages (dyslexie, dyspraxie) ou de l'attention (TDAH)</p>
                        </li>
                        <li>
                          <span className="font-medium">Évaluation psycho-affective</span>
                          <p>Mesure de l'anxiété, de l'estime de soi, du bien-être psychologique</p>
                        </li>
                        <li>
                          <span className="font-medium">Synthèse et diagnostic</span>
                          <p>Réunion pluridisciplinaire et rapport détaillé avec recommandations</p>
                        </li>
                      </ol>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Outils d'évaluation standardisés</h3>
                      <div className="space-y-3">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Tests mathématiques spécifiques</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>TEDI-MATH (Test Diagnostique des Compétences de Base en Mathématiques)</li>
                            <li>UDN-II (Utilisation du Nombre)</li>
                            <li>ZAREKI-R (Batterie pour l'évaluation du traitement des nombres et du calcul chez l'enfant)</li>
                            <li>ECPN (Épreuve Conceptuelle de Résolution des Problèmes Numériques)</li>
                            <li>Numérical (Évaluation du traitement des nombres écrits et du calcul)</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Tests cognitifs associés</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>WISC-V (Échelle d'intelligence de Wechsler pour enfants) ou WAIS-IV (pour adultes)</li>
                            <li>CMS (Échelle de mémoire pour enfants) ou MEM-IV (pour adultes)</li>
                            <li>TEA-Ch (Test d'Évaluation de l'Attention chez l'enfant)</li>
                            <li>Figure complexe de Rey (organisation visuo-spatiale)</li>
                            <li>BRIEF (Évaluation des fonctions exécutives)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Diagnostic différentiel</h3>
                      <p className="text-muted-foreground mb-3">
                        Il est important de distinguer la dyscalculie d'autres conditions pouvant affecter les performances mathématiques :
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Déficience intellectuelle (affecte l'ensemble des apprentissages)</li>
                        <li>Trouble du déficit d'attention (impact sur la concentration en mathématiques)</li>
                        <li>Difficultés liées à un enseignement inadéquat ou insuffisant</li>
                        <li>Anxiété mathématique sans trouble spécifique sous-jacent</li>
                        <li>Troubles sensoriels non corrigés (vision, audition)</li>
                        <li>Troubles affectifs majeurs (dépression, anxiété généralisée)</li>
                        <li>Barrière linguistique ou culturelle</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Âge du diagnostic</h3>
                      <div className="bg-secondary p-4 rounded-lg">
                        <p className="text-muted-foreground mb-2">
                          Le diagnostic de dyscalculie peut être posé à différents âges, avec des considérations spécifiques :
                        </p>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          <li>Rarement avant 7-8 ans (CP-CE1), car les compétences mathématiques sont en cours d'acquisition</li>
                          <li>Le plus souvent entre 8 et 12 ans, quand l'écart avec les pairs devient significatif</li>
                          <li>Possible à l'adolescence, souvent en lien avec des difficultés accrues en algèbre et géométrie</li>
                          <li>Diagnostic à l'âge adulte pour des personnes ayant compensé leurs difficultés durant la scolarité</li>
                        </ul>
                        <p className="text-muted-foreground mt-2">
                          Un diagnostic précoce est souhaitable pour mettre en place des interventions adaptées rapidement et limiter l'impact psychologique.
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Après le diagnostic</h3>
                      <div className="bg-secondary p-4 rounded-lg">
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Élaboration d'un projet d'intervention individualisé</li>
                          <li>Information détaillée à l'enfant et à la famille sur la nature du trouble</li>
                          <li>Mise en place d'aménagements scolaires (PAP, PPS)</li>
                          <li>Orientation vers des professionnels pour la rééducation</li>
                          <li>Suivi régulier pour ajuster les interventions</li>
                          <li>Soutien psychologique si nécessaire</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Interventions Tab */}
            <TabsContent value="interventions">
              <div className="max-w-3xl mx-auto">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <Lightbulb className="h-6 w-6 text-neuro-green" />
                      <CardTitle>Interventions et accompagnement</CardTitle>
                    </div>
                    <CardDescription>
                      Approches et méthodes pour soutenir les personnes dyscalculiques
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground">
                      La prise en charge de la dyscalculie repose sur une approche multidimensionnelle, combinant rééducation spécifique, 
                      adaptations pédagogiques et soutien psychologique. L'objectif est d'aider la personne à développer des stratégies 
                      efficaces pour surmonter ses difficultés et utiliser ses points forts.
                    </p>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Principes généraux d'intervention</h3>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Intervention précoce dès l'identification des difficultés</li>
                        <li>Approche multidisciplinaire coordonnée</li>
                        <li>Adaptation au profil spécifique de la personne</li>
                        <li>Progression structurée du concret vers l'abstrait</li>
                        <li>Enseignement explicite et décomposé en petites étapes</li>
                        <li>Pratique régulière et intensité suffisante</li>
                        <li>Utilisation de la multisensorialité (visuel, auditif, tactile, kinesthésique)</li>
                        <li>Valorisation des réussites et renforcement positif</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Rééducation spécialisée</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Orthophonie</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Renforcement du sens du nombre</li>
                            <li>Travail sur la ligne numérique mentale</li>
                            <li>Automatisation des faits numériques</li>
                            <li>Compréhension des situations-problèmes</li>
                            <li>Rééducation du langage mathématique</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Ergothérapie</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Amélioration des aspects visuo-spatiaux</li>
                            <li>Organisation spatiale des calculs</li>
                            <li>Utilisation d'outils adaptés</li>
                            <li>Travail sur la géométrie</li>
                            <li>Adaptation de l'environnement d'apprentissage</li>
                          </ul>
                        </div>
                      </div>
                      <div className="bg-secondary p-4 rounded-lg mt-4">
                        <h4 className="font-medium mb-2">Neuropsychologie</h4>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          <li>Renforcement des fonctions cognitives sous-jacentes (mémoire de travail, attention)</li>
                          <li>Développement de stratégies métacognitives</li>
                          <li>Gestion de l'anxiété mathématique</li>
                          <li>Travail sur l'estime de soi</li>
                          <li>Conseils aux parents et enseignants</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Méthodes et outils de rééducation</h3>
                      <div className="space-y-3">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Approches multimodales</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Méthode CAS (Concrète-Abstraite-Symbolique)</li>
                            <li>Méthode de Singapour (progression méthodique)</li>
                            <li>Approche Montessori (manipulation de matériel concret)</li>
                            <li>Neurocognitive approach (Butterworth)</li>
                            <li>Number Worlds (Griffin)</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Outils et matériels</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Matériel de numération (jetons, réglettes, abaques)</li>
                            <li>Outils visuels (droites numériques, tableaux de numération)</li>
                            <li>Jeux mathématiques adaptés</li>
                            <li>Logiciels et applications spécialisés</li>
                            <li>Calculatrices adaptées</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Adaptations pédagogiques en milieu scolaire</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Aménagements formalisés</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>PAP (Plan d'Accompagnement Personnalisé)</li>
                            <li>PPS (Projet Personnalisé de Scolarisation)</li>
                            <li>PPRE (Programme Personnalisé de Réussite Éducative)</li>
                            <li>Aménagements aux examens (tiers-temps, calculatrice)</li>
                            <li>AESH (Accompagnant d'Élève en Situation de Handicap)</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Adaptations en classe</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Fournir des supports visuels clairs</li>
                            <li>Décomposer les tâches complexes</li>
                            <li>Autoriser l'usage d'outils compensatoires</li>
                            <li>Réduire la quantité d'exercices</li>
                            <li>Adapter les modalités d'évaluation</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Approches compensatoires</h3>
                      <div className="bg-secondary p-4 rounded-lg">
                        <p className="text-muted-foreground mb-2">
                          Stratégies et outils pour contourner les difficultés persistantes :
                        </p>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          <li>Utilisation systématique de la calculatrice pour les opérations de base</li>
                          <li>Recours à des aide-mémoire (tables de multiplication, formules)</li>
                          <li>Applications mobiles de calcul et conversion</li>
                          <li>Logiciels spécialisés (tableurs adaptés, géométrie dynamique)</li>
                          <li>Organisation visuelle structurée des problèmes mathématiques</li>
                          <li>Verbalisation des stratégies de résolution</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Soutien psychologique</h3>
                      <div className="bg-secondary p-4 rounded-lg">
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Thérapie cognitivo-comportementale pour l'anxiété mathématique</li>
                          <li>Renforcement de l'estime de soi et du sentiment d'efficacité personnelle</li>
                          <li>Gestion du stress face aux situations d'évaluation</li>
                          <li>Développement de la persévérance et de la résilience</li>
                          <li>Travail sur le rapport aux mathématiques et aux nombres</li>
                          <li>Soutien psychologique pour la famille</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Implication parentale</h3>
                      <div className="space-y-3">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Guidance parentale</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Comprendre la nature du trouble</li>
                            <li>Adopter une attitude bienveillante et patiente</li>
                            <li>Éviter la pression et les comparaisons</li>
                            <li>Renforcer positivement les efforts</li>
                            <li>Collaboration étroite avec les professionnels</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Activités à la maison</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Jeux de société impliquant le nombre</li>
                            <li>Applications ludiques et éducatives</li>
                            <li>Activités quotidiennes utilisant les mathématiques (cuisine, courses)</li>
                            <li>Soutien dans les devoirs avec approche adaptée</li>
                            <li>Renforcement des apprentissages par la répétition bienveillante</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Interventions selon l'âge</h3>
                      <div className="space-y-3">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Jeunes enfants (maternelle - CP)</h4>
                          <p className="text-muted-foreground">
                            Développement du sens du nombre, activités ludiques de comptage, association quantité-symbole, 
                            manipulations concrètes, jeux de subitisation.
                          </p>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Enfants (primaire)</h4>
                          <p className="text-muted-foreground">
                            Automatisation des faits numériques, compréhension du système décimal, stratégies de calcul, 
                            résolution de problèmes simples, utilisation de représentations visuelles.
                          </p>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Adolescents (collège - lycée)</h4>
                          <p className="text-muted-foreground">
                            Stratégies compensatoires plus élaborées, outils numériques, soutien pour l'algèbre et la géométrie, 
                            orientation scolaire adaptée, gestion de l'anxiété mathématique.
                          </p>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Adultes</h4>
                          <p className="text-muted-foreground">
                            Développement de compétences mathématiques fonctionnelles pour la vie quotidienne et professionnelle, 
                            outils de compensation efficaces, renforcement de la confiance en soi.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Efficacité des interventions</h3>
                      <p className="text-muted-foreground">
                        Les recherches montrent que les interventions précoces, intensives et ciblées peuvent améliorer significativement 
                        les compétences mathématiques des personnes dyscalculiques. Les approches multimodales, combinant rééducation 
                        spécifique et adaptations, sont les plus efficaces. Cependant, certaines difficultés peuvent persister à l'âge adulte, 
                        d'où l'importance de développer aussi des stratégies compensatoires durables.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Resources Tab */}
            <TabsContent value="resources">
              <div className="max-w-3xl mx-auto">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <Book className="h-6 w-6 text-neuro-green" />
                      <CardTitle>Ressources et soutien</CardTitle>
                    </div>
                    <CardDescription>
                      Informations, outils et soutien pour les personnes dyscalculiques et leur entourage
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Associations et organisations</h3>
                      <div className="bg-secondary p-4 rounded-lg">
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>
                            <span className="font-medium">Association Nationale Pour les Enfants Intellectuellement Précoces (ANPEIP)</span>
                            <p>Propose également des ressources sur les troubles des apprentissages, dont la dyscalculie</p>
                          </li>
                          <li>
                            <span className="font-medium">FFDys (Fédération Française des Dys)</span>
                            <p>Fédération regroupant les associations spécialisées dans les troubles des apprentissages</p>
                          </li>
                          <li>
                            <span className="font-medium">APEDYS (Association de Parents d'Enfants Dys)</span>
                            <p>Associations locales offrant soutien et information</p>
                          </li>
                          <li>
                            <span className="font-medium">DMF (Dyspraxique Mais Fantastique)</span>
                            <p>Association qui aborde aussi les troubles associés comme la dyscalculie</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Ressources éducatives</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Ouvrages spécialisés</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>"La dyscalculie" - Anne Lafay</li>
                            <li>"100 idées pour aider les élèves dyscalculiques" - Isabelle Causse-Mergui</li>
                            <li>"Aider l'élève en difficulté de calcul" - Michel Fayol</li>
                            <li>"J'aide mon enfant en maths" - Bernadette Guéritte-Hess</li>
                            <li>"The Dyscalculia Toolkit" - Ronit Bird (en anglais)</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Sites et ressources en ligne</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Réseau Canopé - ressources pour enseignants</li>
                            <li>Dyscalculie.fr - information et ressources</li>
                            <li>Eduscol - adaptations pédagogiques</li>
                            <li>INSERM - dossiers d'information</li>
                            <li>Understood.org - ressources en anglais</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Outils numériques et applications</h3>
                      <div className="space-y-3">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Applications pour l'entrainement</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>NumberShark - renforcement des compétences numériques de base</li>
                            <li>Calcularis - programme d'intervention adaptatif</li>
                            <li>DybusterCalcurix - entrainement personnalisé</li>
                            <li>MathLanding - jeux et activités adaptés</li>
                            <li>Slice Fractions - apprentissage des fractions par le jeu</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Outils compensatoires</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Calculatrices parlantes et visuelles</li>
                            <li>MathPad - pour organiser visuellement les calculs</li>
                            <li>EquatIO - pour les formules mathématiques complexes</li>
                            <li>Photomath - résolution de problèmes avec explication</li>
                            <li>Tables de multiplication et conversions en format numérique</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Matériel pédagogique</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Matériel de manipulation</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Numicon - système de formes représentant les nombres</li>
                            <li>Réglettes Cuisenaire - pour visualiser les relations numériques</li>
                            <li>Matériel Montessori (perles dorées, barres numériques)</li>
                            <li>Jetons et compteurs colorés</li>
                            <li>Abaques et bouliers</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Supports visuels</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Droites numériques manipulables</li>
                            <li>Tableaux de numération</li>
                            <li>Cartes à points pour la subitisation</li>
                            <li>Affiches et aide-mémoire visuels</li>
                            <li>Carnets de procédures personnalisés</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Parcours scolaire et aménagements</h3>
                      <div className="bg-secondary p-4 rounded-lg">
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Guide de mise en place des PAP et PPS</li>
                          <li>Informations sur les aménagements aux examens</li>
                          <li>Droits et démarches auprès de la MDPH</li>
                          <li>Orientation scolaire adaptée</li>
                          <li>Services d'accompagnement (SESSAD, SAAAIS)</li>
                          <li>Soutien scolaire spécialisé</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Soutien pour les adultes</h3>
                      <div className="space-y-3">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Milieu professionnel</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Information sur la reconnaissance RQTH</li>
                            <li>Aménagements possibles en milieu professionnel</li>
                            <li>Orientation vers des métiers adaptés</li>
                            <li>Coaching professionnel spécialisé</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Vie quotidienne</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Stratégies pour la gestion du budget</li>
                            <li>Outils d'aide pour les achats et transactions</li>
                            <li>Applications de conversion et de calcul</li>
                            <li>Techniques pour surmonter les difficultés quotidiennes</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Communautés et groupes de soutien</h3>
                      <div className="bg-secondary p-4 rounded-lg">
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Forums en ligne pour parents et personnes concernées</li>
                          <li>Groupes Facebook dédiés aux troubles dys</li>
                          <li>Cafés-parents organisés par les associations</li>
                          <li>Témoignages et partages d'expériences</li>
                          <li>Réseaux d'entraide entre pairs</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Recherche et innovation</h3>
                      <div className="bg-secondary p-4 rounded-lg">
                        <p className="text-muted-foreground mb-2">
                          Ressources pour suivre les avancées dans la compréhension et la prise en charge de la dyscalculie :
                        </p>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          <li>Publications de l'INSERM sur les troubles des apprentissages</li>
                          <li>Travaux du Centre de Référence des Troubles d'Apprentissage (CRTA)</li>
                          <li>Recherches universitaires spécialisées</li>
                          <li>Colloques et formations continues pour professionnels</li>
                          <li>Programmes expérimentaux de remédiation cognitive</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>    </div>
  );
};

export default Dyscalculie;
