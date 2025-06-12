import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import DocumentsSection from './DocumentsSection';
import ArticlesSection from './ArticlesSection';
import MediaSection from './MediaSection';
import ToolsSection from './ToolsSection';
import OnlineSection from './OnlineSection';
import { resourcesData, authorInfo } from './data';
import { PaginationState } from './types';

const ResourcesMain: React.FC = () => {
  // État pour suivre la pagination
  const [currentPage, setCurrentPage] = useState<PaginationState>({
    documents: 1,
    articles: 1,
    media: 1,
    tools: 1,
    online: 1
  });
  
  // Nombre d'éléments par page pour pagination
  const ITEMS_PER_PAGE = 6;

  // Gestionnaires de changement de page pour chaque section
  const handleDocumentsPageChange = (page: number) => {
    setCurrentPage(prev => ({ ...prev, documents: page }));
  };

  const handleArticlesPageChange = (page: number) => {
    setCurrentPage(prev => ({ ...prev, articles: page }));
  };

  const handleMediaPageChange = (page: number) => {
    setCurrentPage(prev => ({ ...prev, media: page }));
  };

  const handleToolsPageChange = (page: number) => {
    setCurrentPage(prev => ({ ...prev, tools: page }));
  };

  const handleOnlinePageChange = (page: number) => {
    setCurrentPage(prev => ({ ...prev, online: page }));
  };

  return (
    <>
      <div className="bg-muted py-12 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="neuro-gradient-text">Ressources</span> et documentation
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Documents, articles scientifiques, outils, médias et liens vers des ressources en ligne pour mieux comprendre et accompagner la neurodiversité
            </p>
          </div>
        </div>
      </div>
      <div className="container py-8 px-4">

      <Tabs defaultValue="documents" className="w-full">
        <TabsList className="grid w-full grid-cols-5 mb-8">
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="articles">Articles</TabsTrigger>
          <TabsTrigger value="media">Médias</TabsTrigger>
          <TabsTrigger value="tools">Apps</TabsTrigger>
          <TabsTrigger value="online">En ligne</TabsTrigger>
        </TabsList>

        <TabsContent value="documents" className="mt-6">
          <DocumentsSection 
            documents={resourcesData.documents} 
            currentPage={currentPage.documents} 
            itemsPerPage={ITEMS_PER_PAGE} 
            onPageChange={handleDocumentsPageChange} 
          />
        </TabsContent>

        <TabsContent value="articles" className="mt-6">
          <ArticlesSection 
            articles={resourcesData.articles} 
            currentPage={currentPage.articles} 
            itemsPerPage={ITEMS_PER_PAGE} 
            onPageChange={handleArticlesPageChange} 
          />
        </TabsContent>

        <TabsContent value="media" className="mt-6">
          <MediaSection 
            media={resourcesData.media} 
            currentPage={currentPage.media} 
            itemsPerPage={ITEMS_PER_PAGE} 
            onPageChange={handleMediaPageChange} 
          />
        </TabsContent>

        <TabsContent value="tools" className="mt-6">
          <ToolsSection 
            tools={resourcesData.tools} 
            currentPage={currentPage.tools} 
            itemsPerPage={ITEMS_PER_PAGE} 
            onPageChange={handleToolsPageChange} 
          />
        </TabsContent>

        <TabsContent value="online" className="mt-6">
          <OnlineSection 
            resources={resourcesData.online} 
            currentPage={currentPage.online} 
            itemsPerPage={ITEMS_PER_PAGE} 
            onPageChange={handleOnlinePageChange} 
          />
        </TabsContent>
      </Tabs>

      <div className="mt-16 text-center text-sm text-muted-foreground">
        <p>Dernière mise à jour : {authorInfo.lastUpdate}</p>
        <p className="mt-1">
          {authorInfo.name} - <a href={`mailto:${authorInfo.email}`} className="hover:underline">{authorInfo.email}</a> - 
          <a href={authorInfo.website} target="_blank" rel="noopener noreferrer" className="hover:underline">{authorInfo.website}</a>
        </p>
        <p className="mt-4">
          Ces ressources sont mises à jour régulièrement. Pour proposer l'ajout d'une ressource ou signaler un lien obsolète, merci de nous contacter par email.
        </p>
      </div>
    </div>
    </>
  );
};

export default ResourcesMain;