import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { BriefcaseBusiness, Building, Settings, MessageCircle, ShieldCheck, UserCog, PenTool } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LegalResources from './LegalResources';
import SupportGroups from './SupportGroups';
import AvailablePrograms from './AvailablePrograms';
import Bibliography from './Bibliography';

const ProfessionalLife = () => {
  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
          <BriefcaseBusiness className="h-6 w-6 text-primary" />
          Vie professionnelle
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
          Stratégies pour s'épanouir dans le milieu du travail
        </p>
      </div>
      
      <div className="grid gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-muted p-6 rounded-lg"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-neuro-green" />
                Vos droits en milieu professionnel
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-neuro-green font-bold mt-1">●</span>
                  <div>
                    <span className="font-medium">RQTH (Reconnaissance de la Qualité de Travailleur Handicapé)</span>
                    <p className="text-sm text-muted-foreground">Démarche qui permet d'accéder à des aménagements de poste et des aides spécifiques</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neuro-green font-bold mt-1">●</span>
                  <div>
                    <span className="font-medium">Aménagements raisonnables</span>
                    <p className="text-sm text-muted-foreground">L'employeur a l'obligation d'adapter le poste de travail dans la mesure du possible</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neuro-green font-bold mt-1">●</span>
                  <div>
                    <span className="font-medium">Confidentialité</span>
                    <p className="text-sm text-muted-foreground">Vous n'êtes pas obligé de divulguer votre diagnostic, seulement vos besoins d'adaptation</p>
                  </div>
                </li>
              </ul>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="mt-4">Ressources légales</Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Ressources légales</DialogTitle>
                  </DialogHeader>
                  <div className="overflow-y-auto">
                    <LegalResources />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Building className="h-5 w-5 text-neuro-orange" />
                Structures d'accompagnement
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-neuro-orange font-bold mt-1">●</span>
                  <div>
                    <span className="font-medium">Cap Emploi</span>
                    <p className="text-sm text-muted-foreground">Organisme spécialisé dans l'insertion professionnelle des personnes handicapées</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neuro-orange font-bold mt-1">●</span>
                  <div>
                    <span className="font-medium">AGEFIPH</span>
                    <p className="text-sm text-muted-foreground">Propose des aides financières pour les aménagements de poste</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neuro-orange font-bold mt-1">●</span>
                  <div>
                    <span className="font-medium">Mission Handicap</span>
                    <p className="text-sm text-muted-foreground">Service présent dans certaines entreprises pour faciliter l'intégration</p>
                  </div>
                </li>
              </ul>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="mt-4">Trouver un groupe</Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Groupes de soutien</DialogTitle>
                  </DialogHeader>
                  <div className="overflow-y-auto">
                    <SupportGroups />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
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
                  <Settings className="h-5 w-5 text-neuro-purple" />
                  Adaptations au travail
                </CardTitle>
                <CardDescription>
                  Solutions pratiques pour optimiser votre environnement de travail
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">Environnement physique</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Casque antibruit ou bureau dans un espace calme</li>
                      <li>Éclairage adapté (lumière naturelle ou lampe spécifique)</li>
                      <li>Organisation visuelle de l'espace de travail</li>
                      <li>Possibilité de travailler debout ou avec une balle comme siège</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-1">Organisation du temps</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Horaires flexibles adaptés à votre chronotype</li>
                      <li>Pauses régulières pour maintenir la concentration</li>
                      <li>Découpage des tâches complexes en étapes</li>
                      <li>Calendrier visuel avec codes couleurs</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-1">Outils technologiques</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Logiciels de dictée vocale ou de transcription</li>
                      <li>Applications de gestion de tâches avec rappels</li>
                      <li>Correcteurs orthographiques avancés</li>
                      <li>Logiciels de mind mapping pour organiser les idées</li>
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
                  <MessageCircle className="h-5 w-5 text-neuro-purple" />
                  Communication avec les collègues et supérieurs
                </CardTitle>
                <CardDescription>
                  Stratégies pour des interactions professionnelles efficaces
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">Communiquer ses besoins</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Préparer à l'avance des explications concises sur vos besoins</li>
                      <li>Mettre l'accent sur les solutions plutôt que les problèmes</li>
                      <li>Proposer des adaptations qui améliorent votre productivité</li>
                      <li>Utiliser des exemples concrets de réussites avec ces adaptations</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-1">Clarifier les attentes</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Demander des instructions écrites pour les tâches complexes</li>
                      <li>Reformuler les consignes pour confirmer la compréhension</li>
                      <li>Établir des priorités claires pour les multiples projets</li>
                      <li>Fixer des points d'étape réguliers pour éviter les malentendus</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-1">Gérer les situations sociales</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Préparer des scripts pour les situations sociales récurrentes</li>
                      <li>Anticiper les moments de pause et de socialisation</li>
                      <li>Se donner l'autorisation de prendre des pauses si nécessaire</li>
                      <li>Trouver un allié comprenant vos particularités au sein de l'équipe</li>
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
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PenTool className="h-5 w-5 text-neuro-purple" />
                Valoriser vos forces neurodivergentes
              </CardTitle>
              <CardDescription>
                Comment transformer vos particularités en atouts professionnels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-primary/5 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Créativité et pensée divergente</h4>
                  <p className="text-sm">Capacité à faire des connexions inattendues et à proposer des solutions innovantes à des problèmes complexes.</p>
                </div>
                
                <div className="bg-primary/5 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Hyperfocus et attention au détail</h4>
                  <p className="text-sm">Capacité à se concentrer intensément sur des tâches spécifiques et à repérer des détails que d'autres pourraient manquer.</p>
                </div>
                
                <div className="bg-primary/5 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Persévérance et résilience</h4>
                  <p className="text-sm">Habitude de surmonter des défis qui peut se traduire par une détermination exceptionnelle dans la résolution de problèmes.</p>
                </div>
                
                <div className="bg-primary/5 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Pensée visuelle et spatiale</h4>
                  <p className="text-sm">Aptitude à visualiser et manipuler mentalement des concepts, utile dans la conception, l'ingénierie et l'art.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PenTool className="h-5 w-5 text-neuro-purple" />
                Ressources additionnelles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">Programmes disponibles</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Programmes disponibles</DialogTitle>
                    </DialogHeader>
                    <div className="overflow-y-auto">
                      <AvailablePrograms />
                    </div>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">Bibliographie</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Bibliographie</DialogTitle>
                    </DialogHeader>
                    <div className="overflow-y-auto">
                      <Bibliography />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfessionalLife;
