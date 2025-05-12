
import React from 'react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Clock4, Coffee, Calendar, Home, ShoppingCart, BedDouble, HeartPulse, Brain, Timer } from 'lucide-react';

const DailyLifeTips = () => {
  const tips = [
    {
      title: "Routines structurées",
      description: "Établir des routines claires pour le matin, le soir et les transitions importantes de la journée",
      icon: <Clock4 className="h-5 w-5 text-neuro-purple" />,
      tips: [
        "Utiliser des applications de rappel ou des planificateurs visuels",
        "Décomposer les routines complexes en étapes simples",
        "Maintenir des horaires similaires chaque jour",
        "Prévoir du temps tampon entre les activités"
      ]
    },
    {
      title: "Gestion de l'environnement",
      description: "Adapter son espace de vie pour réduire les distractions et améliorer le confort sensoriel",
      icon: <Home className="h-5 w-5 text-neuro-purple" />,
      tips: [
        "Créer des zones dédiées pour chaque activité",
        "Utiliser un éclairage adapté (éviter les lumières fluorescentes)",
        "Réduire les bruits de fond avec des bouchons d'oreilles ou du bruit blanc",
        "Organiser les objets de manière visible mais ordonnée"
      ]
    },
    {
      title: "Auto-régulation émotionnelle",
      description: "Techniques pour gérer les états émotionnels intenses et l'anxiété",
      icon: <HeartPulse className="h-5 w-5 text-neuro-purple" />,
      tips: [
        "Pratiquer des exercices de respiration profonde",
        "Identifier ses déclencheurs émotionnels",
        "Intégrer des pauses sensorielles dans sa journée",
        "Utiliser des objets d'autorégulation (balles anti-stress, objets lestés)"
      ]
    },
    {
      title: "Organisation pratique",
      description: "Stratégies pour gérer les tâches quotidiennes et éviter l'oubli",
      icon: <ShoppingCart className="h-5 w-5 text-neuro-purple" />,
      tips: [
        "Utiliser des listes de contrôle pour les courses et les tâches",
        "Organiser son domicile avec des systèmes de rangement visuels",
        "Préparer les vêtements et repas à l'avance",
        "Utiliser des rappels et alertes sur smartphone"
      ]
    },
    {
      title: "Gestion du temps",
      description: "Méthodes pour améliorer la perception du temps et respecter les horaires",
      icon: <Timer className="h-5 w-5 text-neuro-purple" />,
      tips: [
        "Utiliser des minuteurs visuels (Time Timer)",
        "Appliquer la technique Pomodoro (25 min de travail, 5 min de pause)",
        "Surestimer le temps nécessaire pour chaque tâche",
        "Utiliser des codes couleur dans son agenda"
      ]
    },
    {
      title: "Hygiène de vie",
      description: "Habitudes pour maintenir un équilibre physique favorable au fonctionnement cognitif",
      icon: <BedDouble className="h-5 w-5 text-neuro-purple" />,
      tips: [
        "Respecter un horaire de sommeil régulier",
        "Pratiquer une activité physique quotidienne",
        "Maintenir une hydratation adéquate",
        "Éviter les aliments qui déclenchent des réactions sensorielles"
      ]
    }
  ];

  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
          <Coffee className="h-6 w-6 text-primary" />
          Conseils pour la vie quotidienne
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
          Stratégies pratiques pour simplifier le quotidien et renforcer l'autonomie
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((tip, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2">
                  {tip.icon}
                  <CardTitle className="text-lg">{tip.title}</CardTitle>
                </div>
                <CardDescription>{tip.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {tip.tips.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1 text-xs">●</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DailyLifeTips;
