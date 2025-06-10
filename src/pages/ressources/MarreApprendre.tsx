import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ArrowLeft, Lightbulb, Target, Rocket, Star, Brain, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const MarreApprendre = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/ressources');
  };

  const sections = [
    {
      title: "Apprendre, c'est Quoi au Juste ?",
      subtitle: "Déconstruction des Idées reçues",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "from-yellow-400 to-orange-500",
      content: [
        {
          heading: "Plus que du \"Par Cœur\" : C'est Comprendre le Monde ! 🌍",
          text: "Apprendre, ce n'est pas juste stocker des infos comme un disque dur. C'est comme recevoir une paire de lunettes magiques 👓✨ qui te permet de voir des choses que les autres ne voient pas, de comprendre comment le monde fonctionne. Chaque matière (maths, physique, histoire, SVT, langues, économie, arts plastiques, sport, ...) est une nouvelle couleur pour tes lunettes 🌈. Plus tu as de couleurs, plus le monde devient riche et intéressant."
        },
        {
          heading: "Ton Cerveau : Un Muscle à Entraîner ! 🧠💪",
          text: "Ton cerveau, c'est un peu comme un muscle. Plus tu l'utilises pour apprendre, plus il devient fort, rapide, et capable de retenir des choses. La mémoire, ça se travaille ! Au début, c'est dur, comme quand on commence un nouveau sport. Mais avec de l'entraînement (réviser, faire des exercices), ça devient de plus en plus facile. Il existe même des techniques pour mieux apprendre et retenir (mind maps, fiches, répétition à intervalles, parler de ce que tu as appris...)."
        },
        {
          heading: "Google et l'IA : Des Outils, Pas des Cerveaux de Remplacement. 🛠️",
          text: "Oui, Google, les calculatrices, et même l'intelligence artificielle sont des outils super pratiques. Mais un outil, ça sert à quoi si tu ne sais pas comment t'en servir correctement, ou pourquoi tu l'utilises ? Si tu demandes à une IA de faire tes devoirs sans comprendre, c'est comme demander à quelqu'un de jouer à un jeu vidéo à ta place. Tu ne gagnes aucune compétence, aucune satisfaction réelle 📉. Pour poser les bonnes questions à Google ou à une IA, et surtout pour comprendre si la réponse est pertinente ou bidon, tu as besoin de tes propres connaissances de base. Sinon, tu es juste dépendant."
        }
      ]
    },
    {
      title: "L'Escalier de la Connaissance",
      subtitle: "Étape par Étape vers des Super-Pouvoirs",
      icon: <Target className="w-6 h-6" />,
      color: "from-blue-400 to-purple-500",
      content: [
        {
          heading: "Les Fondations Solides : Sans Bases, Tout s'Écroule.",
          text: "Imagine que savoir des choses, c'est comme construire une super cabane, une fusée, ou même un monde dans un jeu vidéo. Tu ne commences pas par le toit ou les options de personnalisation avancées. Tu commences par les fondations : lire 📖, écrire ✍️, compter 🔢. Ce sont les bases de TOUT. Si elles ne sont pas solides, tout ce que tu essaieras de construire par-dessus sera bancal et risque de s'effondrer. C'est pour ça que les premières années d'école sont si importantes, même si ça semble répétitif."
        },
        {
          heading: "Monter les Marches : Devenir de Plus en Plus Fort.",
          text: "Chaque nouvelle connaissance de base (une règle de grammaire, une formule de maths simple, un concept en physique, une date clé en histoire) est une marche. Une fois que tu maîtrises cette marche, tu peux passer à la suivante, qui te semblera peut-être un peu plus haute, un peu plus complexe. Par exemple, comprendre comment fonctionne une phrase simple (sujet-verbe-complément) te permet ensuite de comprendre des textes plus longs et plus intéressants. Connaître tes tables de multiplication te permet de résoudre des problèmes de pourcentage ou de proportionnalité bien plus vite. C'est un peu comme dans un jeu 🎮 : tu finis un niveau pour débloquer le suivant, qui est plus challengeant mais aussi plus gratifiant."
        },
        {
          heading: "Voir Plus Loin à Chaque Étage : De Nouvelles Perspectives 🔭",
          text: "Plus tu montes les marches de cet escalier de la connaissance, plus ta vision du monde s'élargit. Tu commences à voir des liens entre les choses 🔗, des connexions invisibles pour ceux qui sont restés en bas. Par exemple, comprendre un peu de physique et de chimie t'aide à mieux comprendre la SVT (comment fonctionne ton corps, les plantes...). Comprendre l'histoire t'aide à mieux comprendre le monde d'aujourd'hui. Parler une autre langue t'ouvre à une autre culture, une autre façon de penser. Ce sont des portes qui s'ouvrent 🚪, des possibilités que tu n'aurais même pas pu imaginer avant."
        }
      ]
    },
    {
      title: "Du Savoir à la Maîtrise",
      subtitle: "Les Niveaux Supérieurs",
      icon: <Star className="w-6 h-6" />,
      color: "from-green-400 to-teal-500",
      content: [
        {
          heading: "De l'Apprentissage par Cœur au \"Tilt\" : Quand Ça Fait Sens 💡!",
          text: "Au début, on apprend souvent des faits, des règles. Puis, à force de les utiliser, de faire des exercices, quelque chose se passe : le \"tilt\" ! Tu ne te contentes plus de savoir, tu commences à comprendre le pourquoi du comment. Les maths ne sont plus juste des chiffres, mais une logique. L'histoire n'est plus une liste de dates, mais une suite d'événements qui s'expliquent. La physique décrit le monde qui t'entoure. Ce moment où ça fait \"sens\", c'est super satisfaisant ! 🎉"
        },
        {
          heading: "De la Compréhension à la Pratique : Savoir Faire.",
          text: "Une fois que tu as compris, tu peux commencer à faire des choses toi-même. Résoudre des problèmes plus complexes, écrire des textes plus riches, analyser une situation, débattre avec des arguments solides, réparer un objet, cuisiner une recette compliquée, comprendre les enjeux économiques... C'est là que l'apprentissage devient concret et utile dans ta vie de tous les jours."
        },
        {
          heading: "De la Maîtrise à l'Expertise : Devenir une Référence 🌟",
          text: "Si tu continues à approfondir un domaine qui te passionne, tu peux devenir un expert. Les gens te reconnaîtront pour tes connaissances et tes compétences. Tu auras un \"savoir-faire\" que peu de gens possèdent. C'est valorisant et ça ouvre des opportunités incroyables (métiers passionnants 💼, projets stimulants...)."
        },
        {
          heading: "Le Graal : La Créativité et l'Innovation 🎨",
          text: "Et c'est là que la magie opère vraiment. Quand tu maîtrises plusieurs domaines, même un peu, ton cerveau commence à faire des connexions inédites. Tu peux prendre une idée d'un domaine (par exemple, la botanique) et l'appliquer à un autre (l'architecture, pour créer des bâtiments plus écologiques). Tu peux utiliser tes connaissances en histoire et en économie pour mieux anticiper les problèmes de demain. C'est ça, innover : créer du neuf à partir de l'existant, améliorer les choses, imaginer le futur. Et plus ton \"catalogue\" de connaissances est vaste et varié, plus ton potentiel de créativité est immense. Pense aux grands inventeurs, artistes, scientifiques : ils avaient tous une soif d'apprendre insatiable !"
        }
      ]
    },
    {
      title: "Pourquoi Persévérer ?",
      subtitle: "Les Cadeaux de l'Apprentissage",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-purple-400 to-pink-500",
      content: [
        {
          heading: "Ouvrir son Esprit : Un Monde de Possibilités.",
          text: "Apprendre, c'est refuser de rester enfermé dans une petite boîte d'ignorance. C'est s'ouvrir à la richesse du monde, à la diversité des idées, des cultures. Tu deviens plus critique, capable de te forger ta propre opinion au lieu de gober tout ce qu'on te dit."
        },
        {
          heading: "Donner du Sens à Ta Vie : Trouver Ta Voie 🧭",
          text: "En découvrant différentes matières, différents sujets, tu vas peut-être trouver une passion, quelque chose qui te fait vibrer 🔥 et te donne envie de te lever le matin. Cela t'aidera à choisir ce que tu veux faire plus tard, pas par défaut, mais par véritable intérêt."
        },
        {
          heading: "La Liberté et l'Indépendance 🕊️",
          text: "Savoir, c'est pouvoir. Comprendre te rend moins manipulable, plus autonome dans tes choix et dans ta vie. Tu dépends moins des autres pour comprendre le monde ou résoudre tes problèmes."
        },
        {
          heading: "Surmonter les Difficultés : La Fierté du Travail Accompli 💪",
          text: "Oui, apprendre demande des efforts. Il y aura des moments de découragement. Mais la satisfaction de comprendre enfin quelque chose de difficile, de réussir un exercice compliqué après avoir lutté, c'est une sensation géniale ! C'est la preuve que tu es capable. Chaque petit effort te rend plus fort, plus confiant."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            onClick={handleBack}
            className="mb-4 text-indigo-600 hover:text-indigo-800"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux ressources
          </Button>
          
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-4"
            >
              <BookOpen className="w-8 h-8 text-white" />
            </motion.div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Marre d'Apprendre ?
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              Et si c'était la Clé de Toutes les Aventures ? 🚀
            </p>
            <p className="text-sm text-gray-500">
              Par Geoffroy Streit - 2025
            </p>
          </div>
        </motion.div>

        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl shadow-lg p-8 border border-yellow-200"
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">👋</span>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">On se comprend... 🤔</h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                <p>
                  <strong>Salut l'aventurier/ère de la connaissance 👋</strong> (même si tu ne le sais pas encore !)
                </p>
                <p>
                  On sait, parfois l'école, ça semble long ⏳. Les cours, les devoirs... tu te demandes à quoi ça sert vraiment, 
                  surtout quand tu as ton téléphone 📱 à portée de main pour trouver une réponse en 2 secondes.
                </p>
                <p>
                  Tu te dis peut-être : <em>"Pourquoi m'embêter à apprendre des trucs par cœur alors que Google existe ?"</em> 
                  ou <em>"Les maths, la physique, à quoi ça va me servir plus tard ? C'est trop compliqué !"</em> 🤯
                </p>
                <p>
                  C'est normal de penser ça. La facilité, c'est tentant. Mais imagine un instant que tu passes à côté d'un truc énorme, 
                  d'un véritable <strong>super-pouvoir</strong>... 🦸
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Sections principales */}
        {sections.map((section, sectionIndex) => (
          <motion.section
            key={sectionIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + sectionIndex * 0.1 }}
            className="mb-12"
          >
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-full flex items-center justify-center text-white mr-4`}>
                  {section.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
                  <p className="text-lg text-gray-600">{section.subtitle}</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {section.content.map((item, itemIndex) => (
                <motion.div
                  key={itemIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + sectionIndex * 0.1 + itemIndex * 0.05 }}
                  className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Zap className="w-5 h-5 text-yellow-500 mr-2" />
                    {item.heading}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}

        {/* Conclusion */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-200"
        >
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-6">
              <Brain className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">À Toi de Jouer ! 🚀</h2>
            
            <div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                Alors, la prochaine fois que tu seras en cours ou devant tes devoirs, essaie de voir les choses différemment.
              </p>
              
              <p>
                Ne vois pas ça comme une corvée, mais comme une <strong>séance d'entraînement pour ton super-cerveau</strong> 🧠, 
                comme une quête pour débloquer de nouveaux niveaux de compréhension et de nouvelles visions du monde.
              </p>
              
              <p>
                Chaque leçon, chaque exercice est une petite brique pour construire la personne incroyable, 
                compétente et créative que tu peux devenir ✨.
              </p>
              
              <div className="bg-white rounded-lg p-6 border border-indigo-200 my-8">
                <p className="text-xl font-semibold text-indigo-800 mb-4">
                  Ce n'est pas toujours facile, mais le jeu en vaut la chandelle.
                </p>
                <p>
                  Le pouvoir d'apprendre est déjà en toi. Il ne tient qu'à toi de l'activer et de voir jusqu'où il peut t'emmener.
                </p>
              </div>
              
              <p className="text-xl font-bold text-indigo-600">
                Prêt(e) à relever le défi et à découvrir tes propres super-pouvoirs ? 🚀
              </p>
            </div>
          </div>
        </motion.section>

        {/* Note de l'auteur */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mt-12 bg-gray-50 rounded-xl p-6 border border-gray-200"
        >
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Note de l'auteur</h3>
            <p className="text-gray-600 leading-relaxed">
              Ce texte, rédigé initialement pour mon fils, s'inscrit dans une série d'articles et ressources 
              que je réunis dans la rubrique ressources {'>'} blog, parentalité et apprentissage de mon site 
              <a href="https://neuro-diversite.vercel.app" className="text-indigo-600 hover:text-indigo-800 underline" target="_blank" rel="noopener noreferrer">
                neuro-diversite.vercel.app
              </a>. 
              Ces propos, certes généraux sur l'apprentissage et destinés aux enfants, s'appliquent aussi aux neurodivers 🧠🌱, 
              d'autant plus que pour bon nombre d'entre nous/eux, l'apprentissage est parfois bien plus pénible/décourageant.
            </p>
            
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {['#Apprentissage', '#motivation', '#parentalité', '#mémoire', '#compréhension', '#persévérance', '#école', '#jeunesse', '#encouragement', '#Intérêt', '#sens', '#apprendre', '#raison', '#facilité'].map((tag, index) => (
                <span key={index} className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default MarreApprendre;