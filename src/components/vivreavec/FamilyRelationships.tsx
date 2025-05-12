
import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Users, Heart, Puzzle, Calendar, MessageSquareText, Smile } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import SupportGroups from './SupportGroups';
import ProgramsList from './ProgramsList';
import Bibliography from './Bibliography';

const FamilyRelationships = () => {
  const [openDialog, setOpenDialog] = useState<string | null>(null);
  
  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
          <Users className="h-6 w-6 text-primary" />
          Relations familiales
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
          Conseils pour favoriser l'harmonie et la compréhension au sein de la famille
        </p>
      </div>
      
      <div className="grid gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-neuro-red" />
                Comprendre et soutenir
              </CardTitle>
              <CardDescription>
                Comment créer un environnement familial bienveillant et adapté
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Pour les parents d'enfants neurodivergents</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-neuro-red font-bold mt-1">●</span>
                      <div>
                        <span className="font-medium">Accepter et célébrer les différences</span>
                        <p className="text-sm text-muted-foreground">Valoriser les forces uniques et éviter les comparaisons avec les autres enfants</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neuro-red font-bold mt-1">●</span>
                      <div>
                        <span className="font-medium">Devenir expert de votre enfant</span>
                        <p className="text-sm text-muted-foreground">Observer ses réactions aux différents environnements et stimuli pour adapter votre approche</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neuro-red font-bold mt-1">●</span>
                      <div>
                        <span className="font-medium">Aménager l'environnement familial</span>
                        <p className="text-sm text-muted-foreground">Créer des espaces sensoriels adaptés et des routines prévisibles</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neuro-red font-bold mt-1">●</span>
                      <div>
                        <span className="font-medium">Collaborer avec les professionnels</span>
                        <p className="text-sm text-muted-foreground">Coordonner les approches entre la maison, l'école et les thérapeutes</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3">Pour les personnes neurodivergentes en famille</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-neuro-red font-bold mt-1">●</span>
                      <div>
                        <span className="font-medium">Communiquer ses besoins</span>
                        <p className="text-sm text-muted-foreground">Exprimer clairement vos limites et vos besoins spécifiques</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neuro-red font-bold mt-1">●</span>
                      <div>
                        <span className="font-medium">Éduquer sans culpabiliser</span>
                        <p className="text-sm text-muted-foreground">Partager des ressources adaptées pour aider votre famille à mieux comprendre</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neuro-red font-bold mt-1">●</span>
                      <div>
                        <span className="font-medium">Prévoir des temps de récupération</span>
                        <p className="text-sm text-muted-foreground">S'accorder des moments de solitude pour recharger ses batteries</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neuro-red font-bold mt-1">●</span>
                      <div>
                        <span className="font-medium">Développer des stratégies de régulation</span>
                        <p className="text-sm text-muted-foreground">Identifier les signes précoces de surcharge et appliquer des techniques de régulation</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-neuro-purple" />
                  Organisation du quotidien familial
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">Routines et prévisibilité</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Créer un emploi du temps visuel pour toute la famille</li>
                      <li>Prévenir à l'avance des changements de programme</li>
                      <li>Établir des rituels rassurants (repas, coucher)</li>
                      <li>Utiliser des minuteurs visuels pour les transitions</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-1">Équilibre et répartition</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Adapter les responsabilités en fonction des capacités</li>
                      <li>Prévoir du temps individuel pour chaque membre</li>
                      <li>Créer des activités communes respectant les sensibilités</li>
                      <li>Mettre en place un système d'entraide entre fratrie</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-1">Gestion des défis sensoriels</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Aménager des zones calmes dans la maison</li>
                      <li>Préparer une trousse sensorielle pour les sorties</li>
                      <li>Anticiper les environnements potentiellement difficiles</li>
                      <li>Respecter les limites sensorielles de chacun</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquareText className="h-5 w-5 text-neuro-purple" />
                  Communication efficace
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">Adapter la communication</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Utiliser un langage clair et concret, éviter les sous-entendus</li>
                      <li>Compléter avec des supports visuels si nécessaire</li>
                      <li>Donner du temps pour traiter l'information</li>
                      <li>Vérifier la compréhension sans infantiliser</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-1">Résoudre les conflits</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Établir un "code" pour signaler la surcharge émotionnelle</li>
                      <li>Instaurer des temps de pause avant discussion</li>
                      <li>Utiliser des supports écrits pour clarifier les points de vue</li>
                      <li>Se concentrer sur les solutions plutôt que les blâmes</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-1">Exprimer les émotions</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Utiliser des outils visuels d'identification des émotions</li>
                      <li>Normaliser toutes les émotions sans les juger</li>
                      <li>Proposer des moyens d'expression alternatifs (dessin, écriture)</li>
                      <li>Modéliser l'expression appropriée des sentiments</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-muted rounded-lg p-6"
        >
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Users className="h-5 w-5 text-neuro-orange" />
            Ressources pour les familles
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-background p-4 rounded-lg">
              <h4 className="font-medium mb-2">Groupes de soutien</h4>
              <p className="text-sm mb-2">Rejoindre des communautés de familles partageant des expériences similaires.</p>
              <Dialog open={openDialog === 'support-groups'} onOpenChange={(open) => setOpenDialog(open ? 'support-groups' : null)}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full">Trouver un groupe</Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
                  <DialogHeader>
                    <DialogTitle>Groupes de soutien</DialogTitle>
                    <DialogDescription>
                      Trouvez des communautés et associations pour vous accompagner
                    </DialogDescription>
                  </DialogHeader>
                  <SupportGroups />
                </DialogContent>
              </Dialog>
            </div>
            
            <div className="bg-background p-4 rounded-lg">
              <h4 className="font-medium mb-2">Formation parents-experts</h4>
              <p className="text-sm mb-2">Programmes pour développer des compétences spécifiques d'accompagnement.</p>
              <Dialog open={openDialog === 'programs'} onOpenChange={(open) => setOpenDialog(open ? 'programs' : null)}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full">Programmes disponibles</Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
                  <DialogHeader>
                    <DialogTitle>Programmes disponibles</DialogTitle>
                    <DialogDescription>
                      Découvrez nos formations et programmes d'accompagnement
                    </DialogDescription>
                  </DialogHeader>
                  <ProgramsList />
                </DialogContent>
              </Dialog>
            </div>
            
            <div className="bg-background p-4 rounded-lg">
              <h4 className="font-medium mb-2">Livres et guides adaptés</h4>
              <p className="text-sm mb-2">Ressources documentaires pour toute la famille, y compris la fratrie.</p>
              <Dialog open={openDialog === 'bibliography'} onOpenChange={(open) => setOpenDialog(open ? 'bibliography' : null)}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full">Bibliographie</Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
                  <DialogHeader>
                    <DialogTitle>Bibliographie</DialogTitle>
                    <DialogDescription>
                      Sélection de livres, articles et ressources en ligne
                    </DialogDescription>
                  </DialogHeader>
                  <Bibliography />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FamilyRelationships;
