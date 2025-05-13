
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Lightbulb, BookOpen, Users, HelpCircle, MessageSquare } from 'lucide-react';

const APropos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="bg-muted py-12 md:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                À <span className="neuro-gradient-text">propos</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Découvrez l'origine, la mission et la philosophie derrière NeuroDiversité Explorer
              </p>
            </div>
          </div>
        </div>

        <div className="container py-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-secondary">
                    <Heart className="h-6 w-6 text-neuro-red" />
                  </div>
                  <h2 className="text-2xl font-bold">Qui suis-je?</h2>
                </div>

                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Bonjour, je m'appelle Geoffroy Streit. Je ne suis ni médecin, ni neuropsychologue, mais un passionné profondément humain qui s'intéresse depuis de nombreuses années aux questions de neurodiversité.
                  </p>
                  
                  <p>
                    Mon parcours personnel a été marqué par mes propres défis neurodéveloppementaux - principalement des troubles dys et de mémoire - qui m'ont amené à développer une compréhension intime de ce que signifie naviguer dans un monde qui n'est pas toujours adapté à notre façon de fonctionner.
                  </p>
                  
                  <p>
                    Au fil des années, j'ai accompagné des enfants présentant des troubles dys en difficulté scolaire, en leur proposant des méthodes alternatives, une approche bienveillante de la communication, et en travaillant avec leurs familles pour une meilleure compréhension de ces particularités. Ces expériences m'ont profondément marqué et m'ont montré l'importance cruciale de l'information, de la sensibilisation et de l'adaptation de notre environnement.
                  </p>
                  
                  <p>
                    C'est cette volonté de partager mes connaissances et mon expérience qui m'a poussé à créer NeuroDiversité Explorer, avec beaucoup d'humilité et le désir sincère d'aider les autres.
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
                  <h2 className="text-2xl font-bold">Notre mission</h2>
                </div>

                <div className="space-y-4 text-muted-foreground">
                  <p>
                    NeuroDiversité Explorer est né d'une conviction profonde : l'information et la compréhension sont les premières étapes vers l'acceptation et l'inclusion. Notre mission se décline en plusieurs objectifs:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-secondary p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Informer</h3>
                      <p className="text-sm">
                        Fournir des informations accessibles, précises et à jour sur les différents aspects de la neurodiversité, en synthétisant les connaissances scientifiques actuelles et en les rendant compréhensibles par tous.
                      </p>
                    </div>
                    
                    <div className="bg-secondary p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Sensibiliser</h3>
                      <p className="text-sm">
                        Contribuer à faire évoluer les regards sur la neurodiversité, en mettant en lumière les forces et les contributions uniques des personnes neurodivergentes, au-delà des défis qu'elles peuvent rencontrer.
                      </p>
                    </div>
                    
                    <div className="bg-secondary p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Outiller</h3>
                      <p className="text-sm">
                        Proposer des ressources pratiques et des stratégies d'adaptation pour les personnes neurodivergentes, leurs proches, et les professionnels qui les accompagnent.
                      </p>
                    </div>
                    
                    <div className="bg-secondary p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Rassembler</h3>
                      <p className="text-sm">
                        Créer un espace bienveillant où chacun peut trouver des informations, partager son expérience et se sentir compris, quelle que soit sa façon de percevoir et d'interagir avec le monde.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-secondary">
                    <BookOpen className="h-6 w-6 text-neuro-blue" />
                  </div>
                  <h2 className="text-2xl font-bold">Notre philosophie</h2>
                </div>

                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Ce site s'inscrit dans une vision humaniste et progressive de la neurodiversité, guidée par plusieurs principes fondamentaux:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-neuro-purple p-4">
                      <h3 className="font-medium mb-1">La neurodiversité comme richesse</h3>
                      <p className="text-sm">
                        Nous considérons la diversité des fonctionnements cérébraux non comme un problème à résoudre, mais comme une variation naturelle et précieuse de l'expérience humaine, apportant des perspectives, des compétences et des sensibilités uniques à notre société.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-neuro-green p-4">
                      <h3 className="font-medium mb-1">Une approche centrée sur la personne</h3>
                      <p className="text-sm">
                        Nous reconnaissons que chaque individu est unique et que les étiquettes diagnostiques, bien qu'utiles pour comprendre certains aspects du fonctionnement, ne définissent jamais entièrement une personne. Nous favorisons une vision holistique qui prend en compte les forces, les intérêts et les aspirations de chacun.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-neuro-blue p-4">
                      <h3 className="font-medium mb-1">L'importance de l'environnement</h3>
                      <p className="text-sm">
                        Nous croyons fermement que les "handicaps" résultent souvent de l'inadaptation de l'environnement plutôt que des particularités de la personne. Plutôt que d'exiger que les individus neurodivergents s'adaptent en permanence, nous plaidons pour la création d'environnements plus inclusifs qui accueillent la diversité des fonctionnements.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-neuro-orange p-4">
                      <h3 className="font-medium mb-1">Le pouvoir de la compréhension mutuelle</h3>
                      <p className="text-sm">
                        Nous sommes convaincus que la compréhension de nos différentes façons de percevoir et d'interagir avec le monde est la clé pour construire une société plus empathique et inclusive, où chacun peut s'épanouir selon ses propres modalités.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-secondary">
                    <Users className="h-6 w-6 text-neuro-green" />
                  </div>
                  <h2 className="text-2xl font-bold">À qui s'adresse ce site?</h2>
                </div>

                <div className="space-y-4 text-muted-foreground">
                  <p>
                    NeuroDiversité Explorer a été conçu pour être une ressource accessible à tous, quelle que soit votre relation avec la neurodiversité:
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-secondary p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Personnes neurodivergentes</h3>
                      <p className="text-sm">
                        Que vous ayez récemment reçu un diagnostic, que vous soyez en questionnement, ou que vous viviez avec une condition neurodéveloppementale depuis longtemps, vous trouverez ici des informations pour mieux comprendre votre fonctionnement et des ressources pour vous épanouir.
                      </p>
                    </div>
                    
                    <div className="bg-secondary p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Proches et familles</h3>
                      <p className="text-sm">
                        Parents, conjoints, fratries, amis... Ce site vous aide à mieux comprendre la perspective de vos proches neurodivergents et vous propose des pistes pour les soutenir efficacement, tout en prenant soin de vous-même.
                      </p>
                    </div>
                    
                    <div className="bg-secondary p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Professionnels</h3>
                      <p className="text-sm">
                        Enseignants, employeurs, professionnels de santé et autres intervenants trouveront des ressources pour adapter leurs pratiques et créer des environnements plus inclusifs pour les personnes neurodivergentes.
                      </p>
                    </div>
                  </div>
                  
                  <p>
                    Quelle que soit votre situation, j'espère sincèrement que ce site vous apportera des éclairages utiles et vous accompagnera dans votre parcours de découverte et de compréhension de la neurodiversité.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-secondary">
                    <HelpCircle className="h-6 w-6 text-neuro-red" />
                  </div>
                  <h2 className="text-2xl font-bold">Limites et précautions</h2>
                </div>

                <div className="space-y-4 text-muted-foreground">
                  <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-500 mb-4">
                    <p className="font-semibold text-amber-700 dark:text-amber-300">
                      ⚠️ IMPORTANT : Ce site est actuellement en phase de développement. Plusieurs sections et fonctionnalités 
                      sont encore incomplètes. Les témoignages présentés sont fictifs, bien que conçus pour être cohérents
                      avec les expériences réelles des personnes neurodivergentes.
                    </p>
                  </div>
                  
                  <p>
                    En toute transparence, il est important de souligner certaines limites de ce site:
                  </p>
                  
                  <div className="bg-muted p-4 rounded-lg">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <span className="font-medium">Je ne suis pas un professionnel de santé</span> - Les informations présentées sur ce site sont le fruit de recherches personnelles, d'expériences vécues et de connaissances accumulées, mais ne constituent en aucun cas un avis médical ou clinique.
                      </li>
                      <li>
                        <span className="font-medium">Ce site ne remplace pas une consultation</span> - Les contenus proposés visent à informer et à sensibiliser, mais ne peuvent se substituer à l'avis d'un professionnel qualifié pour le diagnostic ou l'accompagnement.
                      </li>
                      <li>
                        <span className="font-medium">Un domaine en constante évolution</span> - Les connaissances sur la neurodiversité évoluent rapidement. Malgré mes efforts pour maintenir des informations à jour, certains contenus peuvent ne pas refléter les dernières avancées scientifiques.
                      </li>
                      <li>
                        <span className="font-medium">La diversité des expériences</span> - Chaque personne neurodivergente est unique. Les informations et stratégies présentées peuvent ne pas s'appliquer à toutes les situations ou à tous les individus.
                      </li>
                    </ul>
                  </div>
                  
                  <p>
                    Je m'engage à présenter les informations avec honnêteté, humilité et dans un souci constant de respect des personnes neurodivergentes. Si vous constatez des imprécisions ou avez des suggestions d'amélioration, n'hésitez pas à me contacter.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-secondary">
                    <MessageSquare className="h-6 w-6 text-neuro-purple" />
                  </div>
                  <h2 className="text-2xl font-bold">Un mot personnel</h2>
                </div>

                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Ce projet est né de ma propre expérience de la neurodiversité et de ma confrontation, parfois douloureuse, avec un monde qui n'était pas toujours prêt à m'accueillir tel que je suis. J'ai connu la détresse de ne pas comprendre pourquoi certaines choses, qui semblaient si faciles pour les autres, représentaient pour moi des défis insurmontables.
                  </p>
                  
                  <p>
                    Mais j'ai aussi découvert la force qui naît de la différence, la créativité qui émerge d'une perception atypique du monde, et la profondeur des connexions qui se tissent lorsque nous osons être authentiques dans nos différences.
                  </p>
                  
                  <p>
                    En créant ce site, je souhaite tendre la main à tous ceux qui se sentent différents, incompris ou isolés. Je veux vous dire que votre façon d'être au monde a de la valeur, que vos défis ne définissent pas votre potentiel, et qu'il est possible de trouver des chemins adaptés à votre neurotype unique.
                  </p>
                  
                  <p>
                    Je suis convaincu que nous avons tous à apprendre les uns des autres, et que c'est dans l'acceptation de nos différences que nous trouvons notre humanité commune. Si ce site peut contribuer, même modestement, à construire un monde plus accueillant pour la neurodiversité, alors il aura atteint son objectif.
                  </p>
                  
                  <p className="font-medium italic text-center mt-6">
                    Avec bienveillance et en célébration de nos différences,<br />
                    Geoffroy Streit
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>    </div>
  );
};

export default APropos;
