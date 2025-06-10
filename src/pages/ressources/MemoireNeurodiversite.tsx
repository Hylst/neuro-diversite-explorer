import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, ArrowLeft, Clock, Users, AlertCircle, CheckCircle, ChevronDown, ChevronUp, Info, Zap, Target, Coffee, Puzzle, Compass, Wrench, Heart, Smile, BookOpen, HelpCircle, Calendar, Eye, Mic, Lightbulb, Search, Repeat, Archive, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const MemoireNeurodiversite = () => {
  const navigate = useNavigate();
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({});
  const [showTooltip, setShowTooltip] = useState<{[key: string]: boolean}>({});
  const [activeMemoryType, setActiveMemoryType] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const toggleTooltip = (tooltipId: string) => {
    setShowTooltip(prev => ({
      ...prev,
      [tooltipId]: !prev[tooltipId]
    }));
  };

  const Tooltip = ({ id, children, content }: { id: string, children: React.ReactNode, content: string }) => (
    <div className="relative inline-block">
      <span 
        className="cursor-help text-blue-600 hover:text-blue-800 transition-colors border-b border-dotted border-blue-400"
        onMouseEnter={() => toggleTooltip(id)}
        onMouseLeave={() => toggleTooltip(id)}
      >
        {children}
      </span>
      <AnimatePresence>
        {showTooltip[id] && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-10 w-64 p-3 bg-gray-900 text-white text-sm rounded-lg shadow-lg -top-2 left-full ml-2"
          >
            {content}
            <div className="absolute top-3 -left-1 w-2 h-2 bg-gray-900 rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  const CollapsibleSection = ({ id, title, icon: Icon, children }: { id: string, title: string, icon: any, children: React.ReactNode }) => (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <button
        onClick={() => toggleSection(id)}
        className="w-full p-6 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Icon className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        </div>
        {expandedSections[id] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      <AnimatePresence>
        {expandedSections[id] && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 border-t border-gray-100">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  const MemoryCard = ({ type, icon: Icon, title, description, analogy, examples, color }: {
    type: string,
    icon: any,
    title: string,
    description: string,
    analogy: string,
    examples: string[],
    color: string
  }) => (
    <motion.div
      className={`bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden cursor-pointer transform transition-all duration-200 hover:scale-105 ${
        activeMemoryType === type ? 'ring-2 ring-blue-500' : ''
      }`}
      onClick={() => setActiveMemoryType(activeMemoryType === type ? null : type)}
      whileHover={{ y: -5 }}
    >
      <div className={`p-6 bg-gradient-to-r ${color}`}>
        <div className="flex items-center gap-3 text-white">
          <Icon className="w-8 h-8" />
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="bg-blue-50 rounded-lg p-4 mb-4">
          <p className="text-blue-800 text-sm">
            <strong>🎭 Analogie :</strong> {analogy}
          </p>
        </div>
        <AnimatePresence>
          {activeMemoryType === type && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-3"
            >
              <h4 className="font-semibold text-gray-900">Exemples concrets :</h4>
              <div className="space-y-2">
                {examples.map((example, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700">{example}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );

  const memoryTypes = [
    {
      type: "Mémoire de Travail",
      description: "Système à capacité limitée qui maintient et manipule temporairement l'information nécessaire à la réalisation de tâches cognitives (raisonner, apprendre, comprendre). C'est le \"post-it\" ou la \"RAM\" du cerveau.",
      profiles: "TDA/H (très fortement), Dyslexie, Dyspraxie, TSA",
      manifestations: "Oublier une instruction donnée à l'oral, perdre le fil de ses idées en parlant, avoir du mal à suivre une conversation de groupe, difficultés en calcul mental, oublier ce qu'on est venu chercher dans une pièce.",
      color: "bg-red-50 border-red-200"
    },
    {
      type: "Mémoire Procédurale",
      description: "Mémoire des savoir-faire et des habiletés motrices, qui permet d'automatiser les gestes et les procédures (faire du vélo, écrire, taper sur un clavier).",
      profiles: "Dyspraxie (fortement), TDA/H",
      manifestations: "Lenteur pour apprendre les gestes du quotidien (lacer ses chaussures), écriture manuscrite difficile et non automatisée, difficultés à apprendre une chorégraphie ou une séquence de mouvements.",
      color: "bg-orange-50 border-orange-200"
    },
    {
      type: "Mémoire Épisodique / Autobiographique",
      description: "Mémoire des événements vécus personnellement, avec leur contexte émotionnel, spatial et temporel. C'est le film de notre vie.",
      profiles: "TSA",
      manifestations: "Souvenirs moins détaillés, factuels, avec une difficulté à se remémorer le contexte émotionnel. Difficulté à se \"re-projeter\" dans le souvenir et à le partager de manière narrative.",
      color: "bg-blue-50 border-blue-200"
    },
    {
      type: "Mémoire Sémantique",
      description: "Mémoire des connaissances générales sur le monde, des faits, des concepts et du sens des mots. C'est notre encyclopédie interne.",
      profiles: "Généralement préservée, mais l'accès peut être fluctuant chez les TDA/H (\"le mot sur le bout de la langue\").",
      manifestations: "Difficultés ponctuelles à retrouver un mot ou une information pourtant connue, nécessitant des indices pour y accéder.",
      color: "bg-green-50 border-green-200"
    },
    {
      type: "Mémoire Prospective",
      description: "Mémoire du futur : se souvenir d'exécuter une action planifiée (se souvenir de prendre ses médicaments, de poster une lettre, d'un rendez-vous).",
      profiles: "TDA/H (très fortement), TSA",
      manifestations: "Oublis fréquents de rendez-vous, de rendre des travaux à temps, de payer des factures, de répondre à un message.",
      color: "bg-purple-50 border-purple-200"
    }
  ];

  const impacts = [
    {
      domain: "Scolarité et Apprentissages",
      manifestations: [
        "Difficulté à retenir les leçons, les consignes multiples, les tables de multiplication",
        "Lenteur dans l'exécution des tâches",
        "Difficulté à prendre des notes et à écouter simultanément",
        "Oubli du matériel scolaire, des devoirs à faire, des dates d'examen",
        "Épuisement cognitif et sentiment d'échec malgré les efforts"
      ],
      icon: "📚",
      color: "bg-blue-50 border-blue-200"
    },
    {
      domain: "Vie Quotidienne et Autonomie",
      manifestations: [
        "Perte fréquente d'objets personnels (clés, téléphone, portefeuille)",
        "Difficulté à gérer les tâches administratives, les rendez-vous",
        "Procrastination due à la difficulté d'initier et de se souvenir des étapes d'une tâche",
        "Difficulté à suivre une recette de cuisine ou des instructions de montage",
        "Sentiment d'être constamment dépassé et désorganisé"
      ],
      icon: "🏠",
      color: "bg-green-50 border-green-200"
    },
    {
      domain: "Vie Sociale et Relationnelle",
      manifestations: [
        "Difficulté à retenir les prénoms ou les informations partagées par les autres, pouvant être perçu comme un désintérêt",
        "Perte du fil dans les conversations",
        "Oubli des anniversaires ou des événements importants",
        "Difficulté à raconter des souvenirs personnels de manière fluide (TSA)",
        "Anxiété sociale liée à la peur de l'oubli ou de commettre un impair"
      ],
      icon: "👥",
      color: "bg-yellow-50 border-yellow-200"
    },
    {
      domain: "Estime de Soi et Santé Mentale",
      manifestations: [
        "Faible estime de soi, sentiment d'être \"nul\" ou \"paresseux\"",
        "Anxiété de performance, stress chronique",
        "Frustration, irritabilité",
        "Risque accru de dépression et d'épuisement (burn-out) en raison de l'effort constant de compensation"
      ],
      icon: "💭",
      color: "bg-red-50 border-red-200"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            onClick={() => navigate('/ressources')}
            className="mb-4 text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux ressources
          </Button>
          
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4"
            >
              <Brain className="w-8 h-8 text-white" />
            </motion.div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Mémoire et Neurodiversité
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              Un Labyrinthe aux Multiples Facettes 🧩
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                Geoffroy Streit
              </span>
              <span className="flex items-center gap-1">
                <Coffee className="h-4 w-4" />
                2025 - Guide complet
              </span>
            </div>
          </div>
        </motion.div>

        {/* Introduction enrichie */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-100 rounded-lg flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Imaginez votre mémoire comme une bibliothèque fantastique... 📚✨
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  Dans cette bibliothèque, certains rayons sont parfaitement organisés avec un système de classement digne d'un bibliothécaire obsessionnel, 
                  tandis que d'autres ressemblent à un bazar où les livres sont empilés dans un ordre que seul leur propriétaire comprend. 
                  Parfois, le bibliothécaire (votre cerveau) a ses petites manies : il range certains ouvrages dans des endroits inattendus, 
                  oublie où il a mis les clés de certaines sections, ou au contraire, connaît par cœur l'emplacement exact de chaque virgule 
                  de ses livres préférés ! 🗝️
                </p>
                
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 border border-purple-200">
                  <div className="flex items-start gap-3">
                    <Heart className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-800 mb-3">
                        <strong>Bonne nouvelle :</strong> avoir une mémoire "différente" ne signifie pas avoir une mauvaise mémoire ! 
                        C'est plutôt comme avoir un système d'archivage unique, avec ses propres règles et ses propres trésors cachés.
                      </p>
                      <p className="text-gray-700">
                        Ce guide vous invite à explorer les méandres fascinants de la mémoire neurodivergente, 
                        avec ses défis, ses surprises et ses talents cachés. Préparez-vous à découvrir que votre cerveau 
                        est peut-être plus malin que vous ne le pensiez ! 🧠💡
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section interactive sur les types de mémoire */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Les Différents Types de Mémoire : Une Équipe de Spécialistes 🎪
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              Votre cerveau, c'est comme un cirque avec différents numéros ! Chaque type de mémoire a sa spécialité. 
              Cliquez sur chaque carte pour découvrir leurs secrets... 🎭
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <MemoryCard
              type="working"
              icon={Zap}
              title="Mémoire de Travail"
              description="Le jongleur du cerveau qui garde plusieurs balles en l'air en même temps !"
              analogy="C'est comme un chef cuisinier qui doit surveiller 5 casseroles en même temps tout en préparant la sauce. Impressionnant quand ça marche, catastrophique quand ça déborde !"
              examples={[
                "Retenir un numéro de téléphone le temps de le noter",
                "Faire un calcul mental complexe (23 + 47 - 15 = ?)",
                "Suivre une conversation tout en prenant des notes",
                "Se souvenir de ce qu'on cherchait en arrivant dans une pièce"
              ]}
              color="from-yellow-400 to-orange-500"
            />
            
            <MemoryCard
              type="procedural"
              icon={Repeat}
              title="Mémoire Procédurale"
              description="L'expert en pilote automatique qui sait faire du vélo les yeux fermés !"
              analogy="C'est comme un pianiste virtuose : ses doigts connaissent la mélodie par cœur, même si son esprit vagabonde ailleurs. Pure magie musculaire !"
              examples={[
                "Faire du vélo, conduire une voiture",
                "Taper au clavier sans regarder",
                "Nouer ses lacets automatiquement",
                "Jouer d'un instrument de musique"
              ]}
              color="from-green-400 to-teal-500"
            />
            
            <MemoryCard
              type="episodic"
              icon={Calendar}
              title="Mémoire Épisodique"
              description="Le conteur qui se souvient de tous vos films personnels !"
              analogy="C'est votre Netflix personnel avec tous vos souvenirs classés par épisodes : 'Saison 1995, Épisode 12 : Le jour où j'ai mangé trop de bonbons à Halloween'"
              examples={[
                "Votre premier jour d'école",
                "Ce que vous avez mangé hier soir",
                "Vos dernières vacances en détail",
                "La conversation d'hier avec votre ami"
              ]}
              color="from-blue-400 to-purple-500"
            />
            
            <MemoryCard
              type="semantic"
              icon={BookOpen}
              title="Mémoire Sémantique"
              description="L'encyclopédie vivante qui stocke tous vos savoirs !"
              analogy="C'est comme Wikipédia dans votre tête : plein de faits, de définitions et de connaissances, mais sans se souvenir où ni quand vous les avez apprises !"
              examples={[
                "Paris est la capitale de la France",
                "2 + 2 = 4",
                "Les chats ont des moustaches",
                "Comment faire une omelette"
              ]}
              color="from-indigo-400 to-blue-500"
            />
            
            <MemoryCard
              type="prospective"
              icon={Clock}
              title="Mémoire Prospective"
              description="Le secrétaire personnel qui vous rappelle vos rendez-vous... quand il n'est pas en pause café !"
              analogy="C'est comme avoir un assistant personnel dans votre tête, mais parfois il part en vacances sans prévenir et vous oubliez votre anniversaire de mariage !"
              examples={[
                "Se souvenir d'un rendez-vous médical",
                "Penser à souhaiter un anniversaire",
                "Rappeler de prendre ses médicaments",
                "Ne pas oublier les clés en sortant"
              ]}
              color="from-pink-400 to-red-500"
            />
            
            <MemoryCard
              type="sensory"
              icon={Eye}
              title="Mémoire Sensorielle"
              description="Le photographe ultra-rapide qui capture tout en 0,5 seconde !"
              analogy="C'est comme un appareil photo avec un flash ultra-puissant : il capture TOUT pendant une fraction de seconde, puis efface presque tout sauf les détails importants."
              examples={[
                "L'image qui reste 1 seconde après avoir fermé les yeux",
                "L'écho d'un son qu'on vient d'entendre",
                "La sensation tactile qui persiste brièvement",
                "L'odeur qui flotte encore dans l'air"
              ]}
              color="from-purple-400 to-pink-500"
            />
          </div>
        </motion.section>

        {/* Section enrichie sur l'impact des profils neurodivergents */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quand la Mémoire Danse au Rythme de la Neurodiversité 🧠💃
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Chaque profil neurodivergent a sa propre façon de jongler avec la mémoire. 
              C'est comme si chacun avait son propre style de danse : parfois c'est du ballet, parfois du breakdance ! 🕺
            </p>
          </div>
          
          <div className="space-y-8">
            {/* TDAH */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border-2 border-orange-200 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="bg-orange-500 p-3 rounded-full mr-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-orange-700">TDAH : Le Papillon de la Mémoire 🦋</h3>
                  <p className="text-orange-600">"Ma mémoire, c'est comme un papillon : elle voltige partout et se pose rarement au bon endroit !"</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <CollapsibleSection id="tdah-challenges" title="🎢 Les Montagnes Russes Mnésiques" icon={AlertCircle}>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border-l-4 border-red-400">
                      <h5 className="font-semibold text-red-700 mb-2">Mémoire de Travail : Le Jongleur Distrait</h5>
                      <p className="text-sm text-gray-700 mb-2">
                        Imaginez un jongleur qui regarde passer un oiseau au milieu de son numéro... 🤹‍♂️
                      </p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• "Qu'est-ce que je venais chercher dans cette pièce déjà ?"</li>
                        <li>• Oublier la consigne au milieu de l'exercice</li>
                        <li>• Perdre le fil d'une conversation captivante</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-400">
                      <h5 className="font-semibold text-yellow-700 mb-2">Mémoire Prospective : L'Assistant en Grève</h5>
                      <p className="text-sm text-gray-700 mb-2">
                        Votre secrétaire mental a décidé de prendre des vacances non programmées ! 🏖️
                      </p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Rendez-vous ? Quel rendez-vous ? 📅</li>
                        <li>• "Ah oui, j'avais dit que j'appellerais..."</li>
                        <li>• Les anniversaires : mission impossible</li>
                      </ul>
                    </div>
                  </div>
                </CollapsibleSection>
                
                <CollapsibleSection id="tdah-strengths" title="✨ Les Super-Pouvoirs Cachés" icon={CheckCircle}>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
                      <h5 className="font-semibold text-green-700 mb-2">Hyperfocus : Le Laser Mental</h5>
                      <p className="text-sm text-gray-700 mb-2">
                        Quand ça vous passionne, votre mémoire devient un aspirateur géant ! 🌪️
                      </p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Mémoriser 200 Pokémon mais oublier où sont les clés</li>
                        <li>• Connaître par cœur les paroles de 50 chansons</li>
                        <li>• Retenir tous les détails d'un film adoré</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
                      <h5 className="font-semibold text-blue-700 mb-2">Créativité Mnésique</h5>
                      <p className="text-sm text-gray-700 mb-2">
                        Votre cerveau fait des connexions que personne d'autre ne voit ! 🌈
                      </p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Associations d'idées surprenantes</li>
                        <li>• Souvenirs en technicolor et surround</li>
                        <li>• Analogies originales pour retenir</li>
                      </ul>
                    </div>
                  </div>
                </CollapsibleSection>
              </div>
            </motion.div>
            
            {/* TSA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-500 p-3 rounded-full mr-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-700">TSA : L'Archiviste Méticuleux 📚</h3>
                  <p className="text-blue-600">"Ma mémoire, c'est comme une bibliothèque parfaitement organisée... mais avec un système de classement très personnel !"</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <CollapsibleSection id="tsa-precision" title="🎯 Précision de Sniper" icon={Target}>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
                      <h5 className="font-semibold text-green-700 mb-2">Mémoire des Détails : Le Microscope Humain</h5>
                      <p className="text-sm text-gray-700 mb-2">
                        Vous remarquez et retenez des détails que les autres ne voient même pas ! 🔍
                      </p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• "Tu portais un pull bleu marine le 15 mars 2019"</li>
                        <li>• Mémoriser des séquences complexes parfaitement</li>
                        <li>• Retenir l'organisation exacte d'un espace</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border-l-4 border-purple-400">
                      <h5 className="font-semibold text-purple-700 mb-2">Mémoire Procédurale : Le Maître des Rituels</h5>
                      <p className="text-sm text-gray-700 mb-2">
                        Vos routines sont gravées dans le marbre de votre mémoire ! 🏛️
                      </p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Séquences d'actions parfaitement maîtrisées</li>
                        <li>• Automatismes ultra-précis</li>
                        <li>• Reproduction fidèle de gestes complexes</li>
                      </ul>
                    </div>
                  </div>
                </CollapsibleSection>
                
                <CollapsibleSection id="tsa-challenges" title="🌊 Les Défis du Quotidien" icon={Puzzle}>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border-l-4 border-orange-400">
                      <h5 className="font-semibold text-orange-700 mb-2">Mémoire Épisodique : Le Puzzle Complexe</h5>
                      <p className="text-sm text-gray-700 mb-2">
                        Parfois, remettre les souvenirs dans l'ordre, c'est comme faire un puzzle de 1000 pièces ! 🧩
                      </p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Difficultés avec la chronologie des événements</li>
                        <li>• Souvenirs très précis mais mal datés</li>
                        <li>• Besoin de repères pour organiser les souvenirs</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border-l-4 border-red-400">
                      <h5 className="font-semibold text-red-700 mb-2">Surcharge Sensorielle</h5>
                      <p className="text-sm text-gray-700 mb-2">
                        Quand il y a trop d'informations, votre mémoire fait grève ! 🚨
                      </p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Oublis en environnement bruyant</li>
                        <li>• Difficultés dans les lieux stimulants</li>
                        <li>• Besoin de calme pour bien mémoriser</li>
                      </ul>
                    </div>
                  </div>
                </CollapsibleSection>
              </div>
            </motion.div>
            
            {/* Troubles DYS */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="bg-purple-500 p-3 rounded-full mr-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-700">Troubles DYS : Les Artistes de la Mémoire 🎨</h3>
                  <p className="text-purple-600">"Ma mémoire préfère les images aux mots, les couleurs aux lettres, les mélodies aux chiffres !"</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <CollapsibleSection id="dys-types" title="🎭 Chaque DYS, Sa Spécialité" icon={Layers}>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border-l-4 border-red-400">
                      <h5 className="font-semibold text-red-700 mb-2">Dyslexie : Quand les Mots Jouent à Cache-Cache</h5>
                      <p className="text-sm text-gray-700 mb-2">
                        Les lettres font la fête dans votre tête ! 🎉
                      </p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• "b" ou "d" ? Le mystère reste entier</li>
                        <li>• Séquences de lettres rebelles</li>
                        <li>• Mémoire visuelle compensatrice</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
                      <h5 className="font-semibold text-blue-700 mb-2">Dyscalculie : Les Chiffres en Liberté</h5>
                      <p className="text-sm text-gray-700 mb-2">
                        Les mathématiques, c'est comme une langue étrangère ! 🌍
                      </p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Tables de multiplication : mission impossible</li>
                        <li>• Séquences numériques capricieuses</li>
                        <li>• Stratégies alternatives créatives</li>
                      </ul>
                    </div>
                  </div>
                </CollapsibleSection>
                
                <CollapsibleSection id="dys-talents" title="🌟 Les Talents Cachés" icon={Compass}>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
                      <h5 className="font-semibold text-green-700 mb-2">Mémoire Alternative : Le GPS Créatif</h5>
                      <p className="text-sm text-gray-700 mb-2">
                        Votre cerveau trouve des chemins que personne d'autre n'emprunte ! 🗺️
                      </p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Associations visuelles puissantes</li>
                        <li>• Mémoire kinesthésique développée</li>
                        <li>• Stratégies mnémotechniques originales</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-400">
                      <h5 className="font-semibold text-yellow-700 mb-2">Pensée 3D</h5>
                      <p className="text-sm text-gray-700 mb-2">
                        Vous pensez en relief quand les autres pensent en 2D ! 📐
                      </p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Vision spatiale exceptionnelle</li>
                        <li>• Compréhension globale intuitive</li>
                        <li>• Créativité débordante</li>
                      </ul>
                    </div>
                  </div>
                </CollapsibleSection>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Niveaux de Gravité */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Users className="w-8 h-8 text-purple-500 mr-3" />
            Niveaux de Gravité et Profils Concernés
          </h2>
          
          <p className="text-lg text-gray-700 mb-6">
            La sévérité des troubles de la mémoire varie considérablement d'un individu à l'autre, même au sein d'un même diagnostic. 
            On ne parle pas de stades comme dans les maladies dégénératives, mais plutôt d'un continuum de l'impact fonctionnel.
          </p>

          <div className="space-y-6">
            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-red-800 mb-3">TDA/H</h3>
              <p className="text-gray-700">
                Le trouble de la mémoire le plus central et handicapant est celui de la mémoire de travail. 
                Son atteinte est quasi systématique et constitue un critère diagnostique majeur. L'impact est souvent 
                qualifié de modéré à sévère, car il affecte l'ensemble des apprentissages et de l'organisation quotidienne. 
                La mémoire prospective est également très touchée.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-3">TSA</h3>
              <p className="text-gray-700">
                Les particularités de la mémoire autobiographique sont une caractéristique fondamentale du profil. 
                La gravité dépend de la capacité de la personne à développer des stratégies de compensation. 
                La mémoire sémantique peut être un point fort (hypermnésie sur les intérêts spécifiques), 
                tandis que la mémoire de travail peut être hétérogène.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-green-800 mb-3">Troubles "Dys"</h3>
              <div className="space-y-3">
                <div>
                  <strong className="text-green-700">Dyspraxie :</strong> 
                  <span className="text-gray-700 ml-2">
                    L'atteinte de la mémoire procédurale est au cœur du trouble, avec un impact sévère sur l'automatisation des gestes.
                  </span>
                </div>
                <div>
                  <strong className="text-green-700">Dyslexie :</strong> 
                  <span className="text-gray-700 ml-2">
                    La surcharge de la mémoire de travail est une conséquence directe des efforts de décodage. 
                    L'impact est majeur sur les apprentissages écrits.
                  </span>
                </div>
                <div>
                  <strong className="text-green-700">Autres "Dys" (dysphasie, dyscalculie) :</strong> 
                  <span className="text-gray-700 ml-2">
                    Ils impliquent également une forte sollicitation et une potentielle fragilité de la mémoire de travail.
                  </span>
                </div>
              </div>
              <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-sm text-yellow-800">
                  <strong>Important :</strong> Ces troubles sont souvent associés (comorbidités). 
                  Un enfant dyslexique peut aussi avoir un TDA/H, cumulant ainsi les fragilités de la mémoire de travail, 
                  ce qui majore l'impact sur sa scolarité.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Manifestations et Impacts */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <AlertCircle className="w-8 h-8 text-orange-500 mr-3" />
            Manifestations, Impacts et Conséquences
          </h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Les difficultés de mémoire chez les personnes neuroatypiques ne sont pas de simples oublis ; 
            elles engendrent une cascade de conséquences dans toutes les sphères de la vie.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {impacts.map((impact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className={`${impact.color} rounded-xl p-6 border-2`}
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{impact.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900">{impact.domain}</h3>
                </div>
                
                <ul className="space-y-2">
                  {impact.manifestations.map((manifestation, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <span className="text-gray-400 mr-2 mt-1">•</span>
                      {manifestation}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Conclusion */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200"
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <CheckCircle className="w-8 h-8 text-green-500 mt-1" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                Les troubles de la mémoire associés à la neurodiversité sont <strong>spécifiques, persistants et envahissants</strong>. 
                Les reconnaître comme une partie intégrante du trouble, et non comme un défaut de caractère, 
                est la première étape pour mettre en place des stratégies de compensation efficaces.
              </p>
              
              <div className="bg-white rounded-lg p-6 border border-blue-200">
                <h3 className="font-semibold text-gray-800 mb-3">Stratégies de compensation :</h3>
                <div className="flex flex-wrap gap-2">
                  {['Agendas', 'Alarmes', 'Routines', 'Aides visuelles', 'Accompagnement bienveillant'].map((strategy, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {strategy}
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mt-4">
                  Ces approches permettent de réduire la charge mentale et de valoriser les autres forces cognitives de ces individus.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default MemoireNeurodiversite;