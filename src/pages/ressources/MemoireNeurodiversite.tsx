import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Brain, Clock, Users, AlertCircle, BookOpen, Target, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

/**
 * Component for displaying the Memory and Neurodiversity document
 * Presents information about memory disorders in neurodivergent profiles
 */
const MemoireNeurodiversite = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('modular');

  /**
   * Handle navigation back to resources page
   */
  const handleBack = () => {
    navigate('/ressources');
  };

  const textContent = `Les troubles de la mémoire sont une composante fréquente, bien que souvent méconnue ou mal interprétée, des profils neurodivergents comme le Trouble du Déficit de l'Attention avec ou sans Hyperactivité (TDA/H), le Trouble du Spectre de l'Autisme (TSA) et les troubles "Dys" (dyslexie, dyspraxie, etc.). Loin d'une simple "tête en l'air", ces difficultés s'ancrent dans des fonctionnements cérébraux spécifiques et impactent profondément le quotidien, la scolarité et la vie sociale. Il ne s'agit pas de troubles mnésiques globaux comme l'amnésie, mais plutôt d'atteintes sélectives de certains systèmes de mémoire.

Les Différents Visages de la Mémoire et Leurs Atteintes
Notre mémoire n'est pas un bloc monolithique, mais un ensemble de systèmes complexes. Les profils neurodivergents présentent des vulnérabilités particulières sur certains d'entre eux :

Type de Mémoire | Description | Profils Neurodivers Concernés | Manifestations Typiques

Mémoire de Travail | Système à capacité limitée qui maintient et manipule temporairement l'information nécessaire à la réalisation de tâches cognitives (raisonner, apprendre, comprendre). C'est le "post-it" ou la "RAM" du cerveau. | TDA/H (très fortement), Dyslexie, Dyspraxie, TSA | Oublier une instruction donnée à l'oral, perdre le fil de ses idées en parlant, avoir du mal à suivre une conversation de groupe, difficultés en calcul mental, oublier ce qu'on est venu chercher dans une pièce.

Mémoire Procédurale | Mémoire des savoir-faire et des habiletés motrices, qui permet d'automatiser les gestes et les procédures (faire du vélo, écrire, taper sur un clavier). | Dyspraxie (fortement), TDA/H | Lenteur pour apprendre les gestes du quotidien (lacer ses chaussures), écriture manuscrite difficile et non automatisée, difficultés à apprendre une chorégraphie ou une séquence de mouvements.

Mémoire Épisodique / Autobiographique | Mémoire des événements vécus personnellement, avec leur contexte émotionnel, spatial et temporel. C'est le film de notre vie. | TSA | Souvenirs moins détaillés, factuels, avec une difficulté à se remémorer le contexte émotionnel. Difficulté à se "re-projeter" dans le souvenir et à le partager de manière narrative.

Mémoire Sémantique | Mémoire des connaissances générales sur le monde, des faits, des concepts et du sens des mots. C'est notre encyclopédie interne. | Généralement préservée, mais l'accès peut être fluctuant chez les TDA/H ("le mot sur le bout de la langue"). | Difficultés ponctuelles à retrouver un mot ou une information pourtant connue, nécessitant des indices pour y accéder.

Mémoire Prospective | Mémoire du futur : se souvenir d'exécuter une action planifiée (se souvenir de prendre ses médicaments, de poster une lettre, d'un rendez-vous). | TDA/H (très fortement), TSA | Oublis fréquents de rendez-vous, de rendre des travaux à temps, de payer des factures, de répondre à un message.

Niveaux de Gravité et Profils Concernés
La sévérité des troubles de la mémoire varie considérablement d'un individu à l'autre, même au sein d'un même diagnostic. On ne parle pas de stades comme dans les maladies dégénératives, mais plutôt d'un continuum de l'impact fonctionnel.

TDA/H : Le trouble de la mémoire le plus central et handicapant est celui de la mémoire de travail. Son atteinte est quasi systématique et constitue un critère diagnostique majeur. L'impact est souvent qualifié de modéré à sévère, car il affecte l'ensemble des apprentissages et de l'organisation quotidienne. La mémoire prospective est également très touchée.

TSA : Les particularités de la mémoire autobiographique sont une caractéristique fondamentale du profil. La gravité dépend de la capacité de la personne à développer des stratégies de compensation. La mémoire sémantique peut être un point fort (hypermnésie sur les intérêts spécifiques), tandis que la mémoire de travail peut être hétérogène.

Troubles "Dys" :

Dyspraxie : L'atteinte de la mémoire procédurale est au cœur du trouble, avec un impact sévère sur l'automatisation des gestes.
Dyslexie : La surcharge de la mémoire de travail est une conséquence directe des efforts de décodage. L'impact est majeur sur les apprentissages écrits.
Autres "Dys" (dysphasie, dyscalculie) : Ils impliquent également une forte sollicitation et une potentielle fragilité de la mémoire de travail.
Il est crucial de noter que ces troubles sont souvent associés (comorbidités). Un enfant dyslexique peut aussi avoir un TDA/H, cumulant ainsi les fragilités de la mémoire de travail, ce qui majore l'impact sur sa scolarité.

Manifestations, Impacts et Conséquences
Les difficultés de mémoire chez les personnes neuroatypiques ne sont pas de simples oublis ; elles engendrent une cascade de conséquences dans toutes les sphères de la vie.

Domaine | Manifestations et Conséquences

Scolarité et Apprentissages | - Difficulté à retenir les leçons, les consignes multiples, les tables de multiplication. - Lenteur dans l'exécution des tâches. - Difficulté à prendre des notes et à écouter simultanément. - Oubli du matériel scolaire, des devoirs à faire, des dates d'examen. - Épuisement cognitif et sentiment d'échec malgré les efforts.

Vie Quotidienne et Autonomie | - Perte fréquente d'objets personnels (clés, téléphone, portefeuille). - Difficulté à gérer les tâches administratives, les rendez-vous. - Procrastination due à la difficulté d'initier et de se souvenir des étapes d'une tâche. - Difficulté à suivre une recette de cuisine ou des instructions de montage. - Sentiment d'être constamment dépassé et désorganisé.

Vie Sociale et Relationnelle | - Difficulté à retenir les prénoms ou les informations partagées par les autres, pouvant être perçu comme un désintérêt. - Perte du fil dans les conversations. - Oubli des anniversaires ou des événements importants. - Difficulté à raconter des souvenirs personnels de manière fluide (TSA). - Anxiété sociale liée à la peur de l'oubli ou de commettre un impair.

Estime de Soi et Santé Mentale | - Faible estime de soi, sentiment d'être "nul" ou "paresseux". - Anxiété de performance, stress chronique. - Frustration, irritabilité. - Risque accru de dépression et d'épuisement (burn-out) en raison de l'effort constant de compensation.

En conclusion, les troubles de la mémoire associés à la neurodiversité sont spécifiques, persistants et envahissants. Les reconnaître comme une partie intégrante du trouble, et non comme un défaut de caractère, est la première étape pour mettre en place des stratégies de compensation efficaces (agendas, alarmes, routines, aides visuelles) et un accompagnement bienveillant, permettant de réduire la charge mentale et de valoriser les autres forces cognitives de ces individus.

Auteur : Geoffroy Streit - 2021 - revu et amélioré en 2025
Titre : Mémoire et Neurodiversité : Un Labyrinthe aux Multiples Facettes`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Button
            onClick={handleBack}
            variant="ghost"
            className="mb-4 hover:bg-blue-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux ressources
          </Button>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center justify-center gap-3">
              <Brain className="h-10 w-10 text-blue-600" />
              Mémoire et Neurodiversité
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">Un Labyrinthe aux Multiples Facettes</p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span>Par Geoffroy Streit</span>
              <span>•</span>
              <span>2021 - revu 2025</span>
            </div>
          </div>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-100 dark:bg-gray-700">
            <TabsTrigger value="modular">Présentation modulaire</TabsTrigger>
            <TabsTrigger value="textual">Présentation textuelle</TabsTrigger>
          </TabsList>

          <TabsContent value="modular" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="mb-8 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-amber-600" />
                    Introduction
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Les troubles de la mémoire sont une composante fréquente, bien que souvent méconnue ou mal interprétée, 
                    des profils neurodivergents comme le Trouble du Déficit de l'Attention avec ou sans Hyperactivité (TDA/H), 
                    le Trouble du Spectre de l'Autisme (TSA) et les troubles "Dys" (dyslexie, dyspraxie, etc.). 
                    Loin d'une simple "tête en l'air", ces difficultés s'ancrent dans des fonctionnements cérébraux spécifiques 
                    et impactent profondément le quotidien, la scolarité et la vie sociale.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

        {/* Types de Mémoire */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="mb-8 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-blue-600" />
                Les Différents Types de Mémoire et Leurs Atteintes
              </CardTitle>
              <CardDescription>
                Notre mémoire n'est pas un bloc monolithique, mais un ensemble de systèmes complexes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Mémoire de Travail */}
              <div className="border-l-4 border-red-400 pl-4">
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-red-600" />
                  Mémoire de Travail
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Système à capacité limitée qui maintient et manipule temporairement l'information nécessaire 
                  à la réalisation de tâches cognitives. C'est le "post-it" ou la "RAM" du cerveau.
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge variant="destructive">TDA/H (très fortement)</Badge>
                  <Badge variant="secondary">Dyslexie</Badge>
                  <Badge variant="secondary">Dyspraxie</Badge>
                  <Badge variant="secondary">TSA</Badge>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Manifestations :</strong> Oublier une instruction donnée à l'oral, perdre le fil de ses idées, 
                  difficultés en calcul mental, oublier ce qu'on est venu chercher.
                </p>
              </div>

              {/* Mémoire Procédurale */}
              <div className="border-l-4 border-orange-400 pl-4">
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Target className="h-4 w-4 text-orange-600" />
                  Mémoire Procédurale
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Mémoire des savoir-faire et des habiletés motrices, qui permet d'automatiser les gestes et les procédures.
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge variant="destructive">Dyspraxie (fortement)</Badge>
                  <Badge variant="secondary">TDA/H</Badge>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Manifestations :</strong> Lenteur pour apprendre les gestes du quotidien, écriture manuscrite difficile, 
                  difficultés à apprendre une chorégraphie.
                </p>
              </div>

              {/* Mémoire Épisodique */}
              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-purple-600" />
                  Mémoire Épisodique / Autobiographique
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Mémoire des événements vécus personnellement, avec leur contexte émotionnel, spatial et temporel. 
                  C'est le film de notre vie.
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge variant="secondary">TSA</Badge>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Manifestations :</strong> Souvenirs moins détaillés, factuels, difficulté à se "re-projeter" 
                  dans le souvenir et à le partager de manière narrative.
                </p>
              </div>

              {/* Mémoire Prospective */}
              <div className="border-l-4 border-green-400 pl-4">
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Users className="h-4 w-4 text-green-600" />
                  Mémoire Prospective
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Mémoire du futur : se souvenir d'exécuter une action planifiée.
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge variant="destructive">TDA/H (très fortement)</Badge>
                  <Badge variant="secondary">TSA</Badge>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Manifestations :</strong> Oublis fréquents de rendez-vous, de rendre des travaux à temps, 
                  de payer des factures, de répondre à un message.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Niveaux de Gravité */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="mb-8 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-amber-600" />
                Niveaux de Gravité et Profils Concernés
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="border-red-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-red-700">TDA/H</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Atteinte quasi systématique de la mémoire de travail. Impact modéré à sévère 
                      sur l'ensemble des apprentissages et de l'organisation quotidienne.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-blue-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-blue-700">TSA</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Particularités de la mémoire autobiographique. La mémoire sémantique peut être 
                      un point fort (hypermnésie sur les intérêts spécifiques).
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-purple-700">Troubles "Dys"</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Dyspraxie : atteinte sévère de la mémoire procédurale. 
                      Dyslexie : surcharge de la mémoire de travail par les efforts de décodage.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Impacts et Conséquences */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="mb-8 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-pink-600" />
                Manifestations, Impacts et Conséquences
              </CardTitle>
              <CardDescription>
                Les difficultés de mémoire engendrent une cascade de conséquences dans toutes les sphères de la vie
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Scolarité */}
              <div>
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-blue-600" />
                  Scolarité et Apprentissages
                </h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">dark:text-gray-300 text-sm">
                  <li>Difficulté à retenir les leçons, les consignes multiples, les tables de multiplication</li>
                  <li>Lenteur dans l'exécution des tâches</li>
                  <li>Difficulté à prendre des notes et à écouter simultanément</li>
                  <li>Oubli du matériel scolaire, des devoirs à faire, des dates d'examen</li>
                  <li>Épuisement cognitif et sentiment d'échec malgré les efforts</li>
                </ul>
              </div>

              <Separator />

              {/* Vie Quotidienne */}
              <div>
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Target className="h-4 w-4 text-green-600" />
                  Vie Quotidienne et Autonomie
                </h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                  <li>Perte fréquente d'objets personnels (clés, téléphone, portefeuille)</li>
                  <li>Difficulté à gérer les tâches administratives, les rendez-vous</li>
                  <li>Procrastination due à la difficulté d'initier et de se souvenir des étapes d'une tâche</li>
                  <li>Difficulté à suivre une recette de cuisine ou des instructions de montage</li>
                  <li>Sentiment d'être constamment dépassé et désorganisé</li>
                </ul>
              </div>

              <Separator />

              {/* Vie Sociale */}
              <div>
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Users className="h-4 w-4 text-purple-600" />
                  Vie Sociale et Relationnelle
                </h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                  <li>Difficulté à retenir les prénoms ou les informations partagées par les autres</li>
                  <li>Perte du fil dans les conversations</li>
                  <li>Oubli des anniversaires ou des événements importants</li>
                  <li>Difficulté à raconter des souvenirs personnels de manière fluide (TSA)</li>
                  <li>Anxiété sociale liée à la peur de l'oubli ou de commettre un impair</li>
                </ul>
              </div>

              <Separator />

              {/* Santé Mentale */}
              <div>
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Heart className="h-4 w-4 text-pink-600" />
                  Estime de Soi et Santé Mentale
                </h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                  <li>Faible estime de soi, sentiment d'être "nul" ou "paresseux"</li>
                  <li>Anxiété de performance, stress chronique</li>
                  <li>Frustration, irritabilité</li>
                  <li>Risque accru de dépression et d'épuisement (burn-out) en raison de l'effort constant de compensation</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>

            {/* Conclusion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-800">
                    <Brain className="h-5 w-5" />
                    Conclusion
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Les troubles de la mémoire associés à la neurodiversité sont spécifiques, persistants et envahissants. 
                    Les reconnaître comme une partie intégrante du trouble, et non comme un défaut de caractère, 
                    est la première étape pour mettre en place des stratégies de compensation efficaces 
                    (agendas, alarmes, routines, aides visuelles) et un accompagnement bienveillant, 
                    permettant de réduire la charge mentale et de valoriser les autres forces cognitives de ces individus.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="textual" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                    Version textuelle complète
                  </CardTitle>
                  <CardDescription>
                    Contenu intégral du document au format texte
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-gray max-w-none">
                    <div className="whitespace-pre-line text-gray-700 dark:text-gray-300 leading-relaxed">
                      {textContent}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MemoireNeurodiversite;