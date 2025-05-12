
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Puzzle, MessageSquare, BrainCircuit, HeartPulse, Lightbulb, Users } from 'lucide-react';

const TSA = () => {
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
                Trouble du <span className="neuro-gradient-text">Spectre de l'Autisme</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Comprendre l'autisme dans toute sa diversité, ses manifestations et les approches de soutien adaptées
              </p>
            </div>
          </div>
        </div>

        <div className="container py-12">
          <Tabs defaultValue="comprendre" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-2xl grid-cols-4">
                <TabsTrigger value="comprendre">Comprendre</TabsTrigger>
                <TabsTrigger value="manifestations">Manifestations</TabsTrigger>
                <TabsTrigger value="diagnostic">Parcours diagnostic</TabsTrigger>
                <TabsTrigger value="vivre">Vivre avec</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="comprendre">
              <div className="max-w-4xl mx-auto space-y-8">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-secondary">
                        <Puzzle className="h-6 w-6 text-neuro-green" />
                      </div>
                      <h2 className="text-2xl font-bold">Qu'est-ce que le Trouble du Spectre de l'Autisme?</h2>
                    </div>

                    <div className="space-y-6 text-muted-foreground">
                      <p>
                        Le Trouble du Spectre de l'Autisme (TSA) est une condition neurodéveloppementale qui se caractérise par des différences dans la façon dont une personne communique, interagit socialement, et perçoit le monde qui l'entoure. L'autisme n'est pas une maladie, mais une différence neurologique qui fait partie de la diversité humaine.
                      </p>
                      
                      <p>
                        La notion de "spectre" est essentielle pour comprendre l'autisme. Elle souligne que chaque personne autiste présente une combinaison unique de caractéristiques, avec des intensités variables. L'expression "Si vous avez rencontré une personne autiste, vous avez rencontré UNE personne autiste" illustre bien cette diversité.
                      </p>
                      
                      <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Points clés à retenir:</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>L'autisme est un mode de fonctionnement neurologique différent, pas un déficit</li>
                          <li>Il s'agit d'une condition permanente, présente dès la naissance</li>
                          <li>Le taux de prévalence est estimé à environ 1-2% de la population</li>
                          <li>Les manifestations de l'autisme évoluent avec l'âge et les expériences de vie</li>
                          <li>Chaque personne autiste est unique, avec ses forces et ses défis propres</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-secondary">
                        <BrainCircuit className="h-6 w-6 text-neuro-purple" />
                      </div>
                      <h2 className="text-2xl font-bold">Différences neurobiologiques</h2>
                    </div>

                    <div className="space-y-6 text-muted-foreground">
                      <p>
                        Les recherches en neurosciences ont mis en évidence plusieurs différences dans le fonctionnement et la structure du cerveau des personnes autistes:
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h3 className="font-medium mb-2">Traitement de l'information:</h3>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Attention plus soutenue aux détails</li>
                            <li>Traitement moins automatique des visages et expressions</li>
                            <li>Hyperperception sensorielle fréquente</li>
                            <li>Traitement de l'information plus analytique que global</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h3 className="font-medium mb-2">Connectivité cérébrale:</h3>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Connectivité locale plus dense dans certaines régions</li>
                            <li>Connectivité longue distance parfois réduite</li>
                            <li>Développement neuronal atypique durant l'enfance</li>
                            <li>Différences dans les circuits de la perception sociale</li>
                          </ul>
                        </div>
                      </div>
                      
                      <p>
                        Ces différences neurobiologiques expliquent de nombreuses caractéristiques de l'autisme, comme la sensibilité sensorielle particulière, la force dans le traitement des détails, ou les défis dans la compréhension intuitive des interactions sociales. Elles sont à l'origine de forces cognitives spécifiques autant que de défis.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-secondary">
                        <Lightbulb className="h-6 w-6 text-neuro-orange" />
                      </div>
                      <h2 className="text-2xl font-bold">Les modèles de compréhension</h2>
                    </div>

                    <div className="space-y-6 text-muted-foreground">
                      <p>
                        Notre compréhension de l'autisme a considérablement évolué au fil du temps, passant d'une vision déficitaire à une approche reconnaissant la neurodiversité:
                      </p>
                      
                      <div className="space-y-4">
                        <div className="border-l-4 border-neuro-red p-4">
                          <h3 className="font-medium mb-1">Modèle médical (approche traditionnelle)</h3>
                          <p className="text-sm">
                            Considère l'autisme comme un trouble à "corriger" ou "normaliser". 
                            Se concentre principalement sur les déficits et les symptômes.
                            A longtemps dominé les approches thérapeutiques et éducatives.
                          </p>
                        </div>
                        
                        <div className="border-l-4 border-neuro-green p-4">
                          <h3 className="font-medium mb-1">Modèle de la neurodiversité (approche contemporaine)</h3>
                          <p className="text-sm">
                            Reconnaît l'autisme comme une variation naturelle du développement humain.
                            Met l'accent sur les forces et les différences plutôt que sur les déficits.
                            Promeut l'adaptation de l'environnement plutôt que la normalisation de la personne.
                            Valorise la perspective et l'autodétermination des personnes autistes.
                          </p>
                        </div>
                      </div>
                      
                      <p>
                        L'approche de la neurodiversité ne nie pas les défis réels que peuvent rencontrer les personnes autistes dans un monde conçu pour les neurotypiques, mais elle reconnaît que ces défis résultent souvent d'un décalage entre les besoins de la personne et son environnement, plutôt que d'un déficit inhérent.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="manifestations">
              <div className="max-w-4xl mx-auto space-y-8">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-secondary">
                        <MessageSquare className="h-6 w-6 text-neuro-blue" />
                      </div>
                      <h2 className="text-2xl font-bold">Communication et interactions sociales</h2>
                    </div>

                    <div className="space-y-6 text-muted-foreground">
                      <p>
                        Les personnes autistes présentent souvent des différences dans leur façon de communiquer et d'interagir socialement. Ces différences peuvent varier considérablement d'une personne à l'autre:
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="font-medium mb-2">Communication verbale:</h3>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Acquisition du langage retardée ou atypique chez certains</li>
                            <li>Langage très élaboré ou formel chez d'autres</li>
                            <li>Difficultés avec les nuances, l'implicite, le langage figuré</li>
                            <li>Tendance à l'interprétation littérale</li>
                            <li>Parfois, écholalie (répétition de mots ou phrases)</li>
                            <li>Environ 25-30% des personnes autistes sont non-verbales ou semi-verbales</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="font-medium mb-2">Communication non-verbale:</h3>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Contact visuel souvent différent (moins soutenu ou ressenti comme inconfortable)</li>
                            <li>Expression faciale parfois moins variée ou différente</li>
                            <li>Gestuelle et langage corporel atypiques</li>
                            <li>Difficultés à décoder les expressions et intentions d'autrui</li>
                            <li>Difficulté à comprendre les "règles non-écrites" des échanges sociaux</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Dans les interactions sociales:</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Préférence pour les interactions directes et explicites</li>
                          <li>Difficulté à "lire entre les lignes" dans les situations sociales</li>
                          <li>Fatigue plus importante après des interactions sociales (épuisement social)</li>
                          <li>Besoin de temps de solitude pour récupérer</li>
                          <li>Parfois, apparence de "maladresse sociale" due à des codes différents</li>
                          <li>Capacité à développer des relations profondes, mais souvent avec un nombre restreint de personnes</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-secondary">
                        <Lightbulb className="h-6 w-6 text-neuro-orange" />
                      </div>
                      <h2 className="text-2xl font-bold">Intérêts, comportements et sensorialité</h2>
                    </div>

                    <div className="space-y-6 text-muted-foreground">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="font-medium mb-2">Intérêts spécifiques:</h3>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Intérêts intenses et spécialisés</li>
                            <li>Connaissance approfondie dans des domaines spécifiques</li>
                            <li>Capacité d'attention exceptionnelle sur les sujets d'intérêt</li>
                            <li>Source de joie, de motivation et de régulation émotionnelle</li>
                            <li>Peuvent servir de base à un métier ou une passion</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="font-medium mb-2">Comportements et mouvements répétitifs:</h3>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Stéréotypies ou "stimming" (balancements, battements de mains...)</li>
                            <li>Rôle important dans l'autorégulation sensorielle et émotionnelle</li>
                            <li>Mouvements apaisants en situation de stress ou de joie intense</li>
                            <li>Rituels et routines qui apportent prévisibilité et sécurité</li>
                            <li>Besoin de structure et difficulté face aux changements imprévus</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-medium mb-2">Particularités sensorielles:</h3>
                        <p className="mb-4">
                          Plus de 90% des personnes autistes présentent des particularités sensorielles qui peuvent affecter n'importe quel sens:
                        </p>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="bg-secondary p-3 rounded-lg">
                            <h4 className="text-sm font-semibold mb-1">Hypersensibilité</h4>
                            <p className="text-xs">
                              Perception amplifiée des stimuli sensoriels, pouvant causer de l'inconfort ou de la douleur (bruits perçus comme assourdissants, lumières éblouissantes, textures désagréables...)
                            </p>
                          </div>
                          
                          <div className="bg-secondary p-3 rounded-lg">
                            <h4 className="text-sm font-semibold mb-1">Hyposensibilité</h4>
                            <p className="text-xs">
                              Perception réduite des stimuli sensoriels, pouvant amener à rechercher des sensations plus intenses (besoin de pressions fortes, de mouvements, de stimulations...)
                            </p>
                          </div>
                          
                          <div className="bg-secondary p-3 rounded-lg">
                            <h4 className="text-sm font-semibold mb-1">Perception fluctuante</h4>
                            <p className="text-xs">
                              Sensibilité qui varie selon le contexte, la fatigue, le stress (hypersensibilité un jour, hyposensibilité un autre)
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <p>
                        Ces particularités sensorielles peuvent expliquer de nombreux comportements: évitement de certains lieux, aliments ou textures, besoin de porter toujours les mêmes vêtements, réactions intenses à certains environnements, ou au contraire recherche de stimulations fortes.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-secondary">
                        <Users className="h-6 w-6 text-neuro-green" />
                      </div>
                      <h2 className="text-2xl font-bold">Manifestations selon l'âge et le genre</h2>
                    </div>

                    <div className="space-y-6 text-muted-foreground">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h3 className="font-medium mb-2">Petite enfance:</h3>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Regard atypique, attention conjointe différente</li>
                            <li>Réponse au prénom parfois absente</li>
                            <li>Retard ou particularités de langage</li>
                            <li>Intérêt spécifique pour certains objets</li>
                            <li>Mouvements répétitifs précoces</li>
                            <li>Réactions sensorielles marquées</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h3 className="font-medium mb-2">Enfance et adolescence:</h3>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Difficultés sociales plus apparentes</li>
                            <li>Intérêts spécifiques plus développés</li>
                            <li>Défis dans l'environnement scolaire</li>
                            <li>Conscience de la différence</li>
                            <li>Risque d'anxiété sociale</li>
                            <li>Développement de stratégies d'adaptation ou de masking</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h3 className="font-medium mb-2">Âge adulte:</h3>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Meilleure compréhension de soi</li>
                            <li>Développement de stratégies compensatoires</li>
                            <li>Défis professionnels spécifiques</li>
                            <li>Épuisement lié au masking</li>
                            <li>Recherche d'environnements adaptés</li>
                            <li>Construction d'une identité positive</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-medium mb-2">Différences selon le genre:</h3>
                        <p className="mb-4">
                          Historiquement, l'autisme était diagnostiqué davantage chez les garçons (ratio de 4:1), mais les recherches récentes montrent que cette différence reflète surtout un biais diagnostique:
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-secondary p-4 rounded-lg">
                            <h4 className="text-sm font-semibold mb-1">Présentation chez les filles/femmes</h4>
                            <ul className="list-disc pl-5 space-y-1 text-xs">
                              <li>Masking (camouflage social) souvent plus développé</li>
                              <li>Capacité d'imitation sociale plus forte</li>
                              <li>Intérêts spécifiques souvent plus socialement acceptables</li>
                              <li>Expression émotionnelle parfois plus communicative</li>
                              <li>Diagnostic souvent plus tardif</li>
                              <li>Coût énergétique élevé du camouflage</li>
                            </ul>
                          </div>
                          
                          <div className="bg-muted p-4 rounded-lg">
                            <h4 className="text-sm font-semibold mb-1">Impact du masking</h4>
                            <p className="text-xs">
                              Le "masking" (camouflage) est l'effort conscient ou inconscient de dissimuler les traits autistiques pour s'adapter aux attentes sociales. Cette stratégie, plus fréquente chez les femmes et les personnes assignées femmes à la naissance, a un coût:
                            </p>
                            <ul className="list-disc pl-5 space-y-1 text-xs mt-2">
                              <li>Épuisement émotionnel et physique</li>
                              <li>Risque accru d'anxiété et dépression</li>
                              <li>Perte du sentiment d'identité</li>
                              <li>Retard de diagnostic et de soutien adapté</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="diagnostic">
              <div className="max-w-4xl mx-auto space-y-8">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-secondary">
                        <BrainCircuit className="h-6 w-6 text-neuro-purple" />
                      </div>
                      <h2 className="text-2xl font-bold">Le parcours diagnostique</h2>
                    </div>

                    <div className="space-y-6 text-muted-foreground">
                      <p>
                        Le diagnostic de TSA est un processus complexe qui demande l'intervention de professionnels spécialisés. Il repose sur l'observation clinique et l'utilisation d'outils standardisés.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="border-l-4 border-neuro-blue p-4">
                          <h3 className="font-medium mb-1">Quand consulter?</h3>
                          <p className="text-sm">
                            Chez l'enfant: retard de langage, difficultés d'interaction, intérêts restreints, sensibilités sensorielles marquées, comportements répétitifs.<br />
                            Chez l'adulte: sentiment de décalage social persistant, épuisement après interactions, intérêts intenses, sensibilités sensorielles, besoin de routines.
                          </p>
                        </div>
                        
                        <div className="border-l-4 border-neuro-green p-4">
                          <h3 className="font-medium mb-1">Professionnels impliqués</h3>
                          <p className="text-sm">
                            Le diagnostic implique généralement une équipe pluridisciplinaire: psychiatre ou neuropédiatre, psychologue, orthophoniste, psychomotricien, ergothérapeute... 
                            En France, les Centres Ressources Autisme (CRA) sont des structures spécialisées dans le diagnostic.
                          </p>
                        </div>
                        
                        <div className="border-l-4 border-neuro-orange p-4">
                          <h3 className="font-medium mb-1">Étapes du diagnostic</h3>
                          <ol className="list-decimal pl-5 space-y-1 text-sm">
                            <li>Entretien initial et recueil d'informations</li>
                            <li>Observations cliniques directes</li>
                            <li>Tests standardisés (ADOS, ADI-R...)</li>
                            <li>Évaluations complémentaires (langage, sensorielle, cognitive...)</li>
                            <li>Synthèse pluridisciplinaire</li>
                            <li>Restitution du diagnostic et élaboration d'un projet d'accompagnement</li>
                          </ol>
                        </div>
                      </div>
                      
                      <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Le diagnostic à l'âge adulte</h3>
                        <p className="text-sm mb-4">
                          De nombreuses personnes autistes reçoivent un diagnostic tardif, souvent à l'âge adulte. Ce phénomène est particulièrement fréquent:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Chez les femmes, en raison de présentations atypiques et du masking</li>
                          <li>Chez les personnes présentant peu de déficits intellectuels ou verbaux</li>
                          <li>Chez celles ayant développé d'excellentes stratégies compensatoires</li>
                          <li>Chez les personnes nées avant une meilleure reconnaissance de l'autisme</li>
                        </ul>
                        <p className="text-sm mt-4">
                          Le diagnostic à l'âge adulte peut être libérateur, offrant une explication à des difficultés vécues depuis longtemps et ouvrant la porte à des adaptations appropriées.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-secondary">
                        <MessageSquare className="h-6 w-6 text-neuro-red" />
                      </div>
                      <h2 className="text-2xl font-bold">Conditions fréquemment associées</h2>
                    </div>

                    <div className="space-y-6 text-muted-foreground">
                      <p>
                        L'autisme s'accompagne souvent d'autres conditions neurologiques ou psychologiques, ce qu'on appelle la "comorbidité". Ces associations ne sont pas des complications de l'autisme, mais des conditions qui peuvent coexister:
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="font-medium mb-2">Conditions neurodéveloppementales:</h3>
                          <ul className="list-disc pl-5 space-y-1">
                            <li><span className="font-medium">TDAH</span> - Présent chez 30-60% des personnes autistes</li>
                            <li><span className="font-medium">Troubles DYS</span> - Dyspraxie, dyslexie, dyscalculie...</li>
                            <li><span className="font-medium">Troubles du langage</span> - Dysphasie, retard de langage</li>
                            <li><span className="font-medium">Épilepsie</span> - Plus fréquente que dans la population générale</li>
                            <li><span className="font-medium">Syndromes génétiques</span> - X fragile, Prader-Willi...</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="font-medium mb-2">Conditions psychologiques:</h3>
                          <ul className="list-disc pl-5 space-y-1">
                            <li><span className="font-medium">Anxiété</span> - Très répandue, notamment l'anxiété sociale</li>
                            <li><span className="font-medium">Dépression</span> - Souvent liée aux difficultés sociales et à l'inadaptation de l'environnement</li>
                            <li><span className="font-medium">TOC</span> - Obsessions et compulsions distinctes des intérêts autistiques</li>
                            <li><span className="font-medium">Troubles alimentaires</span> - Souvent liés aux sensibilités sensorielles</li>
                            <li><span className="font-medium">Troubles du sommeil</span> - Difficultés d'endormissement, réveils nocturnes</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-medium mb-2">L'impact du stress environnemental</h3>
                        <p className="text-sm">
                          De nombreuses comorbidités psychologiques (anxiété, dépression) ne sont pas intrinsèques à l'autisme, mais résultent du stress chronique lié à:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
                          <li>La navigation constante dans un monde conçu pour les neurotypiques</li>
                          <li>Les expériences de rejet, d'incompréhension ou de harcèlement</li>
                          <li>L'effort permanent d'adaptation (masking)</li>
                          <li>Les surcharges sensorielles quotidiennes</li>
                          <li>La pression pour se conformer aux normes sociales</li>
                        </ul>
                        <p className="text-sm mt-2">
                          Ces difficultés sont souvent réduites lorsque l'environnement est adapté et que la personne autiste est comprise et acceptée.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="vivre">
              <div className="max-w-4xl mx-auto space-y-8">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-secondary">
                        <HeartPulse className="h-6 w-6 text-neuro-red" />
                      </div>
                      <h2 className="text-2xl font-bold">Approches d'accompagnement</h2>
                    </div>

                    <div className="space-y-6 text-muted-foreground">
                      <p>
                        L'accompagnement des personnes autistes a considérablement évolué ces dernières décennies. Les approches contemporaines se concentrent davantage sur le bien-être, l'autodétermination et l'adaptation de l'environnement.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="border-l-4 border-neuro-green p-4">
                          <h3 className="font-medium mb-1">Approches recommandées</h3>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li><span className="font-medium">Adaptations sensorielles</span> - Modification de l'environnement pour réduire les surcharges</li>
                            <li><span className="font-medium">Communication adaptée</span> - PECS, langage des signes, communication facilitée</li>
                            <li><span className="font-medium">Thérapies comportementales développementales</span> - Denver, ESDM (pour jeunes enfants)</li>
                            <li><span className="font-medium">Apprentissage des compétences sociales</span> - Groupes d'habiletés sociales, jeux de rôle</li>
                            <li><span className="font-medium">Accompagnement psycho-éducatif</span> - Comprendre l'autisme et développer l'autonomie</li>
                            <li><span className="font-medium">Thérapies sensorielles</span> - Intégration sensorielle, ergothérapie</li>
                          </ul>
                        </div>
                        
                        <div className="border-l-4 border-neuro-red p-4">
                          <h3 className="font-medium mb-1">Approches controversées ou dépassées</h3>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li><span className="font-medium">ABA traditionnelle</span> - Critiquée pour son approche normalisante et son impact psychologique</li>
                            <li><span className="font-medium">Packing</span> - Sans fondement scientifique, potentiellement traumatisante</li>
                            <li><span className="font-medium">Chélation</span> - Dangereuse, basée sur des théories réfutées</li>
                            <li><span className="font-medium">Régimes restrictifs</span> - Sans preuves solides (sauf en cas d'allergies avérées)</li>
                            <li><span className="font-medium">Thérapies visant à "guérir" l'autisme</span> - L'autisme n'étant pas une maladie</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Principes d'un accompagnement respectueux</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Respecter la dignité et l'autodétermination de la personne</li>
                          <li>S'adapter aux forces et besoins individuels plutôt qu'imposer un modèle unique</li>
                          <li>Inclure la personne autiste dans les décisions concernant son accompagnement</li>
                          <li>Viser le bien-être et l'épanouissement, pas seulement la conformité sociale</li>
                          <li>Prendre en compte l'expérience vécue des personnes autistes</li>
                          <li>Adapter l'environnement plutôt que d'attendre que la personne s'y conforme</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-secondary">
                        <Users className="h-6 w-6 text-neuro-blue" />
                      </div>
                      <h2 className="text-2xl font-bold">Vivre avec l'autisme au quotidien</h2>
                    </div>

                    <div className="space-y-6 text-muted-foreground">
                      <p>
                        L'expérience autistique varie considérablement d'une personne à l'autre. Cependant, certaines stratégies peuvent améliorer la qualité de vie quotidienne:
                      </p>
                      
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-secondary p-4 rounded-lg">
                          <h3 className="font-medium mb-2">Environnement</h3>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Créer des espaces sensoriellement adaptés</li>
                            <li>Réduire les sources de stimulation excessive</li>
                            <li>Organiser l'espace de façon prévisible</li>
                            <li>Utiliser des repères visuels</li>
                            <li>Prévoir des zones de repli</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h3 className="font-medium mb-2">Organisation</h3>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Établir des routines structurantes</li>
                            <li>Utiliser des plannings visuels</li>
                            <li>Préparer les transitions et changements</li>
                            <li>Décomposer les tâches complexes</li>
                            <li>Prévoir des temps de récupération</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h3 className="font-medium mb-2">Autorégulation</h3>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Identifier ses déclencheurs de stress</li>
                            <li>Pratiquer le stimming librement</li>
                            <li>Utiliser des objets sensoriels apaisants</li>
                            <li>Reconnaître les signes de surcharge</li>
                            <li>S'accorder des pauses préventives</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-medium mb-2">Dans différents contextes de vie:</h3>
                        <div className="space-y-4">
                          <div className="border-l-4 border-neuro-purple p-4">
                            <h4 className="font-medium mb-1">Éducation et scolarité</h4>
                            <p className="text-sm">
                              Aménagements scolaires (AESH, PPS, PAP), outils de compensation, adaptations pédagogiques, 
                              environnement sensoriel adapté, prévention du harcèlement, valorisation des forces spécifiques.
                            </p>
                          </div>
                          
                          <div className="border-l-4 border-neuro-orange p-4">
                            <h4 className="font-medium mb-1">Vie professionnelle</h4>
                            <p className="text-sm">
                              Reconnaissance de la qualité de travailleur handicapé (RQTH), aménagements du poste de travail,
                              environnement sensoriel adapté, communication claire et explicite, valorisation des compétences spécifiques,
                              télétravail quand possible.
                            </p>
                          </div>
                          
                          <div className="border-l-4 border-neuro-blue p-4">
                            <h4 className="font-medium mb-1">Relations sociales et familiales</h4>
                            <p className="text-sm">
                              Communication explicite, respect des besoins de solitude, anticipation des situations sociales,
                              acceptation des différences de fonctionnement, groupes de pairs ou d'intérêt, équilibre entre
                              socialisation et récupération.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Le rôle de la communauté autistique</h3>
                        <p className="text-sm mb-3">
                          La communauté autistique joue un rôle crucial dans le mouvement pour la reconnaissance et l'acceptation:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Partage d'expériences et de stratégies entre pairs</li>
                          <li>Création d'une culture et d'une identité autistiques positives</li>
                          <li>Militantisme pour des droits et des politiques adaptées</li>
                          <li>Développement de concepts comme le neurodroit et la neurodiversité</li>
                          <li>Sensibilisation et éducation du grand public</li>
                        </ul>
                        <p className="text-sm mt-3">
                          La devise "Rien sur nous sans nous" symbolise l'importance de l'implication des personnes autistes
                          dans les décisions, recherches et politiques qui les concernent.
                        </p>
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

export default TSA;

