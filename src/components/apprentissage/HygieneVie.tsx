import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Lightbulb, Heart } from 'lucide-react';

const HygieneVie = () => {
  return (
    <div className="max-w-7xl mx-auto md:flex md:gap-8 px-4">
      {/* Main content column */}
      <div className="md:w-4/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">
            <span className="neuro-gradient-text">Module 6:</span> Hygiène de vie
          </h2>
          
          <p className="text-lg text-center mb-8 max-w-3xl mx-auto">
            Optimiser le bien-être pour favoriser l'apprentissage chez les personnes neurodivergentes
          </p>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Hygiène de vie et Apprentissage</h3>
              <p className="mb-4">
                Une bonne hygiène de vie est fondamentale pour optimiser les capacités d'apprentissage, particulièrement pour les cerveaux neurodivergents. 
                Un corps et un esprit sains créent un terrain fertile pour l'acquisition de nouvelles connaissances et compétences.
              </p>
              
              <div className="space-y-6 mt-6">
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-neuro-blue">Sommeil Réparateur</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Routine régulière :</strong> Se coucher et se lever à heures fixes, même le week-end.</li>
                    <li><strong>Environnement propice :</strong> Chambre sombre, calme et fraîche. Éviter les écrans avant le coucher.</li>
                    <li><strong>Gestion de l'hyperactivité mentale :</strong> Techniques de relaxation, méditation ou lecture apaisante avant de dormir.</li>
                    <li><strong>Siestes courtes :</strong> Si besoin, des siestes de 20-30 minutes peuvent aider, mais éviter les longues siestes tardives.</li>
                  </ul>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-neuro-green">Alimentation Équilibrée</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Repas réguliers :</strong> Éviter de sauter des repas pour maintenir un niveau d'énergie stable.</li>
                    <li><strong>Nutriments essentiels :</strong> Privilégier les fruits, légumes, protéines maigres et grains entiers.</li>
                    <li><strong>Hydratation :</strong> Boire suffisamment d'eau tout au long de la journée.</li>
                    <li><strong>Sensibilités alimentaires :</strong> Être attentif aux éventuelles sensibilités (gluten, produits laitiers, additifs) qui peuvent impacter la concentration.</li>
                  </ul>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-neuro-orange">Exercice Physique Régulier</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Activité plaisante :</strong> Choisir une activité que l'on aime pour favoriser la régularité (marche, vélo, danse, yoga).</li>
                    <li><strong>Bénéfices multiples :</strong> Améliore la concentration, réduit le stress et favorise un meilleur sommeil.</li>
                    <li><strong>Adapté aux besoins :</strong> Pour certains, des activités intenses sont bénéfiques, pour d'autres, des mouvements plus doux sont préférables.</li>
                    <li><strong>Intégration au quotidien :</strong> Marcher pour de courts trajets, prendre les escaliers.</li>
                  </ul>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-neuro-red">Gestion du Stress et Bien-être Mental</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Techniques de relaxation :</strong> Respiration profonde, pleine conscience, méditation.</li>
                    <li><strong>Temps pour soi :</strong> Activités relaxantes et plaisantes (hobbies, nature, musique).</li>
                    <li><strong>Expression émotionnelle :</strong> Parler de ses ressentis, tenir un journal.</li>
                    <li><strong>Limiter la surcharge sensorielle :</strong> Prévoir des moments de calme et des environnements apaisants.</li>
                  </ul>
                </div>
              </div>

              <div className="border-l-4 border-neuro-purple pl-4 mt-8">
                <p className="italic">
                  <Lightbulb className="h-4 w-4 inline mr-2" />
                  N'oubliez pas : chaque personne est unique. Expérimentez pour découvrir ce qui fonctionne le mieux pour vous ou pour la personne que vous accompagnez. 
                  Ces recommandations sont des pistes générales à adapter individuellement.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Sidebar column */}
      <aside className="md:w-1/5 mt-8 md:mt-0">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="sticky top-24"> {/* Adjust top-X based on actual navbar height */}
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-neuro-purple">Encarts Clés</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-1">Astuce Rapide</h4>
                  <p className="text-sm text-muted-foreground">Intégrez 30 minutes d'activité physique quotidienne pour améliorer significativement vos capacités cognitives.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Le Saviez-vous ?</h4>
                  <p className="text-sm text-muted-foreground">Le manque de sommeil peut amplifier les difficultés sensorielles et attentionnelles chez les personnes neurodivergentes.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Ressources Utiles</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li><a href="https://www.reseau-morphee.fr/" className="text-neuro-blue hover:underline" target="_blank" rel="noopener noreferrer">Réseau Morphée - Troubles du sommeil</a></li>
                    <li><a href="https://www.mangerbouger.fr/" className="text-neuro-blue hover:underline" target="_blank" rel="noopener noreferrer">Manger Bouger - Programme national nutrition santé</a></li>
                    <li><a href="https://www.mindfulnessfrance.net/" className="text-neuro-blue hover:underline" target="_blank" rel="noopener noreferrer">Association pour le développement de la mindfulness</a></li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </aside>
    </div>
  );
};

export default HygieneVie;