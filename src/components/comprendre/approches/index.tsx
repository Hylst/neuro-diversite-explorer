import React from 'react';
import { TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

const ApprochesTab: React.FC = () => {
  return (
    <TabsContent value="approches">
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
                <HeartHandshake className="h-5 w-5 text-neuro-purple" />
                <span>Approches d'accompagnement</span>
              </CardTitle>
              <CardDescription>Différentes perspectives pour soutenir la neurodiversité</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Approche développementale</h3>
                    <p className="text-sm text-muted-foreground">
                      Priorité au développement relationnel et à la communication réciproque. Exemples : modèle DIR/Floortime, Early Start Denver Model.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Approche comportementale</h3>
                    <p className="text-sm text-muted-foreground">
                      Structuration de l'apprentissage par renforcement des comportements adaptés. Exemples : ABA, TEACCH, méthodes de gestion comportementale pour TDAH.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Approche affirmative</h3>
                    <p className="text-sm text-muted-foreground">
                      Acceptation et valorisation de l'identité neurodivergente, création d'environnements adaptés. Développée par et pour les personnes neurodivergentes.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-3">Débats contemporains</h3>
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">Accommodation vs Normalisation</h4>
                        <p className="text-sm text-muted-foreground">
                          Tension entre les efforts pour modifier l'environnement et les approches visant à rendre la personne "plus normative". Question fondamentale : faut-il adapter la société ou adapter l'individu?
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium">Langage et étiquettes</h4>
                        <p className="text-sm text-muted-foreground">
                          Débats sur la terminologie préférée : langage basé sur l'identité ("personne autiste") vs langage centré sur la personne ("personne avec autisme"). Les préférences varient selon les communautés et les individus.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium">Neurodiversité et médicalisation</h4>
                        <p className="text-sm text-muted-foreground">
                          Comment réconcilier la perspective identitaire de la neurodiversité avec les besoins de diagnostic, de soutien médical et d'accès aux services?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </TabsContent>
  );
};

export default ApprochesTab;