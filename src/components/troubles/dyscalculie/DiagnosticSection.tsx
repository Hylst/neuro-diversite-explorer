import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Book, Lightbulb } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const DiagnosticSection = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-full bg-neuro-light-green">
              <Book className="h-6 w-6 text-white" />
            </div>
            <CardTitle>Diagnostic et évaluation</CardTitle>
          </div>
          <CardDescription>
            Processus d'identification de la dyscalculie
          </CardDescription>
          <Separator className="mt-4" />
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            Le diagnostic de la dyscalculie est un processus complexe qui nécessite l'intervention de professionnels spécialisés.
            Il repose sur une évaluation approfondie des compétences mathématiques et cognitives de la personne.
          </p>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Professionnels impliqués dans le diagnostic</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Évaluation initiale</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Médecin scolaire ou pédiatre</li>
                  <li>Psychologue scolaire</li>
                  <li>Enseignant spécialisé</li>
                  <li>Orthophoniste</li>
                </ul>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Diagnostic approfondi</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Neuropsychologue</li>
                  <li>Orthophoniste spécialisé</li>
                  <li>Neuropédiatre</li>
                  <li>Psychiatre de l'enfant et de l'adolescent</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Étapes du processus diagnostique</h3>
            <div className="space-y-4">
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">1. Repérage initial</h4>
                <p className="text-muted-foreground">
                  Généralement effectué par les parents ou les enseignants qui observent des difficultés persistantes
                  en mathématiques malgré un enseignement adapté et des capacités intellectuelles normales dans d'autres domaines.
                </p>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">2. Bilan médical</h4>
                <p className="text-muted-foreground">
                  Examen médical pour écarter d'autres causes possibles (problèmes sensoriels, neurologiques ou autres troubles
                  du développement) et recueillir les antécédents médicaux et familiaux.
                </p>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">3. Évaluation psychologique</h4>
                <p className="text-muted-foreground">
                  Évaluation du fonctionnement intellectuel global pour vérifier que les difficultés mathématiques
                  ne sont pas dues à un retard intellectuel général. Cette évaluation inclut souvent des tests de QI
                  et d'autres mesures des fonctions cognitives.
                </p>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">4. Évaluation spécifique des compétences mathématiques</h4>
                <p className="text-muted-foreground">
                  Tests standardisés évaluant diverses compétences mathématiques : numération, calcul, résolution de problèmes,
                  géométrie, etc. Ces tests permettent de comparer les performances de la personne à celles attendues pour son âge et son niveau scolaire.
                </p>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">5. Évaluation des fonctions cognitives associées</h4>
                <p className="text-muted-foreground">
                  Examen des fonctions cognitives qui peuvent influencer les apprentissages mathématiques : mémoire de travail,
                  attention, fonctions exécutives, capacités visuo-spatiales, langage, etc.
                </p>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">6. Analyse du parcours scolaire</h4>
                <p className="text-muted-foreground">
                  Étude du dossier scolaire, des bulletins, des observations des enseignants et des interventions
                  pédagogiques déjà mises en place pour déterminer l'évolution des difficultés dans le temps.
                </p>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">7. Synthèse et diagnostic</h4>
                <p className="text-muted-foreground">
                  Intégration de toutes les informations recueillies pour établir un diagnostic différentiel
                  et déterminer si les critères de la dyscalculie sont remplis.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Outils d'évaluation standardisés</h3>
            <div className="bg-secondary p-4 rounded-lg mb-4">
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li><strong>ZAREKI-R</strong> : Batterie pour l'évaluation du traitement des nombres et du calcul chez l'enfant</li>
                <li><strong>TEDI-MATH</strong> : Test diagnostique des compétences de base en mathématiques</li>
                <li><strong>UDN-II</strong> : Utilisation du nombre</li>
                <li><strong>ECPN</strong> : Épreuve conceptuelle de résolution des problèmes numériques</li>
                <li><strong>NUMÉRICAL</strong> : Bilan des activités numériques et du calcul</li>
                <li><strong>ODÉDYS</strong> : Outil de dépistage des dyslexies (inclut une section sur les compétences numériques)</li>
                <li><strong>BELO</strong> : Batterie d'évaluation de lecture et d'orthographe (pour évaluer les comorbidités)</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Critères diagnostiques</h3>
            <div className="bg-secondary p-4 rounded-lg mb-4">
              <p className="text-muted-foreground mb-3">
                Selon les classifications internationales (DSM-5, CIM-11), le diagnostic de dyscalculie ou "trouble spécifique des apprentissages avec déficit du calcul" repose sur plusieurs critères :
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Difficultés persistantes dans l'apprentissage et l'utilisation des mathématiques depuis au moins 6 mois malgré des interventions ciblées</li>
                <li>Compétences mathématiques nettement en-dessous de celles attendues pour l'âge chronologique</li>
                <li>Difficultés non expliquées par un trouble du développement intellectuel, des troubles sensoriels, des troubles neurologiques, un manque d'instruction ou des facteurs psychosociaux</li>
                <li>Impact significatif sur la réussite scolaire, professionnelle ou les activités de la vie quotidienne</li>
                <li>Début des difficultés durant la période scolaire (même si elles peuvent ne devenir pleinement manifestes que plus tard)</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Diagnostic différentiel</h3>
            <div className="bg-secondary p-4 rounded-lg mb-4">
              <p className="text-muted-foreground mb-3">
                Il est important de distinguer la dyscalculie d'autres conditions qui peuvent affecter les performances mathématiques :
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li><strong>Déficience intellectuelle</strong> : Difficultés généralisées dans tous les domaines d'apprentissage</li>
                <li><strong>Troubles sensoriels</strong> : Déficits visuels ou auditifs non corrigés</li>
                <li><strong>Troubles attentionnels</strong> : TDAH pouvant affecter les performances en mathématiques</li>
                <li><strong>Troubles anxieux</strong> : Anxiété mathématique sans trouble spécifique d'apprentissage</li>
                <li><strong>Scolarisation inadéquate</strong> : Instruction insuffisante ou inappropriée</li>
                <li><strong>Facteurs environnementaux</strong> : Stress chronique, traumatismes, milieu défavorisé</li>
                <li><strong>Troubles neurologiques acquis</strong> : Lésions cérébrales affectant les capacités numériques</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Comorbidités à évaluer</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Troubles neurodéveloppementaux</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Dyslexie</li>
                  <li>Trouble du déficit de l'attention avec ou sans hyperactivité (TDAH)</li>
                  <li>Dyspraxie (trouble développemental de la coordination)</li>
                  <li>Trouble du spectre de l'autisme</li>
                </ul>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Troubles psychologiques</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Anxiété mathématique</li>
                  <li>Troubles anxieux généralisés</li>
                  <li>Dépression</li>
                  <li>Faible estime de soi</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-neuro-light-green/10 p-4 rounded-lg border border-neuro-green/20">
            <div className="flex items-start">
              <Lightbulb className="h-6 w-6 text-neuro-green mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium mb-2 text-neuro-green">Important à savoir</h4>
                <p className="text-muted-foreground">
                  Le diagnostic de dyscalculie ne doit pas être posé à la légère. Il nécessite une évaluation complète
                  par des professionnels qualifiés. Un diagnostic précis est essentiel pour mettre en place des interventions
                  adaptées et obtenir des aménagements scolaires ou professionnels appropriés. Si vous soupçonnez une dyscalculie,
                  consultez d'abord un médecin qui pourra vous orienter vers les spécialistes adéquats.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Parcours diagnostique en France</h3>
            <div className="space-y-4">
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Première ligne</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Consultation avec le médecin traitant ou pédiatre</li>
                  <li>Évaluation par le psychologue scolaire ou le médecin scolaire</li>
                  <li>Bilan initial par un orthophoniste en libéral</li>
                </ul>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Deuxième ligne</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Centres de référence des troubles d'apprentissage (CRTLA)</li>
                  <li>Centres médico-psycho-pédagogiques (CMPP)</li>
                  <li>Réseaux de santé dédiés aux troubles des apprentissages</li>
                </ul>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-medium mb-2">Troisième ligne</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Centres de référence des troubles du langage et des apprentissages (CRTLA)</li>
                  <li>Services hospitaliers spécialisés en neuropédiatrie</li>
                  <li>Consultations spécialisées en neuropsychologie</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Après le diagnostic</h3>
            <div className="bg-secondary p-4 rounded-lg">
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Élaboration d'un projet personnalisé de scolarisation (PPS) ou d'un plan d'accompagnement personnalisé (PAP)</li>
                <li>Mise en place de rééducations spécifiques (orthophonie, neuropsychologie)</li>
                <li>Information et formation des parents et des enseignants</li>
                <li>Aménagements scolaires ou professionnels adaptés</li>
                <li>Suivi régulier pour ajuster les interventions selon l'évolution</li>
                <li>Soutien psychologique si nécessaire</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DiagnosticSection;