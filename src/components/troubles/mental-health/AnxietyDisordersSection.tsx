import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Heart, Users, Zap, AlertTriangle, Shield, Eye, ChevronDown, ChevronRight, Brain } from 'lucide-react';
import { useState } from 'react';
import PTSDSection from './PTSDSection';
import AgoraphobiaSection from './AgoraphobiaSection';

/**
 * Component for Anxiety Disorders section with detailed information
 * about different types of anxiety disorders in children and adolescents
 */
const AnxietyDisordersSection = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  return (
    <div className="space-y-6">
      <Card className="neuro-card border-neuro-red">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-neuro-red" />
            Troubles Anxieux
          </CardTitle>
          <CardDescription>
            Les troubles anxieux sont caractérisés par une peur, une inquiétude ou une appréhension disproportionnée aux circonstances
          </CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="separation" className="w-full">
        <div className="flex justify-center mb-6">
          <TabsList className="grid w-full max-w-4xl grid-cols-6">
            <TabsTrigger value="separation" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              <span className="hidden sm:inline">Séparation</span>
            </TabsTrigger>
            <TabsTrigger value="social" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Social</span>
            </TabsTrigger>
            <TabsTrigger value="generalise" className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              <span className="hidden sm:inline">Généralisé</span>
            </TabsTrigger>
            <TabsTrigger value="panique" className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              <span className="hidden sm:inline">Panique</span>
            </TabsTrigger>
            <TabsTrigger value="ptsd" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span className="hidden sm:inline">TSPT</span>
            </TabsTrigger>
            <TabsTrigger value="agoraphobia" className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              <span className="hidden sm:inline">Agoraphobie</span>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="separation">
          <Card className="neuro-card border-neuro-blue">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-neuro-blue" />
                Trouble d'anxiété de séparation
              </CardTitle>
              <CardDescription>
                Peur persistante et intense de la séparation d'une figure d'attachement
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Manifestations principales :</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                    <li>Crises spectaculaires lors des séparations</li>
                    <li>Refus scolaire persistant</li>
                    <li>Plaintes somatiques (maux de tête, maux de ventre)</li>
                    <li>Cauchemars liés à la séparation</li>
                    <li>Peur excessive qu'il arrive quelque chose aux parents</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Traitement :</h4>
                  <div className="space-y-3">
                    {/* Behavioral Therapy with Systematic Separations */}
                    <Collapsible>
                      <CollapsibleTrigger 
                        className="flex items-center justify-between w-full p-3 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors"
                        onClick={() => toggleSection('separation-behavioral')}
                      >
                        <div className="flex items-center gap-2">
                          <Brain className="h-4 w-4 text-blue-600" />
                          <span className="font-medium text-blue-900 text-sm">Thérapie comportementale avec séparations systématiques</span>
                        </div>
                        {openSections['separation-behavioral'] ? 
                          <ChevronDown className="h-4 w-4 text-blue-600" /> : 
                          <ChevronRight className="h-4 w-4 text-blue-600" />
                        }
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-3 pb-3">
                        <div className="bg-white p-3 rounded-lg border border-blue-200 mt-2 space-y-2">
                          <div>
                            <h6 className="font-medium text-blue-900 mb-1 text-sm">Protocole de séparation :</h6>
                            <ul className="list-disc pl-4 space-y-1 text-xs text-blue-800">
                              <li>Imposer des séparations brèves et régulières (5-10 minutes initialement)</li>
                              <li>Augmentation progressive de la durée (15, 30, 60 minutes)</li>
                              <li>Maintenir des adieux brefs et neutres</li>
                              <li>Éviter les négociations ou les promesses excessives</li>
                              <li>Retour systématique comme promis pour renforcer la confiance</li>
                            </ul>
                          </div>
                          <div>
                            <h6 className="font-medium text-blue-900 mb-1 text-sm">Techniques d'exposition :</h6>
                            <ul className="list-disc pl-4 space-y-1 text-xs text-blue-800">
                              <li>Hiérarchie des situations anxiogènes (de la moins à la plus difficile)</li>
                              <li>Exposition graduelle avec soutien émotionnel</li>
                              <li>Renforcement positif des comportements adaptatifs</li>
                              <li>Prévention des comportements d'évitement</li>
                            </ul>
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    {/* Relaxation and Anxiety Management */}
                    <Collapsible>
                      <CollapsibleTrigger 
                        className="flex items-center justify-between w-full p-3 bg-green-50 rounded-lg border border-green-200 hover:bg-green-100 transition-colors"
                        onClick={() => toggleSection('separation-relaxation')}
                      >
                        <div className="flex items-center gap-2">
                          <Heart className="h-4 w-4 text-green-600" />
                          <span className="font-medium text-green-900 text-sm">Techniques de relaxation et de gestion de l'anxiété</span>
                        </div>
                        {openSections['separation-relaxation'] ? 
                          <ChevronDown className="h-4 w-4 text-green-600" /> : 
                          <ChevronRight className="h-4 w-4 text-green-600" />
                        }
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-3 pb-3">
                        <div className="bg-white p-3 rounded-lg border border-green-200 mt-2 space-y-2">
                          <div>
                            <h6 className="font-medium text-green-900 mb-1 text-sm">Techniques de respiration :</h6>
                            <ul className="list-disc pl-4 space-y-1 text-xs text-green-800">
                              <li>Respiration abdominale profonde (4-7-8 : inspirer 4s, retenir 7s, expirer 8s)</li>
                              <li>Exercices de cohérence cardiaque</li>
                              <li>Techniques de pleine conscience adaptées à l'âge</li>
                            </ul>
                          </div>
                          <div>
                            <h6 className="font-medium text-green-900 mb-1 text-sm">Relaxation musculaire :</h6>
                            <ul className="list-disc pl-4 space-y-1 text-xs text-green-800">
                              <li>Relaxation musculaire progressive de Jacobson</li>
                              <li>Techniques de visualisation positive</li>
                              <li>Yoga et méditation adaptés aux enfants</li>
                            </ul>
                          </div>
                          <div>
                            <h6 className="font-medium text-green-900 mb-1 text-sm">Stratégies d'adaptation :</h6>
                            <ul className="list-disc pl-4 space-y-1 text-xs text-green-800">
                              <li>Objets transitionnels (photo, peluche)</li>
                              <li>Techniques d'auto-apaisement</li>
                              <li>Planification d'activités rassurantes</li>
                            </ul>
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    {/* Parental Involvement */}
                    <Collapsible>
                      <CollapsibleTrigger 
                        className="flex items-center justify-between w-full p-3 bg-purple-50 rounded-lg border border-purple-200 hover:bg-purple-100 transition-colors"
                        onClick={() => toggleSection('separation-parents')}
                      >
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-purple-600" />
                          <span className="font-medium text-purple-900 text-sm">Implication des parents dans le processus</span>
                        </div>
                        {openSections['separation-parents'] ? 
                          <ChevronDown className="h-4 w-4 text-purple-600" /> : 
                          <ChevronRight className="h-4 w-4 text-purple-600" />
                        }
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-3 pb-3">
                        <div className="bg-white p-3 rounded-lg border border-purple-200 mt-2 space-y-2">
                          <div>
                            <h6 className="font-medium text-purple-900 mb-1 text-sm">Formation parentale :</h6>
                            <ul className="list-disc pl-4 space-y-1 text-xs text-purple-800">
                              <li>Apprentissage de réponses neutres aux protestations</li>
                              <li>Éviter la surprotection et les accommodations excessives</li>
                              <li>Maintien de routines prévisibles et rassurantes</li>
                              <li>Gestion de leur propre anxiété de séparation</li>
                            </ul>
                          </div>
                          <div>
                            <h6 className="font-medium text-purple-900 mb-1 text-sm">Stratégies de séparation :</h6>
                            <ul className="list-disc pl-4 space-y-1 text-xs text-purple-800">
                              <li>Adieux brefs et confiants</li>
                              <li>Éviter les retours multiples</li>
                              <li>Préparation de l'enfant aux séparations</li>
                              <li>Communication claire des horaires de retour</li>
                            </ul>
                          </div>
                          <div>
                            <h6 className="font-medium text-purple-900 mb-1 text-sm">Collaboration école-famille :</h6>
                            <ul className="list-disc pl-4 space-y-1 text-xs text-purple-800">
                              <li>Plan d'intervention coordonné</li>
                              <li>Communication régulière avec les enseignants</li>
                              <li>Adaptation progressive du temps scolaire</li>
                              <li>Prévention du refus scolaire</li>
                            </ul>
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800">
                  <strong>Important :</strong> Le diagnostic nécessite que les symptômes persistent pendant au moins 4 semaines 
                  et causent une détresse significative ou une altération du fonctionnement.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="social">
          <Card className="neuro-card border-neuro-green">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-neuro-green" />
                Trouble d'anxiété sociale
              </CardTitle>
              <CardDescription>
                Peur persistante du ridicule et de l'humiliation en contexte social
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Symptômes chez l'adolescent :</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                    <li>Évitement des situations sociales</li>
                    <li>Inquiétude excessive avant les événements sociaux</li>
                    <li>Refus scolaire lié aux interactions</li>
                    <li>Plaintes somatiques avant les activités sociales</li>
                    <li>Isolement social progressif</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Symptômes chez l'enfant :</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                    <li>Crises de colère ou pleurs</li>
                    <li>Figement en situation sociale</li>
                    <li>Retrait social marqué</li>
                    <li>Mutisme sélectif possible</li>
                    <li>Accrochage aux parents en public</li>
                  </ul>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-3">Traitement :</h4>
                <div className="space-y-3">
                  {/* Behavioral Therapy First Line */}
                  <Collapsible>
                    <CollapsibleTrigger 
                      className="flex items-center justify-between w-full p-3 bg-green-50 rounded-lg border border-green-200 hover:bg-green-100 transition-colors"
                      onClick={() => toggleSection('social-behavioral')}
                    >
                      <div className="flex items-center gap-2">
                        <Brain className="h-4 w-4 text-green-600" />
                        <span className="font-medium text-green-900 text-sm">Thérapie comportementale en première ligne</span>
                      </div>
                      {openSections['social-behavioral'] ? 
                        <ChevronDown className="h-4 w-4 text-green-600" /> : 
                        <ChevronRight className="h-4 w-4 text-green-600" />
                      }
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-3 pb-3">
                      <div className="bg-white p-3 rounded-lg border border-green-200 mt-2 space-y-2">
                        <div>
                          <h6 className="font-medium text-green-900 mb-1 text-sm">Exposition graduelle :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-green-800">
                            <li>Hiérarchie des situations sociales (du moins au plus anxiogène)</li>
                            <li>Jeux de rôle et simulations d'interactions sociales</li>
                            <li>Exposition in vivo progressive (groupes restreints puis élargis)</li>
                            <li>Renforcement positif des tentatives d'interaction</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-medium text-green-900 mb-1 text-sm">Entraînement aux compétences sociales :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-green-800">
                            <li>Apprentissage du contact visuel approprié</li>
                            <li>Techniques de conversation (initiation, maintien, clôture)</li>
                            <li>Gestion des silences et des malaises sociaux</li>
                            <li>Reconnaissance et expression des émotions</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-medium text-green-900 mb-1 text-sm">Maintien scolaire obligatoire :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-green-800">
                            <li>Prévention de l'évitement scolaire</li>
                            <li>Collaboration avec l'équipe éducative</li>
                            <li>Adaptations pédagogiques temporaires si nécessaire</li>
                            <li>Réintégration progressive des activités de groupe</li>
                          </ul>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Social Anxiety Management Techniques */}
                  <Collapsible>
                    <CollapsibleTrigger 
                      className="flex items-center justify-between w-full p-3 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors"
                      onClick={() => toggleSection('social-management')}
                    >
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-blue-600" />
                        <span className="font-medium text-blue-900 text-sm">Techniques de gestion de l'anxiété sociale</span>
                      </div>
                      {openSections['social-management'] ? 
                        <ChevronDown className="h-4 w-4 text-blue-600" /> : 
                        <ChevronRight className="h-4 w-4 text-blue-600" />
                      }
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-3 pb-3">
                      <div className="bg-white p-3 rounded-lg border border-blue-200 mt-2 space-y-2">
                        <div>
                          <h6 className="font-medium text-blue-900 mb-1 text-sm">Restructuration cognitive :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-blue-800">
                            <li>Identification des pensées catastrophiques</li>
                            <li>Remise en question des croyances négatives sur soi</li>
                            <li>Développement de pensées alternatives réalistes</li>
                            <li>Techniques de défusion cognitive</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-medium text-blue-900 mb-1 text-sm">Gestion des symptômes physiques :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-blue-800">
                            <li>Techniques de respiration pour contrôler l'hyperventilation</li>
                            <li>Relaxation musculaire progressive</li>
                            <li>Gestion des rougissements et tremblements</li>
                            <li>Techniques de grounding (ancrage dans le présent)</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-medium text-blue-900 mb-1 text-sm">Stratégies d'adaptation :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-blue-800">
                            <li>Préparation mentale avant les événements sociaux</li>
                            <li>Techniques d'auto-encouragement</li>
                            <li>Planification d'échappatoires socialement acceptables</li>
                            <li>Développement d'un réseau de soutien social</li>
                          </ul>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-sm text-yellow-800">
                  <strong>Diagnostic :</strong> L'anxiété doit persister pendant ≥ 6 mois et être présente 
                  de manière cohérente dans des contextes similaires.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="generalise">
          <Card className="neuro-card border-neuro-orange">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-neuro-orange" />
                Trouble anxieux généralisé
              </CardTitle>
              <CardDescription>
                Anxiété excessive concernant diverses activités pendant au moins 6 mois
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Symptômes principaux :</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                    <li>Inquiétudes excessives et incontrôlables</li>
                    <li>Agitation ou sensation d'être survolté</li>
                    <li>Fatigue facile</li>
                    <li>Difficultés de concentration</li>
                    <li>Irritabilité</li>
                    <li>Tension musculaire</li>
                    <li>Troubles du sommeil</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Comorbidités fréquentes :</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                    <li>Trouble dépressif majeur</li>
                    <li>Trouble panique</li>
                    <li>Autres troubles anxieux</li>
                    <li>Troubles somatiques</li>
                    <li>Troubles du sommeil</li>
                  </ul>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-3">Traitement :</h4>
                <div className="space-y-3">
                  {/* Cognitive-Behavioral Psychotherapy */}
                  <Collapsible>
                    <CollapsibleTrigger 
                      className="flex items-center justify-between w-full p-3 bg-orange-50 rounded-lg border border-orange-200 hover:bg-orange-100 transition-colors"
                      onClick={() => toggleSection('generalized-cbt')}
                    >
                      <div className="flex items-center gap-2">
                        <Brain className="h-4 w-4 text-orange-600" />
                        <span className="font-medium text-orange-900 text-sm">Psychothérapie cognitivo-comportementale</span>
                      </div>
                      {openSections['generalized-cbt'] ? 
                        <ChevronDown className="h-4 w-4 text-orange-600" /> : 
                        <ChevronRight className="h-4 w-4 text-orange-600" />
                      }
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-3 pb-3">
                      <div className="bg-white p-3 rounded-lg border border-orange-200 mt-2 space-y-2">
                        <div>
                          <h6 className="font-medium text-orange-900 mb-1 text-sm">Gestion des inquiétudes excessives :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-orange-800">
                            <li>Identification et remise en question des pensées catastrophiques</li>
                            <li>Techniques de résolution de problèmes structurées</li>
                            <li>Apprentissage de la tolérance à l'incertitude</li>
                            <li>Restriction du temps consacré aux inquiétudes ("worry time")</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-medium text-orange-900 mb-1 text-sm">Techniques de relaxation :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-orange-800">
                            <li>Relaxation musculaire progressive</li>
                            <li>Techniques de respiration diaphragmatique</li>
                            <li>Méditation de pleine conscience</li>
                            <li>Yoga thérapeutique adapté à l'âge</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-medium text-orange-900 mb-1 text-sm">Restructuration cognitive :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-orange-800">
                            <li>Identification des distorsions cognitives</li>
                            <li>Développement de pensées alternatives réalistes</li>
                            <li>Techniques de défusion cognitive</li>
                            <li>Entraînement à l'auto-observation des pensées</li>
                          </ul>
                        </div>
                        <div className="bg-orange-100 p-2 rounded-lg">
                          <p className="text-xs text-orange-800">
                            <strong>Durée :</strong> 12-16 séances généralement, avec possibilité de séances de rappel.
                          </p>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Medication Management */}
                  <Collapsible>
                    <CollapsibleTrigger 
                      className="flex items-center justify-between w-full p-3 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors"
                      onClick={() => toggleSection('generalized-medication')}
                    >
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-blue-600" />
                        <span className="font-medium text-blue-900 text-sm">Approche médicamenteuse</span>
                      </div>
                      {openSections['generalized-medication'] ? 
                        <ChevronDown className="h-4 w-4 text-blue-600" /> : 
                        <ChevronRight className="h-4 w-4 text-blue-600" />
                      }
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-3 pb-3">
                      <div className="bg-white p-3 rounded-lg border border-blue-200 mt-2 space-y-2">
                        <div>
                          <h6 className="font-medium text-blue-900 mb-1 text-sm">ISRS (première ligne) :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-blue-800">
                            <li>Sertraline, fluoxétine, escitalopram</li>
                            <li>Début à faible dose avec augmentation progressive</li>
                            <li>Surveillance étroite des effets secondaires</li>
                            <li>Évaluation du risque suicidaire (surtout début de traitement)</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-medium text-blue-900 mb-1 text-sm">IRSN (alternative) :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-blue-800">
                            <li>Venlafaxine, duloxétine</li>
                            <li>Efficaces sur l'anxiété et les symptômes somatiques</li>
                            <li>Surveillance de la tension artérielle</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-medium text-blue-900 mb-1 text-sm">Autres options :</h6>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-blue-800">
                            <li><strong>Buspirone :</strong> Alternative sans dépendance</li>
                            <li><strong>Benzodiazépines :</strong> Usage très limité (2-4 semaines max)</li>
                            <li><strong>Hydroxyzine :</strong> Pour l'anxiété somatique</li>
                          </ul>
                        </div>
                        <div className="bg-blue-100 p-2 rounded-lg">
                          <p className="text-xs text-blue-800">
                            <strong>Important :</strong> Surveillance régulière, évaluation bénéfice/risque, arrêt progressif.
                          </p>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="panique">
          <Card className="neuro-card border-neuro-purple">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-neuro-purple" />
                Trouble panique
              </CardTitle>
              <CardDescription>
                Attaques de panique répétées avec anxiété anticipatoire
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Caractéristiques :</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                    <li>Attaques de panique récurrentes et inattendues</li>
                    <li>Anxiété anticipatoire persistante</li>
                    <li>Évitement des situations déclenchantes</li>
                    <li>Début habituel à la fin de l'adolescence</li>
                    <li>Peur de perdre le contrôle</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Symptômes d'une attaque :</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                    <li>Palpitations cardiaques</li>
                    <li>Transpiration excessive</li>
                    <li>Tremblements</li>
                    <li>Sensation d'étouffement</li>
                    <li>Douleur thoracique</li>
                    <li>Nausées</li>
                    <li>Vertiges</li>
                    <li>Peur de mourir</li>
                  </ul>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Comorbidités fréquentes :</h4>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <ul className="list-disc pl-5 space-y-1 text-purple-800 text-sm">
                    <li>Autres troubles anxieux (agoraphobie, anxiété sociale)</li>
                    <li>Trouble dépressif majeur</li>
                    <li>Trouble bipolaire</li>
                    <li>Troubles liés à l'usage de substances</li>
                  </ul>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Traitement :</h4>
                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                  <p className="text-sm text-indigo-800">
                    <strong>Approche combinée :</strong> Médicaments (ISRS, benzodiazépines à court terme) 
                    et psychothérapie (TCC, thérapie d'exposition). L'éducation du patient et de la famille 
                    est essentielle pour comprendre la nature des attaques de panique.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ptsd">
          <PTSDSection />
        </TabsContent>

        <TabsContent value="agoraphobia">
          <AgoraphobiaSection />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AnxietyDisordersSection;