import React from 'react';
import { TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartBar } from 'lucide-react';
import { motion } from 'framer-motion';

const StatistiquesTab: React.FC = () => {
  return (
    <TabsContent value="statistiques">
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ChartBar className="h-5 w-5 text-neuro-purple" />
                <span>Chiffres clés et statistiques</span>
              </CardTitle>
              <CardDescription>Prévalence et impact des troubles neurodéveloppementaux</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-muted rounded-lg p-4 text-center">
                  <h3 className="text-2xl font-bold text-neuro-purple">1 sur 36</h3>
                  <p className="text-sm text-muted-foreground">Enfants diagnostiqués avec un trouble du spectre autistique aux États-Unis (CDC, 2023)</p>
                </div>
                
                <div className="bg-muted rounded-lg p-4 text-center">
                  <h3 className="text-2xl font-bold text-neuro-purple">5-8%</h3>
                  <p className="text-sm text-muted-foreground">Prévalence mondiale estimée du TDAH chez les enfants et adolescents</p>
                </div>
                
                <div className="bg-muted rounded-lg p-4 text-center">
                  <h3 className="text-2xl font-bold text-neuro-purple">10%</h3>
                  <p className="text-sm text-muted-foreground">Estimation de la population présentant une forme de trouble DYS (dyslexie, dyscalculie, etc.)</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-3">Évolution des diagnostics</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-3">
                    L'augmentation des taux de diagnostic reflète une meilleure sensibilisation, des critères plus inclusifs et une reconnaissance accrue, plutôt qu'une augmentation réelle de la prévalence.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-sm mb-1">Autisme</h4>
                      <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground">
                        <li>1980s: environ 1 sur 2000</li>
                        <li>2000s: environ 1 sur 150</li>
                        <li>2023: environ 1 sur 36</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-1">TDAH</h4>
                      <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground">
                        <li>Augmentation de 42% des diagnostics entre 2003 et 2011</li>
                        <li>Reconnaissance croissante chez les filles et les adultes</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-3">Impact socio-économique</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Emploi</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>85% des adultes autistes diplômés universitaires sont sans emploi ou sous-employés</li>
                      <li>Les adultes TDAH gagnent en moyenne 17% de moins que leurs pairs neurotypiques</li>
                      <li>Les personnes dyslexiques sont surreprésentées dans l'entrepreneuriat (35% des entrepreneurs)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Éducation</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Les élèves TDAH ont un risque 3x plus élevé d'abandon scolaire</li>
                      <li>50% des élèves dyslexiques bénéficient de soutien approprié (France)</li>
                      <li>33% des élèves TSA ne terminent pas leur secondaire</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center my-4">
                <div className="bg-secondary px-6 py-4 rounded-lg text-center">
                  <ChartBar className="h-12 w-12 text-neuro-purple mx-auto mb-2" />
                  <p className="text-sm font-medium">Infographies et statistiques plus détaillées en développement</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </TabsContent>
  );
};

export default StatistiquesTab;