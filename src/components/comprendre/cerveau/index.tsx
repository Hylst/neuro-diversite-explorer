import React from 'react';
import { TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CerveauTab: React.FC = () => {
  return (
    <TabsContent value="cerveau">
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Fonctionnement cérébral et neurodiversité</CardTitle>
              <CardDescription>
                Comment les différences neurologiques façonnent notre perception et notre interaction avec le monde
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg">Fonctions exécutives</h3>
                <p className="text-muted-foreground mb-3">
                  Ensemble de processus cérébraux qui permettent la planification, l'organisation, la mémoire de travail et l'inhibition des comportements. Les personnes TDAH peuvent présenter un développement atypique de ces fonctions, particulièrement dans le cortex préfrontal.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Impact sur la vie quotidienne</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Difficultés à initier ou terminer des tâches</li>
                    <li>Challenges dans la gestion du temps</li>
                    <li>Problèmes d'organisation</li>
                    <li>Impulsivité dans la prise de décision</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg">Traitement sensoriel</h3>
                <p className="text-muted-foreground mb-3">
                  Le cerveau neurodivergent peut traiter les informations sensorielles différemment. Chez les personnes autistes par exemple, certaines zones cérébrales montrent une hyperconnectivité ou hypoconnectivité qui influence la perception sensorielle.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Manifestations</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Hypersensibilité aux stimuli (lumières, sons, textures)</li>
                    <li>Hyposensibilité nécessitant une stimulation plus intense</li>
                    <li>Perception atypique du temps et de l'espace</li>
                    <li>Synesthésie (fusion de sens) plus fréquente</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg">Réseaux neuronaux de la lecture</h3>
                <p className="text-muted-foreground mb-3">
                  Les troubles comme la dyslexie impliquent des différences dans le traitement phonologique et les réseaux cérébraux impliqués dans la lecture, notamment dans les régions temporo-pariétales et occipito-temporales.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Mécanismes</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Activation atypique lors du décodage phonologique</li>
                    <li>Différences dans le traitement visuel des mots</li>
                    <li>Connectivité modifiée entre les régions cérébrales du langage</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 pt-4">
                <Button 
                  variant="secondary" 
                  className="px-6 py-8 h-auto flex-1 max-w-xs flex flex-col items-center gap-2"
                  asChild
                >
                  <Link to="/cerveau">
                    <Brain className="h-12 w-12 text-neuro-purple mb-2" />
                    <p className="text-sm font-medium">Carte interactive du cerveau en développement</p>
                  </Link>
                </Button>
                <Button 
                  variant="secondary" 
                  className="px-6 py-8 h-auto flex-1 max-w-xs flex flex-col items-center gap-2"
                  asChild
                >
                  <Link to="/cerveau#neurotransmittersRef">
                    <Lightbulb className="h-12 w-12 text-neuro-orange mb-2" />
                    <p className="text-sm font-medium">Explorer les neurotransmetteurs et leur rôle</p>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </TabsContent>
  );
};

export default CerveauTab;