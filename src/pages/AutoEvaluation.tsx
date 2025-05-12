
import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { AlertCircle, Info, HelpCircle, ExternalLink, Bookmark, FileText, Brain, ThumbsUp, ArrowUpToLine } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useLocation, useNavigate } from 'react-router-dom';
import DyslexieAssessment from '@/components/evaluation/DyslexieAssessment';
import TDAHAssessment from '@/components/evaluation/TDAHAssessment';
import AutismeAssessment from '@/components/evaluation/AutismeAssessment';
import DyspraxieAssessment from '@/components/evaluation/DyspraxieAssessment';
import DyscalculieAssessment from '@/components/evaluation/DyscalculieAssessment';

const AutoEvaluation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('tdah');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Set the active tab based on URL parameters
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tabParam = queryParams.get('tab');
    if (tabParam && ['tdah', 'autisme', 'dyslexie', 'dyspraxie', 'dyscalculie'].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [location]);

  // Detect scroll position to show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Update the URL when the tab changes and scroll to top
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    navigate(`/auto-evaluation?tab=${value}`, { replace: true });
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Define structured resources for more info
  const resources = {
    tdah: [
      { name: "HAS - Recommandations sur le TDAH", url: "https://www.has-sante.fr/jcms/c_2012647/fr/trouble-deficit-de-l-attention-avec-ou-sans-hyperactivite-tdah-reperer-la-souffrance-accompagner-l-enfant-et-la-famille" },
      { name: "TDAH France", url: "https://www.tdah-france.fr/" },
      { name: "Centre de référence des troubles des apprentissages", url: "http://www.centrereference-mnd.fr/fr/le-reseau-national-des-centres.html" },
      { name: "Guide pratique du TDAH chez l'adulte", url: "https://www.has-sante.fr/upload/docs/application/pdf/2023-03/guidance_2023_tdah_de_ladulte_mel.pdf" },
      { name: "Webinaires et conférences sur le TDAH", url: "https://www.tdah-france.fr/-CONFERENCES-.html" }
    ],
    autisme: [
      { name: "Autisme Info Service", url: "https://autisme-info.fr/" },
      { name: "Groupement National des Centres de Ressources Autisme", url: "https://gncra.fr/" },
      { name: "Délégation interministérielle à la stratégie nationale pour l'autisme", url: "https://handicap.gouv.fr/autisme-et-troubles-du-neuro-developpement" },
      { name: "Aspie-Friendly (autisme et études supérieures)", url: "https://aspie-friendly.fr/" },
      { name: "CRA - Centres Ressources Autisme", url: "https://gncra.fr/les-cra/" }
    ],
    dyslexie: [
      { name: "Fédération Française des DYS", url: "https://www.ffdys.com/" },
      { name: "APEDA-France", url: "https://www.apeda-france.com/" },
      { name: "INSERM - Dossier sur la dyslexie", url: "https://www.inserm.fr/dossier/dyslexie/" },
      { name: "ANAPEDYS - Association nationale d'associations d'adultes et de parents d'enfants dys", url: "https://www.anapedys.org/" },
      { name: "Plateforme de rééducation en ligne DYS", url: "https://www.cognibulle.com/" }
    ],
    dyspraxie: [
      { name: "Dyspraxie France Dys", url: "https://www.dyspraxies.fr/" },
      { name: "HAS - Troubles DYS", url: "https://www.has-sante.fr/jcms/c_2824177/fr/comment-ameliorer-le-parcours-de-sante-d-un-enfant-avec-troubles-specifiques-du-langage-et-des-apprentissages" },
      { name: "DMF - Dyspraxie Motrice Fonctionnelle", url: "https://www.dyspraxies.fr/la-dyspraxie/les-amenagements/" },
      { name: "Cartable Fantastique - Ressources pour la dyspraxie", url: "https://www.cartablefantastique.fr/" }
    ],
    dyscalculie: [
      { name: "ANAE - Approche Neuropsychologique des Apprentissages chez l'Enfant", url: "https://www.anae-revue.com/" },
      { name: "Dyscalculie - Ressources et Information", url: "https://www.dyscalculie.fr/" },
      { name: "Coccinelle - Outils pour les dyscalculiques", url: "https://www.dys-positif.fr/la-dyscalculie-trouble-specifique-des-apprentissages-en-mathematiques/" },
      { name: "Académie de Paris - Guides pour enseignants", url: "https://www.ac-paris.fr/dyscalculie-121889" }
    ]
  };

  // Additional information about assessments
  const assessmentInfo = {
    tdah: {
      title: "Test ASRS de dépistage du TDAH",
      description: "Ce questionnaire est basé sur l'échelle d'auto-évaluation du TDAH chez l'adulte (ASRS-v1.1), développée par l'Organisation Mondiale de la Santé.",
      reliability: "Haute sensibilité et spécificité pour détecter les traits du TDAH chez l'adulte.",
      targetPopulation: "Adultes et adolescents de plus de 16 ans",
      duration: "5-10 minutes",
      references: "Kessler RC, et al. (2005). The World Health Organization Adult ADHD Self-Report Scale (ASRS)."
    },
    autisme: {
      title: "Test AQ-10 de dépistage des traits autistiques",
      description: "Version abrégée du Quotient Autistique (AQ) développé par Simon Baron-Cohen et son équipe à l'Université de Cambridge.",
      reliability: "Bonne fiabilité pour identifier les traits autistiques, avec une sensibilité de 0.88 et une spécificité de 0.91.",
      targetPopulation: "Adultes et adolescents à partir de 16 ans",
      duration: "5 minutes",
      references: "Allison C, Auyeung B, Baron-Cohen S. (2012). Journal of the American Academy of Child and Adolescent Psychiatry."
    },
    dyslexie: {
      title: "Auto-évaluation des difficultés de lecture",
      description: "Ce questionnaire est inspiré des critères de dépistage de la dyslexie chez l'adulte.",
      reliability: "Outil de dépistage préliminaire avec une bonne corrélation aux évaluations formelles.",
      targetPopulation: "Adolescents et adultes",
      duration: "5-8 minutes",
      references: "International Dyslexia Association (IDA), BDA Adult Checklist."
    },
    dyspraxie: {
      title: "Dépistage du Trouble Développemental de la Coordination",
      description: "Basé sur le questionnaire ADC (Adult Developmental Coordination Disorder Checklist).",
      reliability: "Valeur prédictive positive de 86% pour identifier les troubles de la coordination.",
      targetPopulation: "Adultes et adolescents",
      duration: "5-8 minutes",
      references: "Kirby A, et al. (2010). Research in Developmental Disabilities."
    },
    dyscalculie: {
      title: "Auto-évaluation des difficultés mathématiques",
      description: "Inspiré des critères diagnostiques de la dyscalculie développementale.",
      reliability: "Corrélation significative avec les évaluations mathématiques formelles.",
      targetPopulation: "Adolescents et adultes",
      duration: "5-8 minutes",
      references: "Butterworth B. (2003). Dyscalculia Screener. NFER Nelson."
    }
  };

  // Additional help resources
  const generalResources = [
    { 
      title: "Trouver un professionnel", 
      description: "Annuaires de spécialistes en neuropsychologie, orthophonie et ergothérapie",
      icon: Brain,
      links: [
        { name: "Annuaire des neuropsychologues", url: "https://www.ofpn.fr/annuaire/" },
        { name: "Fédération Nationale des Orthophonistes", url: "https://www.fno.fr/trouver-un-orthophoniste/" },
        { name: "ANFE - Ergothérapeutes", url: "https://www.anfe.fr/annuaire/" }
      ]
    },
    { 
      title: "Documentations et guides pratiques", 
      description: "Publications officielles et guides de référence",
      icon: FileText,
      links: [
        { name: "Guides HAS sur les troubles neurodéveloppementaux", url: "https://www.has-sante.fr/jcms/c_2831348/fr/reperage-des-troubles-du-neurodeveloppement-tnd-chez-les-enfants" },
        { name: "Plateforme TND", url: "https://handicap.gouv.fr/autisme-et-troubles-du-neuro-developpement/comprendre-les-tnd" },
        { name: "Dossiers pédagogiques INSHEA", url: "https://www.inshea.fr/fr/content/ressources" }
      ]
    },
    { 
      title: "Démarches administratives", 
      description: "Information sur les droits et les démarches pour obtenir des aides",
      icon: ThumbsUp,
      links: [
        { name: "MDPH - Demande de reconnaissance", url: "https://www.cnsa.fr/outils-methodes-et-territoires/mdph-et-departements/les-mdph/liste-des-mdph" },
        { name: "Guide des aménagements scolaires", url: "https://www.service-public.fr/particuliers/vosdroits/F2777" },
        { name: "Aménagements en milieu professionnel", url: "https://www.agefiph.fr/" }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="bg-muted py-12 md:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="neuro-gradient-text">Auto-évaluation</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Explorez des outils d'auto-évaluation scientifiquement validés pour mieux comprendre vos traits neurodivergents potentiels
              </p>
            </div>
          </div>
        </div>

        <div className="container py-12">
          <Alert className="mb-8">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Important</AlertTitle>
            <AlertDescription>
              Ces questionnaires sont des outils d'auto-évaluation et ne remplacent pas un diagnostic professionnel. 
              Ils peuvent vous aider à identifier des traits potentiels, mais seul un spécialiste peut établir un diagnostic formel.
            </AlertDescription>
          </Alert>
          
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-4xl grid-cols-5">
                <TabsTrigger value="tdah">TDAH</TabsTrigger>
                <TabsTrigger value="autisme">Autisme</TabsTrigger>
                <TabsTrigger value="dyslexie">Dyslexie</TabsTrigger>
                <TabsTrigger value="dyspraxie">Dyspraxie</TabsTrigger>
                <TabsTrigger value="dyscalculie">Dyscalculie</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="tdah">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="max-w-3xl mx-auto mb-8">
                  <CardHeader>
                    <CardTitle>{assessmentInfo.tdah.title}</CardTitle>
                    <CardDescription>{assessmentInfo.tdah.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-secondary/50 p-3 rounded-lg">
                        <h4 className="font-medium text-sm mb-1">Population cible</h4>
                        <p className="text-sm text-muted-foreground">{assessmentInfo.tdah.targetPopulation}</p>
                      </div>
                      <div className="bg-secondary/50 p-3 rounded-lg">
                        <h4 className="font-medium text-sm mb-1">Durée approximative</h4>
                        <p className="text-sm text-muted-foreground">{assessmentInfo.tdah.duration}</p>
                      </div>
                      <div className="bg-secondary/50 p-3 rounded-lg">
                        <h4 className="font-medium text-sm mb-1">Fiabilité</h4>
                        <p className="text-sm text-muted-foreground">{assessmentInfo.tdah.reliability}</p>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-2">
                      Référence: {assessmentInfo.tdah.references}
                    </div>
                  </CardContent>
                </Card>
                
                <TDAHAssessment />
                
                <div className="max-w-3xl mx-auto mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Ressources complémentaires sur le TDAH</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {resources.tdah.map((resource, i) => (
                          <a 
                            key={i} 
                            href={resource.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-between w-full p-3 bg-secondary rounded-md hover:bg-secondary/80 transition-colors"
                          >
                            <span>{resource.name}</span>
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="autisme">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="max-w-3xl mx-auto mb-8">
                  <CardHeader>
                    <CardTitle>{assessmentInfo.autisme.title}</CardTitle>
                    <CardDescription>{assessmentInfo.autisme.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-secondary/50 p-3 rounded-lg">
                        <h4 className="font-medium text-sm mb-1">Population cible</h4>
                        <p className="text-sm text-muted-foreground">{assessmentInfo.autisme.targetPopulation}</p>
                      </div>
                      <div className="bg-secondary/50 p-3 rounded-lg">
                        <h4 className="font-medium text-sm mb-1">Durée approximative</h4>
                        <p className="text-sm text-muted-foreground">{assessmentInfo.autisme.duration}</p>
                      </div>
                      <div className="bg-secondary/50 p-3 rounded-lg">
                        <h4 className="font-medium text-sm mb-1">Fiabilité</h4>
                        <p className="text-sm text-muted-foreground">{assessmentInfo.autisme.reliability}</p>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-2">
                      Référence: {assessmentInfo.autisme.references}
                    </div>
                  </CardContent>
                </Card>
                
                <AutismeAssessment />
                
                <div className="max-w-3xl mx-auto mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Ressources complémentaires sur l'autisme</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {resources.autisme.map((resource, i) => (
                          <a 
                            key={i} 
                            href={resource.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-between w-full p-3 bg-secondary rounded-md hover:bg-secondary/80 transition-colors"
                          >
                            <span>{resource.name}</span>
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="dyslexie">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="max-w-3xl mx-auto mb-8">
                  <CardHeader>
                    <CardTitle>{assessmentInfo.dyslexie.title}</CardTitle>
                    <CardDescription>{assessmentInfo.dyslexie.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-secondary/50 p-3 rounded-lg">
                        <h4 className="font-medium text-sm mb-1">Population cible</h4>
                        <p className="text-sm text-muted-foreground">{assessmentInfo.dyslexie.targetPopulation}</p>
                      </div>
                      <div className="bg-secondary/50 p-3 rounded-lg">
                        <h4 className="font-medium text-sm mb-1">Durée approximative</h4>
                        <p className="text-sm text-muted-foreground">{assessmentInfo.dyslexie.duration}</p>
                      </div>
                      <div className="bg-secondary/50 p-3 rounded-lg">
                        <h4 className="font-medium text-sm mb-1">Fiabilité</h4>
                        <p className="text-sm text-muted-foreground">{assessmentInfo.dyslexie.reliability}</p>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-2">
                      Référence: {assessmentInfo.dyslexie.references}
                    </div>
                  </CardContent>
                </Card>
                
                <DyslexieAssessment />
                
                <div className="max-w-3xl mx-auto mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Ressources complémentaires sur la dyslexie</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {resources.dyslexie.map((resource, i) => (
                          <a 
                            key={i} 
                            href={resource.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-between w-full p-3 bg-secondary rounded-md hover:bg-secondary/80 transition-colors"
                          >
                            <span>{resource.name}</span>
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="dyspraxie">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="max-w-3xl mx-auto mb-8">
                  <CardHeader>
                    <CardTitle>{assessmentInfo.dyspraxie.title}</CardTitle>
                    <CardDescription>{assessmentInfo.dyspraxie.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-secondary/50 p-3 rounded-lg">
                        <h4 className="font-medium text-sm mb-1">Population cible</h4>
                        <p className="text-sm text-muted-foreground">{assessmentInfo.dyspraxie.targetPopulation}</p>
                      </div>
                      <div className="bg-secondary/50 p-3 rounded-lg">
                        <h4 className="font-medium text-sm mb-1">Durée approximative</h4>
                        <p className="text-sm text-muted-foreground">{assessmentInfo.dyspraxie.duration}</p>
                      </div>
                      <div className="bg-secondary/50 p-3 rounded-lg">
                        <h4 className="font-medium text-sm mb-1">Fiabilité</h4>
                        <p className="text-sm text-muted-foreground">{assessmentInfo.dyspraxie.reliability}</p>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-2">
                      Référence: {assessmentInfo.dyspraxie.references}
                    </div>
                  </CardContent>
                </Card>
                
                <DyspraxieAssessment />
                
                <div className="max-w-3xl mx-auto mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Ressources complémentaires sur la dyspraxie</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {resources.dyspraxie.map((resource, i) => (
                          <a 
                            key={i} 
                            href={resource.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-between w-full p-3 bg-secondary rounded-md hover:bg-secondary/80 transition-colors"
                          >
                            <span>{resource.name}</span>
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="dyscalculie">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="max-w-3xl mx-auto mb-8">
                  <CardHeader>
                    <CardTitle>{assessmentInfo.dyscalculie.title}</CardTitle>
                    <CardDescription>{assessmentInfo.dyscalculie.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-secondary/50 p-3 rounded-lg">
                        <h4 className="font-medium text-sm mb-1">Population cible</h4>
                        <p className="text-sm text-muted-foreground">{assessmentInfo.dyscalculie.targetPopulation}</p>
                      </div>
                      <div className="bg-secondary/50 p-3 rounded-lg">
                        <h4 className="font-medium text-sm mb-1">Durée approximative</h4>
                        <p className="text-sm text-muted-foreground">{assessmentInfo.dyscalculie.duration}</p>
                      </div>
                      <div className="bg-secondary/50 p-3 rounded-lg">
                        <h4 className="font-medium text-sm mb-1">Fiabilité</h4>
                        <p className="text-sm text-muted-foreground">{assessmentInfo.dyscalculie.reliability}</p>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-2">
                      Référence: {assessmentInfo.dyscalculie.references}
                    </div>
                  </CardContent>
                </Card>
                
                <DyscalculieAssessment />
                
                <div className="max-w-3xl mx-auto mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Ressources complémentaires sur la dyscalculie</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {resources.dyscalculie.map((resource, i) => (
                          <a 
                            key={i} 
                            href={resource.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-between w-full p-3 bg-secondary rounded-md hover:bg-secondary/80 transition-colors"
                          >
                            <span>{resource.name}</span>
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
          
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Ressources générales d'aide et de soutien</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {generalResources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <resource.icon className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                      </div>
                      <CardDescription>{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {resource.links.map((link, i) => (
                          <a 
                            key={i} 
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-between w-full p-2 text-sm bg-secondary/50 rounded-md hover:bg-secondary transition-colors"
                          >
                            <span>{link.name}</span>
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Autres questionnaires à venir</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Trouble de la communication sociale", 
                "Hyperacousie", 
                "Syndrome des jambes sans repos", 
                "Misophonie", 
                "Prosopagnosie (trouble de la reconnaissance des visages)",
                "Synesthésie"
              ].map((disorder, index) => (
                <motion.div
                  key={disorder}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">{disorder}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Un questionnaire d'auto-évaluation pour {disorder.toLowerCase()} sera bientôt disponible.
                      </p>
                      <Button variant="outline" disabled className="w-full">
                        Prochainement <Bookmark className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>      
      {/* Scroll to top button */}
      {showScrollTop && (
        <Button
          variant="secondary"
          size="icon"
          className="fixed bottom-6 right-6 z-50 rounded-full shadow-md"
          onClick={scrollToTop}
          aria-label="Retourner en haut"
        >
          <ArrowUpToLine className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export default AutoEvaluation;
