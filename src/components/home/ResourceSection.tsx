import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Users, BookText, Lightbulb, CheckSquare, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';

const resources = [
  {
    category: 'guides',
    items: [
      {
        title: 'Guide des démarches administratives',
        description: 'Comment obtenir des aménagements scolaires et professionnels',
        icon: <FileText className="h-5 w-5" />,
        link: '/ressources/guide-administratif'
      },
      {
        title: 'Stratégies d\'apprentissage adaptées',
        description: 'Techniques efficaces pour chaque trouble',
        icon: <Lightbulb className="h-5 w-5" />,
        link: '/ressources/strategies-apprentissage'
      },
      {
        title: 'Communication avec les professionnels',
        description: 'Dialoguer efficacement avec enseignants et médecins',
        icon: <Users className="h-5 w-5" />,
        link: '/ressources/communication'
      }
    ]
  },
  {
    category: 'outils',
    items: [
      {
        title: 'Applications recommandées',
        description: 'Sélection d\'apps pour l\'organisation et l\'apprentissage',
        icon: <BookText className="h-5 w-5" />,
        link: '/ressources/applications'
      },
      {
        title: 'Plannings et checklists',
        description: 'Modèles téléchargeables et personnalisables',
        icon: <CheckSquare className="h-5 w-5" />,
        link: '/ressources/plannings'
      },
      {
        title: 'Kits pédagogiques',
        description: 'Matériel éducatif pour enseignants et parents',
        icon: <Package className="h-5 w-5" />,
        link: '/ressources/kits'
      }
    ]
  }
];

const ResourceSection = () => {
  return (
    <section className="py-12">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Ressources pratiques</h2>
          <p className="text-muted-foreground mt-2">
            Outils, guides et documents pour faciliter le quotidien
          </p>
        </div>
        
        <Tabs defaultValue="guides" className="w-full">
          <div className="flex flex-col items-center mb-8">
            <TabsList className="mb-4">
              <TabsTrigger value="guides">Guides pratiques</TabsTrigger>
              <TabsTrigger value="outils">Outils & Templates</TabsTrigger>
            </TabsList>
            <p className="text-muted-foreground text-center max-w-2xl">
              Sélectionnez une catégorie pour découvrir nos ressources spécialement conçues pour accompagner les personnes neurodivergentes et leurs proches.
            </p>
          </div>
          
          <TabsContent value="guides" className="mt-0">
            <div className="mb-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Guides pratiques pour le quotidien</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">Des ressources complètes pour vous aider à naviguer les défis quotidiens liés à la neurodiversité.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {resources.find(r => r.category === 'guides')?.items.map((resource, index) => (
                <motion.div
                  key={index}
                  className="neuro-card-interactive"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex flex-col h-full p-5 border rounded-lg hover:shadow-md transition-shadow duration-300">
                    <div className="rounded-full bg-secondary p-3 w-fit">
                      <div className="text-neuro-purple">
                        {resource.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold mt-4">{resource.title}</h3>
                    <p className="text-muted-foreground mt-2 flex-1">
                      {resource.description}
                    </p>
                    
                    <Button 
                      variant="outline" 
                      className="mt-4 w-full"
                      asChild
                    >
                      <Link to={resource.link}>
                        Consulter
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="outils" className="mt-0">
            <div className="mb-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Outils et modèles pratiques</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">Des outils concrets et des modèles personnalisables pour faciliter l'organisation et l'apprentissage.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {resources.find(r => r.category === 'outils')?.items.map((resource, index) => (
                <motion.div
                  key={index}
                  className="neuro-card-interactive"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex flex-col h-full p-5 border rounded-lg hover:shadow-md transition-shadow duration-300">
                    <div className="rounded-full bg-secondary p-3 w-fit">
                      <div className="text-neuro-purple">
                        {resource.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold mt-4">{resource.title}</h3>
                    <p className="text-muted-foreground mt-2 flex-1">
                      {resource.description}
                    </p>
                    
                    <Button 
                      variant="outline" 
                      className="mt-4 w-full"
                      asChild
                    >
                      <Link to={resource.link}>
                        Consulter
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-10 text-center">
          <Button size="lg" asChild>
            <Link to="/ressources">
              Toutes les ressources
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResourceSection;
