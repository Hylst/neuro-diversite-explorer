import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { History } from 'lucide-react';
import { motion } from 'framer-motion';

const HistoriqueNeurodiversite: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <History className="h-5 w-5 text-neuro-purple" />
            <span>Histoire du mouvement de la neurodiversité</span>
          </CardTitle>
          <CardDescription>L'évolution de la compréhension et des approches</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative border-l-2 border-muted-foreground/30 pl-6 space-y-10 py-2">
            <div className="relative">
              <div className="absolute -left-8 w-4 h-4 rounded-full bg-neuro-purple"></div>
              <div>
                <h3 className="font-bold text-lg">1990s : Émergence du concept</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Le terme "neurodiversité" est utilisé pour la première fois par la sociologue australienne Judy Singer (elle-même autiste) à la fin des années 1990.
                </p>
                <p className="text-sm">
                  Cette période marque le début d'une reconceptualisation des conditions neurologiques comme faisant partie de la diversité humaine naturelle plutôt que comme des pathologies à "guérir".
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -left-8 w-4 h-4 rounded-full bg-neuro-purple"></div>
              <div>
                <h3 className="font-bold text-lg">Années 2000 : Développement du mouvement</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Émergence d'organisations dirigées par des personnes neurodivergentes et développement d'une conscience communautaire.
                </p>
                <p className="text-sm">
                  Internet joue un rôle crucial en permettant aux personnes neurodivergentes de se connecter, de partager leurs expériences et de s'organiser politiquement.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -left-8 w-4 h-4 rounded-full bg-neuro-purple"></div>
              <div>
                <h3 className="font-bold text-lg">2010s : Reconnaissance scientifique et sociale</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Les recherches en neurosciences apportent un soutien croissant à l'idée que les variations neurologiques sont naturelles.
                </p>
                <p className="text-sm">
                  Évolution des critères diagnostiques (DSM-5) vers une vision plus dimensionnelle des troubles neurodéveloppementaux.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -left-8 w-4 h-4 rounded-full bg-neuro-purple"></div>
              <div>
                <h3 className="font-bold text-lg">Aujourd'hui : Intégration et défis</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Incorporation progressive du paradigme de la neurodiversité dans les politiques éducatives, professionnelles et de santé.
                </p>
                <p className="text-sm">
                  Tensions persistantes entre le modèle médical traditionnel et l'approche de la neurodiversité, avec des débats sur l'équilibre entre célébration des différences et reconnaissance des besoins de soutien.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default HistoriqueNeurodiversite;