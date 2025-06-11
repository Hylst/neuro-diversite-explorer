import React, { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OptimizedCollapsibleSection from '../../components/ui/OptimizedCollapsibleSection';
import OptimizedTooltip from '../../components/ui/OptimizedTooltip';
import { ArrowLeft, Brain, Lightbulb, Target, Zap, Users, BookOpen, Smartphone, Gamepad2, Map, Mic, PenTool, Eye, Clock, Star, AlertCircle, CheckCircle, Sparkles, FileText, Layout } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

/**
 * NavigationLabyrintheIdees Component
 *
 * Displays the "Guide Pratique : Naviguer dans le Labyrinthe des Idées" article
 * as an in-app page with modern design and interactive elements.
 *
 * Features:
 * - Structured content with clear sections
 * - Visual icons and animations
 * - Professional typography and spacing
 * - Responsive design
 * - Author information and development note
 * - Dark mode compatibility
 */
const NavigationLabyrintheIdees: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'modular' | 'textual'>('modular');
  
  const handleBackClick = useCallback(() => {
    navigate('/ressources');
  }, [navigate]);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const textContent = useMemo(() => ({
    preamble: {
      title: "Préambule : Différence et Liens entre Mémoire et Structuration de la Pensée",
      intro: "Il est essentiel de comprendre pourquoi ces deux difficultés sont si souvent liées, notamment chez les profils neuroatypiques.",
      difference: {
        title: "La Différence :",
        structuring: "La structuration de la pensée est une fonction exécutive. C'est le travail de l'architecte : planifier, organiser, hiérarchiser les idées, créer des liens logiques et suivre un raisonnement.",
        memory: "La mémoire, et plus spécifiquement la mémoire de travail, est le chantier de l'architecte. C'est l'espace mental limité où l'on conserve et manipule les \"briques\" (les idées, les faits, les consignes) le temps de construire le \"mur\" (la réflexion)."
      },
      link: {
        title: "Le Lien Indissociable :",
        analogy: "Imaginez que vous essayez de construire un mur, mais que les briques disparaissent de vos mains dès que vous en saisissez une nouvelle. C'est exactement ce qui se passe lorsqu'une mémoire de travail défaillante rencontre un besoin de structuration :",
        surcharge: "Surcharge Cognitive : Le cerveau dépense une énergie considérable juste pour retenir les éléments de la pensée (le début d'une phrase, l'idée A, l'argument B). Il ne lui reste alors que peu de ressources pour le travail de structuration (comment A et B sont-ils liés ? Lequel est le plus important ?).",
        lossOfThread: "Perte du Fil : Au milieu d'une réflexion, une nouvelle idée (pensée en arborescence du TDA/H) ou une distraction survient. La mémoire de travail, déjà saturée, \"lâche\" les informations précédentes pour traiter la nouvelle. Le fil est rompu.",
        forgettingGoal: "L'Oubli de l'Objectif : Sans une mémoire de travail solide pour garder l'objectif final en tête, il est facile de se perdre dans les méandres des sous-idées et de ne jamais arriver à une conclusion.",
        conclusion: "Ce guide propose des stratégies visant précisément à décharger la mémoire de travail pour libérer des ressources mentales au profit de la structuration."
      }
    },
    part1: {
      title: "Partie 1 : La Fondation - Externaliser sa Pensée pour Libérer sa Mémoire",
      intro: "L'objectif est de sortir les idées de votre tête le plus vite et le plus fidèlement possible, sans filtre ni jugement.",
      brainDumping: {
        title: "1. La \"Vidange Cérébrale\" (Brain Dumping)",
        description: "C'est la technique la plus fondamentale. L'idée est de créer un réceptacle externe pour vos pensées.",
        principle: "Principe : Sur une feuille de papier, un tableau blanc ou un document numérique (Notion, OneNote, etc.), écrivez absolument tout ce qui vous passe par la tête concernant votre sujet de réflexion.",
        methodVrac: "En Vrac Total : Ne vous souciez ni de l'ordre, ni de la grammaire, ni de la pertinence. Notez des mots-clés, des bribes de phrases, des questions, des doutes.",
        methodNoJudgment: "Sans Jugement : L'objectif n'est pas de produire un texte parfait, mais de vider votre charge mentale. Une idée \"bête\" peut en cacher une brillante.",
        result: "Le Résultat : Vous disposez maintenant d'une \"photographie\" de votre pensée à un instant T. Votre cerveau n'a plus à lutter pour tout retenir, il peut passer à l'étape suivante : l'organisation."
      },
      voiceDictation: {
        title: "2. La Dictée Vocale : La Pensée Fluide",
        description: "Pour beaucoup, la pensée est plus rapide et instinctive que la vitesse de frappe ou d'écriture, souvent source de blocage (sauf en cas de dysphasie sévère).",
        principle: "Principe : Utiliser la fonction dictaphone de votre téléphone ou un logiciel de transcription pour parler de votre idée, comme si vous l'expliquiez à quelqu'un.",
        method: "Méthode : Ouvrez une note ou un enregistreur et parlez. Décrivez votre projet, posez vos questions à voix haute, développez vos arguments de manière décousue.",
        advantage: "L'avantage crucial : Même si au bout de la phrase vous avez oublié le début, l'enregistrement, lui, sera complet.",
        exploitation: "Exploitation : Relisez (ou faites lire par une IA) la transcription. Le simple fait de voir vos propres mots vous remettra sur les rails de votre pensée, vous permettant de la poursuivre, de la corriger et de l'enrichir."
      }
    },
    part2: {
      title: "Partie 2 : L'Atelier d'Organisation - Structurer le Chaos",
      intro: "Une fois vos idées externalisées, il faut les organiser. C'est là que la magie opère.",
      visualLab: {
        title: "3. Le Laboratoire Visuel et Itératif",
        description: "C'est la phase d'organisation manuelle et visuelle, très efficace pour les penseurs visuels.",
        principle: "Principe : Utiliser des codes visuels pour regrouper, hiérarchiser et relier les idées issues de votre \"vidange cérébrale\".",
        methodGroup: "Regrouper : Utilisez des surligneurs de couleurs différentes pour lier les idées qui vont ensemble. Entourez les concepts similaires.",
        methodHierarchy: "Hiérarchiser : Utilisez des symboles (étoiles, chiffres) ou des tailles d'écriture différentes pour marquer les idées principales, les sous-idées et les détails.",
        methodLinks: "Faire des Liens : Dessinez des flèches, des schémas, des tableaux simples pour visualiser les relations de cause à effet, les oppositions, les séquences.",
        tools: "Outils : Des post-it de couleurs différentes sur un mur, un grand tableau blanc, ou des applications de mind mapping (Xmind, Miro, Coggle)."
      },
      chainOfThought: {
        title: "4. Le Principe de la \"Chaîne de Pensée\" (Chain of Thought)",
        description: "Cette technique aide à construire un raisonnement linéaire à partir d'un point de départ.",
        principle: "Principe : Partir d'une idée initiale et se forcer à la lier à la suivante par une question ou une déduction logique, créant une chaîne.",
        methodExample: "Méthode : Phrase de départ : \"Je dois organiser un événement.\" Question induite : \"Quel est le but de cet événement ?\" -> Réponse/Maillon suivant : \"Le but est de célébrer le lancement du produit X.\" Question induite : \"Qui devons-nous inviter ?\" -> Réponse/Maillon suivant : \"Les clients, les partenaires, la presse.\" ... et ainsi de suite.",
        conclusion: "Cela transforme une montagne de réflexion en une série de petites collines à franchir l'une après l'autre."
      }
    },
    part3: {
      title: "Partie 3 : Consolider les Acquis - Techniques de Mémorisation Active",
      intro: "Même avec des notes, il faut parfois garder des éléments clés en tête.",
      mentalPalace: {
        title: "5. Le Palais Mental : Une Technique Puissante mais Exigeante",
        principle: "Principe : Associer des informations à mémoriser à des lieux ou des objets dans un endroit que vous connaissez parfaitement (votre maison, votre trajet pour le travail). Pour se souvenir, on parcourt mentalement ce lieu.",
        adapted: "Est-ce adapté ? Oui : Pour mémoriser une liste d'éléments structurés et ordonnés (les étapes d'un discours, les points clés d'une présentation). Non : Moins adapté pour la phase créative et chaotique de la réflexion. C'est un outil de stockage, pas de création.",
        method: "Méthode Simplifiée : Choisissez votre lieu : Votre appartement. Définissez un parcours logique : Porte d'entrée -> Couloir -> Cuisine -> Salon... Placez vos idées : Associez votre première idée (ex: \"Introduction du projet\") à la porte d'entrée de manière imagée et marquante (ex: la porte est recouverte du logo du projet). Associez la deuxième idée à l'objet suivant sur votre parcours, etc. Répétez la promenade mentale pour la renforcer."
      },
      quickMemoryAids: {
        title: "6. Aides à la Mémorisation Rapides",
        description: "Pour les concepts importants au sein de vos réflexions, utilisez des techniques plus légères :",
        images: "Images Mentales Frappantes : Associez un concept abstrait à une image absurde, drôle ou émotionnellement forte.",
        analogies: "Analogies Familières : Reliez une nouvelle idée à quelque chose que vous connaissez déjà très bien.",
        acronyms: "Acronymes : Créez un mot avec la première lettre de chaque élément d'une liste."
      }
    },
    part4: {
      title: "Partie 4 : L'Allié Moderne - Utiliser l'Intelligence Artificielle et la Technologie",
      intro: "L'IA peut agir comme un co-pilote pour votre pensée.",
      aiStructuring: {
        title: "L'IA comme Assistant de Structuration :",
        method: "Copiez-collez votre \"vidange cérébrale\" ou la transcription de votre dictée vocale dans une IA (Gemini, ChatGPT, etc.). Demandez-lui : \"Résume ce texte en 5 points clés.\" \"Regroupe ces idées par thèmes.\" \"Identifie une structure logique (introduction, développement, conclusion) dans ce texte.\" \"Propose une suite ou des aspects à développer à partir de ces notes.\" \"Transforme cette liste de points en un plan détaillé.\""
      },
      aiTasks: {
        title: "L'IA pour Décomposer les Tâches et Gérer le Temps :",
        todo: "To-Do Lists Assistées : Des applications comme Todoist ou Motion peuvent organiser vos tâches et vous aider à planifier votre journée.",
        planning: "Programmation de Tâches : Donnez un objectif à une IA (\"Je dois préparer une présentation sur le sujet X pour vendredi\") et demandez-lui de décomposer le projet en une liste de tâches réalisables avec des échéances.",
        reminders: "Rappels Intelligents : Utilisez les assistants vocaux (\"Hey Google, rappelle-moi d'envoyer un mail à Paul à 14h\") pour décharger votre mémoire prospective. Des applications comme Tiimo sont spécifiquement conçues pour les profils neuroatypiques, avec des rappels visuels et une structuration du temps."
      },
      forChildren: {
        title: "Pour les Enfants : Adapter les Astuces à l'Apprentissage",
        intro: "Les mêmes principes s'appliquent, mais de manière plus ludique.",
        ideaBox: "La \"Boîte à Idées\" : Au lieu d'une feuille, utilisez une vraie boîte où l'enfant peut déposer des dessins, des post-it, des objets (LEGOs) qui représentent ses idées pour une rédaction ou un exposé.",
        mindMapping: "Le Dessin en Étoile (Mind Mapping) : Mettez le sujet principal au centre d'une grande feuille et demandez à l'enfant de dessiner des \"branches\" pour chaque idée qui s'y rattache. Utilisez beaucoup de couleurs.",
        recipe: "La Recette de Cuisine : Pour un devoir complexe, présentez les étapes comme une recette : \"Ingrédient 1 : Lire la consigne. Ingrédient 2 : Souligner les mots importants... Étape 1 : Préparer le brouillon...\"",
        treasureHunt: "Le Chemin du Trésor dans la Chambre : Pour mémoriser une leçon (les planètes du système solaire, par exemple), \"cachez\" chaque planète dans un endroit de la chambre (le Soleil sur la lampe, Mars sous le tapis rouge...). L'enfant mémorise le parcours pour retrouver sa leçon."
      }
    },
    author: "Geoffroy Streit",
    year: "2021 - revu et amélioré en 2025"
  }), []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-purple-950 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <button
            onClick={handleBackClick}
            className="flex items-center gap-2 text-neuro-purple hover:text-neuro-blue transition-colors mb-6 group dark:text-purple-400 dark:hover:text-blue-300"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            Retour aux ressources
          </button>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-r from-neuro-purple to-neuro-blue rounded-xl">
                <Map className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 leading-tight dark:text-gray-100">
                  Guide Pratique : Naviguer dans le Labyrinthe des Idées
                </h1>
                <p className="text-lg text-gray-600 mt-2 dark:text-gray-300">
                  Pour les esprits foisonnants qui peinent à structurer leurs pensées et à retenir l'essentiel
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                {textContent.author}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {textContent.year}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Development Note */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200 dark:from-indigo-900 dark:to-purple-900 dark:border-indigo-700">
            <div className="flex items-start gap-3">
              <Sparkles className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0 dark:text-indigo-300" />
              <div>
                <h3 className="text-lg font-semibold text-indigo-900 mb-2 dark:text-indigo-100">Développement en cours</h3>
                <p className="text-indigo-800 leading-relaxed dark:text-indigo-200">
                  L'auteur développe actuellement une suite d'applications gratuites et faciles d'accès
                  pour répondre concrètement à ces problématiques. Ces outils numériques viendront
                  compléter les stratégies présentées dans ce guide pour offrir un accompagnement
                  pratique aux personnes neurodivergentes.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <div className="flex">
              <button
                onClick={() => setActiveTab('modular')}
                className={`flex-1 px-6 py-4 text-center font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  activeTab === 'modular'
                    ? 'bg-gradient-to-r from-neuro-purple to-neuro-blue text-white'
                    : 'text-gray-600 hover:text-neuro-purple hover:bg-gray-50 dark:text-gray-300 dark:hover:text-purple-400 dark:hover:bg-gray-700'
                }`}
              >
                <Layout className="h-5 w-5" />
                Présentation modulaire
              </button>
              <button
                onClick={() => setActiveTab('textual')}
                className={`flex-1 px-6 py-4 text-center font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  activeTab === 'textual'
                    ? 'bg-gradient-to-r from-neuro-purple to-neuro-blue text-white'
                    : 'text-gray-600 hover:text-neuro-purple hover:bg-gray-50 dark:text-gray-300 dark:hover:text-purple-400 dark:hover:bg-gray-700'
                }`}
              >
                <FileText className="h-5 w-5" />
                Présentation textuelle
              </button>
            </div>
          </div>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'modular' ? (
            <motion.div
              key="modular"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Préambule enrichi */}
        <motion.section
          {...fadeInUp}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <div className="bg-white rounded-xl shadow-lg p-8 dark:bg-gray-800">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-neuro-purple mb-4 dark:text-purple-400">
                🧠 {textContent.preamble.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
                {textContent.preamble.intro}
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-8 border-2 border-blue-200 dark:from-blue-900 dark:to-indigo-900 dark:border-blue-700">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-blue-500 p-3 rounded-full">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-2 dark:text-blue-100">L'Analogie du Jongleur Distrait 🤹‍♂️</h3>
                  <p className="text-blue-800 text-lg dark:text-blue-200">
                    Imaginez un jongleur talentueux qui doit jongler avec 5 balles tout en construisant une tour de Jenga.
                    Sauf que parfois, il regarde passer un papillon et... POUF ! Tout s'écroule !
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 dark:bg-gray-700">
                <h4 className="font-bold text-blue-900 mb-3 dark:text-blue-200">Dans votre cerveau, ça donne :</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-blue-800 dark:text-blue-200"><strong>Les balles =</strong> Vos idées brillantes</p>
                    <p className="text-blue-800 dark:text-blue-200"><strong>La tour de Jenga =</strong> Votre raisonnement structuré</p>
                    <p className="text-blue-800 dark:text-blue-200"><strong>Le papillon =</strong> Cette notification, ce bruit, cette pensée parasite</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg dark:bg-blue-800">
                    <p className="text-blue-700 italic dark:text-blue-300">
                      "Alors, où j'en étais déjà ? Ah oui, je parlais de... euh... 🤔"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200 dark:from-green-900 dark:to-emerald-900 dark:border-green-700">
                <div className="flex items-center mb-4">
                  <div className="bg-green-500 p-2 rounded-full mr-3">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-green-900 dark:text-green-100">Quand Tout Roule 🚗💨</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border-l-4 border-green-400 dark:bg-gray-700 dark:border-green-600">
                    <p className="text-green-800 font-semibold mb-1 dark:text-green-200">🎯 Focus Laser</p>
                    <p className="text-gray-700 text-sm dark:text-gray-300">Votre mémoire de travail est au top, elle retient toutes les balles sans effort. Votre cerveau peut se concentrer sur la construction de la tour.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-green-400 dark:bg-gray-700 dark:border-green-600">
                    <p className="text-green-800 font-semibold mb-1 dark:text-green-200">🚀 Idées Fluides</p>
                    <p className="text-gray-700 text-sm dark:text-gray-300">Les idées s'enchaînent logiquement, la tour monte sans accroc. Vous savez où vous allez.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-6 border-2 border-red-200 dark:from-red-900 dark:to-rose-900 dark:border-red-700">
                <div className="flex items-center mb-4">
                  <div className="bg-red-500 p-2 rounded-full mr-3">
                    <AlertCircle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-red-900 dark:text-red-100">Quand Ça Coince 🚧💥</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border-l-4 border-red-400 dark:bg-gray-700 dark:border-red-600">
                    <p className="text-red-800 font-semibold mb-1 dark:text-red-200">🤯 Surcharge Mentale</p>
                    <p className="text-gray-700 text-sm dark:text-gray-300">Votre mémoire de travail est comme un petit bureau encombré. Dès qu'une nouvelle idée arrive, une ancienne doit partir. Impossible de jongler avec tout !</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-red-400 dark:bg-gray-700 dark:border-red-600">
                    <p className="text-red-800 font-semibold mb-1 dark:text-red-200">🌀 Pensée en Arborescence</p>
                    <p className="text-gray-700 text-sm dark:text-gray-300">Une idée en appelle 10 autres, qui en appellent 10 autres... Vous partez dans tous les sens, la tour de Jenga s'écroule avant même d'avoir commencé.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-red-400 dark:bg-gray-700 dark:border-red-600">
                    <p className="text-red-800 font-semibold mb-1 dark:text-red-200">⏳ Perte de Temps</p>
                    <p className="text-gray-700 text-sm dark:text-gray-300">Vous passez plus de temps à essayer de vous souvenir de ce que vous vouliez dire qu'à réellement avancer. Frustration garantie !</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Ce guide est votre <span className="font-bold text-neuro-blue dark:text-blue-300">boîte à outils</span> pour devenir un <span className="font-bold text-neuro-purple dark:text-purple-300">architecte de la pensée</span>, même avec un jongleur distrait dans la tête !
              </p>
            </div>
          </div>
        </motion.section>

        {/* Main Content */} 
        <motion.div variants={staggerChildren} initial="initial" animate="animate">
          {/* Partie 1 */} 
          <OptimizedCollapsibleSection
            title={textContent.part1.title}
            icon={PenTool}
            id="part1"
          >
            <p className="text-lg text-gray-700 mb-6 dark:text-gray-300">
              {textContent.part1.intro}
            </p>

            <div className="space-y-8">
              {/* Brain Dumping */} 
              <div className="bg-white p-6 rounded-xl shadow-md dark:bg-gray-700">
                <h3 className="text-xl font-bold text-neuro-purple mb-3 dark:text-purple-300 flex items-center gap-2">
                  <Brain className="h-5 w-5" /> {textContent.part1.brainDumping.title}
                </h3>
                <p className="text-gray-700 mb-4 dark:text-gray-300">
                  {textContent.part1.brainDumping.description}
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    <span className="font-semibold">Principe :</span> {textContent.part1.brainDumping.principle}
                  </li>
                  <li>
                    <span className="font-semibold">En Vrac Total :</span> {textContent.part1.brainDumping.methodVrac}
                  </li>
                  <li>
                    <span className="font-semibold">Sans Jugement :</span> {textContent.part1.brainDumping.methodNoJudgment}
                  </li>
                  <li>
                    <span className="font-semibold">Le Résultat :</span> {textContent.part1.brainDumping.result}
                  </li>
                </ul>
              </div>

              {/* Dictée Vocale */} 
              <div className="bg-white p-6 rounded-xl shadow-md dark:bg-gray-700">
                <h3 className="text-xl font-bold text-neuro-purple mb-3 dark:text-purple-300 flex items-center gap-2">
                  <Mic className="h-5 w-5" /> {textContent.part1.voiceDictation.title}
                </h3>
                <p className="text-gray-700 mb-4 dark:text-gray-300">
                  {textContent.part1.voiceDictation.description}
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    <span className="font-semibold">Principe :</span> {textContent.part1.voiceDictation.principle}
                  </li>
                  <li>
                    <span className="font-semibold">Méthode :</span> {textContent.part1.voiceDictation.method}
                  </li>
                  <li>
                    <span className="font-semibold">L'avantage crucial :</span> {textContent.part1.voiceDictation.advantage}
                  </li>
                  <li>
                    <span className="font-semibold">Exploitation :</span> {textContent.part1.voiceDictation.exploitation}
                  </li>
                </ul>
              </div>
            </div>
          </OptimizedCollapsibleSection>

          {/* Partie 2 */} 
          <OptimizedCollapsibleSection
            title={textContent.part2.title}
            icon={Lightbulb}
            id="part2"
          >
            <p className="text-lg text-gray-700 mb-6 dark:text-gray-300">
              {textContent.part2.intro}
            </p>

            <div className="space-y-8">
              {/* Laboratoire Visuel */} 
              <div className="bg-white p-6 rounded-xl shadow-md dark:bg-gray-700">
                <h3 className="text-xl font-bold text-neuro-purple mb-3 dark:text-purple-300 flex items-center gap-2">
                  <Eye className="h-5 w-5" /> {textContent.part2.visualLab.title}
                </h3>
                <p className="text-gray-700 mb-4 dark:text-gray-300">
                  {textContent.part2.visualLab.description}
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    <span className="font-semibold">Principe :</span> {textContent.part2.visualLab.principle}
                  </li>
                  <li>
                    <span className="font-semibold">Regrouper :</span> {textContent.part2.visualLab.methodGroup}
                  </li>
                  <li>
                    <span className="font-semibold">Hiérarchiser :</span> {textContent.part2.visualLab.methodHierarchy}
                  </li>
                  <li>
                    <span className="font-semibold">Faire des Liens :</span> {textContent.part2.visualLab.methodLinks}
                  </li>
                  <li>
                    <span className="font-semibold">Outils :</span> {textContent.part2.visualLab.tools}
                  </li>
                </ul>
              </div>

              {/* Chaîne de Pensée */} 
              <div className="bg-white p-6 rounded-xl shadow-md dark:bg-gray-700">
                <h3 className="text-xl font-bold text-neuro-purple mb-3 dark:text-purple-300 flex items-center gap-2">
                  <Target className="h-5 w-5" /> {textContent.part2.chainOfThought.title}
                </h3>
                <p className="text-gray-700 mb-4 dark:text-gray-300">
                  {textContent.part2.chainOfThought.description}
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    <span className="font-semibold">Principe :</span> {textContent.part2.chainOfThought.principle}
                  </li>
                  <li>
                    <span className="font-semibold">Méthode :</span> {textContent.part2.chainOfThought.methodExample}
                  </li>
                  <li>
                    <span className="font-semibold">Conclusion :</span> {textContent.part2.chainOfThought.conclusion}
                  </li>
                </ul>
              </div>
            </div>
          </OptimizedCollapsibleSection>

          {/* Partie 3 */} 
          <OptimizedCollapsibleSection
            title={textContent.part3.title}
            icon={BookOpen}
            id="part3"
          >
            <p className="text-lg text-gray-700 mb-6 dark:text-gray-300">
              {textContent.part3.intro}
            </p>

            <div className="space-y-8">
              {/* Palais Mental */} 
              <div className="bg-white p-6 rounded-xl shadow-md dark:bg-gray-700">
                <h3 className="text-xl font-bold text-neuro-purple mb-3 dark:text-purple-300 flex items-center gap-2">
                  <Map className="h-5 w-5" /> {textContent.part3.mentalPalace.title}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    <span className="font-semibold">Principe :</span> {textContent.part3.mentalPalace.principle}
                  </li>
                  <li>
                    <span className="font-semibold">Est-ce adapté ?</span> {textContent.part3.mentalPalace.adapted}
                  </li>
                  <li>
                    <span className="font-semibold">Méthode Simplifiée :</span> {textContent.part3.mentalPalace.method}
                  </li>
                </ul>
              </div>

              {/* Aides Rapides */} 
              <div className="bg-white p-6 rounded-xl shadow-md dark:bg-gray-700">
                <h3 className="text-xl font-bold text-neuro-purple mb-3 dark:text-purple-300 flex items-center gap-2">
                  <Zap className="h-5 w-5" /> {textContent.part3.quickMemoryAids.title}
                </h3>
                <p className="text-gray-700 mb-4 dark:text-gray-300">
                  {textContent.part3.quickMemoryAids.description}
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    <span className="font-semibold">Images Mentales Frappantes :</span> {textContent.part3.quickMemoryAids.images}
                  </li>
                  <li>
                    <span className="font-semibold">Analogies Familières :</span> {textContent.part3.quickMemoryAids.analogies}
                  </li>
                  <li>
                    <span className="font-semibold">Acronymes :</span> {textContent.part3.quickMemoryAids.acronyms}
                  </li>
                </ul>
              </div>
            </div>
          </OptimizedCollapsibleSection>

          {/* Partie 4 */} 
          <OptimizedCollapsibleSection
            title={textContent.part4.title}
            icon={Smartphone}
            id="part4"
          >
            <p className="text-lg text-gray-700 mb-6 dark:text-gray-300">
              {textContent.part4.intro}
            </p>

            <div className="space-y-8">
              {/* IA Structuration */} 
              <div className="bg-white p-6 rounded-xl shadow-md dark:bg-gray-700">
                <h3 className="text-xl font-bold text-neuro-purple mb-3 dark:text-purple-300 flex items-center gap-2">
                  <Brain className="h-5 w-5" /> {textContent.part4.aiStructuring.title}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    <span className="font-semibold">Méthode :</span> {textContent.part4.aiStructuring.method}
                  </li>
                </ul>
              </div>

              {/* IA Tâches */} 
              <div className="bg-white p-6 rounded-xl shadow-md dark:bg-gray-700">
                <h3 className="text-xl font-bold text-neuro-purple mb-3 dark:text-purple-300 flex items-center gap-2">
                  <Gamepad2 className="h-5 w-5" /> {textContent.part4.aiTasks.title}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    <span className="font-semibold">To-Do Lists Assistées :</span> {textContent.part4.aiTasks.todo}
                  </li>
                  <li>
                    <span className="font-semibold">Programmation de Tâches :</span> {textContent.part4.aiTasks.planning}
                  </li>
                  <li>
                    <span className="font-semibold">Rappels Intelligents :</span> {textContent.part4.aiTasks.reminders}
                  </li>
                </ul>
              </div>

              {/* Pour les Enfants */} 
              <div className="bg-white p-6 rounded-xl shadow-md dark:bg-gray-700">
                <h3 className="text-xl font-bold text-neuro-purple mb-3 dark:text-purple-300 flex items-center gap-2">
                  <Users className="h-5 w-5" /> {textContent.part4.forChildren.title}
                </h3>
                <p className="text-gray-700 mb-4 dark:text-gray-300">
                  {textContent.part4.forChildren.intro}
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    <span className="font-semibold">La "Boîte à Idées" :</span> {textContent.part4.forChildren.ideaBox}
                  </li>
                  <li>
                    <span className="font-semibold">Le Dessin en Étoile (Mind Mapping) :</span> {textContent.part4.forChildren.mindMapping}
                  </li>
                  <li>
                    <span className="font-semibold">La Recette de Cuisine :</span> {textContent.part4.forChildren.recipe}
                  </li>
                  <li>
                    <span className="font-semibold">Le Chemin du Trésor dans la Chambre :</span> {textContent.part4.forChildren.treasureHunt}
                  </li>
                </ul>
              </div>
            </div>
          </OptimizedCollapsibleSection>
        </motion.div>

              {/* Footer */} 
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-12 text-center text-gray-600 dark:text-gray-400 text-sm"
              >
                <p>&copy; {new Date().getFullYear()} NeuroDiversité Explorer. Tous droits réservés.</p>
                <p>Développé avec ❤️ par Geoffroy Streit</p>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="textual"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Textual Presentation */}
              <div className="bg-white rounded-xl shadow-lg p-8 dark:bg-gray-800 prose prose-lg max-w-none dark:prose-invert">
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold text-neuro-purple mb-4 dark:text-purple-400">
                    Guide Pratique : Naviguer dans le Labyrinthe des Idées
                  </h1>
                  <p className="text-lg text-gray-600 dark:text-gray-300 italic">
                    Pour les esprits foisonnants qui peinent à structurer leurs pensées et à retenir l'essentiel
                  </p>
                </div>

                <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <section>
                    <h2 className="text-2xl font-bold text-neuro-purple mb-4 dark:text-purple-400">
                      Préambule : Différence et Liens entre Mémoire et Structuration de la Pensée
                    </h2>
                    <p className="mb-4">
                      Il est essentiel de comprendre pourquoi ces deux difficultés sont si souvent liées, notamment chez les profils neuroatypiques.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">La Différence :</h3>
                    <ul className="space-y-2 mb-4">
                      <li>La structuration de la pensée est une fonction exécutive. C'est le travail de l'architecte : planifier, organiser, hiérarchiser les idées, créer des liens logiques et suivre un raisonnement.</li>
                      <li>La mémoire, et plus spécifiquement la mémoire de travail, est le chantier de l'architecte. C'est l'espace mental limité où l'on conserve et manipule les "briques" (les idées, les faits, les consignes) le temps de construire le "mur" (la réflexion).</li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Le Lien Indissociable :</h3>
                    <p className="mb-4">
                      Imaginez que vous essayez de construire un mur, mais que les briques disparaissent de vos mains dès que vous en saisissez une nouvelle. C'est exactement ce qui se passe lorsqu'une mémoire de travail défaillante rencontre un besoin de structuration :
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li><strong>Surcharge Cognitive :</strong> Le cerveau dépense une énergie considérable juste pour retenir les éléments de la pensée (le début d'une phrase, l'idée A, l'argument B). Il ne lui reste alors que peu de ressources pour le travail de structuration (comment A et B sont-ils liés ? Lequel est le plus important ?).</li>
                      <li><strong>Perte du Fil :</strong> Au milieu d'une réflexion, une nouvelle idée (pensée en arborescence du TDA/H) ou une distraction survient. La mémoire de travail, déjà saturée, "lâche" les informations précédentes pour traiter la nouvelle. Le fil est rompu.</li>
                      <li><strong>L'Oubli de l'Objectif :</strong> Sans une mémoire de travail solide pour garder l'objectif final en tête, il est facile de se perdre dans les méandres des sous-idées et de ne jamais arriver à une conclusion.</li>
                    </ul>
                    <p className="mb-6">
                      Ce guide propose des stratégies visant précisément à décharger la mémoire de travail pour libérer des ressources mentales au profit de la structuration.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-neuro-purple mb-4 dark:text-purple-400">
                      Partie 1 : La Fondation - Externaliser sa Pensée pour Libérer sa Mémoire
                    </h2>
                    <p className="mb-4">
                      L'objectif est de sortir les idées de votre tête le plus vite et le plus fidèlement possible, sans filtre ni jugement.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">1. La "Vidange Cérébrale" (Brain Dumping)</h3>
                    <p className="mb-3">C'est la technique la plus fondamentale. L'idée est de créer un réceptacle externe pour vos pensées.</p>
                    <p className="mb-2"><strong>Principe :</strong> Sur une feuille de papier, un tableau blanc ou un document numérique (Notion, OneNote, etc.), écrivez absolument tout ce qui vous passe par la tête concernant votre sujet de réflexion.</p>
                    <p className="mb-2"><strong>Méthode :</strong></p>
                    <ul className="space-y-1 mb-3 ml-4">
                      <li><strong>En Vrac Total :</strong> Ne vous souciez ni de l'ordre, ni de la grammaire, ni de la pertinence. Notez des mots-clés, des bribes de phrases, des questions, des doutes.</li>
                      <li><strong>Sans Jugement :</strong> L'objectif n'est pas de produire un texte parfait, mais de vider votre charge mentale. Une idée "bête" peut en cacher une brillante.</li>
                    </ul>
                    <p className="mb-4"><strong>Le Résultat :</strong> Vous disposez maintenant d'une "photographie" de votre pensée à un instant T. Votre cerveau n'a plus à lutter pour tout retenir, il peut passer à l'étape suivante : l'organisation.</p>
                    
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">2. La Dictée Vocale : La Pensée Fluide</h3>
                    <p className="mb-3">Pour beaucoup, la pensée est plus rapide et instinctive que la vitesse de frappe ou d'écriture, souvent source de blocage (sauf en cas de dysphasie sévère).</p>
                    <p className="mb-2"><strong>Principe :</strong> Utiliser la fonction dictaphone de votre téléphone ou un logiciel de transcription pour parler de votre idée, comme si vous l'expliquiez à quelqu'un.</p>
                    <p className="mb-2"><strong>Méthode :</strong></p>
                    <ul className="space-y-1 mb-3 ml-4">
                      <li>Ouvrez une note ou un enregistreur et parlez. Décrivez votre projet, posez vos questions à voix haute, développez vos arguments de manière décousue.</li>
                      <li><strong>L'avantage crucial :</strong> Même si au bout de la phrase vous avez oublié le début, l'enregistrement, lui, sera complet.</li>
                    </ul>
                    <p className="mb-6"><strong>Exploitation :</strong> Relisez (ou faites lire par une IA) la transcription. Le simple fait de voir vos propres mots vous remettra sur les rails de votre pensée, vous permettant de la poursuivre, de la corriger et de l'enrichir.</p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-neuro-purple mb-4 dark:text-purple-400">
                      Partie 2 : L'Atelier d'Organisation - Structurer le Chaos
                    </h2>
                    <p className="mb-4">Une fois vos idées externalisées, il faut les organiser. C'est là que la magie opère.</p>
                    
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">3. Le Laboratoire Visuel et Itératif</h3>
                    <p className="mb-3">C'est la phase d'organisation manuelle et visuelle, très efficace pour les penseurs visuels.</p>
                    <p className="mb-2"><strong>Principe :</strong> Utiliser des codes visuels pour regrouper, hiérarchiser et relier les idées issues de votre "vidange cérébrale".</p>
                    <p className="mb-2"><strong>Méthode :</strong></p>
                    <ul className="space-y-1 mb-3 ml-4">
                      <li><strong>Regrouper :</strong> Utilisez des surligneurs de couleurs différentes pour lier les idées qui vont ensemble. Entourez les concepts similaires.</li>
                      <li><strong>Hiérarchiser :</strong> Utilisez des symboles (étoiles, chiffres) ou des tailles d'écriture différentes pour marquer les idées principales, les sous-idées et les détails.</li>
                      <li><strong>Faire des Liens :</strong> Dessinez des flèches, des schémas, des tableaux simples pour visualiser les relations de cause à effet, les oppositions, les séquences.</li>
                    </ul>
                    <p className="mb-4"><strong>Outils :</strong> Des post-it de couleurs différentes sur un mur, un grand tableau blanc, ou des applications de mind mapping (Xmind, Miro, Coggle).</p>
                    
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">4. Le Principe de la "Chaîne de Pensée" (Chain of Thought)</h3>
                    <p className="mb-3">Cette technique aide à construire un raisonnement linéaire à partir d'un point de départ.</p>
                    <p className="mb-2"><strong>Principe :</strong> Partir d'une idée initiale et se forcer à la lier à la suivante par une question ou une déduction logique, créant une chaîne.</p>
                    <p className="mb-2"><strong>Méthode :</strong></p>
                    <ul className="space-y-1 mb-3 ml-4">
                      <li>Phrase de départ : "Je dois organiser un événement."</li>
                      <li>Question induite : "Quel est le but de cet événement ?" → Réponse/Maillon suivant : "Le but est de célébrer le lancement du produit X."</li>
                      <li>Question induite : "Qui devons-nous inviter ?" → Réponse/Maillon suivant : "Les clients, les partenaires, la presse."</li>
                      <li>... et ainsi de suite.</li>
                    </ul>
                    <p className="mb-6">Cela transforme une montagne de réflexion en une série de petites collines à franchir l'une après l'autre.</p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-neuro-purple mb-4 dark:text-purple-400">
                      Partie 3 : Consolider les Acquis - Techniques de Mémorisation Active
                    </h2>
                    <p className="mb-4">Même avec des notes, il faut parfois garder des éléments clés en tête.</p>
                    
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">5. Le Palais Mental : Une Technique Puissante mais Exigeante</h3>
                    <p className="mb-2"><strong>Principe :</strong> Associer des informations à mémoriser à des lieux ou des objets dans un endroit que vous connaissez parfaitement (votre maison, votre trajet pour le travail). Pour se souvenir, on parcourt mentalement ce lieu.</p>
                    <p className="mb-2"><strong>Est-ce adapté ?</strong></p>
                    <ul className="space-y-1 mb-3 ml-4">
                      <li><strong>Oui :</strong> Pour mémoriser une liste d'éléments structurés et ordonnés (les étapes d'un discours, les points clés d'une présentation).</li>
                      <li><strong>Non :</strong> Moins adapté pour la phase créative et chaotique de la réflexion. C'est un outil de stockage, pas de création.</li>
                    </ul>
                    <p className="mb-2"><strong>Méthode Simplifiée :</strong></p>
                    <ul className="space-y-1 mb-4 ml-4">
                      <li>Choisissez votre lieu : Votre appartement.</li>
                      <li>Définissez un parcours logique : Porte d'entrée → Couloir → Cuisine → Salon...</li>
                      <li>Placez vos idées : Associez votre première idée (ex: "Introduction du projet") à la porte d'entrée de manière imagée et marquante (ex: la porte est recouverte du logo du projet). Associez la deuxième idée à l'objet suivant sur votre parcours, etc.</li>
                      <li>Répétez la promenade mentale pour la renforcer.</li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">6. Aides à la Mémorisation Rapides</h3>
                    <p className="mb-2">Pour les concepts importants au sein de vos réflexions, utilisez des techniques plus légères :</p>
                    <ul className="space-y-1 mb-6 ml-4">
                      <li><strong>Images Mentales Frappantes :</strong> Associez un concept abstrait à une image absurde, drôle ou émotionnellement forte.</li>
                      <li><strong>Analogies Familières :</strong> Reliez une nouvelle idée à quelque chose que vous connaissez déjà très bien.</li>
                      <li><strong>Acronymes :</strong> Créez un mot avec la première lettre de chaque élément d'une liste.</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-neuro-purple mb-4 dark:text-purple-400">
                      Partie 4 : L'Allié Moderne - Utiliser l'Intelligence Artificielle et la Technologie
                    </h2>
                    <p className="mb-4">L'IA peut agir comme un co-pilote pour votre pensée.</p>
                    
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">L'IA comme Assistant de Structuration :</h3>
                    <p className="mb-2">Copiez-collez votre "vidange cérébrale" ou la transcription de votre dictée vocale dans une IA (Gemini, ChatGPT, etc.).</p>
                    <p className="mb-2">Demandez-lui :</p>
                    <ul className="space-y-1 mb-4 ml-4">
                      <li>"Résume ce texte en 5 points clés."</li>
                      <li>"Regroupe ces idées par thèmes."</li>
                      <li>"Identifie une structure logique (introduction, développement, conclusion) dans ce texte."</li>
                      <li>"Propose une suite ou des aspects à développer à partir de ces notes."</li>
                      <li>"Transforme cette liste de points en un plan détaillé."</li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">L'IA pour Décomposer les Tâches et Gérer le Temps :</h3>
                    <ul className="space-y-2 mb-4 ml-4">
                      <li><strong>To-Do Lists Assistées :</strong> Des applications comme Todoist ou Motion peuvent organiser vos tâches et vous aider à planifier votre journée.</li>
                      <li><strong>Programmation de Tâches :</strong> Donnez un objectif à une IA ("Je dois préparer une présentation sur le sujet X pour vendredi") et demandez-lui de décomposer le projet en une liste de tâches réalisables avec des échéances.</li>
                      <li><strong>Rappels Intelligents :</strong> Utilisez les assistants vocaux ("Hey Google, rappelle-moi d'envoyer un mail à Paul à 14h") pour décharger votre mémoire prospective. Des applications comme Tiimo sont spécifiquement conçues pour les profils neuroatypiques, avec des rappels visuels et une structuration du temps.</li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Pour les Enfants : Adapter les Astuces à l'Apprentissage</h3>
                    <p className="mb-2">Les mêmes principes s'appliquent, mais de manière plus ludique.</p>
                    <ul className="space-y-2 mb-6 ml-4">
                      <li><strong>La "Boîte à Idées" :</strong> Au lieu d'une feuille, utilisez une vraie boîte où l'enfant peut déposer des dessins, des post-it, des objets (LEGOs) qui représentent ses idées pour une rédaction ou un exposé.</li>
                      <li><strong>Le Dessin en Étoile (Mind Mapping) :</strong> Mettez le sujet principal au centre d'une grande feuille et demandez à l'enfant de dessiner des "branches" pour chaque idée qui s'y rattache. Utilisez beaucoup de couleurs.</li>
                      <li><strong>La Recette de Cuisine :</strong> Pour un devoir complexe, présentez les étapes comme une recette : "Ingrédient 1 : Lire la consigne. Ingrédient 2 : Souligner les mots importants... Étape 1 : Préparer le brouillon..."</li>
                      <li><strong>Le Chemin du Trésor dans la Chambre :</strong> Pour mémoriser une leçon (les planètes du système solaire, par exemple), "cachez" chaque planète dans un endroit de la chambre (le Soleil sur la lampe, Mars sous le tapis rouge...). L'enfant mémorise le parcours pour retrouver sa leçon.</li>
                    </ul>
                  </section>

                  <div className="text-center mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
                    <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Auteur : Geoffroy Streit - 2021 - revu et amélioré en 2025
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      Titre : Guide Pratique : Naviguer dans le Labyrinthe des Idées
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Footer for textual tab */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-8 text-center text-gray-600 dark:text-gray-400 text-sm"
              >
                <p>&copy; {new Date().getFullYear()} NeuroDiversité Explorer. Tous droits réservés.</p>
                <p>Développé avec ❤️ par Geoffroy Streit</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NavigationLabyrintheIdees;