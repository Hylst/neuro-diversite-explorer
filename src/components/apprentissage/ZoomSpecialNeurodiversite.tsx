import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Share2, MessageCircle, Search, Brain, Zap, Users, Smile, Rocket, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

// Function-level comment: Defines the ZoomSpecialNeurodiversite component for Module 5.
const ZoomSpecialNeurodiversite: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto md:flex md:gap-8 px-4">
      {/* Main content column */}
      <div className="md:w-4/5">
        <div className="space-y-12">
          <Card className="neuro-card border-neuro-purple">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center neuro-gradient-text">
                <Brain className="inline-block h-8 w-8 mr-2" />
                Module 5 : Zoom Spécial – La Neurodiversité, Notre Super-Pouvoir Collectif !
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-lg">
              <p className="text-center italic">
                Cette section explore la richesse de la neurodiversité et comment elle façonne nos apprentissages.
              </p>
            </CardContent>
          </Card>

          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Lightbulb className="h-6 w-6 mr-2 text-yellow-500" />
              C'est quoi au juste, la neurodiversité ? (Rappel simple et positif)
            </h2>
            <p className="text-muted-foreground">
              Chaque cerveau est unique. Certains fonctionnent d'une manière "typique", d'autres d'une manière "atypique" (TDAH, troubles DYS, TSA, HPI...). Ce n'est ni mieux, ni moins bien, c'est différent. La neurodiversité célèbre cette variété de fonctionnements cérébraux comme une force pour l'humanité.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Users className="h-6 w-6 mr-2 text-blue-500" />
              Reconnaître et Comprendre les Différents Profils (sans poser de diagnostic !)
            </h2>
            <p className="text-muted-foreground mb-3">
              Brève description des caractéristiques courantes et des forces associées à chaque profil.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="bg-muted p-4">
                <h3 className="font-medium mb-2 text-neuro-blue">TDAH (Trouble du Déficit de l'Attention avec ou sans Hyperactivité)</h3>
                <p className="text-sm text-muted-foreground"><strong>Forces possibles :</strong> Créativité débordante, énergie, capacité à penser hors des sentiers battus, hyperfocus sur les sujets passionnants.</p>
              </Card>
              <Card className="bg-muted p-4">
                <h3 className="font-medium mb-2 text-neuro-orange">Troubles DYS (Dyslexie, Dyspraxie, Dyscalculie...)</h3>
                <p className="text-sm text-muted-foreground"><strong>Forces possibles :</strong> Pensée visuelle et spatiale (Dyslexie, Dyspraxie), résilience, créativité pour contourner les difficultés, approche unique des problèmes.</p>
              </Card>
              <Card className="bg-muted p-4">
                <h3 className="font-medium mb-2 text-neuro-green">TSA (Trouble du Spectre de l'Autisme)</h3>
                <p className="text-sm text-muted-foreground"><strong>Forces possibles :</strong> Expertise pointue dans des domaines d'intérêt, grande capacité de concentration, honnêteté, souci du détail, loyauté.</p>
              </Card>
              <Card className="bg-muted p-4">
                <h3 className="font-medium mb-2 text-neuro-purple">HPI (Haut Potentiel Intellectuel)</h3>
                <p className="text-sm text-muted-foreground"><strong>Forces possibles :</strong> Rapidité de pensée et d'apprentissage, grande curiosité, capacité à faire des liens complexes, sens de la justice.</p>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Zap className="h-6 w-6 mr-2 text-red-500" />
              Stratégies Spécifiques pour Apprenants Neurodivergents (et leurs parents)
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Adapter l'environnement :</strong> Minimiser les distractions, créer des espaces de travail flexibles, utiliser des couleurs apaisantes.</li>
              <li><strong>Adapter les outils :</strong> Logiciels d'aide (synthèse vocale, correcteurs), supports visuels (cartes mentales), objets anti-stress.</li>
              <li><strong>Adapter les méthodes :</strong> Apprentissage par le jeu, micro-apprentissages (petites sessions), approches multisensorielles.</li>
              <li><strong>Importance du diagnostic (quand c'est pertinent) :</strong> Un diagnostic posé par des professionnels peut aider à mieux comprendre les besoins spécifiques et à accéder à des aménagements et soutiens adaptés. Il ne définit pas la personne mais éclaire son fonctionnement.</li>
              <li><strong>Valoriser les talents uniques :</strong> Mettre l'accent sur les forces et les passions pour renforcer la confiance en soi et la motivation.</li>
              <li><strong>Ressources utiles :</strong> Se tourner vers des associations spécialisées, des professionnels de santé (orthophonistes, psychomotriciens, ergothérapeutes, psychologues) et des groupes de soutien.</li>
            </ul>
          </section>

          <section className="bg-neuro-blue/10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-neuro-blue">
              <Smile className="h-6 w-6 mr-2" />
              Pour les Jeunes Neurodivergents : Assumez votre Cerveau de Compét' !
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Comprendre son propre fonctionnement :</strong> Apprends à identifier ce qui t'aide à apprendre et ce qui te freine. Tu es l'expert de ton propre cerveau !</li>
              <li><strong>Savoir demander de l'aide et les aménagements auxquels on a droit :</strong> N'hésite pas à parler de tes besoins à tes enseignants, tes parents. Des aides existent (tiers-temps, supports adaptés...).</li>
              <li><strong>Trouver ses propres astuces :</strong> Chaque personne est différente. Ce qui marche pour l'un ne marchera pas forcément pour l'autre. Expérimente et trouve tes "super-pouvoirs" d'apprentissage !</li>
            </ul>
            <p className="mt-4 italic font-semibold text-center text-neuro-blue">
              "Votre cerveau a peut-être des options que les autres n'ont pas. Apprenez à lire le mode d'emploi !"
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Rocket className="h-6 w-6 mr-2 text-green-500" />
              Conclusion : Prêts pour le Décollage ?
            </h2>
            <p className="text-muted-foreground mb-3">
              Récapitulatif des messages clés :
            </p>
            <ul className="list-check pl-6 space-y-1 text-muted-foreground">
              <li>La neurodiversité est une richesse, pas un défaut</li>
              <li>Chaque cerveau a ses forces uniques</li>
              <li>Adapter l'environnement et les méthodes d'apprentissage est bénéfique pour tous</li>
              <li>La collaboration entre parents, enseignants et apprenants est essentielle</li>
            </ul>
            <div className="flex justify-center gap-4 mt-6">
              <Button className="bg-neuro-purple hover:bg-neuro-purple/80">
                <MessageCircle className="mr-2 h-4 w-4" /> Rejoindre la communauté
              </Button>
              <Button variant="outline" className="border-neuro-purple text-neuro-purple hover:bg-neuro-purple/10">
                <Share2 className="mr-2 h-4 w-4" /> Partager ces ressources
              </Button>
              <Button variant="outline" className="border-neuro-purple text-neuro-purple hover:bg-neuro-purple/10">
                <Search className="mr-2 h-4 w-4" /> Explorer d'autres ressources
              </Button>
            </div>
            <p className="mt-6 italic text-center text-muted-foreground">
              "Et n'oubliez pas : l'humour est le meilleur lubrifiant pour les neurones !"
            </p>
          </section>
        </div>
      </div>
      
      {/* Sidebar column */}
      <aside className="md:w-1/5 mt-8 md:mt-0">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-neuro-purple">Neurodiversité</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Encart Définition */}
                <div className="bg-muted/30 p-4 rounded-lg space-y-2">
                  <h3 className="font-semibold text-neuro-purple">Définition</h3>
                  <p className="text-sm text-muted-foreground">La neurodiversité célèbre la variété naturelle des fonctionnements cérébraux comme une richesse pour l'humanité.</p>
                </div>
                
                {/* Encart Profils */}
                <div className="bg-muted/30 p-4 rounded-lg space-y-2">
                  <h3 className="font-semibold text-neuro-purple">Profils</h3>
                  <p className="text-sm text-muted-foreground">TDAH, troubles DYS, TSA, HPI - chaque profil apporte des forces et perspectives uniques.</p>
                </div>
                
                {/* Encart Stratégies */}
                <div className="bg-muted/30 p-4 rounded-lg space-y-2">
                  <h3 className="font-semibold text-neuro-purple">Stratégies</h3>
                  <p className="text-sm text-muted-foreground">Adapter l'environnement, les outils et les méthodes pour valoriser les talents uniques de chacun.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </aside>
    </div>
  );
};

export default ZoomSpecialNeurodiversite;