
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const BrainDevelopment = () => {
  const [activeTab, setActiveTab] = useState('prenatal');
  const location = useLocation();
  
  // Vérifier si un sous-onglet spécifique a été demandé via la navigation
  useEffect(() => {
    if (location.state && location.state.activeSubTab) {
      setActiveTab(location.state.activeSubTab);
    }
  }, [location.state]);
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Développement et Plasticité du Cerveau</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="prenatal">Développement prénatal</TabsTrigger>
                <TabsTrigger value="childhood">Enfance et adolescence</TabsTrigger>
                <TabsTrigger value="adult">Cerveau adulte</TabsTrigger>
                <TabsTrigger value="plasticity">Neuroplasticité</TabsTrigger>
              </TabsList>
              
              <TabsContent value="prenatal" className="pt-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Développement prénatal du cerveau</h3>
                  <p className="text-muted-foreground">
                    Le développement du cerveau commence dès les premières semaines de la grossesse et suit une séquence 
                    précise d'événements qui jettent les bases de toutes les structures et fonctions cérébrales.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="space-y-4">
                      <h4 className="font-medium">Périodes critiques du développement</h4>
                      <div className="space-y-3">
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h5 className="text-sm font-medium mb-1">3-4 semaines</h5>
                          <p className="text-xs text-muted-foreground">
                            Formation du tube neural, qui donnera naissance au système nerveux central. C'est à ce stade que 
                            des anomalies comme le spina bifida peuvent apparaître.
                          </p>
                        </div>
                        
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h5 className="text-sm font-medium mb-1">8-16 semaines</h5>
                          <p className="text-xs text-muted-foreground">
                            Développement des principales divisions cérébrales, formation des vésicules cérébrales qui 
                            deviendront le télencéphale, le diencéphale, le mésencéphale et le rhombencéphale.
                          </p>
                        </div>
                        
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h5 className="text-sm font-medium mb-1">16-30 semaines</h5>
                          <p className="text-xs text-muted-foreground">
                            Prolifération neuronale intense suivie de la migration cellulaire. Les neurones se multiplient 
                            à un rythme de plusieurs centaines de milliers par minute puis migrent vers leur emplacement final.
                          </p>
                        </div>
                        
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h5 className="text-sm font-medium mb-1">Dernier trimestre</h5>
                          <p className="text-xs text-muted-foreground">
                            Développement des sillons et circonvolutions, myélinisation précoce, établissement des premières 
                            connexions synaptiques. Le cerveau commence à ressembler à sa forme finale.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-medium">Processus fondamentaux</h4>
                      <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                        <div>
                          <h5 className="text-sm font-medium mb-1">Prolifération neuronale</h5>
                          <p className="text-xs text-muted-foreground">
                            Les cellules souches neurales se divisent pour former des milliards de neurones et de cellules gliales.
                          </p>
                        </div>
                        
                        <div>
                          <h5 className="text-sm font-medium mb-1">Migration cellulaire</h5>
                          <p className="text-xs text-muted-foreground">
                            Les neurones nouvellement formés migrent vers leur destination finale, guidés par des molécules 
                            spécifiques et des cellules gliales.
                          </p>
                        </div>
                        
                        <div>
                          <h5 className="text-sm font-medium mb-1">Différenciation</h5>
                          <p className="text-xs text-muted-foreground">
                            Les neurones se spécialisent en différents types selon leur localisation et les signaux moléculaires reçus.
                          </p>
                        </div>
                        
                        <div>
                          <h5 className="text-sm font-medium mb-1">Synaptogenèse</h5>
                          <p className="text-xs text-muted-foreground">
                            Formation des connexions (synapses) entre neurones, initialement en excès puis suivie d'un élagage.
                          </p>
                        </div>
                        
                        <div>
                          <h5 className="text-sm font-medium mb-1">Apoptose</h5>
                          <p className="text-xs text-muted-foreground">
                            Mort cellulaire programmée qui élimine jusqu'à 50% des neurones produits, un processus normal 
                            et nécessaire pour affiner les circuits cérébraux.
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h5 className="text-sm font-medium mb-1">Facteurs influençant le développement prénatal</h5>
                        <ul className="list-disc pl-5 text-xs text-muted-foreground">
                          <li>Nutrition maternelle</li>
                          <li>Exposition à des toxines (alcool, tabac, drogues)</li>
                          <li>Infections (rubéole, cytomégalovirus, etc.)</li>
                          <li>Stress maternel</li>
                          <li>Facteurs génétiques</li>
                          <li>Hormones thyroïdiennes et autres hormones</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="childhood" className="pt-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Développement pendant l'enfance et l'adolescence</h3>
                  <p className="text-muted-foreground">
                    Après la naissance, le cerveau continue de se développer à un rythme impressionnant, formant des trillions de 
                    connexions et se remodelant en fonction des expériences vécues.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="space-y-3">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Petite enfance (0-3 ans)</h4>
                        <p className="text-sm text-muted-foreground">
                          Période de croissance cérébrale explosive où le cerveau atteint environ 80% de sa taille adulte vers l'âge de 2 ans.
                        </p>
                        <ul className="list-disc pl-5 text-xs text-muted-foreground mt-2">
                          <li>Production massive de synapses (jusqu'à 1 million de nouvelles connexions par seconde)</li>
                          <li>Développement rapide des aires sensorielles et motrices</li>
                          <li>Début du développement du langage</li>
                          <li>Périodes critiques pour la vision et l'audition</li>
                          <li>Grande sensibilité aux stimulations environnementales</li>
                        </ul>
                      </div>
                      
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Enfance (3-12 ans)</h4>
                        <p className="text-sm text-muted-foreground">
                          Période de maturation et d'affinement des circuits cérébraux, avec une importante réorganisation.
                        </p>
                        <ul className="list-disc pl-5 text-xs text-muted-foreground mt-2">
                          <li>Élagage synaptique intense (élimination des connexions peu utilisées)</li>
                          <li>Poursuite de la myélinisation des fibres nerveuses</li>
                          <li>Développement progressif des lobes frontaux</li>
                          <li>Latéralisation hémisphérique (spécialisation des hémisphères)</li>
                          <li>Amélioration des capacités d'attention et de la mémoire de travail</li>
                          <li>Développement des compétences sociales et émotionnelles</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Adolescence (12-20 ans)</h4>
                        <p className="text-sm text-muted-foreground">
                          Seconde vague majeure de réorganisation cérébrale, marquée par une maturation du cortex préfrontal.
                        </p>
                        <ul className="list-disc pl-5 text-xs text-muted-foreground mt-2">
                          <li>Élagage synaptique sélectif et intensif</li>
                          <li>Maturation différentielle: les zones limbiques (émotions) se développent avant le cortex préfrontal (contrôle)</li>
                          <li>Raffinement des circuits de récompense et motivation</li>
                          <li>Amélioration progressive des fonctions exécutives</li>
                          <li>Influence importante des hormones sur le développement cérébral</li>
                          <li>Plus grande sensibilité aux récompenses et prises de risque</li>
                        </ul>
                      </div>
                      
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Facteurs influençant le développement</h4>
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <h5 className="text-xs font-medium mb-1">Facteurs positifs</h5>
                            <ul className="list-disc pl-5 text-xs text-muted-foreground">
                              <li>Nutrition équilibrée</li>
                              <li>Sommeil de qualité</li>
                              <li>Stimulation cognitive</li>
                              <li>Interaction sociale positive</li>
                              <li>Activité physique régulière</li>
                              <li>Attachement sécurisant</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="text-xs font-medium mb-1">Facteurs négatifs</h5>
                            <ul className="list-disc pl-5 text-xs text-muted-foreground">
                              <li>Malnutrition</li>
                              <li>Stress chronique</li>
                              <li>Traumatismes</li>
                              <li>Manque de stimulation</li>
                              <li>Toxines environnementales</li>
                              <li>Certaines infections</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Périodes sensibles</h4>
                        <p className="text-xs text-muted-foreground">
                          Fenêtres temporelles pendant lesquelles le cerveau est particulièrement sensible à certains types d'expériences:
                        </p>
                        <ul className="list-disc pl-5 text-xs text-muted-foreground mt-1">
                          <li>Vision binoculaire: premières années de vie</li>
                          <li>Acquisition du langage: 0-7 ans (optimale avant 3 ans)</li>
                          <li>Contrôle émotionnel: développement précoce</li>
                          <li>Développement musical: avant 9 ans</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="adult" className="pt-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Le cerveau adulte</h3>
                  <p className="text-muted-foreground">
                    Contrairement aux idées reçues, le cerveau adulte n'est pas figé mais continue d'évoluer tout au long de la vie, 
                    avec des changements structurels et fonctionnels.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="space-y-3">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Jeune adulte (20-35 ans)</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Période où le cerveau atteint sa maturité structurelle complète.
                        </p>
                        <ul className="list-disc pl-5 text-xs text-muted-foreground">
                          <li>Achèvement de la myélinisation du cortex préfrontal (vers 25 ans)</li>
                          <li>Optimisation des fonctions exécutives</li>
                          <li>Équilibre entre systèmes émotionnels et cognitifs</li>
                          <li>Pic de performance cognitive pour plusieurs fonctions</li>
                          <li>Grande capacité d'apprentissage et d'adaptation</li>
                        </ul>
                      </div>
                      
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Adulte d'âge moyen (35-60 ans)</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Phase de stabilité relative avec des changements subtils et progressifs.
                        </p>
                        <ul className="list-disc pl-5 text-xs text-muted-foreground">
                          <li>Légère réduction du volume cérébral (0,2% par an)</li>
                          <li>Diminution graduelle de certains neurotransmetteurs (dopamine)</li>
                          <li>Ralentissement modéré de la vitesse de traitement</li>
                          <li>Maintien ou amélioration des connaissances "cristallisées"</li>
                          <li>Compensation cognitive par l'expérience et l'expertise</li>
                          <li>Amélioration possible de la régulation émotionnelle</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Cerveau âgé (60+ ans)</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Période de changements plus prononcés mais très variables selon les individus.
                        </p>
                        <ul className="list-disc pl-5 text-xs text-muted-foreground">
                          <li>Atrophie cérébrale plus marquée (surtout frontal et hippocampe)</li>
                          <li>Réduction du débit sanguin cérébral</li>
                          <li>Diminution de la plasticité synaptique</li>
                          <li>Ralentissement du traitement de l'information</li>
                          <li>Vulnérabilité accrue au stress oxydatif</li>
                          <li>Recrutement bilatéral compensatoire (HAROLD)</li>
                          <li>Maintien des connaissances générales et du vocabulaire</li>
                          <li>Grande variabilité interindividuelle</li>
                        </ul>
                      </div>
                      
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Facteurs influençant le vieillissement cérébral</h4>
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <h5 className="text-xs font-medium mb-1">Facteurs protecteurs</h5>
                            <ul className="list-disc pl-5 text-xs text-muted-foreground">
                              <li>Activité physique régulière</li>
                              <li>Stimulation intellectuelle</li>
                              <li>Engagement social</li>
                              <li>Alimentation méditerranéenne</li>
                              <li>Sommeil de qualité</li>
                              <li>Gestion du stress</li>
                              <li>Réserve cognitive</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="text-xs font-medium mb-1">Facteurs de risque</h5>
                            <ul className="list-disc pl-5 text-xs text-muted-foreground">
                              <li>Hypertension</li>
                              <li>Diabète</li>
                              <li>Obésité</li>
                              <li>Tabagisme</li>
                              <li>Inflammation chronique</li>
                              <li>Isolement social</li>
                              <li>Dépression</li>
                              <li>Certains facteurs génétiques</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Concept de réserve cognitive</h4>
                    <p className="text-sm text-muted-foreground">
                      La réserve cognitive représente la capacité du cerveau à maintenir un fonctionnement optimal malgré des 
                      lésions ou le vieillissement. Elle explique pourquoi certaines personnes peuvent présenter des pathologies 
                      cérébrales importantes sans symptômes cliniques correspondants.
                    </p>
                    <div className="mt-2">
                      <h5 className="text-xs font-medium mb-1">Facteurs contribuant à la réserve cognitive:</h5>
                      <ul className="list-disc pl-5 text-xs text-muted-foreground">
                        <li>Niveau d'éducation élevé</li>
                        <li>Occupation professionnelle stimulante</li>
                        <li>Activités intellectuelles tout au long de la vie</li>
                        <li>Bilinguisme ou multilinguisme</li>
                        <li>Réseau social riche</li>
                        <li>Activités de loisir stimulantes</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="plasticity" className="pt-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Neuroplasticité</h3>
                  <p className="text-muted-foreground">
                    La neuroplasticité est la capacité du cerveau à se réorganiser en formant de nouvelles connexions 
                    neuronales tout au long de la vie. Cette propriété est fondamentale pour l'apprentissage, 
                    la mémoire et la récupération après lésion.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="space-y-3">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Types de neuroplasticité</h4>
                        <div className="space-y-2">
                          <div>
                            <h5 className="text-sm font-medium mb-1">Plasticité structurelle</h5>
                            <p className="text-xs text-muted-foreground">
                              Changements physiques dans le cerveau, comme la formation de nouvelles synapses, 
                              la croissance dendritique ou la neurogénèse.
                            </p>
                          </div>
                          
                          <div>
                            <h5 className="text-sm font-medium mb-1">Plasticité fonctionnelle</h5>
                            <p className="text-xs text-muted-foreground">
                              Capacité du cerveau à déplacer des fonctions d'une région à une autre, 
                              particulièrement après une lésion.
                            </p>
                          </div>
                          
                          <div>
                            <h5 className="text-sm font-medium mb-1">Plasticité synaptique</h5>
                            <p className="text-xs text-muted-foreground">
                              Renforcement ou affaiblissement des connexions synaptiques existantes (LTP/LTD).
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Mécanismes de la neuroplasticité</h4>
                        <ul className="list-disc pl-5 text-xs text-muted-foreground">
                          <li>
                            <span className="font-medium">Potentialisation à long terme (LTP):</span> Renforcement durable des synapses impliquant les récepteurs NMDA et AMPA
                          </li>
                          <li>
                            <span className="font-medium">Dépression à long terme (LTD):</span> Affaiblissement des connexions synaptiques peu utilisées
                          </li>
                          <li>
                            <span className="font-medium">Bourgeonnement axonal:</span> Croissance de nouvelles terminaisons nerveuses
                          </li>
                          <li>
                            <span className="font-medium">Démasquage synaptique:</span> Révélation de connexions préexistantes mais inactives
                          </li>
                          <li>
                            <span className="font-medium">Neurogénèse adulte:</span> Formation de nouveaux neurones, principalement dans l'hippocampe
                          </li>
                          <li>
                            <span className="font-medium">Remodelage dendritique:</span> Modifications des arborisations dendritiques
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Facteurs influençant la neuroplasticité</h4>
                        <ul className="list-disc pl-5 text-xs text-muted-foreground">
                          <li>Âge (diminue avec l'âge mais reste présente)</li>
                          <li>Activité physique (augmente les facteurs neurotrophiques comme le BDNF)</li>
                          <li>Stimulation cognitive et apprentissage</li>
                          <li>Sommeil (consolidation des changements plastiques)</li>
                          <li>Stress (le stress chronique réduit la plasticité)</li>
                          <li>Alimentation (oméga-3, antioxydants)</li>
                          <li>Facteurs neurotrophiques (BDNF, NGF, etc.)</li>
                          <li>Neurotransmetteurs (dopamine, acétylcholine, etc.)</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Applications cliniques de la neuroplasticité</h4>
                        <div className="space-y-2">
                          <div>
                            <h5 className="text-sm font-medium mb-1">Récupération post-AVC</h5>
                            <p className="text-xs text-muted-foreground">
                              Réorganisation corticale permettant aux régions adjacentes ou controlatérales de prendre en charge 
                              les fonctions des zones lésées. Thérapies basées sur la contrainte induite, stimulation répétitive.
                            </p>
                          </div>
                          
                          <div>
                            <h5 className="text-sm font-medium mb-1">Rééducation après lésion cérébrale traumatique</h5>
                            <p className="text-xs text-muted-foreground">
                              Protocoles intensifs et précoces favorisant la réorganisation corticale et la compensation fonctionnelle.
                            </p>
                          </div>
                          
                          <div>
                            <h5 className="text-sm font-medium mb-1">Traitement des troubles d'apprentissage</h5>
                            <p className="text-xs text-muted-foreground">
                              Interventions ciblées pour renforcer les circuits neuronaux déficients et développer des voies alternatives.
                            </p>
                          </div>
                          
                          <div>
                            <h5 className="text-sm font-medium mb-1">Récupération sensorielle</h5>
                            <p className="text-xs text-muted-foreground">
                              Réadaptation après perte auditive ou visuelle, implants cochléaires, thérapies de substitution sensorielle.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Exemples remarquables de neuroplasticité</h4>
                        <ul className="list-disc pl-5 text-xs text-muted-foreground">
                          <li>
                            <span className="font-medium">Réorganisation chez les aveugles:</span> Utilisation du cortex visuel pour le traitement tactile et auditif
                          </li>
                          <li>
                            <span className="font-medium">Plasticité chez les musiciens:</span> Expansion des régions cérébrales dédiées au traitement auditif et moteur fin
                          </li>
                          <li>
                            <span className="font-medium">Récupération après hémisphérectomie:</span> L'hémisphère restant peut prendre en charge de nombreuses fonctions de l'hémisphère manquant
                          </li>
                          <li>
                            <span className="font-medium">Réorganisation après amputation:</span> Représentation corticale des parties du corps adjacentes qui "envahissent" la zone dédiée au membre amputé
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Limites de la neuroplasticité</h4>
                        <p className="text-xs text-muted-foreground mb-2">
                          Malgré son potentiel, la neuroplasticité a des limites qu'il est important de reconnaître:
                        </p>
                        <ul className="list-disc pl-5 text-xs text-muted-foreground">
                          <li>Diminution avec l'âge (mais jamais complètement absente)</li>
                          <li>Variabilité inter-individuelle importante</li>
                          <li>Dépendance à l'étendue et la localisation des lésions</li>
                          <li>Fenêtres temporelles optimales pour la récupération</li>
                          <li>Plasticité maladaptative possible (douleur chronique, dystonie)</li>
                          <li>Récupération souvent incomplète après lésions massives</li>
                        </ul>
                      </div>
                      
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Perspectives futures</h4>
                        <p className="text-xs text-muted-foreground">
                          Les recherches actuelles explorent plusieurs voies pour amplifier la neuroplasticité naturelle:
                        </p>
                        <ul className="list-disc pl-5 text-xs text-muted-foreground">
                          <li>Stimulation cérébrale non-invasive (tDCS, TMS)</li>
                          <li>Thérapies pharmacologiques ciblant les mécanismes moléculaires de la plasticité</li>
                          <li>Interfaces cerveau-machine pour faciliter la réorganisation neuronale</li>
                          <li>Thérapies combinées (rééducation + stimulation + pharmacothérapie)</li>
                          <li>Transplantation de cellules souches neurales</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default BrainDevelopment;
