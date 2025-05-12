
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MessageSquare, Brain, HeartPulse, GraduationCap, Users, BookOpen, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dysphasie = () => {
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
                La <span className="neuro-gradient-text">Dysphasie</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Comprendre le trouble spécifique du développement du langage oral
              </p>
            </div>
          </div>
        </div>

        <div className="container py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Qu'est-ce que la dysphasie ?</h2>
                <p className="text-muted-foreground mb-4">
                  La dysphasie est un trouble neurodéveloppemental qui affecte spécifiquement l'acquisition et le développement 
                  du langage oral. Ce trouble structurel, durable et persistant se manifeste dès les premiers stades du développement de 
                  l'enfant, en l'absence de trouble sensoriel, de déficience intellectuelle, ou de trouble psychologique grave.
                </p>
                <p className="text-muted-foreground mb-4">
                  Contrairement à un simple retard de langage qui peut se résorber avec le temps, la dysphasie est un 
                  trouble durable qui nécessite une prise en charge spécifique et adaptée. Elle touche environ 1% des enfants, 
                  avec une prévalence plus élevée chez les garçons que chez les filles.
                </p>
                <p className="text-muted-foreground">
                  Les personnes dysphasiques peuvent présenter des difficultés variables dans la formulation, la compréhension 
                  ou l'utilisation du langage oral, ce qui peut considérablement affecter leur communication quotidienne, 
                  leurs apprentissages scolaires et leurs interactions sociales.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Les différents types de dysphasie</h2>
                <p className="text-muted-foreground mb-4">
                  La dysphasie peut prendre différentes formes selon les composantes du langage qui sont affectées. 
                  On distingue généralement plusieurs types:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <Card className="p-4 border-neuro-purple">
                    <h3 className="font-semibold mb-2 text-neuro-purple">Dysphasie phonologique-syntaxique</h3>
                    <p className="text-sm text-muted-foreground">
                      Difficultés avec la production des sons (phonologie) et la construction des phrases (syntaxe).
                      Langage peu fluide, phrases courtes et mal structurées.
                    </p>
                  </Card>
                  
                  <Card className="p-4 border-neuro-purple">
                    <h3 className="font-semibold mb-2 text-neuro-purple">Dysphasie lexicale-syntaxique</h3>
                    <p className="text-sm text-muted-foreground">
                      Difficultés d'accès au lexique (manque du mot) et de construction syntaxique.
                      Vocabulaire limité, difficulté à trouver les mots justes.
                    </p>
                  </Card>
                  
                  <Card className="p-4 border-neuro-purple">
                    <h3 className="font-semibold mb-2 text-neuro-purple">Dysphasie sémantique-pragmatique</h3>
                    <p className="text-sm text-muted-foreground">
                      Difficultés avec le sens des mots (sémantique) et l'utilisation sociale du langage (pragmatique).
                      Discours parfois incohérent malgré une bonne structure grammaticale.
                    </p>
                  </Card>
                  
                  <Card className="p-4 border-neuro-purple">
                    <h3 className="font-semibold mb-2 text-neuro-purple">Dysphasie réceptive</h3>
                    <p className="text-sm text-muted-foreground">
                      Difficultés prédominantes dans la compréhension du langage oral.
                      Problèmes à comprendre les consignes et les conversations.
                    </p>
                  </Card>
                </div>
                
                <p className="text-muted-foreground">
                  Il est important de noter que ces catégories ne sont pas hermétiques et qu'une personne peut 
                  présenter une forme mixte combinant plusieurs aspects des différents types de dysphasie.
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
                  <h3 className="text-xl font-semibold">Signes et symptômes</h3>
                  <p className="text-muted-foreground mb-4">
                    Les manifestations de la dysphasie peuvent varier considérablement d'une personne à l'autre, 
                    tant en termes de type que de sévérité. Voici les principaux signes à surveiller:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <MessageSquare className="h-5 w-5 text-neuro-purple" />
                        <h4 className="font-medium">Expression verbale</h4>
                      </div>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Retard significatif dans l'apparition du langage</li>
                        <li>Vocabulaire limité pour l'âge</li>
                        <li>Difficultés à formuler des phrases complètes</li>
                        <li>Erreurs de conjugaison et d'accord persistantes</li>
                        <li>Problèmes d'articulation et de prononciation</li>
                        <li>Utilisation incorrecte des mots-outils (prépositions, articles)</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Brain className="h-5 w-5 text-neuro-purple" />
                        <h4 className="font-medium">Compréhension</h4>
                      </div>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Difficultés à comprendre les consignes verbales</li>
                        <li>Incompréhension des concepts abstraits</li>
                        <li>Troubles de la compréhension des phrases complexes</li>
                        <li>Difficultés à suivre une conversation à plusieurs</li>
                        <li>Nécessité de reformulation fréquente</li>
                        <li>Mauvaise interprétation des messages implicites</li>
                      </ul>
                    </Card>

                    <Card className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="h-5 w-5 text-neuro-purple" />
                        <h4 className="font-medium">Impacts sociaux</h4>
                      </div>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Difficultés à communiquer avec les pairs</li>
                        <li>Tendance à l'isolement social</li>
                        <li>Frustration et parfois troubles du comportement</li>
                        <li>Malentendus fréquents dans les interactions</li>
                        <li>Anxiété sociale liée aux difficultés de communication</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <GraduationCap className="h-5 w-5 text-neuro-purple" />
                        <h4 className="font-medium">Autres particularités</h4>
                      </div>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Difficultés d'apprentissage de la lecture (souvent dyslexie associée)</li>
                        <li>Troubles de la mémoire verbale</li>
                        <li>Difficultés de repérage dans le temps</li>
                        <li>Difficultés attentionnelles secondaires</li>
                        <li>Recours fréquent à des gestes ou mimiques pour compenser</li>
                      </ul>
                    </Card>
                  </div>
                </TabsContent>
                
                <TabsContent value="diagnosis" className="space-y-4">
                  <h3 className="text-xl font-semibold">Parcours diagnostic</h3>
                  <p className="text-muted-foreground mb-4">
                    Le diagnostic de la dysphasie est un processus complexe qui nécessite l'intervention de plusieurs 
                    professionnels. Il repose sur une démarche d'exclusion et d'évaluation positive des troubles.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Quand consulter ?</h4>
                      <p className="text-sm text-muted-foreground">
                        Il est recommandé de consulter dès qu'un retard de langage significatif est observé, par exemple:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>À 18-24 mois: absence ou très peu de mots</li>
                        <li>À 3 ans: absence de phrases de 2-3 mots, vocabulaire très limité</li>
                        <li>À 4 ans: langage peu compréhensible, phrases très simples ou incorrectes</li>
                        <li>À l'âge scolaire: difficultés persistantes malgré les interventions</li>
                      </ul>
                    </div>
                    
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Professionnels impliqués</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li><span className="font-medium">Médecin (pédiatre, neuropédiatre)</span>: pour exclure d'autres causes médicales</li>
                        <li><span className="font-medium">Orthophoniste</span>: évaluation approfondie du langage oral et écrit</li>
                        <li><span className="font-medium">Psychologue</span>: évaluation cognitive et psychoaffective</li>
                        <li><span className="font-medium">Neuropsychologue</span>: évaluation des fonctions cognitives</li>
                        <li><span className="font-medium">ORL et audiologiste</span>: vérification de l'audition</li>
                      </ul>
                    </div>
                    
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Critères diagnostiques</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Pour qu'un diagnostic de dysphasie soit posé, plusieurs conditions doivent être réunies:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Écart significatif entre les capacités verbales et non verbales</li>
                        <li>Absence de déficit auditif expliquant les troubles</li>
                        <li>Absence de déficience intellectuelle significative</li>
                        <li>Absence de trouble psychologique grave</li>
                        <li>Persistance du trouble malgré une stimulation adaptée</li>
                        <li>Impact fonctionnel significatif sur la vie quotidienne</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="treatment" className="space-y-4">
                  <h3 className="text-xl font-semibold">Approches thérapeutiques</h3>
                  <p className="text-muted-foreground mb-4">
                    La prise en charge de la dysphasie est pluridisciplinaire et doit être précoce, intensive et prolongée. 
                    Elle s'adapte aux besoins spécifiques de chaque personne.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <Card className="p-4">
                      <h4 className="font-medium mb-2">Rééducation orthophonique</h4>
                      <p className="text-sm text-muted-foreground">
                        Pilier central de la prise en charge, elle vise à:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>Développer le vocabulaire et enrichir le lexique</li>
                        <li>Améliorer l'articulation et la phonologie</li>
                        <li>Renforcer la construction syntaxique</li>
                        <li>Travailler la pragmatique et l'utilisation sociale du langage</li>
                        <li>Préparer et soutenir l'apprentissage de la lecture</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4">
                      <h4 className="font-medium mb-2">Adaptations scolaires</h4>
                      <p className="text-sm text-muted-foreground">
                        Essentielles pour favoriser la réussite:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>Mise en place d'un Plan d'Accompagnement Personnalisé (PAP)</li>
                        <li>Aménagements pédagogiques (consignes simplifiées, temps supplémentaire)</li>
                        <li>Recours à des supports visuels</li>
                        <li>Aide humaine (AESH) dans certains cas</li>
                        <li>Outils informatiques adaptés</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4">
                      <h4 className="font-medium mb-2">Thérapies complémentaires</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li><span className="font-medium">Psychomotricité</span>: pour les troubles associés de la coordination</li>
                        <li><span className="font-medium">Ergothérapie</span>: pour adapter l'environnement et proposer des outils</li>
                        <li><span className="font-medium">Psychothérapie</span>: pour soutenir l'estime de soi et gérer l'anxiété</li>
                        <li><span className="font-medium">Thérapie familiale</span>: pour accompagner l'entourage</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4">
                      <h4 className="font-medium mb-2">Approches innovantes</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li><span className="font-medium">Communication alternative et augmentée</span>: pictogrammes, tableaux de communication</li>
                        <li><span className="font-medium">Méthodes multimodales</span>: associant gestes et langage (Makaton, LSF)</li>
                        <li><span className="font-medium">Applications numériques</span>: logiciels d'entraînement du langage</li>
                        <li><span className="font-medium">Thérapies par le jeu</span>: approches ludiques de stimulation du langage</li>
                      </ul>
                    </Card>
                  </div>
                  
                  <div className="bg-secondary p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Intensité et durée du suivi</h4>
                    <p className="text-sm text-muted-foreground">
                      La rééducation doit être:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-muted-foreground">
                      <li><span className="font-medium">Précoce</span>: idéalement dès l'identification des premiers signes</li>
                      <li><span className="font-medium">Régulière</span>: séances hebdomadaires, voire plurihebdomadaires</li>
                      <li><span className="font-medium">Prolongée</span>: s'étendant souvent sur plusieurs années</li>
                      <li><span className="font-medium">Coordonnée</span>: impliquant tous les professionnels et l'entourage</li>
                      <li><span className="font-medium">Évolutive</span>: s'adaptant aux progrès et aux besoins changeants</li>
                    </ul>
                  </div>
                </TabsContent>
                
                <TabsContent value="daily" className="space-y-4">
                  <h3 className="text-xl font-semibold">Vivre avec une dysphasie</h3>
                  <p className="text-muted-foreground mb-4">
                    La dysphasie est un trouble durable qui nécessite des adaptations tout au long de la vie, 
                    mais de nombreuses stratégies peuvent aider à améliorer significativement la qualité de vie.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <Card className="p-4">
                      <h4 className="font-medium mb-2">Pour les parents et l'entourage</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Communiquer simplement mais sans infantiliser</li>
                        <li>Accompagner la parole de gestes et supports visuels</li>
                        <li>Reformuler correctement sans systématiquement corriger</li>
                        <li>Maintenir des attentes positives et valoriser les progrès</li>
                        <li>Favoriser les situations de communication plaisantes</li>
                        <li>Impliquer tous les membres de la famille dans l'approche</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4">
                      <h4 className="font-medium mb-2">Pour les enseignants</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Donner des consignes courtes et séquencées</li>
                        <li>Associer des supports visuels aux explications orales</li>
                        <li>Vérifier la compréhension régulièrement</li>
                        <li>Valoriser d'autres compétences pour renforcer l'estime de soi</li>
                        <li>Adapter les évaluations (privilégier l'oral ou le QCM)</li>
                        <li>Sensibiliser les autres élèves aux différences</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4">
                      <h4 className="font-medium mb-2">À l'adolescence et l'âge adulte</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Développer des stratégies de compensation personnalisées</li>
                        <li>Utiliser les outils numériques (correcteurs, dictée vocale)</li>
                        <li>S'orienter vers des formations et métiers adaptés</li>
                        <li>Informer l'entourage professionnel des besoins spécifiques</li>
                        <li>Maintenir un suivi orthophonique si nécessaire</li>
                        <li>Participer à des groupes de parole ou associations</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4">
                      <h4 className="font-medium mb-2">Forces et potentialités</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Les personnes dysphasiques développent souvent:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Une grande capacité d'adaptation et de persévérance</li>
                        <li>Une sensibilité accrue aux aspects non-verbaux</li>
                        <li>Des compétences visuospatiales développées</li>
                        <li>Une créativité dans la résolution de problèmes</li>
                        <li>Une empathie particulière envers les autres difficultés</li>
                      </ul>
                    </Card>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Témoignage</h4>
                    <blockquote className="italic text-sm text-muted-foreground border-l-4 border-neuro-purple pl-4">
                      "Pendant longtemps, je me suis sentie incomprise et frustrée de ne pas pouvoir exprimer clairement mes idées. 
                      Le diagnostic de dysphasie a été un soulagement car il a mis un nom sur mes difficultés. Grâce à l'orthophonie 
                      et aux adaptations scolaires, j'ai progressivement trouvé mes propres stratégies. Aujourd'hui, à 27 ans, ma 
                      dysphasie fait partie de moi mais ne me définit pas. Je travaille comme designer graphique, un domaine où 
                      mes compétences visuelles sont valorisées."
                      <footer className="mt-2 font-medium not-italic">Sophie, 27 ans</footer>
                    </blockquote>
                    <p className="text-xs text-muted-foreground mt-2 italic">
                      Note: Ce témoignage est fictif, créé à des fins pédagogiques pour illustrer le vécu possible d'une personne dysphasique.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">Ressources et associations</h2>
                <p className="text-muted-foreground mb-4">
                  De nombreuses associations et organismes proposent information, accompagnement et soutien 
                  aux personnes dysphasiques et leur entourage:
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <Card className="p-4">
                    <h4 className="font-medium mb-2">Organisations nationales</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Fédération Française des DYS (FFDys)</li>
                      <li>Association Avenir Dysphasie (AAD)</li>
                      <li>Dysphasie France</li>
                      <li>Fédération Nationale des Orthophonistes (FNO)</li>
                    </ul>
                  </Card>
                  
                  <Card className="p-4">
                    <h4 className="font-medium mb-2">Ressources pédagogiques</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>INSHEA (Institut national supérieur de formation et de recherche pour l'éducation des jeunes handicapés)</li>
                      <li>Centre de Référence des Troubles du Langage et des Apprentissages (CRTLA)</li>
                      <li>Réseau des SESSAD spécialisés</li>
                    </ul>
                  </Card>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-secondary p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="h-6 w-6 text-neuro-purple" />
                  <h3 className="text-xl font-bold">À retenir</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-neuro-purple font-bold">•</span>
                    <span className="text-muted-foreground text-sm">La dysphasie est un trouble durable du développement du langage oral</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-neuro-purple font-bold">•</span>
                    <span className="text-muted-foreground text-sm">Elle nécessite un diagnostic pluridisciplinaire</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-neuro-purple font-bold">•</span>
                    <span className="text-muted-foreground text-sm">Une prise en charge précoce améliore significativement le pronostic</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-neuro-purple font-bold">•</span>
                    <span className="text-muted-foreground text-sm">L'orthophonie est au cœur de la rééducation</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-neuro-purple font-bold">•</span>
                    <span className="text-muted-foreground text-sm">Des adaptations sont nécessaires à l'école et dans la vie quotidienne</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-neuro-purple font-bold">•</span>
                    <span className="text-muted-foreground text-sm">Les personnes dysphasiques peuvent développer d'autres compétences remarquables</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Comorbidités fréquentes</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  La dysphasie est souvent associée à d'autres troubles:
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <HeartPulse className="h-5 w-5 text-neuro-red shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Dyslexie/dysorthographie</span>
                      <p className="text-xs text-muted-foreground">Les difficultés de langage oral impactent souvent l'apprentissage de l'écrit</p>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <HeartPulse className="h-5 w-5 text-neuro-red shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Troubles de l'attention</span>
                      <p className="text-xs text-muted-foreground">Difficultés attentionnelles secondaires aux efforts de compréhension</p>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <HeartPulse className="h-5 w-5 text-neuro-red shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Troubles praxiques</span>
                      <p className="text-xs text-muted-foreground">Problèmes de coordination motrice parfois associés</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Testez vos connaissances</h3>
                <Button 
                  variant="outline" 
                  className="w-full"
                  asChild
                  onClick={scrollToTop}
                >
                  <Link to="/auto-evaluation">
                    Faire le test sur les troubles DYS
                  </Link>
                </Button>
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
                    <Link to="/troubles/dyslexie">
                      Dyslexie
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    asChild
                    onClick={scrollToTop}
                  >
                    <Link to="/troubles/dyspraxie">
                      Dyspraxie
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    asChild
                    onClick={scrollToTop}
                  >
                    <Link to="/troubles/dyscalculie">
                      Dyscalculie
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

export default Dysphasie;
