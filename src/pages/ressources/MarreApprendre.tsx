import React from 'react';
import { ArrowLeft, BookOpen, Brain, Lightbulb, Target, Zap, Rocket, Star, Trophy, Heart, Eye, Key, Mountain, Glasses, Dumbbell, Wrench, List, TrendingUp, Compass, Bird, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

/**
 * MarreApprendre component - Displays the "Marre d'Apprendre" article
 * A motivational text about learning and education for young people
 */
const MarreApprendre: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header avec bouton retour */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate('/ressources')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux ressources
          </Button>
        </div>

        {/* Titre principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="mb-8 border-l-4 border-l-purple-500">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center flex items-center justify-center gap-3">
                <BookOpen className="h-8 w-8 text-purple-600" />
                Marre d'Apprendre 😫 ? Et si c'était la Clé 🔑 de Toutes les Aventures 🚀 ?
              </CardTitle>
              <p className="text-center text-sm text-muted-foreground mt-2">
                Par Geoffroy Streit - 2025
              </p>
            </CardHeader>
          </Card>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Card className="mb-6">
            <CardContent className="pt-6 space-y-4">
              <p className="text-lg font-medium text-purple-700 dark:text-purple-300">
                Aujourd'hui, je partage avec vous un texte destiné à faire prendre de conscience aux 'jeunes' et étudiants en perte de sens 💡 s'interrogeant sur l'intérêt d'apprendre ❓, d'étudier 📚, de suivre les cours à l'école 🏫...
              </p>
              <p>
                Ce texte s'adresse à ceux qui ne voient aucun intérêt dans certaines matières 🤷‍♂️, qui se découragent vite devant un peu de difficulté 😥, qui ont du mal à se projeter et privilégient la gratification immédiate ⚡, recourent par réflexe à la facilité d'une recherche Google 💻 ou requête IA 🤖...
              </p>
              <p className="text-sm text-muted-foreground italic">
                Voici mon texte dans son état actuel, revu, corrigé et simplifié 3 fois depuis (trop peut être 🤔 ?), pour rester accessible et pas trop rébarbatif 😊 :
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Intro : On se comprend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                Intro : On se comprend... <span className="text-sm font-normal text-muted-foreground">(accrocher et valider leurs sentiments)</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg">
                "Salut l'aventurier/ère de la connaissance 👋 (même si tu ne le sais pas encore !)
              </p>
              <p>
                On sait, parfois l'école, ça semble long ⏳. Les cours, les devoirs... tu te demandes à quoi ça sert vraiment, surtout quand tu as ton téléphone 📱 à portée de main pour trouver une réponse en 2 secondes.
              </p>
              <p>
                Tu te dis peut-être : 'Pourquoi m'embêter à apprendre des trucs par cœur alors que Google existe ?' ou 'Les maths, la physique, à quoi ça va me servir plus tard ? C'est trop compliqué !' 🤯
              </p>
              <p className="font-medium text-purple-600 dark:text-purple-300">
                C'est normal de penser ça. La facilité, c'est tentant. Mais imagine un instant que tu passes à côté d'un truc énorme, d'un véritable super-pouvoir... 🦸"
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Partie 1 : Apprendre, c'est Quoi au Juste ? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Glasses className="h-5 w-5 text-blue-500" />
                Partie 1 : Apprendre, c'est Quoi au Juste ? <span className="text-sm font-normal text-muted-foreground">(déconstruction des Idées reçues)</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Eye className="h-4 w-4 text-green-500" />
                  Plus que du "Par Cœur" : C'est Comprendre le Monde ! 🌍
                </h4>
                <p className="mb-2">
                  Apprendre, ce n'est pas juste stocker des infos comme un disque dur. C'est comme recevoir une paire de lunettes magiques 👓✨ qui te permet de voir des choses que les autres ne voient pas, de comprendre comment le monde fonctionne.
                </p>
                <p>
                  Chaque matière (maths, physique, histoire, SVT, langues, économie, arts plastiques, sport, ...) est une nouvelle couleur pour tes lunettes 🌈. Plus tu as de couleurs, plus le monde devient riche et intéressant.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Dumbbell className="h-4 w-4 text-orange-500" />
                  Ton Cerveau : Un Muscle à Entraîner ! 🧠💪
                </h4>
                <p className="mb-2">
                  Ton cerveau, c'est un peu comme un muscle. Plus tu l'utilises pour apprendre, plus il devient fort, rapide, et capable de retenir des choses.
                </p>
                <p className="mb-2">
                  La mémoire, ça se travaille ! Au début, c'est dur, comme quand on commence un nouveau sport. Mais avec de l'entraînement (réviser, faire des exercices), ça devient de plus en plus facile.
                </p>
                <p>
                  Il existe même des techniques pour mieux apprendre et retenir (mind maps, fiches, répétition à intervalles, parler de ce que tu as appris...).
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Wrench className="h-4 w-4 text-purple-500" />
                  Google et l'IA : Des Outils, Pas des Cerveaux de Remplacement. 🛠️
                </h4>
                <p className="mb-2">
                  Oui, Google, les calculatrices, et même l'intelligence artificielle sont des outils super pratiques. Mais un outil, ça sert à quoi si tu ne sais pas comment t'en servir correctement, ou pourquoi tu l'utilises ?
                </p>
                <p className="mb-2">
                  Si tu demandes à une IA de faire tes devoirs sans comprendre, c'est comme demander à quelqu'un de jouer à un jeu vidéo à ta place. Tu ne gagnes aucune compétence, aucune satisfaction réelle 📉.
                </p>
                <p>
                  Pour poser les bonnes questions à Google ou à une IA, et surtout pour comprendre si la réponse est pertinente ou bidon, tu as besoin de tes propres connaissances de base. Sinon, tu es juste dépendant.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Partie 2 : L'Escalier de la Connaissance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <List className="h-5 w-5 text-indigo-500" />
                Partie 2 : L'Escalier de la Connaissance : Étape par Étape vers des Super-Pouvoirs 🪜 <span className="text-sm font-normal text-muted-foreground">(L'Importance des Bases et de la Progression)</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Mountain className="h-4 w-4 text-gray-600" />
                  Les Fondations Solides : Sans Bases, Tout s'Écroule.
                </h4>
                <p className="mb-2">
                  Imagine que savoir des choses, c'est comme construire une super cabane, une fusée, ou même un monde dans un jeu vidéo. Tu ne commences pas par le toit ou les options de personnalisation avancées.
                </p>
                <p className="mb-2">
                  Tu commences par les fondations : lire 📖, écrire ✍️, compter 🔢. Ce sont les bases de TOUT. Si elles ne sont pas solides, tout ce que tu essaieras de construire par-dessus sera bancal et risque de s'effondrer.
                </p>
                <p>
                  C'est pour ça que les premières années d'école sont si importantes, même si ça semble répétitif.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  Monter les Marches : Devenir de Plus en Plus Fort.
                </h4>
                <p className="mb-2">
                  Chaque nouvelle connaissance de base (une règle de grammaire, une formule de maths simple, un concept en physique, une date clé en histoire) est une marche.
                </p>
                <p className="mb-2">
                  Une fois que tu maîtrises cette marche, tu peux passer à la suivante, qui te semblera peut-être un peu plus haute, un peu plus complexe. Par exemple, comprendre comment fonctionne une phrase simple (sujet-verbe-complément) te permet ensuite de comprendre des textes plus longs et plus intéressants. Connaître tes tables de multiplication te permet de résoudre des problèmes de pourcentage ou de proportionnalité bien plus vite.
                </p>
                <p>
                  C'est un peu comme dans un jeu 🎮 : tu finis un niveau pour débloquer le suivant, qui est plus challengeant mais aussi plus gratifiant.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Eye className="h-4 w-4 text-blue-600" />
                  Voir Plus Loin à Chaque Étage : De Nouvelles Perspectives 🔭.
                </h4>
                <p className="mb-2">
                  Plus tu montes les marches de cet escalier de la connaissance, plus ta vision du monde s'élargit.
                </p>
                <p className="mb-2">
                  Tu commences à voir des liens entre les choses 🔗, des connexions invisibles pour ceux qui sont restés en bas.
                </p>
                <p className="mb-2">
                  Par exemple, comprendre un peu de physique et de chimie t'aide à mieux comprendre la SVT (comment fonctionne ton corps, les plantes...). Comprendre l'histoire t'aide à mieux comprendre le monde d'aujourd'hui. Parler une autre langue t'ouvre à une autre culture, une autre façon de penser.
                </p>
                <p>
                  Ce sont des portes qui s'ouvrent 🚪, des possibilités que tu n'aurais même pas pu imaginer avant.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Partie 3 : Du Savoir à la Compréhension */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-yellow-500" />
                Partie 3 : Du Savoir à la Compréhension, puis à la Maîtrise et à la Créativité <span className="text-sm font-normal text-muted-foreground">(Les Niveaux Supérieurs)</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Zap className="h-4 w-4 text-yellow-600" />
                  De l'Apprentissage par Cœur au "Tilt" : Quand Ça Fait Sens 💡!
                </h4>
                <p className="mb-2">
                  Au début, on apprend souvent des faits, des règles. Puis, à force de les utiliser, de faire des exercices, quelque chose se passe : le "tilt" ! Tu ne te contentes plus de savoir, tu commences à comprendre le pourquoi du comment.
                </p>
                <p className="mb-2">
                  Les maths ne sont plus juste des chiffres, mais une logique. L'histoire n'est plus une liste de dates, mais une suite d'événements qui s'expliquent. La physique décrit le monde qui t'entoure.
                </p>
                <p>
                  Ce moment où ça fait "sens", c'est super satisfaisant ! 🎉
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Target className="h-4 w-4 text-red-600" />
                  De la Compréhension à la Pratique : Savoir Faire.
                </h4>
                <p className="mb-2">
                  Une fois que tu as compris, tu peux commencer à faire des choses toi-même.
                </p>
                <p>
                  Résoudre des problèmes plus complexes, écrire des textes plus riches, analyser une situation, débattre avec des arguments solides, réparer un objet, cuisiner une recette compliquée, comprendre les enjeux économiques...
                </p>
                <p>
                  C'est là que l'apprentissage devient concret et utile dans ta vie de tous les jours.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Star className="h-4 w-4 text-purple-600" />
                  De la Maîtrise à l'Expertise : Devenir une Référence 🌟.
                </h4>
                <p className="mb-2">
                  Si tu continues à approfondir un domaine qui te passionne, tu peux devenir un expert. Les gens te reconnaîtront pour tes connaissances et tes compétences.
                </p>
                <p>
                  Tu auras un "savoir-faire" que peu de gens possèdent. C'est valorisant et ça ouvre des opportunités incroyables (métiers passionnants 💼, projets stimulants...).
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Brain className="h-4 w-4 text-pink-600" />
                  Le Graal : La Créativité et l'Innovation 🎨.
                </h4>
                <p className="mb-2">
                  Et c'est là que la magie opère vraiment. Quand tu maîtrises plusieurs domaines, même un peu, ton cerveau commence à faire des connexions inédites.
                </p>
                <p className="mb-2">
                  Tu peux prendre une idée d'un domaine (par exemple, la botanique) et l'appliquer à un autre (l'architecture, pour créer des bâtiments plus écologiques). Tu peux utiliser tes connaissances en histoire et en économie pour mieux anticiper les problèmes de demain.
                </p>
                <p className="mb-2">
                  C'est ça, innover : créer du neuf à partir de l'existant, améliorer les choses, imaginer le futur. Et plus ton "catalogue" de connaissances est vaste et varié, plus ton potentiel de créativité est immense.
                </p>
                <p>
                  Pense aux grands inventeurs, artistes, scientifiques : ils avaient tous une soif d'apprendre insatiable !
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Partie 4 : Pourquoi Persévérer ? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-gold-500" />
                Partie 4 : Pourquoi Persévérer ? Les Cadeaux de l'Apprentissage 🎁 <span className="text-sm font-normal text-muted-foreground">(Motivation et Vision à Long Terme)</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Eye className="h-4 w-4 text-teal-600" />
                  Ouvrir son Esprit : Un Monde de Possibilités.
                </h4>
                <p className="mb-2">
                  Apprendre, c'est refuser de rester enfermé dans une petite boîte d'ignorance. C'est s'ouvrir à la richesse du monde, à la diversité des idées, des cultures.
                </p>
                <p>
                  Tu deviens plus critique, capable de te forger ta propre opinion au lieu de gober tout ce qu'on te dit.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Compass className="h-4 w-4 text-blue-600" />
                  Donner du Sens à Ta Vie : Trouver Ta Voie 🧭.
                </h4>
                <p className="mb-2">
                  En découvrant différentes matières, différents sujets, tu vas peut-être trouver une passion, quelque chose qui te fait vibrer 🔥 et te donne envie de te lever le matin.
                </p>
                <p>
                  Cela t'aidera à choisir ce que tu veux faire plus tard, pas par défaut, mais par véritable intérêt.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Bird className="h-4 w-4 text-sky-600" />
                  La Liberté et l'Indépendance 🕊️.
                </h4>
                <p className="mb-2">
                  Savoir, c'est pouvoir. Comprendre te rend moins manipulable, plus autonome dans tes choix et dans ta vie. Tu dépends moins des autres pour comprendre le monde ou résoudre tes problèmes.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Dumbbell className="h-4 w-4 text-orange-600" />
                  Surmonter les Difficultés : La Fierté du Travail Accompli 💪.
                </h4>
                <p className="mb-2">
                  Oui, apprendre demande des efforts. Il y aura des moments de découragement. Mais la satisfaction de comprendre enfin quelque chose de difficile, de réussir un exercice compliqué après avoir lutté, c'est une sensation géniale ! C'est la preuve que tu es capable.
                </p>
                <p>
                  Chaque petit effort te rend plus fort, plus confiant.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Card className="mb-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Rocket className="h-5 w-5 text-purple-600" />
                Conclusion : À Toi de Jouer !
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg font-medium">
                "Alors, la prochaine fois que tu seras en cours ou devant tes devoirs, essaie de voir les choses différemment.
              </p>
              <p>
                Ne vois pas ça comme une corvée, mais comme une séance d'entraînement pour ton super-cerveau 🧠, comme une quête pour débloquer de nouveaux niveaux de compréhension et de nouvelles visions du monde.
              </p>
              <p>
                Chaque leçon, chaque exercice est une petite brique pour construire la personne incroyable, compétente et créative que tu peux devenir ✨.
              </p>
              <p className="text-xl font-semibold text-indigo-800 mb-4">
                Ce n'est pas toujours facile, mais le jeu en vaut la chandelle.
              </p>
              <p>
                Le pouvoir d'apprendre est déjà en toi. Il ne tient qu'à toi de l'activer et de voir jusqu'où il peut t'emmener.
              </p>
              <p className="text-xl font-bold text-indigo-600">
                Prêt(e) à relever le défi et à découvrir tes propres super-pouvoirs ? 🚀"
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Note de l'auteur */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <Card className="mb-6 bg-gray-50 dark:bg-gray-800/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-gray-600" />
                Note de l'auteur
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Ce texte, rédigé initialement pour mon fils, s'inscrit dans une série d'articles et ressources 
                que je réunis dans la rubrique ressources {'>'} blog, parentalité et apprentissage de mon site{' '}
                <a href="https://neuro-diversite.vercel.app" className="text-indigo-600 hover:text-indigo-800 underline" target="_blank" rel="noopener noreferrer">
                  https://neuro-diversite.vercel.app
                </a>{' '}
                (propos certes général sur l'apprentissage destiné aux enfants, mais s'appliquant aussi aux neurodivers 🧠🌱, 
                d'autant plus que pour bon nombre d'entre nous / eux, l'apprentissage est parfois bien plus pénible / décourageant).
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                J'essaie encore d'enrichir un peu le concept d'apprentissage / bénéfices / niveau de conscience / compréhension / maîtrise / créativité / liaison - parallèle aux autres matières & domaines...
                Peut être un bon schéma / graphique pour + d'efficacité 📊.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                N'hésitez pas à me donner votre avis 💬
              </p>
              
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {['#Apprentissage', '#motivation', '#parentalité', '#mémoire', '#compréhension', '#persévérance', '#école', '#jeunesse', '#encouragement', '#Intérêt', '#sens', '#apprendre', '#raison', '#facilité'].map((tag, index) => (
                  <span key={index} className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm dark:bg-indigo-900/30 dark:text-indigo-300">
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default MarreApprendre;