
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';

const BrainStructures = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Structures du Cerveau</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="cortex">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="cortex">Cortex</TabsTrigger>
                <TabsTrigger value="subcortical">Structures sous-corticales</TabsTrigger>
                <TabsTrigger value="cerebellum">Cervelet</TabsTrigger>
                <TabsTrigger value="brainstem">Tronc cérébral</TabsTrigger>
              </TabsList>
              
              <TabsContent value="cortex" className="pt-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Cortex cérébral</h3>
                  <p className="text-muted-foreground">
                    Le cortex cérébral est la couche externe du cerveau, composée de matière grise. Il est divisé en quatre lobes principaux, chacun spécialisé dans différentes fonctions.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Lobe frontal</h4>
                      <p className="text-sm text-muted-foreground">
                        Situé à l'avant du cerveau, c'est le plus grand des lobes. Il est impliqué dans les fonctions exécutives, la personnalité, le comportement et le langage expressif.
                      </p>
                      <div className="mt-2">
                        <h5 className="text-xs font-medium">Zones importantes:</h5>
                        <ul className="list-disc pl-5 text-xs text-muted-foreground mt-1">
                          <li>Cortex préfrontal</li>
                          <li>Aire de Broca (langage expressif)</li>
                          <li>Cortex moteur primaire</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Lobe pariétal</h4>
                      <p className="text-sm text-muted-foreground">
                        Situé au milieu-haut du cerveau, il traite les informations sensorielles du corps et aide à la perception spatiale.
                      </p>
                      <div className="mt-2">
                        <h5 className="text-xs font-medium">Zones importantes:</h5>
                        <ul className="list-disc pl-5 text-xs text-muted-foreground mt-1">
                          <li>Cortex somatosensoriel primaire</li>
                          <li>Lobule pariétal supérieur et inférieur</li>
                          <li>Gyrus angulaire et supramarginal</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Lobe temporal</h4>
                      <p className="text-sm text-muted-foreground">
                        Situé sur les côtés du cerveau, il est impliqué dans l'audition, la compréhension du langage et la mémoire.
                      </p>
                      <div className="mt-2">
                        <h5 className="text-xs font-medium">Zones importantes:</h5>
                        <ul className="list-disc pl-5 text-xs text-muted-foreground mt-1">
                          <li>Cortex auditif primaire</li>
                          <li>Aire de Wernicke (compréhension du langage)</li>
                          <li>Gyrus temporal inférieur (reconnaissance visuelle)</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Lobe occipital</h4>
                      <p className="text-sm text-muted-foreground">
                        Situé à l'arrière du cerveau, il est dédié au traitement des informations visuelles.
                      </p>
                      <div className="mt-2">
                        <h5 className="text-xs font-medium">Zones importantes:</h5>
                        <ul className="list-disc pl-5 text-xs text-muted-foreground mt-1">
                          <li>Cortex visuel primaire (V1)</li>
                          <li>Aires visuelles associatives (V2-V5)</li>
                          <li>Voie ventrale et voie dorsale</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-medium mb-2">Organisation corticale</h4>
                    <p className="text-sm text-muted-foreground">
                      Le cortex cérébral est organisé en six couches cellulaires (I à VI) et contient environ 16 milliards de neurones. Il présente des plis (gyrus) et des sillons qui augmentent sa surface. Les différentes régions corticales sont interconnectées par des faisceaux de substance blanche, permettant une communication efficace.
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="subcortical" className="pt-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Structures sous-corticales</h3>
                  <p className="text-muted-foreground">
                    Ces structures sont situées sous le cortex et jouent des rôles essentiels dans la régulation des mouvements, des émotions, de la mémoire et des fonctions autonomes.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Ganglions de la base</h4>
                      <p className="text-sm text-muted-foreground">
                        Ensemble de noyaux impliqués dans le contrôle moteur, l'apprentissage procédural et les comportements habituels.
                      </p>
                      <div className="mt-2">
                        <h5 className="text-xs font-medium">Structures:</h5>
                        <ul className="list-disc pl-5 text-xs text-muted-foreground mt-1">
                          <li>Striatum (noyau caudé et putamen)</li>
                          <li>Globus pallidus</li>
                          <li>Substance noire</li>
                          <li>Noyau sous-thalamique</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Thalamus</h4>
                      <p className="text-sm text-muted-foreground">
                        Centre de relais majeur qui filtre et transmet presque toutes les informations sensorielles vers le cortex.
                      </p>
                      <div className="mt-2">
                        <h5 className="text-xs font-medium">Fonctions:</h5>
                        <ul className="list-disc pl-5 text-xs text-muted-foreground mt-1">
                          <li>Relais sensoriel (sauf olfactif)</li>
                          <li>Régulation de la conscience</li>
                          <li>Coordination motrice</li>
                          <li>Régulation du sommeil</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Système limbique</h4>
                      <p className="text-sm text-muted-foreground">
                        Réseau de structures impliquées dans les émotions, la mémoire et les comportements instinctifs.
                      </p>
                      <div className="mt-2">
                        <h5 className="text-xs font-medium">Structures principales:</h5>
                        <ul className="list-disc pl-5 text-xs text-muted-foreground mt-1">
                          <li>Amygdale (traitement émotionnel, peur)</li>
                          <li>Hippocampe (mémoire déclarative)</li>
                          <li>Cortex cingulaire (attention, émotions)</li>
                          <li>Hypothalamus (homéostasie, pulsions)</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Autres structures</h4>
                      <p className="text-sm text-muted-foreground">
                        Diverses structures sous-corticales aux fonctions spécialisées.
                      </p>
                      <div className="mt-2">
                        <h5 className="text-xs font-medium">Exemples:</h5>
                        <ul className="list-disc pl-5 text-xs text-muted-foreground mt-1">
                          <li>Corps calleux (connexion inter-hémisphérique)</li>
                          <li>Septum (plaisir, récompense)</li>
                          <li>Noyaux de la base du tronc cérébral</li>
                          <li>Formation réticulaire (éveil)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="cerebellum" className="pt-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Cervelet</h3>
                  <p className="text-muted-foreground">
                    Située à l'arrière du cerveau, sous les lobes occipitaux, cette structure contient plus de neurones que le reste du cerveau réuni et joue un rôle crucial dans la coordination motrice.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Anatomie du cervelet</h4>
                      <div className="text-sm text-muted-foreground space-y-2">
                        <p>
                          Le cervelet est divisé en trois lobes (antérieur, postérieur et flocculonodulaire) et deux hémisphères reliés par le vermis. Sa surface est composée de matière grise fortement plissée.
                        </p>
                        <p>
                          La substance blanche interne forme "l'arbre de vie". Les noyaux profonds du cervelet sont le noyau dentelé, le noyau emboliforme, le noyau globuleux et le noyau fastigial.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Organisation fonctionnelle</h4>
                      <div className="text-sm text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Archéocervelet (lobe flocculonodulaire): équilibre, posture</li>
                          <li>Paléocervelet (lobe antérieur): tonus musculaire, posture</li>
                          <li>Néocervelet (lobe postérieur): mouvements fins, apprentissage moteur</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-medium mb-2">Fonctions cérébelleuses</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h5 className="text-sm font-medium mb-1">Fonctions motrices</h5>
                        <ul className="list-disc pl-5 text-xs text-muted-foreground">
                          <li>Coordination des mouvements volontaires</li>
                          <li>Maintien de l'équilibre et de la posture</li>
                          <li>Contrôle de la précision et du timing des mouvements</li>
                          <li>Apprentissage moteur</li>
                          <li>Adaptation des mouvements en fonction du contexte</li>
                        </ul>
                      </div>
                      
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h5 className="text-sm font-medium mb-1">Fonctions non-motrices</h5>
                        <ul className="list-disc pl-5 text-xs text-muted-foreground">
                          <li>Fonctions cognitives (moins connues)</li>
                          <li>Traitement du langage</li>
                          <li>Régulation émotionnelle</li>
                          <li>Attention et mémoire de travail</li>
                          <li>Cognition sociale</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Pathologies cérébelleuses</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Les lésions du cervelet peuvent entraîner divers symptômes moteurs:
                    </p>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground">
                      <li>Ataxie (mouvements non coordonnés)</li>
                      <li>Dysmétrie (imprécision des gestes)</li>
                      <li>Dysdiadococinésie (difficulté à effectuer des mouvements rapides alternés)</li>
                      <li>Tremblements intentionnels</li>
                      <li>Troubles de la marche et de l'équilibre</li>
                      <li>Dysarthrie (troubles de l'articulation verbale)</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="brainstem" className="pt-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Tronc cérébral</h3>
                  <p className="text-muted-foreground">
                    Le tronc cérébral relie le cerveau à la moelle épinière et contrôle de nombreuses fonctions vitales automatiques. Il constitue le centre de passage de presque toutes les voies nerveuses entre le cerveau et le reste du corps.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Mésencéphale (Midbrain)</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Partie supérieure du tronc cérébral, contenant:
                      </p>
                      <ul className="list-disc pl-5 text-xs text-muted-foreground">
                        <li>Colliculi supérieurs (réflexes visuels)</li>
                        <li>Colliculi inférieurs (audition)</li>
                        <li>Substance noire (mouvements)</li>
                        <li>Aire tegmentale ventrale (système de récompense)</li>
                        <li>Noyaux des nerfs crâniens III et IV</li>
                      </ul>
                    </div>
                    
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Pont (Pons)</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Partie médiane du tronc cérébral, comprenant:
                      </p>
                      <ul className="list-disc pl-5 text-xs text-muted-foreground">
                        <li>Noyaux du pont (relais vers le cervelet)</li>
                        <li>Formation réticulée (éveil, vigilance)</li>
                        <li>Centres du sommeil</li>
                        <li>Centres respiratoires</li>
                        <li>Noyaux des nerfs crâniens V à VII</li>
                      </ul>
                    </div>
                    
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Bulbe rachidien (Medulla)</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Partie inférieure du tronc cérébral, contenant:
                      </p>
                      <ul className="list-disc pl-5 text-xs text-muted-foreground">
                        <li>Centre cardiaque</li>
                        <li>Centre respiratoire</li>
                        <li>Centre vasomoteur</li>
                        <li>Centres des réflexes (vomissement, toux)</li>
                        <li>Noyaux des nerfs crâniens VIII à XII</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-medium mb-2">Fonctions vitales du tronc cérébral</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h5 className="text-sm font-medium mb-1">Fonctions autonomes</h5>
                        <ul className="list-disc pl-5 text-xs text-muted-foreground">
                          <li>Contrôle de la respiration</li>
                          <li>Régulation cardiovasculaire</li>
                          <li>Régulation de la pression artérielle</li>
                          <li>Contrôle de la déglutition</li>
                          <li>Contrôle du vomissement</li>
                          <li>Régulation de la température</li>
                        </ul>
                      </div>
                      
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h5 className="text-sm font-medium mb-1">Autres fonctions essentielles</h5>
                        <ul className="list-disc pl-5 text-xs text-muted-foreground">
                          <li>Contrôle de l'éveil et du niveau de conscience</li>
                          <li>Relais des voies sensorielles et motrices</li>
                          <li>Maintien de l'équilibre</li>
                          <li>Coordination des mouvements oculaires</li>
                          <li>Contrôle des réflexes de protection</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Importance clinique</h4>
                    <p className="text-sm text-muted-foreground">
                      Les lésions du tronc cérébral peuvent être dévastatrices en raison de la concentration de centres vitaux et de voies de passage dans un petit volume. Selon la localisation, elles peuvent entraîner: coma, troubles respiratoires, paralysies, troubles de l'équilibre, vertiges, troubles de la déglutition, dysarthrie, mort cérébrale (lésions étendues).
                    </p>
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

export default BrainStructures;
