
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Activity, Brain, Heart, HeartPulse, Lightbulb, Stethoscope, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const LesionsCerebrales = () => {
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
                Troubles <span className="neuro-gradient-text">post-traumatiques cérébraux</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Comprendre les conséquences neurologiques et cognitives des lésions cérébrales
              </p>
            </div>
          </div>
        </div>

        <div className="container py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Qu'est-ce qu'une lésion cérébrale acquise ?</h2>
                <p className="text-muted-foreground mb-4">
                  Une lésion cérébrale acquise désigne un dommage au cerveau survenu après la naissance, 
                  contrairement aux troubles neurodéveloppementaux qui sont présents dès le développement 
                  précoce. Ces lésions peuvent résulter d'un événement traumatique, vasculaire, infectieux 
                  ou toxique, et entraînent des modifications plus ou moins importantes des fonctions cérébrales.
                </p>
                <p className="text-muted-foreground mb-4">
                  Contrairement à des maladies neurodégénératives comme Alzheimer, qui évoluent progressivement, 
                  les lésions cérébrales acquises surviennent généralement de façon soudaine. Elles provoquent 
                  des déficits qui peuvent être temporaires ou permanents, mais offrent souvent un potentiel 
                  de récupération grâce à la plasticité cérébrale.
                </p>
                <p className="text-muted-foreground">
                  Les troubles consécutifs à une lésion cérébrale sont extrêmement variables, tant dans leur nature 
                  que dans leur sévérité, en fonction de la localisation, de l'étendue des lésions et des caractéristiques 
                  individuelles de la personne touchée.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Les principales causes de lésions cérébrales</h2>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <Card className="p-4 border-neuro-blue">
                    <div className="flex items-center gap-2 mb-2">
                      <Activity className="h-5 w-5 text-neuro-blue" />
                      <h3 className="font-semibold text-neuro-blue">Traumatismes crâniens</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Résultent d'un choc direct à la tête (accidents de la route, chutes, sports de contact, violences). 
                      Peuvent entraîner des commotions cérébrales légères ou des traumatismes sévères avec lésions diffuses.
                    </p>
                  </Card>
                  
                  <Card className="p-4 border-neuro-blue">
                    <div className="flex items-center gap-2 mb-2">
                      <Heart className="h-5 w-5 text-neuro-blue" />
                      <h3 className="font-semibold text-neuro-blue">Accidents Vasculaires Cérébraux (AVC)</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Interruption de la circulation sanguine dans le cerveau, soit par un caillot (AVC ischémique) soit 
                      par une hémorragie (AVC hémorragique). Les conséquences dépendent de la zone cérébrale affectée.
                    </p>
                  </Card>
                  
                  <Card className="p-4 border-neuro-blue">
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="h-5 w-5 text-neuro-blue" />
                      <h3 className="font-semibold text-neuro-blue">Anoxie cérébrale</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Privation d'oxygène au cerveau suite à un arrêt cardiaque, une noyade, une intoxication au monoxyde 
                      de carbone, ou une complication chirurgicale. Peut causer des lésions étendues et diffuses.
                    </p>
                  </Card>
                  
                  <Card className="p-4 border-neuro-blue">
                    <div className="flex items-center gap-2 mb-2">
                      <Stethoscope className="h-5 w-5 text-neuro-blue" />
                      <h3 className="font-semibold text-neuro-blue">Infections neurologiques</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Méningites, encéphalites, abcès cérébraux. Ces infections peuvent endommager directement les neurones 
                      ou provoquer une inflammation cérébrale entraînant des déficits variables.
                    </p>
                  </Card>
                  
                  <Card className="p-4 border-neuro-blue">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="h-5 w-5 text-neuro-blue" />
                      <h3 className="font-semibold text-neuro-blue">Tumeurs cérébrales</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Qu'elles soient bénignes ou malignes, les tumeurs peuvent comprimer ou envahir le tissu cérébral. 
                      Les traitements (chirurgie, radiothérapie) peuvent également causer des lésions additionnelles.
                    </p>
                  </Card>
                  
                  <Card className="p-4 border-neuro-blue">
                    <div className="flex items-center gap-2 mb-2">
                      <HeartPulse className="h-5 w-5 text-neuro-blue" />
                      <h3 className="font-semibold text-neuro-blue">Autres causes</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Intoxications (alcool, drogues, métaux lourds), maladies métaboliques, complications médicamenteuses, 
                      électrocution. Ces facteurs peuvent affecter le fonctionnement neuronal de diverses manières.
                    </p>
                  </Card>
                </div>
                
                <p className="text-muted-foreground">
                  L'épidémiologie des lésions cérébrales varie selon les causes: les traumatismes crâniens touchent davantage 
                  les jeunes hommes (accidents, sports), tandis que les AVC concernent principalement les personnes plus âgées 
                  ou présentant des facteurs de risque cardiovasculaires.
                </p>
              </div>

              <Tabs defaultValue="symptoms">
                <TabsList className="grid grid-cols-4 mb-4">
                  <TabsTrigger value="symptoms">Symptômes</TabsTrigger>
                  <TabsTrigger value="diagnosis">Diagnostic</TabsTrigger>
                  <TabsTrigger value="treatment">Rééducation</TabsTrigger>
                  <TabsTrigger value="adaptation">Adaptation</TabsTrigger>
                </TabsList>
                
                <TabsContent value="symptoms" className="space-y-4">
                  <h3 className="text-xl font-semibold">Conséquences et manifestations</h3>
                  <p className="text-muted-foreground mb-4">
                    Les manifestations d'une lésion cérébrale dépendent principalement de la localisation 
                    et de l'étendue des dommages cérébraux. Voici les principaux domaines affectés:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Brain className="h-5 w-5 text-neuro-blue" />
                        <h4 className="font-medium">Troubles cognitifs</h4>
                      </div>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Troubles de la mémoire (antérograde, rétrograde)</li>
                        <li>Difficultés d'attention et de concentration</li>
                        <li>Ralentissement du traitement de l'information</li>
                        <li>Troubles des fonctions exécutives (planification, organisation)</li>
                        <li>Difficultés de raisonnement et de résolution de problèmes</li>
                        <li>Troubles du langage (aphasie, anomie)</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Activity className="h-5 w-5 text-neuro-blue" />
                        <h4 className="font-medium">Troubles moteurs et sensoriels</h4>
                      </div>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Paralysies totales ou partielles (hémiplégie, paraplégie)</li>
                        <li>Troubles de la coordination (ataxie)</li>
                        <li>Tremblements et mouvements anormaux</li>
                        <li>Troubles de l'équilibre</li>
                        <li>Déficits sensoriels (vision, audition, sensibilité)</li>
                        <li>Douleurs neuropathiques</li>
                      </ul>
                    </Card>

                    <Card className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="h-5 w-5 text-neuro-blue" />
                        <h4 className="font-medium">Troubles comportementaux et émotionnels</h4>
                      </div>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Modification de la personnalité</li>
                        <li>Désinhibition ou apathie</li>
                        <li>Irritabilité et agressivité</li>
                        <li>Labilité émotionnelle</li>
                        <li>Anxiété et dépression</li>
                        <li>Syndrome dysexécutif comportemental</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-5 w-5 text-neuro-blue" />
                        <h4 className="font-medium">Troubles neuro-végétatifs</h4>
                      </div>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Troubles du sommeil</li>
                        <li>Fatigue chronique et fatigabilité accrue</li>
                        <li>Troubles de la régulation thermique</li>
                        <li>Troubles sphinctériens</li>
                        <li>Troubles de la déglutition</li>
                        <li>Crises d'épilepsie post-traumatiques</li>
                      </ul>
                    </Card>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg mt-4">
                    <h4 className="font-medium mb-2">Spécificités selon les causes</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-sm font-medium mb-1">AVC:</h5>
                        <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground">
                          <li>Déficits souvent focaux et unilatéraux</li>
                          <li>Hémiplégie controlatérale à la lésion</li>
                          <li>Aphasie si atteinte hémisphère dominant</li>
                          <li>Négligence spatiale unilatérale possible</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-medium mb-1">Traumatisme crânien:</h5>
                        <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground">
                          <li>Lésions souvent diffuses et multiples</li>
                          <li>Syndrome frontal fréquent</li>
                          <li>Troubles attentionnels prédominants</li>
                          <li>Séquelles post-commotionnelles possibles</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-medium mb-1">Anoxie cérébrale:</h5>
                        <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground">
                          <li>Atteinte diffuse et souvent sévère</li>
                          <li>Troubles mnésiques prédominants</li>
                          <li>Séquelles cognitives étendues</li>
                          <li>État végétatif possible dans les cas graves</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-medium mb-1">Encéphalites:</h5>
                        <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground">
                          <li>Troubles psychiatriques fréquents</li>
                          <li>Épilepsie séquellaire possible</li>
                          <li>Déficits cognitifs variables</li>
                          <li>Troubles de la mémoire prédominants</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="diagnosis" className="space-y-4">
                  <h3 className="text-xl font-semibold">Évaluation et diagnostic</h3>
                  <p className="text-muted-foreground mb-4">
                    L'évaluation des lésions cérébrales et de leurs conséquences suit généralement 
                    plusieurs étapes et implique une équipe pluridisciplinaire.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Imagerie cérébrale</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        L'imagerie est essentielle pour localiser et caractériser les lésions:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li><span className="font-medium">Scanner cérébral (TDM)</span>: rapide, détecte les hémorragies, fractures et lésions majeures</li>
                        <li><span className="font-medium">IRM cérébrale</span>: plus précise, visualise mieux les lésions de petite taille et différencie les tissus</li>
                        <li><span className="font-medium">IRM fonctionnelle</span>: évalue l'activité cérébrale lors de tâches spécifiques</li>
                        <li><span className="font-medium">TEP-scan</span>: mesure le métabolisme cérébral et identifie les zones hypofonctionnelles</li>
                        <li><span className="font-medium">Angiographie cérébrale</span>: visualise précisément la vascularisation cérébrale (pour les AVC)</li>
                      </ul>
                    </div>
                    
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Évaluation neuropsychologique</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Permet d'identifier et de quantifier les déficits cognitifs:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Tests standardisés évaluant chaque fonction cognitive (mémoire, attention, langage, etc.)</li>
                        <li>Échelles d'évaluation comportementale et émotionnelle</li>
                        <li>Questionnaires d'autonomie dans la vie quotidienne</li>
                        <li>Évaluation des capacités préservées et des points forts</li>
                        <li>Suivi longitudinal pour mesurer la récupération</li>
                      </ul>
                    </div>
                    
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Autres évaluations spécialisées</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="text-sm font-medium mb-1">Évaluation motrice et sensitive:</h5>
                          <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground">
                            <li>Bilan kinésithérapeutique</li>
                            <li>Bilan ergothérapique</li>
                            <li>Tests de force, d'équilibre et de coordination</li>
                            <li>Évaluation de la sensibilité et de la proprioception</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="text-sm font-medium mb-1">Évaluation du langage et de la communication:</h5>
                          <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground">
                            <li>Bilan orthophonique complet</li>
                            <li>Tests de compréhension et d'expression</li>
                            <li>Évaluation des capacités pragmatiques</li>
                            <li>Évaluation de la lecture et de l'écriture</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="text-sm font-medium mb-1">Évaluation psychologique:</h5>
                          <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground">
                            <li>Échelles d'anxiété et de dépression</li>
                            <li>Évaluation de l'estime de soi</li>
                            <li>Mesure de la qualité de vie</li>
                            <li>Impact sur la dynamique familiale</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="text-sm font-medium mb-1">Évaluation fonctionnelle:</h5>
                          <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground">
                            <li>Mesure de l'indépendance fonctionnelle (MIF)</li>
                            <li>Évaluation des activités de la vie quotidienne</li>
                            <li>Capacité à retourner au travail/études</li>
                            <li>Évaluation de la conduite automobile</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Parcours d'évaluation</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Le processus d'évaluation suit généralement ce déroulement:
                      </p>
                      <ol className="list-decimal pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Évaluation d'urgence et stabilisation médicale</li>
                        <li>Imagerie pour déterminer l'étendue des lésions</li>
                        <li>Évaluation en phase aiguë des déficits majeurs</li>
                        <li>Bilans spécialisés plus complets en phase subaiguë</li>
                        <li>Évaluations régulières pour suivre l'évolution</li>
                        <li>Évaluation des capacités de réinsertion socioprofessionnelle</li>
                      </ol>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="treatment" className="space-y-4">
                  <h3 className="text-xl font-semibold">Rééducation et récupération</h3>
                  <p className="text-muted-foreground mb-4">
                    La rééducation après une lésion cérébrale vise à optimiser la récupération fonctionnelle 
                    en s'appuyant sur les mécanismes de plasticité cérébrale et à développer des stratégies 
                    compensatoires.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <Card className="p-4">
                      <h4 className="font-medium mb-2">Principes de neuroplasticité</h4>
                      <p className="text-sm text-muted-foreground">
                        La récupération s'appuie sur plusieurs mécanismes:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>Réorganisation des circuits neuronaux</li>
                        <li>Recrutement de zones cérébrales alternatives</li>
                        <li>Régénération limitée des connexions neuronales</li>
                        <li>Restauration des fonctions biochimiques perturbées</li>
                        <li>Compensation par utilisation de stratégies alternatives</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4">
                      <h4 className="font-medium mb-2">Facteurs influençant la récupération</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Étendue et localisation des lésions</li>
                        <li>Âge (meilleure plasticité chez les plus jeunes)</li>
                        <li>Précocité de la prise en charge</li>
                        <li>Intensité de la rééducation</li>
                        <li>Motivation et soutien familial</li>
                        <li>Comorbidités et état de santé général</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4">
                      <h4 className="font-medium mb-2">Rééducation motrice</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li><span className="font-medium">Kinésithérapie</span>: récupération des capacités motrices et de l'équilibre</li>
                        <li><span className="font-medium">Thérapie par contrainte induite</span>: stimulation forcée du membre atteint</li>
                        <li><span className="font-medium">Rééducation robotisée</span>: assistance mécanique aux mouvements</li>
                        <li><span className="font-medium">Balnéothérapie</span>: rééducation en milieu aquatique</li>
                        <li><span className="font-medium">Réalité virtuelle</span>: exercices immersifs et motivants</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4">
                      <h4 className="font-medium mb-2">Rééducation cognitive</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li><span className="font-medium">Remédiation cognitive</span>: exercices ciblant les fonctions déficitaires</li>
                        <li><span className="font-medium">Thérapie de l'attention</span>: techniques de focalisation et de maintien attentionnel</li>
                        <li><span className="font-medium">Entraînement de la mémoire</span>: techniques mnémotechniques, organisation</li>
                        <li><span className="font-medium">Rééducation des fonctions exécutives</span>: planification, résolution de problèmes</li>
                        <li><span className="font-medium">Thérapie assistée par ordinateur</span>: logiciels de stimulation cognitive</li>
                      </ul>
                    </Card>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <Card className="p-4">
                      <h4 className="font-medium mb-2">Rééducation du langage</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li><span className="font-medium">Orthophonie intensive</span>: ciblée sur les déficits spécifiques</li>
                        <li><span className="font-medium">Thérapie contrainte du langage</span>: stimulation intensive de la production</li>
                        <li><span className="font-medium">Communication alternative</span>: pictogrammes, synthèses vocales</li>
                        <li><span className="font-medium">Thérapie mélodique</span>: utilisation de la musique pour faciliter le langage</li>
                        <li><span className="font-medium">Groupes de communication</span>: pratique en contexte social</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4">
                      <h4 className="font-medium mb-2">Réadaptation fonctionnelle</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li><span className="font-medium">Ergothérapie</span>: autonomie dans les activités quotidiennes</li>
                        <li><span className="font-medium">Réadaptation à l'effort</span>: amélioration de l'endurance</li>
                        <li><span className="font-medium">Équithérapie, art-thérapie</span>: approches complémentaires</li>
                        <li><span className="font-medium">Rééducation de la déglutition</span>: prévention des fausses routes</li>
                        <li><span className="font-medium">Réadaptation professionnelle</span>: retour au travail adapté</li>
                      </ul>
                    </Card>
                  </div>
                  
                  <div className="bg-secondary p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Parcours de soins</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      La rééducation s'organise généralement en plusieurs phases:
                    </p>
                    <ol className="list-decimal pl-5 space-y-1 text-sm text-muted-foreground">
                      <li><span className="font-medium">Phase aiguë</span> (hôpital): stabilisation médicale, prévention des complications</li>
                      <li><span className="font-medium">Phase subaiguë</span> (centre de rééducation): rééducation intensive pluridisciplinaire</li>
                      <li><span className="font-medium">Phase chronique</span> (ambulatoire): consolidation des acquis, adaptation à long terme</li>
                      <li><span className="font-medium">Réinsertion</span>: retour progressif aux activités sociales et professionnelles</li>
                      <li><span className="font-medium">Suivi au long cours</span>: maintien des acquis, adaptation aux nouveaux défis</li>
                    </ol>
                  </div>
                </TabsContent>
                
                <TabsContent value="adaptation" className="space-y-4">
                  <h3 className="text-xl font-semibold">Vivre avec les séquelles</h3>
                  <p className="text-muted-foreground mb-4">
                    L'adaptation à la vie avec des séquelles de lésion cérébrale est un processus complexe 
                    qui implique la personne concernée, son entourage et des aménagements multiples.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <Card className="p-4">
                      <h4 className="font-medium mb-2">Adaptations du domicile</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Accessibilité pour les handicaps moteurs (rampes, élargissement des portes)</li>
                        <li>Aménagements de salle de bain et cuisine adaptés</li>
                        <li>Systèmes domotiques de contrôle de l'environnement</li>
                        <li>Outils de compensation cognitive (agendas muraux, rappels)</li>
                        <li>Organisation logique et constante des espaces</li>
                        <li>Systèmes d'alerte et de sécurité</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4">
                      <h4 className="font-medium mb-2">Aides techniques et technologiques</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Aides à la mobilité (fauteuil roulant, déambulateur)</li>
                        <li>Applications smartphone de compensation cognitive</li>
                        <li>Outils de communication alternative</li>
                        <li>Logiciels de reconnaissance vocale</li>
                        <li>Systèmes d'alertes et de rappels</li>
                        <li>Objets connectés de surveillance</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4">
                      <h4 className="font-medium mb-2">Réinsertion sociale et professionnelle</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Reconnaissance du statut de travailleur handicapé</li>
                        <li>Aménagements du poste de travail</li>
                        <li>Réorientation professionnelle si nécessaire</li>
                        <li>Travail à temps partiel thérapeutique</li>
                        <li>Activités sociales adaptées</li>
                        <li>Groupes de pair-aidance et d'entraide</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4">
                      <h4 className="font-medium mb-2">Soutien psychologique et social</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Psychothérapie individuelle</li>
                        <li>Groupes de parole et d'entraide</li>
                        <li>Thérapie familiale</li>
                        <li>Associations de patients et de familles</li>
                        <li>Services d'accompagnement médico-social</li>
                        <li>Activités de loisirs adaptées</li>
                      </ul>
                    </Card>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Accompagnement des proches</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Les proches jouent un rôle essentiel mais peuvent aussi être affectés:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Information et formation sur les séquelles cognitives et comportementales</li>
                      <li>Groupes de soutien pour les aidants</li>
                      <li>Services de répit (accueil temporaire, aide à domicile)</li>
                      <li>Guidance dans la gestion des comportements problématiques</li>
                      <li>Adaptation de la communication familiale</li>
                      <li>Accompagnement dans les démarches administratives et sociales</li>
                    </ul>
                    
                    <div className="mt-4 p-3 bg-secondary rounded-lg">
                      <h5 className="text-sm font-medium mb-1">Témoignage d'un conjoint:</h5>
                      <blockquote className="italic text-xs text-muted-foreground">
                        "Après l'AVC de Marie, j'ai dû apprendre à connaître une nouvelle personne. Son caractère a changé, 
                        elle peut passer du rire aux larmes en quelques secondes. Les professionnels m'ont aidé à comprendre 
                        que ce n'était pas de sa faute, mais une conséquence de sa lésion cérébrale. Les groupes de parole 
                        pour proches m'ont énormément soutenu - savoir que d'autres traversent les mêmes épreuves m'a aidé 
                        à tenir bon et à trouver de nouvelles façons de communiquer avec elle."
                      </blockquote>
                      <p className="text-xxs text-muted-foreground mt-2 italic">
                        Note: Ce témoignage est fictif, créé à des fins pédagogiques.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Aspects administratifs et juridiques</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-sm font-medium mb-1">Droits et prestations:</h5>
                        <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground">
                          <li>Allocation Adulte Handicapé (AAH)</li>
                          <li>Prestation de Compensation du Handicap (PCH)</li>
                          <li>Carte Mobilité Inclusion</li>
                          <li>Reconnaissance de la Qualité de Travailleur Handicapé</li>
                          <li>Indemnisation (accident, faute médicale)</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-medium mb-1">Protection juridique si nécessaire:</h5>
                        <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground">
                          <li>Sauvegarde de justice (temporaire)</li>
                          <li>Curatelle (assistance)</li>
                          <li>Tutelle (représentation)</li>
                          <li>Habilitation familiale</li>
                          <li>Mandat de protection future</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">Recherche et innovations</h2>
                <p className="text-muted-foreground mb-4">
                  La recherche dans le domaine des lésions cérébrales est très active et offre des perspectives prometteuses:
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <Card className="p-4">
                    <h4 className="font-medium mb-2">Avancées thérapeutiques</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Stimulation cérébrale (tDCS, TMS) pour faciliter la récupération</li>
                      <li>Thérapies cellulaires et médecine régénérative</li>
                      <li>Neuroprotection en phase aiguë</li>
                      <li>Médicaments ciblant la neuroplasticité</li>
                      <li>Interfaces cerveau-machine pour la récupération motrice</li>
                    </ul>
                  </Card>
                  
                  <Card className="p-4">
                    <h4 className="font-medium mb-2">Technologies innovantes</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Exosquelettes et dispositifs robotiques d'assistance</li>
                      <li>Réalité virtuelle et augmentée en rééducation</li>
                      <li>Applications de télé-rééducation</li>
                      <li>Intelligence artificielle pour prédire la récupération</li>
                      <li>Systèmes de neurofeedback</li>
                    </ul>
                  </Card>
                </div>
                
                <p className="text-muted-foreground mt-4">
                  Pour en savoir plus sur les recherches en cours, consultez notre page 
                  <a href="/recherche" className="text-neuro-blue hover:underline ml-1">Actualités de la recherche</a>.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-secondary p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <Brain className="h-6 w-6 text-neuro-blue" />
                  <h3 className="text-xl font-bold">À retenir</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-neuro-blue font-bold">•</span>
                    <span className="text-muted-foreground text-sm">Les lésions cérébrales acquises peuvent avoir diverses causes: traumatismes, AVC, anoxie...</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-neuro-blue font-bold">•</span>
                    <span className="text-muted-foreground text-sm">Les séquelles dépendent de la localisation et de l'étendue des lésions</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-neuro-blue font-bold">•</span>
                    <span className="text-muted-foreground text-sm">La plasticité cérébrale permet une récupération variable selon plusieurs facteurs</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-neuro-blue font-bold">•</span>
                    <span className="text-muted-foreground text-sm">La rééducation pluridisciplinaire et précoce améliore le pronostic</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-neuro-blue font-bold">•</span>
                    <span className="text-muted-foreground text-sm">Les troubles cognitifs et comportementaux sont souvent plus handicapants que les déficits moteurs</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-neuro-blue font-bold">•</span>
                    <span className="text-muted-foreground text-sm">L'accompagnement des proches est essentiel dans le processus d'adaptation</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Chiffres clés</h3>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <Activity className="h-5 w-5 text-neuro-blue shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">150 000 AVC</span>
                      <p className="text-xs text-muted-foreground">par an en France, première cause de handicap acquis</p>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <Activity className="h-5 w-5 text-neuro-blue shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">150 à 200 000 traumatismes crâniens</span>
                      <p className="text-xs text-muted-foreground">dont 10 à 20% de cas sévères</p>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <Activity className="h-5 w-5 text-neuro-blue shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">500 000 personnes</span>
                      <p className="text-xs text-muted-foreground">vivent avec des séquelles de lésions cérébrales</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Ressources utiles</h3>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <Users className="h-5 w-5 text-neuro-blue shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Associations de patients</span>
                      <p className="text-xs text-muted-foreground">UNAFTC, France AVC, AFTC régionales</p>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <Users className="h-5 w-5 text-neuro-blue shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Structures spécialisées</span>
                      <p className="text-xs text-muted-foreground">UEROS, FAM, MAS, GEM, SAMSAH</p>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <Users className="h-5 w-5 text-neuro-blue shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Information en ligne</span>
                      <p className="text-xs text-muted-foreground">Sites des CHU, Inserm, France AVC</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full"
                    asChild
                    onClick={scrollToTop}
                  >
                    <Link to="/ressources">
                      Voir toutes les ressources
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Explorer d'autres troubles</h3>
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    asChild
                    onClick={scrollToTop}
                  >
                    <Link to="/troubles/neurodegeneratifs">
                      Maladies neurodégénératives
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    asChild
                    onClick={scrollToTop}
                  >
                    <Link to="/cerveau">
                      Le cerveau et son fonctionnement
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>    </div>
  );
};

export default LesionsCerebrales;
