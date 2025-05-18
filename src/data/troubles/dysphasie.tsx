import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, Brain, HeartPulse, GraduationCap, Users, BookOpen } from 'lucide-react';
import { TroubleType } from '@/components/troubles/dys/TroubleTypesGrid';

// Types de dysphasie
const types: TroubleType[] = [
  {
    title: "Dysphasie phonologique-syntaxique",
    description: "Difficultés avec la production des sons (phonologie) et la construction des phrases (syntaxe). Langage peu fluide, phrases courtes et mal structurées."
  },
  {
    title: "Dysphasie lexicale-syntaxique",
    description: "Difficultés d'accès au lexique (manque du mot) et de construction syntaxique. Vocabulaire limité, difficulté à trouver les mots justes."
  },
  {
    title: "Dysphasie sémantique-pragmatique",
    description: "Difficultés avec le sens des mots (sémantique) et l'utilisation sociale du langage (pragmatique). Discours parfois incohérent malgré une bonne structure grammaticale."
  },
  {
    title: "Dysphasie réceptive",
    description: "Difficultés prédominantes dans la compréhension du langage oral. Problèmes à comprendre les consignes et les conversations."
  }
];

// Contenu des onglets
const tabs = [
  {
    id: "symptoms",
    label: "Symptômes",
    content: (
      <>
        <h3 className="text-xl font-semibold">Signes et symptômes</h3>
        <p className="text-muted-foreground mb-4">
          Les manifestations de la dysphasie peuvent varier considérablement d'une personne à l'autre, 
          tant en termes de type que de sévérité. Voici les principaux signes à surveiller:
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-4 border-neuro-purple">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="h-5 w-5 text-neuro-purple" />
              <h4 className="font-medium">Expression verbale</h4>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Retard significatif dans l'apparition du langage</li>
              <li>Vocabulaire limité pour l'âge</li>
              <li>Difficultés à formuler des phrases complètes</li>
              <li>Erreurs de conjugaison et d'accord persistantes</li>
              <li>Problèmes d'articulation et de prononciation</li>
              <li>Utilisation incorrecte des mots-outils (prépositions, articles)</li>
            </ul>
          </Card>
          
          <Card className="p-4 border-neuro-purple">
            <div className="flex items-center gap-2 mb-2">
              <Brain className="h-5 w-5 text-neuro-purple" />
              <h4 className="font-medium">Compréhension</h4>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Difficultés à comprendre les consignes verbales</li>
              <li>Problèmes à suivre une conversation</li>
              <li>Interprétation littérale du langage</li>
              <li>Besoin de répétition et de reformulation</li>
              <li>Difficultés avec les concepts abstraits</li>
            </ul>
          </Card>
          
          <Card className="p-4 border-neuro-purple">
            <div className="flex items-center gap-2 mb-2">
              <HeartPulse className="h-5 w-5 text-neuro-purple" />
              <h4 className="font-medium">Impact émotionnel et social</h4>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Frustration face aux difficultés de communication</li>
              <li>Anxiété sociale et isolement</li>
              <li>Faible estime de soi</li>
              <li>Difficultés à établir et maintenir des relations</li>
            </ul>
          </Card>
          
          <Card className="p-4 border-neuro-purple">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="h-5 w-5 text-neuro-purple" />
              <h4 className="font-medium">Apprentissages</h4>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Difficultés d'apprentissage de la lecture et de l'écriture</li>
              <li>Problèmes de mémorisation verbale</li>
              <li>Difficultés à suivre le rythme scolaire</li>
              <li>Besoin d'adaptations pédagogiques</li>
            </ul>
          </Card>
        </div>
        
        <div className="bg-muted p-4 rounded-lg mt-4">
          <h4 className="font-medium mb-2">À noter</h4>
          <p className="text-sm text-muted-foreground">
            Il est important de noter que ces catégories ne sont pas hermétiques et qu'une personne peut présenter une forme
            mixte combinant plusieurs aspects des différents types de dysphasie.
          </p>
        </div>
      </>
    )
  },
  {
    id: "diagnosis",
    label: "Diagnostic",
    content: (
      <>
        <h3 className="text-xl font-semibold">Parcours diagnostic</h3>
        <p className="text-muted-foreground mb-4">
          Le diagnostic de la dysphasie est un processus complexe qui nécessite l'intervention de plusieurs 
          professionnels. Il repose sur une démarche d'exclusion et d'évaluation positive des troubles.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <Card className="p-4 border-neuro-purple">
            <div className="flex items-center gap-2 mb-2">
              <Users className="h-5 w-5 text-neuro-purple" />
              <h4 className="font-medium">Quand consulter ?</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-2">Il est recommandé de consulter dès qu'un retard de langage significatif est observé, par exemple:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>À 18-24 mois: absence de mots isolés ou de mots</li>
              <li>À 2-3 ans: absence de phrases de 2-3 mots, vocabulaire très limité</li>
              <li>À 4 ans: langage peu compréhensible, phrases très simples ou incorrectes</li>
              <li>À l'âge scolaire: difficultés persistantes malgré les interventions</li>
            </ul>
          </Card>
          
          <Card className="p-4 border-neuro-purple">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="h-5 w-5 text-neuro-purple" />
              <h4 className="font-medium">Professionnels impliqués</h4>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Médecin (pédiatre, neuropédiatre): pour exclure d'autres causes médicales</li>
              <li>Orthophoniste: évaluation approfondie du langage oral et écrit</li>
              <li>Psychologue: évaluation cognitive et psychoaffective</li>
              <li>Neuropsychologue: évaluation des fonctions cognitives</li>
              <li>ORL et audiologiste: vérification de l'audition</li>
            </ul>
          </Card>
        </div>
        
        <Card className="p-4 border-neuro-purple mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Brain className="h-5 w-5 text-neuro-purple" />
            <h4 className="font-medium">Critères diagnostiques</h4>
          </div>
          <p className="text-sm text-muted-foreground mb-2">Pour qu'un diagnostic de dysphasie soit posé, plusieurs conditions doivent être réunies:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
            <li>Présence de difficultés significatives et persistantes du langage</li>
            <li>Absence de déficit auditif expliquant les troubles</li>
            <li>Absence de déficit intellectuel expliquant les troubles</li>
            <li>Absence de lésion neurologique objectivable</li>
            <li>Persistance des troubles malgré une intervention adaptée</li>
            <li>Impact fonctionnel significatif sur la vie quotidienne</li>
          </ul>
        </Card>
        
        <div className="bg-muted p-4 rounded-lg">
          <h4 className="font-medium mb-2">Important</h4>
          <p className="text-sm text-muted-foreground">
            Le diagnostic précoce est essentiel pour mettre en place une prise en charge adaptée et limiter l'impact des troubles sur le développement global de l'enfant.
          </p>
        </div>
      </>
    )
  },
  {
    id: "treatment",
    label: "Prise en charge",
    content: (
      <>
        <h3 className="text-xl font-semibold">Approches thérapeutiques</h3>
        <p className="text-muted-foreground mb-4">
          La prise en charge de la dysphasie est pluridisciplinaire et doit être précoce, intensive et prolongée. 
          Elle s'adapte aux besoins spécifiques de chaque personne.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <Card className="p-4 border-neuro-purple">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="h-5 w-5 text-neuro-purple" />
              <h4 className="font-medium">Rééducation orthophonique</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-2">Élément central de la prise en charge, elle vise à:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Développer les compétences langagières (vocabulaire, syntaxe, phonologie)</li>
              <li>Améliorer la compréhension verbale</li>
              <li>Renforcer les capacités de communication fonctionnelle</li>
              <li>Prévenir ou remédier aux difficultés d'apprentissage de la lecture et de l'écriture</li>
            </ul>
          </Card>
          
          <Card className="p-4 border-neuro-purple">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="h-5 w-5 text-neuro-purple" />
              <h4 className="font-medium">Adaptations scolaires</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-2">Essentielles pour favoriser la réussite éducative:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Plan d'accompagnement personnalisé (PAP) ou projet personnalisé de scolarisation (PPS)</li>
              <li>Aménagements pédagogiques (consignes simplifiées, temps supplémentaire)</li>
              <li>Outils de compensation (supports visuels, informatiques)</li>
              <li>Accompagnant d'élève en situation de handicap (AESH) si nécessaire</li>
            </ul>
          </Card>
        </div>
        
        <Card className="p-4 border-neuro-purple mb-4">
          <div className="flex items-center gap-2 mb-2">
            <HeartPulse className="h-5 w-5 text-neuro-purple" />
            <h4 className="font-medium">Approches complémentaires</h4>
          </div>
          <p className="text-sm text-muted-foreground mb-2">Selon les besoins spécifiques:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
            <li>Psychomotricité: pour les troubles associés de coordination</li>
            <li>Soutien psychologique: pour l'estime de soi et la gestion émotionnelle</li>
            <li>Méthodes alternatives de communication: pictogrammes, langue des signes</li>
            <li>Thérapie familiale: pour soutenir l'entourage</li>
          </ul>
        </Card>
        
        <div className="bg-muted p-4 rounded-lg">
          <h4 className="font-medium mb-2">Approche personnalisée</h4>
          <p className="text-sm text-muted-foreground">
            Chaque personne dysphasique présente un profil unique de forces et de difficultés. La prise en charge doit être individualisée et régulièrement ajustée en fonction de l'évolution et des besoins spécifiques.
          </p>
        </div>
      </>
    )
  },
  {
    id: "daily",
    label: "Vie quotidienne",
    content: (
      <>
        <h3 className="text-xl font-semibold">Vivre avec une dysphasie</h3>
        <p className="text-muted-foreground mb-4">
          La dysphasie est un trouble durable qui nécessite des adaptations tout au long de la vie, 
          mais de nombreuses stratégies peuvent aider à améliorer significativement la qualité de vie.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <Card className="p-4 border-neuro-purple">
            <div className="flex items-center gap-2 mb-2">
              <Users className="h-5 w-5 text-neuro-purple" />
              <h4 className="font-medium">Stratégies de communication</h4>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Parler lentement et clairement, avec des phrases simples</li>
              <li>Utiliser des supports visuels (images, gestes)</li>
              <li>Vérifier régulièrement la compréhension</li>
              <li>Laisser le temps nécessaire pour s'exprimer</li>
              <li>Éviter les environnements bruyants pour les conversations importantes</li>
            </ul>
          </Card>
          
          <Card className="p-4 border-neuro-purple">
            <div className="flex items-center gap-2 mb-2">
              <HeartPulse className="h-5 w-5 text-neuro-purple" />
              <h4 className="font-medium">Soutien familial et social</h4>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Informer l'entourage sur la nature du trouble</li>
              <li>Participer à des groupes de parole ou associations</li>
              <li>Valoriser les compétences et talents dans d'autres domaines</li>
              <li>Encourager l'autonomie tout en apportant le soutien nécessaire</li>
            </ul>
          </Card>
        </div>
        
        <Card className="p-4 border-neuro-purple mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Brain className="h-5 w-5 text-neuro-purple" />
            <h4 className="font-medium">Transition vers l'âge adulte</h4>
          </div>
          <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
            <li>Orientation professionnelle adaptée aux forces et intérêts</li>
            <li>Reconnaissance de la qualité de travailleur handicapé (RQTH) si nécessaire</li>
            <li>Aménagements dans le milieu professionnel</li>
            <li>Développement de l'autodétermination et de la défense de ses droits</li>
          </ul>
        </Card>
        
        <div className="bg-muted p-4 rounded-lg">
          <h4 className="font-medium mb-2">Témoignage</h4>
          <p className="text-sm text-muted-foreground italic">
            "Vivre avec une dysphasie, c'est parfois comme parler une langue étrangère dans son propre pays. Mais avec du soutien et des adaptations, j'ai appris à communiquer à ma façon et à développer mes talents dans d'autres domaines."
          </p>
          <p className="text-sm text-muted-foreground mt-2 text-right">- Léa, 25 ans</p>
        </div>
      </>
    )
  }
];

