
import React from 'react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { School, Pencil, BookOpen, GraduationCap, Users, MessageCircle, ClipboardList } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const EducationSupport = () => {
  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
          <School className="h-6 w-6 text-primary" />
          Soutien à la scolarité
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
          Adaptations et stratégies pour réussir dans le milieu scolaire
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
                <ClipboardList className="h-5 w-5 text-neuro-blue" />
                Aménagements scolaires disponibles
              </CardTitle>
              <CardDescription>
                Dispositifs et adaptations légalement accessibles dans le système éducatif français
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>PAP (Plan d'Accompagnement Personnalisé)</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Le PAP est un document qui définit les aménagements et adaptations pédagogiques nécessaires à l'élève présentant des troubles des apprentissages.</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Ne nécessite pas de reconnaissance MDPH</li>
                      <li>Doit être accompagné d'un avis médical confirmant les troubles</li>
                      <li>Exemples d'adaptations: temps supplémentaire, supports adaptés, utilisation d'ordinateur</li>
                      <li>Réévalué chaque année et suit l'élève tout au long de sa scolarité</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>PPS (Projet Personnalisé de Scolarisation)</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Le PPS concerne les élèves reconnus en situation de handicap par la MDPH et définit les modalités de déroulement de la scolarité.</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Nécessite une reconnaissance de handicap par la MDPH</li>
                      <li>Peut inclure des aides humaines (AESH), matérielles et des aménagements pédagogiques</li>
                      <li>Organise la scolarité de l'élève et articule les actions éducatives et thérapeutiques</li>
                      <li>Est élaboré par l'équipe pluridisciplinaire de la MDPH</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>Aménagements aux examens</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Les candidats présentant un handicap ou un trouble de l'apprentissage peuvent bénéficier d'aménagements aux examens.</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Temps majoré (généralement 1/3 temps)</li>
                      <li>Utilisation d'un ordinateur avec correcteur orthographique pour certains troubles</li>
                      <li>Assistance d'un secrétaire pour la lecture des consignes ou la rédaction</li>
                      <li>Adaptation des supports (agrandissement, format numérique)</li>
                      <li>La demande doit être faite plusieurs mois avant l'examen auprès du médecin scolaire</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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
                  <Pencil className="h-5 w-5 text-neuro-blue" />
                  Supports et techniques d'apprentissage
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Pour la lecture et l'écriture</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Utilisation de polices adaptées (OpenDyslexic, Dyslexie)</li>
                    <li>Logiciels de dictée vocale et de synthèse vocale</li>
                    <li>Correcteurs orthographiques spécialisés</li>
                    <li>Surligneurs de différentes couleurs pour le codage</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Pour l'organisation</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Agendas visuels avec codes couleurs</li>
                    <li>Applications de rappel et de planification</li>
                    <li>Fiches de méthode step-by-step</li>
                    <li>Cartes mentales pour structurer les informations</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Pour la mémorisation</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Techniques de mémorisation multimodale (visuelle, auditive, kinesthésique)</li>
                    <li>Flashcards et répétition espacée</li>
                    <li>Applications de mémorisation comme Anki</li>
                    <li>Enregistrements audio des cours</li>
                  </ul>
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
                  <MessageCircle className="h-5 w-5 text-neuro-blue" />
                  Communication avec l'équipe éducative
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Établir une collaboration efficace</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Programmer des rencontres régulières avec les enseignants</li>
                    <li>Désigner un référent au sein de l'établissement</li>
                    <li>Partager des ressources adaptées au profil de l'élève</li>
                    <li>Proposer des formations ou informations sur le trouble</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Documents utiles à préparer</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Fiche de présentation des forces et difficultés de l'élève</li>
                    <li>Liste des stratégies efficaces déjà identifiées</li>
                    <li>Coordonnées des professionnels qui suivent l'enfant</li>
                    <li>Exemples concrets d'adaptations qui ont fonctionné</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Suivi des progrès</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Tenir un journal des adaptations mises en place</li>
                    <li>Évaluer régulièrement l'efficacité des mesures</li>
                    <li>Solliciter les retours de l'enfant sur son vécu</li>
                    <li>Ajuster les stratégies en fonction des résultats</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EducationSupport;
