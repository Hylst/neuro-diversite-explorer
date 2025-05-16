import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookMarked, FileVideo, Globe as GlobeIcon, ExternalLink as ExternalLinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const RessourcesApprentissage: React.FC = () => {
  return (
    <div className="bg-muted py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">Pour aller plus loin</h2>
            <p className="text-muted-foreground">
              Ressources recommandées pour approfondir votre compréhension de la neurodiversité
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookMarked className="h-5 w-5 text-neuro-purple" />
                  <span>Lectures essentielles</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  <li className="border-b pb-2">
                    <p className="font-medium">NeuroTribes (Steve Silberman)</p>
                    <p className="text-sm text-muted-foreground">Histoire de l'autisme et du mouvement pour la neurodiversité</p>
                  </li>
                  <li className="border-b pb-2">
                    <p className="font-medium">Divergent Mind (Jenara Nerenberg)</p>
                    <p className="text-sm text-muted-foreground">Exploration des cerveaux féminins neurodivergents</p>
                  </li>
                  <li className="border-b pb-2">
                    <p className="font-medium">La différence invisible (Julie Dachez)</p>
                    <p className="text-sm text-muted-foreground">BD autobiographique sur le syndrome d'Asperger</p>
                  </li>
                  <li>
                    <p className="font-medium">L'Autisme au Féminin (Rudy Simone)</p>
                    <p className="text-sm text-muted-foreground">Guide pour comprendre l'autisme chez les femmes</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileVideo className="h-5 w-5 text-neuro-purple" />
                  <span>Vidéos et documentaires</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  <li className="border-b pb-2">
                    <p className="font-medium">
                      <a href="https://www.youtube.com/@ludosens8098" target="_blank" rel="noopener noreferrer">
                        Ludosens
                      </a>
                    </p>
                    <p className="text-sm text-muted-foreground">L'institut de la neurodiversité</p>
                  </li>
                  <li className="border-b pb-2">
                    <p className="font-medium">The Reason I Jump</p>
                    <p className="text-sm text-muted-foreground">Documentaire basé sur le livre de Naoki Higashida</p>
                  </li>
                  <li className="border-b pb-2">
                    <p className="font-medium">Attention à la déficit (Arte)</p>
                    <p className="text-sm text-muted-foreground">Documentaire sur le TDAH adulte</p>
                  </li>
                  <li className="border-b pb-2">
                    <p className="font-medium">Autism: The Musical</p>
                    <p className="text-sm text-muted-foreground">La créativité et l'expression chez les enfants autistes</p>
                  </li>
                  <li>
                    <p className="font-medium">Chaîne YesouiCAN</p>
                    <p className="text-sm text-muted-foreground">Chaîne YouTube sur l'autisme au féminin</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GlobeIcon className="h-5 w-5 text-neuro-purple" />
                  <span>Ressources en ligne</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  <li className="border-b pb-2">
                    <p className="font-medium">Revue Neurodiversité</p>
                    <p className="text-sm text-muted-foreground">Publication dédiée à la neurodiversité</p>
                    <a href="https://revue-neurodiversite.org" className="text-sm text-neuro-purple hover:underline inline-flex items-center gap-1">
                      Visiter <ExternalLinkIcon className="h-3 w-3" />
                    </a>
                  </li>
                  <li className="border-b pb-2">
                    <p className="font-medium">INSERM - Dossier Troubles Neurodéveloppementaux</p>
                    <p className="text-sm text-muted-foreground">Ressource scientifique complète</p>
                    <a href="https://www.inserm.fr/dossier/troubles-neuro-developpementaux/" className="text-sm text-neuro-purple hover:underline inline-flex items-center gap-1">
                      Visiter <ExternalLinkIcon className="h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <p className="font-medium">Zèbres & Cie</p>
                    <p className="text-sm text-muted-foreground">Magazine dédié à la neurodiversité</p>
                    <a href="https://zebre-et-compagnie.fr" className="text-sm text-neuro-purple hover:underline inline-flex items-center gap-1">
                      Visiter <ExternalLinkIcon className="h-3 w-3" />
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        <div className="text-center mt-8">
          <Button asChild>
            <Link to="/ressources">Toutes nos ressources</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RessourcesApprentissage;