// Contenu de la sidebar
const sidebar = (
  <>
    <Card>
      <CardContent className="p-4">
        <h3 className="font-semibold mb-3">À retenir</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex gap-2">
            <div className="flex-shrink-0 h-5 w-5 rounded-full bg-neuro-purple flex items-center justify-center text-white font-medium">1</div>
            <p>La dysphasie est un trouble structurel et durable du langage oral</p>
          </li>
          <li className="flex gap-2">
            <div className="flex-shrink-0 h-5 w-5 rounded-full bg-neuro-purple flex items-center justify-center text-white font-medium">2</div>
            <p>Elle diffère d'un simple retard de langage par sa persistance et sa sévérité</p>
          </li>
          <li className="flex gap-2">
            <div className="flex-shrink-0 h-5 w-5 rounded-full bg-neuro-purple flex items-center justify-center text-white font-medium">3</div>
            <p>Une prise en charge précoce et multidisciplinaire est essentielle</p>
          </li>
          <li className="flex gap-2">
            <div className="flex-shrink-0 h-5 w-5 rounded-full bg-neuro-purple flex items-center justify-center text-white font-medium">4</div>
            <p>Des adaptations sont nécessaires à l'école et dans la vie quotidienne</p>
          </li>
          <li className="flex gap-2">
            <div className="flex-shrink-0 h-5 w-5 rounded-full bg-neuro-purple flex items-center justify-center text-white font-medium">5</div>
            <p>La dysphasie peut s'accompagner d'autres troubles neurodéveloppementaux</p>
          </li>
        </ul>
      </CardContent>
    </Card>
    
    <Card>
      <CardContent className="p-4">
        <h3 className="font-semibold mb-3">Comorbidités fréquentes</h3>
        <ul className="space-y-3 text-sm">
          <li className="flex items-start gap-2">
            <div className="flex-shrink-0 h-5 w-5 rounded-full bg-neuro-purple/20 flex items-center justify-center text-neuro-purple">
              <Users className="h-3 w-3" />
            </div>
            <p>La dysphasie est souvent associée à d'autres troubles:</p>
          </li>
          <li className="flex items-start gap-2">
            <div className="flex-shrink-0 h-5 w-5 rounded-full bg-neuro-purple/20 flex items-center justify-center text-neuro-purple">
              <BookOpen className="h-3 w-3" />
            </div>
            <p><strong>Dyslexie-dysorthographie</strong>: troubles spécifiques de l'apprentissage de la lecture et de l'écriture</p>
          </li>
          <li className="flex items-start gap-2">
            <div className="flex-shrink-0 h-5 w-5 rounded-full bg-neuro-purple/20 flex items-center justify-center text-neuro-purple">
              <Brain className="h-3 w-3" />
            </div>
            <p><strong>Troubles de l'attention</strong>: difficultés à maintenir l'attention et à filtrer les distractions</p>
          </li>
          <li className="flex items-start gap-2">
            <div className="flex-shrink-0 h-5 w-5 rounded-full bg-neuro-purple/20 flex items-center justify-center text-neuro-purple">
              <HeartPulse className="h-3 w-3" />
            </div>
            <p><strong>Troubles praxiques</strong>: difficultés de coordination et de planification des gestes</p>
          </li>
        </ul>
      </CardContent>
    </Card>
    
    <Card>
      <CardContent className="p-4">
        <h3 className="font-semibold mb-3">Tester vos connaissances</h3>
        <Button variant="outline" className="w-full" asChild>
          <Link to="/quiz/dysphasie">
            Quiz sur la dysphasie
          </Link>
        </Button>
      </CardContent>
    </Card>
    
    <Card>
      <CardContent className="p-4">
        <h3 className="font-semibold mb-3">Explorer d'autres troubles</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <Link to="/troubles/dyslexie" className="text-neuro-purple hover:underline">Dyslexie</Link>
          </li>
          <li>
            <Link to="/troubles/dyspraxie" className="text-neuro-purple hover:underline">Dyspraxie</Link>
          </li>
          <li>
            <Link to="/troubles/dyscalculie" className="text-neuro-purple hover:underline">Dyscalculie</Link>
          </li>
        </ul>
      </CardContent>
    </Card>
  </>
);

export const dysphasieData = {
  types,
  tabs,
  sidebar
};