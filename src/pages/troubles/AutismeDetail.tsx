
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Puzzle, BookOpen, Brain, HeartPulse, Users, GraduationCap, ScanSearch, Eye, MessageSquare, Lightbulb } from 'lucide-react';

const AutismeDetail = () => {
  // Function to scroll to top when clicking links
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="bg-muted py-12 md:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                L'<span className="neuro-gradient-text">Autisme</span> en détail
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Approche approfondie du trouble du spectre de l'autisme : neurodéveloppement, diagnostic et interventions
              </p>
            </div>
          </div>
        </div>

        <div className="container py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">L'autisme : une différence neurodéveloppementale</h2>
                <p className="text-muted-foreground mb-4">
                  L'autisme, ou trouble du spectre de l'autisme (TSA), est aujourd'hui considéré comme une condition 
                  neurodéveloppementale résultant d'une différence dans le développement et le fonctionnement cérébral. 
                  Cette différence modifie la façon dont la personne perçoit son environnement, traite l'information 
                  sensorielle et sociale, et interagit avec le monde qui l'entoure.
                </p>
                <p className="text-muted-foreground mb-4">
                  Le concept de "spectre" est fondamental pour comprendre l'autisme : il souligne l'extraordinaire 
                  diversité des profils, des manifestations et des besoins des personnes autistes. Chaque personne 
                  autiste présente une combinaison unique de traits, avec des forces et des difficultés variables 
                  selon les domaines, ce qui rend l'approche standardisée peu pertinente.
                </p>
                <p className="text-muted-foreground">
                  L'autisme n'est pas une maladie à "guérir", mais une différence neurologique durable qui fait partie 
                  intégrante de l'identité de la personne. La vision contemporaine de l'autisme, soutenue par le mouvement 
                  de la neurodiversité, met l'accent sur l'acceptation de ces différences neurologiques et sur l'adaptation 
                  de l'environnement plutôt que sur la normalisation des comportements autistiques.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Aspects neurodéveloppementaux</h2>
                <p className="text-muted-foreground mb-4">
                  Les recherches en neurosciences ont considérablement fait progresser notre compréhension 
                  des mécanismes cérébraux impliqués dans l'autisme :
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <Card className="p-4 border-neuro-green">
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="h-5 w-5 text-neuro-green" />
                      <h3 className="font-semibold text-neuro-green">Particularités anatomiques</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Plusieurs études ont identifié des différences dans certaines structures cérébrales, 
                      notamment un développement atypique de la matière blanche, des variations de volume dans 
                      l'amygdale et le cervelet, et une connectivité atypique entre différentes régions cérébrales.
                    </p>
                  </Card>
                  
                  <Card className="p-4 border-neuro-green">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="h-5 w-5 text-neuro-green" />
                      <h3 className="font-semibold text-neuro-green">Traitement de l'information</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Le cerveau autiste traite différemment l'information : tendance au traitement local plutôt que global 
                      (attention aux détails), traitement sensoriel atypique (hypersensibilité ou hyposensibilité), 
                      et différences dans le traitement des informations sociales et émotionnelles.
                    </p>
                  </Card>
                  
                  <Card className="p-4 border-neuro-green">
                    <div className="flex items-center gap-2 mb-2">
                      <ScanSearch className="h-5 w-5 text-neuro-green" />
                      <h3 className="font-semibold text-neuro-green">Connectivité cérébrale</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      L'IRM fonctionnelle révèle une connectivité atypique : hyperconnectivité dans certaines régions 
                      (notamment celles impliquées dans les intérêts spécifiques) et hypoconnectivité dans d'autres 
                      (particulièrement celles liées à l'intégration sociale et au traitement des émotions).
                    </p>
                  </Card>
                  
                  <Card className="p-4 border-neuro-green">
                    <div className="flex items-center gap-2 mb-2">
                      <Eye className="h-5 w-5 text-neuro-green" />
                      <h3 className="font-semibold text-neuro-green">Neurotransmission</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Des particularités dans la balance des neurotransmetteurs (notamment GABA et glutamate) 
                      pourraient expliquer certaines caractéristiques de l'autisme, comme les difficultés de 
                      filtrage des stimuli sensoriels ou la tendance à la surcharge sensorielle.
                    </p>
                  </Card>
                </div>
                
                <p className="text-muted-foreground">
                  Ces différences neurologiques apparaissent très tôt dans le développement, souvent avant même 
                  la naissance, et résultent d'une combinaison complexe de facteurs génétiques et environnementaux. 
                  Plus de 100 gènes ont été associés à l'autisme, chacun contribuant de façon modeste au phénotype global.
                </p>
              </div>

              <Tabs defaultValue="diagnostic">
                <TabsList className="grid grid-cols-4 mb-4">
                  <TabsTrigger value="diagnostic">Diagnostic</TabsTrigger>
                  <TabsTrigger value="characteristics">Caractéristiques</TabsTrigger>
                  <TabsTrigger value="interventions">Interventions</TabsTrigger>
                  <TabsTrigger value="lifespan">Parcours de vie</TabsTrigger>
                </TabsList>
                
                <TabsContent value="diagnostic" className="space-y-4">
                  <h3 className="text-xl font-semibold">Processus diagnostique</h3>
                  <p className="text-muted-foreground mb-4">
                    Le diagnostic de l'autisme est un processus complexe qui nécessite une évaluation 
                    approfondie par une équipe pluridisciplinaire.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="h-5 w-5 text-neuro-green" />
                        <h4 className="font-medium">Critères diagnostiques</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Selon le DSM-5, le diagnostic repose sur deux domaines principaux :
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Déficits persistants dans la communication et les interactions sociales</li>
                        <li>Comportements, intérêts ou activités restreints et répétitifs</li>
                        <li>Symptômes présents dès la petite enfance</li>
                        <li>Symptômes limitant le fonctionnement quotidien</li>
                        <li>Symptômes non mieux expliqués par un autre trouble</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="h-5 w-5 text-neuro-green" />
                        <h4 className="font-medium">Équipe pluridisciplinaire</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        L'évaluation implique généralement plusieurs professionnels :
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Psychiatre ou pédopsychiatre</li>
                        <li>Psychologue spécialisé en neurodéveloppement</li>
                        <li>Orthophoniste (pour les aspects communication)</li>
                        <li>Psychomotricien ou ergothérapeute</li>
                        <li>Neurologue (dans certains cas)</li>
                        <li>Généticien (pour les recherches étiologiques)</li>
                      </ul>
                    </Card>

                    <Card className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Puzzle className="h-5 w-5 text-neuro-green" />
                        <h4 className="font-medium">Outils d'évaluation standardisés</h4>
                      </div>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li><span className="font-medium">ADOS-2</span> (Autism Diagnostic Observation Schedule) : évaluation basée sur l'observation directe</li>
                        <li><span className="font-medium">ADI-R</span> (Autism Diagnostic Interview-Revised) : entretien structuré avec les parents</li>
                        <li><span className="font-medium">CARS</span> (Childhood Autism Rating Scale) : échelle d'évaluation</li>
                        <li><span className="font-medium">M-CHAT</span> (Modified Checklist for Autism in Toddlers) : dépistage précoce</li>
                        <li>Tests cognitifs et d'intelligence adaptés</li>
                        <li>Évaluations fonctionnelles et adaptatives</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <ScanSearch className="h-5 w-5 text-neuro-green" />
                        <h4 className="font-medium">Diagnostics différentiels</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Il est essentiel d'écarter d'autres conditions pouvant présenter des symptômes similaires :
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Trouble du langage ou de la communication</li>
                        <li>Troubles anxieux (notamment anxiété sociale)</li>
                        <li>TDAH (souvent comorbide)</li>
                        <li>Troubles sensoriels isolés</li>
                        <li>Troubles de l'attachement</li>
                        <li>Troubles génétiques spécifiques (X fragile, etc.)</li>
                      </ul>
                    </Card>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg mt-4">
                    <h4 className="font-medium mb-2">Parcours diagnostique en France</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Le parcours diagnostique s'organise en plusieurs niveaux :
                    </p>
                    <ol className="list-decimal pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Repérage initial (par les parents, la crèche, l'école, le médecin traitant)</li>
                      <li>Évaluation de première ligne (médecin généraliste, pédiatre, PMI)</li>
                      <li>Évaluation de deuxième ligne (CAMSP, CMP, CMPP, pédopsychiatres libéraux)</li>
                      <li>Évaluation de troisième ligne pour les cas complexes (Centres Ressources Autisme - CRA)</li>
                    </ol>
                    <p className="text-sm text-muted-foreground mt-2">
                      Les délais d'attente sont malheureusement souvent longs (plusieurs mois, voire années), 
                      mais les recommandations actuelles insistent sur l'importance d'un diagnostic précoce 
                      et d'interventions qui ne doivent pas attendre la confirmation diagnostique.
                    </p>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Autisme chez les femmes et les filles</h4>
                    <p className="text-sm text-muted-foreground">
                      Les femmes et les filles autistes sont souvent sous-diagnostiquées en raison de :
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>Meilleures stratégies de compensation sociale ("camouflage")</li>
                      <li>Présentation clinique différente des descriptions traditionnelles (basées sur des observations masculines)</li>
                      <li>Intérêts restreints socialement plus acceptables</li>
                      <li>Moins de comportements perturbateurs apparents</li>
                      <li>Meilleure imitation sociale et répertoire d'expressions plus riche</li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-2">
                      Ces différences de présentation conduisent souvent à des diagnostics tardifs à l'adolescence 
                      ou à l'âge adulte, parfois après des années d'incompréhension, de difficultés sociales 
                      et de diagnostics erronés (troubles anxieux, trouble de la personnalité borderline, etc.).
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="characteristics" className="space-y-4">
                  <h3 className="text-xl font-semibold">Caractéristiques et particularités</h3>
                  <p className="text-muted-foreground mb-4">
                    L'autisme se manifeste par une constellation de caractéristiques qui varient 
                    considérablement dans leur expression et leur intensité d'une personne à l'autre.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <MessageSquare className="h-5 w-5 text-neuro-green" />
                        <h4 className="font-medium">Communication sociale</h4>
                      </div>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Différences dans la compréhension des indices sociaux implicites</li>
                        <li>Difficulté à interpréter les expressions faciales et le langage corporel</li>
                        <li>Communication directe, littérale, parfois perçue comme abrupte</li>
                        <li>Difficulté avec les règles non écrites de la conversation</li>
                        <li>Compréhension littérale, difficultés avec l'implicite, l'ironie, le sarcasme</li>
                        <li>Difficulté à ajuster la communication selon le contexte social</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Eye className="h-5 w-5 text-neuro-green" />
                        <h4 className="font-medium">Particularités sensorielles</h4>
                      </div>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Hypersensibilité à certains stimuli (bruits, lumières, textures, odeurs)</li>
                        <li>Hyposensibilité dans d'autres domaines sensoriels</li>
                        <li>Perception amplifiée des détails sensoriels au détriment de l'ensemble</li>
                        <li>Difficultés de filtrage des informations sensorielles non pertinentes</li>
                        <li>Synesthésies plus fréquentes (association entre différentes modalités sensorielles)</li>
                        <li>Seuil de surcharge sensorielle souvent bas, menant à l'épuisement</li>
                      </ul>
                    </Card>

                    <Card className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Lightbulb className="h-5 w-5 text-neuro-green" />
                        <h4 className="font-medium">Intérêts spécifiques et cognition</h4>
                      </div>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Intérêts focalisés, intensifs et approfondis dans des domaines spécifiques</li>
                        <li>Mémoire exceptionnelle pour les sujets d'intérêt</li>
                        <li>Pensée en détails, analytique, parfois aux dépens de la vision globale</li>
                        <li>Tendance à la systématisation (compréhension des systèmes logiques)</li>
                        <li>Capacités parfois asymétriques (forces cognitives dans certains domaines)</li>
                        <li>Excellente perception des détails et des patterns</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Puzzle className="h-5 w-5 text-neuro-green" />
                        <h4 className="font-medium">Aspects comportementaux</h4>
                      </div>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Besoin de prévisibilité, routines et rituels</li>
                        <li>Mouvements répétitifs (stimming) : balancement, battements de mains</li>
                        <li>Difficultés avec les transitions et les changements imprévus</li>
                        <li>Approche littérale et honnête des relations sociales</li>
                        <li>Difficultés à comprendre les attentes sociales implicites</li>
                        <li>Masking (tentative de cacher les traits autistiques en public)</li>
                      </ul>
                    </Card>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg mt-4">
                    <h4 className="font-medium mb-2">Forces et talents fréquemment associés</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      L'approche neurodiversitaire met en avant les forces associées au fonctionnement autistique :
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Honnêteté et authenticité</li>
                        <li>Perception fine des détails</li>
                        <li>Forte concentration sur les sujets d'intérêt</li>
                        <li>Pensée originale et créative</li>
                        <li>Mémoire exceptionnelle dans certains domaines</li>
                      </ul>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Persévérance face aux défis</li>
                        <li>Logique et pensée systématique</li>
                        <li>Sens aigu de la justice</li>
                        <li>Observation fine de l'environnement</li>
                        <li>Indépendance de pensée</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Témoignage</h4>
                    <blockquote className="italic text-sm text-muted-foreground border-l-4 border-neuro-green pl-4">
                      "Être autiste, c'est comme être un système d'exploitation différent dans un monde conçu pour une autre interface. 
                      Je perçois tout différemment : les bruits ordinaires peuvent être assourdissants, les lumières aveuglantes, 
                      les tissus insupportables. Mais j'ai aussi des forces uniques : je vois des détails que les autres manquent, 
                      ma mémoire est extraordinaire pour mes centres d'intérêt, et ma pensée sort des sentiers battus. Le plus difficile, 
                      ce n'est pas d'être autiste, c'est de devoir constamment m'adapter à un monde qui n'est pas conçu pour mon 
                      fonctionnement neurologique."
                      <footer className="mt-2 font-medium not-italic">Emma, 34 ans, diagnostiquée à 29 ans</footer>
                    </blockquote>
                    <p className="text-xs text-muted-foreground mt-2 italic">
                      Note: Ce témoignage est fictif, créé à des fins pédagogiques pour illustrer le vécu possible d'une personne autiste.
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="interventions" className="space-y-4">
                  <h3 className="text-xl font-semibold">Interventions et accompagnements</h3>
                  <p className="text-muted-foreground mb-4">
                    Les approches d'accompagnement ont considérablement évolué ces dernières années, 
                    s'éloignant des méthodes visant à "normaliser" pour privilégier le soutien au 
                    développement des compétences tout en respectant le fonctionnement autistique.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <Card className="p-4">
                      <h4 className="font-medium mb-2">Interventions précoces</h4>
                      <p className="text-sm text-muted-foreground">
                        Particulièrement importantes car s'appuyant sur la plasticité cérébrale :
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>Intervention développementale précoce (modèle de Denver)</li>
                        <li>PACT (Pediatric Autism Communication Therapy)</li>
                        <li>Approches développementales centrées sur le jeu</li>
                        <li>Guidance parentale</li>
                        <li>Approches sensorimotrices adaptées</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4">
                      <h4 className="font-medium mb-2">Soutien à la communication</h4>
                      <p className="text-sm text-muted-foreground">
                        Adapté aux besoins spécifiques de la personne :
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>Communication Alternative et Augmentée (CAA)</li>
                        <li>PECS (Picture Exchange Communication System)</li>
                        <li>Language oral complété par des supports visuels</li>
                        <li>Apprentissage de la pragmatique du langage</li>
                        <li>Technologie d'assistance à la communication</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4">
                      <h4 className="font-medium mb-2">Interventions éducatives</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Approches comportementales naturalistiques développementales</li>
                        <li>TEACCH (structuration de l'environnement et des activités)</li>
                        <li>ABA contemporaine (centrée sur les compétences fonctionnelles)</li>
                        <li>Scolarisation adaptée (ULIS, dispositifs inclusifs)</li>
                        <li>Adaptation des méthodes pédagogiques</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4">
                      <h4 className="font-medium mb-2">Approches thérapeutiques</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Thérapie d'intégration sensorielle</li>
                        <li>Groupes d'habiletés sociales</li>
                        <li>Thérapies expressives (art-thérapie, musicothérapie)</li>
                        <li>Interventions basées sur les intérêts spécifiques</li>
                        <li>Thérapie assistée par les animaux</li>
                      </ul>
                    </Card>
                  </div>
                  
                  <div className="bg-secondary p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Évolution des approches</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-sm font-medium mb-1">Approches déconseillées ou controversées :</h5>
                        <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground">
                          <li>Régimes restrictifs sans indication médicale</li>
                          <li>Chélation des métaux lourds</li>
                          <li>Méthodes visant à supprimer les stéréotypies (stimming)</li>
                          <li>Communication facilitée (non validée scientifiquement)</li>
                          <li>Approches intensives non respectueuses des particularités autistiques</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-medium mb-1">Orientations actuelles recommandées :</h5>
                        <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground">
                          <li>Interventions sur mesure, adaptées au profil individuel</li>
                          <li>Approches combinées, pluridisciplinaires</li>
                          <li>Interventions respectueuses de la neurologie autistique</li>
                          <li>Implication de la personne autiste dans les décisions</li>
                          <li>Adaptation de l'environnement plutôt que de l'individu</li>
                          <li>Valorisation des forces et des intérêts spécifiques</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Accompagnement médical et pharmacologique</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Il n'existe pas de traitement médicamenteux de l'autisme en soi, mais certains 
                      médicaments peuvent être prescrits pour des symptômes associés :
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Traitement de l'anxiété, fréquemment comorbide</li>
                      <li>Médicaments pour les troubles du sommeil</li>
                      <li>Traitement du TDAH associé</li>
                      <li>Antiépileptiques en cas d'épilepsie associée</li>
                      <li>Traitement de courte durée pour l'irritabilité sévère</li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-2">
                      Les approches pharmacologiques doivent toujours être accompagnées d'interventions 
                      psycho-éducatives et comportementales, et faire l'objet d'une surveillance attentive.
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="lifespan" className="space-y-4">
                  <h3 className="text-xl font-semibold">L'autisme tout au long de la vie</h3>
                  <p className="text-muted-foreground mb-4">
                    L'autisme est une condition permanente, mais ses manifestations et son impact 
                    évoluent au cours de la vie. Un accompagnement adapté à chaque étape est essentiel.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <Card className="p-4">
                      <h4 className="font-medium mb-2">Petite enfance (0-6 ans)</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Repérage des signes précoces (vers 18-24 mois)</li>
                        <li>Mise en place d'interventions précoces</li>
                        <li>Soutien au développement de la communication</li>
                        <li>Adaptation sensorielle de l'environnement</li>
                        <li>Guidance parentale et formation des proches</li>
                        <li>Préparation à la scolarisation</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4">
                      <h4 className="font-medium mb-2">Enfance (6-12 ans)</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Adaptation de la scolarité (avec ou sans AESH)</li>
                        <li>Développement des compétences sociales</li>
                        <li>Gestion des particularités sensorielles en milieu scolaire</li>
                        <li>Valorisation des intérêts spécifiques dans l'apprentissage</li>
                        <li>Soutien paramédical ciblé (orthophonie, ergothérapie)</li>
                        <li>Préparation aux changements corporels et émotionnels à venir</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4">
                      <h4 className="font-medium mb-2">Adolescence (12-18 ans)</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Accompagnement des changements pubertaires</li>
                        <li>Éducation affective et sexuelle adaptée</li>
                        <li>Orientation scolaire et professionnelle</li>
                        <li>Préparation à l'autonomie</li>
                        <li>Soutien à l'identité et l'estime de soi</li>
                        <li>Gestion du stress social accru à cette période</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4">
                      <h4 className="font-medium mb-2">Vie adulte</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Insertion professionnelle adaptée ou milieu protégé</li>
                        <li>Solutions de logement (autonome, partagé, accompagné)</li>
                        <li>Apprentissage des compétences de vie quotidienne</li>
                        <li>Soutien à la vie sociale et affective</li>
                        <li>Prévention de l'isolement et de la dépression</li>
                        <li>Accompagnement à la parentalité si nécessaire</li>
                      </ul>
                    </Card>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Transitions et moments clés</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Certaines périodes nécessitent une attention particulière :
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li><span className="font-medium">Entrée à l'école</span> : préparation, sensibilisation de l'équipe éducative</li>
                      <li><span className="font-medium">Passage au collège</span> : adaptation à l'organisation plus complexe</li>
                      <li><span className="font-medium">Fin de scolarité</span> : orientation professionnelle adaptée</li>
                      <li><span className="font-medium">Départ du domicile familial</span> : préparation progressive à l'autonomie</li>
                      <li><span className="font-medium">Changements familiaux</span> : déménagement, deuil, séparation</li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-2">
                      Ces transitions doivent être anticipées et préparées, avec des visites préalables, 
                      des supports visuels, et une introduction graduelle aux nouveaux environnements.
                    </p>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Vieillissement et autisme</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Un domaine encore peu étudié mais important :
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Évolution des manifestations sensorielles et motrices avec l'âge</li>
                      <li>Risques spécifiques de certaines pathologies</li>
                      <li>Adaptation des structures d'accueil pour personnes âgées</li>
                      <li>Continuité des soins et de l'accompagnement</li>
                      <li>Préparation de l'avenir après les parents (protection juridique, financière)</li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-2">
                      Les recherches sur le vieillissement des personnes autistes sont encore émergentes, 
                      mais cette question devient cruciale avec la première génération de personnes 
                      diagnostiquées enfants qui atteint maintenant l'âge senior.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">Aspects socio-politiques et enjeux actuels</h2>
                <p className="text-muted-foreground mb-4">
                  Au-delà des aspects cliniques, l'autisme s'inscrit dans un contexte social, 
                  politique et culturel en pleine évolution :
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <Card className="p-4">
                    <h4 className="font-medium mb-2">Mouvement pour les droits et l'autodétermination</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Émergence du mouvement pour la neurodiversité</li>
                      <li>Militantisme "rien sur nous sans nous"</li>
                      <li>Revendication d'une place dans l'élaboration des politiques</li>
                      <li>Critique des approches normalisatrices</li>
                      <li>Valorisation de la culture autistique</li>
                    </ul>
                  </Card>
                  
                  <Card className="p-4">
                    <h4 className="font-medium mb-2">Enjeux d'inclusion</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Accessibilité sensorielle des espaces publics</li>
                      <li>Aménagements en milieu professionnel et scolaire</li>
                      <li>Sensibilisation du grand public</li>
                      <li>Lutte contre les discriminations</li>
                      <li>Représentation positive dans les médias</li>
                    </ul>
                  </Card>
                </div>
                
                <p className="text-muted-foreground mt-4">
                  En France, la stratégie nationale pour l'autisme (2018-2022) a marqué une évolution 
                  significative dans la prise en compte des besoins des personnes autistes, mais beaucoup 
                  reste à faire, notamment en termes d'accès au diagnostic, de formation des professionnels, 
                  et d'inclusion scolaire et professionnelle.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-secondary p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="h-6 w-6 text-neuro-green" />
                  <h3 className="text-xl font-bold">À retenir</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-neuro-green font-bold">•</span>
                    <span className="text-muted-foreground text-sm">L'autisme est une condition neurodéveloppementale, non une maladie</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-neuro-green font-bold">•</span>
                    <span className="text-muted-foreground text-sm">Le cerveau autiste traite l'information différemment, avec forces et difficultés spécifiques</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-neuro-green font-bold">•</span>
                    <span className="text-muted-foreground text-sm">Le diagnostic repose sur l'évaluation pluridisciplinaire de la communication sociale et des comportements</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-neuro-green font-bold">•</span>
                    <span className="text-muted-foreground text-sm">Les particularités sensorielles sont au cœur de l'expérience autistique</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-neuro-green font-bold">•</span>
                    <span className="text-muted-foreground text-sm">Les interventions modernes respectent la neurologie autistique tout en développant les compétences</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-neuro-green font-bold">•</span>
                    <span className="text-muted-foreground text-sm">L'autisme nécessite un accompagnement évolutif tout au long de la vie</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Comorbidités fréquentes</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  L'autisme est souvent associé à d'autres conditions :
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <HeartPulse className="h-5 w-5 text-neuro-green shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">TDAH</span>
                      <p className="text-xs text-muted-foreground">30-50% des personnes autistes présentent aussi un TDAH</p>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <HeartPulse className="h-5 w-5 text-neuro-green shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Anxiété</span>
                      <p className="text-xs text-muted-foreground">Touchant jusqu'à 40% des personnes autistes</p>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <HeartPulse className="h-5 w-5 text-neuro-green shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Troubles du sommeil</span>
                      <p className="text-xs text-muted-foreground">Difficultés d'endormissement, réveils fréquents</p>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <HeartPulse className="h-5 w-5 text-neuro-green shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Épilepsie</span>
                      <p className="text-xs text-muted-foreground">20-30% des personnes autistes, souvent à l'adolescence</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Ressources et soutien</h3>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <GraduationCap className="h-5 w-5 text-neuro-green shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Centres Ressources Autisme (CRA)</span>
                      <p className="text-xs text-muted-foreground">Présents dans chaque région, évaluation, information</p>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <Users className="h-5 w-5 text-neuro-green shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Associations</span>
                      <p className="text-xs text-muted-foreground">Autisme France, Sésame Autisme, CLE Autistes, etc.</p>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <Puzzle className="h-5 w-5 text-neuro-green shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Groupes d'entraide</span>
                      <p className="text-xs text-muted-foreground">Groupes locaux, forums en ligne, réseaux sociaux</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full"
                    onClick={() => {
                      scrollToTop();
                      window.location.href = '/ressources';
                    }}
                  >
                    Explorer toutes les ressources
                  </Button>
                </div>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Explorer d'autres troubles</h3>
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => {
                      scrollToTop();
                      window.location.href = '/troubles/tdah';
                    }}
                  >
                    TDAH
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => {
                      scrollToTop();
                      window.location.href = '/troubles/dys';
                    }}
                  >
                    Troubles DYS
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => {
                      scrollToTop();
                      window.location.href = '/auto-evaluation';
                    }}
                  >
                    Test d'auto-évaluation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>    </div>
  );
};

export default AutismeDetail;
