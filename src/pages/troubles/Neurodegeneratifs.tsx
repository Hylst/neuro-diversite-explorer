
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Book, Users, ClipboardCheck, Lightbulb, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Neurodegeneratifs = () => {
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
                <span className="text-neuro-blue">Maladies neurodégénératives</span>
              </motion.h1>
              <motion.p 
                className="text-lg text-muted-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Troubles progressifs du système nerveux
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
                <TabsTrigger value="types">Types</TabsTrigger>
                <TabsTrigger value="diagnostic">Diagnostic</TabsTrigger>
                <TabsTrigger value="interventions">Prise en charge</TabsTrigger>
                <TabsTrigger value="resources">Ressources</TabsTrigger>
              </TabsList>
            </div>
            
            {/* Presentation Tab */}
            <TabsContent value="presentation">
              <div className="max-w-3xl mx-auto">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <Brain className="h-6 w-6 text-neuro-blue" />
                      <CardTitle>Comprendre les maladies neurodégénératives</CardTitle>
                    </div>
                    <CardDescription>
                      Présentation générale des troubles progressifs du système nerveux
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground">
                      Les maladies neurodégénératives constituent un groupe de pathologies caractérisées par la détérioration progressive des neurones
                      et des structures du système nerveux. Cette dégénérescence entraîne un déclin des fonctions neurologiques et cognitives, affectant
                      la motricité, la cognition, le comportement et/ou l'autonomie des personnes atteintes.
                    </p>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Caractéristiques communes</h3>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Perte progressive de neurones dans des régions spécifiques du cerveau ou du système nerveux</li>
                        <li>Évolution chronique, généralement lente et irréversible</li>
                        <li>Apparition de symptômes correspondant aux zones cérébrales touchées</li>
                        <li>Accumulation anormale de protéines mal repliées dans ou autour des neurones</li>
                        <li>Impact significatif sur la qualité de vie et l'autonomie</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Prévalence et impact social</h3>
                      <p className="text-muted-foreground">
                        Les maladies neurodégénératives touchent des millions de personnes dans le monde, avec une prévalence qui augmente
                        avec l'âge et le vieillissement global de la population. En France, on estime que plus d'un million de personnes sont atteintes
                        d'une maladie neurodégénérative, dont environ 900 000 pour la maladie d'Alzheimer et maladies apparentées.
                        Ces pathologies représentent un défi majeur de santé publique en raison de leur impact sur les patients, les aidants et
                        les systèmes de santé.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Mécanismes pathologiques</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Agrégation protéique</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Accumulation de protéines mal conformées</li>
                            <li>Formation d'agrégats toxiques</li>
                            <li>Exemples : plaques amyloïdes (Alzheimer), corps de Lewy (Parkinson)</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Dysfonctionnement cellulaire</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Stress oxydatif</li>
                            <li>Dysfonctionnement mitochondrial</li>
                            <li>Altération du transport axonal</li>
                            <li>Perturbation de l'homéostasie calcique</li>
                          </ul>
                        </div>
                      </div>
                      <div className="bg-secondary p-4 rounded-lg mt-4">
                        <h4 className="font-medium mb-2">Inflammation et réponse immunitaire</h4>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          <li>Activation microgliale et astrocytaire</li>
                          <li>Libération de cytokines inflammatoires</li>
                          <li>Perturbation de la barrière hémato-encéphalique</li>
                          <li>Dérégulation immunitaire (particulièrement dans la sclérose en plaques)</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Facteurs de risque</h3>
                      <div className="space-y-3">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Facteurs génétiques</h4>
                          <p className="text-muted-foreground">
                            Certaines mutations génétiques peuvent causer directement ou augmenter le risque de développer une maladie neurodégénérative.
                            Les formes familiales, bien que minoritaires, sont importantes pour comprendre les mécanismes pathologiques.
                          </p>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Vieillissement</h4>
                          <p className="text-muted-foreground">
                            Principal facteur de risque pour la plupart des maladies neurodégénératives. Le vieillissement s'accompagne
                            de changements biologiques qui favorisent la neurodégénérescence.
                          </p>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Facteurs environnementaux</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Exposition à certaines toxines ou pesticides</li>
                            <li>Traumatismes crâniens répétés</li>
                            <li>Infections virales ou bactériennes</li>
                            <li>Mode de vie et alimentation</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Défis de recherche et traitement</h3>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Diversité des mécanismes pathologiques impliqués</li>
                        <li>Début de la maladie bien avant l'apparition des symptômes cliniques</li>
                        <li>Difficulté à développer des médicaments franchissant la barrière hémato-encéphalique</li>
                        <li>Défis dans l'identification de biomarqueurs précoces fiables</li>
                        <li>Nécessité d'approches multidisciplinaires</li>
                        <li>Absence de traitements curatifs pour la majorité des maladies neurodégénératives</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Avancées prometteuses</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Diagnostic précoce</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Biomarqueurs sanguins et du liquide céphalo-rachidien</li>
                            <li>Imagerie cérébrale avancée</li>
                            <li>Tests cognitifs sensibles</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Approches thérapeutiques</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Thérapies ciblant les protéines pathologiques</li>
                            <li>Immunothérapies</li>
                            <li>Médecine régénérative et cellules souches</li>
                            <li>Thérapie génique</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Types Tab */}
            <TabsContent value="types">
              <div className="max-w-3xl mx-auto">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <Users className="h-6 w-6 text-neuro-blue" />
                      <CardTitle>Principales maladies neurodégénératives</CardTitle>
                    </div>
                    <CardDescription>
                      Les différents types de troubles et leurs caractéristiques spécifiques
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-3">Maladie d'Alzheimer</h3>
                      <div className="bg-secondary p-4 rounded-lg mb-2">
                        <p className="mb-2 text-muted-foreground">
                          Forme la plus fréquente de démence, caractérisée par une perte progressive de la mémoire et d'autres fonctions cognitives.
                        </p>
                        <h4 className="font-medium mb-2">Caractéristiques principales</h4>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          <li>Accumulation de plaques amyloïdes et d'enchevêtrements neurofibrillaires</li>
                          <li>Troubles progressifs de la mémoire, particulièrement la mémoire épisodique récente</li>
                          <li>Altération progressive des fonctions exécutives, du langage et des capacités visuo-spatiales</li>
                          <li>Déclin fonctionnel conduisant à la perte d'autonomie</li>
                          <li>Troubles comportementaux et psychologiques possibles (agitation, apathie, dépression)</li>
                        </ul>
                      </div>
                      <p className="text-muted-foreground">
                        L'âge est le principal facteur de risque. La maladie touche environ 8% des personnes de plus de 65 ans et près de 30% 
                        des plus de 85 ans.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Maladie de Parkinson</h3>
                      <div className="bg-secondary p-4 rounded-lg mb-2">
                        <p className="mb-2 text-muted-foreground">
                          Trouble progressif du mouvement causé par la dégénérescence des neurones dopaminergiques de la substance noire.
                        </p>
                        <h4 className="font-medium mb-2">Symptômes caractéristiques</h4>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          <li>Tremblement de repos, particulièrement aux mains</li>
                          <li>Rigidité musculaire</li>
                          <li>Bradykinésie (lenteur des mouvements)</li>
                          <li>Instabilité posturale</li>
                          <li>Symptômes non moteurs : troubles du sommeil, dépression, anxiété, troubles cognitifs</li>
                        </ul>
                      </div>
                      <p className="text-muted-foreground">
                        La maladie de Parkinson touche environ 1% des personnes de plus de 60 ans. L'âge moyen de début se situe 
                        autour de 60 ans, mais elle peut apparaître plus tôt (Parkinson précoce).
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Sclérose en plaques (SEP)</h3>
                      <div className="bg-secondary p-4 rounded-lg mb-2">
                        <p className="mb-2 text-muted-foreground">
                          Maladie auto-immune caractérisée par la démyélinisation des neurones du système nerveux central.
                        </p>
                        <h4 className="font-medium mb-2">Manifestations cliniques</h4>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          <li>Symptômes variables selon les zones touchées : troubles moteurs, sensitifs, visuels, cognitifs</li>
                          <li>Évolution par poussées-rémissions dans la forme récurrente-rémittente</li>
                          <li>Progression continue dans les formes progressives</li>
                          <li>Fatigue intense caractéristique</li>
                          <li>Troubles sphinctériens fréquents</li>
                        </ul>
                      </div>
                      <p className="text-muted-foreground">
                        La SEP touche principalement les jeunes adultes, avec un âge moyen de début entre 20 et 40 ans. 
                        Elle affecte plus fréquemment les femmes que les hommes.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Sclérose Latérale Amyotrophique (SLA) / Maladie de Charcot</h3>
                      <div className="bg-secondary p-4 rounded-lg mb-2">
                        <p className="mb-2 text-muted-foreground">
                          Maladie caractérisée par la dégénérescence des motoneurones, entraînant une faiblesse musculaire progressive.
                        </p>
                        <h4 className="font-medium mb-2">Progression de la maladie</h4>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          <li>Début par une faiblesse focale qui s'étend progressivement</li>
                          <li>Atrophie musculaire et fasciculations</li>
                          <li>Préservation des fonctions sensorielles et cognitive dans la plupart des cas</li>
                          <li>Atteinte des muscles respiratoires aux stades avancés</li>
                          <li>Évolution généralement rapide (3 à 5 ans)</li>
                        </ul>
                      </div>
                      <p className="text-muted-foreground">
                        La SLA est une maladie rare (2 à 3 cas pour 100 000 personnes) qui touche plus fréquemment les hommes, 
                        généralement entre 40 et 70 ans.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Maladie de Huntington</h3>
                      <div className="bg-secondary p-4 rounded-lg mb-2">
                        <p className="mb-2 text-muted-foreground">
                          Maladie génétique à transmission autosomique dominante causée par une mutation du gène HTT.
                        </p>
                        <h4 className="font-medium mb-2">Triade symptomatique</h4>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          <li>Troubles moteurs : mouvements choréiques, dystonies, troubles de la déglutition</li>
                          <li>Troubles cognitifs : difficultés d'organisation, de planification, de concentration</li>
                          <li>Troubles psychiatriques : irritabilité, dépression, anxiété, apathie</li>
                          <li>Apparition généralement entre 30 et 50 ans</li>
                          <li>Évolution sur 15 à 20 ans</li>
                        </ul>
                      </div>
                      <p className="text-muted-foreground">
                        La maladie de Huntington est rare (5 à 10 cas pour 100 000 personnes). Chaque enfant d'un parent atteint 
                        a 50% de risque d'hériter de la mutation.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Démence à corps de Lewy</h3>
                      <div className="bg-secondary p-4 rounded-lg mb-2">
                        <p className="mb-2 text-muted-foreground">
                          Caractérisée par la présence de corps de Lewy (agrégats de la protéine alpha-synucléine) dans le cortex cérébral.
                        </p>
                        <h4 className="font-medium mb-2">Caractéristiques cliniques</h4>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          <li>Fluctuations de l'attention et de la vigilance</li>
                          <li>Hallucinations visuelles récurrentes, souvent détaillées</li>
                          <li>Syndrome parkinsonien (rigidité, bradykinésie)</li>
                          <li>Troubles du sommeil paradoxal</li>
                          <li>Grande sensibilité aux neuroleptiques</li>
                        </ul>
                      </div>
                      <p className="text-muted-foreground">
                        Représente environ 10-15% des démences, généralement chez des personnes de plus de 65 ans.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Autres maladies neurodégénératives</h3>
                      <div className="space-y-3">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Dégénérescence fronto-temporale</h4>
                          <p className="text-muted-foreground">
                            Groupe de troubles affectant principalement les lobes frontaux et temporaux. Se manifeste par des changements 
                            comportementaux, des troubles du langage et une altération des fonctions exécutives.
                          </p>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Atrophie multisystématisée</h4>
                          <p className="text-muted-foreground">
                            Syndrome parkinsonien atypique avec dysautonomie, atteinte cérébelleuse et/ou pyramidale.
                          </p>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Paralysie supranucléaire progressive</h4>
                          <p className="text-muted-foreground">
                            Caractérisée par des troubles de la motilité oculaire verticale, une instabilité posturale et une démence.
                          </p>
                        </div>
                      </div>
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
                      <ClipboardCheck className="h-6 w-6 text-neuro-blue" />
                      <CardTitle>Diagnostic et évaluation</CardTitle>
                    </div>
                    <CardDescription>
                      Approches et outils pour identifier les maladies neurodégénératives
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground">
                      Le diagnostic des maladies neurodégénératives repose sur une approche multidisciplinaire combinant 
                      l'évaluation clinique, les examens complémentaires et parfois des tests génétiques. Un diagnostic
                      précoce est crucial pour optimiser la prise en charge et la planification des soins.
                    </p>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Démarche diagnostique générale</h3>
                      <ol className="list-decimal pl-5 space-y-3 text-muted-foreground">
                        <li>
                          <span className="font-medium">Anamnèse complète</span>
                          <p>Histoire médicale, antécédents familiaux, mode d'installation et évolution des symptômes</p>
                        </li>
                        <li>
                          <span className="font-medium">Examen clinique</span>
                          <p>Neurologique, cognitif et fonctionnel</p>
                        </li>
                        <li>
                          <span className="font-medium">Tests cognitifs et neuropsychologiques</span>
                          <p>Évaluation des différentes fonctions cognitives</p>
                        </li>
                        <li>
                          <span className="font-medium">Examens d'imagerie</span>
                          <p>IRM, scanner, TEP-scan selon les indications</p>
                        </li>
                        <li>
                          <span className="font-medium">Examens biologiques</span>
                          <p>Sanguins et parfois du liquide céphalo-rachidien</p>
                        </li>
                        <li>
                          <span className="font-medium">Tests génétiques</span>
                          <p>Dans certains cas, particulièrement pour les formes familiales</p>
                        </li>
                      </ol>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Évaluation clinique et neuropsychologique</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Évaluation cognitive</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Tests de dépistage : MMSE, MoCA, test de l'horloge</li>
                            <li>Bilan neuropsychologique approfondi</li>
                            <li>Évaluation de la mémoire, attention, fonctions exécutives</li>
                            <li>Tests de langage et praxies</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Évaluation motrice</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>UPDRS pour la maladie de Parkinson</li>
                            <li>Examen de la marche et de l'équilibre</li>
                            <li>Évaluation de la force musculaire</li>
                            <li>Tests des réflexes et de la coordination</li>
                          </ul>
                        </div>
                      </div>
                      <div className="bg-secondary p-4 rounded-lg mt-4">
                        <h4 className="font-medium mb-2">Évaluation fonctionnelle et comportementale</h4>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          <li>Échelles d'autonomie (ADL, IADL)</li>
                          <li>Évaluation des troubles neuropsychiatriques (NPI)</li>
                          <li>Échelles de qualité de vie</li>
                          <li>Évaluation de la charge des aidants</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Imagerie cérébrale</h3>
                      <div className="space-y-3">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">IRM (Imagerie par Résonance Magnétique)</h4>
                          <p className="text-muted-foreground">
                            Permet de visualiser la structure cérébrale avec une haute résolution, d'identifier l'atrophie 
                            régionale et les lésions vasculaires.
                          </p>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Scanner cérébral (tomodensitométrie)</h4>
                          <p className="text-muted-foreground">
                            Utile pour exclure certaines causes non dégénératives (tumeurs, hématomes) et pour les patients 
                            ne pouvant bénéficier d'une IRM.
                          </p>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">TEP-scan (Tomographie par Émission de Positons)</h4>
                          <p className="text-muted-foreground">
                            Permet d'étudier le métabolisme cérébral (TEP au FDG) ou la présence de protéines pathologiques 
                            spécifiques (amyloïde, tau).
                          </p>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">SPECT (Tomographie d'Émission Monophotonique)</h4>
                          <p className="text-muted-foreground">
                            Utilisée notamment dans le Parkinson pour évaluer les transporteurs de la dopamine (DaTscan).
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Biomarqueurs biologiques</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Liquide céphalo-rachidien (LCR)</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Protéines amyloïdes et tau pour la maladie d'Alzheimer</li>
                            <li>Neurofilaments dans plusieurs maladies neurodégénératives</li>
                            <li>Alpha-synucléine pour les synucléinopathies</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Biomarqueurs sanguins</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Protéines tau et amyloïdes plasmatiques</li>
                            <li>Neurofilaments à chaîne légère</li>
                            <li>Recherche active de nouveaux marqueurs</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Tests génétiques</h3>
                      <div className="bg-secondary p-4 rounded-lg">
                        <p className="mb-2 text-muted-foreground">
                          Indiqués dans certaines situations spécifiques :
                        </p>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          <li>Antécédents familiaux évocateurs</li>
                          <li>Âge de début précoce</li>
                          <li>Présentation clinique atypique</li>
                          <li>Maladies à transmission mendélienne (Huntington, formes familiales de SLA, etc.)</li>
                        </ul>
                        <p className="mt-2 text-muted-foreground">
                          Ces tests nécessitent un conseil génétique approprié avant et après leur réalisation.
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Autres examens selon le contexte</h3>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Électromyogramme (EMG) dans la SLA pour documenter la dénervation</li>
                        <li>Électroencéphalogramme (EEG) pour certaines démences</li>
                        <li>Polysomnographie pour les troubles du sommeil paradoxal (démence à corps de Lewy)</li>
                        <li>Ponction lombaire pour analyse du LCR dans certains contextes</li>
                        <li>Biopsie tissulaire (muscle, nerf, peau) dans des cas particuliers</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Défis diagnostiques</h3>
                      <div className="bg-secondary p-4 rounded-lg">
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>
                            <span className="font-medium">Chevauchement des symptômes</span>
                            <p>Plusieurs maladies neurodégénératives présentent des manifestations cliniques similaires</p>
                          </li>
                          <li>
                            <span className="font-medium">Diagnostic différentiel</span>
                            <p>Nécessité d'exclure d'autres causes comme les troubles métaboliques, vasculaires ou psychiatriques</p>
                          </li>
                          <li>
                            <span className="font-medium">Accessibilité des biomarqueurs</span>
                            <p>Certains examens spécialisés ne sont pas disponibles partout ou sont coûteux</p>
                          </li>
                          <li>
                            <span className="font-medium">Diagnostic définitif post-mortem</span>
                            <p>Pour certaines maladies, seul l'examen neuropathologique permet un diagnostic de certitude</p>
                          </li>
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
                      <Lightbulb className="h-6 w-6 text-neuro-blue" />
                      <CardTitle>Prise en charge et traitement</CardTitle>
                    </div>
                    <CardDescription>
                      Approches thérapeutiques et accompagnement des maladies neurodégénératives
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground">
                      La prise en charge des maladies neurodégénératives est multidisciplinaire et vise à ralentir la progression 
                      des symptômes, maintenir l'autonomie et améliorer la qualité de vie. Elle combine approches pharmacologiques 
                      et non pharmacologiques, adaptées aux besoins évolutifs de chaque patient.
                    </p>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Principes généraux de prise en charge</h3>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Approche personnalisée et centrée sur le patient et ses aidants</li>
                        <li>Intervention précoce dès le diagnostic</li>
                        <li>Équipe pluridisciplinaire coordonnée</li>
                        <li>Adaptation continue des soins selon l'évolution de la maladie</li>
                        <li>Soutien aux aidants, partie intégrante de la prise en charge</li>
                        <li>Objectif global : maintien de l'autonomie et de la qualité de vie</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Traitements pharmacologiques</h3>
                      <div className="space-y-3">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Maladie d'Alzheimer</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Inhibiteurs de la cholinestérase (donépézil, rivastigmine, galantamine)</li>
                            <li>Mémantine (antagoniste des récepteurs NMDA)</li>
                            <li>Aducanumab (anticorps monoclonal anti-amyloïde, approuvé aux États-Unis)</li>
                            <li>Traitement des symptômes comportementaux (avec prudence)</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Maladie de Parkinson</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Lévodopa (L-DOPA), précurseur de la dopamine</li>
                            <li>Agonistes dopaminergiques</li>
                            <li>Inhibiteurs de la MAO-B et de la COMT</li>
                            <li>Anticholinergiques</li>
                            <li>Amantadine</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Sclérose en plaques</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Traitements de fond modificateurs de la maladie</li>
                            <li>Corticoïdes pour les poussées</li>
                            <li>Traitements symptomatiques (spasticité, douleur, fatigue)</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Sclérose latérale amyotrophique</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Riluzole (augmente modestement la survie)</li>
                            <li>Edaravone (antioxydant, approuvé dans certains pays)</li>
                            <li>Traitements symptomatiques (crampes, spasticité, salivation excessive)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Traitements non pharmacologiques</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Réhabilitation physique</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Kinésithérapie</li>
                            <li>Ergothérapie</li>
                            <li>Activité physique adaptée</li>
                            <li>Rééducation de la marche et de l'équilibre</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Réhabilitation cognitive</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Stimulation cognitive</li>
                            <li>Thérapie de réminiscence</li>
                            <li>Entraînement cognitif informatisé</li>
                            <li>Stratégies compensatoires</li>
                          </ul>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Interventions psychosociales</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Psychothérapie de soutien</li>
                            <li>Groupes de parole</li>
                            <li>Activités sociales adaptées</li>
                            <li>Art-thérapie, musicothérapie</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Adaptation de l'environnement</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Aménagement du domicile</li>
                            <li>Aides techniques et technologiques</li>
                            <li>Adaptation du lieu de travail</li>
                            <li>Sécurisation des espaces</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Traitements chirurgicaux et dispositifs médicaux</h3>
                      <div className="space-y-3">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Stimulation cérébrale profonde (SCP)</h4>
                          <p className="text-muted-foreground">
                            Particulièrement utilisée dans la maladie de Parkinson avancée, permet d'améliorer significativement 
                            les symptômes moteurs répondant à la lévodopa.
                          </p>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Pompe à apomorphine ou à lévodopa/carbidopa intestinale</h4>
                          <p className="text-muted-foreground">
                            Options pour les patients parkinsoniens avec fluctuations motrices sévères.
                          </p>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Assistance respiratoire non invasive ou invasive</h4>
                          <p className="text-muted-foreground">
                            Pour les patients atteints de SLA avec insuffisance respiratoire.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Prise en charge multidisciplinaire spécialisée</h3>
                      <div className="bg-secondary p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Professionnels impliqués</h4>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          <li>Neurologue ou gériatre</li>
                          <li>Médecin généraliste</li>
                          <li>Infirmier(ère) spécialisé(e)</li>
                          <li>Kinésithérapeute, ergothérapeute</li>
                          <li>Orthophoniste</li>
                          <li>Neuropsychologue</li>
                          <li>Psychologue ou psychiatre</li>
                          <li>Diététicien(ne)</li>
                          <li>Assistant(e) social(e)</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Soins palliatifs et de fin de vie</h3>
                      <p className="text-muted-foreground mb-3">
                        Les soins palliatifs font partie intégrante de la prise en charge des maladies neurodégénératives.
                        Ils ne se limitent pas à la fin de vie mais visent le soulagement des symptômes et l'amélioration de la qualité de vie.
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Discussion précoce sur les directives anticipées</li>
                        <li>Gestion optimale des symptômes inconfortables</li>
                        <li>Soutien psychologique et spirituel</li>
                        <li>Accompagnement de la famille</li>
                        <li>Coordination entre équipes spécialisées et équipes de soins palliatifs</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Soutien aux aidants</h3>
                      <div className="bg-secondary p-4 rounded-lg">
                        <p className="mb-2 text-muted-foreground">
                          Les aidants jouent un rôle crucial mais peuvent souffrir d'épuisement physique et émotionnel.
                        </p>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          <li>Information et formation sur la maladie et les soins</li>
                          <li>Soutien psychologique individuel ou en groupe</li>
                          <li>Solutions de répit (accueil de jour, hébergement temporaire)</li>
                          <li>Aide à domicile</li>
                          <li>Associations d'aidants et groupes d'entraide</li>
                        </ul>
                      </div>
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
                      <Book className="h-6 w-6 text-neuro-blue" />
                      <CardTitle>Ressources et soutien</CardTitle>
                    </div>
                    <CardDescription>
                      Informations, associations et outils pour les patients et leurs proches
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Associations de patients et de proches</h3>
                      <div className="space-y-3">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Maladie d'Alzheimer et maladies apparentées</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>France Alzheimer et maladies apparentées</li>
                            <li>Association Alzheimer Europe</li>
                            <li>Fondation Vaincre Alzheimer</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Maladie de Parkinson</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>France Parkinson</li>
                            <li>Association Française des Aidants de personnes atteintes de la maladie de Parkinson</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Sclérose en plaques</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Ligue Française contre la Sclérose en Plaques (LFSEP)</li>
                            <li>Fondation ARSEP (Aide à la Recherche sur la Sclérose En Plaques)</li>
                            <li>APF France handicap</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Sclérose latérale amyotrophique</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>ARSLA (Association pour la Recherche sur la SLA)</li>
                            <li>Ligue contre la Cardiomyopathie</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Maladie de Huntington</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Association Huntington France</li>
                            <li>Fondation Denise Picard</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Ressources institutionnelles</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Organismes nationaux</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Haute Autorité de Santé (HAS)</li>
                            <li>Agences Régionales de Santé (ARS)</li>
                            <li>Maisons Départementales des Personnes Handicapées (MDPH)</li>
                            <li>Centres Mémoire de Ressources et de Recherche (CMRR)</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Structures d'accueil et de soins</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>EHPAD spécialisés et unités cognitivo-comportementales</li>
                            <li>Accueils de jour</li>
                            <li>Équipes spécialisées Alzheimer à domicile (ESA)</li>
                            <li>Services de soins infirmiers à domicile (SSIAD)</li>
                            <li>Plateforme d'accompagnement et de répit</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Ressources d'information</h3>
                      <div className="space-y-3">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Sites d'information fiables</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Sites des associations mentionnées ci-dessus</li>
                            <li>INSERM (Institut National de la Santé et de la Recherche Médicale)</li>
                            <li>Institut du Cerveau (ICM)</li>
                            <li>Portail national d'information pour les personnes âgées et leurs proches</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Publications et guides</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Guides pratiques édités par les associations</li>
                            <li>Brochures d'information de la HAS</li>
                            <li>Revues spécialisées pour les patients et aidants</li>
                            <li>Livres de témoignages et guides pratiques</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Aides et droits</h3>
                      <div className="bg-secondary p-4 rounded-lg">
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>
                            <span className="font-medium">Aides financières</span>
                            <p>APA (Allocation Personnalisée d'Autonomie), PCH (Prestation de Compensation du Handicap), AAH (Allocation aux Adultes Handicapés)</p>
                          </li>
                          <li>
                            <span className="font-medium">Aides sociales</span>
                            <p>Aide sociale à l'hébergement, aide ménagère, portage de repas</p>
                          </li>
                          <li>
                            <span className="font-medium">Aides aux aidants</span>
                            <p>Congé de proche aidant, allocation journalière de présence parentale, droit au répit</p>
                          </li>
                          <li>
                            <span className="font-medium">Protection juridique</span>
                            <p>Information sur les mesures de protection (sauvegarde de justice, curatelle, tutelle)</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Outils et technologies d'assistance</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Aides à la vie quotidienne</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Aides à la mobilité (déambulateurs, fauteuils)</li>
                            <li>Dispositifs de sécurité (téléassistance)</li>
                            <li>Adaptations du domicile</li>
                            <li>Aides à l'habillage et à l'alimentation</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Technologies numériques</h4>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Applications de stimulation cognitive</li>
                            <li>Systèmes de géolocalisation</li>
                            <li>Objets connectés pour la santé</li>
                            <li>Technologies de communication adaptées</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Recherche et essais cliniques</h3>
                      <div className="bg-secondary p-4 rounded-lg">
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Informations sur les avancées de la recherche</li>
                          <li>Registres des essais cliniques en cours</li>
                          <li>Comment participer à un essai clinique</li>
                          <li>Associations et fondations finançant la recherche</li>
                          <li>Projets de recherche participative</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Forums et groupes de soutien</h3>
                      <div className="bg-secondary p-4 rounded-lg">
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Groupes de parole en présentiel organisés par les associations</li>
                          <li>Cafés des aidants</li>
                          <li>Forums en ligne et groupes sur les réseaux sociaux</li>
                          <li>Réseaux d'entraide entre pairs</li>
                          <li>Plateformes de témoignages et de partage d'expériences</li>
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

export default Neurodegeneratifs;
